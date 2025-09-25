import { Card } from '@/components/ui/card';
import { BarChart3, Map, Search, Settings, Target, TrendingUp } from 'lucide-react';

const DiagnosticsDeliverables = () => {
  const deliverables = [
    { name: "Operational Health Dashboard", icon: BarChart3 },
    { name: "CX Journey Maps (Before & After)", icon: Map },
    { name: "Gap & Efficiency Reports", icon: Search },
    { name: "Tech Optimization Blueprint", icon: Settings },
    { name: "30/60/90-Day Strategic Action Plan", icon: Target },
    { name: "Optional Lead-Gen Levers", icon: TrendingUp }
  ];

  return (
    <div className="scroll-animate opacity-0 mb-20">
      <h2 className="text-4xl font-bold text-[#002B5B] mb-12 text-center">
        🧩 What You Get (Deliverables That Make the Difference)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deliverables.map((deliverable, index) => {
          const IconComponent = deliverable.icon;
          return (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007D78] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-[#002B5B] text-sm">{deliverable.name}</h3>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DiagnosticsDeliverables;