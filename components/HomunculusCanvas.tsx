'use client';

import React, { useRef, useEffect } from 'react';

interface HomunculusCanvasProps {
  activeNode?: string | null;
  onHoverNode?: (nodeName: string | null) => void;
}

interface SomaticNode {
  name: string;
  angle: number; // in radians
  radiusOffset: number;
  label: string;
  category: 'sensory' | 'motor';
}

const SOMATIC_NODES: SomaticNode[] = [
  { name: 'Kopf', angle: 0.1, radiusOffset: 0.85, label: 'Kopf (Head)', category: 'sensory' },
  { name: 'Auge', angle: 0.35, radiusOffset: 0.82, label: 'Auge (Eye)', category: 'sensory' },
  { name: 'Gesicht', angle: 0.6, radiusOffset: 0.84, label: 'Gesicht (Face)', category: 'sensory' },
  { name: 'Lippen', angle: 0.85, radiusOffset: 0.86, label: 'Lippen (Lips)', category: 'sensory' },
  { name: 'Zunge', angle: 1.1, radiusOffset: 0.88, label: 'Zunge (Tongue)', category: 'sensory' },
  { name: 'Kiefer', angle: 1.35, radiusOffset: 0.85, label: 'Kiefer (Jaw)', category: 'sensory' },
  { name: 'Schlucken', angle: 1.6, radiusOffset: 0.83, label: 'Schlucken (Swallow)', category: 'sensory' },
  { name: 'Hand', angle: 1.9, radiusOffset: 0.9, label: 'Hand / Finger', category: 'motor' },
  { name: 'Handgelenk', angle: 2.2, radiusOffset: 0.87, label: 'Handgelenk (Wrist)', category: 'motor' },
  { name: 'Ellerbogen', angle: 2.5, radiusOffset: 0.85, label: 'Ellerbogen (Elbow)', category: 'motor' },
  { name: 'Schulter', angle: 2.8, radiusOffset: 0.86, label: 'Schulter (Shoulder)', category: 'motor' },
  { name: 'Rumpf', angle: 3.1, radiusOffset: 0.88, label: 'Rumpf (Trunk)', category: 'motor' },
  { name: 'Hüfte', angle: 3.4, radiusOffset: 0.87, label: 'Hüfte (Hip)', category: 'motor' },
  { name: 'Knie', angle: 3.7, radiusOffset: 0.86, label: 'Knie (Knee)', category: 'motor' },
  { name: 'Fußgelenk', angle: 4.0, radiusOffset: 0.85, label: 'Fußgelenk (Ankle)', category: 'motor' },
  { name: 'Zehen', angle: 4.3, radiusOffset: 0.88, label: 'Zehen (Toes)', category: 'motor' },
  { name: 'Baucheingeweide', angle: 4.8, radiusOffset: 0.82, label: 'Viscera (Gut)', category: 'sensory' },
  { name: 'Geschmack', angle: 5.4, radiusOffset: 0.80, label: 'Geschmack (Taste)', category: 'sensory' },
];

export const HomunculusCanvas: React.FC<HomunculusCanvasProps> = ({
  activeNode,
  onHoverNode,
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
      time += 0.008;
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * 0.36;

      ctx.clearRect(0, 0, width, height);

      // Background ambient glow
      const bgGlow = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, baseRadius * 1.4);
      bgGlow.addColorStop(0, 'rgba(56, 189, 248, 0.06)');
      bgGlow.addColorStop(0.5, 'rgba(245, 158, 11, 0.02)');
      bgGlow.addColorStop(1, 'rgba(10, 10, 11, 0)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Outer Rotating Coordinate Ring
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.05);

      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.15, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(39, 39, 42, 0.6)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 12]);
      ctx.stroke();

      // Tick marks on outer ring
      for (let i = 0; i < 36; i++) {
        const tickAngle = (i * Math.PI) / 18;
        const x1 = Math.cos(tickAngle) * (baseRadius * 1.14);
        const y1 = Math.sin(tickAngle) * (baseRadius * 1.14);
        const x2 = Math.cos(tickAngle) * (baseRadius * 1.18);
        const y2 = Math.sin(tickAngle) * (baseRadius * 1.18);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = i % 3 === 0 ? 'rgba(56, 189, 248, 0.5)' : 'rgba(161, 161, 170, 0.2)';
        ctx.lineWidth = i % 3 === 0 ? 1.5 : 0.8;
        ctx.stroke();
      }
      ctx.restore();

      // Inner Somatic Homunculus Ring Geometry
      ctx.save();
      ctx.translate(centerX, centerY);

      // Draw Main Circuit Ring Band
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw Neural Traces connecting nodes
      SOMATIC_NODES.forEach((node, i) => {
        const nextNode = SOMATIC_NODES[(i + 1) % SOMATIC_NODES.length];

        const x1 = Math.cos(node.angle) * (baseRadius * node.radiusOffset);
        const y1 = Math.sin(node.angle) * (baseRadius * node.radiusOffset);
        const x2 = Math.cos(nextNode.angle) * (baseRadius * nextNode.radiusOffset);
        const y2 = Math.sin(nextNode.angle) * (baseRadius * nextNode.radiusOffset);

        // Control point for circuit curve
        const midAngle = (node.angle + nextNode.angle) / 2;
        const cx = Math.cos(midAngle) * (baseRadius * 0.65);
        const cy = Math.sin(midAngle) * (baseRadius * 0.65);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(cx, cy, x2, y2);
        ctx.strokeStyle = 'rgba(39, 39, 42, 0.8)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw Somatic Nodes & Labels
      SOMATIC_NODES.forEach((node) => {
        const isActive = activeNode && (node.name.toLowerCase().includes(activeNode.toLowerCase()) || activeNode.toLowerCase().includes(node.name.toLowerCase()));

        const r = baseRadius * node.radiusOffset;
        const nx = Math.cos(node.angle) * r;
        const ny = Math.sin(node.angle) * r;

        // Trace line from center to node
        if (isActive) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(nx, ny);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([2, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Node circle
        ctx.beginPath();
        ctx.arc(nx, ny, isActive ? 8 : 4, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? '#F59E0B' : '#38BDF8';
        ctx.fill();

        if (isActive) {
          ctx.beginPath();
          ctx.arc(nx, ny, 16 + Math.sin(time * 6) * 4, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Text Labels along ring
        const lx = Math.cos(node.angle) * (r + (isActive ? 34 : 22));
        const ly = Math.sin(node.angle) * (r + (isActive ? 34 : 22));

        ctx.font = isActive ? '600 12px "JetBrains Mono"' : '400 10px "JetBrains Mono"';
        ctx.fillStyle = isActive ? '#FAFAFA' : 'rgba(161, 161, 170, 0.7)';
        ctx.textAlign = nx > 0 ? 'left' : 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name, lx, ly);
      });

      // Center Title Text
      ctx.font = '700 15px "Cinzel"';
      ctx.fillStyle = 'rgba(250, 250, 250, 0.9)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('TECHNOSOMATIC', 0, -12);

      ctx.font = '400 11px "JetBrains Mono"';
      ctx.fillStyle = 'rgba(56, 189, 248, 0.8)';
      ctx.fillText('HOMUNCULUS RING', 0, 10);

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
    <div className="relative w-full h-[550px] flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
      />
    </div>
  );
};
