import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-[#DCEEFF] dark:border-[#203B5B] bg-[#FAFCFF] dark:bg-[#0c1524] text-[#547FA8] dark:text-[#93B2D2] transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Motto */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-display font-bold text-base text-[#203B5B] dark:text-[#FAFCFF]">
              {PORTFOLIO_DATA.profile.fullName}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-xs">{PORTFOLIO_DATA.profile.studyProgram}</span>
          </div>
          <p className="text-xs text-[#547FA8] dark:text-[#93B2D2] italic">
            "{PORTFOLIO_DATA.profile.motto}"
          </p>
        </div>

        {/* Center / Affiliation */}
        <div className="text-xs text-center">
          <p className="flex items-center justify-center gap-1">
            <span>Dibuat dengan dedikasi</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>untuk portofolio mahasiswa UNIKMA</span>
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
            © {new Date().getFullYear()} Eka Yulita. All rights reserved.
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="w-10 h-10 rounded-full bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] flex items-center justify-center text-[#203B5B] dark:text-[#FAFCFF] hover:bg-[#DCEEFF] dark:hover:bg-[#203B5B] transition-colors shadow-xs cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
