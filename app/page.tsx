'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { EssayGrid } from '../components/EssayGrid';
import { ReaderView } from '../components/ReaderView';
import { InstitutionalFooter } from '../components/InstitutionalFooter';
import { ESSAY_SERIES, Essay } from '../lib/essays-data';

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark');
    }
  };

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
    <main className={`min-h-screen bg-background text-primary selection:bg-cyan-500/30`}>
      
      {/* Navigation Header */}
      <Header
        currentTheme={theme}
        onToggleTheme={toggleTheme}
        onSelectSection={handleSelectSection}
      />

      {/* Main View Area */}
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
          <div id="hero">
            <HeroSection onExploreClick={scrollToEssays} />
          </div>

          <EssayGrid
            onSelectEssay={(essay) => {
              setSelectedEssay(essay);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </>
      )}

      {/* Footer & Institutional Distinction Note */}
      <InstitutionalFooter />

    </main>
  );
}
