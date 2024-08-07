//import { appendFileSync, readFileSync } from "node:fs"
//import { appendFile, readFile } from "node:fs/promises"
import { PrismaClient } from "@prisma/client"
//import { appendFile, readFile } from "node:fs/promises"
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
// import { drizzle } from 'drizzle-orm/prisma/pg'
// export const dba = new PrismaClient()
// export const db = new PrismaClient().$extends(drizzle())

// export type DBZ = typeof db

export const db =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: process.env.NODE_ENV === "development" ? ["query"] : ["error"],
		errorFormat: "pretty",
	})
//export type DBZ = typeof db
/* export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['info', 'query', 'error', 'warn'] : ['error'],
    errorFormat: 'pretty',
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db */

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
//let x = "./queries-sqlite.sql"
//@ts-ignore

/* db.$on("query", (e: QueryEvent) => {
	readFile(x, "utf8")
	appendFile(
		x,
		`
    --query: ${e.query} 
    --params: ${e.params}
    
    `,
		"utf8",
	)
		.then(() => {})
		.catch(err => {
			console.log(err)
		})
})
 */
export interface QueryEvent {
	timestamp: Date
	query: string // Query sent to the database
	params: string // Query parameters
	duration: number // Time elapsed (in milliseconds) between client issuing query and database responding - not only time taken to run query
	target: string
}
