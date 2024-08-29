/* eslint-disable node/prefer-global/process */
import { baseUrl } from "~/config/seo"
// !ENV
const imagekitURL = "https://ik.imagekit.io/mstqmarfn"
const stellateURL = process.env.STELLATE_ENDPOINT
const stellateKEY = process.env.STELLATE_KEY
const cloudinaryURL = process.env.CLOUDINARY_URL
const cloudinaryAPI = process.env.CLOUDINARY_API
const cloudinaryKEY = process.env.CLOUDINARY_KEY
const twitterID = process.env.TWITTER_ID
const twitterKEY = process.env.TWITTER_SECRET
const gitID = process.env.GITHUB_ID
const gitKEY = process.env.GITHUB_SECRET
const googleID = process.env.GOOGLE_ID
const googleKEY = process.env.GOOGLE_SECRET
const devUrl = "http://localhost:3000"
const liveURL = 'https://eff1gy.vercel.app/api/graphql'

const GQL = "/api/graphql"

const IS_PROD = process.env.NODE_ENV === "production"
const IS_DEV = process.env.NODE_ENV === "development"
const IS_PREVIEW = process.env.VERCEL_ENV === 'preview' || process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
// const GRAPHCDN_PURGE_ENDPOINT = process.env.GRAPHCDN_PURGE_ENDPOINT
const CLIENT_URL = IS_PROD ? baseUrl : devUrl

const HELLSQL = CLIENT_URL + GQL
const PREVIEW_URL = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL

const GRAPHQL_ENDPOINT = IS_DEV ? '/api/graphql' : IS_PREVIEW ? `https://${PREVIEW_URL}/api/graphql` : stellateURL

const PAGINATION_AMOUNT = 24

export {
  CLIENT_URL,
  cloudinaryAPI,
  cloudinaryKEY,
  cloudinaryURL,
  gitID,
  gitKEY,
  googleID,
  googleKEY,
  HELLSQL,
  imagekitURL,
  IS_PROD,
  PAGINATION_AMOUNT,
  stellateKEY,
  stellateURL,
  twitterID,
  twitterKEY,
  liveURL,
}
