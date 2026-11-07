import React, { useState } from 'react';
import { User, BookOpen, Layers, Heart, Globe, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#547FA8] dark:text-[#A9CCED]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#203B5B] dark:text-[#FAFCFF] font-display">
            About Me
          </h2>
          <p className="text-sm text-[#547FA8] dark:text-[#93B2D2] max-w-lg mx-auto">
            Perkenalan diri, latar belakang akademik, serta antusiasme belajar di dunia Sistem Informasi.
          </p>
        </div>

        {/* Main About Card */}
        <div className="rounded-3xl bg-white/80 dark:bg-[#132238]/80 border border-[#DCEEFF] dark:border-[#203B5B] p-6 sm:p-10 shadow-sm backdrop-blur-sm space-y-8">
          
          {/* Top Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8 border-b border-[#DCEEFF] dark:border-[#203B5B]">
            <div className="p-4 rounded-2xl bg-[#DCEEFF]/40 dark:bg-[#203B5B]/30 border border-[#A9CCED]/30 dark:border-[#547FA8]/20">
              <span className="block text-xs font-medium text-[#547FA8] dark:text-[#93B2D2] mb-1">
                Nama Lengkap
              </span>
              <span className="font-semibold text-base text-[#203B5B] dark:text-[#FAFCFF]">
                {PORTFOLIO_DATA.profile.fullName}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#DCEEFF]/40 dark:bg-[#203B5B]/30 border border-[#A9CCED]/30 dark:border-[#547FA8]/20">
              <span className="block text-xs font-medium text-[#547FA8] dark:text-[#93B2D2] mb-1">
                Universitas
              </span>
              <span className="font-semibold text-base text-[#203B5B] dark:text-[#FAFCFF]">
                {PORTFOLIO_DATA.profile.university}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#DCEEFF]/40 dark:bg-[#203B5B]/30 border border-[#A9CCED]/30 dark:border-[#547FA8]/20">
              <span className="block text-xs font-medium text-[#547FA8] dark:text-[#93B2D2] mb-1">
                Program Studi
              </span>
              <span className="font-semibold text-base text-[#203B5B] dark:text-[#FAFCFF]">
                {PORTFOLIO_DATA.profile.studyProgram}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#DCEEFF]/40 dark:bg-[#203B5B]/30 border border-[#A9CCED]/30 dark:border-[#547FA8]/20">
              <span className="block text-xs font-medium text-[#547FA8] dark:text-[#93B2D2] mb-1">
                Status Akademik
              </span>
              <span className="font-semibold text-base text-[#203B5B] dark:text-[#FAFCFF]">
                {PORTFOLIO_DATA.profile.semester}
              </span>
            </div>
          </div>

          {/* Bio Story with Language Switcher */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-semibold text-xl text-[#203B5B] dark:text-[#FAFCFF] flex items-center gap-2">
                <User className="w-5 h-5 text-[#547FA8] dark:text-[#A9CCED]" />
                <span>Personal Overview</span>
              </h3>

              {/* Language Switch Tabs */}
              <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-[#0c1524] border border-[#DCEEFF] dark:border-[#203B5B]">
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    language === 'id'
                      ? 'bg-white dark:bg-[#203B5B] text-[#203B5B] dark:text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Bahasa Indonesia
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    language === 'en'
                      ? 'bg-white dark:bg-[#203B5B] text-[#203B5B] dark:text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Prose Content */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FAFCFF] dark:bg-[#0c1524] border border-[#DCEEFF] dark:border-[#203B5B]">
              {language === 'en' ? (
                <div className="space-y-3 text-sm sm:text-base text-[#547FA8] dark:text-[#B6D2EC] leading-relaxed">
                  <p>
                    Hello! My name is <strong>Eka Yulita</strong>. I graduated from <strong>MA Muhammadiyah Majenang</strong> with a concentration in Natural Sciences (MIPA), where I cultivated analytical thinking and an early curiosity for digital technology. Currently, I am a first-semester undergraduate student majoring in <strong>Information Systems</strong> at <strong>Universitas Komputama (UNIKMA)</strong>.
                  </p>
                  <p>
                    I have always been intrigued by how computer technology can simplify everyday tasks and make data more meaningful. Combining my science foundation with information systems, I am actively building my understanding in fundamental programming logic, spreadsheet computation, and structured documentation.
                  </p>
                  <p>
                    Alongside tech fundamentals, I enjoy digital creativity—especially designing clean presentation materials and visual graphics with tools like Canva. My goal is to continually learn, adapt, and build digital solutions that are both practical and visually appealing.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 text-sm sm:text-base text-[#547FA8] dark:text-[#B6D2EC] leading-relaxed">
                  <p>
                    Halo! Perkenalkan nama saya <strong>Eka Yulita</strong>. Saya merupakan alumni dari <strong>MA Muhammadiyah Majenang</strong> Jurusan MIPA (Matematika & Ilmu Pengetahuan Alam) yang memiliki minat kuat pada dunia sains dan komputasi. Saat ini, saya menempuh studi S1 pada Program Studi <strong>Sistem Informasi</strong> di <strong>Universitas Komputama (UNIKMA)</strong> semester 1.
                  </p>
                  <p>
                    Ketertarikan saya terhadap dunia teknologi berakar dari rasa ingin tahu bagaimana sistem komputer dapat menyederhanakan proses kerja dan mengorganisasi data secara efisien. Dengan latar belakang sains analitis dari MA Muhammadiyah Majenang, saya memperdalam logika komputasi dasar, pemanfaatan aplikasi perkantoran, dan manajemen data terstruktur.
                  </p>
                  <p>
                    Selain fondasi teknologi, saya juga menyukai eksplorasi desain grafis digital dengan Canva, menciptakan presentasi dan media visual yang rapi, berestetika lembut, dan mudah dipahami.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 3 Core Values / Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#DCEEFF] dark:bg-[#203B5B] flex items-center justify-center text-[#547FA8] dark:text-[#A9CCED]">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-sm text-[#203B5B] dark:text-[#FAFCFF]">Continuous Learning</h4>
              <p className="text-xs text-[#547FA8] dark:text-[#93B2D2] leading-relaxed">
                Menjaga rasa ingin tahu yang tinggi dan disiplin belajar materi baru di kampus setiap hari.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#DCEEFF] dark:bg-[#203B5B] flex items-center justify-center text-[#547FA8] dark:text-[#A9CCED]">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-sm text-[#203B5B] dark:text-[#FAFCFF]">Structured Thinking</h4>
              <p className="text-xs text-[#547FA8] dark:text-[#93B2D2] leading-relaxed">
                Menganalisis alur data dan menyusun dokumen serta laporan kerja secara rapi dan akurat.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#DCEEFF] dark:bg-[#203B5B] flex items-center justify-center text-[#547FA8] dark:text-[#A9CCED]">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-sm text-[#203B5B] dark:text-[#FAFCFF]">Aesthetic Touch</h4>
              <p className="text-xs text-[#547FA8] dark:text-[#93B2D2] leading-relaxed">
                Sentuhan visual yang hangat, modern, dan rapi pada setiap materi tugas dan presentasi.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
