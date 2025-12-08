"use client";

import { motion } from "framer-motion";
import Divider from "./Divider";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import { translations } from "../_data/translations"; // <-- import translations

// Fonts
const corbelli = localFont({
  src: "../../public/fonts/corbelli.ttf",
  display: "swap",
});
const cormorant = localFont({
  src: "../../public/fonts/cormorant.semi.otf",
  variable: "--font-cormorant",
  display: "swap",
});

const dishes = [
  { src: "/images/image1.jpg", label: "" },
  { src: "/images/image2.jpg", label: "" },
  { src: "/images/image3.jpg", label: "" },
  { src: "/images/image4.jpg", label: "" },
  { src: "/images/image5.jpg", label: "" },
  { src: "/images/image6.jpg", label: "" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const FeaturedDishes = ({ locale = "it" }) => {
  const router = useRouter();
  const t = translations[locale].dishes; // <-- grab translations

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-700 mb-2">
          {t.heading} {/* <-- replaced hardcoded heading */}
        </h2>
        <Divider />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={dish.src}
                alt={`Dish ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              {dish.label && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-base font-semibold drop-shadow-lg">
                  {dish.label}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-black bg-white rounded-md group"
          onClick={() => router.push("/menu")}
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute bottom-0 left-0 h-full -ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-full opacity-100 object-stretch"
              viewBox="0 0 487 487"
            >
              <path
                fillOpacity=".1"
                fillRule="nonzero"
                fill="#FFF"
                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
              ></path>
            </svg>
          </span>
          <span className="absolute top-0 right-0 w-12 h-full -mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="object-cover w-full h-full"
              viewBox="0 0 487 487"
            >
              <path
                fillOpacity=".1"
                fillRule="nonzero"
                fill="#FFF"
                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
              ></path>
            </svg>
          </span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
          <span className="relative text-base font-semibold">
            {t.seeMenuButton}
          </span>{" "}
          {/* <-- replaced button text */}
        </button>
      </div>
    </section>
  );
};

export default FeaturedDishes;
