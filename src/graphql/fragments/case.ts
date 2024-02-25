import { gql } from "@apollo/client";

export const CaseCoreFragment = gql`
  fragment CaseCore on Case {
    __typename
    id
    count
  }
`;

export const CaseListItemFragment = gql`
  fragment CaseListItem on Case {
    ...CaseCore
  }
  ${CaseCoreFragment}
`;

export const CaseDetailFragment = gql`
  fragment CaseDetail on Case {
    ...CaseCore
    reactionCount
    viewerHasReacted
  }
  ${CaseCoreFragment}
`;
