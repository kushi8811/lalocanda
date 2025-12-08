"use client";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import localFont from "next/font/local";
import { useLanguage } from "../_context/LanguageContext"; // <-- import context
import { useRouter } from "next/navigation";

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

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function Intro() {
  const { t } = useLanguage();
  const router = useRouter();

  const handleAboutClick = () => {
    // navigate to the About page (aboutus folder)
    router.push("/about");
  };

  return (
    <section className="flex items-center justify-center min-h-[40vh] px-4 bg-white">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xl text-center"
      >
        <BlurText
          text={t.blurText.welcome}
          delay={300}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8 items-center"
        />
        <br className="text-black" />
        <p
          className={`${cormorant.className} text-lg md:text-sm text-primary-700`}
        >
          {t.intro.description}
        </p>
        <button
          type="button"
          aria-label="Vai alla pagina Chi Siamo"
          onClick={handleAboutClick}
          className={`mt-6 bg-accent-100 hover:bg-accent-600 text-accent-900 px-6 py-3 rounded-lg text-lg font-semibold ${cormorant.className}`}
        >
          {t.intro.cta}
        </button>
      </motion.div>
    </section>
  );
}
