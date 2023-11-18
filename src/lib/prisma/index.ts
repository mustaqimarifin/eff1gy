import { PrismaClient } from '@prisma/client'
import { env } from 'process'

//const PrismaENV = () => isProd ? PrismaClientEdge : PrismaClient

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log:
            env.NODE_ENV === 'development'
                ? ['info', 'query', 'error', 'warn']
                : ['error'],
        errorFormat: 'pretty',
    })

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
