import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 20; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Static stars */}
      <div className="star w-2 h-2 top-10 left-20 animate-star-twinkle" style={{ animationDelay: '0s' }} />
      <div className="star w-1 h-1 top-32 left-40 animate-star-twinkle" style={{ animationDelay: '0.5s' }} />
      <div className="star w-3 h-3 top-20 right-32 animate-star-twinkle" style={{ animationDelay: '1s' }} />
      <div className="star w-1 h-1 top-60 left-60 animate-star-twinkle" style={{ animationDelay: '1.5s' }} />
      <div className="star w-2 h-2 top-80 right-20 animate-star-twinkle" style={{ animationDelay: '2s' }} />
      <div className="star w-1 h-1 top-96 left-80 animate-star-twinkle" style={{ animationDelay: '0.8s' }} />
      <div className="star w-2 h-2 top-40 right-60 animate-star-twinkle" style={{ animationDelay: '1.2s' }} />
      <div className="star w-1 h-1 top-72 left-32 animate-star-twinkle" style={{ animationDelay: '1.8s' }} />

      {/* Dynamic stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-cosmic-pink rounded-full opacity-60"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute top-32 right-40 w-6 h-6 bg-cosmic-cyan rounded-full opacity-80"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-40 left-32 w-3 h-3 bg-cosmic-purple rounded-full opacity-70"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.5,
        }}
      />
    </div>
  );
}
