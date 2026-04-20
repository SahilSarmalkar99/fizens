import React from "react";
import VideoSlider from "./VideoSlider";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

const JourneySection = () => {
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section
      ref={fade}
      className="relative w-full py-20 md:py-28 px-4 overflow-hidden bg-white flex flex-col items-center"
    >
      {/* Subtle Background Grid */}
      <div className="fade-item absolute inset-0 opacity-20 bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Heading */}
        <h1 ref={text1} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[font3] tracking-tight leading-tight text-gray-900">
          The Fizenz{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text font-[font3]">
            Journey
          </span>
        </h1>

        {/* Plus Icon */}
        <div className="flex justify-center md:-mt-10">
          <div className="text-blue-500 text-2xl md:text-9xl font-light">+</div>
        </div>

        {/* Subtitle */}
        <p ref={text2}  className="mt-3 font-[font3] text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          From vision to value — discover how Fizenz empowers you to take
          control of your financial future.
        </p>
      </div>

      {/* CAROUSEL GOES HERE */}
    
      <VideoSlider />
    </section>
  );
};

export default JourneySection;
