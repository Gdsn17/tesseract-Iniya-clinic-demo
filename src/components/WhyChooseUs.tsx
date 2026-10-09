import React from 'react';
import { Heart, Coins, Sparkles, MapPin, Check } from 'lucide-react';
import { TRUST_POINTS } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const iconMap = [Heart, Coins, Sparkles, MapPin];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            <Check className="w-3.5 h-3.5" />
            <span>WHY PATIENTS CHOOSE INIYA CLINIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Trusted Care, <span className="text-blue-600">Every Step of the Way</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We believe everyday healthcare should be straightforward, compassionate, and dependable.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point, index) => {
            const Icon = iconMap[index] || Heart;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-600">
                  <span>Verified Standard</span>
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
