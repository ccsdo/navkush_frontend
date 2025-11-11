import React from 'react';
import { Heart, Smile } from 'lucide-react';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#f2fbff] flex items-center justify-center ">
      <div className="text-center">
        {/* Animated Heart Loader */}
        <div className="relative inline-block mb-6">
          {/* Outer rotating ring */}
          <div className="w-24 h-24 border-4 border-black-200 border-t-orange-500 rounded-full animate-spin"></div>
          
          {/* Inner pulsing heart */}
  
        </div>

        {/* Loading Text */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Loading...
        </h3>
        <p className="text-sm text-gray-600">
          Spreading kindness, one moment at a time
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

// Alternative Loader Styles (export these as named exports)

// Simple Spinner Loader
export function SpinnerLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
    </div>
  );
}

// Heart Pulse Loader
export function HeartPulseLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center z-50">
      <div className="relative">
        <Heart 
          className="text-pink-500" 
          size={64} 
          fill="currentColor"
          style={{
            animation: 'heartbeat 1.5s ease-in-out infinite'
          }}
        />
        <style>{`
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.2); }
            50% { transform: scale(1); }
          }
        `}</style>
      </div>
    </div>
  );
}

// Multiple Hearts Loader
export function MultipleHeartsLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center z-50">
      <div className="relative w-32 h-32">
        {[0, 1, 2, 3].map((i) => (
          <Heart
            key={i}
            className="absolute top-1/2 left-1/2 text-pink-400"
            size={32}
            fill="currentColor"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-20px)`,
              animation: `rotate 2s linear infinite`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.7
            }}
          />
        ))}
        <style>{`
          @keyframes rotate {
            0% { transform: translate(-50%, -50%) rotate(0deg) translateY(-20px); }
            100% { transform: translate(-50%, -50%) rotate(360deg) translateY(-20px); }
          }
        `}</style>
      </div>
    </div>
  );
}

// Smile Wave Loader
export function SmileWaveLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center z-50">
      <div className="flex gap-3">
        {[0, 1, 2].map((i) => (
          <Smile
            key={i}
            className="text-orange-500"
            size={40}
            style={{
              animation: 'wave 1.5s ease-in-out infinite',
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
        <style>{`
          @keyframes wave {
            0%, 100% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(-10px); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}