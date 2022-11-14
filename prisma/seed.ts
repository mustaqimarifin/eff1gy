import { PrismaClient } from '@prisma/client'
import { nanoid } from 'nanoid'
const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {
  const tag = await prisma.tag.createMany({
    data: [
      {
        id: nanoid(12),
        name: 'web',
      },
      {
        id: nanoid(12),
        name: 'portfolio',
      },
      {
        id: nanoid(12),

        name: 'lol',
      },
      {
        id: nanoid(12),
        name: 'apps',
      },
      {
        id: nanoid(12),
        name: 'plugins',
      },
    ],
  })
  console.log(`Created ${tag.count} AMAs`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
