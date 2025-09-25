import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageSquare, TrendingUp } from 'lucide-react';

interface FunnelLeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; updates: boolean }) => void;
}

const FunnelLeadCaptureModal = ({ isOpen, onClose, onSubmit }: FunnelLeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    updates: false
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData({ name: '', email: '', updates: false });
      setErrors({});
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl">
        <div className="absolute top-4 right-4 opacity-10">
          <MessageSquare className="w-16 h-16 text-[#007D78]" />
        </div>
        
        <DialogHeader className="text-center pb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#007D78] to-[#FF6B35] rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-[#002B5B] leading-tight">
            Want to See the Funnel That Closes For You?
          </DialogTitle>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Before we show you how OmniSolve builds bots that sell, let us know who you are. We'll instantly unlock the blueprint.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#002B5B] font-medium">Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`border-gray-300 focus:border-[#007D78] focus:ring-[#007D78] ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#002B5B] font-medium">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`border-gray-300 focus:border-[#007D78] focus:ring-[#007D78] ${errors.email ? 'border-red-500' : ''}`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="updates"
              checked={formData.updates}
              onCheckedChange={(checked) => setFormData({ ...formData, updates: checked as boolean })}
              className="border-[#007D78] data-[state=checked]:bg-[#007D78]"
            />
            <Label htmlFor="updates" className="text-sm text-gray-600">
              Keep me updated with new funnel strategies.
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Show Me the Funnel Blueprint
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FunnelLeadCaptureModal;