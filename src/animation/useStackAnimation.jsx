import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useStackAnimation = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const items = ref.current.querySelectorAll(".fade-item");

      // BACK → MID → FRONT order
      const [back, mid, front] = items;

      // 🔹 initial state (compressed stack)
      gsap.set(back, {
        y: 0,
        scale: 0.85,
        opacity: 0,
        filter: "blur(6px)",
      });

      gsap.set(mid, {
        y: 0,
        scale: 0.9,
        opacity: 0,
        filter: "blur(3px)",
      });

      gsap.set(front, {
        y: 0,
        scale: 0.95,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true, // smooth controlled animation
        },
      });

      // 🔥 animate stack opening
      tl.to(back, {
        y: 100,
        scale: 0.9,
        opacity: 0.7,
        filter: "blur(1px)",
        ease: "power3.out",
      })
        .to(
          mid,
          {
            y: 50,
            scale: 0.95,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power3.out",
          },
          "-=0.2"
        )
        .to(
          front,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // 🔥 subtle floating loop (premium feel)
      gsap.to(front, {
        y: "+=10",
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1,
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export default useStackAnimation;