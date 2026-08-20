import 'katex/dist/katex.min.css';
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Technosomatic Architecture & A²I | Natasha Bajc',
  description: 'Re-inserting the embodied human nervous system into computational spatial intelligence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white text-zinc-900 antialiased">
      <body className="min-h-screen bg-white text-zinc-900 selection:bg-sky-100 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
