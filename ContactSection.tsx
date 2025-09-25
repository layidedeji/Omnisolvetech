import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageSquare, Bot } from 'lucide-react';
import EnhancedChatbotWidget from './chatbot/EnhancedChatbotWidget';
import { supabase } from '@/lib/supabase';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showChatbot, setShowChatbot] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save lead to database
      const { error } = await supabase
        .from('leads')
        .insert([{
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: 'contact_form'
        }]);

      if (error) throw error;
      
      // Send notification email
      await supabase.functions.invoke('send-lead-notification', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: 'contact_form'
        }
      });
      
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@omnisolvetech.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+18005052790';
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Contact us today or chat with our AI assistant for instant answers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#007D78] to-[#FF6B35] hover:from-[#006B66] hover:to-[#E55A2B] text-white py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & AI Assistant */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#007D78] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <button 
                      onClick={handleEmailClick}
                      className="text-gray-600 hover:text-[#007D78] transition-colors cursor-pointer"
                    >
                      info@omnisolvetech.com
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#FF6B35] p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <button 
                      onClick={handlePhoneClick}
                      className="text-gray-600 hover:text-[#007D78] transition-colors cursor-pointer"
                    >
                      (800) 505-2790
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#007D78] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">5614 W Grand Parkway<br />Suite 102, #1048<br />Richmond Tx 77406<br />United States</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant Promotion */}
            <Card className="shadow-lg border-2 border-gradient-to-r from-[#007D78] to-[#FF6B35]">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                  <Bot className="w-6 h-6 text-[#007D78]" />
                  Chat with Omni AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get instant, intelligent answers about our services, pricing, and how we can help your business grow.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MessageSquare className="w-4 h-4 text-[#FF6B35]" />
                    <span>Real-time responses</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Bot className="w-4 h-4 text-[#007D78]" />
                    <span>Contextual understanding</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone className="w-4 h-4 text-[#FF6B35]" />
                    <span>Direct connection to our team</span>
                  </div>
                </div>
                <Button
                  onClick={() => setShowChatbot(true)}
                  className="w-full mt-4 bg-gradient-to-r from-[#007D78] to-[#FF6B35] hover:from-[#006B66] hover:to-[#E55A2B] text-white"
                >
                  <Bot className="w-4 h-4 mr-2" />
                  Start AI Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Enhanced Chatbot Widget - Always available */}
      <EnhancedChatbotWidget />
    </section>
  );
};

export default ContactSection;