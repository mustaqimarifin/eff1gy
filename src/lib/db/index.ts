import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db =
	globalForPrisma.prisma ||
	new PrismaClient({
		/*     log:
      env.NODE_ENV === 'development'
        ? ['info', 'query', 'error', 'warn']
        : ['error'],
    errorFormat: 'pretty', */
	});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
