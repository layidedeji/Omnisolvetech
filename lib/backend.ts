import { supabase } from './supabase';

// Lead capture function
export const captureLeadData = async (leadData: {
  name: string;
  email: string;
  service?: string;
  updates?: boolean;
  checklist?: boolean;
  company?: string;
  challenge?: string;
}) => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([{
        name: leadData.name,
        email: leadData.email,
        service: leadData.service || 'general',
        wants_updates: leadData.updates || false,
        wants_checklist: leadData.checklist || false,
        company: leadData.company || '',
        challenge: leadData.challenge || '',
        created_at: new Date().toISOString()
      }]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error capturing lead:', error);
    return { success: false, error };
  }
};

// Contact form submission
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  company?: string;
  challenge: string;
}) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        challenge: formData.challenge,
        created_at: new Date().toISOString()
      }]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};

// Chat message logging
export const logChatMessage = async (messageData: {
  user_message: string;
  bot_response: string;
  session_id: string;
}) => {
  try {
    const { data, error } = await supabase
      .from('chat_logs')
      .insert([{
        user_message: messageData.user_message,
        bot_response: messageData.bot_response,
        session_id: messageData.session_id,
        created_at: new Date().toISOString()
      }]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error logging chat:', error);
    return { success: false, error };
  }
};