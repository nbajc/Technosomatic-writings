'use client';

import React, { useState } from 'react';
import { ESSAY_SERIES, Essay } from '../lib/essays-data';

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
    <section id="essays" className="w-full py-16 space-y-8 border-b border-zinc-800/60">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800/80 pb-6">
        <div>
          <div className="text-xs font-mono-tag text-amber-400 tracking-widest uppercase mb-1">
            THE 7-PART A²I ESSAY SERIES
          </div>
          <h2 className="text-3xl md:text-4xl font-serif-header font-light text-[#FAFAFA]">
            Theoretical Framework & Roadmap
          </h2>
          <p className="text-sm font-sans text-zinc-400 mt-1 max-w-2xl font-light">
            A comprehensive investigation re-anchoring computational spatial intelligence to biological neurobiology and game theory.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[260px]">
          <input
            type="text"
            placeholder="Search concepts, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 rounded bg-zinc-900/80 border border-zinc-800 text-xs font-mono-tag text-[#FAFAFA] placeholder-zinc-500 focus:border-sky-400 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Filter Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono-tag text-zinc-500 mr-2">FILTER:</span>
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded text-xs font-mono-tag transition-all ${
              selectedTag === tag
                ? 'bg-sky-400 text-zinc-950 font-semibold shadow-sm'
                : 'bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-[#FAFAFA] hover:border-zinc-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Structured Editorial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEssays.map((essay) => (
          <div
            key={essay.id}
            className="border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/80 p-6 rounded-lg transition-all flex flex-col justify-between group"
          >
            
            <div className="space-y-4">
              {/* Metadata Badges */}
              <div className="flex items-center justify-between text-xs font-mono-tag text-zinc-400 border-b border-zinc-800/60 pb-3">
                <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-sky-400 font-semibold">
                  {essay.part}
                </span>
                <span className="text-zinc-400">{essay.readTime}</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 
                  onClick={() => onSelectEssay(essay)}
                  className="text-xl font-serif-header text-[#FAFAFA] group-hover:text-sky-400 transition-colors cursor-pointer leading-snug"
                >
                  {essay.title}
                </h3>
                <p className="text-xs font-sans text-zinc-400 mt-2 font-light line-clamp-2">
                  {essay.subtitle}
                </p>
              </div>

              {/* Summary */}
              <p className="text-xs text-zinc-300 font-sans leading-relaxed line-clamp-3 bg-zinc-950/60 p-3 rounded border border-zinc-900">
                "{essay.summary}"
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {essay.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono-tag px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800/80"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Actions */}
            <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center justify-between">
              <button
                onClick={() => onSelectEssay(essay)}
                className="text-xs font-mono-tag font-semibold text-sky-400 hover:text-sky-300 transition-colors flex items-center space-x-1"
              >
                <span>Read On-Site →</span>
              </button>

              <a
                href={essay.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-tag text-zinc-500 hover:text-amber-400 transition-colors"
              >
                Substack ↗
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
