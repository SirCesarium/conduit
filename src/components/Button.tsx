import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) => {
  const baseStyles = "rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-(--primary) text-[#1c1b1f] px-6 py-3 shadow-[0_0_20px_var(--primary-muted)] hover:shadow-[0_0_30px_var(--primary-glow)] border-none",
    secondary:
      "bg-(--bg-surface) border border-solid border-(--border-subtle) text-(--primary) px-6 py-3 hover:bg-[rgba(208,188,255,0.08)]",
    outline:
      "bg-transparent border-2 border-dashed border-(--primary-muted) text-(--primary) px-6 py-3 hover:border-(--primary) hover:bg-[rgba(208,188,255,0.02)]",
    ghost:
      "bg-transparent text-white/40 px-4 py-2 hover:text-white hover:bg-white/5 border-none",
    danger:
      "bg-red-500/10 border border-solid border-red-500/20 text-red-400 px-6 py-3 hover:bg-red-500/20 hover:border-red-500/40",
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.96 } : {}}
      onClick={disabled ? undefined : onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};