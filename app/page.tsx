'use client';

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import EssayGrid from '../components/EssayGrid';
import InstitutionalFooter from '../components/InstitutionalFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      {/* Navigation Header */}
      <Header />

      {/* Main Centered 12-Column Architectural Grid Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
        <HeroSection />
        <EssayGrid />
        <InstitutionalFooter />
      </main>
    </div>
  );
}
