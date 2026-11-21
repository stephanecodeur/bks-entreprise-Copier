"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const realEstateSlides = [
  {
    title: "Villa Moderne avec Piscine",
    location: "Cocody Riviera, Abidjan",
    price: "À partir de 85 000 000 FCFA",
    image: "/immo-1.jpg",
  },
  {
    title: "Appartement Standing 3 Pièces",
    location: "Zone 4, Marcory",
    price: "650 000 FCFA / mois",
    image: "/immo-2.jpg",
  },
  {
    title: "Terrain Viabilisé & Titré",
    location: "Bingerville",
    price: "18 000 000 FCFA",
    image: "/immo-3.jpg",
  },
];

const vehicleSlides = [
  {
    title: "SUV Familial Tout-Terrain",
    location: "Disponible à l'achat ou location",
    price: "45 000 FCFA / jour",
    image: "/car-1.jpg",
  },
  {
    title: "Berline Confort Affaires",
    location: "Chauffeur disponible sur demande",
    price: "35 000 FCFA / jour",
    image: "/car-2.jpg",
  },
  {
    title: "Pick-up Utilitaire Robuste",
    location: "Idéal chantiers & entreprises",
    price: "50 000 FCFA / jour",
    image: "/car-3.jpg",
  },
];

export default function Showcases() {
  const immoSwiperRef = useRef<SwiperType | null>(null);
  const carSwiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14">
          {/* Colonne Immobilier */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
                <span className="w-6 h-0.5 bg-amber-500 inline-block" />
                <span>Nos biens immobiliers</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B254E] mt-2">
                Trouvez le bien idéal
              </h2>
              <p className="text-slate-600 mt-1.5 text-sm sm:text-base">
                Maisons, appartements, terrains... à des prix compétitifs.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                onSwiper={(swiper) => {
                  immoSwiperRef.current = swiper;
                }}
                spaceBetween={16}
                slidesPerView={1}
                loop
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="w-full aspect-[16/10]"
              >
                {realEstateSlides.map((slide, idx) => (
                  <SwiperSlide key={idx} className="relative w-full h-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071936]/85 via-[#071936]/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-14 text-white">
                      <span className="text-xs font-semibold text-amber-400">
                        {slide.location}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold leading-snug">
                        {slide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                        {slide.price}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                onClick={() => immoSwiperRef.current?.slidePrev()}
                aria-label="Bien immobilier précédent"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-amber-400 text-[#0B254E] flex items-center justify-center shadow transition"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => immoSwiperRef.current?.slideNext()}
                aria-label="Bien immobilier suivant"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-amber-400 text-[#0B254E] flex items-center justify-center shadow transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div>
              <Link
                href="/immobilier"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#071936] font-bold text-sm py-3 px-6 rounded-full transition shadow-sm"
              >
                <span>Voir tous les biens</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Colonne Automobile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
                <span className="w-6 h-0.5 bg-amber-500 inline-block" />
                <span>Nos véhicules</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B254E] mt-2">
                Roulez en toute sérénité
              </h2>
              <p className="text-slate-600 mt-1.5 text-sm sm:text-base">
                Vente ou location, des véhicules pour tous vos besoins.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                onSwiper={(swiper) => {
                  carSwiperRef.current = swiper;
                }}
                spaceBetween={16}
                slidesPerView={1}
                loop
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="w-full aspect-[16/10]"
              >
                {vehicleSlides.map((slide, idx) => (
                  <SwiperSlide key={idx} className="relative w-full h-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071936]/85 via-[#071936]/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-14 text-white">
                      <span className="text-xs font-semibold text-amber-400">
                        {slide.location}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold leading-snug">
                        {slide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                        {slide.price}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                onClick={() => carSwiperRef.current?.slidePrev()}
                aria-label="Véhicule précédent"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-amber-400 text-[#0B254E] flex items-center justify-center shadow transition"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => carSwiperRef.current?.slideNext()}
                aria-label="Véhicule suivant"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-amber-400 text-[#0B254E] flex items-center justify-center shadow transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div>
              <Link
                href="/automobile"
                className="inline-flex items-center gap-2 bg-[#0B254E] hover:bg-[#071936] text-white font-bold text-sm py-3 px-6 rounded-full transition shadow-sm"
              >
                <span>Voir notre flotte</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}