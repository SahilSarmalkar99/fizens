import React from "react";
import bg from "../../assets/display/blue-text-bg.avif";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

export default function BrandSection() {
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();

  const text = "Finance Management";

  return (
    <section  className="w-full px-4 md:px-10 mt-20 md:-mt-30">
      <div className=" relative max-w-6xl mx-auto rounded-[40px] overflow-hidden md:h-[550px]">

        {/* BACKGROUND */}
        <img
          src={bg}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-blue-800/40" />

        {/* 🔥 EDGE FADE (LEFT + RIGHT) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-700 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-blue-700 to-transparent z-10" />

        {/* 🔥 MOVING TEXT */}
        <div className="relative top-15 md:top-10 w-full overflow-hidden whitespace-nowrap">
          <div className="marquee flex">

            {/* FIRST SET */}
            <div className="flex gap-10">
              {Array(6).fill(text).map((t, i) => (
                <span
                  key={"a" + i}
                  className="text-white/20 font-bold uppercase tracking-wider
                  text-[50px]  md:text-[120px] lg:text-[160px]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* DUPLICATE (IMPORTANT FOR LOOP) */}
            <div className="flex gap-10">
              {Array(6).fill(text).map((t, i) => (
                <span
                  key={"b" + i}
                  className="text-white/20 font-bold uppercase tracking-wider
                  text-[40px] sm:text-[70px] md:text-[120px] lg:text-[160px]"
                >
                  {t}
                </span>
              ))}
            </div>
            

          </div>
          
        </div>
        {/* 🔥 CENTER GLOW EFFECT */}
<div className="fade-item pointer-events-none top-[-100px] md:top-[-140px] absolute inset-0 flex justify-center items-center z-10">
  <div className="w-[300px] md:w-[500px] h-[120px] md:h-[200px] bg-white md:bg-white/60 blur-[80px] rounded-full" />
</div>

        {/* CONTENT */}
        <div className="relative z-20 py-24 md:py-32 text-center px-4">
          <p ref={text1} className="text-white/90 text-base md:text-xl font-[font4] max-w-2xl mx-auto">
            Partnering with top tier brands to revolutionize financial services.
          </p>

          {/* LOGOS */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-10 opacity-80">
            {["Logoipsum", "Logoipsum", "Logoipsum", "IPSUM", "LUMI"].map(
              (logo, i) => (
                <span
                  key={i}
                  className="text-white/80 text-sm md:text-base font-[font3]"
                >
                  {logo}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}