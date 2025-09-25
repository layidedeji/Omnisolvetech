import { useNavigate } from 'react-router-dom';
import { ActionHandler } from './types';

export const useChatbotActions = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Lead capture modal trigger function
  const triggerLeadCapture = (actionType: 'consultation' | 'support' | 'strategy' | 'demo' | 'general') => {
    // Dispatch custom event to trigger modal
    const event = new CustomEvent('openLeadCapture', { 
      detail: { actionType } 
    });
    window.dispatchEvent(event);
  };

  const actions: ActionHandler = {
    // Service navigation actions
    website_demo: () => navigate('/custom-websites'),
    automation_demo: () => navigate('/it-systems-automation'),
    ai_solutions: () => navigate('/ai-solutions'),
    content_roadmap: () => navigate('/business-marketing'),
    free_assessment: () => navigate('/business-diagnostics'),
    whitelabel_demo: () => navigate('/conversion-funnels'),
    
    // CTA actions that trigger lead capture
    book_call: () => triggerLeadCapture('consultation'),
    book_consultation: () => triggerLeadCapture('consultation'),
    schedule_call: () => triggerLeadCapture('strategy'),
    contact_support: () => triggerLeadCapture('support'),
    request_demo: () => triggerLeadCapture('demo'),
    get_quote: () => triggerLeadCapture('consultation'),
    
    pricing_call: () => triggerLeadCapture('consultation'),
    live_agent: () => triggerLeadCapture('support'),
    
    call_now: () => {
      window.open('tel:+15551234567', '_self');
    },
    
    send_email: () => triggerLeadCapture('support'),
    
    // Demo and info actions
    automation_map: () => {
      navigate('/it-systems-automation');
      setTimeout(() => scrollToSection('automation-process'), 500);
    },
    
    ai_demo: () => {
      navigate('/ai-solutions');
      setTimeout(() => scrollToSection('ai-features'), 500);
    },
    
    talk_strategist: () => triggerLeadCapture('strategy'),
    
    sample_report: () => {
      navigate('/business-diagnostics');
      setTimeout(() => scrollToSection('diagnostics-results'), 500);
    },
    
    partner_info: () => {
      navigate('/conversion-funnels');
      setTimeout(() => scrollToSection('partner-benefits'), 500);
    },
    
    // General actions
    diagnostics: () => navigate('/business-diagnostics'),
    automation: () => navigate('/it-systems-automation'),
    websites: () => navigate('/custom-websites'),
    content: () => navigate('/business-marketing'),
    services: () => scrollToSection('services'),
    pricing: () => scrollToSection('pricing'),
    contact: () => triggerLeadCapture('general'),
    faqs: () => scrollToSection('faq'),
    
    continue: () => {
      // This action keeps the conversation going - no navigation needed
      return;
    },
    
    demo: () => triggerLeadCapture('demo')
  };

  return { executeAction: (actionKey: string) => {
    const action = actions[actionKey];
    if (action) {
      action();
    } else {
      console.warn(`Unknown action: ${actionKey}`);
    }
  }};
};