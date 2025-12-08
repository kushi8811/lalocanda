"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../_context/LanguageContext";
import logo from "@/public/images/nobglogo.png";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const sidebarRef = useRef();

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="relative bg-primary-800 text-white p-11 flex items-center justify-between">
      {/* Centered Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image
          src={logo}
          alt="La Locanda Logo"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 ml-auto items-center">
        <Link href="/" className="hover:underline">
          {t.quickLinks.home}
        </Link>
        <Link href="/menu" className="hover:underline">
          {t.quickLinks.menu}
        </Link>
        <Link href="/about" className="hover:underline">
          {t.quickLinks.about}
        </Link>
        <Link href="/booking" className="hover:underline">
          {t.contact.bookButton}
        </Link>
        <LanguageSelector />
      </nav>

      {/* Mobile Language Selector */}
      <div className="md:hidden absolute top-4 right-4 z-50">
        <LanguageSelector />
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden ml-auto pt-4 text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed z-50 top-0 right-0 h-full w-2/3 bg-gray-900 p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="mb-6"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <X size={28} className="bg-gray-900" />
        </button>
        <nav className="flex flex-col space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            {t.quickLinks.home}
          </Link>
          <Link href="/menu" onClick={() => setIsOpen(false)}>
            {t.quickLinks.menu}
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            {t.quickLinks.about}
          </Link>
          <Link href="/booking" onClick={() => setIsOpen(false)}>
            {t.contact.bookButton}
          </Link>
        </nav>
        {/* Logo below links */}
        <div className="mt-8 flex justify-center">
          <Image
            src={logo}
            alt="La Locanda Logo"
            width={220}
            height={220}
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
