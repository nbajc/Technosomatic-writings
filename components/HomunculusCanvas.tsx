'use client';

import React, { useRef, useEffect } from 'react';

interface HomunculusCanvasProps {
  activeNode?: string | null;
}

export const HomunculusCanvas: React.FC<HomunculusCanvasProps> = ({
  activeNode,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logoImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Load Technosomatic Logo image asset
    const img = new Image();
    img.src = '/technosomatic-logo.png';
    img.onload = () => {
      logoImageRef.current = img;
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      time += 0.008;
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2 + 30; // Slightly offset downward to give room for grey goo cloud at top

      ctx.clearRect(0, 0, width, height);

      // Deep Obsidian Background #0A0A0B
      ctx.fillStyle = '#0A0A0B';
      ctx.fillRect(0, 0, width, height);

      // Crisp 1px Grid Lines in #27272A
      ctx.strokeStyle = '#27272A';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 1. TOP PROBABILISTIC "GREY GOO" CLOUD (Generative Spatial Hallucination Cloud)
      const gooTopY = 60;
      const gooNumParticles = 45;
      for (let i = 0; i < gooNumParticles; i++) {
        const px = (width * 0.2) + ((i * 37 + Math.sin(time + i) * 20) % (width * 0.6));
        const py = gooTopY + Math.sin(time * 0.5 + i * 0.4) * 25;
        const particleRadius = 1.5 + Math.sin(time + i) * 1;

        ctx.beginPath();
        ctx.arc(px, py, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? 'rgba(161, 161, 170, 0.4)' : 'rgba(56, 189, 248, 0.3)';
        ctx.fill();

        // Diffuse fuzzy connections between top grey goo particles
        if (i % 3 === 0) {
          const px2 = px + Math.cos(time + i) * 35;
          const py2 = py + Math.sin(time + i) * 15;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px2, py2);
          ctx.strokeStyle = 'rgba(161, 161, 170, 0.15)';
          ctx.lineWidth = 0.8;
          ctx.setLineDash([2, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // Label for Grey Goo Cloud
      ctx.font = '500 10px "JetBrains Mono"';
      ctx.fillStyle = 'rgba(161, 161, 170, 0.6)';
      ctx.textAlign = 'center';
      ctx.fillText('[ GENERATIVE GREY GOO / PROBABILISTIC CLOUD ]', centerX, gooTopY - 20);

      // 2. LAYERED ARBORESCENT NETWORK TREE (Branching from top cloud down to Root Node)
      const rootX = centerX;
      const rootY = centerY - 10; // Root node anchored at biological axis of Homunculus Ring

      const numMainTrunks = 5;
      for (let t = 0; t < numMainTrunks; t++) {
        const topX = (width * 0.25) + (t * (width * 0.5 / (numMainTrunks - 1)));
        const topY = gooTopY + 30;

        // Draw Arborescent Branch connecting top cloud to root node
        ctx.beginPath();
        ctx.moveTo(topX, topY);

        const ctrlX = (topX + rootX) / 2 + Math.sin(time + t) * 30;
        const ctrlY = (topY + rootY) / 2;

        ctx.quadraticCurveTo(ctrlX, ctrlY, rootX, rootY);
        ctx.strokeStyle = t === 2 || activeNode ? '#38BDF8' : '#27272A';
        ctx.lineWidth = t === 2 ? 2 : 1;
        ctx.stroke();

        // Pulsing signals traveling DOWN the tree to the Root Node
        const signalProgress = (time * 0.6 + t * 0.2) % 1;
        const sigX = (1 - signalProgress) * (1 - signalProgress) * topX + 2 * (1 - signalProgress) * signalProgress * ctrlX + signalProgress * signalProgress * rootX;
        const sigY = (1 - signalProgress) * (1 - signalProgress) * topY + 2 * (1 - signalProgress) * signalProgress * ctrlY + signalProgress * signalProgress * rootY;

        ctx.beginPath();
        ctx.arc(sigX, sigY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#38BDF8';
        ctx.fill();
      }

      // 3. ANCHORED SOMATIC ROOT NODE AT HOMUNCULUS BIOLOGICAL AXIS
      ctx.beginPath();
      ctx.arc(rootX, rootY, 12, 0, Math.PI * 2);
      ctx.fillStyle = '#0A0A0B';
      ctx.fill();
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(rootX, rootY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#38BDF8';
      ctx.fill();

      // Pulsing Root Node Pulse
      ctx.beginPath();
      ctx.arc(rootX, rootY, 18 + Math.sin(time * 5) * 5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 4. TECHNOSOMATIC HOMUNCULUS RING LOGO CENTERPIECE
      const logoImg = logoImageRef.current;
      const logoSize = Math.min(width, height) * 0.58;

      ctx.save();
      ctx.translate(centerX, centerY);

      if (logoImg) {
        // Render literal Technosomatic Logo asset with high-contrast invert filter
        ctx.globalAlpha = 0.95;
        ctx.drawImage(logoImg, -logoSize / 2, -logoSize / 2, logoSize, logoSize);
      }

      // Rotating vector alignment ring around Homunculus Ring Logo
      ctx.rotate(time * 0.04);
      ctx.beginPath();
      ctx.arc(0, 0, logoSize * 0.52, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 14]);
      ctx.stroke();

      ctx.restore();

      // Label at bottom
      ctx.font = '600 11px "JetBrains Mono"';
      ctx.fillStyle = '#38BDF8';
      ctx.textAlign = 'center';
      ctx.fillText('[ BIOLOGICAL HOMUNCULUS ROOT NODE ANCHOR ]', centerX, height - 20);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [activeNode]);

  return (
    <div className="relative w-full h-[620px] flex items-center justify-center overflow-hidden rounded-xl border border-[#27272A] bg-[#0A0A0B]">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
      />
    </div>
  );
};
