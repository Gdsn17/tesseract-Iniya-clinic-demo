import React from 'react';
import { Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 p-8 sm:p-14 lg:p-16 text-white shadow-2xl shadow-blue-900/20 overflow-hidden">
          
          {/* Subtle Ambient Background Gradients */}
          <div 
            aria-hidden="true" 
            className="absolute -top-32 -right-32 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" 
          />
          <div 
            aria-hidden="true" 
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-950/40 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-blue-100 text-xs sm:text-sm font-bold tracking-wider uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DEPENDABLE HEALTHCARE IN KARUR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
              Quality Care Is Just a Call Away
            </h2>

            <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              Have a health concern or need a consultation? Contact Iniya Clinic today.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-blue-50 text-blue-900 rounded-full text-base font-extrabold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Call Now: {CLINIC_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-900/60 hover:bg-blue-900 text-white border border-white/25 rounded-full text-base font-bold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
