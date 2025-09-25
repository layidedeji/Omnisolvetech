const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#007D78]/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Teal accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#007D78] to-[#FF6B35] mx-auto mb-6"></div>
          
          <h2 className="text-4xl font-bold text-[#002B5B] mb-8">
            Who We Are
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="text-xl font-medium text-[#002B5B]">
              OmniSolve Tech is a results-driven IT and AI consultancy that helps businesses stop guessing and start scaling.
            </p>
            
            <p>
              We partner with forward-thinking organizations to streamline operations, elevate customer experiences, and unlock new revenue—using precision-engineered solutions built on AI, automation, and cutting-edge technology.
            </p>
            
            <p>
              We don't just patch problems—we identify the root causes behind inefficiency and lost opportunity. From messy systems to underperforming funnels, we assess your entire operation and design scalable, intelligent solutions that make every process sharper, faster, and smarter.
            </p>
            
            <div className="bg-gradient-to-r from-[#007D78] to-[#00a89a] p-6 rounded-lg text-white mt-8">
              <p className="text-lg font-semibold">
                Whether you need smarter workflows, AI-powered tools, chatbot funnels, or high-performance websites—OmniSolve Tech turns complexity into clarity, and ambition into results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;