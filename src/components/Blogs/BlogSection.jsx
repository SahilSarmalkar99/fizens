import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

const categories = ["All", "Advice", "Investing", "Insurance"];

const posts = [
  {
    category: "Advice",
    date: "Apr 23, 2025",
    title: "Why You Should Not Invest Your Emergency Fund",
    img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
  },
  {
    category: "Investing",
    date: "Apr 22, 2025",
    title: "Adjusting The Sails Of Your Investment To The Weather",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
  },
  {
    category: "Insurance",
    date: "Apr 21, 2025",
    title: "3 Essential Questions You Need to Ask Your Insurance Advisor",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
  {
    category: "Investing",
    date: "Apr 20, 2025",
    title: "10 Simple Habits to Improve Your Investing Results Immediately",
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
  },
  {
    category: "Advice",
    date: "Apr 19, 2025",
    title: "8 Financial Tips for Young Adults",
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
  },
  {
    category: "Insurance",
    date: "Apr 18, 2025",
    title: "How Insurers Can Serve Asia’s Aging Population",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
];

const BlogSection = () => {
    const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? posts
      : posts.filter((p) => p.category === active);

  return (
    <section ref={fade} className="w-full py-20 px-4 bg-white flex flex-col items-center">

      {/* FILTER */}
      <div className="fade-item flex font-[font3] gap-6 md:gap-10 mb-12 text-sm md:text-base font-medium">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative pb-2 transition ${
              active === cat
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {cat}

            {active === cat && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* GRID */}
      <motion.div
        layout
        className="fade-item w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((post, i) => (
            <motion.div
              key={post.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-[180px] md:h-[200px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* META */}
              <div className="mt-4 text-sm font-[font3] text-gray-500 flex items-center gap-2">
                <span className="text-blue-600">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>

              {/* TITLE */}
              <h3 className="mt-2 font-[font3] text-gray-900 font-medium text-base md:text-lg leading-snug group-hover:text-blue-600 transition">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default BlogSection;