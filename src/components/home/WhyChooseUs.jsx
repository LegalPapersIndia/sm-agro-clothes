import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Clock, Users } from "lucide-react";

const points = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Quality Assurance",
    desc: "Every batch — whether produce or fabric — is checked against a consistent quality standard before it leaves us.",
  },
  {
    icon: <Leaf size={24} />,
    title: "Sustainable Sourcing",
    desc: "We work with sourcing practices that respect the land and the people behind the raw materials.",
  },
  {
    icon: <Clock size={24} />,
    title: "Timely Delivery",
    desc: "Clear timelines agreed upfront, and orders that reach you when they're supposed to.",
  },
  {
    icon: <Users size={24} />,
    title: "Client-First Approach",
    desc: "Every order is handled with direct communication, not passed between departments.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1D1B] leading-tight">
            What Sets Us{" "}
            <span className="text-[#B8935A]">Apart</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-[#1F1D1B]/10 hover:border-[#B8935A]/50 rounded-2xl p-6 sm:p-7 transition-all duration-500 hover:shadow-xl hover:shadow-[#B8935A]/10"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1F1D1B] text-[#B8935A] mb-6 transition-all duration-500 group-hover:bg-[#B8935A] group-hover:text-[#1F1D1B] group-hover:rotate-6">
                {point.icon}
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1F1D1B] mb-3">
                {point.title}
              </h3>

              <p className="text-[#1F1D1B]/60 text-sm leading-relaxed">
                {point.desc}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#B8935A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;