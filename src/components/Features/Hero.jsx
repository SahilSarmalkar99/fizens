import React from "react";
import img1 from "../../assets/features/p1.avif";
import img2 from "../../assets/features/p2.avif";
import img3 from "../../assets/features/p3.avif";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

const Hero = () => {
  const phones = [
    { frame: img1 },
    { frame: img2 },
    { frame: img3 },
  ];
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const text3 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="relative pt-20 md:pt-24 w-full min-h-screen  overflow-hidden flex flex-col items-center justify-center px-4">

      {/* Background Grid */}
      <div className="fade-item absolute inset-0 opacity-20 bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 ref={text1} className="text-3xl sm:text-4xl md:text-6xl font-[font3] tracking-tight leading-tight">
          Your Finance{" "}
          <span  ref={text2} className="font-[font3] bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
            Solutions
          </span>
        </h1>

        <p ref={text3} className="mt-4 font-[font4] text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Experience the peace of mind that comes with having your finances under control.
        </p>
      </div>

      {/* Phones */}
      <div className="fade-item relative  w-full flex justify-center overflow-hidden">

        {/* Phones Row */}
        <div className="flex items-end justify-center gap-3 sm:gap-6 md:gap-10 translate-y-12 sm:translate-y-16 md:translate-y-24">

          {phones.map((phone, index) => (
            <div
              key={index}
              className={`relative ${
                index === 1
                  ? "w-[150px] sm:w-[200px] md:w-[260px] scale-110 z-10"
                  : "w-[120px] sm:w-[170px] md:w-[220px] opacity-90"
              }`}
            >
              <img
                src={phone.frame}
                alt="frame"
                className="w-full h-auto object-contain"
              />
            </div>
          ))}

        </div>

        {/* Bottom Fade Effect */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 sm:h-40 md:h-56 bg-gradient-to-t from-white via-white/90 to-transparent z-20" />
      </div>
    </section>
  );
};

export default Hero;