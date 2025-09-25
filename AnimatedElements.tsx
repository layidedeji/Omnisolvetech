const AnimatedElements = () => {
  return (
    <>
      {/* Larger, more prominent floating geometric shapes */}
      <div className="absolute top-1/4 left-8 w-10 h-10 border-4 border-[#00D4FF] rotate-45 animate-spin shadow-2xl shadow-[#00D4FF]/70" style={{animationDuration: '8s'}}></div>
      <div className="absolute top-1/3 right-12 w-12 h-12 border-4 border-[#FF6B35] animate-bounce shadow-2xl shadow-[#FF6B35]/70" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-[#00D4FF] rounded-full animate-ping shadow-2xl shadow-[#00D4FF]/80" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-2/3 left-1/5 w-7 h-7 border-3 border-[#FF6B35] rounded-full animate-pulse shadow-2xl shadow-[#FF6B35]/60" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/6 right-1/3 w-9 h-9 border-3 border-[#00D4FF] animate-spin shadow-2xl shadow-[#00D4FF]/60" style={{animationDuration: '12s', animationDelay: '1.5s'}}></div>
      
      {/* Enhanced network connection lines with stronger visibility */}
      <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0"/>
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="1"/>
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0"/>
            <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M100 150 Q400 250 800 200" stroke="url(#lineGradient1)" strokeWidth="4" fill="none">
          <animate attributeName="stroke-dasharray" values="0 1200;1200 0;0 1200" dur="5s" repeatCount="indefinite"/>
        </path>
        <path d="M200 500 Q500 350 900 480" stroke="url(#lineGradient2)" strokeWidth="4" fill="none">
          <animate attributeName="stroke-dasharray" values="0 1200;1200 0;0 1200" dur="7s" repeatCount="indefinite"/>
        </path>
        <path d="M50 350 Q350 150 700 300" stroke="url(#lineGradient1)" strokeWidth="3" fill="none">
          <animate attributeName="stroke-dasharray" values="0 1000;1000 0;0 1000" dur="6s" repeatCount="indefinite"/>
        </path>
        <path d="M300 100 Q600 400 1000 250" stroke="url(#lineGradient2)" strokeWidth="3" fill="none">
          <animate attributeName="stroke-dasharray" values="0 1100;1100 0;0 1100" dur="8s" repeatCount="indefinite"/>
        </path>
      </svg>
      
      {/* Larger, more prominent pulsing energy orbs */}
      <div className="absolute top-20 right-1/4 w-16 h-16 bg-[#FF6B35] rounded-full opacity-80 animate-pulse shadow-2xl shadow-[#FF6B35]/80" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 left-1/5 w-14 h-14 bg-[#00D4FF] rounded-full opacity-70 animate-pulse shadow-2xl shadow-[#00D4FF]/80" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 right-1/6 w-12 h-12 bg-[#00D4FF] rounded-full opacity-60 animate-pulse shadow-2xl shadow-[#00D4FF]/70" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute bottom-1/3 left-2/3 w-10 h-10 bg-[#FF6B35] rounded-full opacity-70 animate-pulse shadow-2xl shadow-[#FF6B35]/70" style={{animationDelay: '3.5s'}}></div>
      
      {/* Enhanced AI Network nodes */}
      <div className="absolute top-1/5 left-1/2 w-5 h-5 bg-[#00D4FF] rounded-full animate-ping shadow-2xl shadow-[#00D4FF]/90" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-1/5 right-1/3 w-5 h-5 bg-[#FF6B35] rounded-full animate-ping shadow-2xl shadow-[#FF6B35]/90" style={{animationDelay: '4.5s'}}></div>
      <div className="absolute top-3/4 left-1/4 w-4 h-4 bg-[#00D4FF] rounded-full animate-ping shadow-xl shadow-[#00D4FF]/80" style={{animationDelay: '5s'}}></div>
      <div className="absolute top-1/8 left-3/4 w-4 h-4 bg-[#FF6B35] rounded-full animate-ping shadow-xl shadow-[#FF6B35]/80" style={{animationDelay: '5.5s'}}></div>
    </>
  );
};

export default AnimatedElements;