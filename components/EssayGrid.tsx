'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ESSAY_SERIES, Essay } from '../lib/essays-data';

interface EssayGridProps {
  onSelectEssay?: (essay: Essay) => void;
}

export const EssayGrid: React.FC<EssayGridProps> = ({ onSelectEssay }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const ALL_TAGS = ['ALL', 'GAME THEORY', 'NEUROBIOLOGY', 'PHENOMENOLOGY', 'DURÉE', 'BIM', 'MANIFESTO'];

  const filteredEssays = ESSAY_SERIES.filter((essay) => {
    const matchesSearch =
      essay.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      essay.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      essay.summary.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag =
      selectedTag === 'ALL' ||
      essay.tags.some((tag) => tag.toUpperCase().includes(selectedTag.toUpperCase()));

    return matchesSearch && matchesTag;
  });

  return (
    <section id="essays" className="w-full py-16 space-y-8 border-b border-zinc-200 bg-white">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-6">
        <div>
          <div className="text-xs font-mono-tag text-zinc-900 tracking-widest uppercase mb-1 font-bold">
            THE 7-PART A²I ESSAY SERIES
          </div>
          <h2 className="text-3xl md:text-4xl font-serif-header font-bold text-[#09090B]">
            Theoretical Framework & Roadmap
          </h2>
          <p className="text-sm font-sans text-zinc-600 mt-1 max-w-2xl font-light">
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
            className="w-full px-3 py-2 rounded-md bg-white border border-zinc-300 text-xs font-mono-tag text-[#09090B] placeholder-zinc-500 focus:border-black focus:outline-none transition-colors shadow-xs"
          />
        </div>
      </div>

      {/* Filter Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono-tag text-zinc-500 mr-2 font-semibold">FILTER:</span>
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-md text-xs font-mono-tag transition-all ${
              selectedTag === tag
                ? 'bg-[#000000] text-[#FFFFFF] font-semibold shadow-xs'
                : 'bg-white border border-zinc-300 text-zinc-800 hover:border-black'
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
            className="border border-zinc-200 bg-white hover:border-zinc-400 p-6 rounded-lg transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
          >
            
            <div className="space-y-4">
              {/* Metadata Badges */}
              <div className="flex items-center justify-between text-xs font-mono-tag text-zinc-600 border-b border-zinc-200 pb-3 font-medium">
                <span className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-900 font-bold">
                  {essay.part}
                </span>
                <span className="text-zinc-500">{essay.readTime}</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <Link 
                  href={`/essays/${essay.slug}`}
                  className="text-2xl font-serif-header font-bold text-[#09090B] group-hover:text-black transition-colors cursor-pointer leading-snug block"
                >
                  {essay.title}
                </Link>
                <p className="text-xs font-sans text-zinc-600 mt-2 font-light line-clamp-2">
                  {essay.subtitle}
                </p>
              </div>

              {/* Summary */}
              <p className="text-xs text-zinc-700 font-sans leading-relaxed line-clamp-3 bg-zinc-50 p-3 rounded border border-zinc-200">
                "{essay.summary}"
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {essay.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono-tag px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 border border-zinc-200 font-medium"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Actions */}
            <div className="pt-6 mt-6 border-t border-zinc-200 flex items-center justify-between">
              <Link
                href={`/essays/${essay.slug}`}
                className="text-xs font-mono-tag font-bold text-[#09090B] hover:underline flex items-center space-x-1"
              >
                <span>READ ON-SITE →</span>
              </Link>

              <a
                href={essay.substackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-tag text-zinc-500 hover:text-black transition-colors"
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
