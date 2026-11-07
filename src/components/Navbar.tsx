import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Sun, Menu, X, MessageCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#FAFCFF]/90 dark:bg-[#0c1524]/90 backdrop-blur-md shadow-xs border-b border-[#DCEEFF] dark:border-[#203B5B]/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group text-lg font-bold tracking-tight text-[#203B5B] dark:text-[#E2EEF9] whitespace-nowrap shrink-0"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#A9CCED] to-[#DCEEFF] dark:from-[#203B5B] dark:to-[#547FA8] flex items-center justify-center text-[#203B5B] dark:text-[#E2EEF9] shadow-xs group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="w-4 h-4 text-[#547FA8] dark:text-[#A9CCED]" />
          </span>
          <span className="font-display font-semibold">Eka Yulita</span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#FAFCFF]/80 dark:bg-[#132238]/80 border border-[#DCEEFF] dark:border-[#203B5B] shadow-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#DCEEFF] dark:bg-[#203B5B] text-[#203B5B] dark:text-white font-semibold shadow-xs'
                    : 'text-[#547FA8] dark:text-[#93B2D2] hover:text-[#203B5B] dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Theme Toggle + WhatsApp CTA + Mobile Menu Button) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-9 h-9 rounded-full bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] flex items-center justify-center text-[#547FA8] dark:text-[#A9CCED] hover:bg-[#DCEEFF]/40 dark:hover:bg-[#203B5B]/60 transition-colors cursor-pointer shadow-xs"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href={PORTFOLIO_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#547FA8] hover:bg-[#203B5B] text-white shadow-xs hover:shadow-md transition-all duration-200 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat WA</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-9 h-9 rounded-full bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] flex items-center justify-center text-[#203B5B] dark:text-[#E2EEF9] hover:bg-[#DCEEFF]/30 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] p-4 bg-[#FAFCFF] dark:bg-[#0c1524] border-b border-[#DCEEFF] dark:border-[#203B5B] shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-md mx-auto flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#DCEEFF] dark:bg-[#203B5B] text-[#203B5B] dark:text-white font-semibold'
                      : 'text-[#547FA8] dark:text-[#93B2D2] hover:bg-[#DCEEFF]/30 dark:hover:bg-[#132238]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-[#DCEEFF] dark:border-[#203B5B] flex items-center justify-between">
              <span className="text-xs text-[#547FA8] dark:text-[#93B2D2]">
                Hubungi Langsung:
              </span>
              <a
                href={PORTFOLIO_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-[#547FA8] text-white"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
