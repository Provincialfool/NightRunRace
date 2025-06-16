import { motion } from "framer-motion";
import rocketImg from "@assets/rocket.png";
import sparksImg from "@assets/Sparks.png";
import starImg from "@assets/star.png";
import dateBadge from "@assets/date.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-bg flex items-center justify-center overflow-hidden">
      {/* Animated Stars */}
      <motion.div
        className="absolute top-[15%] left-[10%] z-5"
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.8, 1.3, 0.8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={starImg} alt="Star" className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute top-[25%] right-[15%] z-5"
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.5, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <img src={starImg} alt="Star" className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute top-[60%] left-[5%] z-5"
        animate={{
          opacity: [0.3, 0.9, 0.3],
          scale: [0.7, 1.2, 0.7],
          rotate: [0, 360, 720],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <img src={starImg} alt="Star" className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute top-[70%] right-[8%] z-5"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [0.9, 1.4, 0.9],
          rotate: [0, -360, -720],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <img src={starImg} alt="Star" className="w-5 h-5" />
      </motion.div>

      {/* Animated Rocket with Sparks */}
      <motion.div
        className="absolute right-[8%] top-[20%] z-10"
        animate={{
          y: [-25, 20, -25],
          x: [-5, 5, -5],
          rotate: [-8, -12, -8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <img src={rocketImg} alt="Rocket" className="w-36 h-44 md:w-44 md:h-52 drop-shadow-2xl relative z-20" />
          
          {/* Rocket Sparks/Exhaust */}
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10"
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [0.8, 1.2, 0.8],
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={sparksImg} alt="Sparks" className="w-24 h-16 md:w-28 md:h-20" />
          </motion.div>
        </div>
      </motion.div>

      {/* Large Decorative Stars */}
      <motion.div
        className="absolute top-[30%] left-[20%] z-5"
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.8, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={starImg} alt="Star" className="w-16 h-16 opacity-60" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-4 gradient-text leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            НОЧНОЙ<br />ЗАБЕГ
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-cosmic-cyan mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            КОРОЛЁВ
          </motion.h2>
        </div>

        {/* Date Badge */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={dateBadge} alt="28.06.2025" className="h-16 w-auto mx-auto" />
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Присоединяйтесь к космическому забегу под звёздным небом! Выберите свою дистанцию и станьте частью незабываемого приключения.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#registration"
            className="px-8 py-4 bg-gradient-to-r from-cosmic-pink to-cosmic-purple rounded-full text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cosmic-pink/50"
          >
            Зарегистрироваться
          </a>
          <a
            href="#program"
            className="px-8 py-4 border-2 border-cosmic-cyan text-cosmic-cyan rounded-full font-bold text-lg hover:bg-cosmic-cyan hover:text-white transition-all duration-300"
          >
            Узнать программу
          </a>
        </motion.div>
      </div>
    </section>
  );
}
