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
      const centerY = height / 2 + 30;

      ctx.clearRect(0, 0, width, height);

      // Pure White Background #FFFFFF
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      // Crisp Light Grey Grid Lines #E4E4E7
      ctx.strokeStyle = '#E4E4E7';
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

      // 1. TOP PROBABILISTIC "GREY GOO" CLOUD
      const gooTopY = 50;
      const gooNumParticles = 50;
      for (let i = 0; i < gooNumParticles; i++) {
        const px = (width * 0.15) + ((i * 41 + Math.sin(time + i) * 22) % (width * 0.7));
        const py = gooTopY + Math.sin(time * 0.6 + i * 0.3) * 25;
        const particleRadius = 1.5 + Math.sin(time + i) * 1.2;

        ctx.beginPath();
        ctx.arc(px, py, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? '#18181B' : '#71717A';
        ctx.fill();

        if (i % 4 === 0) {
          const px2 = px + Math.cos(time + i) * 38;
          const py2 = py + Math.sin(time + i) * 16;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px2, py2);
          ctx.strokeStyle = '#D4D4D8';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Label for Grey Goo Cloud
      ctx.font = '500 10px "JetBrains Mono"';
      ctx.fillStyle = '#71717A';
      ctx.textAlign = 'center';
      ctx.fillText('[ PROBABILISTIC GREY GOO / SPATIAL HALLUCINATION CLOUD ]', centerX, gooTopY - 20);

      // 2. LAYERED ARBORESCENT NETWORK TREE (Branching down to Biological Root Node)
      const rootX = centerX;
      const rootY = centerY - 10;

      const numMainTrunks = 7;
      for (let t = 0; t < numMainTrunks; t++) {
        const topX = (width * 0.2) + (t * (width * 0.6 / (numMainTrunks - 1)));
        const topY = gooTopY + 30;

        ctx.beginPath();
        ctx.moveTo(topX, topY);

        const ctrlX = (topX + rootX) / 2 + Math.sin(time + t) * 30;
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
        ctx.arc(sigX, sigY, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#09090B';
        ctx.fill();
      }

      // 3. ANCHORED SOMATIC ROOT NODE AT HOMUNCULUS BIOLOGICAL AXIS
      ctx.beginPath();
      ctx.arc(rootX, rootY, 12, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.strokeStyle = '#09090B';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(rootX, rootY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#09090B';
      ctx.fill();

      // Pulsing Root Node Ring
      ctx.beginPath();
      ctx.arc(rootX, rootY, 18 + Math.sin(time * 5) * 5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(9, 9, 11, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 4. TECHNOSOMATIC HOMUNCULUS RING LOGO CENTERPIECE
      const logoImg = logoImageRef.current;
      const logoSize = Math.min(width, height) * 0.62;

      ctx.save();
      ctx.translate(centerX, centerY);

      if (logoImg) {
        // Render literal Technosomatic Logo natively on white background
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
      ctx.font = '600 11px "JetBrains Mono"';
      ctx.fillStyle = '#09090B';
      ctx.textAlign = 'center';
      ctx.fillText('[ BIOLOGICAL HOMUNCULUS ROOT NODE ANCHOR ]', centerX, height - 16);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [activeNode]);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-white">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair mix-blend-multiply"
      />
    </div>
  );
};
