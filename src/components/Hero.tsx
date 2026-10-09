import React from 'react';
import { Phone, ArrowUpRight, MapPin, Star, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative pt-2 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      {/* Outer Rounded Container inspired by MedDocX design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] bg-gradient-to-b from-blue-50/70 via-white to-slate-50/80 border border-blue-100/80 shadow-xl shadow-blue-900/5 p-6 sm:p-10 lg:p-14 overflow-hidden">
          
          {/* Subtle Background Watermark Typography */}
          <div 
            aria-hidden="true" 
            className="absolute top-2 left-1/2 -translate-x-1/2 select-none pointer-events-none font-black text-[90px] sm:text-[150px] lg:text-[210px] tracking-widest text-slate-200/40 uppercase whitespace-nowrap z-0 font-sans"
          >
            INIYA
          </div>

          {/* Ambient Glow Orbs */}
          <div 
            aria-hidden="true" 
            className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" 
          />
          <div 
            aria-hidden="true" 
            className="absolute top-1/2 -right-24 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Category / Location Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>GENERAL CLINIC • VENGAMEDU, KARUR</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                Trusted Care for{' '}
                <span className="text-blue-600 relative inline-block">
                  You & Your Family
                  <svg 
                    className="absolute -bottom-2 left-0 w-full h-2.5 text-blue-300/60 -z-10" 
                    viewBox="0 0 250 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 9C60 3 190 2 247 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
                {CLINIC_INFO.subheading}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8">
                <button
                  onClick={onOpenBooking}
                  id="hero-book-cta"
                  className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base font-bold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
                >
                  <span>Book Appointment</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  id="hero-call-cta"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-blue-300 rounded-full text-base font-bold shadow-sm hover:shadow transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>

                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 py-1 transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  <span className="underline decoration-slate-300 group-hover:decoration-blue-600 underline-offset-4">
                    Get Directions (Water Tank Stop)
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </div>

              {/* Trust Badges Strip (Hero Level) */}
              <div className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* 5.0 Star Google Rating */}
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl px-3.5 py-2.5 shadow-xs">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-slate-900 leading-none">
                      5.0 ★ Google Rating
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">4 Verified Reviews</span>
                  </div>
                </div>

                {/* Affordable Care */}
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl px-3.5 py-2.5 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-slate-900 leading-none">
                      Affordable Care
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Low Consultation Fee</span>
                  </div>
                </div>

                {/* Patient-Friendly Clinic */}
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl px-3.5 py-2.5 shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-slate-900 leading-none">
                      Patient-Friendly Clinic
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Care for Everyday Needs</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Visual Column (Inspired by MedDocX hero composition) */}
            <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
              
              {/* Outer Decorative Glow Container */}
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-tr from-blue-100/80 via-slate-50 to-blue-50 p-2 sm:p-2.5 border border-white shadow-2xl shadow-blue-900/10">
                  <img
                    src="/images/hero-doctor.jpg"
                    alt="Healthcare Consultation at Iniya Clinic, Karur"
                    className="w-full h-[400px] sm:h-[480px] object-cover object-top rounded-[1.6rem] shadow-inner"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none rounded-[1.6rem]" />
                </div>

                {/* Floating Badge 1: Top Right - 5.0 Google Rating Badge */}
                <div className="absolute -top-3 -right-2 sm:-right-4 animate-float bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-xl shadow-slate-900/10 flex items-center gap-3 max-w-[200px]">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-500 shrink-0">
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-extrabold text-slate-900 leading-tight">
                      5.0 ★ Google
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-600">
                      100% Positive Reviews
                    </span>
                  </div>
                </div>

                {/* Floating Badge 2: Bottom Left - Affordable Local Care */}
                <div className="absolute -bottom-4 -left-2 sm:-left-4 animate-float-delayed bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-xl shadow-slate-900/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-extrabold text-slate-900 leading-tight">
                      Affordable Healthcare
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold">
                      In Vengamedu, Karur
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
