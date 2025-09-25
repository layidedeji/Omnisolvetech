import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, TrendingUp, Users, Zap, Target, BarChart3 } from 'lucide-react';

const ConversionFunnels = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002B5B] via-[#007D78] to-[#002B5B] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="w-16 h-16 text-[#FF6B35] mr-4" />
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              💬 Conversion-Driven Funnels & AI Chatbots
            </h1>
            <p className="text-2xl mb-8 text-gray-200">
              Bots That Sell. Funnels That Never Sleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-3">
                📞 Book Strategy Session
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#002B5B] px-8 py-3">
                🤖 Request Chatbot Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Masterplan */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#002B5B] text-center mb-12">
            End-to-End Funnel & Chatbot Masterplan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Funnel Strategy & Flow Architecture", desc: "Strategic mapping of customer journey touchpoints" },
              { icon: MessageSquare, title: "Use-Case Based Chatbot Planning", desc: "Custom conversation flows for your specific business" },
              { icon: Users, title: "UX + Conversion-Focused Copywriting", desc: "Psychology-driven messaging that converts" },
              { icon: Zap, title: "AI Integration with CRM & Calendars", desc: "Seamless data flow and appointment booking" },
              { icon: BarChart3, title: "Optimization and A/B Testing", desc: "Continuous improvement through data insights" }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007D78] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#002B5B] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#002B5B] text-center mb-12">Deliverables</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Custom Funnel Blueprint",
              "Fully Scripted, Branded AI Chatbot", 
              "System Integrations",
              "CTA Script Libraries",
              "Performance Dashboards"
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-[#007D78] to-[#002B5B] text-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OmniSolve Funnels Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#002B5B] text-center mb-12">
            Why OmniSolve Funnels Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Engineered with sales psychology",
              "Human-style conversations",
              "Automation + personalization", 
              "Multi-platform compatibility"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 bg-[#FF6B35] rounded-full mr-4"></div>
                <span className="text-lg text-[#002B5B]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-16 bg-[#002B5B] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Real Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { stat: "5X", desc: "conversion rate increases" },
              { stat: "80%", desc: "faster lead qualification" },
              { stat: "2-3X", desc: "more appointments booked" },
              { stat: "100%", desc: "reduced manual load on teams" }
            ].map((item, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-[#FF6B35] mb-2">{item.stat}</div>
                <div className="text-gray-300">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#002B5B] text-center mb-12">Who It's For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Fast-scaling teams",
              "Sales-heavy businesses",
              "Founders wanting 24/7 lead capture",
              "Marketers frustrated with form drop-offs"
            ].map((item, index) => (
              <Card key={index} className="border-2 border-[#007D78] hover:bg-[#007D78] hover:text-white transition-colors">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">{item}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#007D78] to-[#002B5B] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Build Funnels That Convert?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-3">
              📞 Book a Funnel Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#002B5B] px-8 py-3">
              🤖 Request a Live Chatbot Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#002B5B] px-8 py-3">
              💬 Talk to Omni — Our AI Funnel Assistant Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConversionFunnels;