import { IS_PROD } from '~/graphql/constants'

async function handleFetch(query: string) {
  if (!IS_PROD) {
    return console.log('Purging Redis cache: ', query)
  }

  //return await fetch(process.env.UPSTASH_ENDPOINT, {
  return await fetch('127.0.0.1:6379', {
    method: 'POST',
    /*     headers: {
      Authorization: `Bearer ${process.env.UPSTASH_TOKEN}`,
    }, */
    body: JSON.stringify({
      query,
    }),
  }).catch((e) => {
    console.error('Error purging Redis cache: ', e)
  })
}

export const graphcdn = {
  async purgeList(listName) {
    return await handleFetch(`mutation { _purgeQuery(queries:[${listName}]) }`)
  },

  async purgeBookmark(id) {
    return await handleFetch(`mutation { purgeBookmark(id: [${id}]) }`)
  },

  async purgePost(id) {
    return await handleFetch(`mutation { purgePost(id: [${id}]) }`)
  },

  async purgeStack(id) {
    return await handleFetch(`mutation { purgeStack(id: [${id}]) }`)
  },

  async purgeQuestion(id) {
    return await handleFetch(`mutation { purgeQuestion(id: [${id}]) }`)
  },

  async purgeUser(id) {
    return await handleFetch(`mutation { purgeUser(id: [${id}]) }`)
  },
}
