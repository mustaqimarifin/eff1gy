import { IS_PROD, STELLATE_ENDPOINT } from '~/graphql/constants'

async function handleFetch(query) {
  if (!IS_PROD) {
    return console.log('Purging Stellate cache: ', query)
  }

  return await fetch(STELLATE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'stellate-token': process.env.STELLATE_KEY,
    },
    body: JSON.stringify({
      query,
    }),
  }).catch((e) => {
    console.error('Error barfing cache: ', e)
  })
}

export const stellate = {
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
