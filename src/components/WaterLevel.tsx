import { motion } from "motion/react";

export const WaterLevel = ({ percentage }: { percentage: number }) => {
  return (
    <div className="relative w-full h-full bg-blue-50/30 rounded-3xl overflow-hidden border-4 border-white/50 shadow-inner">
      {/* Water */}
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: `${percentage}%` }}
        transition={{ type: "spring", damping: 20, stiffness: 50 }}
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-600 to-blue-400"
      >
        {/* Waves effect */}
        <div className="absolute top-0 left-0 w-full h-4 bg-white/20 animate-pulse" />
        
        {/* Bubbles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: -500, 
              opacity: [0, 0.5, 0],
              x: Math.sin(i) * 20
            }}
            transition={{ 
              duration: 2 + Math.random() * 3, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </motion.div>
    </div>
  );
};
