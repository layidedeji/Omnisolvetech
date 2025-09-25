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

export interface ConversationContext {
  lastIntent?: string;
  followUpCount: number;
  sessionId: string;
}

export interface ResponseData {
  text: string;
  buttons?: Array<{
    text: string;
    action: string;
    variant?: 'primary' | 'secondary';
  }>;
}

export interface ActionHandler {
  [key: string]: () => void;
}