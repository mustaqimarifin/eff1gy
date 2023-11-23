import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.blog.createMany({
    data: [
      {
        id: 'b134a546-cd3b-47ae-8eba-3aba2df93a84',
        title: 'VICE',
        slug: 'vice',
      },
      {
        id: 'd6b20993-49d1-4e5b-add3-902a0955c07b',
        title: 'Multi Unfathomable',
        slug: 'multi-unfathomable',
      },
      {
        id: 'dd09feac-5b22-4ab1-8119-24657e8517bb',
        title: 'the saus',
        slug: 'the-saus',
      },
      {
        id: '58ed33dc-3375-4b9e-bc81-1d93f6988c8a',
        title: 'Ass',
        slug: 'ass',
      },
      {
        id: 'f2cd4774-4c75-42c8-b405-a32cef4d3b7c',
        title: 'Anal',
        slug: 'anal',
      },
      {
        id: '19cf1230-f1ab-45c0-84f5-59381d48bbe9',
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
  console.log({})
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
