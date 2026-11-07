import React, { useState } from 'react';
import { 
  FileText, 
  Table, 
  FileSpreadsheet, 
  Palette, 
  Code2, 
  Sparkles,
  CheckCircle2,
  MousePointerClick
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'office' | 'creative' | 'technical'>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'Table':
        return <Table className="w-6 h-6" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const filteredSkills = activeCategory === 'all'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#547FA8] dark:text-[#A9CCED]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#203B5B] dark:text-[#FAFCFF] font-display">
            My Skills
          </h2>
          <p className="text-sm text-[#547FA8] dark:text-[#93B2D2] max-w-lg mx-auto">
            Aplikasi perkantoran, olah data tabular, kreativitas visual, dan fondasi teknologi yang aktif dipelajari dan dipraktikkan.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              activeCategory === 'all'
                ? 'bg-[#547FA8] text-white shadow-xs'
                : 'bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] text-[#547FA8] dark:text-[#93B2D2] hover:bg-[#DCEEFF]/40'
            }`}
          >
            All Skills ({PORTFOLIO_DATA.skills.length})
          </button>
          <button
            onClick={() => setActiveCategory('office')}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              activeCategory === 'office'
                ? 'bg-[#547FA8] text-white shadow-xs'
                : 'bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] text-[#547FA8] dark:text-[#93B2D2] hover:bg-[#DCEEFF]/40'
            }`}
          >
            Office & Spreadsheets
          </button>
          <button
            onClick={() => setActiveCategory('creative')}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              activeCategory === 'creative'
                ? 'bg-[#547FA8] text-white shadow-xs'
                : 'bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] text-[#547FA8] dark:text-[#93B2D2] hover:bg-[#DCEEFF]/40'
            }`}
          >
            Creative & Design
          </button>
          <button
            onClick={() => setActiveCategory('technical')}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
              activeCategory === 'technical'
                ? 'bg-[#547FA8] text-white shadow-xs'
                : 'bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] text-[#547FA8] dark:text-[#93B2D2] hover:bg-[#DCEEFF]/40'
            }`}
          >
            Basic Programming
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="group p-6 rounded-3xl bg-white/80 dark:bg-[#132238]/80 border border-[#DCEEFF] dark:border-[#203B5B] hover:border-[#A9CCED] dark:hover:border-[#547FA8] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon & Category Unboxed Meta */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#DCEEFF] to-[#FAFCFF] dark:from-[#203B5B] dark:to-[#132238] border border-[#A9CCED]/40 dark:border-[#547FA8]/40 flex items-center justify-center text-[#547FA8] dark:text-[#A9CCED] group-hover:scale-110 transition-transform duration-200 shadow-xs">
                    {getIcon(skill.iconName)}
                  </div>
                  
                  {/* Zero-Pill clean unboxed text */}
                  <span className="text-xs font-medium text-[#547FA8] dark:text-[#93B2D2]">
                    {skill.categoryLabel}
                  </span>
                </div>

                {/* Skill Name */}
                <div>
                  <h3 className="text-lg font-bold text-[#203B5B] dark:text-[#FAFCFF] font-display group-hover:text-[#547FA8] dark:group-hover:text-[#A9CCED] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-[#547FA8] dark:text-[#B6D2EC] mt-1.5 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-2">
                  {skill.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#547FA8] dark:text-[#93B2D2]">
                      <CheckCircle2 className="w-3 h-3 text-[#A9CCED] dark:text-[#547FA8] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Touch Hint */}
              <div className="pt-4 mt-4 border-t border-[#DCEEFF]/60 dark:border-[#203B5B]/50 flex items-center justify-between text-[11px] text-[#547FA8] dark:text-[#93B2D2]">
                <span className="flex items-center gap-1 group-hover:text-[#203B5B] dark:group-hover:text-white transition-colors">
                  <MousePointerClick className="w-3 h-3" />
                  Klik untuk detail
                </span>
                <span className="text-xs font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Detail Lightbox Modal */}
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DCEEFF] dark:bg-[#203B5B] flex items-center justify-center text-[#547FA8] dark:text-[#A9CCED]">
                  {getIcon(selectedSkill.iconName)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#203B5B] dark:text-[#FAFCFF]">
                    {selectedSkill.name}
                  </h3>
                  <span className="text-xs text-[#547FA8] dark:text-[#93B2D2]">
                    {selectedSkill.categoryLabel}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#547FA8] dark:text-[#B6D2EC] leading-relaxed mb-4">
                {selectedSkill.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#FAFCFF] dark:bg-[#0c1524] border border-[#DCEEFF] dark:border-[#203B5B] mb-5">
                <span className="block text-xs font-semibold text-[#203B5B] dark:text-[#FAFCFF] mb-2">
                  Penerapan Praktis dalam Studi:
                </span>
                <ul className="space-y-1.5 text-xs text-[#547FA8] dark:text-[#93B2D2]">
                  {selectedSkill.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#547FA8] dark:bg-[#A9CCED]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="w-full py-2.5 rounded-xl bg-[#547FA8] hover:bg-[#203B5B] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Tutup Detail
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
