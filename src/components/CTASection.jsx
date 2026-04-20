import React from "react";
import bg from "../assets/display/blue-bg.avif"; // blue bg
import leftCard from "../assets/display/leftCard.avif"; // left tilted card
import rightCard from "../assets/display/rightCard.avif"; // right tilted card
import useTextReveal from "../animation/useTextReveal";
import useFadeIn from "../animation/useFadeIn";

export default function CTASection() {
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="w-full px-4 md:px-10 py-10">
      <div
        className="fade-item
        relative max-w-6xl mx-auto rounded-[40px] overflow-hidden
        px-6 py-16 md:py-24 text-center md:min-h-[600px]
      "
      >
        {/* BACKGROUND */}
        <img src={bg} className="absolute inset-0 w-full h-full object-cover" />

        {/* OVERLAY (for readability) */}
        <div className="absolute inset-0 bg-blue-600/20" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* TITLE */}
          <h2
            ref={text1}
            className="text-2xl sm:text-3xl md:text-5xl font-[font3] text-white leading-tighter"
          >
            Your First Step To <br />
            Financial Freedom <br />
            Begins Here
          </h2>

          {/* DESC */}
          <p
            ref={text2}
            className="text-white/80 mt-4 text-sm sm:text-base font-[font4]"
          >
            Watch your money grow. Download the app now and start taking control
            of your money today.
          </p>

          {/* Button */}
          <div className="fade-item flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {/* APP STORE */}
            <button className="flex items-center gap-3 bg-white rounded-xl px-4 py-2 shadow-sm hover:scale-105 transition">
              <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M12 16l4-5h-3V4h-2v7H8l4 5zM5 20h14v-2H5v2z" />
                </svg>
              </div>

              <div className="text-left leading-tight">
                <p className="text-[10px] text-gray-500 font-[font4]">
                  Download on the
                </p>
                <p className="text-sm font-[font3] text-black">App Store</p>
              </div>
            </button>

            {/* GOOGLE PLAY */}
            <button className="flex items-center gap-3 bg-white rounded-xl px-4 py-2 shadow-sm hover:scale-105 transition">
              <div className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path d="M12 16l4-5h-3V4h-2v7H8l4 5zM5 20h14v-2H5v2z" />
                </svg>
              </div>

              <div className="text-left leading-tight">
                <p className="text-[10px] text-gray-500 font-[font4]">
                  GET IT ON
                </p>
                <p className="text-sm font-[font3] text-black">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        {/* LEFT FLOATING CARD */}

        <img
          src={leftCard}
          className="fade-item
          absolute bottom-0 left-[-40px] sm:left-[-20px] md:left-[90px] md:bottom-[-60px]
          w-[180px] sm:w-[220px] md:w-[300px]
          opacity-90
          rotate-[-12deg]
          hidden sm:block
        "
        />

        {/* RIGHT FLOATING CARD */}
        <img
          src={rightCard}
          className="fade-item
          absolute bottom-0 right-[-40px] sm:right-[-20px] md:right-[90px] md:bottom-[-60px]
          w-[180px] sm:w-[220px] md:w-[300px]
          opacity-90
          rotate-[12deg]
          hidden sm:block
        "
        />
      </div>
    </section>
  );
}
