import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  // Personal info
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  distance: text("distance").notNull(),
  
  // Location
  country: text("country").notNull().default("Россия"),
  city: text("city").notNull(),
  address: text("address").notNull(),
  
  // Contacts
  phone: text("phone").notNull(),
  emergencyPhone: text("emergency_phone"),
  
  // Additional info
  club: text("club"),
  isNotInClub: text("is_not_in_club").default("false"),
  profession: text("profession"),
  
  // Medical
  medicalCertificate: text("medical_certificate").default("false"),
  
  // Agreements
  termsAgreement: text("terms_agreement").default("false"),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  createdAt: true,
});

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;

// Keep existing users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
