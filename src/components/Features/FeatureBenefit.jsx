import React from "react";
import { Check, Star } from "lucide-react";
import { Feature } from "framer-motion";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

const features = [
  {
    tag: "Time and Stress Reduction",
    title: "Save your time and reduce financial anxiety",
    desc: "Automate tasks like budgeting, tracking, and saving, freeing up your time for more important things.",
    points: ["Stay on top of your budget.", "Automate your finances for less stress."],
    img: "https://framerusercontent.com/images/HjrIbMlxQF2quPYpUhzfiIHgP8.png",
  },
  {
    tag: "Financial Growth",
    title: "Take control of your financial future",
    desc: "Provide valuable insights into your spending habits, helping you make better financial decisions.",
    points: ["Reach your goals", "Make informed decisions"],
    img: "https://framerusercontent.com/images/YzGqtPqHj2h6XUH2ylGCq4FqpKQ.png",
  },
  {
    tag: "Security",
    title: "Experience ultimate financial security",
    desc: "Protect your financial data and ensure safe transactions with advanced security.",
    points: ["Protect your data", "Peace of mind"],
    img: "https://framerusercontent.com/images/ve1ZuWHGv5MeaWY1McuzGwuIraI.png",
  },
];

const FeatureBenefit = () => {
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="w-full py-16 md:py-24 px-4 sm:px-6 bg-white">

      <div className="fade-iitem flex flex-col justify-center items-center">
        {/* HEADER */}
        <p className="text-blue-500 font-[font4]  text-sm mb-4 border px-4 py-2 rounded-full inline-flex items-center gap-2">
          <Star className= "w-5 h-5" /> Benefits
        </p>

        <h2 ref={text1} className="text-4xl md:text-6xl font-[font4]">
          Experience The
        </h2>
        <h2 ref={text2} className="text-4xl md:text-6xl font-[font4] text-blue-600 mb-10">
          Future Of Finance
        </h2>
        </div>

      {/* Cards */}
      <div className="fade-item max-w-6xl mx-auto space-y-16 md:space-y-24">

        {features.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center`}
            >
              
              {/* IMAGE */}
              <div className={`${isReverse ? "md:order-2" : ""}`}>
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-300 rounded-3xl p-6 md:p-10 flex justify-center items-center">

                  {/* Subtle grid effect */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#ffffff20_1px,transparent_1px),linear-gradient(90deg,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]" />

                  <img
                    src={item.img}
                    alt={item.title}
                    className="relative w-full max-w-[320px] md:max-w-[420px] object-contain"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-5">
                
                <p className="text-blue-600 font-[font4] flex items-center gap-2 text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {item.tag}
                </p>

                <h2 className="text-2xl md:text-4xl font-[font3] leading-tight text-gray-900">
                  {item.title}
                </h2>

                <p className="text-gray-500 font-[font3] max-w-md">
                  {item.desc}
                </p>

                <div className="space-y-3 font-[font4]">
                  {item.points.map((p, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100">
                        <Check size={16} className="text-blue-600" />
                      </div>
                      <span className="text-gray-700">{p}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default FeatureBenefit;