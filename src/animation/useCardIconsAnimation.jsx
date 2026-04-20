import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useCardIconsAnimation = (containerRef, iconsRef, cardRef) => {
  useEffect(() => {
    if (!containerRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      const cardRect = cardRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const centerX =
        cardRect.left - containerRect.left + cardRect.width / 2;
      const centerY =
        cardRect.top - containerRect.top + cardRect.height / 2;

      // ✅ YOUR ORIGINAL POSITIONS (UNCHANGED)
      const positions = [
        { x: 0, y: -30 },
        { x: -30, y: -20 },
        { x: 30, y: -20 },
        { x: -20, y: 20 },
        { x: 0, y: 40 },
        { x: 30, y: 30 },
      ];

      // 🔥 RESPONSIVE SCALE (ONLY ADDITION)
      const scaleFactor =
        window.innerWidth < 640
          ? 0.7
          : window.innerWidth < 1024
          ? 0.2
          : 0.2;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      });

      iconsRef.current.forEach((icon, i) => {
        if (!icon) return;

        const pos = positions[i];

        const scaledPos = {
          x: pos.x * scaleFactor,
          y: pos.y * scaleFactor,
        };

        // START FROM CARD CENTER
        gsap.set(icon, {
          x: centerX - icon.offsetLeft,
          y: centerY - icon.offsetTop,
          scale: 0.2,
          opacity: 0,
          filter: "blur(6px)",
          zIndex: 0,
        });

        // ANIMATE OUT
        tl.to(
          icon,
          {
            x: scaledPos.x,
            y: scaledPos.y,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            zIndex: 10,
            ease: "power3.out",
          },
          i * 0.05
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
};