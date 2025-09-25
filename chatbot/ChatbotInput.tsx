import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Mic, MicOff } from 'lucide-react';

interface ChatbotInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

const ChatbotInput: React.FC<ChatbotInputProps> = ({ 
  onSendMessage, 
  isLoading, 
  placeholder = "Type your message..." 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  React.useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';
      
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };
      
      recognitionInstance.onerror = () => {
        setIsListening(false);
      };
      
      recognitionInstance.onend = () => {
        setIsListening(false);
      };
      
      setRecognition(recognitionInstance);
    }
  }, []);

  const handleSendMessage = () => {
    if (!inputValue.trim() || isLoading) return;
    
    onSendMessage(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleVoiceInput = () => {
    if (!recognition) return;
    
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <div className="p-4 border-t bg-white">
      <div className="flex gap-2 items-end">
        <div className="flex-1 relative">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={isListening ? "Listening..." : placeholder}
            className="pr-10 resize-none"
            disabled={isLoading || isListening}
          />
          {recognition && (
            <Button
              type="button"
              onClick={toggleVoiceInput}
              variant="ghost"
              size="sm"
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 h-6 w-6 ${
                isListening ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-[#007D78]'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </Button>
          )}
        </div>
        <Button
          onClick={handleSendMessage}
          disabled={isLoading || !inputValue.trim() || isListening}
          className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-3 py-2"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
      {isListening && (
        <div className="mt-2 text-xs text-center text-gray-500 animate-pulse">
          🎤 Listening... Speak now
        </div>
      )}
    </div>
  );
};

export default ChatbotInput;