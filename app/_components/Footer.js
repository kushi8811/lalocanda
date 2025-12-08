"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import localFont from "next/font/local";
import Link from "next/link";
import { useLanguage } from "../_context/LanguageContext"; // <-- import context

const goord = localFont({
  src: "../../public/fonts/goord.otf",
  variable: "--font-goord",
  display: "swap",
});

export default function Footer() {
  const { t } = useLanguage(); // pull translations

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className={`text-2xl font-bold text-white ${goord.className}`}>
            La Locanda
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            {t.footerDescription}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3
            className={`text-lg font-semibold text-white mb-3 ${goord.className}`}
          >
            {t.contact.sectionTitle}
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              {t.contact.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500" />
              {t.contact.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500" />
              {t.contact.email}
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3
            className={`text-lg font-semibold text-white mb-3 ${goord.className}`}
          >
            {t.openingHours.heading}
          </h3>
          <ul className="space-y-1 text-sm">
            <li>{t.openingHours.text}</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className={`text-lg font-semibold text-white mb-3 ${goord.className}`}
          >
            {t.quickLinks.heading}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-red-500">
                {t.quickLinks.home}
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-red-500">
                {t.quickLinks.menu}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-500">
                {t.quickLinks.about}
              </Link>
            </li>
            <li className="hover:text-red-500">
              <FaFacebook size={20} />
            </li>
            <li className="hover:text-red-500">
              <FaInstagram size={20} />
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 mt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} La Locanda. {t.quickLinks.allRights}
          </p>
          <div className="flex gap-4"></div>
        </div>
      </div>
    </footer>
  );
}
