"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aminata Diabaté",
    quote:
      "« BKS ENTREPRISE m’a accompagné dans la location de mon appartement. Service impeccable ! »",
    avatar: "/avatar-1.jpg",
    rating: 5,
  },
  {
    name: "Yao Kouamé",
    quote:
      "« Une équipe professionnelle et très réactive. Je recommande vivement. »",
    avatar: "/avatar-2.jpg",
    rating: 5,
  },
  {
    name: "Kouadio Mathieu",
    quote:
      "« Grâce à BKS, j’ai trouvé un emploi rapidement. Merci ! »",
    avatar: "/avatar-3.jpg",
    rating: 5,
  },
  {
    name: "Aïcha Koné",
    quote:
      "« Location de véhicule simple, rapide et fiable pour nos déplacements professionnels. »",
    avatar: "/avatar-1.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
            <span className="w-6 h-0.5 bg-amber-500 inline-block" />
            <span>Témoignages clients</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B254E] mt-2">
            Ils nous font confiance
          </h2>
        </motion.div>

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
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <div className="h-full bg-slate-50 hover:bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-amber-400 mb-4 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-slate-600 italic text-sm leading-relaxed flex-1">
                  {item.quote}
                </p>
                <h3 className="font-bold text-[#0B254E] text-sm mt-4">
                  {item.name}
                </h3>
                <div
                  className="flex items-center justify-center gap-1 text-amber-400 mt-1.5"
                  aria-label={`${item.rating} étoiles sur 5`}
                >
                  {Array.from({ length: item.rating }).map((_, starIdx) => (
                    <Star key={starIdx} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}