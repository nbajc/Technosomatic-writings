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
      const parent = canvas.parentElement;
      if (parent) {
        // Enforce strict 1:1 square dimensions to prevent oval distortion
        const size = Math.min(parent.clientWidth, 480);
        const dpr = window.devicePixelRatio || 1;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      time += 0.008;
      const size = canvas.width;
      const centerX = size / 2;
      const centerY = size / 2;

      ctx.clearRect(0, 0, size, size);

      // Pure White Background #FFFFFF
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, size, size);

      // Crisp Light Grey Grid Lines #E4E4E7
      ctx.strokeStyle = '#E4E4E7';
      ctx.lineWidth = 1;
      const gridSize = size / 10;
      for (let x = 0; x < size; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, size);
        ctx.stroke();
      }
      for (let y = 0; y < size; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(size, y);
        ctx.stroke();
      }

      // 1. TOP PROBABILISTIC "GREY GOO" CLOUD
      const gooTopY = size * 0.08;
      const gooNumParticles = 40;
      for (let i = 0; i < gooNumParticles; i++) {
        const px = (size * 0.15) + ((i * 37 + Math.sin(time + i) * 18) % (size * 0.7));
        const py = gooTopY + Math.sin(time * 0.6 + i * 0.3) * 20;
        const particleRadius = (1.2 + Math.sin(time + i) * 1) * (size / 480);

        ctx.beginPath();
        ctx.arc(px, py, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? '#18181B' : '#71717A';
        ctx.fill();

        if (i % 4 === 0) {
          const px2 = px + Math.cos(time + i) * 30;
          const py2 = py + Math.sin(time + i) * 14;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px2, py2);
          ctx.strokeStyle = '#D4D4D8';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Label for Grey Goo Cloud
      ctx.font = `500 ${Math.max(9, size * 0.02)}px "JetBrains Mono"`;
      ctx.fillStyle = '#71717A';
      ctx.textAlign = 'center';
      ctx.fillText('[ GREY GOO / PROBABILISTIC CLOUD ]', centerX, gooTopY - 14);

      // 2. LAYERED ARBORESCENT NETWORK TREE (Branching down to Biological Root Node)
      const rootX = centerX;
      const rootY = centerY - (size * 0.02);

      const numMainTrunks = 7;
      for (let t = 0; t < numMainTrunks; t++) {
        const topX = (size * 0.2) + (t * (size * 0.6 / (numMainTrunks - 1)));
        const topY = gooTopY + 25;

        ctx.beginPath();
        ctx.moveTo(topX, topY);

        const ctrlX = (topX + rootX) / 2 + Math.sin(time + t) * 25;
        const ctrlY = (topY + rootY) / 2;

        ctx.quadraticCurveTo(ctrlX, ctrlY, rootX, rootY);
        ctx.strokeStyle = (t === 3 || activeNode) ? '#09090B' : '#D4D4D8';
        ctx.lineWidth = (t === 3 || activeNode) ? 2 : 1;
        ctx.stroke();

        // Pulsing signals traveling DOWN the tree to the Root Node
        const signalProgress = (time * 0.55 + t * 0.15) % 1;
        const sigX = (1 - signalProgress) * (1 - signalProgress) * topX + 2 * (1 - signalProgress) * signalProgress * ctrlX + signalProgress * signalProgress * rootX;
        const sigY = (1 - signalProgress) * (1 - signalProgress) * topY + 2 * (1 - signalProgress) * signalProgress * ctrlY + signalProgress * signalProgress * rootY;

        ctx.beginPath();
        ctx.arc(sigX, sigY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#09090B';
        ctx.fill();
      }

      // 3. ANCHORED SOMATIC ROOT NODE AT HOMUNCULUS BIOLOGICAL AXIS
      ctx.beginPath();
      ctx.arc(rootX, rootY, size * 0.024, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.strokeStyle = '#09090B';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(rootX, rootY, size * 0.01, 0, Math.PI * 2);
      ctx.fillStyle = '#09090B';
      ctx.fill();

      // Pulsing Root Node Ring
      ctx.beginPath();
      ctx.arc(rootX, rootY, size * 0.035 + Math.sin(time * 5) * 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(9, 9, 11, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 4. TECHNOSOMATIC HOMUNCULUS RING LOGO CENTERPIECE (Perfect 1:1 Circle)
      const logoImg = logoImageRef.current;
      const logoSize = size * 0.72;

      ctx.save();
      ctx.translate(centerX, centerY);

      if (logoImg) {
        // Render literal Technosomatic Logo natively on white background without oval warping
        ctx.globalAlpha = 1.0;
        ctx.drawImage(logoImg, -logoSize / 2, -logoSize / 2, logoSize, logoSize);
      }

      // Rotating vector alignment ring around Homunculus Ring Logo
      ctx.rotate(time * 0.04);
      ctx.beginPath();
      ctx.arc(0, 0, logoSize * 0.52, 0, Math.PI * 2);
      ctx.strokeStyle = '#D4D4D8';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 16]);
      ctx.stroke();

      ctx.restore();

      // Label at bottom
      ctx.font = `600 ${Math.max(9, size * 0.022)}px "JetBrains Mono"`;
      ctx.fillStyle = '#09090B';
      ctx.textAlign = 'center';
      ctx.fillText('[ BIOLOGICAL HOMUNCULUS ROOT NODE ANCHOR ]', centerX, size - 12);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [activeNode]);

  return (
    <div className="relative w-full h-auto object-contain aspect-square max-w-[480px] mx-auto block flex items-center justify-center overflow-hidden bg-white">
      <canvas
        ref={canvasRef}
        className="w-full h-auto object-contain aspect-square max-w-[480px] mx-auto block cursor-crosshair mix-blend-multiply"
      />
    </div>
  );
};
