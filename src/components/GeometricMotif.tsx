const HeroGeometric = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Large dominant blocks with soft gradients */}
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(220, 88%, 61%)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="hsl(220, 88%, 61%)" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="hg2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(220, 60%, 70%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(228, 20%, 90%)" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="hg3" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="hsl(220, 88%, 61%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(220, 40%, 80%)" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="hg4" x1="0" y1="0.5" x2="1" y2="0.5">
            <stop offset="0%" stopColor="hsl(220, 88%, 61%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(230, 30%, 85%)" stopOpacity="0.12" />
          </linearGradient>
          <filter id="blur1" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
          </filter>
          <filter id="blur2" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
        </defs>

        {/* Background blur layer */}
        <circle cx="350" cy="250" r="180" fill="hsl(220, 88%, 61%)" fillOpacity="0.06" filter="url(#blur2)" />

        {/* Large dominant block */}
        <rect x="80" y="40" width="260" height="200" rx="16" fill="url(#hg1)" className="animate-float-slow" />

        {/* Overlapping mid block */}
        <rect x="200" y="160" width="220" height="180" rx="12" fill="url(#hg2)" className="animate-float" />

        {/* Tall vertical block */}
        <rect x="440" y="80" width="120" height="320" rx="12" fill="url(#hg3)" />

        {/* Horizontal plane */}
        <rect x="60" y="300" width="340" height="100" rx="10" fill="url(#hg4)" className="animate-float-slow" style={{ animationDelay: "1s" }} />

        {/* Small accent blocks */}
        <rect x="100" y="430" width="80" height="80" rx="8" fill="url(#hg1)" className="animate-float" style={{ animationDelay: "2s" }} />
        <rect x="220" y="440" width="60" height="60" rx="8" fill="url(#hg2)" />
        <rect x="320" y="420" width="100" height="100" rx="8" fill="url(#hg3)" className="animate-float-slow" style={{ animationDelay: "3s" }} />
        <rect x="460" y="430" width="80" height="80" rx="8" fill="url(#hg4)" className="animate-float" style={{ animationDelay: "0.5s" }} />

        {/* Pixel grid details */}
        <rect x="380" y="50" width="24" height="24" rx="4" fill="url(#hg1)" />
        <rect x="410" y="50" width="24" height="24" rx="4" fill="url(#hg2)" />
        <rect x="380" y="80" width="24" height="24" rx="4" fill="url(#hg3)" />
        <rect x="50" y="260" width="20" height="20" rx="3" fill="url(#hg2)" />
        <rect x="500" y="540" width="24" height="24" rx="4" fill="url(#hg1)" />
        <rect x="530" y="540" width="24" height="24" rx="4" fill="url(#hg3)" />

        {/* Fine structural lines */}
        <line x1="80" y1="250" x2="560" y2="250" stroke="hsl(220, 13%, 90%)" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="340" y1="40" x2="340" y2="540" stroke="hsl(220, 13%, 90%)" strokeWidth="0.5" strokeOpacity="0.5" />
      </svg>
    </div>
  );
};

const GeometricMotif = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gm1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(220, 88%, 61%)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="hsl(220, 88%, 61%)" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="gm2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(220, 60%, 70%)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="hsl(220, 13%, 91%)" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="gm3" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(220, 88%, 61%)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="hsl(228, 20%, 95%)" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      <rect x="40" y="20" width="80" height="80" rx="8" fill="url(#gm1)" />
      <rect x="140" y="60" width="60" height="60" rx="8" fill="url(#gm2)" />
      <rect x="60" y="120" width="100" height="40" rx="6" fill="url(#gm3)" />
      <rect x="180" y="140" width="80" height="80" rx="8" fill="url(#gm1)" />
      <rect x="40" y="180" width="60" height="60" rx="8" fill="url(#gm2)" />
      <rect x="120" y="200" width="40" height="40" rx="6" fill="url(#gm3)" />

      <rect x="220" y="20" width="20" height="20" rx="4" fill="url(#gm2)" />
      <rect x="240" y="40" width="20" height="20" rx="4" fill="url(#gm1)" />
      <rect x="260" y="20" width="20" height="20" rx="4" fill="url(#gm3)" />
      <rect x="120" y="260" width="20" height="20" rx="4" fill="url(#gm1)" />
      <rect x="160" y="260" width="20" height="20" rx="4" fill="url(#gm2)" />
      <rect x="200" y="240" width="20" height="20" rx="4" fill="url(#gm3)" />
      <rect x="240" y="260" width="20" height="20" rx="4" fill="url(#gm1)" />

      <line x1="40" y1="110" x2="280" y2="110" stroke="hsl(220, 13%, 91%)" strokeWidth="0.5" />
      <line x1="130" y1="20" x2="130" y2="300" stroke="hsl(220, 13%, 91%)" strokeWidth="0.5" />
    </svg>
  );
};

export { HeroGeometric };
export default GeometricMotif;
