import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  isActionable?: boolean;
  className?: string;
}

export const Card = ({
  children,
  onClick,
  isActionable = false,
  className = "",
}: CardProps) => {
  const Component = isActionable ? motion.div : "div";

  const actionProps = isActionable
    ? {
        whileHover: {
          scale: 1.01,
          borderColor: "rgba(208, 188, 255, 0.3)",
          backgroundColor: "rgba(255, 255, 255, 0.04)",
        },
        whileTap: { scale: 0.99 },
        onClick: onClick,
        style: { cursor: "pointer" },
      }
    : {};

  return (
    <Component
      {...actionProps}
      className={`
        bg-[rgba(255,255,255,0.02)] 
        border border-[rgba(255,255,255,0.05)] 
        rounded-xl 
        p-5 
        transition-colors 
        duration-500 
        ${className}
      `}
    >
      {children}
    </Component>
  );
};
