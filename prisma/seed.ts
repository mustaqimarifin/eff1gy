import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {
  const sticker = await prisma.sticker.createMany({
    data: [
      {
        model: 'bulma',
        label: 'Bulma',
        url: 'https://i.postimg.cc/8zHSsSRD/bulma.webp',
      },
      {
        model: 'suss',
        label: 'Suss',
        url: 'https://i.postimg.cc/sXBdnGtD/suss.webp',
      },
      {
        model: 'madprops',
        label: 'MadProps',
        url: 'https://i.postimg.cc/PqVnzQVR/nofucks.webp',
      },
      {
        model: 'catjam',
        label: 'CatJam',
        url: 'https://res.cloudinary.com/mstqmarfn/image/upload/v1669549546/xyz/catjam.webp',
      },
    ],
  })
  console.log(`Blew ${sticker.count} dicks`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
