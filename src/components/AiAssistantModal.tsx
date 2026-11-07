import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface Message {
  role: 'assistant' | 'user';
  text: string;
}

export const AiAssistantModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: `Halo! Saya asisten pintar portofolio Eka Yulita. Ada yang ingin kamu tanyakan mengenai studi Sistem Informasi di UNIKMA, kemampuan, atau proyek Eka?`
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || input.trim();
    if (!textToSend || loading) return;

    const userMsg: Message = { role: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      });

      if (!res.ok) {
        throw new Error('Server response not ok');
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: data.reply || 'Terima kasih atas pertanyaannya!' }
      ]);
    } catch {
      // Smart offline fallback for static GitHub Pages or serverless preview
      let fallback = `Eka Yulita adalah mahasiswa semester 1 Program Studi Sistem Informasi di Universitas Komputama (UNIKMA). Kamu bisa langsung terhubung dengannya via WhatsApp (+62 888-0911-6923) atau email (ekayulita756@gmail.com).`;
      
      const lower = textToSend.toLowerCase();
      if (lower.includes('skill') || lower.includes('kemampuan')) {
        fallback = `Kemampuan utama Eka mencakup Microsoft Word, Excel, Google Sheets, Canva, Basic Programming, dan kreativitas visual digital.`;
      } else if (lower.includes('kuliah') || lower.includes('unikma') || lower.includes('jurusan')) {
        fallback = `Eka saat ini menempuh pendidikan S1 Sistem Informasi di Universitas Komputama (UNIKMA), semester 1. Sebelumnya, Eka menempuh pendidikan di MA Muhammadiyah Majenang (Jurusan MIPA).`;
      } else if (lower.includes('sekolah') || lower.includes('ma ') || lower.includes('majenang') || lower.includes('pendidikan') || lower.includes('sma')) {
        fallback = `Eka adalah alumni MA Muhammadiyah Majenang jurusan MIPA (Matematika dan Ilmu Pengetahuan Alam) dengan fokus pembelajaran integrasi sains dan teknologi komputasi.`;
      } else if (lower.includes('project') || lower.includes('proyek')) {
        fallback = `Eka mengembangkan beberapa proyek eksplorasi seperti Desain Konsep Portal Mahasiswa UNIKMA, Workbook Spreadsheet Analisis Data, dan Desain Presentasi Canva.`;
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: fallback }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sampleQuestions = [
    "Eka kuliah di mana dan jurusan apa?",
    "Apa saja keahlian dan tools yang dikuasai?",
    "Bagaimana cara menghubungi Eka?"
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Buka Asisten AI Portofolio"
          className="group px-4 py-3 rounded-full bg-gradient-to-r from-[#547FA8] to-[#203B5B] hover:from-[#203B5B] hover:to-[#547FA8] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-gentle-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>
          <span className="text-xs font-semibold whitespace-nowrap">Tanya AI Eka</span>
        </button>
      </div>

      {/* AI Assistant Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 rounded-3xl bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] shadow-2xl overflow-hidden flex flex-col h-[480px] animate-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#DCEEFF] to-[#A9CCED]/40 dark:from-[#1b304d] dark:to-[#132238] border-b border-[#DCEEFF] dark:border-[#203B5B] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#547FA8] text-white flex items-center justify-center shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#203B5B] dark:text-[#FAFCFF] font-display">
                  Asisten AI Eka Yulita
                </h4>
                <p className="text-[10px] text-[#547FA8] dark:text-[#A9CCED]">
                  Powered by Gemini AI · Smart Portfolio Guide
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/60 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAFCFF]/80 dark:bg-[#0c1524]/60">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#DCEEFF] dark:bg-[#203B5B] text-[#547FA8] dark:text-[#A9CCED] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-[#547FA8] text-white rounded-tr-xs'
                      : 'bg-white dark:bg-[#1b304d] text-[#203B5B] dark:text-[#E2EEF9] border border-[#DCEEFF] dark:border-[#203B5B] shadow-xs rounded-tl-xs'
                  }`}
                >
                  {m.text}
                </div>
                {m.role === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 justify-start items-center text-xs text-[#547FA8] dark:text-[#93B2D2]">
                <div className="w-6 h-6 rounded-full bg-[#DCEEFF] dark:bg-[#203B5B] flex items-center justify-center shrink-0">
                  <Sparkles className="w-3 h-3 animate-spin text-[#547FA8]" />
                </div>
                <span className="italic text-[11px]">Asisten sedang menyusun jawaban...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 2 && (
            <div className="px-3 py-2 bg-white dark:bg-[#132238] border-t border-[#DCEEFF] dark:border-[#203B5B] flex flex-wrap gap-1">
              {sampleQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="px-2 py-1 rounded-lg bg-[#DCEEFF]/40 hover:bg-[#DCEEFF] dark:bg-[#203B5B]/40 dark:hover:bg-[#203B5B] text-[10px] text-[#203B5B] dark:text-[#E2EEF9] transition-colors cursor-pointer text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <div className="p-3 bg-white dark:bg-[#132238] border-t border-[#DCEEFF] dark:border-[#203B5B] flex gap-2">
            <input
              type="text"
              placeholder="Tanyakan sesuatu tentang Eka..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-[#DCEEFF] dark:border-[#203B5B] bg-[#FAFCFF] dark:bg-[#0c1524] text-[#203B5B] dark:text-[#E2EEF9] focus:outline-none focus:ring-1 focus:ring-[#547FA8]"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="w-8 h-8 rounded-xl bg-[#547FA8] hover:bg-[#203B5B] disabled:opacity-50 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
