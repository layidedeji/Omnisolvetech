import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Brain, Target, Shield, Globe } from "lucide-react";

const ValueHighlights = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: "End-to-End Business Diagnostics",
      description: "Complete operational analysis"
    },
    {
      icon: Brain,
      title: "AI That Drives Action",
      description: "Smart automation solutions"
    },
    {
      icon: Target,
      title: "Conversion-Focused Funnel Design",
      description: "Optimized customer journeys"
    },
    {
      icon: Shield,
      title: "White-Labeled Tech & Content Control",
      description: "Branded platform solutions"
    },
    {
      icon: Globe,
      title: "Custom Website Experiences",
      description: "High-performance web solutions"
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      {/* Teal accent divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007D78] to-[#00a89a]"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#007D78] to-[#00a89a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-[#002B5B] mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueHighlights;