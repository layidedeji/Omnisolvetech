import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, TrendingUp, Target, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ChatbotWidget from "@/components/ChatbotWidget";

const BusinessMarketing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#FF6B35] via-[#002B5B] to-[#007D78] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-lg animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-lg animate-ping"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 text-white hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              📣 Business Marketing & Content Strategy
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-orange-200">
              Make Your Brand Unmissable — Content That Connects and Converts
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              If your business isn't visible, it's vulnerable. At OmniSolve Tech, we help small businesses break through the noise with strategic content and intelligent marketing systems that don't just look good — they drive results.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="scroll-animate opacity-0 max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-700 leading-relaxed">
            We design every asset to position your brand as a leader, attract ideal clients, and turn attention into action.
          </p>
          <p className="text-2xl font-bold text-[#002B5B] mt-4">
            This is more than content. It's a growth engine.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="scroll-animate opacity-0 mb-20">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-12 text-center">
            📈 What We Do: Step-by-Step Breakdown
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Marketing Discovery",
                icon: <Target className="h-8 w-8 text-[#FF6B35]" />,
                items: ["Brand voice analysis", "Audience segmentation", "Market positioning audit", "Growth goal alignment"]
              },
              {
                title: "Content Strategy Mapping",
                icon: <TrendingUp className="h-8 w-8 text-[#007D78]" />,
                items: ["Content pillars & campaign themes", "Monthly calendars & delivery timelines", "Conversion-focused messaging frameworks"]
              },
              {
                title: "Lead Generation System Design",
                icon: <Users className="h-8 w-8 text-[#FF6B35]" />,
                items: ["Lead magnets (guides, checklists, templates)", "High-converting landing pages", "Automated email sequences", "Funnel structure with CTAs"]
              }
            ].map((service, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-[#007D78] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold ml-3 text-[#002B5B]">{service.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-[#007D78] mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="scroll-animate opacity-0 mb-20">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-12 text-center">
            🎁 What You Get (Deliverables That Drive Results)
          </h2>
          
          <div className="bg-gradient-to-r from-[#007D78]/10 to-[#FF6B35]/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "90-Day Custom Content Strategy Roadmap",
                "Plug-and-play Social Media Kit",
                "3–5 SEO Landing Pages (optimized + published)",
                "Lead Magnet Design + Email Automation Workflow",
                "Weekly Blog or Newsletter Content (optional add-on)"
              ].map((deliverable, index) => (
                <div key={index} className="flex items-center">
                  <Zap className="h-5 w-5 text-[#FF6B35] mr-3" />
                  <span className="text-lg font-medium text-[#002B5B]">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="scroll-animate opacity-0 text-center">
          <h2 className="text-4xl font-bold text-[#002B5B] mb-8">
            ✅ Ready to Grow Your Brand Like a Pro?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            You don't need more content. You need the right content, delivered at the right time, to the right people — with zero guesswork.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-4 text-lg"
              onClick={() => navigate("/")}
            >
              📞 Book a Free Strategy Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#007D78] text-[#007D78] hover:bg-[#007D78] hover:text-white px-8 py-4 text-lg"
              onClick={() => navigate("/")}
            >
              📝 Claim Your 90-Day Content Roadmap
            </Button>
          </div>
        </div>
      </div>

      <ChatbotWidget />
    </div>
  );
};

export default BusinessMarketing;