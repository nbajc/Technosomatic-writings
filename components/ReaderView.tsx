'use client';

import React, { useState, useEffect } from 'react';
import { Essay, ESSAY_SERIES } from '../lib/essays-data';
import { ambientSynth } from '../lib/audio-ambient';
import {
  ArrowLeft,
  ArrowRight,
  Volume2,
  VolumeX,
  Type,
  Maximize2,
  Minimize2,
  ExternalLink,
  Share2,
  Check,
  Sparkles,
  BookOpen
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
  const [focusMode, setFocusMode] = useState(false);
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans' | 'mono'>('serif');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedQuote, setCopiedQuote] = useState(false);

  // Track scroll progress
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

  // Find previous / next essay in series
  const currentIndex = ESSAY_SERIES.findIndex((e) => e.id === essay.id);
  const prevEssay = currentIndex > 0 ? ESSAY_SERIES[currentIndex - 1] : null;
  const nextEssay = currentIndex < ESSAY_SERIES.length - 1 ? ESSAY_SERIES[currentIndex + 1] : null;

  const getFontClass = () => {
    switch (fontFamily) {
      case 'sans':
        return 'font-sans';
      case 'mono':
        return 'font-mono-code';
      default:
        return 'font-cinzel';
    }
  };

  const getSizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-sm leading-relaxed';
      case 'lg':
        return 'text-lg leading-loose';
      case 'xl':
        return 'text-xl leading-loose';
      default:
        return 'text-base leading-relaxed';
    }
  };

  return (
    <div className={`relative w-full min-h-screen ${focusMode ? 'bg-[#060608]' : ''} transition-colors duration-500`}>
      
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-amber-400 to-cyan-300 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Control Toolbar */}
      <div className="sticky top-4 z-40 max-w-4xl mx-auto px-4 mb-8">
        <div className="glass-panel p-2.5 rounded-full flex items-center justify-between shadow-2xl border border-zinc-800">
          
          <button
            onClick={onBack}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-mono-code text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ESSAY CATALOG</span>
          </button>

          {/* Typography & Audio Customizer */}
          <div className="flex items-center space-x-2">
            
            {/* Font Family Controls */}
            <div className="hidden sm:flex items-center bg-zinc-950 p-1 rounded-full border border-zinc-800 text-xs font-mono-code">
              <button
                onClick={() => setFontFamily('serif')}
                className={`px-2.5 py-1 rounded-full ${fontFamily === 'serif' ? 'bg-cyan-400 text-zinc-950 font-semibold' : 'text-zinc-400'}`}
              >
                Serif
              </button>
              <button
                onClick={() => setFontFamily('sans')}
                className={`px-2.5 py-1 rounded-full ${fontFamily === 'sans' ? 'bg-cyan-400 text-zinc-950 font-semibold' : 'text-zinc-400'}`}
              >
                Sans
              </button>
              <button
                onClick={() => setFontFamily('mono')}
                className={`px-2.5 py-1 rounded-full ${fontFamily === 'mono' ? 'bg-cyan-400 text-zinc-950 font-semibold' : 'text-zinc-400'}`}
              >
                Mono
              </button>
            </div>

            {/* Ambient Soundscape Synth Toggle */}
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full border transition-all ${
                isPlayingAudio
                  ? 'bg-amber-400/20 border-amber-400 text-amber-400 animate-pulse'
                  : 'border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
              title="Toggle Web Audio Ambient Reading Synth"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Focus Mode Toggle */}
            <button
              onClick={() => setFocusMode(!focusMode)}
              className="p-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
              title="Toggle Distraction-Free Focus Mode"
            >
              {focusMode ? <Minimize2 className="w-4 h-4 text-cyan-400" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Share / Copy */}
            <button
              onClick={handleCopyShare}
              className="p-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-cyan-400 transition-colors"
              title="Copy Essay Link"
            >
              {copiedQuote ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

          </div>

        </div>
      </div>

      {/* Main Long-Form Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        
        {/* Essay Header Info */}
        <header className="space-y-6 border-b border-zinc-800 pb-10">
          
          <div className="flex items-center space-x-3 text-xs font-mono-code">
            <span className="px-2.5 py-1 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 font-semibold">
              {essay.part}
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">{essay.readTime}</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">{essay.date}</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl ${getFontClass()} font-bold text-zinc-100 leading-tight tracking-tight`}>
            {essay.title}
          </h1>

          <p className="text-lg font-sans text-zinc-300 font-light leading-relaxed">
            {essay.subtitle}
          </p>

          {/* Canonical Substack Syndication Badge */}
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-amber-500/30 flex items-center justify-between text-xs font-mono-code">
            <div className="flex items-center space-x-2 text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>SYNDICATED / CANONICAL ON SUBSTACK</span>
            </div>
            <a
              href={essay.substackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-zinc-300 hover:text-amber-400 transition-colors"
            >
              <span>ORIGINAL POST</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </header>

        {/* Essay Sections */}
        <div className={`space-y-10 ${getSizeClass()} text-zinc-300 font-light`}>
          {essay.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              
              <h2 className="text-xl font-cinzel font-bold text-zinc-100 border-l-2 border-cyan-400 pl-4 py-0.5">
                {sec.sectionTitle}
              </h2>

              <p className="leading-relaxed">
                {sec.text}
              </p>

              {/* Highlight Quote Callout */}
              {sec.quote && (
                <blockquote className="my-6 p-6 rounded-r-xl bg-zinc-950 border-l-4 border-amber-400 italic font-serif text-lg text-zinc-200">
                  "{sec.quote}"
                </blockquote>
              )}

              {/* KaTeX Math Formula Rendering */}
              {sec.latexFormula && (
                <div className="my-6 p-4 rounded-lg bg-zinc-950/90 border border-zinc-800 text-center font-mono-code text-cyan-300 overflow-x-auto">
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

        {/* Somatic Node Tag Footer */}
        <div className="pt-8 border-t border-zinc-800 space-y-3">
          <span className="text-xs font-mono-code text-zinc-500 uppercase tracking-widest block">
            CONNECTED SOMATIC HOMUNCULUS NODES:
          </span>
          <div className="flex flex-wrap gap-2">
            {essay.somaticNodes.map((node) => (
              <span
                key={node}
                className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono-code text-cyan-400"
              >
                ⊙ {node}
              </span>
            ))}
          </div>
        </div>

        {/* Previous & Next Essay Pagination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 border-t border-zinc-800">
          {prevEssay ? (
            <button
              onClick={() => onSelectEssay(prevEssay)}
              className="p-4 rounded-xl glass-panel border border-zinc-800 hover:border-cyan-400 text-left transition-all group space-y-1"
            >
              <span className="text-[10px] font-mono-code text-zinc-500 uppercase">PREVIOUS IN SERIES</span>
              <div className="text-sm font-cinzel font-bold text-zinc-200 group-hover:text-cyan-400 flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4 shrink-0" />
                <span className="line-clamp-1">{prevEssay.title}</span>
              </div>
            </button>
          ) : <div />}

          {nextEssay && (
            <button
              onClick={() => onSelectEssay(nextEssay)}
              className="p-4 rounded-xl glass-panel border border-zinc-800 hover:border-cyan-400 text-right transition-all group space-y-1"
            >
              <span className="text-[10px] font-mono-code text-zinc-500 uppercase">NEXT IN SERIES</span>
              <div className="text-sm font-cinzel font-bold text-zinc-200 group-hover:text-cyan-400 flex items-center justify-end space-x-2">
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
