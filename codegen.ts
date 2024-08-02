import type { CodegenConfig } from "@graphql-codegen/cli"
//import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset"

const config: CodegenConfig = {
	schema: "src/graphql/typeDefs/index.ts",
	overwrite: true,
	documents: ["./src/**/*.ts", "!src/gql/**/*"],
	ignoreNoDocuments: true,
	hooks: {
		afterOneFileWrite: ["biome format --write ."],
	},
	generates: {
		/* "./src/gql/": {
			preset: "client",
			plugins: [],
			presetConfig: {
				persistedDocuments: true,
				//fragmentMasking: false,
			},
			documentTransforms: [addTypenameSelectionDocumentTransform],
			config: {
				//documentMode: "string",
				pureMagicComment: true,
				dedupeFragments: true,
				preResolveTypes: true,
				useTypeImports: true,
				skipTypename: true,
			},
		}, */
		"./src/gql/types.ts": {
			plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
			config: {
				//gqlImport: 'graphql.macro#gql',
				emitLegacyCommonJSImports: true,
				withResultType: false,
				preResolveTypes: true,
				flattenGeneratedTypes: true,
				flattenGeneratedTypesIncludeFragments: true,
				mergeFragmentTypes: true,
				useTypeImports: true,
				addDocBlocks: false,
				dedupeOperationSuffix: true,
				//onlyOperationTypes: true,
				pureMagicComment: true,
				//documentMode: "documentNode", //"documentNodeImportFragments",
				//withRefetchFn: true,
				//enumsAsTypes: true,
				experimentalFragmentVariables: true,
				//constEnums: true,
				//useIndexSignature: true,
				//defaultMapper: "Partial<{T}>",
				//addUnderscoreToArgsType: true,
				//extractAllFieldsToTypes: true,
				fragmentVariablePrefix: "DirtyAss",
			},
		},
	},
}
// 'src/schema': defineConfig(),

/*     './src/graphql/typeSlut.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
             config: {
        preResolveTypes: true,
        flattenGeneratedTypes: true,
        flattenGeneratedTypesIncludeFragments: true,
        mergeFragmentTypes: true,
        useTypeImports: true,
        addDocBlocks: false,
        dedupeOperationSuffix: true,
        pureMagicComment: true,
        //withRefetchFn: true,
        fragmentVariablePrefix: "DirtyAss"

      },
    }, */

export default config
