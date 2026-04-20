import React from "react";
import { Newspaper } from "lucide-react";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

export default function BlogSection() {
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
    return (
        <section ref={fade} className="w-full py-10 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="fade-item text-center mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-[font4] mb-6">
            <Newspaper className="w-4 h-4" />
            Blog
          </div>

          <h2 ref={text1} className="text-4xl md:text-6xl font-[font3]">
          Read the Articles 
        </h2>
        <h2 ref={text2} className="text-4xl md:text-6xl font-[font3] text-blue-600 mb-10">
         Written By Professionals
        </h2>
        </div>

        {/* CONTENT */}
        <div className="fade-item grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT LARGE CARD */}
          <div>
            <img
              src="https://framerusercontent.com/images/F98LGBOHfFqiDXa1swrICAuDeY.png?width=832&height=520"
              className="w-full h-[240px] sm:h-[320px] md:h-[420px] object-cover rounded-2xl"
              />

            <div className="mt-6">
              <p className="text-blue-600 text-sm font-[font4]">
                Advice <span className="mx-2">•</span> Apr 24, 2025
              </p>

              <h3 className="text-xl md:text-2xl font-[font3] mt-2 text-black">
                Navigating the Stock Market: A Beginner's Guide
              </h3>

              <p className="text-gray-500 mt-3 text-sm md:text-base font-[font4] leading-relaxed max-w-lg">
                It's been an incredible journey over the past year, and what better way to commemorate this milestone than...
              </p>
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-6">

            {/* ITEM */}
            {[
                {
                img:"https://framerusercontent.com/images/jS7dLdo55m8KoiCUcAwq3fhnA.png?width=832&height=520",
                tag: "Advice",
                date: "Apr 23, 2025",
                title: "Why You Should Not Invest Your Emergency Fund",
              },
              {
                img: "https://framerusercontent.com/images/it9VhB7jvDzMA2FahvSIIpzRrbQ.png?width=832&height=520",
                tag: "Investing",
                date: "Apr 22, 2025",
                title: "Adjusting The Sails Of Your Investment To The Weather",
              },
              {
                img: "https://framerusercontent.com/images/neu8z0higfnRkUhhh9P6JLg9Yk.png?width=832&height=520",
                tag: "Insurance",
                date: "Apr 21, 2025",
                title: "3 Essential Questions You Need to Ask Your Insurance Advisor",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">

                {/* IMAGE */}
                <img
                  src={item.img}
                  className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] object-cover rounded-xl flex-shrink-0"
                />

                {/* TEXT */}
                <div>
                  <p className="text-blue-600 text-sm font-[font4]">
                    {item.tag} <span className="mx-2">•</span> {item.date}
                  </p>

                  <h4 className="text-base sm:text-lg md:text-xl font-[font3] mt-1 text-black leading-snug">
                    {item.title}
                  </h4>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}