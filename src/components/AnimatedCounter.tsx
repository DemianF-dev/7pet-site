import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    className?: string;
    prefix?: string;
}

export function AnimatedCounter({ end, duration = 2000, className = '', prefix = '' }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    let start = 0;
                    const increment = end / (duration / 16); // 60fps

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);

                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}{count.toLocaleString('pt-BR')}
        </span>
    );
}
