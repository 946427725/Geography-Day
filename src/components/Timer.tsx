import { motion } from "motion/react";

export const Timer = ({ timeLeft, maxTime }: { timeLeft: number; maxTime: number }) => {
  const percentage = (timeLeft / maxTime) * 100;
  const isLow = timeLeft <= 5;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="48"
          cy="48"
          r="40"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-white/20"
        />
        <motion.circle
          cx="48"
          cy="48"
          r="40"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray="251.2"
          animate={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
          className={`${isLow ? "text-red-500" : "text-yellow-400"}`}
        />
      </svg>
      <div className={`absolute text-3xl font-bold ${isLow ? "text-red-500 animate-pulse" : "text-white"}`}>
        {Math.ceil(timeLeft)}
      </div>
    </div>
  );
};
