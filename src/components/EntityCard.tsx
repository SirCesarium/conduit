import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import * as Lucide from "lucide-react";

interface EntityCardProps {
  title: string;
  subtitle: string;
  label?: string;
  icon?: keyof typeof Lucide;
  statusColor?: string;
  variant?: "solid" | "outline";
  onClick?: () => void;
  rightElement?: ReactNode;
}

export const EntityCard = ({
  title,
  subtitle,
  label,
  icon,
  variant = "solid",
  onClick,
  rightElement,
}: EntityCardProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const Icon = icon ? (Lucide[icon] as React.ElementType) : null;

  const styles = {
    solid: "bg-white/[0.02] border-white/[0.05] hover:border-white/10",
    outline: "bg-transparent border-white/[0.08] border-dashed hover:border-white/20"
  };

  const focusStyles = isFocused ? "border-[#d0bcff]/40 bg-white/[0.04]" : "";

  return (
    <motion.div
      tabIndex={0}
      role="button"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      whileHover={{ 
        scale: 1.005, 
        backgroundColor: "rgba(255, 255, 255, 0.04)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30 
      }}
      onClick={onClick}
      className={`
        relative w-full p-6 flex items-center justify-between cursor-pointer
        border rounded-2xl group select-none
        transition-all duration-150 ease-out
        ${styles[variant]}
        ${focusStyles}
      `}
    >
      <div className="flex flex-col gap-1">
        {label && (
          <span className={`text-[9px] font-black uppercase tracking-[0.3em] text-white/10 transition-colors ${isFocused ? "text-[#d0bcff]/50" : "group-hover:text-[#d0bcff]/50"}`}>
            {label}
          </span>
        )}
        <h2 className={`text-white font-bold text-lg tracking-tight transition-colors ${isFocused ? "text-white" : "group-hover:text-white"}`}>
          {title}
        </h2>
        <p className="text-[11px] text-white/20 font-mono tracking-wide">{subtitle}</p>
      </div>

      <div className="flex items-center">
        {rightElement ? rightElement : (
          <div className={`w-11 h-11 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center transition-all duration-200 ${isFocused ? "text-[#d0bcff] border-[#d0bcff]/20 bg-[#d0bcff]/5" : "text-white/20 group-hover:text-[#d0bcff] group-hover:border-[#d0bcff]/20 group-hover:bg-[#d0bcff]/5"}`}>
            {Icon ? <Icon size={20} strokeWidth={1.5} /> : <span className="text-xl">󱐋</span>}
          </div>
        )}
      </div>
      
      <div className={`absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent to-transparent transition-all duration-500 ${isFocused ? "via-[#d0bcff]/40" : "via-[#d0bcff]/0 group-hover:via-[#d0bcff]/40"}`} />
    </motion.div>
  );
};
