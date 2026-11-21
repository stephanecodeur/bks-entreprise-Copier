
"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  Send,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    if (!newsletterEmail.trim()) return;

    setNewsletterDone(true);
    setNewsletterEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-[#08172E] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">

          {/* Logo et présentation */}
          <div className="space-y-4">
            
            <div className="flex items-center">
              <Image
                src="/logo-bks.jpeg"
                alt="BKS ENTREPRISE"
                width={220}
                height={160}
                className="w-44 h-auto object-contain"
              />
            </div>


            <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
              Plus qu&apos;une entreprise, <br />
              un partenaire de confiance.
            </p>
          </div>

          {/* Liens utiles */}
          <div>
            <h4 className="text-sm font-bold mb-4">Liens utiles</h4>

            <ul className="space-y-2.5 text-xs text-gray-300">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/a-propos" },
                { label: "Nos Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 hover:text-[#D99B26] transition"
                  >
                    <span className="text-[#D99B26] text-[10px]">▶</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domaines */}
          <div>
            <h4 className="text-sm font-bold mb-4">Nos domaines</h4>

            <ul className="space-y-2.5 text-xs text-gray-300">
              {[
                { label: "Immobilier", href: "/immobilier" },
                { label: "Automobile", href: "/automobile" },
                { label: "Recrutement", href: "/recrutement" },
                { label: "Services Divers", href: "/services" },
              ].map((domain) => (
                <li key={domain.href}>
                  <Link
                    href={domain.href}
                    className="flex items-center gap-1.5 hover:text-[#D99B26] transition"
                  >
                    <span className="text-[#D99B26] text-[10px]">▶</span>
                    <span>{domain.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux et newsletter */}
          <div className="space-y-5">

            <div>
              <h4 className="text-sm font-bold mb-3">Suivez-nous</h4>

              <div className="flex items-center gap-2.5">
                <a
                  href="#contact"
                  aria-label="Facebook"
                  className="w-7 h-7 rounded-full bg-[#1877F2] flex items-center justify-center text-xs font-bold hover:opacity-90 transition"
                >
                  f
                </a>

                <a
                  href="#contact"
                  aria-label="LinkedIn"
                  className="w-7 h-7 rounded-full bg-[#0A66C2] flex items-center justify-center text-xs font-bold hover:opacity-90 transition"
                >
                  in
                </a>

                <a
                  href="#contact"
                  aria-label="YouTube"
                  className="w-7 h-7 rounded-full bg-[#FF0000] flex items-center justify-center text-[10px] hover:opacity-90 transition"
                >
                  ▶
                </a>

                <a
                  href="#contact"
                  aria-label="WhatsApp"
                  className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-xs font-bold hover:opacity-90 transition"
                >
                  ✆
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-bold mb-1">Newsletter</h4>

              <p className="text-xs text-gray-400 mb-3">
                Recevez nos actualités
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="flex items-center bg-white rounded-md overflow-hidden"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    setNewsletterDone(false);
                  }}
                  placeholder="Votre email"
                  className="w-full px-3 py-2 text-xs text-slate-800 focus:outline-none"
                  required
                />

                <button
                  type="submit"
                  aria-label="S'inscrire"
                  className="bg-[#D99B26] hover:bg-[#c2871d] text-[#0B1F3A] px-3 py-2.5 transition"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {newsletterDone && (
                <p className="text-[11px] text-[#D99B26] mt-1.5">
                  Merci ! Votre inscription est prise en compte.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Copyright et mentions */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400 relative">

          <p>
            © {new Date().getFullYear()} BKS ENTREPRISE.
            Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/mentions-legales" className="hover:text-white transition">
              Mentions légales
            </Link>

            <span>|</span>

            <Link href="/confidentialite" className="hover:text-white transition">
              Politique de confidentialité
            </Link>

            <span>|</span>

            <Link href="/conditions-utilisation" className="hover:text-white transition">
              Conditions d&apos;utilisation
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Remonter en haut"
            className="w-8 h-8 rounded-full bg-[#D99B26] hover:bg-[#c2871d] text-[#0B1F3A] flex items-center justify-center shadow-lg transition"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>

        </div>
      </div>
    </footer>
  );
}
