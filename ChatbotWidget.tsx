import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, MessageSquare, Send } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from '@/components/chatbot/types';
import { responseEngine } from '@/components/chatbot/ChatbotResponseEngine';
import { useChatbotActions } from '@/components/chatbot/ChatbotActionHandler';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { executeAction } = useChatbotActions();

  const getWelcomeMessage = (pathname: string): ChatMessage => {
    let welcomeText = "Hi, I'm Omni — your AI business assistant. Ask me anything about automation, marketing, websites, or how OmniSolve can help you grow smarter. What would you like help with today?";
    
    if (pathname.includes('business-diagnostics')) {
      welcomeText = "Ready to discover hidden opportunities in your business? I can help you understand how our diagnostics process works and what results you can expect.";
    } else if (pathname.includes('business-marketing')) {
      welcomeText = "Looking to supercharge your content strategy? I can show you how we create marketing engines that consistently attract and convert customers.";
    } else if (pathname.includes('ai-solutions')) {
      welcomeText = "Interested in AI that actually works for your business? Let me explain how our solutions learn, predict, and deliver real results.";
    } else if (pathname.includes('custom-websites')) {
      welcomeText = "Want a website that converts visitors into customers? I can walk you through our proven development process.";
    } else if (pathname.includes('it-systems-automation')) {
      welcomeText = "Ready to eliminate repetitive tasks and streamline operations? Let me show you how our automation solutions work.";
    }

    return {
      id: Date.now(),
      text: welcomeText,
      isUser: false,
      timestamp: new Date(),
      buttons: [
        { text: '🔍 Business Diagnostics', action: 'diagnostics', variant: 'secondary' },
        { text: '🤖 AI & Automation', action: 'automation', variant: 'secondary' },
        { text: '🌐 Website Development', action: 'websites', variant: 'secondary' },
        { text: '📈 Content Strategy', action: 'content', variant: 'secondary' }
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
      setMessages([getWelcomeMessage(location.pathname)]);
    }
  }, [location.pathname, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const response = responseEngine.generateResponse(currentInput);
      const botResponse: ChatMessage = {
        id: Date.now() + 1,
        text: response.text,
        isUser: false,
        timestamp: new Date(),
        buttons: response.buttons
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 800);
  };

  const handleButtonClick = (action: string) => {
    // Execute the action (navigation, etc.)
    executeAction(action);
    
    // Add a user message showing what they clicked
    const buttonText = messages[messages.length - 1]?.buttons?.find(b => b.action === action)?.text || action;
    const userMessage: ChatMessage = {
      id: Date.now(),
      text: `Selected: ${buttonText}`,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Generate a contextual follow-up response
    setTimeout(() => {
      let followUpText = "Great choice! Is there anything specific you'd like to know more about?";
      
      if (action.includes('call') || action.includes('email')) {
        followUpText = "Perfect! I've opened the contact method for you. Our team will be happy to help with your specific needs.";
      } else if (action.includes('demo')) {
        followUpText = "Excellent! You should now see more details about this service. Feel free to ask me any questions about what you're seeing.";
      }
      
      const botResponse: ChatMessage = {
        id: Date.now() + 1,
        text: followUpText,
        isUser: false,
        timestamp: new Date(),
        buttons: [
          { text: '📞 Book Strategy Call', action: 'book_call', variant: 'primary' },
          { text: '💬 Continue with Omni', action: 'continue', variant: 'secondary' }
        ]
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#007D78] to-[#FF6B35] hover:from-[#006B66] hover:to-[#E55A2B] shadow-xl z-50"
        >
          <MessageSquare className="w-6 h-6 text-white" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 md:w-96 h-[32rem] shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-gradient-to-r from-[#007D78] to-[#FF6B35] text-white rounded-t-lg p-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Omni - AI Assistant</CardTitle>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0 min-h-0">
            <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-[#FF6B35] text-white'
                        : 'bg-white border text-gray-800 shadow-sm'
                    }`}>
                      {message.text}
                      {message.buttons && (
                        <div className="mt-2 space-y-1">
                          {message.buttons.map((button, index) => (
                            <Button
                              key={index}
                              onClick={() => handleButtonClick(button.action)}
                              size="sm"
                              className={`w-full text-left justify-start ${
                                button.variant === 'primary'
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
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#007D78] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#007D78] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-[#007D78] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
                  placeholder="Ask Omni anything..."
                  className="flex-1"
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
    </>
  );
};

export default ChatbotWidget;