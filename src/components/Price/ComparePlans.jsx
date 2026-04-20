import React from "react";
import { Check } from "lucide-react";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

const plans = ["Starter", "Standard", "Advance"];

const features = [
  {
    title: "Core Features",
    items: [
      { name: "Budgeting", values: [true, true, true] },
      { name: "Track Metrics", values: [true, true, true] },
      { name: "Debt Management", values: [true, true, true] },
      { name: "Saving Goals", values: [true, true, true] },
    ],
  },
  {
    title: "Advanced Features",
    items: [
      { name: "Investment", values: [false, true, true] },
      { name: "Financial Planning", values: [false, true, true] },
      { name: "Bill Payment", values: [false, true, true] },
      {
        name: "Financial Education",
        values: ["Limited", "Extensive", "Extensive"],
      },
    ],
  },
  {
    title: "Pricing",
    items: [
      { name: "Monthly", values: ["Free", "$20", "$40"] },
      { name: "Annually", values: ["Free", "$15", "$30"] },
    ],
  },
];

const ComparePlans = () => {
    const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="w-full py-20 px-4 bg-white flex flex-col items-center">
      {/* TITLE */}
      <h2 className="fade-iten text-3xl md:text-5xl font-[font3] text-gray-900 mb-12 text-center">
        Compare <span className="text-blue-600">Plans</span>
      </h2>

      {/* TABLE CONTAINER */}
      <div className="fade-item w-full max-w-6xl space-y-6 font-[font3]">
        {/* HEADER */}
        <div
          className="sticky top-0 z-40 mt-4
  bg-white/90 backdrop-blur-lg
  border border-blue-100
  shadow-md rounded-2xl px-4 md:px-8 py-4"
        >
          <div className="grid grid-cols-4 items-center text-center text-blue-700 font-medium">
            <div></div>

            {plans.map((p, i) => (
              <div
                key={i}
                className={`transition ${
                  i === 1 ? "text-blue-600 font-semibold" : "text-blue-500"
                }`}
              >
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* SECTIONS */}
        {features.map((section, idx) => (
          <div key={idx} className="bg-[#F5F7FA] rounded-2xl p-4 md:p-8">
            {/* SECTION TITLE */}
            <h3 className="text-gray-900 font-medium mb-6">{section.title}</h3>

            {/* ROWS */}
            <div className="divide-y divide-gray-200">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-4 items-center py-4 text-sm md:text-base"
                >
                  {/* FEATURE NAME */}
                  <div className="text-gray-700">{item.name}</div>

                  {/* VALUES */}
                  {item.values.map((val, j) => (
                    <div key={j} className="flex justify-center">
                      {val === true ? (
                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100">
                          <Check className="text-blue-600" size={16} />
                        </div>
                      ) : val === false ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        <span className="text-gray-700">{val}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA BUTTONS */}
        <div className="grid grid-cols-4 items-center mt-6">
          {/* Empty first column (for feature names alignment) */}
          <div></div>

          {plans.map((_, i) => (
            <div key={i} className="flex justify-center">
              <button
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  i === 1
                    ? "bg-blue-600 text-white shadow-md hover:scale-105"
                    : "border border-blue-500 text-blue-600 hover:bg-blue-50 hover:scale-105"
                }`}
              >
                Get Started Now
              </button>
            </div>
          ))}
        </div>
        {/* for mobile */}
        <div className="md:hidden flex justify-center mt-8">
          <button
            className="px-8 py-3 md:px-10 md:py-4 
    rounded-full 
    bg-blue-600 text-white font-medium 
    shadow-md 
    hover:bg-blue-700 hover:scale-105 
    active:scale-95 
    transition-all duration-300"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
