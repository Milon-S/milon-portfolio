import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand */}
          <div className="space-y-2 text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white">
                Milon<span className="gradient-text">.dev</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              Fresh CSE Graduate | Full-Stack Development (MERN) | IT Infrastructure Specialist from City University, Dhaka.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-teal-400 transition-colors">Education</a>
            <button onClick={onOpenResume} className="hover:text-teal-400 transition-colors">Resume</button>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Top Button */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-sky-400 rounded-xl border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-slate-900 hover:bg-teal-500 text-slate-400 hover:text-slate-950 rounded-xl border border-slate-800 transition-all shadow-md"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Md. Milon Sarker. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-teal-400 font-semibold">React</span>, <span className="text-sky-400 font-semibold">Tailwind CSS</span> & <span className="text-teal-400">Lucide Icons</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
