import pig from "../../assets/display/pig.png";
import clock from "../../assets/display/clock.png";
import coin from "../../assets/display/coin.png";
import box from "../../assets/display/box.png";
import useFadeIn from "../../animation/useFadeIn";
import useTextReveal from "../../animation/useTextReveal";

export default function FeatureHero() {
  const fade = useFadeIn();
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  return (
    <section ref={fade} className="relative w-full min-h-screen  flex items-center justify-center overflow-hidden px-6">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none 
        bg-[radial-gradient(circle,#00000012_1px,transparent_1px)] 
        [background-size:42px_42px]"
      />

      {/* FLOATING CARDS */}

      {/* CARD STYLE */}
      {/* reuse animation */}
      <div className="fade-item hidden md:flex absolute left-[10%] top-[20%] bg-[#dcd8f3] px-12 py-8 rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] animate-float">
        <img src={pig} alt="" className="w-24 h-24 object-contain" />
      </div>

      <div className="fade-item hidden md:flex absolute right-[10%] top-[22%] bg-[#d7e7ef] px-12 py-8 rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] animate-float-slow">
        <img src={clock} alt="" className="w-24 h-24 object-contain" />
      </div>

      <div
        className="fade-item hidden md:flex absolute left-[17%] bottom-[20%] 
  bg-[#dcd8f3] px-12 py-8 rounded-[32px] 
  shadow-[0_12px_40px_rgba(0,0,0,0.08)] animate-float-slow"
      >
        <img src={coin} alt="" className="w-24 h-24 object-contain" />
      </div>

      <div
        className="fade-item hidden md:flex absolute right-[15%] bottom-[10%] 
  bg-gradient-to-r from-[#e6d7f5] to-[#d7e7ef] 
  px-12 py-8 rounded-[32px] 
  shadow-[0_12px_40px_rgba(0,0,0,0.08)] animate-float"
      >
        <img src={box} alt="" className="w-28 h-28 object-contain" />
      </div>

      {/* MAIN CONTENT */}
      <div className=" relative z-10 max-w-4xl text-center space-y-10">
        {/* HEADING */}
        <h1 ref={text1} className="text-[32px] md:text-[64px] font-[font2] leading-[1.1] tracking-[-1.5px] text-blue-700">
          Our app is an <br className="hidden md:block" />
          all-in-one solution for <br />
          managing your money <br className="hidden md:block" />
          and financial goals.
        </h1>

        {/* SUBTEXT */}
        <div className="flex items-center justify-center gap-4 text-gray-600 text-base md:text-lg">
          <span className="hidden md:block w-16 h-[2px] bg-blue-400/40"></span>

          <p ref={text2} className="max-w-md leading-relaxed font-[font3]">
            Experience the peace of mind that comes with having your finances
            under control.
          </p>

          <span className="hidden md:block w-16 h-[2px] bg-blue-400/40"></span>
        </div>

        {/* CTA BUTTON */}
        <div className="fade-item flex justify-center pt-4">
          <button className="flex items-center bg-[#e9edf5] rounded-full p-1 shadow-sm hover:shadow-lg transition-all duration-300 group active:scale-95">
            <span className="px-6 py-3 text-gray-800 font-[font3] ">
              Get Started Free
            </span>

            <span
              className="w-12 h-12 flex items-center justify-center bg-blue-700 text-white rounded-full 
              transition-all duration-300 
              group-hover:translate-x-1 
              group-hover:scale-110 
              group-hover:-rotate-45"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
