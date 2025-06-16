import { motion } from "framer-motion";
import partnersImg from "@assets/partners_1750094435562.png";

const partners = [
  { name: "Команда Губернатора", logo: partnersImg },
  { name: "Мособл спорт", logo: partnersImg },
  { name: "Администрация г.о. Королёв", logo: partnersImg },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 cosmic-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Партнёры</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Благодарим наших партнёров за поддержку и организацию ночного забега Королёв
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-xl p-8 text-center hover:scale-105 transform transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-auto mx-auto mb-4 object-contain"
              />
              <h3 className="text-white font-semibold">{partner.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
