import { motion } from "framer-motion";
import { cloneElement, ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: "solid" | "ghost" | "danger";
  isWindowControl?: boolean;
}

export const IconButton = ({
  icon,
  onClick,
  className = "",
  disabled = false,
  variant = "ghost",
  isWindowControl = false,
}: IconButtonProps) => {
  const variants = {
    ghost: "hover:bg-white/[0.05] text-white/40 hover:text-white",
    danger: "hover:bg-[#ff4545] text-white/40 hover:text-white",
    solid: "bg-white/5 border-white/10 hover:bg-white/10",
  };

  return (
    <motion.button
      whileTap={
        !disabled ? { backgroundColor: "rgba(255, 255, 255, 0.1)" } : {}
      }
      onClick={onClick}
      disabled={disabled}
      className={`
        h-10 w-12 flex items-center justify-center transition-colors duration-100
        ${variants[variant]} 
        ${isWindowControl ? "rounded-none" : "rounded-lg"} 
        ${className}
      `}
    >
      {cloneElement(icon as React.ReactElement, { size: 14, strokeWidth: 1.5 })}
    </motion.button>
  );
};
