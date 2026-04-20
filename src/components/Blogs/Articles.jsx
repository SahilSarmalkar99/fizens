import { articles } from "../../data/articles";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

const Articles = () => {
    const text1 = useTextReveal();
  const text2 = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="w-full py-20 md:py-30 px-4 bg-white flex flex-col items-center">
 {/* Background Grid */}
      <div className="fade-item absolute inset-0 opacity-20 bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* HEADING */}
      <div className="fade-item text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-[font3] text-gray-900">
          Articles by{" "}
          <span className="text-blue-600">Professionals</span>
        </h1>

        <p className="mt-4 text-gray-500 font-[font4] text-lg">
          Explore expert perspectives, industry updates, and helpful
          resources to grow your AI Business.
        </p>
      </div>

      {/* FEATURED ARTICLE */}
      <div className="fade-item mt-10 w-full max-w-6xl">
        {articles.map((article) => (
          <div
            key={article.id}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
              />
            </div>

            {/* CONTENT */}
            <div>
              {/* TAGS */}
              <div className="flex gap-3 mb-4 font-[font3]">
                <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-md">
                  {article.tag}
                </span>
                <span className="text-sm text-blue-600">
                  {article.category}
                </span>
              </div>

              {/* TITLE */}
              <h2 className="text-2xl md:text-3xl font-[font3] text-gray-900 leading-snug">
                {article.title}
              </h2>

              {/* DESC */}
              <p className="mt-4 font-[font3] text-gray-500">
                {article.desc}
              </p>

              {/* DATE */}
              <p className="mt-6 font-[font4] text-gray-400 text-sm">
                {article.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;