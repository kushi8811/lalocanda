"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import image1 from "@/public/images/stackfood.jpg";
import image2 from "@/public/images/stackdrink.jpg";
import image3 from "@/public/images/stackpitti.jpg";
import image4 from "@/public/images/stackatmosphere.jpg";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ParallaxImage({ src, label }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <section className="img-container bg-accent-300">
      <div ref={ref}>
        <img src={src} alt={label} />
      </div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >
        {label}
      </motion.h2>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const images = [
    { src: image1.src, label: "Food" },
    { src: image2.src, label: "Drinks" },

    { src: image4.src, label: "Atmosphere" },
  ];

  return (
    <div id="example">
      {images.map((img, index) => (
        <ParallaxImage key={index} src={img.src} label={img.label} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>{`
        html {
            scroll-snap-type: x mandatory;
        }

        .img-container {
            height: 70vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 400px;
            height: 400px;
            margin: 2px;
            overflow: hidden;
            border-radius: 10px;
        }

        .img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: 300px) {
            .img-container > div {
                width: 150px;
                height: 200px;
                margin: 0px;
            }

            .img-container img {
                width: 100px;
                height: 150px;
            }
        }

        .img-container h2 {
            color: white;
            margin: ;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.1;
            position: absolute;
            top: 50%;
            left: 55%;
            transform: translate(-50%, -50%);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: none;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
  );
}
