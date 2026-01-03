
import React from 'react';
import { Mail, Phone, MapPin, Download, Github, LinkedIn } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-slate-300 mb-8 text-lg max-w-md">
              Ready to take on new technologies and contribute to impactful projects. Let's discuss how I can help your team.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                  <Phone size={20} />
                </div>
                <span>+63928 958 9662</span>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                  <Mail size={20} />
                </div>
                <a href="mailto:ric.barandog@gmail.com">ric.barandog@gmail.com</a>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                  <MapPin size={20} />
                </div>
                <span>Barangay Banilad, Dumaguete City, Philippines 6200</span>
              </div>
            </div>
             <div className="flex gap-4">
              <a href="https://github.com/ricbarandog" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/ric-jr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Quick Resume Download / CTA */}
          <div className="flex flex-col justify-center items-start md:items-end">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Ricardo Barandog Jr.</h3>
              <p className="text-slate-400 text-sm mb-6">
                Tech Specialist • Virtual Assistant • Data Analyst
              </p>
              {/* Updated to Google Drive Direct Download Link */}
              <a 
                href="https://drive.google.com/uc?export=download&id=1IraMgQdCl-5GTOO61y8e224TMWdxCL2f"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 cursor-pointer"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Ricardo Barandog Jr. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with React, Tailwind & Gemini API</p>
        </div>
      </div>
    </footer>
  );
};
