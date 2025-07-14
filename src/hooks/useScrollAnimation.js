import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useScrollAnimation() {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { autoAlpha: 0, y: 50 }, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return elRef;
}
