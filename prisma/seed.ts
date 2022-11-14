import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {
  const tag = await prisma.tag.createMany({
    data: [
      {
        name: 'web',
      },
      {
        name: 'portfolio',
      },
      {
        name: 'lol',
      },
      {
        name: 'apps',
      },
      {
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
