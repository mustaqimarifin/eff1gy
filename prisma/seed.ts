import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.blog.createMany({
    data: [
      {
        //id: 'dd09feac-5b22-4ab1-8119-24657e8517bb',
        //date: '2022-10-04T10:43:00.000Z',
        slug: 'ass',
      },
      {
        //id: 'f2cd4774-4c75-42c8-b405-a32cef4d3b7c',
        //date: '2022-10-27T02:37:23.446Z',
        slug: 'anal',
      },
      {
        //id: 'dd09feac-5b22-4ab1-8119-24657e8517bb',
        // date: '2022-10-04T10:43:00.000Z',
        slug: 'the-saus',
      },
      {
        // id: '19cf1230-f1ab-45c0-84f5-59381d48bbe9',
        //  date: '2022-10-08T08:01:00.000Z',
        slug: 'new-mdx',
      },
      {
        //id: 'd6b20993-49d1-4e5b-add3-902a0955c07b',
        //date: '2022-10-05T12:43:00.000Z',
        slug: 'multi-unfathomable',
      },
    ],
  })
  await prisma.tag.createMany({
    data: [
      { name: 'lol' },
      { name: 'web' },
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
