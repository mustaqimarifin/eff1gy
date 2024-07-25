import type { CodegenConfig } from "@graphql-codegen/cli";
// import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'

const config: CodegenConfig = {
	schema: "src/graphql/typeDefs/index.ts",
	overwrite: true,
	documents: ["./src/graphql/**/*.ts"],
	ignoreNoDocuments: true,
	hooks: {
		afterOneFileWrite: ["biome format --write"],
	},
	generates: {
		"./src/graphql/typeSlut.tsx": {
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
				documentMode: "documentNode",
				withRefetchFn: true,
				//addUnderscoreToArgsType: true,
				extractAllFieldsToTypes: true,
				fragmentVariablePrefix: "DirtyAss",
			},
		},
	},
};
// 'src/schema': defineConfig(),

/* "./src/gql/": {
			preset: "client",
			plugins: [],
			    presetConfig: {
        persistedDocuments: true,
        fragmentMasking: false,
      },
      documentTransforms: [addTypenameSelectionDocumentTransform],
			config: {
				pureMagicComment: true,
				dedupeFragments: true,
				preResolveTypes: true,
			},
		},  */
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

export default config;
