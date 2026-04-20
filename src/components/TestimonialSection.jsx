import React from "react";
import "./Carousel.css";
import { MessageSquareQuote } from "lucide-react";
import useTextReveal from "../animation/useTextReveal";
import useFadeIn from "../animation/useFadeIn";

const testimonials = [
  {
    name: "Sarah Jane",
    location: "Michigan, US",
    rating: 5,
    review:
      "I've finally taken control of my finances. It's so easy to use and has helped me save more money than ever before.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sarah Johnson",
    location: "Paris, France",
    rating: 4,
    review:
      "I've been able to pay off debt, save for a down payment, and even start investing.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "David Lee",
    location: "Montreal, Canada",
    rating: 5,
    review:
      "It has been a game-changer for my financial life. I love how it helps me stay organized with my spending.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Guy Hawkins",
    location: "London, UK",
    rating: 5,
    review:
      "I was skeptical at first, but then I have completely transformed my relationship with money.",
    avatar: "https://i.pravatar.cc/100?img=4",
  },

  {
    name: "Aarav Mehta",
    location: "Mumbai, India",
    rating: 5,
    review:
      "Everything is finally in one place. Tracking expenses and savings has never been this simple.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Emily Carter",
    location: "New York, US",
    rating: 4,
    review:
      "The interface is clean and intuitive. It actually motivates me to stay on top of my finances.",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
];

export default function TestimonialSection() {
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="w-full py-24 px-4 md:px-10 bg-white">
      <div className=" max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT TEXT */}
        <div className="fade-item">
          <p className="text-blue-500 font-[font3] text-sm mb-4 border px-4 py-2 rounded-full inline-flex items-center gap-2">
            <MessageSquareQuote className="w-4 h-4" />
            Testimonials
          </p>

          <h2 ref={text1} className="text-4xl md:text-6xl font-[font3] text-gray-900 leading-tight">
            Our Users
          </h2>
          <h2 ref={text2} className="text-4xl md:text-6xl font-[font3] text-blue-600">
            Talk About Us
          </h2>

          {/* Rating */}
          <div className="fade-item flex items-center gap-4 mt-10">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/40?img=5" className="avatar" />
              <img src="https://i.pravatar.cc/40?img=6" className="avatar" />
              <img src="https://i.pravatar.cc/40?img=7" className="avatar" />
            </div>

            <div>
              <p className="font-[font3]">4.8/5 ⭐⭐⭐⭐⭐</p>
              <p className="text-sm font-[font4] text-gray-500">Based on 14K+ reviews</p>
            </div>
          </div>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="fade-item relative flex gap-6 overflow-hidden h-[500px] fade-mask">
          <VerticalColumn data={testimonials} />
          <VerticalColumn data={testimonials} reverse />
        </div>
      </div>
    </section>
  );
}

function VerticalColumn({ data, reverse }) {
  const items = [...data, ...data, ...data];

  return (
    <>
      {" "}
      <div className={`column ${reverse ? "reverse" : ""}`}>
        {items.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </>
  );
}

function TestimonialCard({ name, location, review, avatar, rating }) {
  return (
    <div className="testimonial-card">
      <img src={avatar} className="avatar-large" />

      <h4 className="name">{name}</h4>
      <p className="location">{location}</p>

      <div className="stars">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>

      <p className="review">{review}</p>
    </div>
  );
}
