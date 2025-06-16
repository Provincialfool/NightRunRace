import { users, registrations, type User, type InsertUser, type Registration, type InsertRegistration } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getRegistrations(): Promise<Registration[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private registrations: Map<number, Registration>;
  private currentUserId: number;
  private currentRegistrationId: number;

  constructor() {
    this.users = new Map();
    this.registrations = new Map();
    this.currentUserId = 1;
    this.currentRegistrationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = this.currentRegistrationId++;
    const registration: Registration = {
      id,
      firstName: insertRegistration.firstName,
      lastName: insertRegistration.lastName,
      email: insertRegistration.email,
      distance: insertRegistration.distance,
      country: insertRegistration.country || "Россия",
      city: insertRegistration.city,
      address: insertRegistration.address,
      phone: insertRegistration.phone,
      emergencyPhone: insertRegistration.emergencyPhone || null,
      club: insertRegistration.club || null,
      isNotInClub: insertRegistration.isNotInClub || "false",
      profession: insertRegistration.profession || null,
      medicalCertificate: insertRegistration.medicalCertificate || "false",
      termsAgreement: insertRegistration.termsAgreement || "false",
      createdAt: new Date(),
    };
    this.registrations.set(id, registration);
    return registration;
  }

  async getRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }
}

export const storage = new MemStorage();
