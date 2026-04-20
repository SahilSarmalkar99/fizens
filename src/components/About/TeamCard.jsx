import { teamMembers } from "../../data/team";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Crown } from "lucide-react";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

const TeamCard = () => {
  const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="w-full py-16 md:py-24 px-4 bg-white flex flex-col items-center">

      {/* BADGE */}
      <div className="fade-item mb-6 flex justify-center">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
          border border-blue-200 text-blue-600 text-sm font-medium 
          bg-blue-50 shadow-sm"
        >
          <Crown className="w-4 h-4" />
          Our Team
        </span>
      </div>

      {/* HEADING */}
      <h1 ref={text1} className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     font-[font3] leading-tight text-gray-900 max-w-3xl">
        Our Talented <br />
        <span ref={text2} className="text-blue-600">Team Members</span>
      </h1>

      {/* GRID */}
      <div className="fade-item mt-14 w-full max-w-7xl grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-[#f5f7fb] rounded-3xl p-6 text-center 
                       transition-all duration-300 
                       hover:-translate-y-3 hover:shadow-2xl 
                       group relative overflow-hidden"
          >

            {/* subtle gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* IMAGE */}
            <div className="w-28 h-28 mx-auto mb-4 rounded-full 
                            overflow-hidden bg-blue-100 relative z-10">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover grayscale 
                           group-hover:grayscale-0 group-hover:scale-105 
                           transition duration-300"
              />
            </div>

            {/* NAME */}
            <h3 className="text-lg font-semibold text-gray-900 relative z-10">
              {member.name}
            </h3>

            {/* ROLE */}
            <p className="text-gray-500 text-sm mb-4 relative z-10">
              {member.role}
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center gap-3 relative z-10">
              <a href={member.social.email} className="icon">
                <MdEmail />
              </a>
              <a href={member.social.linkedin} className="icon">
                <FaLinkedin />
              </a>
              <a href={member.social.github} className="icon">
                <FaGithub />
              </a>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default TeamCard;