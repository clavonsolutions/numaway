"use client";
import { useState, useEffect, useRef } from "react";

interface UseAnimatedCounterOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
}

export const useAnimatedCounter = ({
  end,
  duration = 2000,
  start = 0,
  decimals = 0
}: UseAnimatedCounterOptions) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = start + (end - start) * easeOutQuart;
      
      setCount(Number(currentValue.toFixed(decimals)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration, start, decimals]);

  return { count, ref };
};

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = ""
}: AnimatedCounterProps) => {
  const { count, ref } = useAnimatedCounter({ end, duration, decimals });

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

