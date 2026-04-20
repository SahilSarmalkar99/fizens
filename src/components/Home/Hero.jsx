import React from "react";
import phone from "../../assets/display/phone.avif";
import {PhoneParallax} from "../../utils/PhoneParallax";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

export default function Hero() {
  const text1 = useTextReveal();
  const text2 = useTextReveal(); 
  const text3 = useTextReveal(); 
  const fade = useFadeIn();

  return (
    <section ref={fade} className="relative w-full pt-20 md:pt-0 overflow-hidden flex items-center">
      {/* Background Grid */}
      <div className="fade-item absolute inset-0 opacity-20 bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:40px_40px]" />


      {/* PLUS ICON */}
      <div className="fade-item absolute right-[18%] top-[25%] text-blue-500 text-3xl hidden md:block">
        +
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-3 items-center gap-6 lg:gap-8">
        {/* LEFT */}
        <div className="space-y-6 text-center lg:text-left md:w-3xl ">
          <h1 ref={text1} className="text-[38px] sm:text-[48px] md:text-[64px] font-[font4] leading-[1] tracking-[-1.5px] text-black">
            Start Managing <br />
            Your Finance
          </h1>

          <h2 ref={text2} className="text-[28px] sm:text-[36px] md:text-[45px] font-light text-gray-400 tracking-tight">
            — With Our Tool
          </h2>

          {/* CTA */}
          <div className="fade-item flex justify-center lg:justify-start pt-4">
            <button className="flex items-center bg-[#eef1f7] rounded-full p-1 shadow-sm group hover:shadow-md transition-all">
              <span className="px-6 py-3 text-blue-600 font-medium text-sm md:text-base">
                Get Started Free
              </span>

              <span
                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-blue-600 text-white rounded-full 
                group-hover:translate-x-1 transition"
              >
                →
              </span>
            </button>
          </div>
        </div>

        {/* CENTER → BIG PHONE */}
        <div className="relative flex items-center justify-center h-[300px] md:h-[700px] overflow-visible z-40">
          {/* GLOW */}
          <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />

          <PhoneParallax phone={phone} />
        </div>

        {/* RIGHT */}
        <div className="space-y-6 text-center lg:text-left">
          <p ref={text3} className="text-gray-600 max-w-md text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
            Simplify your financial life. Our intuitive app makes managing your
            money effortless.
          </p>

          {/* USERS */}
          <div className="fade-item flex items-center justify-center lg:justify-start gap-4 pt-4">
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/40?img=1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold">2.3M+</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-tight">
                Trusted to use by millions users <br /> over 140 countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
