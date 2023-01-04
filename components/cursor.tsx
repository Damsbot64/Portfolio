import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e: any) => {
      console.log(e);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate="default"
      className="h-8 w-8 rounded-full bg-white  "
    />
  );
}
