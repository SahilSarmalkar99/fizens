import { Car, CreditCard, GitGraph, Globe, Lock, Plane } from "lucide-react";
import card from "../assets/features/card.avif";
import { useRef } from "react";
import { useCardIconsAnimation } from "../animation/useCardIconsAnimation";

export default function Card1() {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  iconsRef.current = [];

  const addToRefs = (el) => {
    if (el && !iconsRef.current.includes(el)) {
      iconsRef.current.push(el);
    }
  };

  useCardIconsAnimation(containerRef, iconsRef, cardRef);

  return (
    <div
      className="
      relative
      w-full max-w-[420px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[700px]
      mx-auto
      rounded-[32px]
      px-5 py-6 md:px-8 md:py-10
      bg-gradient-to-br from-[#eef2f7] to-[#e3eaf5]
      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      overflow-hidden
      min-h-[420px] sm:min-h-[520px] md:min-h-[580px]
    "
    >
      {/* GRID BG */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none 
        bg-[radial-gradient(circle,#00000010_1px,transparent_1px)] 
        [background-size:40px_40px]"
      />

      {/* TOP VISUAL */}
      <div
        ref={containerRef}
        className="relative flex justify-center items-center h-[65%] 
px-6 md:px-12 py-8 md:py-12"
      >
        {/* CARD */}
        <img
          ref={cardRef}
          src={card}
          alt="card"
          className="
            w-[150px] sm:w-[180px] md:w-[240px] lg:w-[300px]
            rotate-[-6deg]
            drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)]
          "
        />

        {/* ICONS */}

        <div
          ref={addToRefs}
          className="absolute top-[5%] left-1/2 -translate-x-1/2 bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-md"
        >
          <Plane className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>

        <div
          ref={addToRefs}
          className="absolute left-[6%] sm:left-[8%] top-[40%] bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-md"
        >
          <Car className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>

        <div
          ref={addToRefs}
          className="absolute right-[6%] sm:right-[8%] top-[40%] bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-md"
        >
          <CreditCard className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>

        <div
          ref={addToRefs}
          className="absolute left-[14%] sm:left-[20%] bottom-[5%] bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-md"
        >
          <GitGraph className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>

        <div
          ref={addToRefs}
          className="absolute left-1/2 bottom-[0%] -translate-x-1/2 bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-md"
        >
          <Globe className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>

        <div
          ref={addToRefs}
          className="absolute right-[14%] sm:right-[20%] bottom-[5%] bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-md"
        >
          <Lock className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </div>
      </div>

      {/* TEXT */}
      <div className="relative z-10 mt-15 md:mt-20 px-2 md:px-4 space-y-3 text-start">
        <h3 className="text-lg md:text-2xl font-[font3] text-black">
          Expense & Income Tracking
        </h3>

        <p className="text-gray-600 text-sm md:text-base font-[font2] max-w-md leading-relaxed">
          Record and categorize expense & income automatically or manually.
        </p>
      </div>
    </div>
  );
}
