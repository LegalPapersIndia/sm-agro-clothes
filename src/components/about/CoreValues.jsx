import { motion } from "framer-motion";
import { Gem, Handshake, Leaf, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: <Gem size={22} />,
    title: "Quality First",
    desc: "We don't compromise on standards, in produce or in fabric.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Transparency",
    desc: "Clear terms, honest timelines, no surprises mid-order.",
  },
  {
    icon: <Leaf size={22} />,
    title: "Responsible Sourcing",
    desc: "Materials sourced with respect for people and land alike.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Reliability",
    desc: "Orders delivered as promised — consistently, every time.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Our Values
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1D1B] leading-tight">
            What We Stand{" "}
            <span className="text-[#B8935A]">Behind</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-[#1F1D1B]/10 hover:border-[#B8935A]/50 rounded-2xl p-6 sm:p-7 transition-all duration-500 hover:shadow-xl hover:shadow-[#B8935A]/10"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1F1D1B] text-[#B8935A] mb-6 transition-all duration-500 group-hover:bg-[#B8935A] group-hover:text-[#1F1D1B] group-hover:rotate-6">
                {value.icon}
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1F1D1B] mb-2">
                {value.title}
              </h3>

              <p className="text-[#1F1D1B]/60 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;