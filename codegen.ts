import type { CodegenConfig } from "@graphql-codegen/cli";
//import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'

const config: CodegenConfig = {
	schema: "src/graphql/typeDefs/index.ts",
	overwrite: true,
	documents: ["./src/**/*.ts"],
	ignoreNoDocuments: true,
	generates: {
		/*"./src/gql/": {
			preset: "client",
			plugins: [],
			/*    presetConfig: {
        persistedDocuments: true,
      },
      documentTransforms: [addTypenameSelectionDocumentTransform],  
			config: {
				pureMagicComment: true,
				//skipTypename: true,
				dedupeFragments: true,
				//preResolveTypes: true,
			},
		}, */
		"./src/graphql/typeSlut.ts": {
			plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
			config: {
				preResolveTypes: true,
				flattenGeneratedTypes: true,
				flattenGeneratedTypesIncludeFragments: true,
				mergeFragmentTypes: true,
				useTypeImports: true,
				addDocBlocks: false,
				dedupeOperationSuffix: true,
				pureMagicComment: true,
			},
		},
	},
};
export default config;
