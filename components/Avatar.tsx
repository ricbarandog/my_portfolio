import React, { useState } from 'react';

export const Avatar: React.FC = () => {
  const [srcIndex, setSrcIndex] = useState(0);

  const imageSources = [
    "https://lh3.googleusercontent.com/d/10zHvlGQFtm0obBYsFkGHmnZq-vo_HScA",
    "https://drive.google.com/uc?export=view&id=10zHvlGQFtm0obBYsFkGHmnZq-vo_HScA",
    "./ricardo.png",
    "https://ui-avatars.com/api/?name=Ricardo+Barandog+Jr&background=2563eb&color=fff&size=512"
  ];

  const handleImageError = () => {
    if (srcIndex < imageSources.length - 1) {
      setSrcIndex(srcIndex + 1);
    }
  };

  return (
    <div className="relative group">
      {/* Static Subtle Frame */}
      <div className="absolute inset-0 rounded-[3.5rem] border border-blue-100 shadow-inner -z-10"></div>
      
      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3.5rem] border-8 border-white shadow-2xl overflow-hidden bg-slate-100">
        <img 
          key={srcIndex} 
          src={imageSources[srcIndex]}
          referrerPolicy="no-referrer"
          alt="Ricardo Barandog Jr." 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={handleImageError}
        />
        
        {/* Overlay Decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating Tag */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
           <div className="px-6 py-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl text-slate-900 font-bold text-sm border border-white/50">
             IT Solutions Expert
           </div>
        </div>
      </div>
    </div>
  );
};