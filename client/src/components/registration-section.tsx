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
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email адрес"),
  distance: z.enum(["5km", "10km"], {
    required_error: "Выберите дистанцию",
  }),
  agreement: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласиться с условиями участия",
  }),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

export default function RegistrationSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      distance: undefined,
      agreement: false,
    },
  });

  const registrationMutation = useMutation({
    mutationFn: async (data: Omit<RegistrationForm, "agreement">) => {
      const response = await apiRequest("POST", "/api/registrations", data);
      return response.json();
    },
    onSuccess: () => {
      setShowSuccess(true);
      form.reset();
      toast({
        title: "Регистрация успешна!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/registrations"] });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
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

  const onSubmit = (data: RegistrationForm) => {
    const { agreement, ...registrationData } = data;
    registrationMutation.mutate(registrationData);
  };

  return (
    <section id="registration" className="py-20 cosmic-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Регистрация</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Заполните форму ниже, чтобы зарегистрироваться на ночной забег. Выберите подходящую дистанцию и присоединяйтесь к нам!
          </p>
        </motion.div>

        <motion.div
          className="glassmorphism rounded-2xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Имя *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Введите ваше имя"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cosmic-cyan focus:border-transparent transition-all duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cosmic-cyan focus:border-transparent transition-all duration-300"
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
                name="distance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-300">Дистанция *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cosmic-cyan focus:border-transparent transition-all duration-300">
                          <SelectValue placeholder="Выберите дистанцию" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-space-navy border-white/20">
                        <SelectItem value="5km" className="text-white hover:bg-white/10">5 км</SelectItem>
                        <SelectItem value="10km" className="text-white hover:bg-white/10">10 км</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agreement"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-cosmic-cyan data-[state=checked]:border-cosmic-cyan"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-gray-300">
                        Я согласен с{" "}
                        <a href="#" className="text-cosmic-cyan hover:underline">
                          условиями участия
                        </a>{" "}
                        и{" "}
                        <a href="#" className="text-cosmic-cyan hover:underline">
                          политикой конфиденциальности
                        </a>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={registrationMutation.isPending}
                className="w-full py-4 bg-gradient-to-r from-cosmic-pink to-cosmic-purple rounded-lg text-white font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cosmic-pink/50 disabled:opacity-50 disabled:scale-100"
              >
                {registrationMutation.isPending ? "Отправка..." : "Отправить регистрацию"}
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
              <p className="font-medium">Регистрация отправлена! Мы свяжемся с вами.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
