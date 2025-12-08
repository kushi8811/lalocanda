"use client";

import Map from "./Map";
import localFont from "next/font/local";
import { translations } from "../_data/translations"; // import the file
import { useRouter } from "next/navigation";

// Hardcode the locale for now (or pass as prop later)
const locale = "it"; // change to "en" to switch
const t = translations[locale];

const Montserrat_Italic = localFont({
  src: "../../public/fonts/Montserrat-Italic.ttf",
  variable: "--font-goord",
});

export default function ContactPage() {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push("/booking");
  };

  return (
    <section className="px-4 py-8 md:px-12 lg:px-20">
      {/* Heading */}
      <h1
        className={`text-3xl md:text-4xl font-bold mb-6 text-center md:text-left ${Montserrat_Italic.className}`}
      >
        {t.contact.heading}
      </h1>

      {/* Info + Map layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div
          className={`flex-1 space-y-4 text-center md:text-left ${Montserrat_Italic.className}`}
        >
          <p className="text-lg font-semibold">{t.contact.restaurantName}</p>
          <p className="text-gray-600">{t.contact.address}</p>
          <p className="text-gray-600">{t.contact.phone}</p>
          <p className="text-gray-600">{t.contact.email}</p>

          <button
            type="button"
            onClick={handleBookingClick}
            className="mt-4 bg-accent-900 text-white px-6 py-2 rounded-xl shadow transition hover:bg-accent-700"
          >
            {t.contact.bookButton}
          </button>
        </div>

        {/* Map */}
        <div className="flex-1 h-[300px] md:h-[400px] lg:h-[500px]">
          <Map />
        </div>
      </div>
    </section>
  );
}
