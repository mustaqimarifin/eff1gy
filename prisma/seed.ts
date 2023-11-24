import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const posts = await prisma.blog.createMany({
    data: [
      {
        title: 'VICE',
        slug: 'vice',
      },
      {
        title: 'Multi Unfathomable',
        slug: 'multi-unfathomable',
      },
      {
        title: 'the saus',
        slug: 'the-saus',
      },
      {
        title: 'Ass',
        slug: 'ass',
      },
      {
        title: 'Anal',
        slug: 'anal',
      },
      {
        title: 'New MDX',
        slug: 'new-mdx',
      },
    ],
  })
  await prisma.tag.createMany({
    data: [
      { name: 'lol' },
      { name: 'web' },
      { name: 'gear' },
      { name: 'portfolio' },
      { name: 'software' },
      { name: 'art' },
      { name: 'plugins' },
      { name: 'music' },
    ],
  })
  console.log({ posts })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
