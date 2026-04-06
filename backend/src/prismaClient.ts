import { PrismaPg } from "@prisma/adapter-pg";
import type { PrismaClient } from "./generated/prisma/client";

let _prisma: PrismaClient | null = null;

export function initPrisma() {
  if (_prisma) return _prisma;

  const { PrismaClient } = require("./generated/prisma/client");

  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  });

  _prisma = new PrismaClient({ adapter });
  return _prisma;
}

const handler: ProxyHandler<object> = {
  get(_, prop) {
    return (initPrisma() as any)[prop as string];
  },
};

export default new Proxy({} as PrismaClient, handler) as PrismaClient;
