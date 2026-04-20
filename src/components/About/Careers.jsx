import { useState } from "react";
import { jobs } from "../../data/jobs";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";
const categories = ["All", "Marketing", "Design", "Develop"];

const Careers = () => {
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();

  const [active, setActive] = useState("All");

  const filteredJobs =
    active === "All" ? jobs : jobs.filter((job) => job.category === active);

  return (
    <section
      ref={fade}
      className="w-full py-16 md:py-24 px-4 bg-white flex flex-col justify-center items-center"
    >
      <div className="fade-item flex flex-col items-center justify-center">
        {/* BADGE */}
        <span className="px-4 py-2 font-[font4] rounded-full  border border-blue-200 text-blue-600 text-sm bg-blue-50 mb-6">
          Career
        </span>

        {/* HEADING */}
        <h1 ref={text1} className="text-center text-3xl md:text-5xl font-[font3] text-gray-900">
          See Open <br />
          <span className="text-blue-600">Roles Below</span>
        </h1>
      </div>
      {/* FILTER TABS */}
      <div className="flex gap-6 mt-10 font-[font3]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`pb-2 text-sm font-medium transition ${
              active === cat
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* JOB LIST */}
      <div className="fade-item w-full max-w-5xl mt-10 space-y-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="border border-blue-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:shadow-md transition"
          >
            {/* LEFT */}
            <div>
              <h3 className="text-xl font-[font3] text-gray-900">
                {job.title}
              </h3>

              <div className="flex flex-wrap font-[font4] gap-10 mt-4 text-sm text-gray-600">
                <div>
                  <p className="text-gray-400">Location</p>
                  <p>{job.location}</p>
                </div>

                <div>
                  <p className="text-gray-400">Arrangement</p>
                  <p>{job.type}</p>
                </div>

                <div>
                  <p className="text-gray-400">Salary Range</p>
                  <p>{job.salary}</p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <button className="px-6 py-2 font-[font3] rounded-full border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Careers;
