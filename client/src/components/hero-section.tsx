import { motion } from "framer-motion";
import rocketImg from "@assets/rocket.png";
import sparksImg from "@assets/Sparks.png";
import starImg from "@assets/star.png";
import dateBadge from "@assets/date.png";
import logoBig from "@assets/logo-big.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-bg flex items-center justify-center overflow-hidden pt-20">
      {/* Scattered Animated Stars for Night Effect */}
      {/* Top area stars */}
      <motion.div
        className="absolute top-[8%] left-[15%] z-5"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.4, 0.8],
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={starImg} alt="Star" className="w-6 h-6 filter drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.8))' }} />
      </motion.div>
      <motion.div
        className="absolute top-[12%] right-[20%] z-5"
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.6, 1],
          rotate: [0, -360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <img src={starImg} alt="Star" className="w-8 h-8" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 0, 255, 0.8))' }} />
      </motion.div>
      <motion.div
        className="absolute top-[18%] left-[5%] z-5"
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.6, 1.2, 0.6],
          rotate: [0, 180],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <img src={starImg} alt="Star" className="w-4 h-4" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 0, 0.8))' }} />
      </motion.div>
      <motion.div
        className="absolute top-[25%] left-[30%] z-5"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [0.9, 1.3, 0.9],
          rotate: [0, -180],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <img src={starImg} alt="Star" className="w-5 h-5" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 100, 0.8))' }} />
      </motion.div>
      {/* Middle area stars */}
      <motion.div
        className="absolute top-[40%] left-[8%] z-5"
        animate={{
          opacity: [0.3, 0.9, 0.3],
          scale: [0.7, 1.5, 0.7],
          rotate: [0, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <img src={starImg} alt="Star" className="w-10 h-10" style={{ filter: 'drop-shadow(0 0 12px rgba(255, 100, 255, 0.8))' }} />
      </motion.div>
      <motion.div
        className="absolute top-[45%] right-[25%] z-5"
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, -360],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      >
        <img src={starImg} alt="Star" className="w-7 h-7" style={{ filter: 'drop-shadow(0 0 10px rgba(100, 255, 255, 0.8))' }} />
      </motion.div>
      {/* Bottom area stars */}
      <motion.div
        className="absolute top-[65%] left-[12%] z-5"
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [0.5, 1.1, 0.5],
          rotate: [0, 180],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <img src={starImg} alt="Star" className="w-6 h-6" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 200, 0, 0.8))' }} />
      </motion.div>
      <motion.div
        className="absolute top-[75%] right-[15%] z-5"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [0.6, 1.3, 0.6],
          rotate: [0, -180],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.8,
        }}
      >
        <img src={starImg} alt="Star" className="w-8 h-8" style={{ filter: 'drop-shadow(0 0 10px rgba(0, 200, 255, 0.8))' }} />
      </motion.div>
      <motion.div
        className="absolute top-[80%] left-[25%] z-5"
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.7, 1.4, 0.7],
          rotate: [0, 360],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <img src={starImg} alt="Star" className="w-5 h-5" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 0, 150, 0.8))' }} />
      </motion.div>
      {/* Additional scattered stars */}
      <motion.div
        className="absolute top-[35%] right-[5%] z-5"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [0.4, 0.9, 0.4],
          rotate: [0, -360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <img src={starImg} alt="Star" className="w-4 h-4" style={{ filter: 'drop-shadow(0 0 6px rgba(150, 255, 0, 0.8))' }} />
      </motion.div>
      <motion.div
        className="absolute top-[55%] left-[35%] z-5"
        animate={{
          opacity: [0.3, 0.9, 0.3],
          scale: [0.8, 1.6, 0.8],
          rotate: [0, 180],
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.2,
        }}
      >
        <img src={starImg} alt="Star" className="w-9 h-9" style={{ filter: 'drop-shadow(0 0 12px rgba(255, 150, 255, 0.8))' }} />
      </motion.div>
      {/* Large Animated Rocket with Massive Exhaust Trail */}
      <motion.div
        className="absolute right-[25%] top-[20%] z-10 xl:right-[30%] xl:top-[15%]"
        animate={{
          y: [-30, 25, -30],
          x: [-8, 8, -8],
          rotate: [-6, -10, -6],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          {/* Main Rocket - Much Larger */}
          <motion.img 
            src={rocketImg} 
            alt="Rocket" 
            className="w-56 h-72 md:w-72 md:h-96 relative z-20"
            style={{ 
              filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 40px rgba(255, 0, 255, 0.4))',
            }}
            animate={{
              filter: [
                'drop-shadow(0 0 20px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 40px rgba(255, 0, 255, 0.4))',
                'drop-shadow(0 0 30px rgba(255, 0, 255, 0.8)) drop-shadow(0 0 50px rgba(0, 255, 255, 0.6))',
                'drop-shadow(0 0 20px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 40px rgba(255, 0, 255, 0.4))',
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Rocket Exhaust Trail Under Nozzle - Positioned slightly left */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-x-5 z-5">
            <img
              src={sparksImg}
              alt="Exhaust"
              style={{ 
                width: '180px', 
                height: '250px',
                maxWidth: 'none'
              }}
            />
          </div>
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
          {/* Glowing Logo with Night Effect */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img 
              src={logoBig} 
              alt="Ночной забег Королёв" 
              className="mx-auto w-96 h-auto md:w-[32rem] max-w-full ml-[0px] mr-[0px]"
              style={{ 
                filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 60px rgba(255, 0, 255, 0.4)) drop-shadow(0 0 90px rgba(255, 255, 255, 0.2))',
              }}
              animate={{
                filter: [
                  'drop-shadow(0 0 30px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 60px rgba(255, 0, 255, 0.4)) drop-shadow(0 0 90px rgba(255, 255, 255, 0.2))',
                  'drop-shadow(0 0 40px rgba(255, 0, 255, 0.8)) drop-shadow(0 0 80px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 120px rgba(255, 255, 255, 0.3))',
                  'drop-shadow(0 0 30px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 60px rgba(255, 0, 255, 0.4)) drop-shadow(0 0 90px rgba(255, 255, 255, 0.2))',
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Date Badge - Large and Above All Elements */}
        <motion.div
          className="inline-block mb-8 relative z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={dateBadge} alt="28.06.2025" className="h-24 w-auto mx-auto md:h-32" />
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
