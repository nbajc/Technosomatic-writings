import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ESSAY_SERIES } from '../../../lib/essays-data';
import { Header } from '../../../components/Header';
import { InstitutionalFooter } from '../../../components/InstitutionalFooter';
import Entry01Page from '../01-the-invisible-board/page';
import Entry02Page from '../02-the-body-as-root-node/page';
import Entry03Page from '../03-escaping-grey-goo/page';
import Entry04Page from '../04-quantifying-duree/page';
import katex from 'katex';

interface EssayPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ESSAY_SERIES.map((essay) => ({
    slug: essay.slug,
  }));
}

export default function EssayPage({ params }: EssayPageProps) {
  if (params.slug === '01-the-invisible-board') {
    return <Entry01Page />;
  }

  if (params.slug === '02-the-body-as-root-node' || params.slug === '02-body-as-root-node') {
    return <Entry02Page />;
  }

  if (params.slug === '03-escaping-grey-goo') {
    return <Entry03Page />;
  }

  if (params.slug === '04-quantifying-duree' || params.slug === 'quantifying-duree') {
    return <Entry04Page />;
  }

  const essay = ESSAY_SERIES.find((e) => e.slug === params.slug);

  if (!essay) {
    notFound();
  }

  const currentIndex = ESSAY_SERIES.findIndex((e) => e.slug === essay.slug);
  const prevEssay = currentIndex > 0 ? ESSAY_SERIES[currentIndex - 1] : null;
  const nextEssay = currentIndex < ESSAY_SERIES.length - 1 ? ESSAY_SERIES[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white text-[#09090B] antialiased">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Centered Container */}
      <main className="max-w-3xl mx-auto px-6 py-12 bg-white">
        
        {/* Top Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-xs font-mono-tag text-zinc-500 hover:text-black transition-colors font-semibold flex items-center space-x-1"
          >
            <span>← BACK TO FRAMEWORK</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="border-b border-zinc-200 pb-6 mb-8 space-y-4">
          
          {/* Metadata Badge */}
          <div className="text-xs font-mono-tag tracking-widest text-zinc-900 font-bold uppercase">
            {essay.part} // {essay.tags.slice(0, 2).join(' // ')} // {essay.readTime}
          </div>

          {/* Large Serif Title */}
          <h1 className="font-serif-header text-4xl md:text-5xl font-light text-zinc-900 leading-tight">
            {essay.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-zinc-600 font-sans font-light leading-relaxed">
            {essay.subtitle}
          </p>

        </header>

        {/* Key Quote Callout (Stylized Blockquote) */}
        {essay.quoteCallout && (
          <blockquote className="border-l-2 border-sky-500 pl-6 my-8 italic text-zinc-700 text-xl font-serif-header">
            "{essay.quoteCallout}"
          </blockquote>
        )}

        {/* Body Paragraphs & Sections */}
        <div className="text-zinc-800 text-lg leading-relaxed font-sans space-y-6">
          {essay.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              
              <h2 className="font-serif-header text-2xl text-zinc-900 mt-12 mb-4 font-normal">
                {sec.sectionTitle}
              </h2>

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {/* KaTeX Math Formula Rendering */}
              {sec.latexFormula && (
                <div className="my-8 p-4 rounded bg-zinc-50 border border-zinc-200 text-center font-mono-tag text-zinc-900 overflow-x-auto text-sm">
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

        {/* Canonical Syndication Note */}
        <div className="mt-12 p-4 rounded bg-zinc-50 border border-zinc-200 text-xs font-mono-tag text-zinc-600 space-y-1">
          <p className="font-semibold text-zinc-900">CANONICAL SYNDICATION NOTE:</p>
          <p>
            Originally published as part of the A²I Technosomatic Framework by Natasha Bajc. Syndicated on Substack.
          </p>
          <a
            href={essay.substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-bold hover:text-sky-600 transition-colors inline-block pt-1"
          >
            Read original post on Substack ↗
          </a>
        </div>

        {/* Footer Navigation Bar */}
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 mt-10 border-t border-zinc-200 text-xs font-mono-tag">
          {prevEssay ? (
            <Link
              href={`/essays/${prevEssay.slug}`}
              className="p-4 rounded border border-zinc-200 hover:border-black text-left transition-colors group bg-white"
            >
              <span className="text-zinc-500 uppercase font-semibold block mb-1">← PREVIOUS ENTRY</span>
              <span className="font-serif-header text-base text-zinc-900 group-hover:text-black line-clamp-1">
                {prevEssay.title}
              </span>
            </Link>
          ) : (
            <Link
              href="/"
              className="p-4 rounded border border-zinc-200 hover:border-black text-left transition-colors group bg-white"
            >
              <span className="text-zinc-500 uppercase font-semibold block mb-1">← RETURN TO HOME</span>
              <span className="font-serif-header text-base text-zinc-900 group-hover:text-black">
                A²I Framework Overview
              </span>
            </Link>
          )}

          {nextEssay && (
            <Link
              href={`/essays/${nextEssay.slug}`}
              className="p-4 rounded border border-zinc-200 hover:border-black text-right transition-colors group bg-white"
            >
              <span className="text-zinc-500 uppercase font-semibold block mb-1">NEXT ENTRY →</span>
              <span className="font-serif-header text-base text-zinc-900 group-hover:text-black line-clamp-1">
                {nextEssay.part}: {nextEssay.title}
              </span>
            </Link>
          )}
        </nav>

      </main>

      {/* Institutional Footer */}
      <InstitutionalFooter />

    </div>
  );
}
