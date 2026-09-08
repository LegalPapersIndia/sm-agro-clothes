import { motion } from "framer-motion";

const PolicyHero = ({ title, subtitle }) => {
  return (
    <section className="relative bg-[#1F1D1B] py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F1EBE1 1px, transparent 1px), linear-gradient(90deg, #F1EBE1 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
          Legal
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F1EBE1] leading-snug mb-3">
          {title}
        </h1>
        <p className="text-[#F1EBE1]/50 text-sm">{subtitle}</p>
      </motion.div>
    </section>
  );
};

export default PolicyHero;