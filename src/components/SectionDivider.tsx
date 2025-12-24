import { cn } from "@/lib/utils";

interface SectionDividerProps {
  direction?: "down" | "up";
  variant?: "primary" | "background" | "muted" | "transparent" | "hero";
  className?: string;
}

const SectionDivider = ({ 
  direction = "down", 
  variant = "background",
  className 
}: SectionDividerProps) => {
  const fills = {
    primary: "hsl(var(--primary))",
    background: "hsl(var(--background))",
    muted: "hsl(var(--muted) / 0.3)",
    transparent: "transparent",
    hero: "hsl(var(--primary))",
  };

  const fill = fills[variant];

  return (
    <div 
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-10",
        direction === "down" ? "-bottom-1" : "-top-1",
        direction === "up" && "rotate-180",
        className
      )}
      style={{ height: "80px" }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,80 L0,40 Q360,80 720,40 T1440,40 L1440,80 Z"
          fill={fill}
          className="transition-colors duration-300"
        />
      </svg>
    </div>
  );
};

// Diagonal divider - Stripe-inspired angular design
export const DiagonalDivider = ({ 
  direction = "down", 
  variant = "background",
  className 
}: SectionDividerProps) => {
  const fills = {
    primary: "hsl(var(--primary))",
    background: "hsl(var(--background))",
    muted: "hsl(var(--muted) / 0.3)",
    transparent: "transparent",
    hero: "hsl(var(--primary))",
  };

  const fill = fills[variant];

  return (
    <div 
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-10",
        direction === "down" ? "-bottom-1" : "-top-1",
        className
      )}
      style={{ height: "120px" }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "down" ? (
          <polygon
            points="0,0 1440,60 1440,120 0,120"
            fill={fill}
            className="transition-colors duration-300"
          />
        ) : (
          <polygon
            points="0,60 1440,0 1440,120 0,120"
            fill={fill}
            className="transition-colors duration-300"
          />
        )}
      </svg>
    </div>
  );
};

// Deep diagonal cut - Stripe-style that cuts deep into the section
export const DeepDiagonalDivider = ({ 
  direction = "down", 
  variant = "background",
  className 
}: SectionDividerProps) => {
  const fills = {
    primary: "hsl(var(--primary))",
    background: "hsl(var(--background))",
    muted: "hsl(var(--muted) / 0.3)",
    transparent: "transparent",
    hero: "hsl(var(--primary))",
  };

  const fill = fills[variant];

  return (
    <div 
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-10",
        direction === "down" ? "-bottom-1" : "-top-1",
        className
      )}
      style={{ height: "200px" }}
    >
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "down" ? (
          <polygon
            points="0,0 1440,120 1440,200 0,200"
            fill={fill}
            className="transition-colors duration-300"
          />
        ) : (
          <polygon
            points="0,120 1440,0 1440,200 0,200"
            fill={fill}
            className="transition-colors duration-300"
          />
        )}
      </svg>
    </div>
  );
};

// Multi-layered diagonal stripes - Stripe-style overlapping diagonals
export const StripeDivider = ({ 
  direction = "down", 
  className 
}: Omit<SectionDividerProps, 'variant'>) => {
  return (
    <div 
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-10",
        direction === "down" ? "-bottom-1" : "-top-1",
        className
      )}
      style={{ height: "180px" }}
    >
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "down" ? (
          <>
            {/* Cyan/teal stripe - deepest */}
            <polygon
              points="0,60 350,180 0,180"
              fill="hsl(var(--secondary))"
              className="transition-colors duration-300"
            />
            {/* Primary/blue stripe - middle */}
            <polygon
              points="200,100 550,180 150,180"
              fill="hsl(var(--primary))"
              className="transition-colors duration-300"
            />
            {/* Accent stripe - overlapping from right */}
            <polygon
              points="1440,80 1440,180 1100,180"
              fill="hsl(var(--accent))"
              className="transition-colors duration-300"
            />
            {/* Secondary stripe on right */}
            <polygon
              points="1440,40 1440,140 1200,140 1300,40"
              fill="hsl(var(--secondary) / 0.7)"
              className="transition-colors duration-300"
            />
          </>
        ) : (
          <>
            {/* Mirrored version for upward direction */}
            <polygon
              points="0,0 0,120 350,0"
              fill="hsl(var(--secondary))"
              className="transition-colors duration-300"
            />
            <polygon
              points="150,0 200,80 550,0"
              fill="hsl(var(--primary))"
              className="transition-colors duration-300"
            />
            <polygon
              points="1100,0 1440,0 1440,100"
              fill="hsl(var(--accent))"
              className="transition-colors duration-300"
            />
            <polygon
              points="1200,40 1300,140 1440,140 1440,40"
              fill="hsl(var(--secondary) / 0.7)"
              className="transition-colors duration-300"
            />
          </>
        )}
      </svg>
    </div>
  );
};

// Corner diagonal accent - subtle corner accents like Stripe
export const CornerDiagonal = ({ 
  position = "bottom-left",
  className 
}: {
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  className?: string;
}) => {
  const positionClasses = {
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
  };

  return (
    <div 
      className={cn(
        "absolute overflow-hidden pointer-events-none z-10",
        positionClasses[position],
        className
      )}
      style={{ width: "400px", height: "200px" }}
    >
      <svg
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {position === "bottom-left" && (
          <>
            <polygon
              points="0,80 0,200 250,200"
              fill="hsl(var(--secondary))"
              className="transition-colors duration-300"
            />
            <polygon
              points="0,130 0,200 150,200 200,130"
              fill="hsl(var(--primary))"
              className="transition-colors duration-300"
            />
          </>
        )}
        {position === "bottom-right" && (
          <>
            <polygon
              points="400,80 150,200 400,200"
              fill="hsl(var(--accent))"
              className="transition-colors duration-300"
            />
            <polygon
              points="400,130 200,130 250,200 400,200"
              fill="hsl(var(--secondary) / 0.7)"
              className="transition-colors duration-300"
            />
          </>
        )}
        {position === "top-left" && (
          <>
            <polygon
              points="0,0 0,120 250,0"
              fill="hsl(var(--secondary))"
              className="transition-colors duration-300"
            />
            <polygon
              points="0,0 0,70 200,70 150,0"
              fill="hsl(var(--primary))"
              className="transition-colors duration-300"
            />
          </>
        )}
        {position === "top-right" && (
          <>
            <polygon
              points="150,0 400,120 400,0"
              fill="hsl(var(--accent))"
              className="transition-colors duration-300"
            />
            <polygon
              points="250,0 200,70 400,70 400,0"
              fill="hsl(var(--secondary) / 0.7)"
              className="transition-colors duration-300"
            />
          </>
        )}
      </svg>
    </div>
  );
};

// Angled divider with subtle gradient effect
export const AngledDivider = ({ 
  direction = "down", 
  variant = "background",
  className 
}: SectionDividerProps) => {
  const fills = {
    primary: "hsl(var(--primary))",
    background: "hsl(var(--background))",
    muted: "hsl(var(--muted) / 0.3)",
    transparent: "transparent",
    hero: "hsl(var(--primary))",
  };

  const fill = fills[variant];

  return (
    <div 
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-10",
        direction === "down" ? "-bottom-1" : "-top-1",
        className
      )}
      style={{ height: "100px" }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "down" ? (
          <>
            {/* Main diagonal */}
            <polygon
              points="0,30 1440,70 1440,100 0,100"
              fill={fill}
              className="transition-colors duration-300"
            />
            {/* Subtle secondary line for depth */}
            <line 
              x1="0" 
              y1="28" 
              x2="1440" 
              y2="68" 
              stroke="hsl(var(--secondary) / 0.2)" 
              strokeWidth="2"
            />
          </>
        ) : (
          <>
            <polygon
              points="0,70 1440,30 1440,100 0,100"
              fill={fill}
              className="transition-colors duration-300"
            />
            <line 
              x1="0" 
              y1="68" 
              x2="1440" 
              y2="28" 
              stroke="hsl(var(--secondary) / 0.2)" 
              strokeWidth="2"
            />
          </>
        )}
      </svg>
    </div>
  );
};

// Asymmetric diagonal - different angles on each side
export const AsymmetricDivider = ({ 
  direction = "down", 
  variant = "background",
  className 
}: SectionDividerProps) => {
  const fills = {
    primary: "hsl(var(--primary))",
    background: "hsl(var(--background))",
    muted: "hsl(var(--muted) / 0.3)",
    transparent: "transparent",
    hero: "hsl(var(--primary))",
  };

  const fill = fills[variant];

  return (
    <div 
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-10",
        direction === "down" ? "-bottom-1" : "-top-1",
        className
      )}
      style={{ height: "150px" }}
    >
      <svg
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "down" ? (
          <path
            d="M0,0 L0,150 L1440,150 L1440,100 Q1200,60 900,80 Q600,100 300,50 Q150,25 0,0 Z"
            fill={fill}
            className="transition-colors duration-300"
          />
        ) : (
          <path
            d="M0,100 Q150,125 300,100 Q600,50 900,70 Q1200,90 1440,50 L1440,0 L0,0 Z"
            fill={fill}
            className="transition-colors duration-300"
          />
        )}
      </svg>
    </div>
  );
};

export default SectionDivider;
