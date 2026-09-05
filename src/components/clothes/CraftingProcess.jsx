import { motion } from "framer-motion";
import { Scissors, ClipboardCheck, Shirt, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <Scissors size={22} />,
    title: "Cutting",
    desc: "Fabric cut to precise specifications based on order requirements.",
  },
  {
    step: "02",
    icon: <Shirt size={22} />,
    title: "Stitching",
    desc: "Assembled with attention to finish, fit, and durability.",
  },
  {
    step: "03",
    icon: <ClipboardCheck size={22} />,
    title: "Quality Check",
    desc: "Every piece inspected before it's approved for packing.",
  },
  {
    step: "04",
    icon: <Truck size={22} />,
    title: "Delivery",
    desc: "Packed and dispatched on schedule, tracked until arrival.",
  },
];

const CraftingProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F1EBE1] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#1F1D1B 1px, transparent 1px), linear-gradient(90deg, #1F1D1B 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1D1B] leading-tight">
            From Fabric to{" "}
            <span className="text-[#B8935A]">Finish</span>
          </h2>
        </motion.div>

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
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-14 w-[calc(100%-1rem)] h-[1px] bg-gradient-to-r from-[#B8935A]/50 to-[#B8935A]/10"></div>
              )}

              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1F1D1B] text-[#B8935A]">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full bg-[#B8935A] text-[#1F1D1B] text-[10px] font-bold">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1F1D1B] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#1F1D1B]/60 text-sm leading-relaxed max-w-[220px]">
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

export default CraftingProcess;