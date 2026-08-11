'use client';

import React, { useState, useEffect } from 'react';
import { Essay, ESSAY_SERIES } from '../lib/essays-data';
import { ambientSynth } from '../lib/audio-ambient';
import {
  ArrowLeft,
  ArrowRight,
  Volume2,
  VolumeX,
  ExternalLink,
  Share2,
  Check,
} from 'lucide-react';
import katex from 'katex';

interface ReaderViewProps {
  essay: Essay;
  onBack: () => void;
  onSelectEssay: (essay: Essay) => void;
}

export const ReaderView: React.FC<ReaderViewProps> = ({
  essay,
  onBack,
  onSelectEssay,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans' | 'mono'>('serif');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedQuote, setCopiedQuote] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const active = ambientSynth.toggle();
    setIsPlayingAudio(active);
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const currentIndex = ESSAY_SERIES.findIndex((e) => e.id === essay.id);
  const prevEssay = currentIndex > 0 ? ESSAY_SERIES[currentIndex - 1] : null;
  const nextEssay = currentIndex < ESSAY_SERIES.length - 1 ? ESSAY_SERIES[currentIndex + 1] : null;

  const getFontClass = () => {
    switch (fontFamily) {
      case 'sans':
        return 'font-sans';
      case 'mono':
        return 'font-mono-tag';
      default:
        return 'font-serif-header';
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white text-[#09090B] transition-colors duration-300">
      
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-200 z-50">
        <div
          className="h-full bg-black transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Control Toolbar */}
      <div className="sticky top-4 z-40 max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-white/90 backdrop-blur-md p-2.5 rounded-full flex items-center justify-between shadow-md border border-zinc-200">
          
          <button
            onClick={onBack}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono-tag text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ESSAY CATALOG</span>
          </button>

          {/* Typography & Audio Customizer */}
          <div className="flex items-center space-x-2">
            
            <div className="hidden sm:flex items-center bg-zinc-100 p-1 rounded-full border border-zinc-200 text-xs font-mono-tag">
              <button
                onClick={() => setFontFamily('serif')}
                className={`px-2.5 py-1 rounded-full ${fontFamily === 'serif' ? 'bg-black text-white font-semibold' : 'text-zinc-700'}`}
              >
                Serif
              </button>
              <button
                onClick={() => setFontFamily('sans')}
                className={`px-2.5 py-1 rounded-full ${fontFamily === 'sans' ? 'bg-black text-white font-semibold' : 'text-zinc-700'}`}
              >
                Sans
              </button>
              <button
                onClick={() => setFontFamily('mono')}
                className={`px-2.5 py-1 rounded-full ${fontFamily === 'mono' ? 'bg-black text-white font-semibold' : 'text-zinc-700'}`}
              >
                Mono
              </button>
            </div>

            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full border transition-all ${
                isPlayingAudio
                  ? 'bg-zinc-200 border-black text-black'
                  : 'border-zinc-200 text-zinc-600 hover:text-black'
              }`}
              title="Toggle Web Audio Ambient Reading Synth"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={handleCopyShare}
              className="p-2 rounded-full border border-zinc-200 text-zinc-600 hover:text-black transition-colors"
              title="Copy Essay Link"
            >
              {copiedQuote ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

          </div>

        </div>
      </div>

      {/* Main Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-12 bg-white">
        
        {/* Header */}
        <header className="space-y-6 border-b border-zinc-200 pb-10">
          
          <div className="flex items-center space-x-3 text-xs font-mono-tag">
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-black border border-zinc-300 font-bold">
              {essay.part}
            </span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-600">{essay.readTime}</span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-600">{essay.date}</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl ${getFontClass()} font-bold text-[#09090B] leading-tight tracking-tight`}>
            {essay.title}
          </h1>

          <p className="text-lg font-sans text-zinc-600 font-light leading-relaxed">
            {essay.subtitle}
          </p>

          <div className="p-4 rounded-md bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs font-mono-tag">
            <div className="flex items-center space-x-2 text-black font-bold">
              <span>SYNDICATED / CANONICAL ON SUBSTACK</span>
            </div>
            <a
              href={essay.substackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-zinc-700 hover:text-black transition-colors font-semibold"
            >
              <span>ORIGINAL POST</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </header>

        {/* Content */}
        <div className="space-y-10 text-base leading-relaxed text-zinc-800 font-light">
          {essay.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              
              <h2 className="text-2xl font-serif-header font-bold text-[#09090B] border-l-2 border-black pl-4 py-0.5">
                {sec.sectionTitle}
              </h2>

              <p className="leading-relaxed">
                {sec.text}
              </p>

              {sec.quote && (
                <blockquote className="my-6 p-6 rounded-r-md bg-zinc-50 border-l-4 border-black italic font-serif text-lg text-zinc-900">
                  "{sec.quote}"
                </blockquote>
              )}

              {sec.latexFormula && (
                <div className="my-6 p-4 rounded-md bg-zinc-50 border border-zinc-200 text-center font-mono-tag text-black overflow-x-auto">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString(sec.latexFormula, {
                        displayMode: true,
                        throwOnError: false,
                      }),
                    }}
                  />
                </div>
              )}

            </section>
          ))}
        </div>

        {/* Somatic Nodes */}
        <div className="pt-8 border-t border-zinc-200 space-y-3">
          <span className="text-xs font-mono-tag text-zinc-500 uppercase tracking-widest block font-semibold">
            CONNECTED SOMATIC HOMUNCULUS NODES:
          </span>
          <div className="flex flex-wrap gap-2">
            {essay.somaticNodes.map((node) => (
              <span
                key={node}
                className="px-3 py-1 rounded bg-zinc-100 border border-zinc-200 text-xs font-mono-tag text-black font-semibold"
              >
                ⊙ {node}
              </span>
            ))}
          </div>
        </div>

        {/* Previous & Next Pagination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 border-t border-zinc-200">
          {prevEssay ? (
            <button
              onClick={() => onSelectEssay(prevEssay)}
              className="p-4 rounded-md border border-zinc-200 hover:border-black text-left transition-all group space-y-1 bg-white"
            >
              <span className="text-[10px] font-mono-tag text-zinc-500 uppercase font-semibold">PREVIOUS IN SERIES</span>
              <div className="text-base font-serif-header font-bold text-zinc-900 group-hover:text-black flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4 shrink-0" />
                <span className="line-clamp-1">{prevEssay.title}</span>
              </div>
            </button>
          ) : <div />}

          {nextEssay && (
            <button
              onClick={() => onSelectEssay(nextEssay)}
              className="p-4 rounded-md border border-zinc-200 hover:border-black text-right transition-all group space-y-1 bg-white"
            >
              <span className="text-[10px] font-mono-tag text-zinc-500 uppercase font-semibold">NEXT IN SERIES</span>
              <div className="text-base font-serif-header font-bold text-zinc-900 group-hover:text-black flex items-center justify-end space-x-2">
                <span className="line-clamp-1">{nextEssay.title}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </div>
            </button>
          )}
        </div>

      </article>

    </div>
  );
};
