import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface AnalyticsData {
  sessionId: string;
  pagePath: string;
  intent?: string;
  userMessage?: string;
  botResponse?: string;
  conversionAction?: string;
}

export class ChatbotAnalytics {
  private sessionId: string;
  private apiEndpoint = 'https://vdnvpolivbxtdtyaldan.supabase.co/functions/v1/chatbot-handler';

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  async trackInteraction(data: Partial<AnalyticsData>) {
    try {
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'track_interaction',
          data: {
            sessionId: this.sessionId,
            timestamp: new Date().toISOString(),
            ...data
          }
        })
      });
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  }

  async saveLead(leadData: any) {
    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'save_lead',
          data: leadData
        })
      });
      return await response.json();
    } catch (error) {
      console.error('Lead save failed:', error);
      return { success: false, error: 'Failed to save lead' };
    }
  }

  getSessionId(): string {
    return this.sessionId;
  }
}

// Hook for tracking page visits
export const usePageTracking = (analytics: ChatbotAnalytics) => {
  const location = useLocation();

  useEffect(() => {
    analytics.trackInteraction({
      pagePath: location.pathname,
      intent: 'page_visit'
    });
  }, [location.pathname, analytics]);
};

export default ChatbotAnalytics;