import React from "react";

export default function TextHover({ children }) {
  return (
    <span className="relative inline-block overflow-hidden group">
      {/* ORIGINAL TEXT */}
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>

      {/* HOVER TEXT */}
      <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
}