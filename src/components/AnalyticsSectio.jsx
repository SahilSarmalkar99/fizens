import chartImg from "../assets/features/card5.avif"; 
import useFadeIn from "../animation/useFadeIn";

export default function AnalyticsSection() {
  const card = useFadeIn();
  return (
    <section className="w-full flex justify-center px-4 md:px-10 py-10 md:py-5 overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">

        {/* LEFT CARD */}
        <div ref={card} className="relative h-[260px] md:h-[400px] bg-gradient-to-br from-[#eef4ff] to-[#dbe7ff] rounded-2xl p-6 md:p-10 overflow-hidden">

          {/* TEXT */}
          <div className="z-10 relative max-w-sm text-start">
            <h2 className="text-xl md:text-2xl font-[font3] text-gray-900">
              Financial Analytics
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base font-[font4]">
              Generate reports and visualizations to analyze spending habits.
            </p>
          </div>

          {/* PHONE IMAGE */}
          <img
            src="phone.avif"
            alt="phone"
            className="fade-item
              absolute 
              right-[10px]  md:right-[45px]
              bottom-[-175px]  md:bottom-[-170px]
              w-[150px] md:w-[240px]
              rotate-[12deg]
              drop-shadow-xl
              pointer-events-none
              select-none
            "
          />

          {/* CHART IMAGE */}
          <img
            src={chartImg}
            alt="chart"
            className="fade-item
              absolute
              right-1 md:right-5
              -bottom-5 md:bottom-1
              w-[140px] md:w-[300px]
              rotate-[12deg]
              shadow-lg
              rounded-xl
              pointer-events-none
              select-none
            "
          />
        </div>

        {/* RIGHT CARD */}
        <div className="bg-gradient-to-br from-[#1d4ed8] to-[#4f46e5] rounded-2xl p-6 md:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[260px]">

          {/* ICON */}
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl"></div>

          {/* TEXT */}
          <div className="mt-6 md:mt-10">
            <h2 className="text-white text-xl md:text-2xl font-semibold">
              Get the app
            </h2>

            <button className="mt-4 px-5 py-2 bg-white text-blue-600 rounded-full text-sm md:text-base font-medium hover:scale-105 transition">
              Get the template
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}