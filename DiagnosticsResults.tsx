import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const DiagnosticsResults = () => {
  const results = [
    { text: "Save 20–50% time through automation", percentage: 85 },
    { text: "Consolidate tools and reduce tech spend", percentage: 70 },
    { text: "Improve team output and customer retention", percentage: 90 },
    { text: "Boost conversions with smoother workflows", percentage: 75 }
  ];

  return (
    <div className="scroll-animate opacity-0 mb-20">
      <h2 className="text-4xl font-bold text-[#002B5B] mb-12 text-center">
        🚀 Results You Can Expect
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {results.map((result, index) => (
          <Card key={index} className="p-6 bg-gradient-to-r from-[#007D78]/10 to-[#FF6B35]/10">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-[#007D78] mr-4" />
              <span className="text-lg font-semibold text-[#002B5B]">{result.text}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-[#007D78] to-[#FF6B35] h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${result.percentage}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 mt-2 block">{result.percentage}% improvement potential</span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DiagnosticsResults;