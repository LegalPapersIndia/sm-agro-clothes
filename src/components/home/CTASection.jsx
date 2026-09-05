import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const trustPoints = ["No hidden costs", "Clear timelines", "Direct communication"];

const CTASection = () => {
  return (
    <section className="relative py-16 md:py-20 bg-[#F1EBE1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative bg-[#1F1D1B] rounded-[2rem] px-8 py-10 md:px-14 md:py-14 text-center overflow-hidden transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#B8935A]/10"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#B8935A]/40 rounded-tl-[2rem] transition-all duration-500 group-hover:w-28 group-hover:h-28 group-hover:border-[#B8935A]/80"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#B8935A]/40 rounded-br-[2rem] transition-all duration-500 group-hover:w-28 group-hover:h-28 group-hover:border-[#B8935A]/80"></div>

          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs font-medium mb-4">
            Let's Talk
          </span>

          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-[#F1EBE1] leading-tight mb-4">
            Ready to Partner With{" "}
            <span className="text-[#B8935A]">Us?</span>
          </h2>

          <p className="text-[#F1EBE1]/70 max-w-xl mx-auto mb-6 text-sm md:text-base">
            Whether it's agricultural produce or textile sourcing, we're
            ready to discuss what your business needs.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#B8935A]" />
                <span className="text-[#F1EBE1]/70 text-xs md:text-sm">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="group/btn bg-[#B8935A] hover:bg-[#a67f45] text-[#1F1D1B] px-7 py-3 rounded-sm font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>

            <Link
              to="/about"
              className="border border-[#F1EBE1]/20 hover:border-[#B8935A]/60 hover:bg-white/5 text-[#F1EBE1] px-7 py-3 rounded-sm font-medium text-sm transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;