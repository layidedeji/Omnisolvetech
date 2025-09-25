import { Card } from '@/components/ui/card';
import { Users, Settings, Zap, TrendingUp } from 'lucide-react';

const DiagnosticsTargetAudience = () => {
  const avatars = [
    { text: "Founders scaling from chaos to clarity", icon: Users },
    { text: "Ops managers fixing broken systems", icon: Settings },
    { text: "Teams tired of inefficiency", icon: Zap },
    { text: "Leaders ready for data-driven change", icon: TrendingUp }
  ];

  return (
    <div className="scroll-animate opacity-0 mb-20">
      <h2 className="text-4xl font-bold text-[#002B5B] mb-12 text-center">
        🎯 Who This Is For
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {avatars.map((avatar, index) => {
          const IconComponent = avatar.icon;
          return (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#FF6B35]/5 to-[#007D78]/5">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#007D78] rounded-full flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium text-[#002B5B]">{avatar.text}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DiagnosticsTargetAudience;