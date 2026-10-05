import React from 'react';
import { GraduationCap, Award, Server, Code, Users, CheckCircle, Flame, Sparkles, Cpu, Lightbulb } from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles size={14} /> Background & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Md. Milon Sarker</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Fresh Computer Science & Engineering graduate specializing in Full-Stack Development (MERN) and Systems Infrastructure.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <GraduationCap className="text-teal-400" size={24} />
                <span>Academic Journey at City University</span>
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                {aboutData.shortBio}
              </p>

              <div className="p-4 bg-slate-900/80 rounded-xl border border-teal-500/20 text-xs text-slate-300">
                <strong className="text-teal-300 block font-semibold mb-1">Core Engineering Philosophy:</strong>
                <p className="italic">{aboutData.philosophy}</p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutData.highlights.map((pillar, idx) => (
                <div key={idx} className="glass-panel glass-panel-hover p-5 rounded-2xl space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold">
                    {idx === 0 && <Code size={20} />}
                    {idx === 1 && <Server size={20} />}
                    {idx === 2 && <Cpu size={20} />}
                    {idx === 3 && <Users size={20} />}
                  </div>
                  <h4 className="text-base font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Leadership & Achievements Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="text-amber-400" size={22} />
                <span>Leadership & Roles</span>
              </h3>

              <div className="space-y-4 text-xs">
                
                {/* Role 1 */}
                <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800 space-y-1 hover:border-teal-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Class Representative (CR)</span>
                    <span className="text-[10px] font-mono text-teal-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-800">4 Years</span>
                  </div>
                  <p className="text-slate-400">Dept. of CSE, City University, Dhaka (Nov 2022 - Jul 2026)</p>
                  <p className="text-slate-300 text-[11px] pt-1">Elected CR bridging faculty and 100+ classmates; organized routines, labs, and academic events.</p>
                </div>

                {/* Role 2 */}
                <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800 space-y-1 hover:border-teal-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">CUCC Executive Member</span>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">2024</span>
                  </div>
                  <p className="text-slate-400">City University Computer Club</p>
                  <p className="text-slate-300 text-[11px] pt-1">Coordinated workshops, programming competitions, and member skill development outreach.</p>
                </div>

                {/* Role 3 */}
                <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800 space-y-1 hover:border-teal-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Ambassador</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800">2025 – 2026</span>
                  </div>
                  <p className="text-slate-400">ICT Olympiad Bangladesh</p>
                  <p className="text-slate-300 text-[11px] pt-1">Volunteered to promote nation-wide ICT awareness and tech competitions among students.</p>
                </div>

              </div>

              {/* Award Highlight */}
              <div className="p-4 bg-gradient-to-r from-amber-500/10 via-teal-500/10 to-sky-500/10 rounded-xl border border-amber-500/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  🏆
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-300">1st Place Project Winner</h4>
                  <p className="text-[11px] text-slate-300">Digital System Design Showcase — IoT Water Saver (Dec 2025)</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
