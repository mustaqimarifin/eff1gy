import type { PersistedQueryManifestConfig } from "@apollo/generate-persisted-query-manifest"
import { fromGraphQLCodegenPersistedDocuments } from "@apollo/generate-persisted-query-manifest"

const config: PersistedQueryManifestConfig = {
	documents: fromGraphQLCodegenPersistedDocuments("./src/gql/persisted-documents.json"),
}

export default config
