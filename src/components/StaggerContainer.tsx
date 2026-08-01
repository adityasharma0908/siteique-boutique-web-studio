import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
}

function StaggerContainer({
  children,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={{
        hidden: {},

        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

export default StaggerContainer;