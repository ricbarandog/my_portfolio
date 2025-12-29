import React, { useState } from 'react';
import { Video, ExternalLink, Terminal, Shield, BarChart3, Globe } from 'lucide-react';
import { ProjectLink } from '../services/types';

const projects: ProjectLink[] = [
  // --- CODING PROJECTS ---
  {
    title: "Booking System",
    category: "coding",
    url: "https://pickle-booking.vercel.app/", 
    thumbnail: "/booking.png", 
    description: "A secure booking system for Pickle Ball business.",
    tags: ["React", "Security", "Portal"]
  },
  {
    title: "Cabinet and Flooring Shop",
    category: "coding",
    url: "https://demo-shop-red.vercel.app/",
    thumbnail: "/cabinetshop.png",
    description: "A platform where you can shop securely with cabinets and flooring.",
    tags: ["Python", "Selenium", "Automation"]
  },
  
  // --- CREATIVE PROJECTS ---
  {
    title: "Video Production Portfolio",
    category: "creative",
    url: "https://drive.google.com/drive/folders/1k4M1BNYBiK-9y9lgHJv_hUxym8x7I9qg?usp=drive_link",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    description: "A showcase of professional video editing, color grading, and dynamic storytelling for various brands.",
    tags: ["Premiere Pro", "Video Editing", "Creative"]
  },
  {
    title: "Graphic Design Showcase",
    category: "creative",
    url: "https://drive.google.com/drive/folders/1m2NDVT-Y0AehwonXMdNB2hBtWiZWl5C1?usp=drive_link",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Visual identity assets, social media branding, and UI/UX mockups designed for modern tech companies.",
    tags: ["Figma", "Branding", "UI/UX"]
  }
];

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'coding' | 'creative'>('all');

  const filteredProjects = projects.filter(p => 
    activeTab === 'all' ? true : p.category === activeTab
  );

  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Grid - Enhanced visibility */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.1))] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed">
            Bridging the gap between code and creativity. Explore my technical builds and creative productions using AI.
          </p>

          {/* Filtering Tabs */}
          <div className="flex justify-center mt-12 gap-3">
            {[
              { id: 'all', label: 'Everything' },
              { id: 'coding', label: 'Development' },
              { id: 'creative', label: 'Creative' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col"
            >
              {/* Media Wrapper */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icons */}
                <div className="absolute top-4 left-4">
                  <span className={`w-10 h-10 rounded-2xl glass flex items-center justify-center shadow-lg ${project.category === 'coding' ? 'text-blue-600' : 'text-purple-600'}`}>
                    {project.category === 'coding' ? <Terminal size={20} /> : <Video size={20} />}
                  </span>
                </div>
                
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                   <div className="bg-white text-slate-900 p-3 rounded-2xl shadow-xl flex items-center gap-2 font-bold text-xs uppercase tracking-tighter">
                     View Project <ExternalLink size={14} />
                   </div>
                </a>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                     {project.category === 'coding' ? 'Development' : 'Creative'}
                   </span>
                   <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ExternalLink size={14} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
