import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'src/graphql/typeDefs/index.ts',
  overwrite: true,
  documents: './src/**/*.{tsx,ts}',
  ignoreNoDocuments: true,

  hooks: {
    afterOneFileWrite: ['eslint --fix', 'prettier --write'],
  },
  generates: {
    /*     './src/gql/': {
      preset: 'client',
      plugins: ['named-operations-object'],
      presetConfig: {
        persistedDocuments: true,
      },
      documentTransforms: [addTypenameSelectionDocumentTransform],
      config: {
        preResolveTypes: true,
        identifierName: 'ListAllOperations',
      },
    }, */
    './src/graphql/typeSlut.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        'typescript-apollo-client-helpers',
        'named-operations-object',
      ],
      config: {
        withHOC: false,
        withHooks: true,
        withComponent: false,
        reactApolloVersion: 3,
        preResolveTypes: true,
        identifierName: 'ListAllOperations',
        flattenGeneratedTypes: true,
        flattenGeneratedTypesIncludeFragments: true,
        mergeFragmentTypes: true,
      },
    },
  },
}
export default config
