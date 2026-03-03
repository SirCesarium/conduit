import { motion } from "framer-motion";
import * as Lucide from "lucide-react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  icon: keyof typeof Lucide;
  color: string;
  onClick: () => void;
}

export const FeatureCard = ({
  title,
  subtitle,
  icon,
  color,
  onClick,
}: FeatureCardProps) => {
  const Icon = Lucide[icon] as React.ElementType;

  return (
    <motion.button
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative flex-1 min-h-80 p-8 rounded-3xl bg-white/2 border border-white/5 overflow-hidden group select-none"
      style={{
        // @ts-ignore
        "--hover-color": color,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-6">
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 bg-white/3 border border-white/5 group-hover:border-(--hover-color)/40 group-hover:bg-(--hover-color)/10">
          <Icon
            size={40}
            strokeWidth={1.5}
            className="text-white/20 group-hover:text-(--hover-color) transition-colors duration-300"
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-black uppercase tracking-widest text-white/90 group-hover:text-white transition-colors">
            {title}
          </h2>
          <p className="text-[14px] text-white/20 font-bold leading-relaxed px-2 group-hover:text-white/50 transition-colors">
            {subtitle}
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
        style={{ backgroundColor: color }}
      />
    </motion.button>
  );
};
