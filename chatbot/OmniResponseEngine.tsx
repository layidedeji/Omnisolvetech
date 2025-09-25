import { chatbotKnowledgeBase } from './chatbotKnowledgeBase';
import { ChatMessage, UserRole } from './types';

class OmniResponseEngine {
  private userRole: UserRole = 'customer';
  private conversationHistory: ChatMessage[] = [];

  setUserRole(role: UserRole) {
    this.userRole = role;
  }

  addToHistory(message: ChatMessage) {
    this.conversationHistory.push(message);
  }

  detectLanguage(text: string): string {
    // Simple language detection
    const spanishWords = ['hola', 'gracias', 'por favor', 'sí', 'no', 'cómo', 'qué', 'precio'];
    const frenchWords = ['bonjour', 'merci', 'oui', 'non', 'comment', 'prix', 'service'];
    const portugueseWords = ['olá', 'obrigado', 'sim', 'não', 'como', 'preço', 'serviço'];
    
    const lowerText = text.toLowerCase();
    
    if (spanishWords.some(word => lowerText.includes(word))) return 'es';
    if (frenchWords.some(word => lowerText.includes(word))) return 'fr';
    if (portugueseWords.some(word => lowerText.includes(word))) return 'pt';
    
    return 'en';
  }

  generateResponse(userMessage: string): string {
    const language = this.detectLanguage(userMessage);
    const message = userMessage.toLowerCase();
    
    // Greeting
    if (this.isGreeting(message)) {
      return this.formatResponse(
        this.translate("Hi! I'm Omni, your smart assistant. How can I help today?", language),
        '',
        ['📞 Book Free Consultation', '📄 View Services', '✉️ Contact Support'],
        this.translate('What would you like to explore?', language)
      );
    }

    // Role detection
    if (message.includes('admin') || message.includes('internal')) {
      this.userRole = 'admin';
      return this.formatResponse(
        this.translate('Admin Access Granted', language),
        this.translate('I can help with helpdesk support, internal processes, billing, and all customer services.', language),
        ['🔧 Helpdesk Support', '📊 Internal Tools', '💳 Billing Support'],
        this.translate('What do you need assistance with?', language)
      );
    }

    // Helpdesk check
    if (message.includes('helpdesk') || message.includes('support ticket')) {
      if (this.userRole !== 'admin') {
        return this.formatResponse(
          this.translate('Helpdesk Access Restricted', language),
          this.translate('Helpdesk support is currently available to internal team members only. For assistance, please contact support@omnisolve.com.', language),
          ['📨 Contact Support', '🔍 Browse Help Center'],
          this.translate('How else can I help you?', language)
        );
      }
    }

    // Service inquiries with semantic search
    const serviceResponse = this.searchServices(message, language);
    if (serviceResponse) return serviceResponse;

    // Pricing inquiries
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return this.getPricingInfo(language);
    }

    // Contact inquiries
    if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return this.getContactInfo(language);
    }

    // FAQ search with similarity scoring
    const faqResponse = this.searchFAQs(message, language);
    if (faqResponse) return faqResponse;

    // Fallback system
    return this.formatResponse(
      this.translate('Let me help you find what you need', language),
      this.translate("I couldn't find a perfect match for your question. Please rephrase it, or click below to get direct help.", language),
      ['📨 Contact Support', '🔍 Browse Full Help Center'],
      this.translate('Would you like me to connect you with a human expert or show more options?', language)
    );
  }

  private formatResponse(header: string, body: string, buttons: string[], nextStep: string): string {
    let response = `**${header}**\n\n${body}`;
    
    if (buttons.length > 0) {
      response += `\n\n🔘 Button Options:\n${buttons.map(btn => `[${btn}]`).join(' ')}`;
    }
    
    response += `\n\n${nextStep}`;
    return response;
  }

  private translate(text: string, language: string): string {
    if (language === 'en') return text;
    
    const translations = {
      es: {
        "Hi! I'm Omni, your smart assistant. How can I help today?": "¡Hola! Soy Omni, tu asistente inteligente. ¿Cómo puedo ayudarte hoy?",
        "What would you like to explore?": "¿Qué te gustaría explorar?",
        "Admin Access Granted": "Acceso de Administrador Concedido",
        "Helpdesk Access Restricted": "Acceso al Helpdesk Restringido",
        "Let me help you find what you need": "Déjame ayudarte a encontrar lo que necesitas",
        "Would you like me to connect you with a human expert or show more options?": "¿Te gustaría que te conecte con un experto humano o que te muestre más opciones?"
      },
      fr: {
        "Hi! I'm Omni, your smart assistant. How can I help today?": "Salut! Je suis Omni, votre assistant intelligent. Comment puis-je vous aider aujourd'hui?",
        "What would you like to explore?": "Qu'aimeriez-vous explorer?",
        "Admin Access Granted": "Accès Administrateur Accordé",
        "Helpdesk Access Restricted": "Accès au Support Technique Restreint",
        "Let me help you find what you need": "Laissez-moi vous aider à trouver ce dont vous avez besoin",
        "Would you like me to connect you with a human expert or show more options?": "Souhaitez-vous que je vous mette en contact avec un expert humain ou que je vous montre plus d'options?"
      },
      pt: {
        "Hi! I'm Omni, your smart assistant. How can I help today?": "Olá! Eu sou Omni, seu assistente inteligente. Como posso ajudar hoje?",
        "What would you like to explore?": "O que você gostaria de explorar?",
        "Admin Access Granted": "Acesso de Administrador Concedido",
        "Helpdesk Access Restricted": "Acesso ao Suporte Técnico Restrito",
        "Let me help you find what you need": "Deixe-me ajudá-lo a encontrar o que precisa",
        "Would you like me to connect you with a human expert or show more options?": "Gostaria que eu o conectasse com um especialista humano ou mostrasse mais opções?"
      }
    };
    
    return translations[language]?.[text] || text;
  }

  private searchServices(message: string, language: string): string | null {
    const services = chatbotKnowledgeBase.services;
    
    for (const [key, service] of Object.entries(services)) {
      const score = this.calculateSimilarity(message, service.title + ' ' + service.description);
      if (score > 0.78) {
        return this.formatResponse(
          `📌 ${service.title}`,
          service.description + '\n\n**Key Benefits:**\n' + service.benefits.slice(0, 3).map(b => `• ${b}`).join('\n'),
          ['📞 Book Free Consultation', '📄 View Pricing', '✉️ Contact Support'],
          this.translate('What else can I help you explore?', language)
        );
      }
    }
    
    return null;
  }

  private getPricingInfo(language: string): string {
    return this.formatResponse(
      this.translate('Custom Pricing Information', language),
      this.translate('Our pricing is customized based on your specific needs and project scope. We offer transparent pricing with no hidden fees.', language),
      ['📞 Get Free Quote', '📄 View Service Packages', '✉️ Contact Sales'],
      this.translate('Would you like to schedule a free consultation?', language)
    );
  }

  private getContactInfo(language: string): string {
    const contact = chatbotKnowledgeBase.contact;
    return this.formatResponse(
      this.translate('Contact Information', language),
      `📧 General: ${contact.general.email}\n📞 Phone: ${contact.general.phone}\n💼 Sales: ${contact.sales.email}\n🛠️ Support: ${contact.support.email}\n\nOur team is available Monday-Friday 8 AM - 6 PM EST.`,
      ['📞 Call Now', '📧 Send Email', '💬 Live Chat'],
      this.translate('How can we help you today?', language)
    );
  }

  private searchFAQs(message: string, language: string): string | null {
    const allFAQs = [
      ...chatbotKnowledgeBase.faqs.general,
      ...chatbotKnowledgeBase.faqs.technical,
      ...chatbotKnowledgeBase.faqs.process,
      ...chatbotKnowledgeBase.faqs.pricing
    ];

    for (const faq of allFAQs) {
      const score = this.calculateSimilarity(message, faq.question);
      if (score > 0.78) {
        return this.formatResponse(
          `❓ ${faq.question}`,
          faq.answer,
          ['📞 Book Consultation', '📄 Learn More', '✉️ Contact Support'],
          this.translate('What else can I help you explore?', language)
        );
      }
    }

    return null;
  }

  private calculateSimilarity(text1: string, text2: string): number {
    const words1 = text1.toLowerCase().split(' ');
    const words2 = text2.toLowerCase().split(' ');
    
    let matches = 0;
    for (const word of words1) {
      if (words2.some(w => w.includes(word) || word.includes(w))) {
        matches++;
      }
    }
    
    return matches / Math.max(words1.length, words2.length);
  }

  private isGreeting(message: string): boolean {
    const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'hola', 'bonjour', 'olá'];
    return greetings.some(greeting => message.includes(greeting));
  }
}

export const omniResponseEngine = new OmniResponseEngine();