import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

const faqs = [
  {
    q: "How often should I review my financial data?",
    a: "We recommend reviewing your financial data at least once a week. Regular check-ins help you stay on top of your spending, track progress toward your goals, and make informed decisions.",
  },
  {
    q: "What kind of financial data can I track with this app?",
    a: "You can track expenses, income, investments, savings, and overall financial performance in one place.",
  },
  {
    q: "Can I track my spending automatically?",
    a: "Yes, the app automatically syncs and categorizes your transactions for easy tracking.",
  },
  {
    q: "Does the app offer investment tracking?",
    a: "Yes, you can monitor your investments and get insights on performance and growth.",
  },
  {
    q: "How do I sign up for the app?",
    a: "Simply click on the sign-up button and follow the onboarding steps to get started.",
  },
];

export default function FAQSection() {
  const text = useTextReveal();
  const fade = useFadeIn();
  const [active, setActive] = useState();

  return (
    <section ref={fade} className="w-full py-20 px-4 md:px-10 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="fade-item text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-[font4] mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>

          <h2 ref={text} className="text-[32px] sm:text-[44px] md:text-[56px] font-[font3] tracking-tight text-black">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="fade-item space-y-4">
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className={`
    group
    rounded-xl border transition-all duration-300
    ${
      isOpen
        ? "bg-[#eef2ff] border-blue-200"
        : "bg-white border-gray-200 hover:bg-[#eef2ff]"
    }
  `}
              >
                {/* QUESTION */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span
                    className={`
    font-[font3] text-sm sm:text-base md:text-lg transition-colors
    ${isOpen ? "text-blue-600" : "text-gray-800 group-hover:text-blue-600"}
  `}
                  >
                    {item.q}
                  </span>

                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {/* ANSWER */}
                <div
                  className={`
                  overflow-hidden transition-all duration-300 px-5
                  ${isOpen ? "max-h-40 pb-5" : "max-h-0"}
                `}
                >
                  <div className="h-[1px] bg-blue-200 mb-4" />

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-[font4]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
