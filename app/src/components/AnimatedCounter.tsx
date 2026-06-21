import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  delay?: number;
}

export default function AnimatedCounter({ value, duration = 1500, delay = 0 }: AnimatedCounterProps) {
  const [display, setDisplay] = useState('0');
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setTimeout(() => setDisplay(value), delay);
      return;
    }

    const numericValue = parseFloat(numericMatch[0]);
    const prefix = value.slice(0, numericMatch.index);
    const suffix = value.slice((numericMatch.index || 0) + numericMatch[0].length);

    const startTime = performance.now();
    const timer = setTimeout(() => {
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime - delay;
        if (elapsed < 0) {
          requestAnimationFrame(animate);
          return;
        }
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = numericValue * eased;

        if (numericValue >= 1) {
          setDisplay(`${prefix}${Math.round(current)}${suffix}`);
        } else {
          setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplay(value);
        }
      };
      requestAnimationFrame(animate);
    }, 0);

    return () => clearTimeout(timer);
  }, [hasStarted, value, duration, delay]);

  return (
    <span ref={ref} className="font-mono text-[64px] leading-none tracking-tight" style={{ color: '#FFD700' }}>
      {display}
    </span>
  );
}
