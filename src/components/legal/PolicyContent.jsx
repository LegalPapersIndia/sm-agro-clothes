import { motion } from "framer-motion";

const PolicyContent = ({ sections }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F1EBE1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="mb-10 last:mb-0"
          >
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#1F1D1B] mb-3">
              {section.heading}
            </h2>
            <p className="text-[#1F1D1B]/70 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {section.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PolicyContent;