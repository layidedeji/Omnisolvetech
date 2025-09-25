import React from 'react';

interface ChatbotAvatarProps {
  isTyping?: boolean;
}

const ChatbotAvatar: React.FC<ChatbotAvatarProps> = ({ isTyping = false }) => {
  return (
    <div className="relative w-8 h-8 mr-2 flex-shrink-0">
      <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-[#007D78] to-[#FF6B35] flex items-center justify-center shadow-lg ${
        isTyping ? 'animate-pulse' : ''
      }`}>
        <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#007D78] to-[#FF6B35] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      {isTyping && (
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#FF6B35] rounded-full animate-bounce"></div>
      )}
    </div>
  );
};

export default ChatbotAvatar;