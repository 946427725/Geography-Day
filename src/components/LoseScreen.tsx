import React from "react";
import { motion } from "motion/react";
import { Skull, RotateCcw } from "lucide-react";

export const LoseScreen: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center text-center p-12 bg-red-500/20 backdrop-blur-2xl rounded-3xl border border-red-500/30 shadow-2xl"
    >
      <div className="bg-red-500 p-6 rounded-full mb-6 shadow-xl shadow-red-500/50">
        <Skull size={64} className="text-white" />
      </div>
      <h1 className="text-5xl font-black text-white mb-4">AFSUS! SKAUT CHO‘KDI.</h1>
      <p className="text-xl text-red-100 mb-8 max-w-md">
        Vaqt tugadi yoki suv juda baland ko‘tarildi. Skautni qutqarish uchun yana bir bor urinib ko‘ring!
      </p>
      <button
        onClick={onRestart}
        className="flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-red-50 transition-colors shadow-lg"
      >
        <RotateCcw size={24} />
        Qayta Boshlash
      </button>
    </motion.div>
  );
};
