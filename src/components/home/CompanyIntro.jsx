import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// PLACEHOLDER — replace with real company image once client provides one
import introImg from "../../assets/company-intro.jpg";

const CompanyIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative order-2 md:order-1"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={introImg}
              alt="SM Agro and Clothes Industries"
              className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover"
            />
          </div>
          {/* Gold accent frame */}
          <div className="hidden md:block absolute -bottom-5 -right-5 w-32 h-32 border-2 border-[#B8935A] rounded-2xl -z-10"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2"
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Who We Are
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1D1B] leading-tight mb-5 sm:mb-6">
            Two Industries, Built on the{" "}
            <span className="text-[#B8935A]">Same Values</span>
          </h2>

          <p className="text-[#1F1D1B]/70 text-sm sm:text-base leading-relaxed mb-4">
            SM Agro and Clothes Industries brings together quality
            agricultural produce and finely crafted textiles under one
            standard — care, consistency, and craftsmanship.
          </p>

          <p className="text-[#1F1D1B]/70 text-sm sm:text-base leading-relaxed mb-8">
            From the soil to the loom, we focus on doing the essentials
            right, so businesses that work with us know exactly what
            they're getting.
          </p>

          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-[#1F1D1B] font-medium text-sm sm:text-base border-b border-[#B8935A] pb-1 hover:gap-3 transition-all duration-300"
          >
            Learn More About Us
            <ArrowRight
              size={16}
              className="text-[#B8935A] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyIntro;