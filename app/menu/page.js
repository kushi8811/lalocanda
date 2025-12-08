"use client";
import BlurText from "../_components/BlurText";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function MenuPage() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Title */}
      <BlurText
        text="Our Menu"
        delay={300}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className={`text-3xl md:text-4xl font-bold mb-8 text-center ${font.className}`}
      />

      {/* PDF viewer */}
      <div className="w-full max-w-4xl h-[80vh] sm:h-[80vh] md:h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
        <object
          data="/menu.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p className="text-center p-6">
            Your browser does not support PDFs.{" "}
            <a href="/menu.pdf" className="text-gray-900 underline font-medium">
              Download the menu
            </a>
          </p>
        </object>
      </div>

      {/* Download button (static with margin) */}
      <a
        href="/menu.pdf"
        download
        className="mt-8 mb-6 inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl shadow-md hover:bg-red-700 transition"
      >
        See Menu
      </a>
    </section>
  );
}
