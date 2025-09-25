import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Monitor, Smartphone, Tablet, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface WebsiteLeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WebsiteLeadCaptureModal = ({ isOpen, onClose }: WebsiteLeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checklist: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onClose();
    navigate('/custom-websites');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white border-0 shadow-2xl">
        <div className="relative overflow-hidden rounded-lg">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#002B5B] via-[#007D78] to-[#002B5B] opacity-5" />
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 text-[#FF6B35] animate-pulse">
            <Sparkles className="w-6 h-6" />
          </div>
          
          <DialogHeader className="relative z-10 text-center pt-6 pb-4">
            <div className="flex justify-center mb-4 space-x-2">
              <Monitor className="w-8 h-8 text-[#007D78]" />
              <Tablet className="w-8 h-8 text-[#002B5B]" />
              <Smartphone className="w-8 h-8 text-[#007D78]" />
            </div>
            <DialogTitle className="text-2xl font-bold text-[#002B5B] mb-2">
              🖥️ Want to See How We Build Platforms That Sell?
            </DialogTitle>
            <p className="text-gray-600 text-sm leading-relaxed px-4">
              We don't do templates. We create fully branded websites and tools engineered to convert — and scale. Drop your info to access our exclusive behind-the-scenes blueprint.
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="relative z-10 px-6 pb-6 space-y-4">
            <div>
              <Label htmlFor="name" className="text-[#002B5B] font-medium">Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="mt-1 border-gray-300 focus:border-[#007D78] focus:ring-[#007D78]"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-[#002B5B] font-medium">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="mt-1 border-gray-300 focus:border-[#007D78] focus:ring-[#007D78]"
                required
              />
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox
                id="checklist"
                checked={formData.checklist}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, checklist: checked as boolean }))}
                className="border-[#007D78] data-[state=checked]:bg-[#007D78]"
              />
              <Label htmlFor="checklist" className="text-sm text-gray-600">
                Send me the OmniSolve Site Launch Checklist
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email}
              className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold py-3 mt-6 transition-all duration-200 transform hover:scale-105"
            >
              {isSubmitting ? 'Unlocking...' : 'Unlock the Website Blueprint'}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WebsiteLeadCaptureModal;