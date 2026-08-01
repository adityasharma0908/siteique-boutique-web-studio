import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
}

function Reveal({ children }: RevealProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}

      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;