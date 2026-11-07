import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageCircle, Mail, Sparkles, GraduationCap, Laptop } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const taglines = [
    PORTFOLIO_DATA.profile.primaryTagline,
    PORTFOLIO_DATA.profile.motto,
    "Sistem Informasi · Universitas Komputama"
  ];

  useEffect(() => {
    const currentFullText = taglines[taglineIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Soft Blue Atmospheric Blobs */}
      <div className="absolute top-12 left-1/4 w-[32rem] h-[32rem] bg-[#DCEEFF]/70 dark:bg-[#1b304d]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-6 right-1/4 w-96 h-96 bg-[#A9CCED]/40 dark:bg-[#203B5B]/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        {/* On Desktop AND Tablet: Photo sits beside the name & introduction (md:flex-row / md:grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-10 items-center">
          
          {/* Introduction & Details (Left side on tablet and desktop) */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            
            {/* Sapaan Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCEEFF]/80 dark:bg-[#203B5B]/70 border border-[#A9CCED]/60 dark:border-[#547FA8]/50 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#547FA8] dark:text-[#A9CCED] animate-gentle-pulse" />
              <span className="text-xs sm:text-sm font-medium text-[#203B5B] dark:text-[#DCEEFF]">
                {PORTFOLIO_DATA.profile.greeting}
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#203B5B] dark:text-[#FAFCFF] font-display text-balance">
                {PORTFOLIO_DATA.profile.fullName}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#547FA8] dark:text-[#A9CCED]">
                {PORTFOLIO_DATA.profile.role}
              </p>
            </div>

            {/* Typing Tagline Box */}
            <div className="min-h-[2.5rem] flex items-center justify-center md:justify-start px-3 py-1.5 rounded-2xl bg-white/70 dark:bg-[#132238]/70 border border-[#DCEEFF] dark:border-[#203B5B] shadow-xs">
              <p className="text-sm sm:text-base text-[#203B5B] dark:text-[#E2EEF9] font-medium font-mono">
                <span>"{displayText}"</span>
                <span className="inline-block w-1.5 h-4 ml-1 bg-[#547FA8] dark:bg-[#A9CCED] animate-pulse" />
              </p>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-sm sm:text-base text-[#547FA8] dark:text-[#B6D2EC] max-w-xl leading-relaxed text-balance">
              Selamat datang di portofolio digital saya. Sebagai mahasiswa Sistem Informasi di Universitas Komputama (UNIKMA) dan alumni MA Muhammadiyah Majenang, saya memadukan logika sains, ketelitian data, dan desain digital yang estetis dan modern.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 rounded-full text-sm font-semibold bg-[#547FA8] hover:bg-[#203B5B] text-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-2 group whitespace-nowrap shrink-0"
              >
                <span>Explore My Portfolio</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="px-5 py-3 rounded-full text-sm font-medium bg-white dark:bg-[#132238] border border-[#A9CCED] dark:border-[#547FA8] text-[#203B5B] dark:text-[#E2EEF9] hover:bg-[#DCEEFF]/40 dark:hover:bg-[#203B5B]/50 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Mail className="w-4 h-4 text-[#547FA8] dark:text-[#A9CCED]" />
                <span>Contact Me</span>
              </button>

              <a
                href={PORTFOLIO_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full text-sm font-medium bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="flex items-center gap-4 pt-2 text-xs text-[#547FA8] dark:text-[#93B2D2]">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                Semester 1 UNIKMA
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Laptop className="w-4 h-4" />
                Information Systems
              </span>
            </div>
          </div>

          {/* Right side on Tablet & Desktop: Patented Photo with Curvy Non-Box Organic Frame & Abstract Backdrop */}
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-92 aspect-square flex items-center justify-center">
              
              {/* Layer 1: Abstract Fluid SVG Waves & Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full text-[#A9CCED]/40 dark:text-[#547FA8]/30 animate-gentle-pulse"
                  fill="currentColor"
                >
                  <path
                    d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,87.6,-1.4C85.2,13.5,77.8,27,69.3,39.3C60.8,51.6,51.2,62.7,39.2,70.5C27.2,78.3,13.6,82.8,-0.9,84.4C-15.4,86,-30.8,84.7,-43.8,77.6C-56.8,70.5,-67.4,57.6,-74.6,43.3C-81.8,29,-85.6,14.5,-85.1,0.3C-84.6,-13.9,-79.8,-27.8,-71.7,-39.7C-63.6,-51.6,-52.2,-61.5,-39.5,-69.3C-26.8,-77.1,-13.4,-82.8,1.2,-84.9C15.8,-87,30.6,-83.6,44.7,-76.4Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              {/* Layer 2: Abstract Concentric Contour Arcs */}
              <div className="absolute -inset-4 rounded-[45%_55%_63%_37%/48%_42%_58%_52%] border-2 border-dashed border-[#A9CCED]/60 dark:border-[#547FA8]/40 animate-soft-float pointer-events-none" />
              <div className="absolute -inset-8 rounded-[55%_45%_40%_60%/42%_58%_45%_55%] border border-[#DCEEFF]/80 dark:border-[#203B5B]/50 animate-soft-float-delayed pointer-events-none" />

              {/* Layer 3: Organic Non-Box Frame (Sculpted Pebble Silhouette) with Eka's Permanent Photo */}
              <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 rounded-[42%_58%_70%_30%/45%_45%_55%_55%] overflow-hidden p-2 bg-gradient-to-tr from-[#DCEEFF] via-white to-[#A9CCED] dark:from-[#203B5B] dark:via-[#132238] dark:to-[#547FA8] shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <div className="w-full h-full rounded-[40%_60%_68%_32%/43%_43%_57%_57%] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                  <img
                    src={PORTFOLIO_DATA.profile.defaultAvatar}
                    alt="Eka Yulita - Mahasiswa Sistem Informasi UNIKMA"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Layer 4: Abstract Floating Micro Ornaments */}
              <div className="absolute -top-2 right-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#132238]/90 backdrop-blur-md border border-[#DCEEFF] dark:border-[#203B5B] shadow-sm flex items-center gap-1.5 animate-soft-float">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-semibold text-[#203B5B] dark:text-[#E2EEF9]">Eka Yulita</span>
              </div>

              <div className="absolute -bottom-3 left-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#132238]/90 backdrop-blur-md border border-[#DCEEFF] dark:border-[#203B5B] shadow-sm flex items-center gap-1.5 animate-soft-float-delayed">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-medium text-[#203B5B] dark:text-[#E2EEF9]">Sistem Informasi</span>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Row Below Hero: Core Pillars Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#132238]/70 border border-[#DCEEFF] dark:border-[#203B5B] shadow-xs text-center">
            <span className="block text-xl font-bold text-[#203B5B] dark:text-white font-display">UNIKMA</span>
            <span className="text-xs text-[#547FA8] dark:text-[#93B2D2]">Universitas Komputama</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#132238]/70 border border-[#DCEEFF] dark:border-[#203B5B] shadow-xs text-center">
            <span className="block text-xl font-bold text-[#203B5B] dark:text-white font-display">Semester 1</span>
            <span className="text-xs text-[#547FA8] dark:text-[#93B2D2]">Jenjang S1 Sistem Informasi</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#132238]/70 border border-[#DCEEFF] dark:border-[#203B5B] shadow-xs text-center">
            <span className="block text-xl font-bold text-[#203B5B] dark:text-white font-display">Data & Office</span>
            <span className="text-xs text-[#547FA8] dark:text-[#93B2D2]">Word, Excel, Google Sheets</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#132238]/70 border border-[#DCEEFF] dark:border-[#203B5B] shadow-xs text-center">
            <span className="block text-xl font-bold text-[#203B5B] dark:text-white font-display">Creativity</span>
            <span className="text-xs text-[#547FA8] dark:text-[#93B2D2]">Canva & Modern Visuals</span>
          </div>
        </div>

      </div>
    </section>
  );
};
