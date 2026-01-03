import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Github, Linkedin, Mail, BarChart3 } from 'lucide-react';
import { Avatar } from './components/Avatar';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-slate-200/50 shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black text-slate-900 tracking-tighter flex items-center gap-1 group cursor-pointer">
            RICARDO<span className="w-2 h-2 rounded-full bg-blue-600 mt-2 animate-pulse group-hover:scale-150 transition-transform"></span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['About', 'Skills', 'Experience', 'Portfolio'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleNavClick(e, item.toLowerCase())} 
                className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-all relative group tracking-tight"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center gap-4 border-l border-slate-200 pl-8">
              <a href="https://github.com/ricbarandog" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ric-jr/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105 shadow-xl shadow-slate-900/20"
            >
              Let's Talk
            </a>
           </div>   
          </div>

          <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-6 flex flex-col gap-6 shadow-2xl absolute w-full animate-fade-in-up border-b">
             {['About', 'Skills', 'Experience', 'Portfolio'].map((item) => (
               <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item.toLowerCase())} className="text-xl font-bold text-slate-800">{item}</a>
             ))}
             <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-blue-600 font-black text-xl">Contact Me</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-[0.5]"></div>
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] -z-10 animate-blob"></div>
        <div className="absolute -bottom-1/4 -left-20 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px] -z-10 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-20">
            
            <div className="md:w-3/5 space-y-10 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-5 py-2 glass rounded-2xl text-blue-700 text-xs font-black tracking-widest uppercase shadow-sm border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for New Projects
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                Solutions that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Scale.</span>
              </h1>
              
              <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
                I'm Ricardo, an <b>Tech Specialist</b> & <b>Virtual Assistant</b> specialized in automation, logistics software, and data storytelling. I make complex workflows simple with advanced prompt communication to harness AI's power for website creation.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-6">
                <a 
                  href="#portfolio" 
                  onClick={(e) => handleNavClick(e, 'portfolio')} 
                  className="group px-10 py-5 bg-blue-600 text-white font-black rounded-3xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/30 hover:-translate-y-1 flex items-center gap-3"
                >
                  Explore Work <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            <div className="md:w-2/5 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-[3rem] opacity-20 blur-2xl -z-10 animate-pulse"></div>
                <Avatar />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
