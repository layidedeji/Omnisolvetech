import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Sparkles } from "lucide-react";

interface AILeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; updates: boolean }) => void;
}

const AILeadCaptureModal: React.FC<AILeadCaptureModalProps> = ({ isOpen, onClose, onSubmit }) => {
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#002B5B] to-[#007D78] rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-[#002B5B] leading-tight">
            Unlock the Full Power of Intelligent AI Solutions
          </DialogTitle>
          <p className="text-gray-600 text-sm leading-relaxed">
            Tell us who you are, and we'll show you how OmniSolve AI can help you predict, automate, and outperform your competition.
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-[#002B5B] font-medium">Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`mt-1 border-gray-200 focus:border-[#007D78] focus:ring-[#007D78] ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <Label htmlFor="email" className="text-[#002B5B] font-medium">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`mt-1 border-gray-200 focus:border-[#007D78] focus:ring-[#007D78] ${errors.email ? 'border-red-500' : ''}`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            
            <div className="flex items-center space-x-3">
              <Checkbox
                id="updates"
                checked={formData.updates}
                onCheckedChange={(checked) => handleInputChange('updates', checked as boolean)}
                className="border-[#007D78] data-[state=checked]:bg-[#007D78]"
              />
              <Label htmlFor="updates" className="text-sm text-gray-600 cursor-pointer">
                I'd like to receive free AI insights and strategy guides.
              </Label>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#002B5B] to-[#007D78] hover:from-[#001A3D] hover:to-[#005A56] text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>Access the AI Blueprint</span>
          </Button>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            🔒 Your information is secure and will never be shared.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AILeadCaptureModal;