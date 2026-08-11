'use client';

import React, { useRef, useEffect } from 'react';

interface HomunculusCanvasProps {
  activeNode?: string | null;
  onHoverNode?: (nodeName: string | null) => void;
}

interface SomaticNode {
  name: string;
  penfieldLabel: string; // German/English Penfield Cortical Homunculus anatomical label
  angle: number;
  radiusOffset: number;
  category: 'sensory' | 'motor';
}

const PENFIELD_HOMUNCULUS_NODES: SomaticNode[] = [
  { name: 'Kopf', penfieldLabel: 'Kopf (Head)', angle: 0.15, radiusOffset: 0.86, category: 'sensory' },
  { name: 'Auge', penfieldLabel: 'Auge (Eye)', angle: 0.40, radiusOffset: 0.84, category: 'sensory' },
  { name: 'Nase', penfieldLabel: 'Nase (Nose)', angle: 0.65, radiusOffset: 0.85, category: 'sensory' },
  { name: 'Gesicht', penfieldLabel: 'Gesicht (Face)', angle: 0.90, radiusOffset: 0.87, category: 'sensory' },
  { name: 'Lippen', penfieldLabel: 'Lippen (Lips)', angle: 1.15, radiusOffset: 0.89, category: 'sensory' },
  { name: 'Zunge', penfieldLabel: 'Zunge (Tongue)', angle: 1.40, radiusOffset: 0.88, category: 'sensory' },
  { name: 'Kiefer', penfieldLabel: 'Kiefer / Zähne', angle: 1.65, radiusOffset: 0.85, category: 'sensory' },
  { name: 'Schlucken', penfieldLabel: 'Schlucken (Swallow)', angle: 1.90, radiusOffset: 0.83, category: 'sensory' },
  { name: 'Daumen', penfieldLabel: 'Daumen (Thumb)', angle: 2.20, radiusOffset: 0.92, category: 'motor' },
  { name: 'Finger', penfieldLabel: 'Finger (Digits 1-5)', angle: 2.45, radiusOffset: 0.94, category: 'motor' },
  { name: 'Hand', penfieldLabel: 'Hand (Motor Gyrus)', angle: 2.70, radiusOffset: 0.91, category: 'motor' },
  { name: 'Handgelenk', penfieldLabel: 'Handgelenk (Wrist)', angle: 2.95, radiusOffset: 0.87, category: 'motor' },
  { name: 'Ellerbogen', penfieldLabel: 'Ellerbogen (Elbow)', angle: 3.20, radiusOffset: 0.85, category: 'motor' },
  { name: 'Schulter', penfieldLabel: 'Schulter (Shoulder)', angle: 3.45, radiusOffset: 0.86, category: 'motor' },
  { name: 'Rumpf', penfieldLabel: 'Rumpf (Trunk / Spine)', angle: 3.70, radiusOffset: 0.88, category: 'motor' },
  { name: 'Hüfte', penfieldLabel: 'Hüfte (Hip)', angle: 3.95, radiusOffset: 0.87, category: 'motor' },
  { name: 'Knie', penfieldLabel: 'Knie (Knee)', angle: 4.20, radiusOffset: 0.86, category: 'motor' },
  { name: 'Fußgelenk', penfieldLabel: 'Fußgelenk (Ankle)', angle: 4.45, radiusOffset: 0.85, category: 'motor' },
  { name: 'Zehen', penfieldLabel: 'Zehen (Toes)', angle: 4.70, radiusOffset: 0.88, category: 'motor' },
  { name: 'Genitale', penfieldLabel: 'Genitale (Somatic Axis)', angle: 5.05, radiusOffset: 0.84, category: 'sensory' },
  { name: 'Baucheingeweide', penfieldLabel: 'Baucheingeweide (Gut)', angle: 5.40, radiusOffset: 0.82, category: 'sensory' },
  { name: 'Geschmack', penfieldLabel: 'Geschmack (Gustatory)', angle: 5.80, radiusOffset: 0.80, category: 'sensory' },
];

export const HomunculusCanvas: React.FC<HomunculusCanvasProps> = ({
  activeNode,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
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
      time += 0.006;
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * 0.35;

      ctx.clearRect(0, 0, width, height);

      // Deep Obsidian background
      ctx.fillStyle = '#0A0A0B';
      ctx.fillRect(0, 0, width, height);

      // Subtle Background Technical Grid Lines (1px in #1E2025)
      ctx.strokeStyle = '#1E2025';
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

      ctx.save();
      ctx.translate(centerX, centerY);

      // 1. ARBORESCENT ROOT NETWORK TREE (Anchored to Central Somatic Axis)
      // Root Node at Center (0, 0)
      const rootX = 0;
      const rootY = 0;

      // Draw Arborescent Branch Tensors radiating out to Somatic Ring
      const numBranches = 12;
      for (let b = 0; b < numBranches; b++) {
        const branchAngle = (b * Math.PI * 2) / numBranches + time * 0.02;
        const branchRadius = baseRadius * 0.65;
        const bx = Math.cos(branchAngle) * branchRadius;
        const by = Math.sin(branchAngle) * branchRadius;

        // Draw primary root branch
        ctx.beginPath();
        ctx.moveTo(rootX, rootY);
        
        // Midpoint control for organic arborescent curvature
        const midR = branchRadius * 0.5;
        const midA = branchAngle + Math.sin(time + b) * 0.25;
        const cx = Math.cos(midA) * midR;
        const cy = Math.sin(midA) * midR;

        ctx.quadraticCurveTo(cx, cy, bx, by);
        ctx.strokeStyle = b % 3 === 0 ? 'rgba(56, 189, 248, 0.4)' : 'rgba(39, 39, 42, 0.9)';
        ctx.lineWidth = b % 3 === 0 ? 1.5 : 1;
        ctx.stroke();

        // Secondary sub-branch vectors splitting off
        const subAngle1 = branchAngle + 0.3;
        const subAngle2 = branchAngle - 0.3;
        const subR = baseRadius * 0.85;

        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(Math.cos(subAngle1) * subR, Math.sin(subAngle1) * subR);
        ctx.moveTo(bx, by);
        ctx.lineTo(Math.cos(subAngle2) * subR, Math.sin(subAngle2) * subR);
        ctx.strokeStyle = 'rgba(39, 39, 42, 0.5)';
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Pulsing Neural Heat-Map Signal along root branch
        const pulseProgress = (time * 0.5 + b * 0.1) % 1;
        const px = Math.cos(branchAngle) * (branchRadius * pulseProgress);
        const py = Math.sin(branchAngle) * (branchRadius * pulseProgress);
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#38BDF8';
        ctx.fill();
      }

      // Central Arborescent Root Node Assembly
      ctx.beginPath();
      ctx.arc(rootX, rootY, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#0A0A0B';
      ctx.fill();
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(rootX, rootY, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#38BDF8';
      ctx.fill();

      // Pulsing Ring around Root Node
      ctx.beginPath();
      ctx.arc(rootX, rootY, 20 + Math.sin(time * 4) * 6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 2. OUTER PENFIELD CORTICAL HOMUNCULUS RING
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = '#27272A';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Concentric Inner Circuit Guidance Ring
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.88, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      // 3. DRAW PENFIELD HOMUNCULUS ANATOMICAL NODES & LABELS
      PENFIELD_HOMUNCULUS_NODES.forEach((node) => {
        const isActive = activeNode && (
          node.name.toLowerCase().includes(activeNode.toLowerCase()) || 
          activeNode.toLowerCase().includes(node.name.toLowerCase())
        );

        const r = baseRadius * node.radiusOffset;
        const nx = Math.cos(node.angle) * r;
        const ny = Math.sin(node.angle) * r;

        // Trace vector from Arborescent Root to Node if active
        if (isActive) {
          ctx.beginPath();
          ctx.moveTo(rootX, rootY);
          ctx.lineTo(nx, ny);
          ctx.strokeStyle = '#38BDF8';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Node Circle
        ctx.beginPath();
        ctx.arc(nx, ny, isActive ? 9 : 4.5, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? '#F59E0B' : (node.category === 'motor' ? '#38BDF8' : '#FAFAFA');
        ctx.fill();

        if (isActive) {
          ctx.beginPath();
          ctx.arc(nx, ny, 18 + Math.sin(time * 8) * 4, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.8)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Radial Vector Tick Mark
        const tx1 = Math.cos(node.angle) * (r - 6);
        const ty1 = Math.sin(node.angle) * (r - 6);
        const tx2 = Math.cos(node.angle) * (r + 8);
        const ty2 = Math.sin(node.angle) * (r + 8);

        ctx.beginPath();
        ctx.moveTo(tx1, ty1);
        ctx.lineTo(tx2, ty2);
        ctx.strokeStyle = isActive ? '#F59E0B' : '#27272A';
        ctx.lineWidth = isActive ? 2 : 1;
        ctx.stroke();

        // German/English Anatomical Text Label
        const lx = Math.cos(node.angle) * (r + (isActive ? 32 : 20));
        const ly = Math.sin(node.angle) * (r + (isActive ? 32 : 20));

        ctx.font = isActive ? '600 12px "JetBrains Mono"' : '400 10px "JetBrains Mono"';
        ctx.fillStyle = isActive ? '#FAFAFA' : (node.category === 'motor' ? '#38BDF8' : '#A1A1AA');
        ctx.textAlign = nx > 0 ? 'left' : 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name, lx, ly);
      });

      // 4. CENTRAL OVERLAY TYPOGRAPHY
      ctx.font = '700 14px "Cinzel"';
      ctx.fillStyle = '#FAFAFA';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('THE TECHNOSOMATIC ARCHITECTURE', 0, -baseRadius * 1.25);

      ctx.font = '500 10px "JetBrains Mono"';
      ctx.fillStyle = '#38BDF8';
      ctx.fillText('ARBORESCENT SOMATIC ROOT MATRIX', 0, baseRadius * 1.25);

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [activeNode]);

  return (
    <div className="relative w-full h-[580px] flex items-center justify-center overflow-hidden rounded-xl border border-[#27272A] bg-[#0A0A0B]">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
      />
    </div>
  );
};
