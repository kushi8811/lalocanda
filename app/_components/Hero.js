"use client";

import Image from "next/image";
import Link from "next/link";
import image from "@/public/images/hero.jpg";
import localFont from "next/font/local";
import { useLanguage } from "../_context/LanguageContext";

const goord = localFont({
  src: "../../public/fonts/goord.otf",
  variable: "--font-goord",
});

const cormorant = localFont({
  src: "../../public/fonts/cormorant.semi.otf",
  variable: "--font-cormorant",
  display: "swap",
});

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[85vh] w-full">
      <Image
        src={image}
        alt="La Locanda Interior"
        fill
        className="object-cover"
      />
      <div className="mt-50 absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
        <h1
          className={`${goord.className} text-5xl md:text-6xl font-bold text-white mb-4`}
        >
          {t.hero.heading}
        </h1>
        <p className={`${goord.className} text-xl md:text-2xl text-white mb-6`}>
          {t.hero.description}
        </p>
        <Link
          href="/booking"
          className={`bg-accent-100 hover:bg-accent-700 text-accent-900 px-6 py-3 rounded-lg text-lg font-semibold ${cormorant.className}`}
        >
          {t.hero.button}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
