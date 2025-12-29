import React from 'react';
import { SkillItem } from '../services/types';
import { Terminal, Briefcase, Zap, Palette } from 'lucide-react';

const skillsData: SkillItem[] = [
  {
    category: "Technical",
    skills: ["Looker Studio", "XML Tagging", "Freight Software", "Data Visualization", "Dashboard Creation", "No Code Development", "Vercel", "Google Gemini Code Assist", "HTML", "CSS"]
  },
  {
    category: "Virtual Assistant",
    skills: ["CRM Management", "Import Documentation", "KPI Tracking", "Report Generation", "Scheduling"]
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Critical Thinking", "Time Management", "Effective Communication", "Teamwork"]
  },
  {
    category: "Creative Tools",
    skills: ["Google Workspace", "Figma", "Canva", "Adobe Premiere", "Photoshop"]
  }
];

const getIcon = (category: string) => {
  if (category.includes("Technical")) return <Terminal size={24} />;
  if (category.includes("Assistant")) return <Briefcase size={24} />;
  if (category.includes("Soft")) return <Zap size={24} />;
  return <Palette size={24} />;
};

const getColors = (index: number) => {
  const colors = [
    { bg: "bg-blue-50", text: "text-blue-600", icon: "bg-blue-600" },
    { bg: "bg-indigo-50", text: "text-indigo-600", icon: "bg-indigo-600" },
    { bg: "bg-emerald-50", text: "text-emerald-600", icon: "bg-emerald-600" },
    { bg: "bg-purple-50", text: "text-purple-600", icon: "bg-purple-600" }
  ];
  return colors[index % colors.length];
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/3">
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 inline-block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              My Professional <br /> <span className="text-slate-300">Toolkit.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              Versatile expertise across technical analysis, administrative support, and digital creativity.
            </p>
            <div className="flex gap-4">
               <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
               <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
               <div className="w-4 h-1 bg-slate-100 rounded-full"></div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillsData.map((category, idx) => {
              const theme = getColors(idx);
              return (
                <div 
                  key={idx} 
                  className={`group p-8 rounded-[2.5rem] border border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${theme.bg.replace('50', '50/30')}`}
                >
                  <div className={`w-14 h-14 ${theme.icon} rounded-2xl flex items-center justify-center text-white shadow-lg mb-8 transform group-hover:rotate-6 transition-transform`}>
                    {getIcon(category.category)}
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-900 mb-6">{category.category}</h3>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-4 py-1.5 bg-white text-slate-500 text-xs font-bold rounded-xl border border-slate-100 group-hover:text-slate-900 group-hover:border-slate-200 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
