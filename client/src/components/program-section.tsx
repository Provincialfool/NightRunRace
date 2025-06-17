import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const programItems = [
  { time: "17:00", title: "Открытие стартово-финишного городка", isHighlight: false },
  { time: "17:00–20:00", title: "Выдача стартовых пакетов", isHighlight: true },
  { time: "20:05", title: "Разминка для участников детского забега Фан-ран на 500 м", isHighlight: false },
  { time: "20:15", title: "Старт детского забега Фан-ран на 500 м", isHighlight: true },
  { time: "20:30–20:50", title: "Активная программа на сцене", isHighlight: false },
  { time: "20:50", title: "Торжественное открытие «Ночной забег со звёздами» г. Королёв", isHighlight: true },
  { time: "21:05", title: "Разминка для участников забега на дистанции 5 и 10 км", isHighlight: false },
  { time: "21:20", title: "Старт забегов на дистанции 5 км и 10 км", isHighlight: true },
  { time: "22:10", title: "Награждение победителей и призеров 5 км в абсолютном зачете", isHighlight: false },
  { time: "22:30", title: "Награждение победителей и призеров 10 км в абсолютном зачете", isHighlight: true },
  { time: "22:50", title: "Окончание бегового события (финиш последних участников)", isHighlight: false },
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
          <h2 className="text-5xl font-bold gradient-text mb-6 flex items-center justify-center gap-4">
            <Rocket className="w-12 h-12 text-cyan-400" />
            ПРОГРАММА
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Подробное расписание ночного забега Королёв. Приходите заранее, чтобы не пропустить ни одного момента!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {programItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-6 p-6 rounded-xl border border-white/10 ${
                item.isHighlight 
                  ? 'bg-gradient-to-r from-red-600/90 to-orange-600/90 text-white' 
                  : 'bg-white/5 text-white hover:bg-white/10'
              } transition-all duration-300`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`text-xl font-bold min-w-[120px] ${
                item.isHighlight ? 'text-white' : 'text-cyan-400'
              }`}>
                {item.time}
              </div>
              <div className="text-lg font-medium flex-1">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
