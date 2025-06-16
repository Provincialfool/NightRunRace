import { motion } from "framer-motion";

const programItems = [
  { time: "17:00", title: "Открытие стартово-финишного городка" },
  { time: "17:00-20:00", title: "Выдача стартовых пакетов" },
  { time: "20:05", title: "Разминка для участников детского забега" },
  { time: "20:15", title: "Старт детского забега Фан-ран на 500 м" },
  { time: "20:30-21:00", title: "Активная программа на сцене" },
  { time: "21:00", title: "Торжественное открытие Ночной забег Королёв" },
  { time: "21:05", title: "Разминка для участников забега на дистанции 5 и 10 км" },
  { time: "21:20", title: "Старт забегов на дистанции 5 км и 10 км" },
  { time: "22:10", title: "Награждение победителей и призеров 5 км в абсолютном зачете" },
  { time: "22:30", title: "Награждение победителей и призеров 10 км в абсолютном зачете" },
  { time: "22:50", title: "Окончание бегового события (финиш последних участников)" },
];

const gradients = [
  "from-cosmic-cyan to-cosmic-purple",
  "from-cosmic-pink to-cosmic-orange",
  "from-cosmic-purple to-cosmic-pink",
  "from-cosmic-cyan to-cosmic-blue",
  "from-cosmic-orange to-cosmic-pink",
  "from-cosmic-pink to-cosmic-purple",
  "from-cosmic-cyan to-cosmic-purple",
  "from-cosmic-pink to-cosmic-orange",
  "from-cosmic-purple to-cosmic-cyan",
  "from-cosmic-blue to-cosmic-pink",
  "from-cosmic-orange to-cosmic-purple",
];

export default function ProgramSection() {
  return (
    <section id="program" className="py-20 bg-gradient-to-b from-space-navy to-space-purple">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Программа мероприятия</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Подробное расписание ночного забега Королёв. Приходите заранее, чтобы не пропустить ни одного момента!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programItems.map((item, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${gradients[index]} rounded-full flex items-center justify-center font-bold text-white text-sm text-center`}
                >
                  {item.time}
                </div>
                <h3 className="text-xl font-semibold text-white flex-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
