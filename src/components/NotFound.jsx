import  { useState, useEffect } from 'react';
import {  Heart, Smile } from 'lucide-react';

export default function NotFound() {
  const [floatingHearts, setFloatingHearts] = useState([]);

  useEffect(() => {
    const hearts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2
    }));
    setFloatingHearts(hearts);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Hearts Background */}
      {floatingHearts.map(heart => (
        <div
          key={heart.id}
          className="absolute opacity-20"
          style={{
            left: `${heart.left}%`,
            animation: `float ${heart.duration}s ease-in-out infinite`,
            animationDelay: `${heart.delay}s`
          }}
        >
          <Heart className="text-pink-400" size={40} fill="currentColor" />
        </div>
      ))}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative z-10">
        <div className="text-center">
          {/* Logo/Icon Area */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Smile className="text-white" size={48} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 mb-4">
            404
          </h1>

          {/* Main Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lost Your Way?
          </h2>
          
          <p className="text-lg text-gray-600 mb-2 max-w-2xl mx-auto">
            Just like how we help find hope for those in need, let us help you find your way back!
          </p>
          
          <p className="text-base text-gray-500 mb-8 max-w-xl mx-auto">
            The page you're looking for seems to have wandered off. But don't worry – at <span className="font-semibold text-orange-600">Navkhush NGO</span>, we believe every journey has meaning.
          </p>

        </div>
      </div>
    </div>
  );
}