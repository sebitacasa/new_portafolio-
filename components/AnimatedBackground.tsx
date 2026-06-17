'use client';

const ALL_PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${((i * 100) / 18 + (i % 5) * 4) % 100}%`,
  delay: `${(i * 0.8) % 14}s`,
  duration: `${18 + (i * 1.5) % 14}s`,
  size: i % 5 === 0 ? 2.5 : i % 3 === 0 ? 2 : 1.5,
  drift: (i % 2 === 0 ? 1 : -1) * (15 + (i * 13) % 60),
  opacity: 0.12 + (i % 7) * 0.065,
}));

export default function AnimatedBackground({ count = 18 }: { count?: number }) {
  const PARTICLES = ALL_PARTICLES.slice(0, count);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

      {/* Static ambient gradient — same visual as blurred orbs but zero GPU cost */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 40% at 12% 18%, rgba(6,182,212,0.09) 0%, transparent 70%),
            radial-gradient(ellipse 45% 35% at 88% 82%, rgba(14,165,233,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 35% 30% at 50% 50%, rgba(20,184,166,0.04) 0%, transparent 70%)
          `,
        }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-portfolio" />

      {/* Particles — transform+opacity only = GPU-composited, no repaints */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-4px] rounded-full bg-white"
          style={{
            left: p.left,
            width:  `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            willChange: 'transform, opacity',
            // @ts-expect-error CSS custom property
            '--drift': p.drift,
            animation: `particle-rise ${p.duration} ${p.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
