import React from 'react';
import { GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 relative bg-[#FAFCFF]/50 dark:bg-[#0c1524]/50">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#547FA8] dark:text-[#A9CCED]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#203B5B] dark:text-[#FAFCFF] font-display">
            Education
          </h2>
          <p className="text-sm text-[#547FA8] dark:text-[#93B2D2] max-w-md mx-auto">
            Jejak pendidikan formal dan riwayat studi yang sedang ditempuh.
          </p>
        </div>

        {/* Modern Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#547FA8] before:via-[#A9CCED] before:to-transparent">
          {PORTFOLIO_DATA.educationList.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-6 sm:-left-10 top-1.5 w-5 h-5 rounded-full bg-white dark:bg-[#132238] border-2 border-[#547FA8] dark:border-[#A9CCED] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-[#547FA8] dark:bg-[#A9CCED]' : 'bg-slate-300 dark:bg-slate-600'}`} />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#132238]/90 border border-[#DCEEFF] dark:border-[#203B5B] shadow-xs hover:shadow-md transition-shadow duration-200 space-y-4">
                
                {/* Header & Meta (Zero-Pill Unboxed Text) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#203B5B] dark:text-[#FAFCFF] font-display">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-semibold text-[#547FA8] dark:text-[#A9CCED]">
                      {item.program}
                    </p>
                  </div>

                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#547FA8] dark:text-[#93B2D2] shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Status Indicator Bar */}
                <div className="flex items-center gap-2 text-xs font-medium text-[#203B5B] dark:text-[#DCEEFF]">
                  <GraduationCap className="w-4 h-4 text-[#547FA8] dark:text-[#A9CCED]" />
                  <span>{item.degree}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{item.status}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#547FA8] dark:text-[#B6D2EC] leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-2 border-t border-[#DCEEFF] dark:border-[#203B5B]/50">
                    <span className="block text-xs font-semibold text-[#203B5B] dark:text-[#FAFCFF] mb-2">
                      Fokus Pembelajaran & Aktivitas:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#547FA8] dark:text-[#93B2D2]">
                      {item.highlights.map((high, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#547FA8] dark:text-[#A9CCED] shrink-0" />
                          <span>{high}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
