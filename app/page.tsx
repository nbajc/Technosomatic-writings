'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { EssayGrid } from '../components/EssayGrid';
import { ReaderView } from '../components/ReaderView';
import { InstitutionalFooter } from '../components/InstitutionalFooter';
import { ESSAY_SERIES, Essay } from '../lib/essays-data';

export default function Home() {
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);

  const handleSelectSection = (sectionId: string) => {
    if (selectedEssay) {
      setSelectedEssay(null);
    }
    setTimeout(() => {
      if (sectionId === 'manifesto') {
        const manifesto = ESSAY_SERIES.find((e) => e.id === 'part-7');
        if (manifesto) {
          setSelectedEssay(manifesto);
        }
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  const scrollToEssays = () => {
    const el = document.getElementById('essays');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#09090B] antialiased">
      
      {/* Floating Navigation Header */}
      <Header onSelectSection={handleSelectSection} />

      {/* Main Centered Fluid Responsive Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        {selectedEssay ? (
          <ReaderView
            essay={selectedEssay}
            onBack={() => setSelectedEssay(null)}
            onSelectEssay={(essay) => {
              setSelectedEssay(essay);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <>
            <HeroSection onExploreClick={scrollToEssays} />

            <EssayGrid
              onSelectEssay={(essay) => {
                setSelectedEssay(essay);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {/* Footer */}
        <InstitutionalFooter />
      </main>

    </div>
  );
}
