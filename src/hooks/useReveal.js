import { useEffect, useRef, useState } from 'react';

/**
 * Triggers a reveal state once the element enters the viewport.
 * Once revealed, it stays revealed (observer disconnects).
 */
export function useReveal(threshold = 0.15, rootMargin = '0px') {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, revealed];
}
