import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCardScroll = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".campaign-card");

      cards.forEach((card, i) => {
        if (i === 0) return; // skip first card

        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0.8, // 👈 better start
          },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 40%",
              scrub: true, // smooth scroll-based motion
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert(); // 🔥 cleanup
  }, []);

  return ref;
};

export default useCardScroll;