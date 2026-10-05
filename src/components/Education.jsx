import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, Sparkles, Trophy, Star } from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-widest">
            <GraduationCap size={14} /> Qualifications & Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Honors</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Academic degrees from City University, Dhaka and competitive honors.
          </p>
        </div>

        {/* 2-Column Layout: Education Left, Certifications Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Academic Degrees */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Academic Qualifications</h3>
                <p className="text-xs text-slate-400">Undergraduate & School Background</p>
              </div>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-mono font-bold text-teal-300 bg-teal-950 px-3 py-1 rounded-full border border-teal-800 shrink-0">
                      {edu.score}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-sky-400 font-semibold">
                    <span>{edu.institution}</span>
                    <span className="text-slate-400 font-mono">{edu.period}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-2">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Honors & Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Honors & Certifications</h3>
                <p className="text-xs text-slate-400">Awards, Certifications & Competitions</p>
              </div>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <Star size={16} className="text-amber-400 shrink-0" />
                      <span>{cert.title}</span>
                    </h4>
                    <span className="text-[11px] font-mono font-bold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800/60 shrink-0">
                      {cert.badge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-teal-400 font-medium">{cert.issuer}</span>
                    <span className="font-mono text-slate-400">{cert.date}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-2">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
