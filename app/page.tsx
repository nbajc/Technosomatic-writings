'use client';

import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { EssayGrid } from '../components/EssayGrid';
import { InstitutionalFooter } from '../components/InstitutionalFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      <Header />
      <HeroSection />
      <EssayGrid />
      <InstitutionalFooter />
    </main>
  );
}
