'use client';

import React, { useState } from 'react';
import { ESSAY_SERIES, Essay } from '../lib/essays-data';
import { BookOpen, ExternalLink, Search, Clock, Tag, Sparkles } from 'lucide-react';

interface EssayGridProps {
  onSelectEssay: (essay: Essay) => void;
}

export const EssayGrid: React.FC<EssayGridProps> = ({ onSelectEssay }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const ALL_TAGS = ['ALL', 'Game Theory', 'Neurobiology', 'Phenomenology', 'Durée', 'BIM', 'Manifesto'];

  const filteredEssays = ESSAY_SERIES.filter((essay) => {
    const matchesSearch =
      essay.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      essay.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      essay.summary.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag =
      selectedTag === 'ALL' ||
      essay.tags.some((tag) => tag.toLowerCase().includes(selectedTag.toLowerCase()));

    return matchesSearch && matchesTag;
  });

  return (
    <section id="essays" className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono-code text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-widest uppercase">THE 7-PART A²I ESSAY SERIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-zinc-100">
            Theoretical Framework & Roadmap
          </h2>
          <p className="text-sm font-sans text-zinc-400 mt-2 max-w-2xl">
            A comprehensive investigation re-anchoring computational spatial intelligence to biological neurobiology, game theory, and phenomenological duration.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="relative min-w-[280px]">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search essays, tags, concepts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-cyan-400 text-xs font-mono-code text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Filter Tag Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono-code text-zinc-500 mr-2 flex items-center">
          <Tag className="w-3 h-3 mr-1" /> FILTER:
        </span>
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-xs font-mono-code transition-all ${
              selectedTag === tag
                ? 'bg-cyan-400 text-zinc-950 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Essay Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEssays.map((essay) => (
          <div
            key={essay.id}
            className="group relative rounded-xl glass-panel p-6 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]"
          >
            
            <div className="space-y-4">
              {/* Card Header Info */}
              <div className="flex items-center justify-between text-xs font-mono-code text-zinc-400 border-b border-zinc-800/80 pb-3">
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-cyan-400 font-semibold">
                  {essay.part}
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-zinc-500" />
                  <span>{essay.readTime}</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 
                  onClick={() => onSelectEssay(essay)}
                  className="text-lg font-cinzel font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors cursor-pointer leading-snug"
                >
                  {essay.title}
                </h3>
                <p className="text-xs font-sans text-zinc-400 mt-2 font-light line-clamp-2">
                  {essay.subtitle}
                </p>
              </div>

              {/* Summary snippet */}
              <p className="text-xs text-zinc-300/80 font-sans leading-relaxed line-clamp-3 bg-zinc-950/40 p-3 rounded border border-zinc-900">
                "{essay.summary}"
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {essay.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
              <button
                onClick={() => onSelectEssay(essay)}
                className="flex items-center space-x-2 text-xs font-mono-code font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>READ ON-SITE</span>
              </button>

              <a
                href={essay.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Read on Substack"
                className="p-1.5 rounded border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
