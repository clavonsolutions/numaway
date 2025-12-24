import { cn } from "@/lib/utils";

interface SectionDividerProps {
  direction?: "down" | "up";
  variant?: "primary" | "background" | "muted" | "transparent";
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
              stroke="hsl(var(--secondary) / 0.1)" 
              strokeWidth="1"
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
              stroke="hsl(var(--secondary) / 0.1)" 
              strokeWidth="1"
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default SectionDivider;
