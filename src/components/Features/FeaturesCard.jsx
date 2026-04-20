import { PieChart, Wallet, TrendingUp, CreditCard, FileText, Grid } from "lucide-react";
import useTextReveal from "../../animation/useTextReveal";
import useFadeIn from "../../animation/useFadeIn";

const features = [
  {
    title: "Budgeting",
    desc: "Manage detailed budgets across categories like housing, transportation to stay on top of your finances.",
    icon: PieChart,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Debt Management",
    desc: "Track and manage all debts, from credit card balances to personal loans, with clear insights to reduce liabilities.",
    icon: Wallet,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Investment Tracking",
    desc: "Monitor and analyze your investment portfolio, including stocks, bonds, and mutual funds, to maximize growth.",
    icon: TrendingUp,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Bill Payment",
    desc: "Pay and schedule bills directly within the app, giving you a single place to manage recurring expenses.",
    icon: CreditCard,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Tax Preparation",
    desc: "Identify tax-saving opportunities, organize documents, and simplify your preparation for filing season.",
    icon: FileText,
    color: "bg-green-100 text-green-600",
  },
];

export default function FeaturesSection() {
  const text1 = useTextReveal()
  const text2 = useTextReveal()
  const fade = useFadeIn();
  return (
    <section ref={fade} className="bg-[#FFFFFF] w-full px-4 md:px-10 md:py-10 flex justify-center">
      <div className="fade-item max-w-6xl w-full">
        <div className="flex flex-col justify-center items-center">
        {/* HEADER */}
        <p className="text-blue-500 font-[font4]  text-sm mb-4 border px-4 py-2 rounded-full inline-flex items-center gap-2">
          <Grid className= "w-5 h-5" /> More Features
        </p>

        <h2 ref={text1} className="text-4xl md:text-6xl font-[font4]">
          More Greate
        </h2>
        <h2 ref={text2} className="text-4xl md:text-6xl font-[font4] text-blue-600 mb-10">
          Additions Features
        </h2>
        </div>

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
    <div className="flex flex-col gap-4 p-6 md:p-7 bg-[#F5F7FA] rounded-2xl border border-gray-100 hover:shadow-sm transition-all duration-300">

      {/* ICON */}
      <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.color}`}>
        <Icon size={22} />
      </div>

      {/* TEXT */}
      <div>
        <h3 className="text-gray-900 font-semibold text-lg md:text-xl">
          {item.title}
        </h3>

        <p className="text-gray-500 text-sm md:text-base mt-2 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}