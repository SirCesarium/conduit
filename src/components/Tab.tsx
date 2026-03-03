import { motion } from "framer-motion";
import * as Lucide from "lucide-react";

interface TabProps {
  id: number;
  label: string;
  icon: keyof typeof Lucide;
  isActive: boolean;
  onClick: () => void;
}

export const Tab = ({ label, icon, isActive, onClick }: TabProps) => {
  const Icon = Lucide[icon] as React.ElementType;

  return (
    <motion.button
      onClick={onClick}
      layout
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={`
        relative h-12 flex items-center justify-center gap-3 px-4 rounded-[10px]
        transition-colors duration-300 ease-in-out
        ${isActive 
          ? "flex-2 bg-[#d0bcff] text-[#1c1b1f]" 
          : "flex-1 bg-[rgba(255,255,255,0.03)] text-[rgba(208,188,255,0.3)] hover:bg-[rgba(208,188,255,0.08)] hover:text-[rgba(208,188,255,0.6)]"
        }
      `}
    >
      <Icon 
        size={18} 
        strokeWidth={isActive ? 2.5 : 2} 
        className="transition-colors duration-300"
      />

      {isActive && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="font-bold text-xs uppercase tracking-wider whitespace-nowrap"
        >
          {label}
        </motion.span>
      )}

      {isActive && (
        <motion.div
          layoutId="tab-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 rounded-[10px] shadow-[0_0_20px_rgba(208,188,255,0.5)] pointer-events-none"
        />
      )}
    </motion.button>
  );
};