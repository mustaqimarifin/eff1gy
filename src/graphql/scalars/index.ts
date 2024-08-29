import { GraphQLScalarType, Kind } from "graphql"

function identity(value: any) {
	return value
}

export const DateQL = new GraphQLScalarType({
	name: "Date",
	description: "Date custom scalar type",
	serialize(value: Date) {
		return value.getTime() // Convert outgoing Date to integer for JSON
	},
	parseValue(value: number) {
		return new Date(value) // Convert incoming integer to Date
	},
	parseLiteral(ast) {
		if (ast.kind === Kind.INT) {
			// Convert hard-coded AST string to integer and then to Date
			return new Date(Number.parseInt(ast.value, 10))
		}
		// Invalid hard-coded value (not an integer)
		return null
	},
})

function parseObject(typeName, ast, variables) {
	const value = Object.create(null)
	for (const field of ast.fields) {
		value[field.name.value] = _parseLiteral(typeName, field.value, variables)
	}
	/* 		ast.fields.forEach((field) => {
		// eslint-disable-next-line no-use-before-define
		value[field.name.value] = _parseLiteral(typeName, field.value, variables);
	}); */
	return value
}

function _parseLiteral(typeName, ast, variables) {
	switch (ast.kind) {
		case Kind.STRING:
		case Kind.BOOLEAN:
			return ast.value

		case Kind.INT:
		case Kind.FLOAT:
			return Number.parseFloat(ast.value)

		case Kind.OBJECT:
			return parseObject(typeName, ast, variables)

		case Kind.LIST:
			return ast.values.map(n => _parseLiteral(typeName, n, variables))

		case Kind.NULL:
			return null

		case Kind.VARIABLE:
			return variables ? variables[ast.name.value] : undefined

		default:
			throw new TypeError(`${typeName} cannot represent value: `)
	}
}

export const JSOD = new GraphQLScalarType({
	name: "JSOD",
	description: "Odd custom scalar type",
	serialize: identity,
	parseValue: identity,
	parseLiteral: function parseLiteral(ast, variables) {
		return _parseLiteral("JSOD", ast, variables)
	},
})
