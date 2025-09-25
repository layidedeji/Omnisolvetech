import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Smartphone, Tablet, Code, Palette, Zap, TrendingUp, Users, Star, ArrowRight } from 'lucide-react';

export default function CustomWebsites() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002B5B] via-[#007D78] to-[#002B5B] text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              🌐 Custom Website Experiences & White-Labeled Tools
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Websites That Convert. Platforms That Scale. Experiences That Stick.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Monitor className="w-12 h-12 text-[#FF6B35] animate-pulse" />
              <Tablet className="w-12 h-12 text-white" />
              <Smartphone className="w-12 h-12 text-[#FF6B35] animate-pulse" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 py-3">
                📞 Book a Web Strategy Session
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002B5B] px-8 py-3">
                🌐 Request a White-Label Platform Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-6">
              Your website should be your most powerful salesperson...
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              But most websites are just digital brochures. OmniSolve builds conversion-engineered platforms that work 24/7 to grow your business, capture leads, and scale your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#002B5B] mb-12">
            Our Website & Platform Build Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Discovery + Experience Mapping", desc: "Deep-dive into your audience and conversion goals" },
              { icon: Palette, title: "UX Design + Conversion Psychology", desc: "Beautiful designs backed by behavioral science" },
              { icon: Code, title: "Full-Stack Development & API Integration", desc: "Modern tech stack with seamless integrations" },
              { icon: Monitor, title: "White-Labeled Platform Engineering", desc: "Fully brandable, scalable solutions" },
              { icon: TrendingUp, title: "A/B Testing, Launch & Optimization", desc: "Data-driven improvements for maximum ROI" }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-[#007D78] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-[#FF6B35] mb-4" />
                  <h3 className="font-semibold text-[#002B5B] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#002B5B] mb-12">Deliverables</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Live, Custom-Built Website or Platform",
              "UX & Brand System", 
              "Conversion Map + Admin Control Panel",
              "Reseller-Ready Toolkit (for white-label clients)"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#007D78] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OmniSolve Builds Better */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#002B5B] mb-12">
            Why OmniSolve Builds Better
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Built for growth, not just good looks", icon: TrendingUp },
              { title: "Performance-optimized at every level", icon: Zap },
              { title: "Fully brandable, scalable, and resale-ready", icon: Star },
              { title: "Backed by conversion science + modern stacks", icon: Code }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                  <p className="font-medium text-[#002B5B]">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Impact Metrics */}
      <section className="py-16 bg-[#002B5B] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Real Impact Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "2–5X", label: "Qualified conversion rate increase" },
              { metric: "3X+", label: "Brand authority boost" },
              { metric: "50%+", label: "UX improvement across funnel" },
              { metric: "30+", label: "Sectors using white-label tools" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#FF6B35] mb-2">{item.metric}</div>
                <div className="text-teal-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's Perfect For */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#002B5B] mb-12">
            Who It's Perfect For
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Growth-stage brands ditching templates",
              "SaaS companies and consultants",
              "Agencies wanting their own branded platforms",
              "Founders launching digital tools at scale"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Badge className="bg-[#007D78] text-white">{index + 1}</Badge>
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#007D78] to-[#002B5B] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Build Your Platform?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 py-3">
              📞 Book Strategy Call
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002B5B] px-8 py-3">
              🌐 Request Live Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002B5B] px-8 py-3">
              💬 Chat With Omni — Your AI Website Architect
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}