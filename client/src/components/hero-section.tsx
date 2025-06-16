import { motion } from "framer-motion";
import rocketImg from "@assets/rocket_1750094435562.png";
import dateBadge from "@assets/date_1750094435560.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-bg flex items-center justify-center overflow-hidden">
      {/* Animated Rocket */}
      <motion.div
        className="absolute right-[5%] top-[15%] z-10"
        animate={{
          y: [-30, 15, -30],
          rotate: [-12, -8, -12],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={rocketImg} alt="Rocket" className="w-32 h-40 md:w-40 md:h-48 drop-shadow-2xl" />
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
