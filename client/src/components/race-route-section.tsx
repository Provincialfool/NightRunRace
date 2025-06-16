import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RaceRouteSection() {
  const [activeTab, setActiveTab] = useState("general");

  const routeInfo = {
    general: {
      title: "Общая информация",
      description: "Стартово-финишная зона располагается в центральной части города Королёв",
      details: [
        "Старт и финиш: ДК им. Калинина",
        "Время старта: 21:20",
        "Покрытие: асфальт",
        "Профиль: преимущественно равнинный с небольшими перепадами высот",
        "Погодные условия: ночное время, возможна прохладная погода",
        "Освещение: уличное освещение по всему маршруту"
      ]
    },
    fiveKm: {
      title: "Маршрут 5 км",
      description: "Компактный маршрут через центральную часть города с одним кругом",
      details: [
        "Дистанция: 5 км (1 круг)",
        "Старт: ДК им. Калинина",
        "Основные точки: Центральный городской парк, ул. Циолковского",
        "Ключевые ориентиры: Мемориал славы, Владимирская церковь",
        "Финиш: ДК им. Калинина",
        "Ожидаемое время прохождения: 20-40 минут"
      ]
    },
    tenKm: {
      title: "Маршрут 10 км", 
      description: "Расширенный маршрут с двумя кругами через центр и спальные районы",
      details: [
        "Дистанция: 10 км (2 круга)",
        "Старт: ДК им. Калинина", 
        "Основные точки: Центральный парк, ул. Циолковского, Пионерская ул.",
        "Ключевые ориентиры: Мемориал славы, Владимирская церковь, Гипермаркет",
        "Разворот на 2-й круг: у стадиона «Вымпел»",
        "Финиш: ДК им. Калинина",
        "Ожидаемое время прохождения: 40-80 минут"
      ]
    }
  };

  return (
    <section id="route" className="py-20 bg-gradient-to-b from-space-purple to-space-navy">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Маршрут забега</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Изучите детали маршрутов для дистанций 5 и 10 км по улицам ночного Королёва
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 border-white/20 mb-8">
            <TabsTrigger 
              value="general" 
              className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cosmic-cyan data-[state=active]:to-cosmic-purple data-[state=active]:text-white"
            >
              Общая информация
            </TabsTrigger>
            <TabsTrigger 
              value="fiveKm"
              className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cosmic-pink data-[state=active]:to-cosmic-orange data-[state=active]:text-white"
            >
              5 км
            </TabsTrigger>
            <TabsTrigger 
              value="tenKm"
              className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cosmic-purple data-[state=active]:to-cosmic-pink data-[state=active]:text-white"
            >
              10 км
            </TabsTrigger>
          </TabsList>

          {Object.entries(routeInfo).map(([key, info]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              <motion.div
                className="glassmorphism rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">{info.title}</h3>
                <p className="text-lg text-gray-300 mb-8">{info.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-cosmic-cyan mb-4">Детали маршрута</h4>
                    <ul className="space-y-3">
                      {info.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-cosmic-cyan rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-cosmic-pink mb-4">Карта маршрута</h4>
                    <div className="bg-gradient-to-br from-cosmic-navy to-cosmic-purple rounded-lg h-64 flex items-center justify-center border border-white/10">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cosmic-cyan to-cosmic-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {key === "general" ? "Схема расположения старта" : 
                           key === "fiveKm" ? "Схема маршрута 5 км" : 
                           "Схема маршрута 10 км"}
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                          Интерактивная карта будет доступна ближе к событию
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {key !== "general" && (
                  <motion.div
                    className="mt-8 p-6 bg-gradient-to-r from-cosmic-pink/20 to-cosmic-purple/20 rounded-xl border border-cosmic-pink/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h4 className="text-lg font-semibold text-cosmic-pink mb-3">Важная информация для участников</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                      <div>
                        <strong className="text-white">Безопасность:</strong> Весь маршрут будет перекрыт для автомобильного движения
                      </div>
                      <div>
                        <strong className="text-white">Помощь:</strong> Медицинские пункты расположены каждые 2.5 км
                      </div>
                      <div>
                        <strong className="text-white">Вода:</strong> Пункты питания на 2.5, 5 и 7.5 км (для 10 км)
                      </div>
                      <div>
                        <strong className="text-white">Волонтеры:</strong> Помощь и навигация на всех поворотах
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}