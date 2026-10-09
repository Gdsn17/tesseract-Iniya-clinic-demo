import React from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  Heart, 
  Star 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const trustPoints = [
    { title: 'Patient-focused approach', desc: 'Attentive consultations where your concerns are heard' },
    { title: 'Clean environment', desc: 'Neat, hygienic, and calm clinic spaces for your comfort' },
    { title: 'Affordable care', desc: 'Reasonable consultation fees without unexpected expenses' },
    { title: 'Convenient local access', desc: 'Situated right at Water Tank Stop in Vengamedu, Karur' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xl shadow-slate-900/5">
              <img
                src="/images/about-consultation.jpg"
                alt="Patient consultation at Iniya Clinic, Karur"
                className="w-full h-[360px] sm:h-[460px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xl shadow-slate-900/10 max-w-[280px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 leading-tight">
                    Patient-First Care
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold">
                    Iniya Clinic • Vengamedu
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Compassionate consultation and friendly guidance for every visit.
              </p>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT INIYA CLINIC</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-6">
              Local Care Built <span className="text-blue-600">Around Patients</span>
            </h2>

            {/* Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Iniya Clinic is focused on providing accessible, patient-friendly healthcare to the local community in Karur. Our goal is to make consultation simple, comfortable and convenient for every patient who walks through our doors.
            </p>

            {/* 4 Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {trustPoints.map((item, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight Metric Strip (Strictly verified only: 5.0 Rating & Local Location) */}
            <div className="w-full grid grid-cols-2 gap-3 mb-8">
              <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center font-bold">
                  <Star className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-900 leading-tight">
                    5.0 ★ Rating
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Google Reviews in Karur
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-900 leading-tight">
                    Vengamedu
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Water Tank Stop, Karur
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold shadow-md shadow-blue-600/25 transition-all duration-200"
              >
                <span>Request Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full text-sm font-bold transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Visit Clinic Location</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
