import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Settings, Users, Zap, Wrench } from 'lucide-react';

const DiagnosticsImplementation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { text: "Automation builds", icon: Settings },
    { text: "Customer journey redesign", icon: Users },
    { text: "AI tools deployment", icon: Zap },
    { text: "Tech stack cleanup", icon: Wrench }
  ];

  return (
    <div className="scroll-animate opacity-0 mb-20">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#007D78]/10 p-6 rounded-lg border-2 border-dashed border-[#FF6B35] hover:border-[#007D78] transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#002B5B]">🎁 Bonus: Implementation Partnership</h3>
              <ChevronDown className={`w-6 h-6 text-[#007D78] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <p className="text-gray-600 mt-2">We can bring your strategy to life</p>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#007D78] rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#002B5B] font-medium">{service.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default DiagnosticsImplementation;