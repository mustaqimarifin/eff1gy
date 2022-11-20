import { Feed } from 'feed'

import routes from '~/config/routes'
import { baseEmail, CLIENT_URL } from '~/config/seo'

export async function generateRSS(posts) {
  const date = new Date()
  const updated = new Date(posts[0].publishedAt)
  const author = {
    name: 'Mustaqim Arifin',
    email: baseEmail,
    link: CLIENT_URL,
  }

  const feed = new Feed({
    title: routes.writing.seo.title,
    description: routes.writing.seo.description,
    id: CLIENT_URL,
    link: CLIENT_URL,
    language: 'en',
    image: `${CLIENT_URL}/static/meta/icon-512.png`,
    favicon: `${CLIENT_URL}/static/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Mustaqim Arifin`,
    updated,
    feedLinks: {
      rss2: `${CLIENT_URL}/writing/rss`,
      json: `${CLIENT_URL}/writing/feed`,
      atom: `${CLIENT_URL}/writing/atom`,
    },
    author,
  })

  posts.forEach((post) => {
    const url = `${CLIENT_URL}/writing/${post.slug}`
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt,
      author: [author],
      contributor: [author],
      date: new Date(post.publishedAt),
    })
  })

  const rss = feed.rss2()
  const atom = feed.atom1()
  const json = feed.json1()

  return {
    rss,
    atom,
    json,
  }
}
