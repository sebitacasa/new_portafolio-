'use client';

interface VideoShowcaseProps {
  videoPath: string;
  liveUrl?: string;
  title?: string;
}

export default function VideoShowcase({ videoPath, liveUrl, title }: VideoShowcaseProps) {
  return (
    <a
      href={liveUrl || '#'}
      target={liveUrl ? '_blank' : undefined}
      rel="noreferrer"
      className="group block relative overflow-hidden border border-zinc-800 hover:border-cyan-500 transition-colors duration-500"
      style={{
        boxShadow: '0 0 0 rgba(34,211,238,0)',
      }}
    >
      {/* Glow ring on hover — inset shadow via inline transition */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{ boxShadow: 'inset 0 0 80px rgba(34,211,238,0.10)' }}
      />

      {/* Video */}
      <div className="relative bg-zinc-950 flex items-center justify-center" style={{ maxHeight: '75vh' }}>
        <video
          src={videoPath}
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-contain"
          style={{ maxHeight: '75vh' }}
        />

        {/* Scanline sweep */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="video-scanline" />
        </div>

        {/* Top-left "DEMO" badge */}
        <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest bg-black/80 border border-zinc-700 text-zinc-500 px-3 py-1 z-20">
          // DEMO
        </div>

        {/* Top-right "LIVE" indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest bg-black/80 border border-cyan-500/60 text-cyan-400 px-3 py-1 z-20">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          LIVE
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-between z-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
              // LIVE PREVIEW
            </p>
            <p className="text-2xl font-black tracking-tighter text-white group-hover:text-cyan-400 transition-colors duration-300">
              {title ?? 'Live App'} →
            </p>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest border border-zinc-600 group-hover:border-cyan-400 group-hover:text-cyan-400 text-zinc-400 px-4 py-2 transition-all duration-300 self-end">
            VISIT_SITE
          </div>
        </div>
      </div>
    </a>
  );
}
