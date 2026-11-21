
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  User,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Nos Services", href: "/services", hasDropdown: true },
  { label: "Immobilier", href: "/immobilier" },
  { label: "Automobile", href: "/automobile", hasDropdown: true },
  { label: "Recrutement", href: "/recrutement" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState("FR");
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">

      {/* Topbar */}
      <div className="bg-[#071936] text-white text-xs py-2.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="tel:+2250707070707"
              className="flex items-center gap-1.5 hover:text-amber-400 transition"
            >
              <Phone size={13} className="text-amber-400 shrink-0" />
              <span>+225 07 07 07 07 07</span>
            </a>

            <a
              href="mailto:contact@bksentreprise.ci"
              className="flex items-center gap-1.5 hover:text-amber-400 transition"
            >
              <Mail size={13} className="text-amber-400 shrink-0" />
              <span>contact@bksentreprise.ci</span>
            </a>

            <span className="hidden sm:flex items-center gap-1.5 text-slate-200">
              <MapPin size={13} className="text-amber-400 shrink-0" />
              <span>Abidjan, Côte d&apos;Ivoire</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-1.5 font-semibold">
              <button
                type="button"
                onClick={() => setLang("FR")}
                className={`px-1.5 py-0.5 rounded transition ${
                  lang === "FR"
                    ? "bg-amber-400 text-[#071936]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                FR
              </button>

              <button
                type="button"
                onClick={() => setLang("EN")}
                className={`px-1.5 py-0.5 rounded transition ${
                  lang === "EN"
                    ? "bg-amber-400 text-[#071936]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs">
              <a
                href="#footer"
                aria-label="Facebook"
                className="w-5 h-5 rounded-full bg-white/15 hover:bg-amber-400 hover:text-[#071936] flex items-center justify-center transition"
              >
                f
              </a>

              <a
                href="#footer"
                aria-label="LinkedIn"
                className="w-5 h-5 rounded-full bg-white/15 hover:bg-amber-400 hover:text-[#071936] flex items-center justify-center transition"
              >
                in
              </a>

              <a
                href="#footer"
                aria-label="Instagram"
                className="w-5 h-5 rounded-full bg-white/15 hover:bg-amber-400 hover:text-[#071936] flex items-center justify-center transition"
              >
                ig
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-4">

          {/* Logo officiel BKS */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center shrink-0"
          >
            <Image
              src="/logo-bks.jpeg"
              alt="BKS Entreprise"
              width={280}
              height={160}
              priority
              className="h-16 sm:h-[76px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-700">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-1 py-1 transition whitespace-nowrap ${
                    isActive
                      ? "text-amber-500 border-b-2 border-amber-500"
                      : "hover:text-amber-500"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={14} />}
                </Link>
              );
            })}
          </div>

          {/* Espace Client */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/espace-client"
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#071936] font-bold text-sm py-2.5 px-5 rounded-full transition shadow-sm"
            >
              <User size={16} />
              <span>Espace Client</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Ouvrir ou fermer le menu"
            aria-expanded={mobileMenuOpen}
            className="xl:hidden p-2 rounded-lg text-[#0B254E] hover:bg-slate-100 transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="xl:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-5 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`block py-2.5 px-3 rounded-lg text-sm font-semibold transition ${
                        isActive
                          ? "bg-amber-50 text-amber-600"
                          : "text-slate-700 hover:bg-slate-50 hover:text-amber-500"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="pt-3">
                  <Link
                    href="/espace-client"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#071936] font-bold text-sm py-3 px-5 rounded-full transition"
                  >
                    <User size={16} />
                    <span>Espace Client</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
