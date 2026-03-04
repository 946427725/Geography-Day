import React from "react";
import { motion } from "motion/react";

interface AnswerButtonProps {
  text: string;
  onClick: () => void;
  status: 'idle' | 'correct' | 'wrong' | 'disabled';
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({ text, onClick, status }) => {
  const getBgColor = () => {
    switch (status) {
      case 'correct': return 'bg-green-500 border-green-400 shadow-green-900/50';
      case 'wrong': return 'bg-red-500 border-red-400 shadow-red-900/50';
      case 'disabled': return 'bg-white/10 border-white/20 opacity-50 cursor-not-allowed';
      default: return 'bg-white/20 hover:bg-white/30 border-white/30 shadow-black/20';
    }
  };

  return (
    <motion.button
      whileHover={status === 'idle' ? { scale: 1.02, y: -2 } : {}}
      whileTap={status === 'idle' ? { scale: 0.98 } : {}}
      onClick={status === 'idle' ? onClick : undefined}
      className={`w-full p-6 text-xl font-bold text-white rounded-2xl border-2 backdrop-blur-md transition-colors shadow-lg ${getBgColor()}`}
    >
      {text}
    </motion.button>
  );
};
