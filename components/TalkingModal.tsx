import React, { useEffect, useRef, useState } from 'react';
import { X, Volume2, Mic } from 'lucide-react';
import { LoadingState } from '../services/types';

interface TalkingModalProps {
  isOpen: boolean;
  onClose: () => void;
  loadingState: LoadingState;
  audioBuffer: AudioBuffer | null;
  script: string;
}

export const TalkingModal: React.FC<TalkingModalProps> = ({ 
  isOpen, 
  onClose, 
  loadingState, 
  audioBuffer,
  script
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);

  // Image Fallback State
  const [srcIndex, setSrcIndex] = useState(0);
  const imageSources = [
    "https://lh3.googleusercontent.com/d/10zHvlGQFtm0obBYsFkGHmnZq-vo_HScA",
    "https://drive.google.com/uc?export=view&id=10zHvlGQFtm0obBYsFkGHmnZq-vo_HScA",
    "./ricardo.png",
    "./Ricardo.png",
    "./ricardo.jpg",
    "ricardo.png",
    "https://ui-avatars.com/api/?name=Ricardo+Barandog+Jr&background=2563eb&color=fff&size=512"
  ];

  // Handle audio playback
  useEffect(() => {
    if (isOpen && audioBuffer && loadingState === LoadingState.PLAYING) {
      playAudio(audioBuffer);
    }
    
    // Cleanup on close
    if (!isOpen) {
      stopAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, audioBuffer, loadingState]);

  const playAudio = async (buffer: AudioBuffer) => {
    if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    // Stop any existing source
    if (sourceRef.current) {
      try { sourceRef.current.stop(); } catch (e) { /* ignore */ }
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    
    source.onended = () => {
      setIsPlaying(false);
    };

    sourceRef.current = source;
    source.start(0);
    setIsPlaying(true);
  };

  const stopAudio = () => {
    if (sourceRef.current) {
      try { sourceRef.current.stop(); } catch (e) { /* ignore */ }
    }
    setIsPlaying(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-float">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Video Simulation Area */}
        <div className="relative aspect-square bg-slate-900 flex items-center justify-center overflow-hidden">
            {/* Background Abstract */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 opacity-80"></div>
            
            {/* The Avatar Image - Animated when playing */}
            <div className={`relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl transition-all duration-300 ${isPlaying ? 'animate-talking scale-105 shadow-blue-500/50' : 'scale-100'}`}>
               <img 
                 key={srcIndex}
                 src={imageSources[srcIndex]} 
                 referrerPolicy="no-referrer"
                 alt="Talking Avatar" 
                 className="w-full h-full object-cover object-top"
                 onError={() => {
                   if (srcIndex < imageSources.length - 1) {
                     setSrcIndex(srcIndex + 1);
                   }
                 }}
               />
            </div>

            {/* Status Indicator */}
            <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 px-6">
                
                {/* Script Subtitles */}
                {isPlaying && (
                    <div className="bg-black/60 text-white px-4 py-2 rounded-lg text-center text-sm md:text-base font-medium backdrop-blur-md border border-white/10 shadow-lg max-w-full">
                        "{script}"
                    </div>
                )}

                {/* Loading States */}
                {!isPlaying && loadingState !== LoadingState.PLAYING && (
                    <div className="flex items-center gap-2 text-white/90 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
                        {loadingState === LoadingState.GENERATING_SCRIPT && (
                            <>
                                <Mic size={18} className="animate-pulse text-blue-400" />
                                <span className="text-sm font-semibold">Creating intro script...</span>
                            </>
                        )}
                        {loadingState === LoadingState.GENERATING_AUDIO && (
                            <>
                                <Volume2 size={18} className="animate-pulse text-green-400" />
                                <span className="text-sm font-semibold">Generating voice (AI)...</span>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
            <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`}></div>
                <span className="text-sm font-medium text-slate-600">
                    {isPlaying ? 'Ricardo is speaking...' : 'Interactive Intro'}
                </span>
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                Powered by Gemini 2.5
            </div>
        </div>
      </div>
    </div>
  );
};