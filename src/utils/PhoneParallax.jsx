import { useEffect, useRef } from "react";

export function PhoneParallax({ phone }) {
  const ref = useRef();
  const rafRef = useRef();

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const el = ref.current;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouse = (e) => {
      const { innerWidth, innerHeight } = window;

      mouseX = (e.clientX / innerWidth - 0.3) * 2;
      mouseY = (e.clientY / innerHeight - 0.3) * 2;
    };

    const animate = () => {
      currentX += (mouseX * -60 - currentX) * 0.1;
      currentY += (mouseY * -60 - currentY) * 0.1;

      if (el) {
        el.style.transform = `
          translate3d(${currentX}px, ${currentY}px, 0)
          rotateX(${mouseY * 10}deg)
          rotateY(${mouseX * 10}deg)
        `;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouse);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="phone-float md:mt-20">
      {/* JS PARALLAX LAYER */}
      <div ref={ref} className="will-change-transform">
        <img
          src={phone}
          alt="phone"
          className="
            w-[300px]
            sm:w-[380px]
            md:w-[600px]
            lg:w-[750px]
            scale-[1.5] md:scale-[2]
            object-contain
            drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]
          "
        />
      </div>
    </div>
  );
}