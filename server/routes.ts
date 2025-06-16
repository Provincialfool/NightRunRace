import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Registration endpoint
  app.post("/api/registrations", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(validatedData);
      res.json({ message: "Регистрация успешно отправлена!", registration });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Ошибка валидации данных", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: "Внутренняя ошибка сервера" });
      }
    }
  });

  // Get all registrations (for admin purposes if needed)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getRegistrations();
      res.json(registrations);
    } catch (error) {
      res.status(500).json({ message: "Ошибка получения регистраций" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
