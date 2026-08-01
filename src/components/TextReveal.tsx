import { motion } from "framer-motion";
import React from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: React.ElementType;
}

function TextReveal({
  children,
  className = "",
  as: Component = "h1",
}: TextRevealProps) {

  const words = children.split(" ");

  return (
    <Component className={className}>

      <motion.div
        initial="hidden"

        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.5,
        }}

        variants={{
          hidden: {},

          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >

        {words.map((word, index) => (
          <span
            key={index}
            style={{
              overflow: "hidden",
              display: "inline-block",
              marginRight: "0.25em",
            }}
          >

            <motion.span
              variants={{
                hidden: {
                  y: "100%",
                  opacity: 0,
                },

                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}

              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}

              style={{
                display: "inline-block",
              }}
            >
              {word}
            </motion.span>

          </span>
        ))}

      </motion.div>

    </Component>
  );
}

export default TextReveal;