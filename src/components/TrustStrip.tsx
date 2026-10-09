import React from 'react';
import { Shield, Coins, Sparkles, MapPin } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: Shield,
      title: 'Trusted Local Care',
      desc: 'Dedicated to individuals and families across Karur',
      color: 'text-blue-600 bg-blue-50 border-blue-200/60',
    },
    {
      icon: Coins,
      title: 'Affordable Consultation',
      desc: 'Transparent, reasonable fees for everyday medical visits',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200/60',
    },
    {
      icon: Sparkles,
      title: 'Clean & Comfortable Clinic',
      desc: 'Hygienic, neat, and patient-first clinic environment',
      color: 'text-purple-600 bg-purple-50 border-purple-200/60',
    },
    {
      icon: MapPin,
      title: 'Convenient Location in Karur',
      desc: 'At Water Tank Stop, 460, Vengamedu, Karur',
      color: 'text-rose-600 bg-rose-50 border-rose-200/60',
    },
  ];

  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start gap-4 ${
                    index !== 0 ? 'pt-5 sm:pt-0 sm:pl-6 lg:pl-8' : ''
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0 ${item.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
