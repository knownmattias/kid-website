const GeometricMotif = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Modular geometric blocks with subtle gradients */}
      <defs>
        <linearGradient id="gm1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(215, 18%, 34%)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="hsl(215, 18%, 34%)" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="gm2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(220, 13%, 70%)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="hsl(220, 13%, 91%)" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="gm3" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(215, 18%, 34%)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="hsl(240, 20%, 95%)" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Large blocks */}
      <rect x="40" y="20" width="80" height="80" rx="4" fill="url(#gm1)" />
      <rect x="140" y="60" width="60" height="60" rx="4" fill="url(#gm2)" />
      <rect x="60" y="120" width="100" height="40" rx="4" fill="url(#gm3)" />
      <rect x="180" y="140" width="80" height="80" rx="4" fill="url(#gm1)" />
      <rect x="40" y="180" width="60" height="60" rx="4" fill="url(#gm2)" />
      <rect x="120" y="200" width="40" height="40" rx="4" fill="url(#gm3)" />

      {/* Small pixel blocks */}
      <rect x="220" y="20" width="20" height="20" rx="2" fill="url(#gm2)" />
      <rect x="240" y="40" width="20" height="20" rx="2" fill="url(#gm1)" />
      <rect x="260" y="20" width="20" height="20" rx="2" fill="url(#gm3)" />
      <rect x="120" y="260" width="20" height="20" rx="2" fill="url(#gm1)" />
      <rect x="160" y="260" width="20" height="20" rx="2" fill="url(#gm2)" />
      <rect x="200" y="240" width="20" height="20" rx="2" fill="url(#gm3)" />
      <rect x="240" y="260" width="20" height="20" rx="2" fill="url(#gm1)" />

      {/* Fine lines */}
      <line x1="40" y1="110" x2="280" y2="110" stroke="hsl(220, 13%, 91%)" strokeWidth="0.5" />
      <line x1="130" y1="20" x2="130" y2="300" stroke="hsl(220, 13%, 91%)" strokeWidth="0.5" />
    </svg>
  );
};

export default GeometricMotif;
