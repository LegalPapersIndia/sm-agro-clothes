import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// PLACEHOLDER — replace with real director photo once provided
import directorImg from "../../assets/director1.jpeg";

const DirectorMessage = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1F1D1B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={directorImg}
              alt="Santosh Marne — Director"
              className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-5 -right-5 w-28 h-28 border-2 border-[#B8935A] rounded-2xl -z-10"></div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3"
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            From the Director's Desk
          </span>

          <Quote className="text-[#B8935A]/30 mb-4" size={40} />

          <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#F1EBE1] leading-relaxed mb-6">
            "Our commitment has always been simple — deliver quality you can
            rely on, whether it's produce from the field or fabric from the
            loom. Every order carries that same standard."
          </p>

          <div>
            <p className="text-[#F1EBE1] font-serif text-lg font-semibold">
              Santosh Marne
            </p>
            <p className="text-[#B8935A] text-sm uppercase tracking-[0.2em] mt-1">
              Director, SM Agro and Clothes Industries
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DirectorMessage;