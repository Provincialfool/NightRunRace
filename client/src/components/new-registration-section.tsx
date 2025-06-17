import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const registrationSchema = z.object({
  firstName: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  lastName: z.string().min(2, "Фамилия должна содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email адрес"),
  distance: z.enum(["5km", "10km"], {
    required_error: "Выберите дистанцию",
  }),
  country: z.string().min(1, "Укажите страну").default("Россия"),
  city: z.string().min(1, "Укажите город"),
  address: z.string().min(5, "Укажите полный адрес"),
  phone: z.string().min(10, "Укажите корректный номер телефона"),
  emergencyPhone: z.string().optional(),
  club: z.string().optional(),
  isNotInClub: z.boolean().default(false),
  profession: z.string().optional(),
  medicalCertificate: z.boolean().refine((val) => val === true, {
    message: "Необходимо подтвердить наличие медицинской справки",
  }),
  termsAgreement: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласиться с условиями участия",
  }),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const distanceOptions = [
  {
    distance: "5km",
    title: "5 км",
    totalSlots: 850,
    availableSlots: 723,
    gradient: "from-cosmic-cyan to-cosmic-purple"
  },
  {
    distance: "10km", 
    title: "10 км",
    totalSlots: 500,
    availableSlots: 432,
    gradient: "from-cosmic-pink to-cosmic-orange"
  }
];

export default function NewRegistrationSection() {
  const [selectedDistance, setSelectedDistance] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      distance: undefined,
      country: "Россия",
      city: "",
      address: "",
      phone: "",
      emergencyPhone: "",
      club: "",
      isNotInClub: false,
      profession: "",
      medicalCertificate: false,
      termsAgreement: false,
    },
  });

  const registrationMutation = useMutation({
    mutationFn: async (data: RegistrationForm) => {
      const formData = {
        ...data,
        medicalCertificate: data.medicalCertificate ? "true" : "false",
        termsAgreement: data.termsAgreement ? "true" : "false",
        isNotInClub: data.isNotInClub ? "true" : "false",
      };
      const response = await apiRequest("POST", "/api/registrations", formData);
      return response.json();
    },
    onSuccess: () => {
      setShowSuccess(true);
      form.reset();
      toast({
        title: "Регистрация успешна!",
        description: "Проверьте email для подтверждения регистрации.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/registrations"] });
      
      setTimeout(() => {
        setShowSuccess(false);
        setShowForm(false);
        setSelectedDistance("");
      }, 5000);
    },
    onError: (error: Error) => {
      toast({
        title: "Ошибка регистрации",
        description: error.message || "Произошла ошибка при отправке формы",
        variant: "destructive",
      });
    },
  });

  const handleDistanceSelect = (distance: string) => {
    setSelectedDistance(distance);
    form.setValue("distance", distance as "5km" | "10km");
    setShowForm(true);
  };

  const onSubmit = (data: RegistrationForm) => {
    registrationMutation.mutate(data);
  };

  return (
    <section id="registration" className="py-20" style={{ background: 'linear-gradient(135deg, hsl(240, 55%, 9%) 0%, hsl(249, 57%, 20%) 50%, hsl(258, 52%, 28%) 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Регистрация</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Выберите дистанцию и заполните анкету для участия в ночном забеге
          </p>
        </motion.div>

        {!showForm && (
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {distanceOptions.map((option, index) => (
              <motion.div
                key={option.distance}
                className={`glassmorphism rounded-2xl p-8 cursor-pointer hover:scale-105 transform transition-all duration-300 bg-gradient-to-r ${option.gradient} opacity-90 hover:opacity-100`}
                onClick={() => handleDistanceSelect(option.distance)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white mb-4">{option.title}</h3>
                  <div className="mb-6">
                    <div className="text-lg text-white/90 mb-2">
                      Доступно мест: <span className="font-bold text-white">{option.availableSlots}</span>
                    </div>
                    <div className="text-sm text-white/70">
                      Всего: {option.totalSlots}
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                      <div 
                        className="bg-white rounded-full h-2 transition-all duration-300"
                        style={{ width: `${(option.availableSlots / option.totalSlots) * 100}%` }}
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm">
                    Выбрать дистанцию
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {showForm && (
          <motion.div
            className="glassmorphism rounded-2xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">
                Анкета участника - {distanceOptions.find(d => d.distance === selectedDistance)?.title}
              </h3>
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowForm(false);
                  setSelectedDistance("");
                }}
                className="text-white border-white/30 hover:bg-white/10 hover:text-white bg-transparent"
              >
                Изменить дистанцию
              </Button>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Имя *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Введите имя"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Фамилия *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Введите фамилию"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Email для подтверждения *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Location */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Страна *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300">
                              <SelectValue placeholder="Выберите страну" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-space-navy border-white/20">
                            <SelectItem value="Россия" className="text-white hover:bg-white/10">Россия</SelectItem>
                            <SelectItem value="Беларусь" className="text-white hover:bg-white/10">Беларусь</SelectItem>
                            <SelectItem value="Казахстан" className="text-white hover:bg-white/10">Казахстан</SelectItem>
                            <SelectItem value="Украина" className="text-white hover:bg-white/10">Украина</SelectItem>
                            <SelectItem value="Другая" className="text-white hover:bg-white/10">Другая</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Город *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Введите город"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Адрес *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Введите полный адрес"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Contacts */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Мобильный телефон *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+7 (XXX) XXX-XX-XX"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="emergencyPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Телефон для экстренной связи</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+7 (XXX) XXX-XX-XX"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="club"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Клуб</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Название клуба"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profession"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Профессия</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ваша профессия"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="isNotInClub"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-gray-300">
                          Я не состою в клубе
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Medical Certificate */}
                <FormField
                  control={form.control}
                  name="medicalCertificate"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-gray-300">
                          С необходимостью предоставления медицинской справки ознакомлен *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Terms Agreement */}
                <FormField
                  control={form.control}
                  name="termsAgreement"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-gray-300">
                          С условиями{" "}
                          <a href="#" className="text-cyan-400 hover:underline">
                            предоставления услуг и положением о соревновании
                          </a>{" "}
                          ознакомлен и согласен *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={registrationMutation.isPending}
                  className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-pink-500/50 disabled:opacity-50 disabled:scale-100"
                >
                  {registrationMutation.isPending ? "Отправка..." : "Продолжить"}
                </Button>
              </form>
            </Form>

            {/* Success Message */}
            {showSuccess && (
              <motion.div
                className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <p className="font-medium">Регистрация отправлена! Проверьте email для подтверждения.</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}