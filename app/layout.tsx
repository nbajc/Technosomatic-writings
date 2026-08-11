import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Technosomatic Architecture & A²I Sovereign Web Hub | Natasha Bajc',
  description:
    'Primary sovereign web hub hosting the A²I (Architectural Artificial Intelligence) theoretical framework, Technosomatic Manifesto, and 7-part essay series by architect Natasha Bajc.',
  openGraph: {
    title: 'Technosomatic Architecture & A²I | Natasha Bajc',
    description: 'Re-inserting the embodied human nervous system into computational spatial intelligence.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#0A0A0B] text-[#FAFAFA]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0B] text-[#FAFAFA] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
