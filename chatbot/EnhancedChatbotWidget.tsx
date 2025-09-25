import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, MessageSquare, Send, Bot } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from '@/components/chatbot/types';
import { enhancedOmniResponseEngine } from '@/components/chatbot/EnhancedOmniResponseEngine';
import { useChatbotActions } from '@/components/chatbot/ChatbotActionHandler';
import ChatbotLeadCaptureModal from '@/components/chatbot/ChatbotLeadCaptureModal';
const EnhancedChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadActionType, setLeadActionType] = useState<'consultation' | 'support' | 'strategy' | 'demo' | 'general'>('general');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { executeAction } = useChatbotActions();

  // Listen for lead capture events
  useEffect(() => {
    const handleLeadCapture = (event: CustomEvent) => {
      setLeadActionType(event.detail.actionType);
      setLeadModalOpen(true);
    };

    window.addEventListener('openLeadCapture', handleLeadCapture as EventListener);
    return () => window.removeEventListener('openLeadCapture', handleLeadCapture as EventListener);
  }, []);

  const handleLeadSubmit = (data: any) => {
    console.log('Lead captured:', data);
    // Here you would typically send the data to your backend
    setLeadModalOpen(false);
    
    // Add confirmation message to chat
    const confirmationMessage: ChatMessage = {
      id: `confirmation-${Date.now()}`,
      text: `✅ Thank you ${data.name}! Your ${data.actionType} request has been submitted. Our team will contact you within 24 hours at ${data.email}.`,
      isUser: false,
      timestamp: new Date(),
      buttons: [
        { text: '📋 Browse More Services', action: 'services', variant: 'primary' },
        { text: '💬 Continue Chat', action: 'continue', variant: 'secondary' }
      ]
    };
    setMessages(prev => [...prev, confirmationMessage]);
  };
  const getContextualWelcome = (pathname: string): ChatMessage => {
    let welcomeText = "👋 Hi! I'm Omni, your AI assistant for OmniSolve Tech. I provide answers strictly from our official knowledge base about our services, pricing, and processes. What would you like to know?";
    
    if (pathname.includes('business-diagnostics')) {
      welcomeText = "🔍 Welcome to Business Diagnostics! I can answer questions about our diagnostic process, deliverables, and how we identify growth opportunities for your business.";
    } else if (pathname.includes('business-marketing')) {
      welcomeText = "📈 Interested in our marketing solutions? I can provide detailed information about our digital marketing strategies and growth solutions from our knowledge base.";
    } else if (pathname.includes('ai-solutions')) {
      welcomeText = "🤖 Exploring AI solutions? I can share specific information about our AI/ML services, benefits, and implementation process based on our official documentation.";
    }

    return {
      id: `welcome-${Date.now()}`,
      text: welcomeText,
      isUser: false,
      timestamp: new Date(),
      buttons: [
        { text: '📋 View Services', action: 'services', variant: 'primary' },
        { text: '💰 Pricing Info', action: 'pricing', variant: 'secondary' },
        { text: '📞 Contact Us', action: 'contact', variant: 'secondary' }
      ]
    };
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'end'
        });
      }
      if (scrollAreaRef.current) {
        const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollContainer) {
          scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
      }
    }, 100);
  };

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([getContextualWelcome(location.pathname)]);
    }
  }, [location.pathname, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    // Add user message to engine history
    enhancedOmniResponseEngine.addToHistory(userMessage);

    setTimeout(() => {
      try {
        const responseText = enhancedOmniResponseEngine.generateResponse(currentInput);
        const botResponse: ChatMessage = {
          id: `bot-${Date.now()}`,
          text: responseText,
          isUser: false,
          timestamp: new Date(),
          buttons: [
            { text: '📞 Book Consultation', action: 'book_call', variant: 'primary' },
            { text: '📧 Contact Support', action: 'send_email', variant: 'secondary' },
            { text: '🔍 Ask Another Question', action: 'continue', variant: 'secondary' }
          ]
        };
        
        // Add bot response to engine history
        enhancedOmniResponseEngine.addToHistory(botResponse);
        setMessages(prev => [...prev, botResponse]);
      } catch (error) {
        console.error('Enhanced Omni Response Error:', error);
        const errorResponse: ChatMessage = {
          id: `error-${Date.now()}`,
          text: "I apologize, but I'm having trouble accessing our knowledge base right now. Please contact support@omnisolve.com for immediate assistance.",
          isUser: false,
          timestamp: new Date(),
          buttons: [
            { text: '📧 Email Support', action: 'send_email', variant: 'primary' },
            { text: '📞 Call Now', action: 'call_now', variant: 'secondary' }
          ]
        };
        setMessages(prev => [...prev, errorResponse]);
      }
      setIsLoading(false);
    }, 800);
  };

  const handleButtonClick = (action: string) => {
    executeAction(action);
    
    const buttonText = messages[messages.length - 1]?.buttons?.find(b => b.action === action)?.text || action;
    const userMessage: ChatMessage = {
      id: `action-${Date.now()}`,
      text: `Selected: ${buttonText}`,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    setTimeout(() => {
      let followUpText = "Great! I've processed your selection. What specific questions do you have from our knowledge base?";
      
      if (action.includes('call') || action.includes('email')) {
        followUpText = "Perfect! I've opened the contact method for you. Our team can provide detailed information about any of our services. Is there anything else from our knowledge base I can help clarify?";
      } else if (action === 'continue') {
        followUpText = "I'm here to help with any questions about OmniSolve Tech's services, pricing, processes, or company information. All my responses come directly from our official knowledge base.";
      }
      
      const botResponse: ChatMessage = {
        id: `followup-${Date.now()}`,
        text: followUpText,
        isUser: false,
        timestamp: new Date(),
        buttons: [
          { text: '📋 Browse Services', action: 'services', variant: 'primary' },
          { text: '❓ View FAQs', action: 'faqs', variant: 'secondary' },
          { text: '💬 Ask Question', action: 'continue', variant: 'secondary' }
        ]
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#007D78] to-[#FF6B35] hover:from-[#006B66] hover:to-[#E55A2B] shadow-xl z-50 transition-all duration-300 hover:scale-110"
        >
          <Bot className="w-6 h-6 text-white" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 md:w-96 h-[32rem] shadow-2xl z-50 flex flex-col border-2 border-gradient-to-r from-[#007D78] to-[#FF6B35]">
          <CardHeader className="bg-gradient-to-r from-[#007D78] to-[#FF6B35] text-white rounded-t-lg p-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <CardTitle className="text-lg font-semibold">Omni - Knowledge Base AI</CardTitle>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-white/80">Answers from official knowledge base only</p>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0 min-h-0">
            <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-lg text-sm ${message.isUser
                        ? 'bg-[#FF6B35] text-white rounded-br-sm'
                        : 'bg-white border text-gray-800 shadow-sm rounded-bl-sm'
                    }`}>
                      <div className="whitespace-pre-wrap">{message.text}</div>
                      {message.buttons && (
                        <div className="mt-3 space-y-2">
                          {message.buttons.map((button, index) => (
                            <Button
                              key={index}
                              onClick={() => handleButtonClick(button.action)}
                              size="sm"
                              className={`w-full text-left justify-start text-xs ${button.variant === 'primary'
                                  ? 'bg-[#FF6B35] hover:bg-[#E55A2B] text-white'
                                  : 'border-[#007D78] text-[#007D78] hover:bg-[#007D78] hover:text-white'
                              }`}
                              variant={button.variant === 'primary' ? 'default' : 'outline'}
                            >
                              {button.text}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border p-3 rounded-lg text-sm shadow-sm">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-[#007D78]" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-[#007D78] rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-[#007D78] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-[#007D78] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-xs text-gray-500">Searching knowledge base...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="p-4 border-t bg-white flex-shrink-0">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about our services, pricing, or processes..."
                  className="flex-1 border-[#007D78]/20 focus:border-[#007D78]"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <ChatbotLeadCaptureModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        actionType={leadActionType}
        onSubmit={handleLeadSubmit}
      />
    </>
  );
};

export default EnhancedChatbotWidget;