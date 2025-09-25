import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Target, Zap, BarChart, Users, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AISolutions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#002B5B] via-[#007D78] to-[#002B5B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              🤖 AI Solutions That Learn, Predict & Deliver
            </h1>
            <p className="text-xl mb-4 text-teal-100">Intelligent. Actionable. Unmatched.</p>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Forget the AI hype. You need real results. At OmniSolve, we build AI that actually works—predictive systems that anticipate problems, intelligent automation that eliminates busywork, and data-driven insights that turn guesswork into growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-3 rounded-full">
                📞 Book Your AI Strategy Session
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002B5B] px-8 py-3 rounded-full">
                🧠 Request a Custom Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Game Plan Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">The OmniSolve AI Game Plan</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#007D78] to-[#FF6B35] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "AI Strategy & Discovery", desc: "We audit your data, processes, and goals to design AI that fits your business." },
              { icon: Target, title: "Custom AI Development", desc: "Predictive models, intelligent automation, and decision-support systems built for you." },
              { icon: Zap, title: "Integration & Deployment", desc: "Seamless implementation across your existing systems and workflows." },
              { icon: BarChart, title: "Performance & Optimization", desc: "Ongoing monitoring, learning, and improvement to maximize ROI." }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#007D78] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-[#002B5B]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Deliverables That Create Competitive Advantage</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#007D78] to-[#FF6B35] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "AI Strategy Roadmap",
              "Predictive Analytics Dashboards",
              "Intelligent Automation Workflows",
              "Custom AI Models & Algorithms",
              "Performance Monitoring Systems",
              "Training & Support Documentation"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#007D78]" />
                <span className="text-[#002B5B] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OmniSolve Section */}
      <section className="py-16 bg-gradient-to-br from-[#002B5B] to-[#007D78] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why OmniSolve AI Is an Unfair Advantage</h2>
            <div className="w-24 h-1 bg-[#FF6B35] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Results-Driven", desc: "We build AI that delivers measurable business impact, not just cool demos." },
              { title: "Industry Expertise", desc: "Deep knowledge across sectors means AI solutions that understand your business." },
              { title: "Future-Proof", desc: "Scalable, adaptable AI that grows with your business and evolving needs." }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Real Impact, Real Metrics</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#007D78] to-[#FF6B35] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "40-80%", desc: "Reduction in manual tasks" },
              { metric: "3x", desc: "Faster decision-making" },
              { metric: "25-50%", desc: "Improvement in accuracy" },
              { metric: "ROI", desc: "Positive within 6 months" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">{item.metric}</div>
                <div className="text-[#002B5B] font-medium">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Who It's Built For</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#007D78] to-[#FF6B35] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Data-rich businesses ready to leverage insights",
              "Companies with repetitive, manual processes",
              "Organizations seeking competitive intelligence",
              "Teams drowning in data but starving for insights"
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-[#007D78] mx-auto mb-4" />
                  <p className="text-[#002B5B] font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#002B5B] to-[#007D78] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 text-white/90">Let's build intelligent solutions that deliver real results.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-3 rounded-full">
              📞 Book Your AI Strategy Session
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002B5B] px-8 py-3 rounded-full">
              🧠 Request a Custom Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002B5B] px-8 py-3 rounded-full">
              💬 Talk to Omni — Your AI Copilot
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutions;