import { motion } from "framer-motion";

// PLACEHOLDER — replace with real contact hero image once client provides one
import contactHeroImg from "../../assets/contact-hero.jpg";

const ContactHero = () => {
  return (
    <section
      className="relative h-[45vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${contactHeroImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1D1B]/70 via-[#1F1D1B]/60 to-[#1F1D1B]/85"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-4"
      >
        <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
          Get In Touch
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F1EBE1] leading-snug">
          Let's Start a{" "}
          <span className="text-[#B8935A]">Conversation</span>
        </h1>
      </motion.div>
    </section>
  );
};

export default ContactHero;