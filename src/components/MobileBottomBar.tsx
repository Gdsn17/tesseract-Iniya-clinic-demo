import React from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 px-3 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'calc(0.65rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          id="mobile-bar-call"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 bg-slate-100 active:bg-slate-200 text-slate-800 rounded-2xl text-xs font-bold transition-colors"
          title="Call Iniya Clinic"
        >
          <Phone className="w-4 h-4 text-blue-600" />
          <span>Call</span>
        </a>

        {/* Appointment Button (Hero CTA) */}
        <button
          onClick={onOpenBooking}
          id="mobile-bar-book"
          className="flex-[1.5] flex items-center justify-center gap-1.5 py-3 px-3 bg-blue-600 active:bg-blue-700 text-white rounded-2xl text-xs font-extrabold shadow-md shadow-blue-600/30 transition-transform active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Visit</span>
        </button>

        {/* Directions Button */}
        <a
          href={CLINIC_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-directions"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 bg-slate-100 active:bg-slate-200 text-slate-800 rounded-2xl text-xs font-bold transition-colors"
          title="Google Maps Directions"
        >
          <Navigation className="w-4 h-4 text-rose-500" />
          <span>Directions</span>
        </a>

      </div>
    </div>
  );
};
