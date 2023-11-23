import { PrismaClient } from '@prisma/client'

import { genId } from '~/lib/nanoid'

const prisma = new PrismaClient()

async function main() {
  const posts = await prisma.blog.createMany({
    data: [
      {
        id: genId(),
        title: 'VICE',
        slug: 'vice',
      },
      {
        id: genId(),
        title: 'Multi Unfathomable',
        slug: 'multi-unfathomable',
      },
      {
        id: genId(),
        title: 'the saus',
        slug: 'the-saus',
      },
      {
        id: genId(),
        title: 'Ass',
        slug: 'ass',
      },
      {
        id: genId(),
        title: 'Anal',
        slug: 'anal',
      },
      {
        id: genId(),
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
