import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Settings } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; updates: boolean }) => void;
}

const LeadCaptureModal = ({ isOpen, onClose, onSubmit }: LeadCaptureModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [updates, setUpdates] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    onSubmit({ name, email, updates });
    setIsSubmitting(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white border-0 shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#007D78] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-[#002B5B]">
            Get Instant Access to Our Systems & Automation Blueprint
          </DialogTitle>
          <p className="text-gray-600 text-sm leading-relaxed">
            Tell us who you are, and we'll take you straight to the full breakdown of how we modernize, automate, and accelerate operations.
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#002B5B] font-medium">Name *</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-gray-300 focus:border-[#007D78] focus:ring-[#007D78]"
              placeholder="Your full name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#002B5B] font-medium">Email *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-gray-300 focus:border-[#007D78] focus:ring-[#007D78]"
              placeholder="your@email.com"
            />
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="updates"
              checked={updates}
              onCheckedChange={(checked) => setUpdates(checked as boolean)}
              className="border-gray-300 data-[state=checked]:bg-[#007D78] data-[state=checked]:border-[#007D78]"
            />
            <Label htmlFor="updates" className="text-sm text-gray-600">
              I'd like to receive updates and free resources.
            </Label>
          </div>
          
          <Button
            type="submit"
            disabled={!name.trim() || !email.trim() || isSubmitting}
            className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold py-3 mt-6"
          >
            {isSubmitting ? 'Processing...' : 'Show Me the Blueprint'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;