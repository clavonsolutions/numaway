import * as React from "react";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated" | "interactive";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "rounded-2xl border border-border/50 bg-card text-card-foreground shadow-soft",
    glass: "rounded-2xl bg-white/80 backdrop-blur-xl border border-white/20 text-card-foreground shadow-soft",
    elevated: "rounded-2xl border border-border/30 bg-card text-card-foreground shadow-elevated",
    interactive: "rounded-2xl border border-border/50 bg-card text-card-foreground shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 hover:border-secondary/30 cursor-pointer group"
  };

  return (
    <div 
      ref={ref} 
      className={cn(
        variants[variant],
        className
      )} 
      {...props} 
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-display font-semibold leading-none tracking-tight group-hover:text-secondary transition-colors", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground leading-relaxed", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
