import { motion } from "framer-motion";
import { Wheat } from "lucide-react";

// PLACEHOLDER — replace with real agro hero image once client provides one
import agroHeroImg from "../../assets/agro-hero.jpg";

const AgroHero = () => {
  return (
    <section
      className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${agroHeroImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1D1B]/70 via-[#1F1D1B]/55 to-[#1F1D1B]/85"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#B8935A]/15 border border-[#B8935A]/40 text-[#B8935A]"
        >
          <Wheat size={28} />
        </motion.div>

        <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
          Agro Division
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F1EBE1] leading-snug">
          Quality From the{" "}
          <span className="text-[#B8935A]">Ground Up</span>
        </h1>
      </motion.div>
    </section>
  );
};

export default AgroHero;