import { motion } from "framer-motion";
import { Sprout, PackageCheck, Factory, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <Sprout size={22} />,
    title: "Sourcing",
    desc: "Raw materials sourced carefully — produce from trusted farms, fabric from quality mills.",
  },
  {
    step: "02",
    icon: <PackageCheck size={22} />,
    title: "Quality Check",
    desc: "Every batch inspected against our standard before it moves further down the line.",
  },
  {
    step: "03",
    icon: <Factory size={22} />,
    title: "Processing",
    desc: "Grading and packing for produce, cutting and stitching for garments — handled with care.",
  },
  {
    step: "04",
    icon: <Truck size={22} />,
    title: "Delivery",
    desc: "Packed and dispatched on schedule, tracked until it reaches you.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1F1D1B] relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F1EBE1 1px, transparent 1px), linear-gradient(90deg, #F1EBE1 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            How We Work
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F1EBE1] leading-tight">
            From Source to{" "}
            <span className="text-[#B8935A]">Delivery</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 lg:gap-x-10">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line — desktop only, not on last item */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[1px] bg-gradient-to-r from-[#B8935A]/50 to-[#B8935A]/10"></div>
              )}

              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Icon + number */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#B8935A]/10 border border-[#B8935A]/40 text-[#B8935A]">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full bg-[#B8935A] text-[#1F1D1B] text-[10px] font-bold">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F1EBE1] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#F1EBE1]/60 text-sm leading-relaxed max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;