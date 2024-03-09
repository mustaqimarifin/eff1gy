import { gql } from "@apollo/client";

import { CaseDetailFragment, CaseListItemFragment } from "~/graphql/fragments/case";

export const GET_CASES = gql`
  query getCases {
    cases {
      ...CaseListItem
    }
  }
  ${CaseListItemFragment}
`;

export const GET_CASE = gql`
  query getCase($slug: String!) {
    case(slug: $slug) {
      ...CaseDetail
    }
  }
  ${CaseDetailFragment}
`;
