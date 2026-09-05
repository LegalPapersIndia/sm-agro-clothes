import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What products and services do you offer?",
    a: "We operate two divisions — agricultural produce sourcing and textile/garment manufacturing — each handled by teams focused on that industry's specific quality standards.",
  },
  {
    q: "Do you work with businesses of all sizes?",
    a: "Yes, we work with both small and large-scale orders. Reach out with your requirements and we'll confirm what fits.",
  },
  {
    q: "How do you ensure quality across two different industries?",
    a: "Each division follows its own quality checks suited to that product type, but both are held to the same standard of consistency before anything is dispatched.",
  },
  {
    q: "What are your delivery timelines?",
    a: "Timelines depend on order size and type. We agree on a clear schedule upfront so there are no surprises.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-[#F1EBE1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1D1B] leading-tight">
            Frequently Asked{" "}
            <span className="text-[#B8935A]">Questions</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white border border-[#1F1D1B]/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span className="font-medium text-[#1F1D1B] text-sm sm:text-base pr-4">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#B8935A] shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6"
                    >
                      <p className="text-[#1F1D1B]/60 text-sm leading-relaxed pb-5">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;