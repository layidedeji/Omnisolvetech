import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ChatbotWidget from '@/components/ChatbotWidget';
import { useNavigate } from 'react-router-dom';
import DiagnosticsHero from '@/components/DiagnosticsHero';
import DiagnosticsProcess from '@/components/DiagnosticsProcess';
import DiagnosticsDeliverables from '@/components/DiagnosticsDeliverables';
import DiagnosticsDifference from '@/components/DiagnosticsDifference';
import DiagnosticsResults from '@/components/DiagnosticsResults';
import DiagnosticsTargetAudience from '@/components/DiagnosticsTargetAudience';
import DiagnosticsImplementation from '@/components/DiagnosticsImplementation';

const BusinessDiagnostics = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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

  return (
    <div className="min-h-screen bg-white">
      <DiagnosticsHero />

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Introduction */}
          <div className="scroll-animate opacity-0 mb-20">
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Behind every successful business is a clear, accurate view of how it operates — not in theory, but in reality. 
              At OmniSolve Tech, we don't rely on surface metrics or shallow observations. Our Business Diagnostics & 
              Strategic Consulting service is a high-impact, no-fluff deep dive into your operation's DNA — designed to 
              uncover hidden inefficiencies, untapped profit centers, and overlooked opportunities.
            </p>
            <div className="text-center bg-gradient-to-r from-[#007D78]/10 to-[#FF6B35]/10 p-8 rounded-lg">
              <p className="text-2xl font-bold text-[#002B5B] mb-2">We don't guess. We diagnose.</p>
              <p className="text-lg text-gray-600">
                And then we deliver a tailored strategic roadmap designed to help you scale faster, serve better, and operate smarter.
              </p>
            </div>
          </div>

          <DiagnosticsProcess />
          <DiagnosticsDeliverables />
          <DiagnosticsDifference />
          <DiagnosticsResults />
          <DiagnosticsTargetAudience />
          <DiagnosticsImplementation />

          {/* Final CTA Block */}
          <div className="scroll-animate opacity-0 text-center">
            <h2 className="text-4xl font-bold text-[#002B5B] mb-6">
              ✅ Ready to See What's Under the Hood?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              This isn't a consultation. It's your next strategic advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-3 text-lg"
                onClick={handleContactClick}
              >
                📞 Book a Free Strategy Session
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#002B5B] px-8 py-3 text-lg"
                onClick={handleContactClick}
              >
                📝 Get Your Diagnostic Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ChatbotWidget />
    </div>
  );
};

export default BusinessDiagnostics;