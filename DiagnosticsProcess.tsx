import { Card } from '@/components/ui/card';
import { Search, Users, Map, TrendingUp, Presentation } from 'lucide-react';

const DiagnosticsProcess = () => {
  const steps = [
    {
      icon: Users,
      title: "1. Business Discovery Session",
      items: ["Stakeholder interviews", "Systems walkthrough", "Revenue model review"]
    },
    {
      icon: Search,
      title: "2. Deep-Dive Operational Audit",
      items: ["Workflow efficiency & time-killers", "Customer touchpoints & friction areas", "Software & systems integration health"]
    },
    {
      icon: Map,
      title: "3. Customer Experience Mapping",
      items: ["Persona journey mapping", "Service delivery timelines", "Onboarding, conversion, retention flows"]
    },
    {
      icon: TrendingUp,
      title: "4. Data-Driven Opportunity Modeling",
      items: ["Red flags costing time or money", "Immediate wins", "Long-term scalability levers"]
    },
    {
      icon: Presentation,
      title: "5. Strategic Game Plan Presentation",
      items: ["Strategic priority matrix", "Milestones with timeline", "Recommended tech stack/tools"]
    }
  ];

  return (
    <div className="scroll-animate opacity-0 mb-20">
      <h2 className="text-4xl font-bold text-[#002B5B] mb-12 text-center">
        🔍 Step-By-Step: How Our Diagnostic Process Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-[#FF6B35]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#007D78] to-[#FF6B35] rounded-full flex items-center justify-center mr-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#002B5B] text-sm">{step.title}</h3>
              </div>
              <ul className="space-y-2">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DiagnosticsProcess;