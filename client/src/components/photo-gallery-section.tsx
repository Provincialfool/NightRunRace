import { motion } from "framer-motion";

export default function PhotoGallerySection() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-space-purple to-space-navy">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Фото с мероприятия</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Фотографии появятся здесь после проведения ночного забега Королёв
          </p>
        </motion.div>

        <motion.div
          className="glassmorphism rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-cosmic-cyan to-cosmic-purple rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Скоро здесь будут фотографии</h3>
          <p className="text-gray-300 text-lg">
            После проведения мероприятия 28 июня 2025 года здесь появится галерея с лучшими моментами ночного забега
          </p>
          
          <div className="grid grid-cols-3 gap-4 mt-8 opacity-30">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index}
                className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}