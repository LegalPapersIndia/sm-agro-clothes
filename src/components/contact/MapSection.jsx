import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full h-[350px] md:h-[400px]"
    >
      <iframe
        title="Office Location"
        src="https://www.google.com/maps?q=Sr%20no%208%2FB%20behind%20Sanas%20School%20Sinhgad%20Road%20Dhayari%20Pune%20411041&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </motion.div>
  );
};

export default MapSection;