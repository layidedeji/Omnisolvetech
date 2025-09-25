import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, TrendingUp, Layers } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: "Strategy-first",
      description: "We design with purpose, not assumptions."
    },
    {
      icon: Zap,
      title: "Scalable solutions",
      description: "Built to grow and evolve with your business."
    },
    {
      icon: TrendingUp,
      title: "Measurable results",
      description: "If it doesn't move the needle, we don't ship it."
    },
    {
      icon: Layers,
      title: "Fully tailored",
      description: "Every solution is precision-crafted for your needs."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#002B5B] via-[#003875] to-[#007D78] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35] rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF6B35] rounded-full opacity-30 translate-y-24 -translate-x-24"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#007D78] mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl opacity-90">
            We're more than consultants. We're transformation partners. With a laser focus on outcomes and a proven track record of measurable success, we deliver precision-crafted solutions that bring clarity, speed, and scale to your operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;