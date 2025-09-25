import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Phone, Mail, MessageSquare } from 'lucide-react';

interface ChatbotLeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  actionType: 'consultation' | 'support' | 'strategy' | 'demo' | 'general';
  onSubmit: (data: any) => void;
}

const ChatbotLeadCaptureModal = ({ isOpen, onClose, actionType, onSubmit }: ChatbotLeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
    budget: '',
    timeline: '',
    updates: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getModalConfig = () => {
    switch (actionType) {
      case 'consultation':
        return {
          title: '📞 Schedule Your Free Consultation',
          subtitle: 'Let\'s discuss how we can help transform your business with our solutions.',
          icon: <Calendar className="w-8 h-8 text-white" />,
          buttonText: 'Book My Consultation'
        };
      case 'support':
        return {
          title: '📧 Contact Support Team',
          subtitle: 'Our experts are here to help with any questions or technical assistance.',
          icon: <Mail className="w-8 h-8 text-white" />,
          buttonText: 'Send Support Request'
        };
      case 'strategy':
        return {
          title: '🎯 Request Strategy Call',
          subtitle: 'Get personalized insights and recommendations for your business growth.',
          icon: <Phone className="w-8 h-8 text-white" />,
          buttonText: 'Schedule Strategy Call'
        };
      case 'demo':
        return {
          title: '🚀 Book Product Demo',
          subtitle: 'See our solutions in action with a personalized demonstration.',
          icon: <MessageSquare className="w-8 h-8 text-white" />,
          buttonText: 'Schedule Demo'
        };
      default:
        return {
          title: '💬 Get In Touch',
          subtitle: 'Tell us about your needs and we\'ll get back to you promptly.',
          icon: <MessageSquare className="w-8 h-8 text-white" />,
          buttonText: 'Send Message'
        };
    }
  };

  const config = getModalConfig();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    onSubmit({ ...formData, actionType });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white border-0 shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#007D78] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto">
            {config.icon}
          </div>
          <DialogTitle className="text-xl font-bold text-[#002B5B]">
            {config.title}
          </DialogTitle>
          <p className="text-gray-600 text-sm leading-relaxed">
            {config.subtitle}
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#002B5B] font-medium">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                className="border-gray-300 focus:border-[#007D78]"
                placeholder="Your name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#002B5B] font-medium">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="border-gray-300 focus:border-[#007D78]"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#002B5B] font-medium">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="border-gray-300 focus:border-[#007D78]"
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company" className="text-[#002B5B] font-medium">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="border-gray-300 focus:border-[#007D78]"
                placeholder="Company name"
              />
            </div>
          </div>

          {actionType !== 'support' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="service" className="text-[#002B5B] font-medium">Service Interest</Label>
                <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                  <SelectTrigger className="border-gray-300 focus:border-[#007D78]">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diagnostics">Business Diagnostics</SelectItem>
                    <SelectItem value="automation">IT Systems & Automation</SelectItem>
                    <SelectItem value="ai">AI Solutions</SelectItem>
                    <SelectItem value="websites">Custom Websites</SelectItem>
                    <SelectItem value="marketing">Business Marketing</SelectItem>
                    <SelectItem value="funnels">Conversion Funnels</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-[#002B5B] font-medium">Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                  <SelectTrigger className="border-gray-300 focus:border-[#007D78]">
                    <SelectValue placeholder="When to start?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1month">Within 1 month</SelectItem>
                    <SelectItem value="3months">Within 3 months</SelectItem>
                    <SelectItem value="6months">Within 6 months</SelectItem>
                    <SelectItem value="exploring">Just exploring</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#002B5B] font-medium">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="border-gray-300 focus:border-[#007D78] min-h-[80px]"
              placeholder="Tell us about your needs or questions..."
            />
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="updates"
              checked={formData.updates}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, updates: checked as boolean }))}
              className="border-gray-300 data-[state=checked]:bg-[#007D78]"
            />
            <Label htmlFor="updates" className="text-sm text-gray-600">
              I'd like to receive updates and resources.
            </Label>
          </div>
          
          <Button
            type="submit"
            disabled={!formData.name.trim() || !formData.email.trim() || isSubmitting}
            className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold py-3 mt-6"
          >
            {isSubmitting ? 'Sending...' : config.buttonText}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotLeadCaptureModal;