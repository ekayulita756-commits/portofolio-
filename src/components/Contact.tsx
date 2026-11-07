import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Sparkles, Copy, Check, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [visitorName, setVisitorName] = useState('');
  const [visitorMessage, setVisitorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWA, setCopiedWA] = useState(false);

  // Email default mailto URL
  const defaultMailto = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${encodeURIComponent(
    PORTFOLIO_DATA.contact.emailSubject
  )}&body=${encodeURIComponent(PORTFOLIO_DATA.contact.emailBody)}`;

  // Custom composed mailto URL
  const customMailto = () => {
    const subject = visitorName
      ? `Hello Eka, Let's Connect! (From: ${visitorName})`
      : PORTFOLIO_DATA.contact.emailSubject;
    const body = visitorMessage || PORTFOLIO_DATA.contact.emailBody;
    return `mailto:${PORTFOLIO_DATA.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  // Custom composed WhatsApp URL
  const customWhatsAppUrl = () => {
    let text = PORTFOLIO_DATA.contact.whatsappMessage;
    if (visitorName || visitorMessage) {
      text = `Halo Eka! Saya ${visitorName || 'pengunjung website'}.\n\n${
        visitorMessage || 'Saya mengunjungi website portofolio kamu dan ingin menghubungi kamu.'
      }`;
    }
    return `https://wa.me/${PORTFOLIO_DATA.contact.whatsappCleanNumber}?text=${encodeURIComponent(
      text
    )}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyWA = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.whatsappNumber);
    setCopiedWA(true);
    setTimeout(() => setCopiedWA(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative bg-[#FAFCFF]/60 dark:bg-[#0c1524]/60">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#547FA8] dark:text-[#A9CCED]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#203B5B] dark:text-[#FAFCFF] font-display">
            Contact Me
          </h2>
          <p className="text-sm text-[#547FA8] dark:text-[#93B2D2] max-w-lg mx-auto">
            Terbuka untuk diskusi akademik, kolaborasi proyek kuliah, atau sekadar berbagi cerita seputar Sistem Informasi.
          </p>
        </div>

        {/* 2 Primary Contact Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Option A: WhatsApp (FITUR WAJIB BERFUNGSI) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#132238]/90 border border-emerald-200/80 dark:border-emerald-900/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyWA}
                  className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                  title="Salin nomor WhatsApp"
                >
                  {copiedWA ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedWA ? 'Tersalin' : 'Salin Nomor'}</span>
                </button>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-[#203B5B] dark:text-[#FAFCFF]">
                  WhatsApp Langsung
                </h3>
                <p className="text-xs text-[#547FA8] dark:text-[#93B2D2] mt-1">
                  Respon cepat untuk pesan langsung, pertanyaan, atau obrolan santai.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0c1524] border border-slate-100 dark:border-slate-800 text-xs text-[#203B5B] dark:text-[#E2EEF9] font-mono">
                {PORTFOLIO_DATA.contact.whatsappNumber}
              </div>

              <div className="text-[11px] text-[#547FA8] dark:text-[#93B2D2]">
                Pesan otomatis telah disiapkan: <br />
                <em className="text-slate-600 dark:text-slate-300">"{PORTFOLIO_DATA.contact.whatsappMessage}"</em>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={PORTFOLIO_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Buka Percakapan WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Option B: Email (FITUR WAJIB BERFUNGSI) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#132238]/90 border border-[#DCEEFF] dark:border-[#203B5B] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#DCEEFF] dark:bg-[#203B5B] border border-[#A9CCED]/40 dark:border-[#547FA8]/40 flex items-center justify-center text-[#547FA8] dark:text-[#A9CCED]">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-xs text-[#547FA8] dark:text-[#A9CCED] hover:underline cursor-pointer"
                  title="Salin alamat email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Tersalin' : 'Salin Email'}</span>
                </button>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-[#203B5B] dark:text-[#FAFCFF]">
                  Email Me
                </h3>
                <p className="text-xs text-[#547FA8] dark:text-[#93B2D2] mt-1">
                  Untuk keperluan akademik formal, surat, atau kolaborasi terstruktur.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0c1524] border border-slate-100 dark:border-slate-800 text-xs text-[#203B5B] dark:text-[#E2EEF9] font-mono">
                {PORTFOLIO_DATA.contact.email}
              </div>

              <div className="text-[11px] text-[#547FA8] dark:text-[#93B2D2]">
                Subjek otomatis: <strong className="text-slate-700 dark:text-slate-200">{PORTFOLIO_DATA.contact.emailSubject}</strong>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={defaultMailto}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#547FA8] hover:bg-[#203B5B] text-white shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Kirim Pesan via Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quick Message Composer (Sends via user's choice: WhatsApp or Mailto) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-[#132238]/70 border border-[#DCEEFF] dark:border-[#203B5B] backdrop-blur-sm">
          <div className="max-w-xl mx-auto space-y-4">
            <div className="text-center space-y-1">
              <h3 className="font-display font-bold text-lg text-[#203B5B] dark:text-[#FAFCFF]">
                Tulis Pesan Cepat
              </h3>
              <p className="text-xs text-[#547FA8] dark:text-[#93B2D2]">
                Ketik nama dan pesan Anda, lalu pilih platform pengiriman yang diinginkan.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-[#203B5B] dark:text-[#E2EEF9] mb-1">
                  Nama Anda
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Sarah / Budi"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#DCEEFF] dark:border-[#203B5B] bg-white dark:bg-[#0c1524] text-[#203B5B] dark:text-[#E2EEF9] focus:outline-none focus:ring-1 focus:ring-[#547FA8]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#203B5B] dark:text-[#E2EEF9] mb-1">
                  Isi Pesan
                </label>
                <textarea
                  rows={3}
                  placeholder="Halo Eka, saya melihat portofolio Anda dan ingin berdiskusi mengenai..."
                  value={visitorMessage}
                  onChange={(e) => setVisitorMessage(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-[#DCEEFF] dark:border-[#203B5B] bg-white dark:bg-[#0c1524] text-[#203B5B] dark:text-[#E2EEF9] focus:outline-none focus:ring-1 focus:ring-[#547FA8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={customWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Kirim ke WhatsApp</span>
                </a>

                <a
                  href={customMailto()}
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#547FA8] hover:bg-[#203B5B] text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim ke Email</span>
                </a>
              </div>
            </div>

            <div className="pt-4 text-center">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-[#547FA8] dark:text-[#93B2D2]">
                <MapPin className="w-3.5 h-3.5 text-[#547FA8]" />
                Universitas Komputama (UNIKMA) · Jawa Tengah, Indonesia
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
