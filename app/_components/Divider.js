"use client";

import { motion } from "framer-motion";

const Divider = () => {
  return (
    <motion.div
      className="my-12 flex justify-center"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-24 h-1 bg-primary-700 rounded-full"></div>
    </motion.div>
  );
};

export default Divider;
