import React from 'react';
import ChatbotAvatar from './ChatbotAvatar';
import { Button } from '@/components/ui/button';

interface ChatbotMessageProps {
  message: {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: Date;
    buttons?: Array<{
      text: string;
      action: string;
      variant?: 'primary' | 'secondary';
    }>;
  };
  onButtonClick?: (action: string) => void;
}

const ChatbotMessage: React.FC<ChatbotMessageProps> = ({ message, onButtonClick }) => {
  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!message.isUser && <ChatbotAvatar />}
      
      <div className={`max-w-[80%] ${message.isUser ? 'ml-4' : 'mr-4'}`}>
        <div
          className={`p-3 rounded-lg text-sm ${
            message.isUser
              ? 'bg-[#FF6B35] text-white rounded-br-sm'
              : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm'
          }`}
        >
          {message.text}
        </div>
        
        {message.buttons && message.buttons.length > 0 && (
          <div className="mt-2 space-y-1">
            {message.buttons.map((button, index) => (
              <Button
                key={index}
                onClick={() => onButtonClick?.(button.action)}
                variant={button.variant === 'primary' ? 'default' : 'outline'}
                size="sm"
                className={`w-full text-left justify-start ${
                  button.variant === 'primary'
                    ? 'bg-[#FF6B35] hover:bg-[#E55A2B] text-white'
                    : 'border-[#007D78] text-[#007D78] hover:bg-[#007D78] hover:text-white'
                }`}
              >
                {button.text}
              </Button>
            ))}
          </div>
        )}
        
        <div className="text-xs text-gray-400 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default ChatbotMessage;