import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
};

// Animation wrapper component
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in" | "fade-in-up";
  delay?: number;
  duration?: number;
}

export const ScrollReveal = ({ 
  children, 
  className = "", 
  animation = "fade-up",
  delay = 0,
  duration = 0.6
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const animationStyles: Record<string, { initial: React.CSSProperties; animate: React.CSSProperties }> = {
    "fade-up": {
      initial: { opacity: 0, transform: "translateY(32px)" },
      animate: { opacity: 1, transform: "translateY(0)" }
    },
    "fade-in": {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    "fade-in-up": {
      initial: { opacity: 0, transform: "translateY(20px)" },
      animate: { opacity: 1, transform: "translateY(0)" }
    },
    "slide-left": {
      initial: { opacity: 0, transform: "translateX(-32px)" },
      animate: { opacity: 1, transform: "translateX(0)" }
    },
    "slide-right": {
      initial: { opacity: 0, transform: "translateX(32px)" },
      animate: { opacity: 1, transform: "translateX(0)" }
    },
    "scale-in": {
      initial: { opacity: 0, transform: "scale(0.95)" },
      animate: { opacity: 1, transform: "scale(1)" }
    }
  };

  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...styles.initial,
        ...(isVisible ? styles.animate : {}),
        transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        willChange: "opacity, transform"
      }}
    >
      {children}
    </div>
  );
};

export default useScrollAnimation;
