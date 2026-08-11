'use client';

import React, { useRef, useEffect, useState } from 'react';

interface HomunculusCanvasProps {
  activeNode?: string | null;
}

export const HomunculusCanvas: React.FC<HomunculusCanvasProps> = ({
  activeNode,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logoImageRef = useRef<HTMLImageElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) * (window.devicePixelRatio || 1),
        y: (e.clientY - rect.top) * (window.devicePixelRatio || 1),
      });
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      time += 0.008;
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2 + 35;

      ctx.clearRect(0, 0, width, height);

      // Deep Obsidian Background #060608
      ctx.fillStyle = '#060608';
      ctx.fillRect(0, 0, width, height);

      // Dynamic Mouse Radial Lighting Glow
      if (mousePos.x > 0 && mousePos.y > 0) {
        const mouseGlow = ctx.createRadialGradient(mousePos.x, mousePos.y, 10, mousePos.x, mousePos.y, 180);
        mouseGlow.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
        mouseGlow.addColorStop(1, 'rgba(6, 6, 8, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // Crisp 1px Architectural Grid Lines in #27272A
      ctx.strokeStyle = '#27272A';
      ctx.lineWidth = 1;
      const gridSize = 44;
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
      const gooTopY = 55;
      const gooNumParticles = 55;
      for (let i = 0; i < gooNumParticles; i++) {
        const px = (width * 0.15) + ((i * 43 + Math.sin(time + i) * 24) % (width * 0.7));
        const py = gooTopY + Math.sin(time * 0.6 + i * 0.3) * 28;
        const particleRadius = 1.5 + Math.sin(time + i) * 1.2;

        ctx.beginPath();
        ctx.arc(px, py, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? 'rgba(56, 189, 248, 0.45)' : 'rgba(161, 161, 170, 0.35)';
        ctx.fill();

        // Diffuse fuzzy connections between top grey goo particles
        if (i % 4 === 0) {
          const px2 = px + Math.cos(time + i) * 40;
          const py2 = py + Math.sin(time + i) * 18;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px2, py2);
          ctx.strokeStyle = 'rgba(161, 161, 170, 0.15)';
          ctx.lineWidth = 0.8;
          ctx.setLineDash([2, 5]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // Label for Grey Goo Cloud
      ctx.font = '500 10px "JetBrains Mono"';
      ctx.fillStyle = 'rgba(161, 161, 170, 0.65)';
      ctx.textAlign = 'center';
      ctx.fillText('[ PROBABILISTIC GREY GOO / SPATIAL HALLUCINATION CLOUD ]', centerX, gooTopY - 22);

      // 2. LAYERED ARBORESCENT NETWORK TREE (Branching down to Biological Root Node)
      const rootX = centerX;
      const rootY = centerY - 12;

      const numMainTrunks = 7;
      for (let t = 0; t < numMainTrunks; t++) {
        const topX = (width * 0.2) + (t * (width * 0.6 / (numMainTrunks - 1)));
        const topY = gooTopY + 32;

        // Draw Arborescent Branch connecting top cloud to root node
        ctx.beginPath();
        ctx.moveTo(topX, topY);

        const ctrlX = (topX + rootX) / 2 + Math.sin(time + t) * 35;
        const ctrlY = (topY + rootY) / 2;

        ctx.quadraticCurveTo(ctrlX, ctrlY, rootX, rootY);
        ctx.strokeStyle = (t === 3 || activeNode) ? '#38BDF8' : 'rgba(39, 39, 42, 0.9)';
        ctx.lineWidth = (t === 3 || activeNode) ? 2 : 1;
        ctx.stroke();

        // Pulsing signals traveling DOWN the tree to the Root Node
        const signalProgress = (time * 0.55 + t * 0.15) % 1;
        const sigX = (1 - signalProgress) * (1 - signalProgress) * topX + 2 * (1 - signalProgress) * signalProgress * ctrlX + signalProgress * signalProgress * rootX;
        const sigY = (1 - signalProgress) * (1 - signalProgress) * topY + 2 * (1 - signalProgress) * signalProgress * ctrlY + signalProgress * signalProgress * rootY;

        ctx.beginPath();
        ctx.arc(sigX, sigY, 3, 0, Math.PI * 2);
        ctx.fillStyle = (t % 2 === 0) ? '#38BDF8' : '#F59E0B';
        ctx.fill();
      }

      // 3. ANCHORED SOMATIC ROOT NODE AT HOMUNCULUS BIOLOGICAL AXIS
      ctx.beginPath();
      ctx.arc(rootX, rootY, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#060608';
      ctx.fill();
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(rootX, rootY, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#38BDF8';
      ctx.fill();

      // Pulsing Root Node Pulse
      ctx.beginPath();
      ctx.arc(rootX, rootY, 20 + Math.sin(time * 5) * 6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 4. TECHNOSOMATIC HOMUNCULUS RING LOGO CENTERPIECE
      const logoImg = logoImageRef.current;
      const logoSize = Math.min(width, height) * 0.60;

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
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 16]);
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
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeNode]);

  return (
    <div className="relative w-full h-[620px] flex items-center justify-center overflow-hidden rounded-xl border border-[#27272A] bg-[#060608]">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
      />
    </div>
  );
};
