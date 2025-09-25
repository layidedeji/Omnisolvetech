import { useEffect } from 'react';
import { ArrowLeft, Settings, CheckCircle, Target, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';

const ITSystemsAutomation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const processSteps = [
    {
      title: "Infrastructure & Systems Audit",
      items: ["Platform compatibility and integration gaps", "Manual vs automated processes", "Redundant or unused software", "Security, compliance, and reliability risks"]
    },
    {
      title: "Architecture Redesign", 
      items: ["Modernized backend", "Scalable, future-ready architecture", "API-based system integrations", "Cloud infrastructure recommendations"]
    },
    {
      title: "Custom Automation Mapping",
      items: ["Task automation", "Workflow triggers and logic maps", "Notifications, approvals, and reporting flows"]
    },
    {
      title: "Tool Selection & Implementation",
      items: ["CRM, ERP, helpdesk, and automation tools", "Low-code/no-code platforms", "AI-enhanced integrations"]
    },
    {
      title: "Launch & Performance Optimization",
      items: ["QA, training, onboarding", "Dashboard setup and SOP docs", "Ongoing support and optimization plan"]
    }
  ];

  const deliverables = [
    "IT Infrastructure Blueprint",
    "System Architecture Map", 
    "Automation Playbook",
    "SOP & Documentation Pack",
    "Performance Dashboards",
    "Support Plan (Optional)"
  ];

  const differences = [
    "Built for scale — not patchwork",
    "Strategy + tech in one package",
    "Vendor-agnostic solutions", 
    "Designed to evolve with your business",
    "Clear, measurable ROI"
  ];

  const results = [
    "Save 30–70% time with automation",
    "Eliminate bottlenecks and redundant tasks",
    "Reduce human error and increase throughput",
    "Improve team visibility and data flow"
  ];

  const targetAudience = [
    "Fast-scaling businesses",
    "Ops teams drowning in manual work", 
    "Leaders stuck with legacy tools",
    "Anyone ready to streamline for growth"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-[#007D78] hover:text-[#005A56] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002B5B] via-[#007D78] to-[#002B5B] text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">
              ⚙️ High-Performance IT Systems & Automation
            </h1>
            <p className="text-2xl mb-8 text-teal-100">
              Modernize. Automate. Accelerate.
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Outdated tech kills growth. At OmniSolve Tech, we build intelligent, integrated, and high-performing IT systems that streamline your operations, eliminate bottlenecks, and give your business the infrastructure to scale. We connect the dots across your platforms, teams, and data to deliver performance without friction.
            </p>
            <p className="text-xl font-semibold mt-6 text-[#FF6B35]">
              Speed goes up. Waste goes down. You win.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
              🔍 Step-by-Step: Our Systems & Automation Process
            </h2>
          </div>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-l-4 border-[#007D78] shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#002B5B] mb-4">
                    {index + 1}. {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#007D78] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
              🧩 Deliverables That Drive Efficiency
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007D78] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#002B5B]">{deliverable}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
              💡 Why OmniSolve Is Different
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {differences.map((difference, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                <CheckCircle className="w-6 h-6 text-[#007D78] mr-4 flex-shrink-0" />
                <span className="text-lg text-gray-700">{difference}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
              🚀 Results You Can Expect
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {results.map((result, index) => (
              <div key={index} className="flex items-center">
                <TrendingUp className="w-8 h-8 text-[#FF6B35] mr-4 flex-shrink-0" />
                <span className="text-lg text-gray-700">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-4">
              🎯 Who This Is For
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-4">
                  <Users className="w-12 h-12 text-[#007D78] mx-auto mb-4" />
                  <p className="font-semibold text-[#002B5B]">{audience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#002B5B] to-[#007D78] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Operations?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleContactClick}
              className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-3 text-lg"
            >
              📞 Book a Free Tech Discovery Call
            </Button>
            <Button
              onClick={handleContactClick}
              variant="outline"
              className="border-2 border-[#007D78] text-[#007D78] bg-white hover:bg-[#007D78] hover:text-white px-8 py-3 text-lg"
            >
              📝 Request Your Automation Blueprint
            </Button>
          </div>
          <p className="mt-6 text-lg">
            💬 Chat With Omni, Our AI Systems Assistant
          </p>
        </div>
      </section>

      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default ITSystemsAutomation;