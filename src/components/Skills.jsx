import React, { useState } from 'react';
import { 
  Code2, FileCode2, Palette, Layout, Route, 
  Server, Cpu, Network, ShieldCheck, CreditCard, 
  Database, Cloud, Table, Terminal, Monitor, 
  Layers, Wifi, HardDrive, GitBranch, Send, 
  Users, Zap, UserCheck, MessageSquare, Lightbulb, 
  Check, Search, Filter
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Map icon strings to Lucide components
  const getIcon = (iconName) => {
    const iconMap = {
      Code2, FileCode2, Palette, Layout, Route,
      Server, Cpu, Network, ShieldCheck, CreditCard,
      Database, Cloud, Table, Terminal, Monitor,
      Layers, Wifi, HardDrive, GitBranch, Send,
      Users, Zap, UserCheck, MessageSquare, Lightbulb
    };
    const IconComponent = iconMap[iconName] || Code2;
    return <IconComponent size={20} />;
  };

  const categories = ['All', ...skillsData.map(s => s.category)];

  const filteredData = skillsData.map(group => {
    if (activeCategory !== 'All' && group.category !== activeCategory) {
      return null;
    }

    const filteredSkills = group.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...group,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-widest">
            <Cpu size={14} /> Technical & System Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="gradient-text">Skills & Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized overview of frontend, backend, database, IT server infrastructure, and leadership skills.
          </p>
        </div>

        {/* Controls: Search & Category Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-teal-500 to-sky-500 text-slate-950 shadow-md shadow-teal-500/20 font-bold'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Linux)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>

        </div>

        {/* Skills Categorized Grid */}
        <div className="space-y-10">
          {filteredData.length > 0 ? (
            filteredData.map((group) => (
              <div key={group.category} className="space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
                  <h3 className="text-lg font-bold text-white tracking-wide">{group.category}</h3>
                  <span className="text-xs text-teal-400 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800 font-mono">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass-panel glass-panel-hover p-4 rounded-xl flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:text-sky-300 transition-all">
                          {getIcon(skill.icon)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                            {skill.name}
                          </h4>
                          <div className="w-32 bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-teal-400 to-sky-400 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-teal-400">
                        {skill.level}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
