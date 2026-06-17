'use client';

// Particles defined outside to avoid re-creation on renders
const PARTICLES = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  left: `${((i * 100) / 55 + (i % 7) * 2.5) % 100}%`,
  delay: `${(i * 0.23) % 14}s`,
  duration: `${13 + (i * 1.1) % 17}s`,
  size: i % 9 === 0 ? 3 : i % 5 === 0 ? 2.5 : i % 3 === 0 ? 2 : 1.5,
  drift: (i % 2 === 0 ? 1 : -1) * (10 + (i * 11) % 80),
  opacity: 0.1 + (i % 9) * 0.055,
}));

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

      {/* AMBIENT ORBS — cyan/teal palette to match the portfolio accent */}
      <div
        className="absolute top-[-18%] left-[2%] w-[700px] h-[700px] rounded-full animate-float-orb-1"
        style={{ background: 'rgba(6, 182, 212, 0.10)', filter: 'blur(140px)' }}
      />
      <div
        className="absolute bottom-[-18%] right-[-4%] w-[620px] h-[620px] rounded-full animate-float-orb-2"
        style={{ background: 'rgba(14, 165, 233, 0.08)', filter: 'blur(120px)' }}
      />
      <div
        className="absolute top-[40%] left-[-8%] w-[480px] h-[480px] rounded-full animate-float-orb-1"
        style={{
          background: 'rgba(20, 184, 166, 0.07)',
          filter: 'blur(100px)',
          animationDelay: '-7s',
          animationDuration: '24s',
        }}
      />
      <div
        className="absolute top-[10%] right-[14%] w-[360px] h-[360px] rounded-full animate-float-orb-2"
        style={{
          background: 'rgba(6, 182, 212, 0.06)',
          filter: 'blur(85px)',
          animationDelay: '-13s',
        }}
      />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 bg-grid-portfolio" />

      {/* PARTICLES */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-4px] rounded-full bg-white"
          style={{
            left: p.left,
            width:  `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            // @ts-expect-error CSS custom property
            '--drift': p.drift,
            animation: `particle-rise ${p.duration} ${p.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
