import { motion } from "framer-motion";
import { Target, Eye, Compass } from "lucide-react";

const cards = [
  {
    icon: <Target size={26} />,
    title: "Our Mission",
    desc: "To deliver consistent, quality-checked agricultural produce and textiles that businesses can rely on, order after order.",
  },
  {
    icon: <Eye size={26} />,
    title: "Our Vision",
    desc: "To be a trusted name across both agriculture and textiles — known for doing the fundamentals right, every time.",
  },
  {
    icon: <Compass size={26} />,
    title: "Our Approach",
    desc: "Two industries, one process — careful sourcing, consistent quality checks, and clear communication at every step.",
  },
];

const MissionVision = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1F1D1B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white/[0.03] border border-[#B8935A]/20 hover:border-[#B8935A]/60 rounded-2xl p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#B8935A]/10"
          >
            {/* Gradient hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B8935A]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Shine sweep effect */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#B8935A]/10 text-[#B8935A] mb-6 transition-all duration-500 group-hover:bg-[#B8935A] group-hover:text-[#1F1D1B] group-hover:scale-110">
                {card.icon}
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F1EBE1] mb-3">
                {card.title}
              </h3>

              <p className="text-[#F1EBE1]/60 text-sm sm:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;