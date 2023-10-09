import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
async function seed() {
  /*   const blog1 = await prisma.blog.create({
    data: {
      id: 'd6b20993-49d1-4e5b-add3-902a0955c07b',
      date: '2022-10-05T12:43:00.000Z',
      slug: 'multi-unfathomable',
    },
  })
  const blog2 = await prisma.blog.create({
    data: {
      id: '19cf1230-f1ab-45c0-84f5-59381d48bbe9',
      date: '2022-10-08T08:01:00.000Z',
      slug: 'new-mdx',
    },
  })

  const blog3 = await prisma.blog.create({
    data: {
      id: 'f2cd4774-4c75-42c8-b405-a32cef4d3b7c',
      date: '2022-10-27T02:37:23.446Z',
      slug: 'anal',
    },
  })

  const blog4 = await prisma.blog.create({
    data: {
      id: 'dd09feac-5b22-4ab1-8119-24657e8517bb',
      date: '2022-10-04T10:43:00.000Z',
      slug: 'the-saus',
    },
  }) */
  await prisma.tag.createMany({
    data: [
      { name: "lol" },
      { name: "web" },
      { name: "portfolio" },
      { name: "software" },
      { name: "art" },
      { name: "plugins" },
      { name: "music" },
    ],
  })
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

/*   const blog2 = await prisma.blog.create({
    data: {
      slug: 'beginners-gusluge-to-the-programming-portfolio',
    },
  });

  const blog3 = await prisma.blog.create({
    data: {
      slug: 'career',
    },
  });
  const blog4 = await prisma.blog.create({
    data: {
      slug: 'fonts',
    },
  });
  const blog5 = await prisma.blog.create({
    data: {
      slug: 'dx',
    },
  }); */

/*  const comment3 = await prisma.comment.create({
    data: {
      text: 'I am another root comment in a vagina',
      userslug: sally.slug,
      slug: blog4.slug
    }
  });

  const like1 = await prisma.like.create({
    data: {
      commentslug: comment1.slug,
      userslug: sally.slug
    }
  }); */
