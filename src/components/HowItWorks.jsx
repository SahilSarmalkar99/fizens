import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import img1 from "../assets/features/phone.png"
import img2 from "../assets/features/phone2.png"
import img3 from "../assets/features/phone3.png"
import useTextReveal from "../animation/useTextReveal";
import useFadeIn from "../animation/useFadeIn";


const steps = [
  {
    title: "Connect Your Accounts",
    desc: "Securely link your bank, credit cards, and investments to get a complete financial overview in one place.",
    img: img1,
  },
  {
    title: "Track Expenses",
    desc: "Securely link your bank, credit cards, and investments to get a complete financial overview in one place.",
    img: img2,
  },
  {
    title: "Set Budget",
    desc: "Securely link your bank, credit cards, and investments to get a complete financial overview in one place.",
    img: img3,
  },
];

export default function HowItWorks() {
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="w-full  py-10 md:py-20 px-4 md:px-10">
      <div className="fade-item max-w-7xl py-10 mx-auto bg-[#EFF4FF] rounded-[60px]">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-blue-500 text-sm mb-3 font-[font4]">How It Works</p>

          <h2 ref={text1} className="text-4xl md:text-6xl font-[font3] text-gray-900">
            How Fizens
          </h2>
          <h2 ref={text2} className="text-4xl md:text-6xl font-[font3] text-blue-600">
            Can Help You
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT → PHONE */}
          <div className="relative hidden lg:flex justify-center">
            <div className="sticky top-32">
              <img
                src={img1}
                className="w-[420px]"
                alt="phone"
              />
            </div>
          </div>

          {/* RIGHT → STEPS */}
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-[2px] bg-gray-200" />

            {steps.map((step, index) => (
              <Step key={index} index={index} {...step} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Step({ title, desc, index, img }) {
  const ref = useRef();
  const inView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  return (
    <div ref={ref} className="relative pl-14 mb-24">

      {/* NUMBER */}
      <div
        className={`
        absolute left-0 top-0
        w-10 h-10 rounded-full flex items-center justify-center
        transition-all duration-300 font-[font3]
        ${inView ? "bg-blue-600 text-white scale-110" : "bg-gray-200 text-gray-500"}
      `}
      >
        {index + 1}
      </div>

      {/* TEXT */}
      <motion.div
        animate={{
          opacity: inView ? 1 : 0.5,
          y: inView ? 0 : 30,
        }}
        transition={{ duration: 0.4 }}
      >
        <h3 className={`text-xl md:text-2xl font-[font3] ${inView ? "text-black" : "text-gray-400"}`}>
          {title}
        </h3>

        <p className="text-gray-500 max-w-md font-[font4] leading-relaxed">
          {desc}
        </p>
      </motion.div>

      {/*  MOBILE IMAGE (KEY PART) */}
      <motion.div
        className="mt-5 flex justify-center lg:hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 40,
        }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={img}
          alt="step"
          className="w-[260px] sm:w-[300px] drop-shadow-xl"
        />
      </motion.div>

    </div>
  );
}