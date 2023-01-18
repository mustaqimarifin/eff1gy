import KeyvRedis from '@keyv/redis'
import Keyv from 'keyv'
const redisUrl = 'redis://localhost:6379'
//const redisNameSpace = 'upskirt'

const redis = new KeyvRedis(redisUrl)
const db = new Keyv({ store: redis })

export { db }
