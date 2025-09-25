interface AIResponseData {
  text: string;
  buttons?: Array<{
    text: string;
    action: string;
    variant?: 'primary' | 'secondary';
  }>;
}

interface ConversationContext {
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  lastIntent?: string;
}

export class AIResponseEngine {
  private context: ConversationContext = { messages: [] };
  
  private serviceKnowledge = {
    websites: {
      description: "Custom website development with high conversion rates",
      details: "We create modern, fast-loading websites optimized for conversions. Our sites typically see 2-5x improvement in visitor-to-customer conversion rates.",
      benefits: ["Mobile-responsive design", "SEO optimization", "Fast loading speeds", "Conversion tracking"]
    },
    automation: {
      description: "IT systems automation and workflow optimization",
      details: "Eliminate repetitive tasks and streamline operations with custom automation solutions. Focus on growth while we handle the backend.",
      benefits: ["Process automation", "Workflow optimization", "Time savings", "Error reduction"]
    },
    ai: {
      description: "AI solutions that learn, predict, and deliver insights",
      details: "Custom AI tools built specifically for your business needs. Our solutions analyze data to predict trends and automate decision-making.",
      benefits: ["Predictive analytics", "Automated insights", "Custom AI models", "Data-driven decisions"]
    },
    content: {
      description: "Content strategy and lead generation services",
      details: "Done-for-you content strategy with 90-day marketing roadmaps. We create marketing engines that consistently attract and convert customers.",
      benefits: ["90-day roadmaps", "Lead generation", "Content creation", "Marketing automation"]
    },
    diagnostics: {
      description: "Business diagnostics and strategic consulting",
      details: "Identify exactly where you're losing time and money. Our analysis provides clear roadmaps to optimize efficiency and boost profits.",
      benefits: ["Efficiency analysis", "Cost optimization", "Strategic planning", "Performance metrics"]
    }
  };

  private detectIntent(input: string): string {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('website') || lowerInput.includes('web') || lowerInput.includes('site')) return 'websites';
    if (lowerInput.includes('automat') || lowerInput.includes('workflow') || lowerInput.includes('process')) return 'automation';
    if (lowerInput.includes('ai') || lowerInput.includes('artificial') || lowerInput.includes('smart')) return 'ai';
    if (lowerInput.includes('content') || lowerInput.includes('marketing') || lowerInput.includes('lead')) return 'content';
    if (lowerInput.includes('diagnostic') || lowerInput.includes('assess') || lowerInput.includes('audit')) return 'diagnostics';
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing')) return 'pricing';
    if (lowerInput.includes('help') || lowerInput.includes('support') || lowerInput.includes('human')) return 'help';
    
    return 'general';
  }

  private generateContextualResponse(input: string, intent: string): AIResponseData {
    this.context.messages.push({ role: 'user', content: input });
    
    let response: AIResponseData;
    
    switch (intent) {
      case 'websites':
        response = {
          text: `${this.serviceKnowledge.websites.details} Would you like to see how our process works or discuss your specific website needs?`,
          buttons: [
            { text: '🌐 See Development Process', action: 'website_demo', variant: 'primary' },
            { text: '📞 Discuss My Project', action: 'book_call', variant: 'secondary' }
          ]
        };
        break;
        
      case 'automation':
        response = {
          text: `${this.serviceKnowledge.automation.details} I can show you examples of automation workflows or connect you with our automation specialists.`,
          buttons: [
            { text: '🤖 See Automation Examples', action: 'automation_demo', variant: 'primary' },
            { text: '📋 Get Custom Assessment', action: 'automation_assessment', variant: 'secondary' }
          ]
        };
        break;
        
      case 'ai':
        response = {
          text: `${this.serviceKnowledge.ai.details} Our AI solutions are tailored to your industry and business goals.`,
          buttons: [
            { text: '🧠 Explore AI Solutions', action: 'ai_solutions', variant: 'primary' },
            { text: '📊 See AI Case Studies', action: 'ai_demo', variant: 'secondary' }
          ]
        };
        break;
        
      case 'content':
        response = {
          text: `${this.serviceKnowledge.content.details} Our strategies are proven to increase lead generation by 3-5x.`,
          buttons: [
            { text: '📈 Preview Strategy Template', action: 'content_roadmap', variant: 'primary' },
            { text: '💬 Talk to Strategist', action: 'talk_strategist', variant: 'secondary' }
          ]
        };
        break;
        
      case 'diagnostics':
        response = {
          text: `${this.serviceKnowledge.diagnostics.details} Most clients discover 15-30% efficiency improvements in the first assessment.`,
          buttons: [
            { text: '🔍 Start Free Assessment', action: 'free_assessment', variant: 'primary' },
            { text: '📊 See Sample Report', action: 'sample_report', variant: 'secondary' }
          ]
        };
        break;
        
      case 'pricing':
        response = {
          text: "Our pricing is customized based on your specific needs and project scope. Let's discuss your requirements to provide an accurate quote.",
          buttons: [
            { text: '📞 Get Custom Quote', action: 'pricing_call', variant: 'primary' },
            { text: '💬 Chat About Budget', action: 'budget_chat', variant: 'secondary' }
          ]
        };
        break;
        
      case 'help':
        response = {
          text: "I'll connect you with our team right away! You can reach us at info@omnisolve.com or call (555) 123-4567. We're here to help!",
          buttons: [
            { text: '📞 Call Now', action: 'call_now', variant: 'primary' },
            { text: '📧 Send Email', action: 'send_email', variant: 'secondary' }
          ]
        };
        break;
        
      default:
        response = this.getSmartGeneralResponse(input);
    }
    
    this.context.messages.push({ role: 'assistant', content: response.text });
    this.context.lastIntent = intent;
    
    return response;
  }

  private getSmartGeneralResponse(input: string): AIResponseData {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon'];
    const isGreeting = greetings.some(greeting => input.toLowerCase().includes(greeting));
    
    if (isGreeting) {
      return {
        text: "Hello! I'm Omni, your AI business assistant. I can help you learn about our automation, marketing, website development, and AI solutions. What interests you most?",
        buttons: [
          { text: '🤖 Automation Solutions', action: 'automation', variant: 'primary' },
          { text: '🌐 Website Development', action: 'websites', variant: 'secondary' },
          { text: '📈 Marketing Strategy', action: 'content', variant: 'secondary' }
        ]
      };
    }
    
    if (input.toLowerCase().includes('what') || input.toLowerCase().includes('how')) {
      return {
        text: "I can explain how OmniSolve helps businesses grow through technology and automation. We specialize in custom solutions that save time and increase revenue. What would you like to know more about?",
        buttons: [
          { text: '🔍 Business Assessment', action: 'diagnostics', variant: 'primary' },
          { text: '🧠 AI Solutions', action: 'ai', variant: 'secondary' },
          { text: '📞 Talk to Expert', action: 'book_call', variant: 'secondary' }
        ]
      };
    }
    
    return {
      text: "I'm here to help you understand how OmniSolve can transform your business with automation, AI, and strategic technology solutions. What specific challenge are you facing?",
      buttons: [
        { text: '🤖 Automate Processes', action: 'automation', variant: 'primary' },
        { text: '📈 Grow Revenue', action: 'content', variant: 'secondary' },
        { text: '🔧 Optimize Operations', action: 'diagnostics', variant: 'secondary' }
      ]
    };
  }

  generateResponse(input: string): AIResponseData {
    const intent = this.detectIntent(input);
    return this.generateContextualResponse(input, intent);
  }

  getContext(): ConversationContext {
    return this.context;
  }

  resetContext(): void {
    this.context = { messages: [] };
  }
}

export const aiResponseEngine = new AIResponseEngine();