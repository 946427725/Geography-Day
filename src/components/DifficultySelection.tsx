import React from "react";
import { motion } from "motion/react";
import { Star, Flame } from "lucide-react";
import { DIFFICULTIES, DifficultySetting } from "../constants";

interface DifficultySelectionProps {
  onSelect: (difficulty: DifficultySetting) => void;
  title: string;
  subtitle: string;
}

export const DifficultySelection: React.FC<DifficultySelectionProps> = ({ onSelect, title, subtitle }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center w-full max-w-6xl px-4"
    >
      <motion.div variants={cardVariants} className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 font-medium">
          {subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
        {DIFFICULTIES.map((diff) => (
          <motion.button
            key={diff.level}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(diff)}
            className={`relative flex flex-col items-center p-8 rounded-3xl border-2 border-white/20 backdrop-blur-xl transition-all duration-300 group overflow-hidden ${diff.color} shadow-2xl hover:shadow-white/20`}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
            
            {/* Level Number */}
            <div className="text-6xl font-black text-white/20 mb-4 group-hover:text-white/40 transition-colors">
              {diff.level}
            </div>

            {/* Stars/Fire Icons */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  {diff.level >= 3 ? (
                    <Flame 
                      size={18} 
                      className={`${i < diff.stars ? "text-white fill-white" : "text-white/20"}`} 
                    />
                  ) : (
                    <Star 
                      size={18} 
                      className={`${i < diff.stars ? "text-white fill-white" : "text-white/20"}`} 
                    />
                  )}
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-black text-white mb-2 text-center">
              {diff.name}
            </h3>
            
            <p className="text-sm text-white/80 text-center font-medium leading-tight">
              {diff.description}
            </p>

            {/* Stats Info */}
            <div className="mt-6 pt-4 border-t border-white/20 w-full flex flex-col gap-1 items-center">
              <span className="text-xs text-white/60 uppercase font-bold tracking-widest">
                Vaqt: {diff.totalTime}s
              </span>
              <span className="text-xs text-white/60 uppercase font-bold tracking-widest">
                Bonus: +{diff.bonusTime}s
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
