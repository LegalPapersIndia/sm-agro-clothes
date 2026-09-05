import { motion } from "framer-motion";
import { Gem, Ruler, Layers3, Clock4 } from "lucide-react";

const points = [
  {
    icon: <Gem size={22} />,
    title: "Quality Fabric",
    desc: "Sourced and finished to a consistent standard, batch after batch.",
  },
  {
    icon: <Ruler size={22} />,
    title: "Precise Fit & Finish",
    desc: "Attention to measurements and stitching detail on every piece.",
  },
  {
    icon: <Layers3 size={22} />,
    title: "Bulk Production Capacity",
    desc: "Equipped to handle wholesale orders without compromising quality.",
  },
  {
    icon: <Clock4 size={22} />,
    title: "Reliable Delivery",
    desc: "Clear timelines agreed upfront, with orders tracked until arrival.",
  },
];

const WhyChooseClothes = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1F1D1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F1EBE1] leading-tight">
            Built on{" "}
            <span className="text-[#B8935A]">Craft</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/[0.03] border border-[#B8935A]/20 hover:border-[#B8935A]/60 rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8935A]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#B8935A]/10 text-[#B8935A] mb-6 transition-all duration-500 group-hover:bg-[#B8935A] group-hover:text-[#1F1D1B] group-hover:scale-110">
                  {point.icon}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F1EBE1] mb-2">
                  {point.title}
                </h3>

                <p className="text-[#F1EBE1]/60 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseClothes;