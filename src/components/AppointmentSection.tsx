import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  User, 
  Clock, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const AppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `Hello Iniya Clinic, I would like to request an appointment for ${formData.name || 'Patient'} on ${formData.date || 'upcoming date'} (${formData.timeSlot}). Phone: ${formData.phone || 'Provided'}. Reason: ${formData.message || 'General consultation'}.`
    );
    return `https://wa.me/918825670588?text=${text}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>APPOINTMENTS & ENQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Need to See a <span className="text-blue-600">Doctor?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Get in touch with Iniya Clinic to request an appointment or speak with the clinic directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Appointment Form (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-lg shadow-slate-900/5">
            {submitted ? (
              <div className="text-center py-8 px-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  Appointment Request Received!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
                  Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. The clinic team will review your requested time for{' '}
                  <span className="font-semibold text-slate-800">{formData.date || 'your preferred date'}</span> and get in touch with you shortly.
                </p>

                {/* Instant WhatsApp Sync Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send details on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        date: '',
                        timeSlot: 'Morning (10:00 AM - 1:00 PM)',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm font-bold transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 088256 70588"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Timing
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 bg-slate-50/50"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                        <option value="Flexible / Immediate Consultation">Flexible / Walk-in Consultation</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message / Reason for Visit */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message / Reason for Visit
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your symptoms or consultation requirement (e.g., fever, general checkup, family consultation)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Request Appointment</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-500 font-medium">
                  We respect your privacy. No spam. You will only be contacted regarding your consultation.
                </p>
              </form>
            )}
          </div>

          {/* Right Direct Contact Card (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Call Card */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-7 sm:p-8 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[11px] font-extrabold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full text-blue-100">
                  FASTEST RESPONSE
                </span>
                <h3 className="text-2xl font-extrabold mt-4 mb-2 tracking-tight">
                  Speak Directly with Clinic
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed mb-6 font-normal">
                  Need immediate information on doctor availability or walk-in consultation timings? Call us right away.
                </p>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-3 w-full py-4 bg-white hover:bg-blue-50 text-blue-900 rounded-2xl text-base font-extrabold shadow-lg transition-all"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Call: {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Contact Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                    WhatsApp Enquiry
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Fast text messaging support
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-5 font-normal">
                Prefer chatting over text? Send a message directly to check timings and general inquiries.
              </p>

              <a
                href={`https://wa.me/918825670588?text=${encodeURIComponent(CLINIC_INFO.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-2xl text-sm font-bold transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Clinic Location Reminder */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 flex items-start gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 leading-tight mb-1">
                  Clinic Location
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-2 font-normal">
                  {CLINIC_INFO.address}
                </p>
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
