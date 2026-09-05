import { motion } from "framer-motion";
import { Wheat, Carrot, Leaf, Nut } from "lucide-react";

// PLACEHOLDER — replace with client's real product category list
const categories = [
  {
    icon: <Wheat size={24} />,
    title: "Grains & Cereals",
    desc: "Staple grains sourced and graded to consistent quality standards.",
  },
  {
    icon: <Leaf size={24} />,
    title: "Pulses & Legumes",
    desc: "A range of pulses sourced from trusted growing regions.",
  },
  {
    icon: <Carrot size={24} />,
    title: "Fresh Produce",
    desc: "Seasonal fruits and vegetables, handled for freshness in transit.",
  },
  {
    icon: <Nut size={24} />,
    title: "Spices & Others",
    desc: "Spices and specialty produce sourced on request.",
  },
];

const ProductCategories = () => {
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
            What We Source
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F1EBE1] leading-tight">
            Product{" "}
            <span className="text-[#B8935A]">Categories</span>
          </h2>
          <p className="text-[#F1EBE1]/50 text-sm mt-4">
            Illustrative categories — final product list confirmed on inquiry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/[0.03] border border-[#B8935A]/20 hover:border-[#B8935A]/60 rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8935A]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#B8935A]/10 text-[#B8935A] mb-6 transition-all duration-500 group-hover:bg-[#B8935A] group-hover:text-[#1F1D1B] group-hover:scale-110">
                  {cat.icon}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F1EBE1] mb-2">
                  {cat.title}
                </h3>

                <p className="text-[#F1EBE1]/60 text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;