import React from "react";
import useCardScroll from "../../animation/useCardScroll";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";
import { useNavigate } from "react-router-dom";
import { Check, Star } from "lucide-react";

const features = [
  {
    tag: "Time and Stress Reduction",
    title: "Save your time and reduce financial anxiety",
    desc: "Automate tasks like budgeting, tracking, and saving.",
    points: ["Stay on top of your budget.", "Automate your finances"],
    img: "https://framerusercontent.com/images/HjrIbMlxQF2quPYpUhzfiIHgP8.png",
  },
  {
    tag: "Financial Growth",
    title: "Take control of your financial future",
    desc: "Provide valuable insights into your spending habits.",
    points: ["Reach your goals", "Make informed decisions"],
    img: "https://framerusercontent.com/images/YzGqtPqHj2h6XUH2ylGCq4FqpKQ.png",
  },
  {
    tag: "Security",
    title: "Experience ultimate financial security",
    desc: "Protect your information from unauthorized access.",
    points: ["Protect your data", "Peace of mind"],
    img: "https://framerusercontent.com/images/ve1ZuWHGv5MeaWY1McuzGwuIraI.png",
  },
];

const StickyCard = () => {
  const containerRef = useCardScroll();
  const textref = useTextReveal();
  const fadeRef = useFadeIn();
  const navigate = useNavigate();

  return (
    <section
      id="StickyCard"
      className="w-full py-14 sm:py-16 md:py-24 px-3 sm:px-6"
      ref={fadeRef}
    >
      {/* Heading */}
      <div className="fade-item mb-6 w-full flex justify-center">
        <span
          className="flex items-center gap-2 px-4 py-2 rounded-full 
          border border-blue-200 text-blue-600 text-sm font-medium bg-white/60 backdrop-blur-sm"
        >
          {/* ICON */}
          <Star />
          Benefits
        </span>
      </div>

      {/* Cards */}
      <div className="fade-item relative space-y-16 sm:space-y-20 md:space-y-20 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="sticky top-10 sm:top-14 md:top-24"
            style={{ zIndex: 10 + index }}
          >
            <div
              className="bg-[#F5FAFF] rounded-2xl md:rounded-3xl shadow-xl 
      p-4 sm:p-6 md:p-10 
      grid grid-cols-1 md:grid-cols-2 
      gap-6 md:gap-12 items-center"
            >
              {/* LEFT IMAGE */}
              <div className="w-full flex justify-center">
                <div className="p-2 sm:p-4 md:p-6">
                  <div className="p-2 sm:p-4 md:p-6">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-full 
          h-auto md:h-[360px] object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="space-y-4 md:space-y-5 text-center md:text-left">
                <p className="text-blue-600 font-[font4] flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {item.tag}
                </p>

                <h2 className="text-lg sm:text-xl md:text-4xl font-[font3] leading-tight">
                  {item.title}
                </h2>

                <p className="text-gray-500 text-sm sm:text-base">
                  {item.desc}
                </p>

                <div className="space-y-2 sm:space-y-3 font-[font4]">
                  {item.points.map((p, i) => (
                    <div
                      key={i}
                      className="flex gap-2 sm:gap-3 items-center justify-center md:justify-start"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-blue-100">
                        <Check
                          size={14}
                          className="text-blue-600 sm:w-4 sm:h-4"
                        />
                      </div>
                      <span className="text-sm sm:text-base">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyCard;
