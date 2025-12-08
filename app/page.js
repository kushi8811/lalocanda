"use client";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import Dishes from "./_components/Dishes";
import Logo from "./_components/Logo";
import Divider from "./_components/Divider";
import Scroller from "./_components/Scroller";
import CircularText from "./_components/getRotationTransition";
import ContactPage from "./_components/ContactPage";

import { translations } from "./_data/translations";

// 🔹 Pick your language here:
const currentLang = "it"; // or "en"
const messages = translations[currentLang];

export default function HomePage() {
  return (
    <div>
      <Hero messages={messages} />
      <Intro messages={messages} />
      <Divider messages={messages} />
      <Logo messages={messages} />
      <Dishes messages={messages} />
      <Scroller messages={messages} />
      <CircularText
        text={messages.circular.text}
        spinDuration={20}
        onHover="pause"
        className="my-20"
      />
      <Divider messages={messages} />
      <ContactPage messages={messages} />
    </div>
  );
}
