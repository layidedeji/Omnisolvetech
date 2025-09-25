import { chatbotKnowledgeBase } from './chatbotKnowledgeBase';
import { semanticSearchEngine } from './SemanticSearchEngine';
import { ChatMessage, UserRole } from './types';

class EnhancedOmniResponseEngine {
  private userRole: UserRole = 'customer';
  private conversationHistory: ChatMessage[] = [];
  private readonly SIMILARITY_THRESHOLD = 0.4;
  private readonly HIGH_CONFIDENCE_THRESHOLD = 0.7;
  private isFirstMessage = true;

  setUserRole(role: UserRole) {
    this.userRole = role;
  }

  addToHistory(message: ChatMessage) {
    this.conversationHistory.push(message);
  }

  generateResponse(userMessage: string): string {
    const query = userMessage.trim();
    
    // Always start with greeting on first message
    if (this.isFirstMessage) {
      this.isFirstMessage = false;
      return this.formatInitialGreeting();
    }

    // Handle admin access requests
    if (this.isAdminRequest(query)) {
      this.userRole = 'admin';
      return this.formatAdminAccess();
    }

    // Handle helpdesk requests
    if (this.isHelpdeskRequest(query) && this.userRole !== 'admin') {
      return this.formatHelpdeskRestriction();
    }

    // Detect intent and provide contextual responses
    const intent = this.detectIntent(query);
    
    // Semantic search with fallback system
    const searchResult = semanticSearchEngine.findBestMatch(query, this.SIMILARITY_THRESHOLD);
    
    if (!searchResult) {
      return this.formatFallbackResponse(intent);
    }

    // Provide direct, helpful answers based on knowledge base
    return this.formatDirectResponse(searchResult, intent);
  }

  private formatInitialGreeting(): string {
    return "Hi! I'm Omni, your smart assistant. How can I help today?\n\nI can assist you with:\n• Service information and pricing\n• Technical questions and FAQs\n• Company information\n• Project guidance\n• General support\n\nWhat would you like to know about OmniSolve Tech?";
  }

  private formatAdminAccess(): string {
    return "🔐 Admin access granted! I can now help with:\n• Helpdesk support and internal processes\n• Client portal navigation\n• Billing and account management\n• System troubleshooting\n• All customer-facing services\n\nWhat do you need assistance with?";
  }

  private formatHelpdeskRestriction(): string {
    return "Helpdesk support is currently available to internal team members only. For assistance, please contact support@omnisolvetech.com or call (800) 505-2790.\n\nI can still help you with general questions about our services, pricing, and technical information. What else can I assist you with?";
  }

  private formatDirectResponse(result: any, intent: string): string {
    if (result.category.includes('FAQ')) {
      return `${result.source.answer}\n\n${this.getSuggestedNextStep(intent)}`;
    } 
    
    if (result.category === 'Services') {
      return `**${result.source.title}**\n\n${result.source.description}\n\n**Key Benefits:**\n${result.source.benefits.slice(0, 3).map(b => `• ${b}`).join('\n')}\n\nWould you like to schedule a free consultation to discuss how this can help your business?`;
    }
    
    if (result.category === 'Company') {
      return `${chatbotKnowledgeBase.company.mission}\n\n**About Us:**\n• Founded: ${chatbotKnowledgeBase.company.founded}\n• Team: ${chatbotKnowledgeBase.company.teamSize}\n• Location: ${chatbotKnowledgeBase.company.headquarters}\n\nWe serve clients across ${chatbotKnowledgeBase.company.industries.length}+ industries worldwide. How can we help your business grow?`;
    }

    return result.content || result.source?.answer || "I found some relevant information, but let me connect you with more specific details.";
  }

  private formatFallbackResponse(intent: string): string {
    const contactInfo = chatbotKnowledgeBase.contact.general;
    
    return `I don't have specific information about that in my knowledge base. For detailed assistance, please:\n\n• Email: ${contactInfo.email}\n• Call: ${contactInfo.phone}\n• Hours: ${contactInfo.hours}\n\nIs there anything else about our services, pricing, or company that I can help you with?`;
  }

  private detectIntent(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) return 'pricing';
    if (lowerMessage.includes('technical') || lowerMessage.includes('tech') || lowerMessage.includes('integration')) return 'technical';
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) return 'services';
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) return 'contact';
    if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('who are you')) return 'company';
    if (lowerMessage.includes('process') || lowerMessage.includes('how do you work')) return 'process';
    
    return 'general';
  }

  private getSuggestedNextStep(intent: string): string {
    switch (intent) {
      case 'pricing': return 'Would you like to schedule a free consultation to get a custom quote?';
      case 'technical': return 'Need more technical details? I can connect you with one of our technical experts.';
      case 'services': return 'Interested in learning more? Let\'s schedule a free discovery call.';
      case 'contact': return 'Ready to get started? Contact us for a free consultation.';
      default: return 'What else would you like to know about OmniSolve Tech?';
    }
  }

  private isAdminRequest(message: string): boolean {
    const adminKeywords = ['admin access', 'administrator', 'internal access', 'helpdesk access', 'staff login'];
    const lowerMessage = message.toLowerCase();
    return adminKeywords.some(keyword => lowerMessage.includes(keyword));
  }

  private isHelpdeskRequest(message: string): boolean {
    const helpdeskKeywords = ['helpdesk', 'internal support', 'system issue', 'billing problem', 'account issue'];
    const lowerMessage = message.toLowerCase();
    return helpdeskKeywords.some(keyword => lowerMessage.includes(keyword));
  }
}

export const enhancedOmniResponseEngine = new EnhancedOmniResponseEngine();