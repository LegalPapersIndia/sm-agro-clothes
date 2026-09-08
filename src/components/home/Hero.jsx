import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// PLACEHOLDER — replace with real images once client provides them
import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.jpg";

const slides = [hero1, hero2, hero3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current]})` }}
        ></motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#1F1D1B]/85 via-[#1F1D1B]/60 to-[#1F1D1B]/30"></div>

      {/* Subtle gold accent line, top-left */}
      <div className="absolute top-24 left-0 w-24 h-[2px] bg-[#B8935A] hidden md:block z-[2]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4"
          >
            SM Agro &amp; Clothes Industries
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F1EBE1] leading-tight mb-5 sm:mb-6"
          >
            From the Field to the{" "}
            <span className="text-[#B8935A]">Fabric</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-[#F1EBE1]/80 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10"
          >
            Two industries, one standard of quality — premium agricultural
            produce and finely crafted textiles, delivered with care at
            every step.
          </motion.p>

        <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.4 }}
  className="flex flex-row flex-wrap gap-3"
>
  <Link
    to="/agro"
    className="bg-[#B8935A] hover:bg-[#a67f45] text-[#1F1D1B] px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
  >
    Explore Agro
  </Link>

  <Link
    to="/clothes"
    className="border border-[#F1EBE1]/40 text-[#F1EBE1] hover:border-[#B8935A] hover:text-[#B8935A] px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300"
  >
    Explore Clothes
  </Link>
</motion.div>
        </div>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === index ? "w-8 bg-[#B8935A]" : "w-1.5 bg-[#F1EBE1]/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;