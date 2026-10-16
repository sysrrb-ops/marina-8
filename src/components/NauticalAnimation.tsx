import React, { useState, useEffect } from 'react';
import { Compass, Waves, Wind } from 'lucide-react';

interface FishEntity {
  id: number;
  top: number;
  scale: number;
  speedSec: number;
  delaySec: number;
  color: string;
  reverse?: boolean;
}

export const NauticalAnimation: React.FC = () => {
  const [interactiveSplash, setInteractiveSplash] = useState<{ x: number; y: number } | null>(null);
  const [boatBoost, setBoatBoost] = useState<boolean>(false);
  const [fishCount, setFishCount] = useState<number>(6);

  // Trigger ripple on click
  const handleOceanClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setInteractiveSplash({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setTimeout(() => setInteractiveSplash(null), 1200);
  };

  const fishes: FishEntity[] = [
    { id: 1, top: 18, scale: 0.95, speedSec: 24, delaySec: 0, color: '#134C65' },
    { id: 2, top: 32, scale: 0.75, speedSec: 28, delaySec: 4, color: '#487F86' },
    { id: 3, top: 58, scale: 1.1, speedSec: 20, delaySec: 10, color: '#B69A5A' },
    { id: 4, top: 72, scale: 0.85, speedSec: 30, delaySec: 16, color: '#102D4F' },
    { id: 5, top: 25, scale: 0.7, speedSec: 32, delaySec: 7, color: '#487F86', reverse: true },
    { id: 6, top: 65, scale: 0.9, speedSec: 26, delaySec: 14, color: '#134C65', reverse: true },
  ];

  return (
    <div
      onClick={handleOceanClick}
      className="relative w-full overflow-hidden select-none py-4 border-y border-[#134C65]/15 bg-gradient-to-r from-[#F0ECDA] via-[#E8E2CB] to-[#F0ECDA]"
      style={{ minHeight: '130px' }}
      title="Click anywhere to create ocean ripples or interact with the sailing boat and fish!"
    >
      {/* Subtle ocean current backdrop waves */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none">
          <path
            d="M0,32 C240,75 480,10 720,45 C960,80 1200,20 1440,50 L1440,120 L0,120 Z"
            fill="#D8F0F5"
          />
          <path
            d="M0,55 C320,15 640,85 960,40 C1200,5 1360,70 1440,45 L1440,120 L0,120 Z"
            fill="#487F86"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      {/* Ripple effect on click */}
      {interactiveSplash && (
        <div
          className="absolute pointer-events-none rounded-full border-2 border-[#134C65]/40 animate-ping"
          style={{
            left: interactiveSplash.x - 24,
            top: interactiveSplash.y - 24,
            width: 48,
            height: 48,
            animationDuration: '0.9s',
          }}
        />
      )}

      {/* Interactive Floating / Moving Sailing Yacht */}
      <div
        className={`absolute z-10 cursor-pointer transition-transform duration-700 ${
          boatBoost ? 'scale-110' : 'hover:scale-105'
        }`}
        style={{
          top: '12px',
          left: '12%',
        }}
        onClick={(e) => {
          e.stopPropagation();
          setBoatBoost(true);
          setTimeout(() => setBoatBoost(false), 2000);
        }}
      >
        <div className="animate-sail-drift">
          <div className="animate-wave-bob relative group">
            {/* Tooltip on hover */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#102D4F] text-[#F0ECDA] text-[10px] px-2 py-0.5 rounded whitespace-nowrap pointer-events-none shadow-sm">
              Valérielle Tender · Click to Boost Sail
            </div>

            {/* Sailing Yacht SVG */}
            <svg
              width="88"
              height="64"
              viewBox="0 0 120 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md"
            >
              {/* Boat Hull */}
              <path
                d="M10 65 L98 65 C108 65 116 57 112 48 L96 46 L20 46 L8 56 C6 60 7 65 10 65 Z"
                fill="#102D4F"
              />
              {/* Hull Gold Accent Stripe */}
              <path d="M12 55 L106 50 L108 53 L10 58 Z" fill="#B69A5A" />
              {/* Teak Deck line */}
              <line x1="20" y1="46" x2="96" y2="46" stroke="#F0ECDA" strokeWidth="2" />
              {/* Mast */}
              <line x1="58" y1="8" x2="58" y2="48" stroke="#134C65" strokeWidth="2.5" strokeLinecap="round" />
              {/* Main Sail */}
              <path
                d="M58 12 Q40 28 32 44 L58 44 Z"
                fill="#FFFFFF"
                stroke="#134C65"
                strokeWidth="1"
                opacity="0.95"
              />
              {/* Jib / Front Sail */}
              <path
                d="M62 14 Q78 30 88 44 L62 44 Z"
                fill="#D8F0F5"
                stroke="#134C65"
                strokeWidth="1"
                opacity="0.9"
              />
              {/* Golden Pennant Flag */}
              <polygon points="58,8 68,11 58,14" fill="#B69A5A" />
              {/* Cabin Windows */}
              <rect x="68" y="48" width="6" height="3" rx="1" fill="#D8F0F5" />
              <rect x="78" y="48" width="6" height="3" rx="1" fill="#D8F0F5" />
              <rect x="88" y="48" width="6" height="3" rx="1" fill="#D8F0F5" />
              {/* Wake & Water Splash Ripples */}
              <path
                d="M4 67 Q14 69 24 67 T44 67 T70 67 T102 67 T120 66"
                stroke="#487F86"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.75"
              />
              <path
                d="M-2 70 Q12 72 26 70 T50 70"
                stroke="#D8F0F5"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* School of Swimming Marine Fish / Koi drifting across the sea */}
      <div className="absolute inset-0 pointer-events-none">
        {fishes.map((f) => (
          <div
            key={f.id}
            className={`absolute ${f.reverse ? 'animate-fish-reverse' : 'animate-fish-swim'}`}
            style={{
              top: `${f.top}%`,
              animationDuration: `${f.speedSec}s`,
              animationDelay: `${f.delaySec}s`,
            }}
          >
            <div
              className="flex items-center gap-1.5"
              style={{
                transform: `scale(${f.scale})`,
              }}
            >
              {/* Fish SVG Graphic with Animated Wiggling Tail */}
              <svg
                width="42"
                height="22"
                viewBox="0 0 54 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80 drop-shadow-xs"
              >
                {/* Tail Fin with subtle waggle */}
                <g className="animate-tail-wiggle">
                  <path
                    d="M14 13 L2 5 Q6 13 2 21 Z"
                    fill={f.color}
                    opacity="0.9"
                  />
                </g>
                {/* Fish Torso */}
                <path
                  d="M12 13 Q24 3 38 10 Q48 13 52 13 Q48 13 38 16 Q24 23 12 13 Z"
                  fill={f.color}
                />
                {/* Dorsal Fin */}
                <path d="M25 7 Q31 2 37 9 Z" fill={f.color} opacity="0.8" />
                {/* Pectoral Fin */}
                <path d="M28 14 Q32 19 25 20 Z" fill="#B69A5A" opacity="0.85" />
                {/* Shimmer Scale Pattern */}
                <path
                  d="M26 10 Q30 13 26 16 M32 10 Q36 13 32 16"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.4"
                />
                {/* Eye */}
                <circle cx="44" cy="11.5" r="1.5" fill="#FFFFFF" />
                <circle cx="44.5" cy="11.5" r="0.8" fill="#102D4F" />
              </svg>

              {/* Tiny water bubble trails behind fish */}
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-ping opacity-60" />
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Label & Instructions */}
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-[#134C65]/80 pointer-events-auto">
        <div className="flex items-center gap-2 font-medium">
          <Waves className="w-4 h-4 text-[#487F86]" />
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#102D4F]">
            Coastal Whispers Waterway
          </span>
          <span className="hidden sm:inline text-slate-400">·</span>
          <span className="hidden sm:inline text-[11px] text-[#134C65]">
            เรือใบและฝูงปลาแหวกว่ายตามสายน้ำทะเลอันดามัน (คลิกเพื่อสร้างระลอกคลื่นน้ำ)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setBoatBoost(true);
              setTimeout(() => setBoatBoost(false), 2000);
            }}
            className="px-2.5 py-1 text-[11px] font-semibold bg-white/80 hover:bg-white text-[#102D4F] border border-[#134C65]/20 rounded-md transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Wind className="w-3 h-3 text-[#B69A5A]" />
            <span>เร่งเรือใบ (Speed Up)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
