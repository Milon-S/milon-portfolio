import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, CheckCircle2, ArrowUpRight, Award, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filterOptions = ['All', 'Full-Stack Web', 'Machine Learning', 'IoT & Embedded'];

  const filteredProjects = projectsData.filter((proj) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Full-Stack Web') return proj.type.includes('Full-Stack');
    if (selectedFilter === 'Machine Learning') return proj.type.includes('Machine Learning') || proj.type.includes('ML');
    if (selectedFilter === 'IoT & Embedded') return proj.type.includes('Embedded') || proj.type.includes('IoT');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-widest">
            <FolderGit2 size={14} /> Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real-world full-stack web platforms, machine learning research models, and IoT hardware innovations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-teal-500 to-sky-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group relative border border-slate-800"
            >
              <div>
                
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800/60">
                    {project.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{project.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-white group-hover:text-teal-300 transition-colors mb-3 flex items-center gap-2">
                  {project.title}
                  {project.id === 'iot-water-saver' && (
                    <span title="1st Place Award" className="text-amber-400 text-xs">🏆</span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Highlight Bullets */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 size={14} className="text-teal-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Footer with Tags & Actions */}
              <div>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-900 text-slate-300 text-[11px] font-mono rounded-md border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 group/btn"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
                      title="GitHub Code Repository"
                    >
                      <GithubIcon size={15} />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detailed Project Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-teal-400 bg-teal-950 px-2.5 py-0.5 rounded border border-teal-800">
                  {activeProjectModal.type}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{activeProjectModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeProjectModal.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Key Achievements & Features:</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {activeProjectModal.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 size={15} className="text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.tags.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-800 text-teal-300 text-xs font-mono rounded-lg border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={activeProjectModal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold border border-slate-700 transition-colors"
              >
                <GithubIcon size={15} /> Source Code
              </a>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 bg-teal-500 text-slate-950 rounded-xl text-xs font-bold hover:bg-teal-400 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
