import { Button } from "@/components/ui/button";
import TechBackground from "./TechBackground";
import AnimatedElements from "./AnimatedElements";
import UniversalLeadCaptureModal from "./UniversalLeadCaptureModal";
import { useState } from "react";

const HeroSection = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleScheduleCall = () => {
    setIsLeadModalOpen(true);
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#001122] via-[#002B5B] to-[#007D78] text-white overflow-hidden">
      {/* Tech background elements */}
      <TechBackground />
      
      {/* Animated elements */}
      <AnimatedElements />
      
      {/* Main content banner - no logo overlay */}
      <div className="relative z-20 container mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-5xl bg-black/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block mb-2">Marketing & Technology Solutions</span>
            <span className="block text-[#FF6B35]">That Redefine Business Growth</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            We unlock performance, elevate CX, and scale revenue with IT, AI, and automation.
          </p>
          
          <Button 
            size="lg" 
            className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white text-lg md:text-xl px-12 py-6 rounded-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-[#FF6B35] hover:border-[#E55A2B]"
            onClick={handleScheduleCall}
          >
            Schedule Your Strategy Call
          </Button>
        </div>
      </div>
      
      {/* Additional depth elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#001122] to-transparent opacity-60 z-30"></div>
      
      <UniversalLeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        actionType="strategy"
      />
    </section>
  );
};

export default HeroSection;