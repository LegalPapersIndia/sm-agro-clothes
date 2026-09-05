import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Wheat, Shirt } from "lucide-react";

// PLACEHOLDER — replace with real division images once client provides them
import agroImg from "../../assets/division-agro.jpg";
import clothesImg from "../../assets/division-clothes.jpg";

const divisions = [
  {
    title: "Agro",
    subtitle: "Agricultural Produce",
    desc: "Quality-first sourcing and supply of agricultural produce, handled with care from farm to delivery.",
    image: agroImg,
    icon: <Wheat size={22} />,
    link: "/agro",
  },
  {
    title: "Clothes",
    subtitle: "Textile & Garments",
    desc: "Finely crafted fabrics and garments, built on consistent quality and attention to detail.",
    image: clothesImg,
    icon: <Shirt size={22} />,
    link: "/clothes",
  },
];

const DivisionsShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1F1D1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Our Divisions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F1EBE1] leading-tight">
            Two Businesses,{" "}
            <span className="text-[#B8935A]">One Standard</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Link
                to={division.link}
                className="group relative block h-[380px] sm:h-[440px] md:h-[500px] rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <img
                  src={division.image}
                  alt={division.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D1B] via-[#1F1D1B]/50 to-[#1F1D1B]/10 transition-opacity duration-500 group-hover:from-[#1F1D1B]/95"></div>

                {/* Gold border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B8935A]/60 rounded-2xl transition-all duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#B8935A] text-[#1F1D1B] mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {division.icon}
                  </div>

                  <span className="text-[#B8935A] uppercase tracking-[0.25em] text-xs font-medium mb-2">
                    {division.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F1EBE1] mb-3">
                    {division.title}
                  </h3>

                  <p className="text-[#F1EBE1]/70 text-sm sm:text-base leading-relaxed mb-5 max-w-sm">
                    {division.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[#F1EBE1] text-sm font-medium">
                    Explore {division.title}
                    <ArrowUpRight
                      size={16}
                      className="text-[#B8935A] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsShowcase;