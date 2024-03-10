import { gql } from "@apollo/client";

export const CaseCoreFragment = gql`
  fragment CaseCore on Case {
    __typename
    id
    title
    date
    slug
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
