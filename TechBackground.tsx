const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced circuit board pattern with stronger visibility */}
      <div className="absolute inset-0 opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M15 15h70M15 50h70M15 85h70M50 0v100" stroke="#00D4FF" strokeWidth="3" opacity="0.8"/>
              <path d="M30 30h40M30 70h40" stroke="#FF6B35" strokeWidth="2.5" opacity="0.7"/>
              <circle cx="15" cy="15" r="4" fill="#00D4FF" className="animate-pulse"/>
              <circle cx="85" cy="50" r="4" fill="#FF6B35" className="animate-pulse delay-300"/>
              <circle cx="50" cy="85" r="4" fill="#00D4FF" className="animate-pulse delay-600"/>
              <rect x="70" y="30" width="10" height="10" fill="#00D4FF" opacity="0.8"/>
              <rect x="30" y="60" width="8" height="8" fill="#FF6B35" opacity="0.7"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
      
      {/* Larger, more prominent data streams */}
      <div className="absolute top-16 left-8 w-4 h-48 bg-gradient-to-b from-transparent via-[#00D4FF] to-transparent animate-pulse shadow-2xl shadow-[#00D4FF]/70"></div>
      <div className="absolute top-48 right-16 w-4 h-40 bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent animate-pulse delay-500 shadow-2xl shadow-[#FF6B35]/70"></div>
      <div className="absolute bottom-32 left-1/4 w-4 h-44 bg-gradient-to-b from-transparent via-[#00D4FF] to-transparent animate-pulse delay-1000 shadow-2xl shadow-[#00D4FF]/70"></div>
      <div className="absolute top-24 left-3/4 w-4 h-36 bg-gradient-to-b from-transparent via-[#FF6B35] to-transparent animate-pulse delay-1500 shadow-2xl shadow-[#FF6B35]/70"></div>
      <div className="absolute bottom-48 right-1/3 w-4 h-32 bg-gradient-to-b from-transparent via-[#00D4FF] to-transparent animate-pulse delay-2000 shadow-2xl shadow-[#00D4FF]/70"></div>
      
      {/* Larger, more prominent holographic UI panels */}
      <div className="absolute top-12 right-12 w-52 h-32 border-3 border-[#00D4FF] bg-[#00D4FF]/20 backdrop-blur-lg rounded-xl animate-pulse shadow-2xl shadow-[#00D4FF]/50">
        <div className="p-4">
          <div className="h-3 bg-[#00D4FF] rounded mb-3 opacity-80 animate-pulse"></div>
          <div className="h-3 bg-[#00D4FF] rounded w-3/4 opacity-60 animate-pulse delay-200"></div>
          <div className="h-2 bg-[#00D4FF] rounded w-1/2 opacity-50 mt-2 animate-pulse delay-400"></div>
        </div>
      </div>
      
      <div className="absolute bottom-20 right-8 w-48 h-28 border-3 border-[#FF6B35] bg-[#FF6B35]/20 backdrop-blur-lg rounded-xl animate-pulse delay-700 shadow-2xl shadow-[#FF6B35]/50">
        <div className="p-4">
          <div className="h-3 bg-[#FF6B35] rounded mb-3 opacity-80 animate-pulse"></div>
          <div className="h-3 bg-[#FF6B35] rounded w-2/3 opacity-60 animate-pulse delay-300"></div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-4 w-44 h-24 border-3 border-[#00D4FF] bg-[#00D4FF]/15 backdrop-blur-lg rounded-xl animate-pulse delay-1200 shadow-2xl shadow-[#00D4FF]/40">
        <div className="p-3">
          <div className="h-2 bg-[#00D4FF] rounded mb-2 opacity-70 animate-pulse"></div>
          <div className="h-2 bg-[#00D4FF] rounded w-3/4 opacity-50 animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export default TechBackground;