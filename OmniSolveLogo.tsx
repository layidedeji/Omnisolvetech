import React from 'react';

interface OmniSolveLogoProps {
  headerMode?: boolean;
}

const OmniSolveLogo: React.FC<OmniSolveLogoProps> = ({ headerMode = false }) => {
  if (headerMode) {
    return (
      <div className="flex items-center justify-center">
        {/* Header version - much larger */}
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/6830a68be6a430e8ea76127a_1751513299348_616ccbbe.png" 
          alt="OmniSolve Tech Logo" 
          className="h-32 md:h-40 lg:h-48 xl:h-56 w-auto"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mb-20">
      {/* Main logo image */}
      <div className="text-center">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/6830a68be6a430e8ea76127a_1751513299348_616ccbbe.png" 
          alt="OmniSolve Tech - Real Results, Repeatable Success" 
          className="h-48 md:h-64 lg:h-80 xl:h-96 w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default OmniSolveLogo;