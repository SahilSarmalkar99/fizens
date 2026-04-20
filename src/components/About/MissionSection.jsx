import React from "react";
import { Check, Crown } from "lucide-react";
// import vid from "../../assets/video/vid1.mp4";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

const MissionSection = () => {
  const text1 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="w-full md:py-10  px-4 bg-white flex flex-col items-center">
      {/* TOP TAG */}
      <div className="fade-item mb-6 flex justify-center">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
    border border-blue-200 text-blue-600 text-sm font-medium 
    bg-blue-50/70 backdrop-blur-sm shadow-sm"
        >
          <Crown className="w-4 h-4 text-blue-600" />

          <span>Our Missions</span>
        </span>
      </div>

      {/* HEADING */}
      <h1 ref={text1} className="text-center text-3xl sm:text-4xl md:text-6xl font-[font3] leading-tighter text-blue-700 max-w-4xl">
        Empowering individuals to achieve financial freedom through intuitive
        and personalize tools.
      </h1>

      {/* MAIN CARD */}
      <div className="fade-item mt-16 w-full max-w-6xl bg-[#F1F5FB] rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* LEFT → VIDEO */}
        <div className="w-full">
          <div className="rounded-3xl overflow-hidden">
            <video
              src="https://framerusercontent.com/assets/cLt9P0kRnTv2MdK4NGq3DFqJ7Lo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* RIGHT → CONTENT */}
        <div className="space-y-6">
          <p className="text-gray-700 font-[font3] text-sm sm:text-base leading-relaxed">
            As a leading provider of innovative finance software, we're
            dedicated to empowering businesses like yours to achieve their
            financial goals.
          </p>

          {/* POINTS */}
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600">
                <Check className="text-white" size={18} />
              </div>
              <div>
                <h3 className="font-[font3] text-gray-900">
                  Business Growth and Efficiency
                </h3>
                <p className="text-gray-500 font-[font4] text-sm mt-1">
                  Empowering businesses to achieve financial excellence through
                  innovative software solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600">
                <Check className="text-white" size={18} />
              </div>
              <div>
                <h3 className="font-[font3] text-gray-900">
                  Technological Innovation
                </h3>
                <p className="text-gray-500 text-sm mt-1 font-[font4]">
                  Leading the way in financial technology innovation to empower
                  businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
