import { ChatMessage } from './types';

interface ResponseData {
  text: string;
  buttons?: Array<{
    text: string;
    action: string;
    variant?: 'primary' | 'secondary';
  }>;
}

interface ConversationContext {
  lastIntent?: string;
  followUpCount: number;
}

export class ChatbotResponseEngine {
  private context: ConversationContext = { followUpCount: 0 };
  
  private serviceResponses = {
    websites: {
      text: "We create high-converting, custom websites that turn visitors into customers. Our sites are built with modern tech, optimized for speed, and designed to grow your business. Most clients see 2-5x improvement in conversion rates.",
      buttons: [
        { text: "🌐 See How It Works", action: "website_demo", variant: "primary" as const },
        { text: "📞 Book Strategy Call", action: "book_call", variant: "secondary" as const }
      ]
    },
    automation: {
      text: "Yes! Our High-Performance IT Systems & Automation service modernizes your backend and streamlines operations with custom-built automations. We eliminate repetitive tasks so you can focus on growth.",
      buttons: [
        { text: "🤖 Request a Demo", action: "automation_demo", variant: "primary" as const },
        { text: "📋 See Sample Automation Map", action: "automation_map", variant: "secondary" as const }
      ]
    },
    ai: {
      text: "Our AI Solutions learn from your data to predict trends, automate decisions, and deliver insights that drive growth. We build custom AI tools that work specifically for your business needs.",
      buttons: [
        { text: "🧠 Explore AI Solutions", action: "ai_solutions", variant: "primary" as const },
        { text: "📊 See AI in Action", action: "ai_demo", variant: "secondary" as const }
      ]
    },
    content: {
      text: "We offer done-for-you content strategy and lead generation for small businesses. Our 90-day roadmaps create marketing engines that attract and convert customers consistently.",
      buttons: [
        { text: "📈 Preview 90-Day Roadmap", action: "content_roadmap", variant: "primary" as const },
        { text: "💬 Talk to a Strategist", action: "talk_strategist", variant: "secondary" as const }
      ]
    },
    diagnostics: {
      text: "Our Business Diagnostics service identifies exactly where you're losing time and money. We analyze your operations and provide a clear roadmap to optimize efficiency and boost profits.",
      buttons: [
        { text: "🔍 Start Free Assessment", action: "free_assessment", variant: "primary" as const },
        { text: "📊 See Sample Report", action: "sample_report", variant: "secondary" as const }
      ]
    },
    whitelabel: {
      text: "Our white-labeled platforms let you offer fully branded SaaS-style tools as your own — perfect for agencies, consultants, and tech startups. Scale your business with our proven solutions.",
      buttons: [
        { text: "🏷️ Explore White Label Options", action: "whitelabel_demo", variant: "primary" as const },
        { text: "💼 Partner Program Info", action: "partner_info", variant: "secondary" as const }
      ]
    }
  };

  private intentKeywords = {
    websites: ['website', 'web', 'site', 'build', 'design', 'development', 'landing page'],
    automation: ['automate', 'automation', 'streamline', 'workflow', 'process', 'efficiency'],
    ai: ['ai', 'artificial intelligence', 'machine learning', 'smart', 'intelligent', 'predict'],
    content: ['content', 'marketing', 'strategy', 'lead generation', 'social media', 'blog'],
    diagnostics: ['diagnostic', 'assess', 'analysis', 'optimize', 'efficiency', 'audit'],
    whitelabel: ['white label', 'whitelabel', 'brand', 'resell', 'partner', 'agency'],
    pricing: ['price', 'cost', 'pricing', 'how much', 'budget', 'investment'],
    help: ['help', 'support', 'talk to someone', 'human', 'agent', 'contact']
  };

  detectIntent(input: string): string {
    const lowerInput = input.toLowerCase();
    
    for (const [intent, keywords] of Object.entries(this.intentKeywords)) {
      if (keywords.some(keyword => lowerInput.includes(keyword))) {
        return intent;
      }
    }
    
    return 'general';
  }

  generateResponse(input: string): ResponseData {
    const intent = this.detectIntent(input);
    this.context.lastIntent = intent;
    this.context.followUpCount++;

    switch (intent) {
      case 'websites':
        return this.serviceResponses.websites;
      
      case 'automation':
        return this.serviceResponses.automation;
      
      case 'ai':
        return this.serviceResponses.ai;
      
      case 'content':
        return this.serviceResponses.content;
      
      case 'diagnostics':
        return this.serviceResponses.diagnostics;
      
      case 'whitelabel':
        return this.serviceResponses.whitelabel;
      
      case 'pricing':
        return {
          text: "Our pricing is customized based on your specific needs and goals. Let's discuss your requirements and I'll connect you with our team for a personalized quote.",
          buttons: [
            { text: "📞 Get Custom Quote", action: "pricing_call", variant: "primary" },
            { text: "💬 Talk to Someone", action: "live_agent", variant: "secondary" }
          ]
        };
      
      case 'help':
        return {
          text: "I'll connect you with our team right away! You can reach us directly at info@omnisolve.com or call (555) 123-4567. We're here to help!",
          buttons: [
            { text: "📞 Call Now", action: "call_now", variant: "primary" },
            { text: "📧 Send Email", action: "send_email", variant: "secondary" }
          ]
        };
      
      default:
        return this.getContextualResponse(input);
    }
  }

  private getContextualResponse(input: string): ResponseData {
    if (this.context.lastIntent && this.context.followUpCount < 3) {
      return {
        text: "I'd be happy to tell you more about that! What specific aspect interests you most?",
        buttons: [
          { text: "📞 Book Strategy Call", action: "book_call", variant: "primary" },
          { text: "🤖 Request a Demo", action: "demo", variant: "secondary" },
          { text: "💬 Continue with Omni", action: "continue", variant: "secondary" }
        ]
      };
    }

    return {
      text: "I can help you with automation, marketing, websites, AI solutions, or business optimization. What would you like to explore?",
      buttons: [
        { text: "🤖 AI & Automation", action: "automation", variant: "primary" },
        { text: "🌐 Website Development", action: "websites", variant: "secondary" },
        { text: "📈 Content Strategy", action: "content", variant: "secondary" },
        { text: "🔍 Business Diagnostics", action: "diagnostics", variant: "secondary" }
      ]
    };
  }

  resetContext(): void {
    this.context = { followUpCount: 0 };
  }
}

export const responseEngine = new ChatbotResponseEngine();