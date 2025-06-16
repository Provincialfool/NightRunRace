import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch registrations
  const { data: registrations = [], isLoading } = useQuery({
    queryKey: ["/api/registrations"],
    queryFn: async () => {
      const response = await apiRequest("GET", "/api/registrations");
      return response.json();
    },
  });

  // Calculate statistics
  const stats = {
    total: registrations.length,
    fiveKm: registrations.filter((r: any) => r.distance === "5km").length,
    tenKm: registrations.filter((r: any) => r.distance === "10km").length,
    availableFiveKm: 850 - registrations.filter((r: any) => r.distance === "5km").length,
    availableTenKm: 500 - registrations.filter((r: any) => r.distance === "10km").length,
  };

  // Filter registrations based on search
  const filteredRegistrations = registrations.filter((reg: any) =>
    reg.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--space-navy)' }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">Панель администратора</h1>
          <p className="text-gray-300">Управление регистрациями и контентом Ночного забега Королёв</p>
        </motion.div>

        <Tabs defaultValue="registrations" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 border-white/20">
            <TabsTrigger value="registrations" className="text-white data-[state=active]:bg-white/20">
              Регистрации
            </TabsTrigger>
            <TabsTrigger value="program" className="text-white data-[state=active]:bg-white/20">
              Программа
            </TabsTrigger>
            <TabsTrigger value="photos" className="text-white data-[state=active]:bg-white/20">
              Фотографии
            </TabsTrigger>
          </TabsList>

          <TabsContent value="registrations" className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Card className="bg-white/10 border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-sm">Всего</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyan-400">{stats.total}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-sm">5 км</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-pink-400">{stats.fiveKm}</div>
                  <div className="text-xs text-gray-400">Осталось: {stats.availableFiveKm}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-sm">10 км</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-400">{stats.tenKm}</div>
                  <div className="text-xs text-gray-400">Осталось: {stats.availableTenKm}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-sm">Заполнено 5км</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-400">
                    {Math.round((stats.fiveKm / 850) * 100)}%
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-sm">Заполнено 10км</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-400">
                    {Math.round((stats.tenKm / 500) * 100)}%
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search */}
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Поиск участников</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Поиск по имени, фамилии или email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
              </CardContent>
            </Card>

            {/* Registrations List */}
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">
                  Список участников ({filteredRegistrations.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-8 text-gray-400">Загрузка...</div>
                ) : filteredRegistrations.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    {searchTerm ? "Участники не найдены" : "Пока нет регистраций"}
                  </div>
                ) : (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {filteredRegistrations.map((registration: any) => (
                      <div
                        key={registration.id}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-white font-semibold">
                              {registration.firstName} {registration.lastName}
                            </h3>
                            <Badge 
                              variant="outline" 
                              className={registration.distance === "5km" ? "border-pink-400 text-pink-400" : "border-purple-400 text-purple-400"}
                            >
                              {registration.distance}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-400 space-y-1">
                            <div>Email: {registration.email}</div>
                            <div>Телефон: {registration.phone}</div>
                            <div>Город: {registration.city}, {registration.country}</div>
                            {registration.club && <div>Клуб: {registration.club}</div>}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(registration.createdAt).toLocaleDateString('ru-RU', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="program" className="space-y-6">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Управление программой</CardTitle>
                <CardDescription className="text-gray-400">
                  Редактирование расписания мероприятия
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-400">
                  Функционал редактирования программы будет добавлен в следующих обновлениях
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="photos" className="space-y-6">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Управление фотографиями</CardTitle>
                <CardDescription className="text-gray-400">
                  Загрузка и управление фотографиями с мероприятия
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-400">
                  Фотографии будут доступны для загрузки после проведения мероприятия 28 июня 2025
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            onClick={() => window.location.href = '/'}
            className="text-white border-white/30 hover:bg-white/10"
          >
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
}