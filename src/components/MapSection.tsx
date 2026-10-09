import React, { useState } from 'react';
import { MapPin, Phone, Navigation, Copy, Check, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const MapSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FIND US IN KARUR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Visit <span className="text-blue-600">Iniya Clinic</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Conveniently situated at Water Tank Stop in Vengamedu, Karur with easy road connectivity for patients across the city.
          </p>
        </div>

        {/* Map & Location Card Container */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Embedded Google Map (7 Cols on desktop, full on mobile) */}
            <div className="lg:col-span-7 h-[360px] sm:h-[450px] lg:h-[550px] w-full relative bg-slate-100">
              <iframe
                title="Iniya Clinic Location Map"
                src="https://maps.google.com/maps?q=Water+Tank+Stop,+460,+Vengamedu,+Karur,+Tamil+Nadu+639006&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-md border border-slate-200 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Water Tank Stop, Vengamedu</span>
              </div>
            </div>

            {/* Location Details Card (5 Cols on desktop) */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between bg-white">
              <div>
                
                {/* Header Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold tracking-wide mb-5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>CLINIC ADDRESS</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                  Iniya Clinic
                </h3>

                {/* Full Address Block */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                  <p className="text-sm text-slate-700 font-medium leading-relaxed mb-3">
                    {CLINIC_INFO.address}
                  </p>
                  
                  <button
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Address copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Landmark & Accessibility Note */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-medium">
                    <Navigation className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Landmark: Located near the Water Tank Stop in Vengamedu</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-medium">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Call ahead to confirm doctor consultation timing</span>
                  </div>
                </div>

                {/* Direct Phone Number */}
                <div className="pt-4 border-t border-slate-100 mb-8">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                    Direct Phone Line
                  </div>
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="text-xl sm:text-2xl font-black text-blue-600 hover:text-blue-700 flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>{CLINIC_INFO.phone}</span>
                  </a>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-bold shadow-md shadow-blue-600/25 hover:shadow-lg transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 py-4 px-6 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl text-sm font-bold transition-all"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call Now</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
