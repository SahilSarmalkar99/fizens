import card1 from "../assets/features/card2.avif";
import card2 from "../assets/features/card3.avif";
import card3 from "../assets/features/card4.avif";
import useStackAnimation from "../animation/useStackAnimation";


export default function Card2() {
    const card = useStackAnimation();
    return (
    <div
    
      className="
      relative
      w-full w-[95%] md:w-[85%] lg:w-[70%]
      h-[420px] md:h-[580px] lg:h-[640px]
      rounded-[32px]
      p-6 md:p-10
      bg-gradient-to-br from-[#eef2f7] to-[#e3eaf5]
      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      overflow-hidden
    "
    >
      {/* GRID BG */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none 
        bg-[radial-gradient(circle,#00000010_1px,transparent_1px)] 
        [background-size:40px_40px]"
      />

      {/* TITLE */}
      <div className="relative z-10 space-y-3 mb-6">
        <h3 className="text-xl  md:text-2xl font-[font3] text-start text-black">
          Smart Savings Goals
        </h3>

        <p className="text-gray-600 text-sm md:text-base max-w-md text-start font-[font2] leading-relaxed">
          Set specific savings goals and track progress towards them.
        </p>
      </div>

      {/* STACKED IMAGES */}
      <div ref={card} className="relative flex justify-center items-center md:h-[70%]">

        {/* BACK IMAGE */}
        <img
          src={card3}
          alt=""
          className="fade-item
            absolute
            w-full md:w-[60%]
            translate-y-[90px]
            scale-90
            opacity-70
            blur-[1px]
          "
        />

        {/* MIDDLE IMAGE */}
        <img
          src={card2}
          alt=""
          className="fade-item
            absolute
            w-full md:w-[65%]
            translate-y-[50px]
            scale-95
            opacity-90
            shadow-lg
          "
        />

        {/* FRONT IMAGE */}
        <img
          src={card1}
          alt=""
          className="fade-item
            relative
            w-full md:w-[70%]
            shadow-[0_25px_50px_rgba(0,0,0,0.15)]
          "
        />

      </div>
    </div>
  );
}