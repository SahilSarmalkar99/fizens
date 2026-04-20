import { motion, useInView } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useTextReveal from "../animation/useTextReveal";
import useFadeIn from "../animation/useFadeIn";

function Counter({ value, suffix = "", duration = 1.5 }) {

  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
    const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section
      ref={fade}
      className="w-full px-4 md:px-10 md:py-10 bg-white flex justify-center"
    >
      <div className="max-w-full w-full">
        {/* TITLE */}
        <div className="fade-item text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="bg-blue-100 p-1.5 rounded-full">
              <BarChart3 className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-blue-500 text-sm tracking-wide font-medium">
              Statistics
            </p>
          </div>

          <h2
            ref={text1}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
          >
            See Your
          </h2>

          <h2
            ref={text2}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-600 leading-tight"
          >
            Wealth Grow
          </h2>
        </div>

        {/* GRID */}
        <div className="fade-item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* PATTERN CARD */}
          <CardOutline>
            <Pattern />
          </CardOutline>

          {/* 98% */}
          <Card>
            <Stat
              value={
                <>
                  <span className="mr-2">↑</span>
                  <Counter value={98} suffix="%" />
                </>
              }
            />
            <Desc>Transactions are processed successfully</Desc>
          </Card>

          {/* PATTERN CARD */}
          <CardOutline>
            <Pattern />
          </CardOutline>

          {/* $10K */}
          <Card>
            <Stat
              value={
                <>
                  <span>$</span>
                  <Counter value={10} suffix="K+" />
                </>
              }
            />
            <Desc>Our users’ average saving amount</Desc>
          </Card>

          {/* CENTER + */}
          <CardOutline center>+</CardOutline>

          {/* 50% */}
          <CardGradient>
            <Stat
              white
              value={
                <>
                  <span className="mr-2">↑</span>
                  <Counter value={50} suffix="%" />
                </>
              }
            />
            <Desc white>Effective in financial growth than before</Desc>
          </CardGradient>
        </div>
      </div>
    </section>
  );
}

/* 🔹 COMPONENTS */

function Card({ children }) {
  return (
    <div
      className="
      rounded-full bg-gray-100
      h-[150px] md:h-[170px]
      flex items-center gap-6 px-10
      transition-all duration-300
      hover:shadow-md hover:-translate-y-1
    "
    >
      {children}
    </div>
  );
}

function CardGradient({ children }) {
  return (
    <div
      className="
      rounded-full
      bg-gradient-to-r from-blue-600 to-blue-400
      h-[150px] md:h-[170px]
      flex items-center gap-4 px-6
      text-white
      shadow-lg hover:-translate-y-1
      transition-all duration-300
    "
    >
      {children}
    </div>
  );
}

function CardOutline({ children, center = false }) {
  return (
    <div
      className={`
      rounded-full border border-blue-200
      h-[150px] md:h-[170px]
      md:flex items-center justify-center
      text-blue-300 hidden
      ${center ? "text-9xl font-light" : ""}
    `}
    >
      {children}
    </div>
  );
}

function Stat({ value, white }) {
  return (
    <span
      className={`
      text-3xl md:text-4xl font-[font3]
      ${white ? "text-white" : "text-blue-600"}
    `}
    >
      {value}
    </span>
  );
}

function Desc({ children, white }) {
  return (
    <p
      className={`font-[font4]
      text-base md:text-xl leading-snug
      ${white ? "text-white/90" : "text-gray-600"}
    `}
    >
      {children}
    </p>
  );
}

function Pattern() {
  return (
    <div className="flex items-center justify-center gap-10 w-full">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="relative w-10 h-10">
          <span className="absolute w-full h-[2px] bg-blue-300 rotate-45 top-1/2 left-0" />
          <span className="absolute w-full h-[2px] bg-blue-300 -rotate-45 top-1/2 left-0" />
        </div>
      ))}
    </div>
  );
}
