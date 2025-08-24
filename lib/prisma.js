import { PrismaClient } from "@prisma/client";

const prismaOptions = {
  datasources: {
    db: {
      url: process.env.DIRECT_URL, // SESSION POOLER
    },
  },
};

export const db =
  globalThis.prisma || new PrismaClient(prismaOptions);

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
