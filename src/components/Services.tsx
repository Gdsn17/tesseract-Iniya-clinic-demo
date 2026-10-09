import React from 'react';
import { 
  Stethoscope, 
  Users, 
  Activity, 
  ShieldCheck, 
  HeartHandshake, 
  FileCheck2, 
  ArrowRight,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '../data/clinicData';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const iconMap: Record<string, React.ElementType> = {
    Stethoscope,
    Users,
    Activity,
    ShieldCheck,
    HeartHandshake,
    FileCheck2,
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MEDICAL SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Healthcare for <span className="text-blue-600">Everyday Needs</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Iniya Clinic provides accessible, patient-friendly general care for individuals and families in Karur.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Stethoscope;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-7 sm:p-8 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2.5 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors self-start pt-2 border-t border-slate-100 w-full"
                >
                  <span>Enquire for Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all duration-200"
          >
            <span>Book Consultation at Iniya Clinic</span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
