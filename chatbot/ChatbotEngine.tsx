import { useLocation } from 'react-router-dom';

export interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  buttons?: Array<{
    text: string;
    action: string;
    variant?: 'primary' | 'secondary';
  }>;
}

export class ChatbotEngine {
  private currentFlow: string | null = null;

  getWelcomeMessage(pathname: string): ChatMessage {
    let welcomeText = "Hi, I'm Omni. Want to optimize, automate, or grow your business? I've got options.";
    
    if (pathname.includes('business-diagnostics')) {
      welcomeText = "Curious how much time and money you could be saving? Let's take a look.";
    } else if (pathname.includes('business-marketing')) {
      welcomeText = "Want a content plan that drives growth? Let me help you build it.";
    }

    return {
      id: 1,
      text: welcomeText,
      isUser: false,
      timestamp: new Date(),
      buttons: [
        { text: '🔍 Business Diagnostics', action: 'diagnostics', variant: 'primary' },
        { text: '🤖 AI & Automation', action: 'automation', variant: 'secondary' },
        { text: '🌐 Website Development', action: 'website', variant: 'secondary' },
        { text: '📈 Content Strategy', action: 'content', variant: 'secondary' }
      ]
    };
  }

  processMessage(userInput: string, messageId: number): ChatMessage {
    return {
      id: messageId,
      text: "Thanks for your message! I can help you with Business Diagnostics, AI Automation, Website Development, or Content Strategy. What interests you most?",
      isUser: false,
      timestamp: new Date(),
      buttons: [
        { text: '📞 Book Strategy Session', action: 'book_session', variant: 'primary' },
        { text: '💬 Talk to Human', action: 'live_agent', variant: 'secondary' }
      ]
    };
  }

  processButtonAction(action: string, messageId: number): ChatMessage {
    const responses = {
      diagnostics: "Perfect! Our Business Diagnostics service identifies exactly where you're losing time and money. Most clients save 15-30 hours per week and see 25-40% cost reductions within 90 days.",
      automation: "Excellent! Our AI & Automation solutions eliminate repetitive tasks. Clients typically see 50-80% reduction in manual work.",
      website: "Great! We create conversion-optimized websites that turn visitors into customers. Most clients see 2-5x improvement in conversion rates.",
      content: "Smart move! Our Content Strategy creates a complete marketing engine that attracts and converts your ideal customers consistently.",
      book_session: "Perfect! You can book directly at calendly.com/omnisolve or contact us at info@omnisolve.com for a free consultation.",
      live_agent: "I'll connect you with our team! You can reach us at info@omnisolve.com or call (555) 123-4567."
    };

    return {
      id: messageId,
      text: responses[action as keyof typeof responses] || "How can I help you today?",
      isUser: false,
      timestamp: new Date(),
      buttons: action === 'book_session' || action === 'live_agent' ? undefined : [
        { text: '📞 Book Strategy Session', action: 'book_session', variant: 'primary' },
        { text: '💬 Talk to Human', action: 'live_agent', variant: 'secondary' }
      ]
    };
  }
}