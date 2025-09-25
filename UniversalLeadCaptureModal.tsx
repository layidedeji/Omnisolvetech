import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Calendar, Users, Target, MessageCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
interface UniversalLeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  actionType: 'consultation' | 'support' | 'strategy' | 'demo' | 'contact' | 'results' | 'email' | 'phone';
}

const UniversalLeadCaptureModal = ({ isOpen, onClose, actionType }: UniversalLeadCaptureModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    service: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const getModalConfig = () => {
    switch (actionType) {
      case 'consultation':
        return {
          title: 'Book Your Free Consultation',
          icon: Calendar,
          description: 'Schedule a personalized consultation with our experts'
        };
      case 'support':
        return {
          title: 'Contact Support',
          icon: MessageCircle,
          description: 'Get help from our technical support team'
        };
      case 'strategy':
        return {
          title: 'Schedule Strategy Call',
          icon: Target,
          description: 'Book a strategic planning session with our team'
        };
      case 'demo':
        return {
          title: 'Request Demo',
          icon: Users,
          description: 'See our solutions in action'
        };
      case 'results':
        return {
          title: 'Get Similar Results',
          icon: Target,
          description: 'Learn how we can achieve similar results for you'
        };
      case 'email':
        return {
          title: 'Email Us',
          icon: Mail,
          description: 'Send us an email and we\'ll get back to you'
        };
      case 'phone':
        return {
          title: 'Call Us',
          icon: Phone,
          description: 'Request a phone call from our team'
        };
      default:
        return {
          title: 'Contact Us',
          icon: Mail,
          description: 'Get in touch with our team'
        };
    }
  };

  const config = getModalConfig();
  const IconComponent = config.icon;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save lead to Supabase
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            name: `${formData.firstName} ${formData.lastName}`,
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            job_title: formData.jobTitle,
            service: formData.service,
            service_interest: formData.service,
            project_timeline: formData.timeline,
            budget: formData.budget,
            message: formData.message,
            source: actionType,
            status: 'new',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Error saving lead:', error);
        toast({
          title: "Error",
          description: "Failed to submit your request. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Success
      toast({
        title: "Success!",
        description: "Thank you! We'll be in touch within 24 hours.",
      });

      // Reset form and close modal
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        service: '',
        timeline: '',
        budget: '',
        message: ''
      });
      onClose();

    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#007D78] text-white rounded-lg">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <DialogTitle className="text-xl">{config.title}</DialogTitle>
              <p className="text-sm text-gray-600">{config.description}</p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="service">Service Interest</Label>
            <Select onValueChange={(value) => handleInputChange('service', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                <SelectItem value="automation">IT Systems & Automation</SelectItem>
                <SelectItem value="websites">Custom Websites</SelectItem>
                <SelectItem value="funnels">Conversion Funnels</SelectItem>
                <SelectItem value="marketing">Business Marketing</SelectItem>
                <SelectItem value="diagnostics">Business Diagnostics</SelectItem>
                <SelectItem value="consultation">General Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="timeline">Project Timeline</Label>
            <Select onValueChange={(value) => handleInputChange('timeline', value)}>
              <SelectTrigger>
                <SelectValue placeholder="When do you need this?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="3-months">Within 3 months</SelectItem>
                <SelectItem value="6-months">Within 6 months</SelectItem>
                <SelectItem value="planning">Just planning</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project or requirements..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1 bg-[#007D78] hover:bg-teal-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>

          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UniversalLeadCaptureModal;