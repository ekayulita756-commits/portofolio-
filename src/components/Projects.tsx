import React, { useState } from 'react';
import { Sparkles, Eye, X, Calendar, Layers, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative bg-[#FAFCFF]/60 dark:bg-[#0c1524]/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#547FA8] dark:text-[#A9CCED]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#203B5B] dark:text-[#FAFCFF] font-display">
            My Projects
          </h2>
          <p className="text-sm text-[#547FA8] dark:text-[#93B2D2] max-w-lg mx-auto">
            Kumpulan eksplorasi tugas kuliah, pemodelan sistem informasi, dan desain kreatif digital.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white/90 dark:bg-[#132238]/90 border border-[#DCEEFF] dark:border-[#203B5B] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback container
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Subtle Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Overlay */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-[#132238]/90 backdrop-blur-xs text-[11px] font-semibold text-[#203B5B] dark:text-[#FAFCFF] shadow-xs">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#547FA8] dark:text-[#93B2D2]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.status}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#203B5B] dark:text-[#FAFCFF] group-hover:text-[#547FA8] dark:group-hover:text-[#A9CCED] transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#547FA8] dark:text-[#B6D2EC] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tools Used (Clean unboxed tags) */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs text-[#547FA8] dark:text-[#93B2D2]">
                    <Layers className="w-3.5 h-3.5 text-[#A9CCED] shrink-0" />
                    {project.tools.map((t, idx) => (
                      <span key={idx} className="font-medium">
                        {t}{idx < project.tools.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#DCEEFF]/60 hover:bg-[#547FA8] text-[#203B5B] hover:text-white dark:bg-[#203B5B]/50 dark:hover:bg-[#547FA8] dark:text-[#E2EEF9] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Project</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white dark:bg-[#132238] border border-[#DCEEFF] dark:border-[#203B5B] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Tutup modal proyek"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-[#203B5B] flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-300 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Thumbnail */}
              <div className="rounded-2xl overflow-hidden aspect-16/9 bg-slate-100 dark:bg-slate-800 mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#547FA8] dark:text-[#93B2D2] mb-1">
                    <span>{selectedProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{selectedProject.status}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#203B5B] dark:text-[#FAFCFF]">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-medium text-[#547FA8] dark:text-[#A9CCED]">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFCFF] dark:bg-[#0c1524] border border-[#DCEEFF] dark:border-[#203B5B]">
                  <h4 className="text-xs font-semibold text-[#203B5B] dark:text-[#FAFCFF] mb-2">
                    Gambaran & Tujuan Proyek:
                  </h4>
                  <p className="text-xs sm:text-sm text-[#547FA8] dark:text-[#B6D2EC] leading-relaxed">
                    {selectedProject.fullDetails}
                  </p>
                </div>

                {/* Tools Used */}
                <div>
                  <span className="block text-xs font-semibold text-[#203B5B] dark:text-[#FAFCFF] mb-2">
                    Aplikasi & Teknologi yang Digunakan:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#DCEEFF]/50 dark:bg-[#203B5B]/50 border border-[#A9CCED]/30 dark:border-[#547FA8]/30 text-xs font-medium text-[#203B5B] dark:text-[#E2EEF9] flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#547FA8] dark:text-[#A9CCED]" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <div className="pt-4 border-t border-[#DCEEFF] dark:border-[#203B5B] flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#547FA8] hover:bg-[#203B5B] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Tutup Pratinjau
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
