import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import phone from "../../assets/features/scroll.avif";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

export default function ScrollShowcase() {
  const text = useTextReveal();
  const fade = useFadeIn();

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Reverse animation
  const leftX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[110vh] md:h-[120vh] flex items-center justify-center bg-white overflow-hidden"
    >
      {/* 🔥 BACKGROUND TEXT */}
      <div className="fade-item hidden md:block absolute inset-0 flex items-center justify-center">
        {/* LEFT TEXT */}
        <motion.h1
          style={{ x: leftX, opacity }}
          className="
            absolute left-0
            top-[12%] md:top-[18%] lg:top-[20%]
            text-[48px] sm:text-[72px] md:text-[120px] lg:text-[180px]
            font-bold text-gray-200 whitespace-nowrap
          "
        >
          VARIETY
        </motion.h1>

        {/* RIGHT TEXT */}
        <motion.h1
          style={{ x: rightX, opacity }}
          className="
            absolute right-0
            top-[28%] md:top-[36%] lg:top-[40%]
            text-[48px] sm:text-[72px] md:text-[120px] lg:text-[180px]
            font-bold text-gray-200 whitespace-nowrap
          "
        >
          FEATURES
        </motion.h1>
      </div>

      {/* 🔥 PHONE */}
      <div className="fade-item relative z-20">
        <img
          src={phone}
          alt="phone"
          className="
            w-[250px] md:w-[320px] lg:w-[400px]
            [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]
          "
        />
      </div>

      {/* 🔥 CENTER MASK (always match phone width) */}
      <div className="pointer-events-none absolute inset-0 flex justify-center z-10">
        <div
          className="
          w-[180px] sm:w-[240px] md:w-[320px] lg:w-[400px]
          h-full bg-white
        "
        />
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 w-full h-24 md:h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-30" />
    </section>
  );
}
