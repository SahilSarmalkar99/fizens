import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import useTextReveal from "../animation/useTextReveal"
import useFadeIn from "../animation/useFadeIn";

const pricingPlans = [
  {
    name: "Starter Plan",
    monthly: 0,
    yearly: 0,
    badge: "Free",
    features: [
      "Access 14+ Features",
      "Support 24/7",
      "Get Personalized Insights",
      "3 Months Data Storage",
    ],
  },
  {
    name: "Standard Plan",
    monthly: 20,
    yearly: 16, // after 20% discount
    badge: "Popular",
    features: [
      "Access 23+ Features",
      "Priority Support",
      "Get Financial Analytics",
      "Unlimited Data Storage",
    ],
  },
  {
    name: "Advanced Plan",
    monthly: 40,
    yearly: 32,
    badge: "Best Choice",
    features: [
      "Access All Features",
      "Priority Support",
      "Get Financial Advice",
      "Unlimited Data Storage",
    ],
  },
];

export default function PricingSection() {
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section ref={fade} className="w-full py-10 px-4 md:px-10 bg-white">
       {/* Background Grid */}
      <div className="fade-item absolute inset-0 opacity-20 bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="fade-item max-w-7xl mx-auto text-center">

        {/* HEADER */}
        <p className="text-blue-500 font-[font3] text-sm mb-4 border px-4 py-2 rounded-full inline-flex items-center gap-2">
          <ShoppingCart className= "w-5 h-5" /> Pricing
        </p>

        <h2 ref={text1} className="text-4xl md:text-6xl font-[font3]">
          Try For Free And
        </h2>
        <h2 ref={text2} className="text-4xl md:text-6xl font-[font3] text-blue-600 mb-10">
          Start Controlling Your Finances
        </h2>

        {/* TOGGLE */}
        <div className="fade-item flex justify-center font-[font3] items-center gap-6 mb-16">
          <button
            onClick={() => setIsYearly(false)}
            className={`pb-1 border-b-2 ${
              !isYearly ? "border-blue-600 text-blue-600" : "border-transparent text-gray-400"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setIsYearly(true)}
            className={`pb-1 border-b-2 flex items-center gap-2 ${
              isYearly ? "border-blue-600 text-blue-600" : "border-transparent text-gray-400"
            }`}
          >
            Yearly
            <span className="bg-pink-100 text-pink-500 text-xs px-2 py-2 rounded-md">
              -20%
            </span>
          </button>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={i} plan={plan} isYearly={isYearly} highlight={i === 1} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PricingCard({ plan, isYearly, highlight }) {
  const price = isYearly ? plan.yearly : plan.monthly;

  return (
    <div
      className={`fade-item
      relative rounded-[32px] overflow-hidden
      transition-all duration-300
      ${highlight ? "scale-105 shadow-2xl" : "shadow-md"}
    `}
    >
      {/* 🔷 TOP (Gradient + Pattern) */}
      <div
        className={`
        relative p-8 text-white h-[230px]
        ${highlight 
          ? "bg-gradient-to-br from-blue-700 to-blue-500" 
          : "bg-gradient-to-br from-blue-500 to-blue-300"}
      `}
      >
        {/* subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />

        <p className="text-xl text-start font-[font3] mb-5 opacity-90">• {plan.badge}</p>

        <div className="flex  items-end gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={price}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="text-6xl font-semibold tracking-tight"
            >
              ${price}
            </motion.span>
          </AnimatePresence>

          <span className="text-sm mb-2 opacity-90">
            {plan.monthly === 0
              ? "/Lifetime"
              : isYearly
              ? "/Year"
              : "/Month"}
          </span>
        </div>
      </div>

      {/* ⚪ BOTTOM (Floating Card Effect) */}
      <div className="relative font-[font3] bg-[#f3f4f6] p-8 rounded-t-[40px] -mt-8 shadow-inner">

        <h3 className="text-xl text-start text-gray-900">
          {plan.name}
        </h3>

        <p className="text-gray-500 text-start text-sl mt-2 mb-6 leading-tighter tracking-tighter">
          {plan.name} grants you access to exclusive features
        </p>

        {/* divider */}
        <div className="h-[1px] bg-gray-400 mb-6" />

        {/* FEATURES */}
        <div className="space-y-4 mb-8">
          {plan.features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-700">
              
              {/* better icon */}
              <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm text-green-500 text-sm">
                ✓
              </div>

              <span className="text-sm md:text-base">{f}</span>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button
          className={`
          w-full py-3 rounded-full font-medium transition-all duration-300
          ${
            highlight
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
              : "border border-blue-500 text-blue-600 hover:bg-blue-50"
          }
        `}
        >
          Get Started Now
        </button>
      </div>
    </div>
  );
}