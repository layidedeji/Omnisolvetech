import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Settings, Brain, MessageSquare, Globe, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { captureLeadData } from "@/lib/backend";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const ServicesGrid = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalService, setModalService] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', updates: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLearnMore = (serviceTitle: string) => {
    if (serviceTitle === "Business Diagnostics & Strategic Consulting") {
      navigate('/business-diagnostics');
    } else if (serviceTitle === "Small Business Marketing & Content Strategy") {
      navigate('/business-marketing');
    } else {
      setModalService(serviceTitle);
      setShowModal(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await captureLeadData({
      name: formData.name,
      email: formData.email,
      updates: formData.updates,
      service: modalService
    });
    
    if (result.success) {
      setShowModal(false);
      if (modalService.includes('IT Systems')) navigate('/it-systems-automation');
      else if (modalService.includes('AI Solutions')) navigate('/ai-solutions');
      else if (modalService.includes('Conversion')) navigate('/conversion-funnels');
      else if (modalService.includes('Website')) navigate('/custom-websites');
    }
    setIsSubmitting(false);
  };

  const services = [
    {
      icon: Search,
      title: "Business Diagnostics & Strategic Consulting",
      description: "We deep-dive into your workflows, tools, and customer experience to identify choke points and untapped opportunities. The result? A data-driven action plan that moves the needle from day one.",
      color: "from-[#FF6B35] to-[#E55A2B]"
    },
    {
      icon: Settings,
      title: "High-Performance IT Systems & Automation",
      description: "Outdated tech kills growth. We modernize your backend, automate the manual, and connect the dots across your systems. Speed goes up. Waste goes down. You win.",
      color: "from-[#007D78] to-[#FF6B35]"
    },
    {
      icon: Brain,
      title: "AI Solutions That Learn, Predict & Deliver",
      description: "No fluff—just AI that gets results. From predictive dashboards to intelligent copilots, we build tools that empower smarter, faster decisions and drive real-time business impact.",
      color: "from-[#002B5B] to-[#FF6B35]"
    },
    {
      icon: MessageSquare,
      title: "Conversion-Driven Funnels & AI Chatbots",
      description: "Our chatbots don't just talk—they convert. We craft conversational AI experiences and full-funnel journeys that guide, qualify, and close.",
      color: "from-[#007D78] to-[#002B5B]"
    },
    {
      icon: Globe,
      title: "Custom Website Experiences & White-Labeled Tools",
      description: "We build branded, beautiful, UX-optimized websites engineered to convert. Want your own platform? We also offer white-label solutions.",
      color: "from-[#FF6B35] to-[#007D78]"
    },
    {
      icon: Target,
      title: "Small Business Marketing & Content Strategy",
      description: "We help small businesses stand out and grow fast with powerful, done-for-you content strategies and lead generation systems.",
      color: "from-[#002B5B] to-[#007D78]"
    }
  ];

  return (
    <>
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#007D78] via-[#FF6B35] to-[#007D78]"></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">What We Do</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#007D78] to-[#FF6B35] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:transform hover:scale-105 bg-white">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-[#002B5B] leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                    <Button 
                      size="sm"
                      className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white border-0 rounded-full px-6"
                      onClick={() => handleLearnMore(service.title)}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-md mx-auto bg-white">
          <DialogHeader className="text-center space-y-4">
            <DialogTitle className="text-2xl font-bold text-[#002B5B]">
              Get Access to Our Blueprint
            </DialogTitle>
            <p className="text-gray-600 text-sm">
              Enter your details to access our detailed service information.
            </p>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                required
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                required
                placeholder="your@email.com"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="updates"
                checked={formData.updates}
                onCheckedChange={(checked) => setFormData(prev => ({...prev, updates: checked as boolean}))}
              />
              <Label htmlFor="updates" className="text-sm">Send me updates and resources</Label>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold"
            >
              {isSubmitting ? 'Processing...' : 'Access Information'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServicesGrid;