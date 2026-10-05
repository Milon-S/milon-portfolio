import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, Users, Flame } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-widest">
            <Briefcase size={14} /> Leadership & Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="gradient-text">Leadership Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Class representative duties, university club leadership, and national tech event ambassadorship.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central bar (visible on md+) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-teal-500 via-sky-500 to-indigo-500 -translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-teal-400 items-center justify-center text-teal-400 shadow-lg shadow-teal-500/30 z-10">
                    <Users size={16} />
                  </div>

                  {/* Card container */}
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-4">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <span className="text-xs font-bold font-mono text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar size={13} className="text-teal-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-extrabold text-white">{item.role}</h3>
                        <p className="text-sm font-semibold text-sky-400 mt-0.5">{item.organization}</p>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        {item.highlights.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 size={14} className="text-teal-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
