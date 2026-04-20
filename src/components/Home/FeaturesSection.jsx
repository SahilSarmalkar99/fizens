import { PieChart, Wallet, TrendingUp, CreditCard, FileText } from "lucide-react";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

const features = [
  {
    title: "Budgeting",
    desc: "Track budgets for different categories.",
    icon: PieChart,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Debt Management",
    desc: "Track debt balances, interest rates, and create plans.",
    icon: Wallet,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Investment Tracking",
    desc: "Track investments, including stocks, bonds, and funds.",
    icon: TrendingUp,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Bill Payment",
    desc: "Pay bills directly through the app. One stop for all.",
    icon: CreditCard,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Tax Preparation",
    desc: "Get assistance with tax preparation and filing.",
    icon: FileText,
    color: "bg-green-100 text-green-600",
  },
];

export default function FeaturesSection() {
  const text = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="bg-[#FFFFFF] w-full px-4 md:px-10 md:py-10 flex justify-center">
      <div className="max-w-6xl w-full">

        {/* TITLE */}
        <h2 ref={text} className="text-center text-2xl md:text-4xl font-[font3] text-gray-900 mb-12">
          ...and more additional features
        </h2>

        {/* GRID */}
        <div className="fade-item grid gap-6 font-[font2]">
          
          {/* TOP ROW (3 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.slice(0, 3).map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>

          {/* BOTTOM ROW (2 cards centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-3xl lg:mx-auto">
            {features.slice(3).map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex items-start gap-4 p-5 md:p-6 bg-[#F8FCFF] rounded-2xl hover:shadow-md transition">

      {/* ICON */}
      <div className={`p-3 rounded-xl ${item.color}`}>
        <Icon size={22} />
      </div>

      {/* TEXT */}
      <div>
        <h3 className="text-gray-900 font-[font3] text-base md:text-lg">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm font-[font2] md:text-base mt-1">
          {item.desc}
        </p>
      </div>
    </div>
  );
}