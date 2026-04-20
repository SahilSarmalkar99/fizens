import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const icons = [FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn];

  return (
    <footer className="w-full bg-[#f8f9fc] px-4 md:px-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* LEFT */}
          <div className="space-y-6">
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-md" />
              <span className="text-xl font-[font3]">fizens</span>
            </div>

            {/* NEWSLETTER */}
            <div>
              <p className="font-[font3] text-gray-900 mb-3">
                Subscribe for our newsletter
              </p>

              <div className="flex items-center bg-white rounded-full border border-gray-200 overflow-hidden w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm outline-none font-[font4]"
                />

                <button className="bg-blue-600 text-white px-5 py-2 text-sm font-[font3] rounded-full mr-1 hover:bg-blue-700 transition">
                  Subcribe
                </button>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <FooterColumn
            title="Main Pages"
            items={[
              "All pages included",
              "Home",
              "Features",
              "Pricing",
              "Contact",
            ]}
          />

          <FooterColumn
            title="Other"
            items={["About", "Team Member", "Job detail", "Blog", "404 page"]}
          />

          <FooterColumn
            title="Legal & Utilities"
            items={["Integration", "Download", "Changelog"]}
          />
        </div>

        {/* DIVIDER */}
        <div className="border-t border-blue-200 mt-14 mb-8" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* COPYRIGHT */}
          <p className="text-sm text-gray-600 font-[font4] text-center md:text-left">
            © 2026 Copyright – Fizens | Designed by LoganCee Studio | Made by
            Kota | Powered by Framer
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-3">
            {icons.map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition cursor-pointer"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

/* 🔹 COLUMN COMPONENT */
function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="font-[font3] text-gray-900 mb-4">{title}</h4>

      <ul className="space-y-2 text-gray-500 font-[font4] text-sm">
        {items.map((item, i) => (
          <li key={i} className="hover:text-blue-600 cursor-pointer transition">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
