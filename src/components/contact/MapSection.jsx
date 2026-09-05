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
        src="https://www.google.com/maps?q=Noida%20Sector%208&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </motion.div>
  );
};

export default MapSection;