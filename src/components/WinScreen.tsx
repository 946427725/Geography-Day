import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Trophy, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

export const WinScreen: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center text-center p-12 bg-white/20 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl"
    >
      <div className="bg-yellow-400 p-6 rounded-full mb-6 shadow-xl shadow-yellow-500/50">
        <Trophy size={64} className="text-white" />
      </div>
      <h1 className="text-5xl font-black text-white mb-4">TABRIKLAYMIZ! SIZ YUTDINGIZ!</h1>
      <p className="text-xl text-blue-100 mb-8 max-w-md">
        Ajoyib ish! Siz barcha savollarga to‘g‘ri javob berdingiz va skautni qutqardingiz.
      </p>
      <button
        onClick={onRestart}
        className="flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-colors shadow-lg"
      >
        <RotateCcw size={24} />
        Qayta Boshlash
      </button>
    </motion.div>
  );
};
