import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const DiagnosticsHero = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navigation with Breadcrumbs */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-40 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[#002B5B] hover:text-[#007D78]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="text-sm text-gray-500">
              <span>Home</span> / <span>Services</span> / <span className="text-[#002B5B] font-medium">Business Diagnostics</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002B5B] to-[#007D78]"></div>
        
        {/* Circuit Lines Animation */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                <circle cx="20" cy="20" r="2" fill="white" opacity="0.5" />
                <circle cx="80" cy="80" r="2" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" className="animate-pulse" />
          </svg>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Business Diagnostics & Strategic Consulting
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            Clarity That Pays Off — Strategy That Moves the Needle
          </p>
        </div>
      </section>
    </>
  );
};

export default DiagnosticsHero;