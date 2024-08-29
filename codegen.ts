import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
	schema: "src/graphql/typeDefs/index.ts",
	overwrite: true,
	documents: ["./src/**/*.ts", "!src/gql/**/*"],
	ignoreNoDocuments: true,
	generates: {
		/* "./src/gql/": {
			preset: "client",
			presetConfig: {
				persistedDocuments: {
					hashAlgorithm: "sha256",
				},
				fragmentMasking: false,
			},
			documentTransforms: [addTypenameSelectionDocumentTransform],
			plugins: [],
			config: {
				flattenGeneratedTypes: true,
				flattenGeneratedTypesIncludeFragments: true,
				pureMagicComment: true,
				dedupeFragments: true,
				preResolveTypes: true,
				useTypeImports: true,
				//inputMaybeValue: "T | null | undefined",
				//addUnderscoreToArgsType: true,
				//extractAllFieldsToTypes: true,
			},
		}, */
		"./src/types/apollo.ts": {
			plugins: ["typescript", "typescript-operations"],
			config: {
				preResolveTypes: true,
				flattenGeneratedTypes: true,
				flattenGeneratedTypesIncludeFragments: true,
				mergeFragmentTypes: true,
				useTypeImports: true,
				addDocBlocks: false,
				dedupeOperationSuffix: true,
				pureMagicComment: true,
				fragmentVariableSuffix: "FV",
				documentVariableSuffix: "DX",
			},
		},
	},
}
export default config
