import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useTextReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const originalHTML = el.innerHTML;

    const temp = document.createElement("div");
    temp.innerHTML = originalHTML;

    const processNode = (node) => {
      if (node.nodeType === 3) {
        const words = node.textContent.split(/\s+/);

        return words
          .map(
            (word) =>
              `<span class="word" style="
                display:inline-block;
                opacity:0;
                transform:translateY(40px);
                filter:blur(10px);
              ">${word}&nbsp;</span>`
          )
          .join("");
      }

      if (node.nodeName === "BR") {
        return "<br/>";
      }

      return node.outerHTML;
    };

    const newHTML = Array.from(temp.childNodes)
      .map(processNode)
      .join("");

    el.innerHTML = newHTML;

    const words = el.querySelectorAll(".word");

    const ctx = gsap.context(() => {
      gsap.to(words, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: options.duration || 2,
        stagger: options.stagger || 0.08,
        ease: options.ease || "power3.out",

        // SCROLL TRIGGER 
        scrollTrigger: {
          trigger: el,
          start: "top 90%", // when element enters viewport
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => {
      ctx.revert();
      el.innerHTML = originalHTML;
    };
  }, []);

  return ref;
};

export default useTextReveal;