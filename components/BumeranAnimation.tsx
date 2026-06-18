'use client';

export default function BumeranAnimation() {
  return (
    <>
      <style>{`
        @keyframes bumeran-1 {
          0%   { transform: translateX(0px) translateY(0px) rotate(0deg); opacity: 0; }
          6%   { opacity: 0.65; }
          44%  { transform: translateX(900px) translateY(-18px) rotate(500deg); opacity: 0.55; }
          56%  { transform: translateX(900px) translateY(-18px) rotate(500deg); opacity: 0.55; }
          94%  { transform: translateX(0px) translateY(0px) rotate(1000deg); opacity: 0.65; }
          100% { transform: translateX(0px) translateY(0px) rotate(1008deg); opacity: 0; }
        }
        @keyframes bumeran-2 {
          0%   { transform: translateX(0px) translateY(0px) rotate(30deg); opacity: 0; }
          6%   { opacity: 0.38; }
          44%  { transform: translateX(900px) translateY(22px) rotate(510deg); opacity: 0.32; }
          56%  { transform: translateX(900px) translateY(22px) rotate(510deg); opacity: 0.32; }
          94%  { transform: translateX(0px) translateY(0px) rotate(990deg); opacity: 0.38; }
          100% { transform: translateX(0px) translateY(0px) rotate(1008deg); opacity: 0; }
        }
        @keyframes bumeran-3 {
          0%   { transform: translateX(0px) translateY(0px) rotate(60deg); opacity: 0; }
          6%   { opacity: 0.22; }
          44%  { transform: translateX(900px) translateY(-30px) rotate(480deg); opacity: 0.18; }
          56%  { transform: translateX(900px) translateY(-30px) rotate(480deg); opacity: 0.18; }
          94%  { transform: translateX(0px) translateY(0px) rotate(960deg); opacity: 0.22; }
          100% { transform: translateX(0px) translateY(0px) rotate(1008deg); opacity: 0; }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div style={{ position: 'absolute', left: -52, top: '32%', animation: 'bumeran-1 5s ease-in-out infinite' }}>
          <Bumeran size={48} />
        </div>
        <div style={{ position: 'absolute', left: -36, top: '58%', animation: 'bumeran-2 5s ease-in-out 1.7s infinite' }}>
          <Bumeran size={33} />
        </div>
        <div style={{ position: 'absolute', left: -24, top: '14%', animation: 'bumeran-3 5s ease-in-out 3.3s infinite' }}>
          <Bumeran size={22} />
        </div>
      </div>
    </>
  );
}

function Bumeran({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <path
        d="M30,50 C20,34 7,18 3,5"
        stroke="rgb(245,158,11)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M30,50 C40,34 53,18 57,5"
        stroke="rgb(245,158,11)"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
