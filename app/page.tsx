// "use client";

// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   User,
//   Menu,
//   X,
//   ChevronDown,
//   ArrowRight,
//   Play,
//   Home,
//   Car,
//   Users,
//   Briefcase,
//   Monitor,
//   Printer,
//   ChevronLeft,
//   ChevronRight,
//   FileText,
//   FolderCheck,
//   Award,
//   Handshake,
//   ShieldCheck,
//   Headphones,
//   TrendingUp,
//   Star,
//   Send,
//   ArrowUp,
// } from "lucide-react";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";

"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import {
  ArrowRight,
  Play,
  Home,
  Car,
  Users,
  Briefcase,
  Monitor,
  Printer,
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderCheck,
  Award,
  Handshake,
  ShieldCheck,
  Headphones,
  TrendingUp,
  Star,
  Send,
  ArrowUp,
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
const BksLogo = ({ darkText = true }: { darkText?: boolean }) => (
  <div className="flex flex-col items-start select-none">
    <div className="relative flex items-end">
      <div className="flex flex-col">
        <div className="flex items-end space-x-0.5 mb-0.5 pl-1">
          <div className="w-1.5 h-3 bg-[#0B1F3A] border border-white/20" />
          <div className="w-2 h-5 bg-[#D99B26]" />
          <div className="w-2 h-4 bg-[#0B1F3A] border border-white/20" />
          <div className="w-1.5 h-2.5 bg-[#D99B26]" />
        </div>
        <span
          className={`text-3xl font-black tracking-tighter leading-none ${
            darkText ? "text-[#0B1F3A]" : "text-white"
          }`}
        >
          BKS
        </span>
      </div>
      <div className="w-6 h-4 -ml-1 mb-1 border-t-2 border-r-2 border-[#D99B26] rounded-tr-full transform rotate-12" />
    </div>
    <div className="flex items-center w-full mt-0.5">
      <span className="h-[1px] flex-1 bg-[#D99B26]" />
      <span
        className={`px-1 text-[8px] font-bold tracking-[0.25em] uppercase ${
          darkText ? "text-[#0B1F3A]" : "text-gray-200"
        }`}
      >
        ENTREPRISE
      </span>
      <span className="h-[1px] flex-1 bg-[#D99B26]" />
    </div>
  </div>
);

const heroSlides = [
  {
    badge: "BKS ENTREPRISE",
    titleLine1: "Votre partenaire de confiance",
    titleLine2: "pour un avenir meilleur",
    subtitle:
      "Une entreprise multiservices innovante qui vous accompagne dans vos projets immobiliers, automobiles, professionnels et bien plus.",
    bgImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
    carImage:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=80",
    carAlt: "Berline BKS Entreprise",
    plate: "BKS",
  },
  {
    badge: "IMMOBILIER & HABITAT",
    titleLine1: "Des biens immobiliers sélectionnés",
    titleLine2: "à des prix compétitifs",
    subtitle:
      "Maisons modernes, appartements et terrains à Abidjan avec un accompagnement sérieux de la visite à la remise des clés.",
    bgImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80",
    carImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    carAlt: "Résidence moderne BKS Entreprise",
    plate: "IMMO BKS",
  },
  {
    badge: "AUTOMOBILE & MOBILITÉ",
    titleLine1: "Roulez en toute sérénité",
    titleLine2: "en location ou à l'achat",
    subtitle:
      "Une flotte fiable et entretenue pour vos déplacements professionnels, familiaux ou vos besoins d'entreprise.",
    bgImage:
      "https://images.unsplash.com/photo-1533473372534-712d069b822e?auto=format&fit=crop&w=1920&q=80",
    carImage:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    carAlt: "SUV BKS Entreprise",
    plate: "AUTO BKS",
  },
];

const realEstateSlides = [
  {
    title: "Villa moderne avec jardin",
    alt: "Villa moderne",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Appartement lumineux standing",
    alt: "Appartement standing",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Maison contemporaine",
    alt: "Maison contemporaine",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
  },
];

const vehicleSlides = [
  {
    title: "SUV blanc familial",
    alt: "SUV Toyota Blanc",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80",
  },
  {
    title: "Berline confort affaires",
    alt: "Berline noire",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Véhicule de déplacement",
    alt: "Véhicule moderne",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80",
  },
];

const testimonialsData = [
  {
    name: "Aminata Diabaté",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    quote:
      "« BKS ENTREPRISE m'a accompagné dans la location de mon appartement. Service impeccable ! »",
  },
  {
    name: "Yao Kouamé",
    avatar:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=200&q=80",
    quote:
      "« Une équipe professionnelle et très réactive. Je recommande vivement. »",
  },
  {
    name: "Kouadio Mathieu",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "« Grâce à BKS, j'ai trouvé un emploi rapidement. Merci ! »",
  },
  {
    name: "Aïcha Koné",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    quote:
      "« Location de véhicule simple et fiable pour nos missions à Abidjan. »",
  },
];

export default function BksLandingPage() {
  // const [lang, setLang] = useState<"FR" | "EN">("FR");
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const heroSwiperRef = useRef<SwiperType | null>(null);
  const immoSwiperRef = useRef<SwiperType | null>(null);
  const autoSwiperRef = useRef<SwiperType | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterDone(true);
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans text-slate-800 overflow-x-hidden">
      
      {/* =====================================================================
          2. HERO CAROUSEL
      ===================================================================== */}
      <section className="relative bg-[#0B1F3A] text-white overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSwiper={(swiper) => {
            heroSwiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveHeroSlide(swiper.realIndex)}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5500, disableOnInteraction: false }}
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative min-h-[500px] md:min-h-[540px] flex items-center">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${slide.bgImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#08172E] via-[#0B1F3A]/90 to-transparent" />

                <div className="relative max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 w-full">
                  <motion.div
                    key={`hero-content-${activeHeroSlide}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-7 space-y-6"
                  >
                    <span className="inline-block bg-[#D99B26] text-[#0B1F3A] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full">
                      {slide.badge}
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                      {slide.titleLine1} <br />
                      {slide.titleLine2}
                    </h1>

                    <p className="text-gray-200 text-sm sm:text-base max-w-xl leading-relaxed">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a
                        href="#services"
                        className="flex items-center gap-2 bg-[#D99B26] hover:bg-[#c2871d] text-[#0B1F3A] font-bold text-sm px-6 py-3 rounded-full shadow-lg transition"
                      >
                        <span>Découvrir nos services</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <button
                        type="button"
                        onClick={() => setVideoOpen(true)}
                        className="flex items-center gap-3 text-white hover:text-[#D99B26] text-sm font-medium transition group"
                      >
                        <span className="w-10 h-10 rounded-full border border-white/40 group-hover:border-[#D99B26] flex items-center justify-center bg-white/10 backdrop-blur-sm transition">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </span>
                        <span>Voir la présentation</span>
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.55 }}
                    className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-14"
                  >
                    <div className="relative w-full max-w-md">
                      <img
                        src={slide.carImage}
                        alt={slide.carAlt}
                        className="w-full h-60 sm:h-64 object-cover rounded-xl shadow-2xl border border-white/10"
                      />
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#0B1F3A] border border-[#D99B26] text-white text-xs font-extrabold px-4 py-0.5 rounded tracking-widest shadow">
                        {slide.plate}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Indicateurs de slide cliquables */}
        <div className="max-w-7xl mx-auto px-4 md:px-12 pb-6 -mt-12 relative z-20 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              onClick={() => heroSwiperRef.current?.slideToLoop(idx)}
              className={`h-2.5 rounded-full transition-all ${
                activeHeroSlide === idx
                  ? "w-6 bg-[#D99B26]"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. BARRE DE SERVICES (6 COLONNES)
      ===================================================================== */}
      <section
        id="services"
        className="bg-white border-b border-gray-200 shadow-sm relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            {[
              {
                icon: Home,
                title: "Immobilier",
                sub: "Location & Vente",
                href: "#immobilier",
              },
              {
                icon: Car,
                title: "Automobile",
                sub: "Vente & Location",
                href: "#automobile",
              },
              {
                icon: Users,
                title: "Placement de",
                sub: "Personnel",
                href: "#recrutement",
              },
              {
                icon: Briefcase,
                title: "Recrutement",
                sub: "Offres d'emploi",
                href: "#recrutement",
              },
              {
                icon: Monitor,
                title: "Services Graphiques",
                sub: "& Communication",
                href: "#contact",
              },
              {
                icon: Printer,
                title: "Bureautique",
                sub: "Traitement & Services",
                href: "#contact",
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center text-center py-6 px-3 hover:bg-slate-50 transition group"
                >
                  <IconComponent className="w-8 h-8 text-[#0B1F3A] group-hover:text-[#D99B26] group-hover:scale-110 transition mb-2.5 stroke-[1.75]" />
                  <h3 className="text-xs sm:text-sm font-bold text-[#0B1F3A]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">{item.sub}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CARTES IMMOBILIER & AUTOMOBILE (2 COLONNES + CARROUSELS)
      ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Carte 1 : Nos biens immobiliers */}
          <motion.div
            id="immobilier"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-center"
          >
            <div className="sm:col-span-6 p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-[#D99B26]" />
                <span className="text-xs font-bold text-[#D99B26]">
                  Nos biens immobiliers
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-[#0B1F3A]">
                Trouvez le bien idéal
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Maisons, appartements, terrains... à des prix compétitifs.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#D99B26] hover:bg-[#c2871d] text-white text-xs font-bold px-4 py-2.5 rounded-full transition"
                >
                  <span>Voir tous les biens</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="sm:col-span-6 relative h-52 sm:h-60 group">
              <Swiper
                modules={[Autoplay]}
                onSwiper={(swiper) => {
                  immoSwiperRef.current = swiper;
                }}
                slidesPerView={1}
                loop
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                className="w-full h-full"
              >
                {realEstateSlides.map((slide, i) => (
                  <SwiperSlide key={i} className="w-full h-full">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                onClick={() => immoSwiperRef.current?.slidePrev()}
                aria-label="Bien précédent"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#0B1F3A] flex items-center justify-center shadow transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => immoSwiperRef.current?.slideNext()}
                aria-label="Bien suivant"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#0B1F3A] flex items-center justify-center shadow transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Carte 2 : Nos véhicules */}
          <motion.div
            id="automobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-center"
          >
            <div className="sm:col-span-6 p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-[#D99B26]" />
                <span className="text-xs font-bold text-[#D99B26]">
                  Nos véhicules
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-[#0B1F3A]">
                Roulez en toute sérénité
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Vente ou location, des véhicules pour tous vos besoins.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#15325b] text-white text-xs font-bold px-4 py-2.5 rounded-full transition"
                >
                  <span>Voir notre flotte</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="sm:col-span-6 relative h-52 sm:h-60 bg-gray-100 group">
              <Swiper
                modules={[Autoplay]}
                onSwiper={(swiper) => {
                  autoSwiperRef.current = swiper;
                }}
                slidesPerView={1}
                loop
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full h-full"
              >
                {vehicleSlides.map((slide, i) => (
                  <SwiperSlide key={i} className="w-full h-full">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                onClick={() => autoSwiperRef.current?.slidePrev()}
                aria-label="Véhicule précédent"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#0B1F3A] flex items-center justify-center shadow transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => autoSwiperRef.current?.slideNext()}
                aria-label="Véhicule suivant"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#0B1F3A] flex items-center justify-center shadow transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          5. SECTION RECRUTEMENT & PLACEMENT
      ===================================================================== */}
      <section
        id="recrutement"
        className="max-w-7xl mx-auto px-4 md:px-12 pb-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80"
              alt="Équipe Recrutement BKS"
              className="w-full h-56 object-cover rounded-xl shadow-sm"
            />
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#D99B26]" />
              <span className="text-xs font-bold text-[#D99B26]">
                Recrutement &amp; Placement
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
              Boostez votre carrière
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Découvrez nos offres d&apos;emploi ou confiez-nous vos besoins en
              personnel qualifié.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#163663] text-white text-xs font-bold px-5 py-2.5 rounded-full transition"
              >
                <span>Voir les offres</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-gray-300 hover:border-[#0B1F3A] text-[#0B1F3A] text-xs font-bold px-5 py-2.5 rounded-full transition"
              >
                Déposer un CV
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-gray-100 pt-5 lg:pt-0 lg:pl-6 space-y-4">
            {[
              { icon: Briefcase, label: "Offres d'emploi" },
              { icon: FileText, label: "Candidatures en ligne" },
              { icon: FolderCheck, label: "Suivi de votre dossier" },
              { icon: Award, label: "Services de placement" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href="#contact"
                  className="flex items-center gap-3 text-sm font-semibold text-[#0B1F3A] hover:text-[#D99B26] transition"
                >
                  <span className="w-7 h-7 rounded-md bg-[#0B1F3A] text-white flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* =====================================================================
          6. POURQUOI CHOISIR BKS ? (BANDEAU BLEU NUIT + SKYLINE)
      ===================================================================== */}
      <section
        id="apropos"
        className="relative bg-[#0B1F3A] text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-0.5 bg-[#D99B26]" />
                <span className="text-xs font-bold text-[#D99B26]">
                  Pourquoi choisir BKS ?
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Une entreprise engagée à vos côtés
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-0 sm:divide-x sm:divide-white/15 pt-2">
              {[
                {
                  icon: Handshake,
                  line1: "Une expertise",
                  line2: "multisectorielle",
                },
                {
                  icon: ShieldCheck,
                  line1: "Une fiabilité",
                  line2: "reconnue",
                },
                {
                  icon: Headphones,
                  line1: "Un service client",
                  line2: "réactif",
                },
                {
                  icon: Award,
                  line1: "Des solutions",
                  line2: "sur mesure",
                },
                {
                  icon: TrendingUp,
                  line1: "Une innovation",
                  line2: "continue",
                },
              ].map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="flex flex-col items-center text-center px-3"
                  >
                    <Icon className="w-8 h-8 text-[#D99B26] mb-3 stroke-[1.75]" />
                    <p className="text-xs font-semibold leading-snug text-gray-100">
                      {pillar.line1} <br />
                      {pillar.line2}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-4 relative h-52 lg:h-64">
            <div className="w-full h-full rounded-tl-[80px] rounded-bl-[40px] overflow-hidden border-l-4 border-[#D99B26] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Quartier des affaires Abidjan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. TÉMOIGNAGES CLIENTS ("Ils nous font confiance" + CARROUSEL)
      ===================================================================== */}
      <section
        id="temoignages"
        className="max-w-7xl mx-auto px-4 md:px-12 py-14"
      >
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-5 h-0.5 bg-[#D99B26]" />
            <span className="text-xs font-bold text-[#D99B26]">
              Témoignages clients
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
            Ils nous font confiance
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonialsData.map((item, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <div className="h-full bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="space-y-2">
                  <p className="text-xs text-gray-700 italic leading-relaxed">
                    {item.quote}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#0B1F3A]">
                      {item.name}
                    </span>
                    <div className="flex items-center text-[#D99B26]">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* =====================================================================
          8. BANNIÈRE CTA ("Ensemble, construisons vos projets")
      ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="relative bg-[#0B1F3A] rounded-2xl overflow-hidden px-6 sm:px-10 py-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80')",
            }}
          />

          <div className="relative flex items-center gap-4 text-white">
            <Send className="w-9 h-9 text-[#D99B26] shrink-0 -rotate-12" />
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold">
                Ensemble, construisons vos projets
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Contactez-nous dès aujourd&apos;hui pour bénéficier de nos
                services.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 bg-[#D99B26] hover:bg-[#c2871d] text-[#0B1F3A] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow transition shrink-0"
          >
            <span>Nous contacter</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* =====================================================================
          MODALE PRÉSENTATION
      ===================================================================== */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-[#0B1F3A] text-white rounded-2xl max-w-xl w-full p-6 border border-white/15 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base">
                Présentation de BKS ENTREPRISE
              </h3>
              
            </div>
            <div className="aspect-video rounded-xl bg-[#08172E] border border-white/10 flex items-center justify-center text-xs sm:text-sm text-gray-300 px-4 text-center">
              Ajoutez ici votre lecteur vidéo de présentation BKS ENTREPRISE.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}