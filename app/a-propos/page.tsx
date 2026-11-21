import React from "react";
import {
  ArrowRight,
  Award,
  Handshake,
  Lightbulb,
  Users,
  Rocket,
  Eye,
  Send,
  Home,
  ChevronRight,
  
  MessageCircle,
} from "lucide-react";

const VALEURS = [
  {
    title: "Excellence",
    description: "Nous visons la qualité dans tout ce que nous faisons.",
    Icon: Award,
  },
  {
    title: "Confiance",
    description: "Nous bâtissons des relations durables avec nos clients.",
    Icon: Handshake,
  },
  {
    title: "Innovation",
    description: "Nous innovons pour mieux vous servir.",
    Icon: Lightbulb,
  },
  {
    title: "Engagement",
    description: "Nous nous engageons à vous accompagner à chaque étape.",
    Icon: Users,
  },
];

const LIENS_UTILES = ["Accueil", "À propos", "Nos Services", "Contact"];
const DOMAINES = ["Immobilier", "Automobile", "Recrutement", "Services Divers"];

export default function AProposBksPage() {
  return (
    <main className="min-h-screen bg-white text-[#102542] antialiased selection:bg-[#F59E0B] selection:text-white">
      {/* 1. HERO SECTION BICOLORE AVEC DÉCOUPE DIAGONALE */}
      <section className="relative overflow-hidden bg-[#0A2540] text-white">
        {/* Image de fond architecturale subtile */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* Bloc droit bleu profond avec séparation diagonale nette sur desktop */}
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-[56%] bg-[#071B30]/95 z-0"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Colonne gauche : Visuel architectural encadré */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 aspect-[16/10] bg-[#0F2F52]">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                alt="Architecture moderne BKS Entreprise"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B30]/55 via-transparent to-transparent" />
            </div>
          </div>

          {/* Colonne droite : Titre, sous-titre et fil d'ariane */}
          <div className="lg:col-span-6 lg:pl-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">
              À propos de{" "}
              <span className="block text-[#F59E0B] mt-1">BKS ENTREPRISE</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Une entreprise dynamique et innovante, au service de vos projets et
              de votre réussite.
            </p>

            <div className="mt-7 flex justify-center lg:justify-end">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#13385E]/90 border border-white/15 px-4 py-1.5 text-xs font-medium text-white shadow-md backdrop-blur-sm">
                <Home className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Accueil</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <span className="text-[#F59E0B] font-semibold">À propos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUI SOMMES-NOUS ? */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Texte de présentation */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="h-[3px] w-7 rounded-full bg-[#F59E0B]" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-[#F59E0B]">
                Qui sommes-nous ?
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0A2540]">
              BKS ENTREPRISE
            </h2>

            <div className="mt-5 space-y-4 text-sm sm:text-base leading-7 text-slate-600">
              <p>
                <strong className="font-bold text-[#0A2540]">
                  BKS ENTREPRISE
                </strong>{" "}
                est une structure polyvalente intervenant dans plusieurs domaines
                d&apos;activités : immobilier, vente et location de véhicules,
                placement de personnel, offres d&apos;emploi, création graphique
                et communication digitale, ainsi que les services de bureautique.
              </p>
              <p>
                Notre mission est d&apos;offrir des solutions complètes, fiables
                et innovantes pour répondre aux besoins variés de notre
                clientèle en Côte d&apos;Ivoire et au-delà.
              </p>
            </div>

            <div className="mt-7">
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] active:scale-[0.99] text-white font-bold text-xs sm:text-sm px-6 py-3.5 shadow-md shadow-amber-500/20 transition-all"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Photo immeuble + Badge flottant */}
          <div className="lg:col-span-5 relative pb-6 sm:pb-8">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Immeuble BKS Entreprise"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge "Votre partenaire de confiance" */}
            <div className="sm:absolute sm:bottom-0 sm:right-4 mt-4 sm:mt-0 inline-flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 px-4 py-3 shadow-lg">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-[#F59E0B] border border-amber-200/70">
                <Handshake className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-medium text-slate-500">
                  BKS Entreprise
                </p>
                <p className="text-xs sm:text-sm font-extrabold text-[#0A2540]">
                  Votre partenaire de confiance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOS VALEURS */}
      <section className="relative overflow-hidden bg-[#0A2540] text-white py-16 sm:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/90 via-[#081E36]/95 to-[#061628]" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="h-[3px] w-7 rounded-full bg-[#F59E0B]" />
              <span className="text-xs sm:text-sm font-bold text-[#F59E0B]">
                Nos valeurs
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Les valeurs qui nous animent
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {VALEURS.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center py-6 sm:py-2 px-5 group"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#F59E0B]/80 bg-white/5 text-[#F59E0B] shadow-inner transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-1.5">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[220px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NOTRE MISSION & VISION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[3px] w-7 rounded-full bg-[#F59E0B]" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                Notre mission &amp; vision
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Deux cartes côte à côte */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Carte Mission */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center justify-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-[#F59E0B] border border-amber-100">
                  <Rocket className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-extrabold text-[#0A2540] mb-2.5">
                  Notre mission
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Offrir des services de qualité, faciliter la réalisation de vos
                  projets et contribuer à votre succès.
                </p>
              </div>

              {/* Carte Vision */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center justify-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-[#0A2540] border border-slate-200">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-extrabold text-[#0A2540] mb-2.5">
                  Notre vision
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Devenir le leader des solutions multiservices en Côte
                  d&apos;Ivoire et en Afrique de l&apos;Ouest.
                </p>
              </div>
            </div>

            {/* Portrait professionnel à droite */}
            <div className="lg:col-span-4">
              <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-200 to-slate-300 shadow-md border border-slate-200/80">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                  alt="Conseiller BKS Entreprise en costume bleu"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BANNIÈRE CALL TO ACTION */}
      <section className="relative overflow-hidden bg-[#0A2540] text-white py-9 sm:py-11">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#081E36]/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left flex-col sm:flex-row">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B] text-white shadow-md">
              <Send className="w-5 h-5 -rotate-12" />
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight">
                Ensemble, construisons vos projets
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Faites confiance à BKS ENTREPRISE, votre partenaire de confiance.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-xs sm:text-sm px-6 py-3 shadow-lg transition-all shrink-0"
          >
            <span>Nous contacter</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

     
    </main>
  );
}