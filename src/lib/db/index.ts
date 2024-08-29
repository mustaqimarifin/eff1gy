import { createClient } from "@libsql/client"
import { PrismaLibSQL } from "@prisma/adapter-libsql"
import { PrismaClient } from "@prisma/client"

const libsql = createClient({
	url: `${process.env.TURSO_URL}`,
	//url: "file:prisma/dev.db",
	authToken: `${process.env.TURSO_TOKEN}`,
})

const adapter = new PrismaLibSQL(libsql)

export const db = new PrismaClient({
	adapter,
	//errorFormat: "pretty",
})

//const file = "./queries.sql"

//@ts-ignore
/* db.$on("query", (e: QueryEvent) => {
	readFileSync(file, "utf8")
	appendFileSync(
		file,
		`
    
    query: ${e.query}
     
    --params: ${e.params}
    
    `,
		"utf8",
	)
}) */

export interface QueryEvent {
	timestamp: Date
	query: string // Query sent to the database
	params: string // Query parameters
	duration: number // Time elapsed (in milliseconds) between client issuing query and database responding - not only time taken to run query
	target: string
}
