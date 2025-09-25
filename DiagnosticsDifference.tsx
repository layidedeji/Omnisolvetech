import { Search, Brain, Target, Zap, Award } from 'lucide-react';

const DiagnosticsDifference = () => {
  const differences = [
    { text: "Problem hunters, not passive auditors", icon: Search },
    { text: "Strategic + technical hybrid thinking", icon: Brain },
    { text: "Fully actionable, execution-ready roadmaps", icon: Target },
    { text: "CX-optimized, AI-enhanced solutions", icon: Zap },
    { text: "Human-first strategies for long-term growth", icon: Award }
  ];

  return (
    <div className="scroll-animate opacity-0 mb-20">
      <h2 className="text-4xl font-bold text-[#002B5B] mb-12 text-center">
        🔥 What Makes OmniSolve Different
      </h2>
      <div className="bg-gradient-to-r from-[#002B5B]/5 to-[#007D78]/5 p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differences.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#007D78] rounded-full flex items-center justify-center">
                  <IconComponent className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-medium text-[#002B5B]">✅ {item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticsDifference;