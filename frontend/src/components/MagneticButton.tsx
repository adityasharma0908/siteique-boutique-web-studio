import React, { useRef } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function MagneticButton({
  children,
  className = "",
  onClick,
}: MagneticButtonProps) {

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    element.style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {

    const element = ref.current;

    if (!element) return;

    element.style.transform =
      "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}

      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
      }}

      style={{
        display: "inline-block",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        className={className}
        onClick={onClick}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default MagneticButton;