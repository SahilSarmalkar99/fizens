import { Crown } from "lucide-react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import AnalyticsSection from "./AnalyticsSectio";
import useTextReveal from "../animation/useTextReveal";
import useFadeIn from "../animation/useFadeIn";

export default function FeaturesHeader() {
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="w-full md:py-10 px-6 flex flex-col items-center text-center">
      {/* TOP BADGE */}
      <div className="fade-item mb-6">
        <span
          className="flex items-center gap-2 px-4 py-2 rounded-full 
          border border-blue-200 text-blue-600 text-sm font-medium bg-white/60 backdrop-blur-sm"
        >
          {/* ICON */}
          <Crown />
          Key Features
        </span>
      </div>

      {/* HEADING */}
      <h1

  className="text-[36px] md:text-[64px] leading-tight tracking-tighter font-[font2]"
>
  <span   ref={text1} className="block text-black">Explore Our</span>
  <span ref={text2} className="block text-blue-700">Standout Features</span>
</h1>

  {/* top row */}
  <div className="fade-item flex flex-col md:flex-row md:py-10  md:px-6 gap-6">
  <Card1 />
  <Card2 />
</div>


  <AnalyticsSection />
<div>

</div>






    </section>
  );
}
