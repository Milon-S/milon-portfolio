import React from 'react';
import { ArrowRight, Mail, Download, Sparkles, Code, Server, Award, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Ambient background glow shapes */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs font-semibold shadow-lg backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              <span className="tracking-wide uppercase text-[11px] font-bold">{personalInfo.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                Hi, I'm <br />
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-bold text-sky-400 mt-3 tracking-wide flex items-center gap-2">
                <Code size={20} className="text-teal-400" />
                {personalInfo.role}
              </h2>
            </div>

            {/* Elevator Pitch */}
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl font-normal">
              Computer Science & Engineering graduate from <strong className="text-white">City University, Dhaka (CGPA 3.55)</strong>. Specializing in building scalable full-stack web applications with the <span className="text-teal-300 font-semibold">MERN Stack</span> while mastering server infrastructure, Linux administration, and system virtualization.
            </p>

            {/* Key Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
                <CheckCircle2 size={13} className="text-teal-400" /> Full-Stack Development (MERN)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
                <CheckCircle2 size={13} className="text-sky-400" /> Linux & Windows Server
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
                <CheckCircle2 size={13} className="text-indigo-400" /> Machine Learning & Python
              </span>
            </div>

            {/* Call to Actions & Social Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-sky-400 hover:from-teal-300 hover:to-sky-300 rounded-xl transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-teal-500/40 rounded-xl transition-all"
              >
                <Mail size={16} className="text-teal-400" />
                <span>Contact Me</span>
              </a>

              {/* Social Buttons */}
              <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-slate-400 hover:text-sky-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>

                <button
                  onClick={onOpenResume}
                  className="p-3 text-slate-400 hover:text-teal-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                  aria-label="View Resume"
                  title="View Resume"
                >
                  <Download size={18} />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Framed Profile Avatar & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 opacity-40 blur-xl animate-pulse" />
              
              {/* Frame Card */}
              <div className="relative w-full h-full rounded-3xl bg-slate-900 border-2 border-slate-800 p-3 shadow-2xl overflow-hidden group">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top rounded-2xl filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-slate-900/90 border border-slate-700/80 px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-bold text-white animate-float">
                <Award size={16} className="text-amber-400" />
                <span>CGPA 3.55 / 4.00</span>
              </div>

              {/* Bottom Floating Badge */}
              <div className="absolute -bottom-5 -right-4 bg-slate-900/95 border border-teal-500/40 px-4 py-2.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3 text-xs font-semibold text-slate-200">
                <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-400 font-bold">
                  CU
                </div>
                <div>
                  <p className="text-white font-bold">City University CSE</p>
                  <p className="text-[11px] text-teal-400">Class Rep (4 Years)</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
