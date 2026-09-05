import { motion } from "framer-motion";

// PLACEHOLDER — replace with real overview image once client provides one
import agroOverviewImg from "../../assets/agro-overview.jpg";

const AgroOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative order-2 md:order-1"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={agroOverviewImg}
              alt="Agro Division Overview"
              className="w-full h-[280px] sm:h-[360px] md:h-[440px] object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-5 -right-5 w-32 h-32 border-2 border-[#B8935A] rounded-2xl -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2"
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Overview
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1D1B] leading-tight mb-6">
            Sourced Right,{" "}
            <span className="text-[#B8935A]">Delivered Fresh</span>
          </h2>

          <p className="text-[#1F1D1B]/70 text-sm sm:text-base leading-relaxed mb-4">
            Our Agro division focuses on sourcing quality agricultural
            produce directly, with careful attention to freshness,
            consistency, and handling at every stage.
          </p>

          <p className="text-[#1F1D1B]/70 text-sm sm:text-base leading-relaxed">
            Whether it's a one-time order or a recurring supply
            arrangement, we work with businesses to understand exactly
            what they need and deliver it reliably.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AgroOverview;