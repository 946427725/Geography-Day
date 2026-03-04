import { motion } from "motion/react";

export const ScoutBoat = ({ isWrong, isCorrect, isLost }: { isWrong: boolean; isCorrect: boolean; isLost?: boolean }) => {
  return (
    <motion.div
      animate={
        isLost
          ? { y: 200, opacity: 0, rotate: 20 }
          : isWrong
          ? { x: [-5, 5, -5, 5, 0], rotate: [-2, 2, -2, 2, 0] }
          : isCorrect
          ? { y: [-20, 0], scale: [1, 1.1, 1] }
          : { y: [0, -5, 0] }
      }
      transition={
        isLost
          ? { duration: 2, ease: "easeIn" }
          : isWrong || isCorrect
          ? { duration: 0.5 }
          : { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }
      className="relative z-10"
    >
      {/* Boat */}
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <path
          d="M10 20C10 20 30 50 60 50C90 50 110 20 110 20H10Z"
          fill="#8B4513"
          stroke="#5D2E0D"
          strokeWidth="2"
        />
        <rect x="55" y="5" width="4" height="20" fill="#5D2E0D" />
        <path d="M59 5L85 15L59 25V5Z" fill="#FACC15" />
      </svg>

      {/* Scout Character */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2">
        <svg
          width="40"
          height="60"
          viewBox="0 0 40 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head */}
          <circle cx="20" cy="15" r="10" fill="#FFE4C4" />
          {/* Hat */}
          <path d="M10 12L20 2L30 12H10Z" fill="#166534" />
          {/* Body */}
          <rect x="12" y="25" width="16" height="20" rx="4" fill="#166534" />
          {/* Arms */}
          <rect x="8" y="27" width="4" height="12" rx="2" fill="#FFE4C4" />
          <rect x="28" y="27" width="4" height="12" rx="2" fill="#FFE4C4" />
          {/* Legs */}
          <rect x="14" y="45" width="4" height="10" fill="#3F6212" />
          <rect x="22" y="45" width="4" height="10" fill="#3F6212" />
        </svg>
      </div>
    </motion.div>
  );
};
