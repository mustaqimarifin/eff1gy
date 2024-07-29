import { appendFileSync, readFileSync } from "node:fs"
//import { appendFile, readFile } from 'node:fs/promises'
import { PrismaClient } from "@prisma/client"
//import { appendFile, readFile } from "node:fs/promises"
//const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
// import { drizzle } from 'drizzle-orm/prisma/pg'
// export const dba = new PrismaClient()
// export const db = new PrismaClient().$extends(drizzle())

// export type DBZ = typeof db

/* import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

const libsql = createClient({
  url: `${process.env.TURSO_URL}`,
  authToken: `${process.env.TURSO_TOKEN}`,
})

const adapter = new PrismaLibSQL(libsql)
const prisma = new PrismaClient({ adapter }) */
export const db = new PrismaClient({
	//adapter,
	log: process.env.NODE_ENV === "development" ? ["query"] : ["error"],
	errorFormat: "pretty",
})

/* export const db = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
  errorFormat: 'pretty',
})
*/
let x = "./queries-drizzle.sql"
//@ts-ignore
db.$on("query", (e: QueryEvent) => {
	readFileSync(x, "utf8")
	appendFileSync(
		x,
		`
    --query: ${e.query} 
    --params: ${e.params}
    
    `,
		"utf8",
	)
	/* .then(() => {})
    .catch((err) => {
      console.log(err)
    })   */
})

export interface QueryEvent {
	timestamp: Date
	query: string // Query sent to the database
	params: string // Query parameters
	duration: number // Time elapsed (in milliseconds) between client issuing query and database responding - not only time taken to run query
	target: string
}
