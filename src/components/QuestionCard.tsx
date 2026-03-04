import React from "react";
import { motion } from "motion/react";

export const QuestionCard: React.FC<{ question: string; current: number; total: number }> = ({ question, current, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      key={question}
      className="w-full bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl text-center"
    >
      <div className="text-blue-100 font-semibold mb-2 uppercase tracking-widest text-sm">
        {total} tadan {current}-savol
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        {question}
      </h2>
    </motion.div>
  );
};
