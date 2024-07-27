import { IS_PROD, stellateKEY, stellateURL } from "~/graphql/constants"

async function handleFetch(query) {
	if (!IS_PROD) {
		return console.log("Purging GraphCDN cache: ", query)
	}

	return await fetch(stellateURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"graphcdn-token": stellateKEY,
		},
		body: JSON.stringify({
			query,
		}),
	}).catch(e => {
		console.error("Error purging GraphCDN cache: ", e)
	})
}

export const graphcdn = {
	async purgeList(listName) {
		return await handleFetch(`mutation { _purgeQuery(queries:[${listName}]) }`)
	},

	async purgeBookmark(id) {
		return await handleFetch(`mutation { purgeBookmark(id: [${id}]) }`)
	},

	async purgeBlog(id) {
		return await handleFetch(`mutation { purgeBlog(id: [${id}]) }`)
	},

	async purgeCase(id) {
		return await handleFetch(`mutation { purgeCase(id: [${id}]) }`)
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
