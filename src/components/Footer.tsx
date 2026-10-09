import React from 'react';
import { Phone, MapPin, Navigation, Plus, ArrowUpRight, Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-28 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Plus className="w-6 h-6 stroke-[3]" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Iniya <span className="text-blue-400">Clinic</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm mb-6">
              Trusted local healthcare in Karur. Dedicated to patient-friendly, affordable consultation for individuals and families in Vengamedu.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span>5.0 ★ Google Rating ({CLINIC_INFO.reviewCount} Reviews)</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Iniya Clinic
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Healthcare Services
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-blue-400 transition-colors">
                  Patient Reviews (Google 5.0)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Appointment & Contact
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-blue-400 transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Contact & Address
            </h4>
            <div className="space-y-3.5 text-sm text-slate-400 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span className="leading-relaxed">{CLINIC_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="text-white font-bold hover:text-blue-400 transition-colors"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-800">
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 py-1"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-400 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Iniya Clinic, Karur. All rights reserved.</p>
          <p className="text-slate-500">
            For medical emergencies, please visit the nearest hospital emergency department.
          </p>
        </div>

      </div>
    </footer>
  );
};
