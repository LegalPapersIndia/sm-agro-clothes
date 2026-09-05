import { motion } from "framer-motion";

// PLACEHOLDER — replace with real story image once client provides one
import storyImg from "../../assets/our-story.jpg";

const OurStory = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={storyImg}
              alt="Our Story"
              className="w-full h-[280px] sm:h-[360px] md:h-[440px] object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-5 -left-5 w-32 h-32 border-2 border-[#B8935A] rounded-2xl -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Our Story
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1D1B] leading-tight mb-6">
            Two Industries,{" "}
            <span className="text-[#B8935A]">One Purpose</span>
          </h2>

          <p className="text-[#1F1D1B]/70 text-sm sm:text-base leading-relaxed mb-4">
            SM Agro and Clothes Industries was built on a simple idea —
            that quality shouldn't depend on which industry you're in. The
            same discipline that goes into selecting the right produce
            goes into crafting the right fabric.
          </p>

          <p className="text-[#1F1D1B]/70 text-sm sm:text-base leading-relaxed">
            Today, we operate two focused divisions under one roof,
            each run by people who understand that industry — but both
            held to the same standard of care, consistency, and
            reliability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;