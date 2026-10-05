import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink, Award, BookOpen, Briefcase, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, educationData, experienceData, certificationsData, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn resume-modal-overlay">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto resume-modal-content">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/80 border-b border-slate-700/60 sticky top-0 z-10 backdrop-blur-md print-hidden">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-teal-400 animate-ping" />
            <h3 className="text-lg font-bold text-white tracking-wide">Md. Milon Sarker — Official Resume</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-sky-400 hover:from-teal-300 hover:to-sky-300 rounded-lg transition-all shadow-md"
              title="Print / Save as PDF"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all border border-slate-700"
              aria-label="Close resume modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable CV */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm leading-relaxed resume-modal-body">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white print:text-slate-900 tracking-tight">{personalInfo.name}</h1>
                <p className="text-teal-400 print:text-teal-700 font-semibold text-base mt-1">{personalInfo.role}</p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-400 print:text-slate-700">
                  <span className="flex items-center gap-1.5"><Phone size={13} className="text-teal-400 print:text-teal-700"/> {personalInfo.phone}</span>
                  <span className="flex items-center gap-1.5"><Mail size={13} className="text-teal-400 print:text-teal-700"/> {personalInfo.email}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={13} className="text-teal-400 print:text-teal-700"/> {personalInfo.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap md:flex-col gap-2 text-xs">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-800 text-sky-400 border border-slate-700/60 rounded-lg transition-colors print:border-slate-300 print:text-slate-800"
                >
                  <LinkedinIcon size={14} /> LinkedIn Profile
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-800 text-teal-400 border border-slate-700/60 rounded-lg transition-colors print:border-slate-300 print:text-slate-800"
                >
                  <GithubIcon size={14} /> GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 print:text-teal-700 flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 print:bg-teal-700"></span> Career Objective
            </h4>
            <p className="bg-slate-800/40 print:bg-slate-50 p-4 rounded-xl border border-slate-800/80 print:border-slate-300 text-slate-300 print:text-slate-800 resume-card-box">
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 print:text-teal-700 flex items-center gap-2 mb-3">
              <Code size={14} /> Technical Skills Summary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-800/40 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-300 resume-card-box">
                <span className="font-bold text-white print:text-slate-900 block mb-1">IT Infrastructure:</span>
                <p className="text-slate-400 print:text-slate-700">Windows Server, Ubuntu/Linux (RHEL, SUSE familiarity), Virtualization/Hypervisor basics (VMware, Hyper-V), basic computer networking & system maintenance, data backup concepts.</p>
              </div>
              <div className="p-3 bg-slate-800/40 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-300 resume-card-box">
                <span className="font-bold text-white print:text-slate-900 block mb-1">Frontend Development:</span>
                <p className="text-slate-400 print:text-slate-700">React.js, React Router DOM, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS.</p>
              </div>
              <div className="p-3 bg-slate-800/40 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-300 resume-card-box">
                <span className="font-bold text-white print:text-slate-900 block mb-1">Backend & Databases:</span>
                <p className="text-slate-400 print:text-slate-700">Node.js, Express.js, REST API Design, JWT Authentication, Role-Based Access Control, bKash Gateway, MongoDB, MongoDB Atlas, MySQL.</p>
              </div>
              <div className="p-3 bg-slate-800/40 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-300 resume-card-box">
                <span className="font-bold text-white print:text-slate-900 block mb-1">Tools & Soft Skills:</span>
                <p className="text-slate-400 print:text-slate-700">Git, GitHub, VS Code, Postman, Google Colab, Leadership, Fast Learner, Team Management, Problem-Solving.</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 print:text-teal-700 flex items-center gap-2 mb-3">
              <ExternalLink size={14} /> Featured Projects
            </h4>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-4 bg-slate-800/40 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-300 resume-card-box">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h5 className="font-bold text-white print:text-slate-900 text-base">{proj.title}</h5>
                    <span className="text-xs font-mono text-teal-400 print:text-teal-800 bg-teal-950/60 print:bg-teal-50 px-2.5 py-0.5 rounded border border-teal-800/50 print:border-teal-300">{proj.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 print:text-slate-600 mb-2 italic">Stack: {proj.tags.join(', ')}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Leadership */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 print:text-teal-700 flex items-center gap-2 mb-3">
              <Briefcase size={14} /> Experience & Leadership Activities
            </h4>
            <div className="space-y-3">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="p-4 bg-slate-800/40 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-300 resume-card-box">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-bold text-white print:text-slate-900">{exp.role} <span className="text-teal-400 print:text-teal-700 font-normal">— {exp.organization}</span></h5>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 print:text-slate-700 mt-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 print:text-teal-700 flex items-center gap-2 mb-3">
                <BookOpen size={14} /> Education
              </h4>
              <div className="space-y-3">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="p-3 bg-slate-800/40 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-300 resume-card-box">
                    <h5 className="font-bold text-white print:text-slate-900 text-xs">{edu.degree}</h5>
                    <p className="text-xs text-teal-400 print:text-teal-700 font-semibold">{edu.institution}</p>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 print:text-slate-600 mt-1">
                      <span>{edu.period}</span>
                      <span className="font-mono bg-slate-800 print:bg-slate-200 px-2 py-0.5 rounded text-white print:text-slate-900">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 print:text-teal-700 flex items-center gap-2 mb-3">
                <Award size={14} /> Honors & Certifications
              </h4>
              <div className="space-y-3">
                {certificationsData.map((cert, idx) => (
                  <div key={idx} className="p-3 bg-slate-800/40 print:bg-slate-50 rounded-xl border border-slate-800 print:border-slate-300 resume-card-box">
                    <div className="flex items-center justify-between">
                      <h5 className="font-bold text-white print:text-slate-900 text-xs">{cert.title}</h5>
                      <span className="text-[10px] text-teal-400 print:text-teal-800 bg-teal-950 print:bg-teal-100 px-2 py-0.5 rounded border border-teal-800/40 print:border-teal-300">{cert.badge}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 print:text-slate-600 mt-1">{cert.issuer} • {cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-800/80 border-t border-slate-700/60 flex items-center justify-between print-hidden">
          <p className="text-xs text-slate-400">Md. Milon Sarker • milons.devai@gmail.com</p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all border border-slate-700"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
