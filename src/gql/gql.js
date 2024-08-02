import * as o from '@apollo/client';
import { gql } from '@apollo/client';

var a={},F=(u=>(u.Private="PRIVATE",u.Public="PUBLIC",u))(F||{}),R=(r=>(r.Blog="BLOG",r.Bookmark="BOOKMARK",r.Case="CASE",r.Event="EVENT",r.Post="POST",r.Question="QUESTION",r.Stack="STACK",r))(R||{}),O=(u=>(u.Answered="ANSWERED",u.Pending="PENDING",u))(O||{}),T=(r=>(r.Blog="BLOG",r.Bookmark="BOOKMARK",r.Case="CASE",r.Event="EVENT",r.Post="POST",r.Question="QUESTION",r.Stack="STACK",r))(T||{}),h=(i=>(i.Admin="ADMIN",i.Blocked="BLOCKED",i.User="USER",i))(h||{}),L=(r=>(r.Blog="BLOG",r.Bookmark="BOOKMARK",r.Case="CASE",r.Event="EVENT",r.Post="POST",r.Question="QUESTION",r.Stack="STACK",r))(L||{}),d=gql`
    fragment BlogCore on Blog {
  __typename
  id
  title
  date
  slug
  count
}
    `,N=gql`
    fragment BlogListItem on Blog {
  ...BlogCore
}
    ${d}`,q=gql`
    fragment BlogDetail on Blog {
  ...BlogCore
  reactionCount
  viewerHasReacted
}
    ${d}`,b=gql`
    fragment BookmarkCore on Bookmark {
  __typename
  id
  url
  host
  title
  description
  faviconUrl
  count
}
    `,l=gql`
    fragment BookmarkDetail on Bookmark {
  ...BookmarkCore
  reactionCount
  viewerHasReacted
  tags {
    name
  }
}
    ${b}`,K=gql`
    fragment BookmarkListItem on Bookmark {
  ...BookmarkCore
}
    ${b}`,W=gql`
    fragment BookmarksConnection on BConnection {
  pageInfo {
    hasNextPage
    totalCount
    endCursor
  }
  edges {
    cursor
    node {
      ...BookmarkListItem
    }
  }
}
    ${K}`,k=gql`
    fragment CaseCore on Case {
  __typename
  id
  title
  date
  slug
  count
}
    `,J=gql`
    fragment CaseListItem on Case {
  ...CaseCore
}
    ${k}`,j=gql`
    fragment CaseDetail on Case {
  ...CaseCore
  reactionCount
  viewerHasReacted
}
    ${k}`,s=gql`
    fragment UserInfo on User {
  __typename
  id
  username
  image
  name
  role
  isViewer
  isAdmin
}
    `,p=gql`
    fragment CommentInfo on Comment {
  __typename
  id
  parentId
  createdAt
  updatedAt
  text
  viewerCanEdit
  viewerCanDelete
  author {
    ...UserInfo
  }
}
    ${s}`,S=gql`
    fragment EventCore on Event {
  __typename
  id
  count
}
    `,_t=gql`
    fragment EventListItem on Event {
  ...EventCore
}
    ${S}`,Ct=gql`
    fragment EventDetail on Event {
  ...EventCore
  reactionCount
  viewerHasReacted
}
    ${S}`,Q=gql`
    fragment PostCore on Post {
  __typename
  id
  publishedAt
  title
  slug
  excerpt
}
    `,z=gql`
    fragment PostListItem on Post {
  ...PostCore
}
    ${Q}`,y=gql`
    fragment PostDetail on Post {
  ...PostCore
  text
  featureImage
  reactionCount
  hitRate
  viewerHasReacted
}
    ${Q}`,x=gql`
    fragment QuestionCore on Question {
  __typename
  id
  title
  audioUrl
  waveform
  count
  createdAt
  author {
    ...UserInfo
  }
}
    ${s}`,g=gql`
    fragment QuestionDetail on Question {
  ...QuestionCore
  description
  status
  viewerCanEdit
  viewerCanComment
  reactionCount
  viewerHasReacted
}
    ${x}`,X=gql`
    fragment QuestionListItem on Question {
  ...QuestionCore
}
    ${x}`,Y=gql`
    fragment QuestionsConnection on QConnection {
  pageInfo {
    hasNextPage
    totalCount
    endCursor
  }
  edges {
    cursor
    node {
      ...QuestionListItem
    }
  }
}
    ${X}`,c=gql`
    fragment StackCore on Stack {
  __typename
  id
  name
  image
  url
  slug
  count
}
    `,m=gql`
    fragment StackDetail on Stack {
  ...StackCore
  createdAt
  description
  reactionCount
  viewerHasReacted
  usedByViewer
  usedBy {
    ...UserInfo
  }
  tags {
    name
  }
}
    ${c}
${s}`,Z=gql`
    fragment StackListItem on Stack {
  ...StackCore
}
    ${c}`,tt=gql`
    fragment StacksConnection on SConnection {
  pageInfo {
    hasNextPage
    totalCount
    endCursor
  }
  edges {
    cursor
    node {
      ...StackListItem
    }
  }
}
    ${Z}`,et=gql`
    fragment UserSettings on User {
  email
  pendingEmail
}
    `,nt=gql`
    mutation editBookmark($id: ID!, $data: EditBookmarkInput!) {
  editBookmark(id: $id, data: $data) {
    ...BookmarkDetail
  }
}
    ${l}`;function It(t){let e={...a,...t};return o.useMutation(nt,e)}var ot=gql`
    mutation deleteBookmark($id: ID!) {
  deleteBookmark(id: $id)
}
    `;function Dt(t){let e={...a,...t};return o.useMutation(ot,e)}var at=gql`
    mutation addBookmark($data: AddBookmarkInput!) {
  addBookmark(data: $data) {
    ...BookmarkDetail
  }
}
    ${l}`;function Bt(t){let e={...a,...t};return o.useMutation(at,e)}var rt=gql`
    mutation addComment($refId: ID!, $parentId: String, $type: CommentType!, $text: String!) {
  addComment(refId: $refId, parentId: $parentId, type: $type, text: $text) {
    ...CommentInfo
  }
}
    ${p}`;function Vt(t){let e={...a,...t};return o.useMutation(rt,e)}var st=gql`
    mutation editComment($id: ID!, $text: String!) {
  editComment(id: $id, text: $text) {
    ...CommentInfo
  }
}
    ${p}`;function ft(t){let e={...a,...t};return o.useMutation(st,e)}var ut=gql`
    mutation deleteComment($id: ID!) {
  deleteComment(id: $id)
}
    `;function Gt(t){let e={...a,...t};return o.useMutation(ut,e)}var it=gql`
    mutation editPost($id: ID!, $data: EditPostInput!) {
  editPost(id: $id, data: $data) {
    ...PostDetail
  }
}
    ${y}`;function Et(t){let e={...a,...t};return o.useMutation(it,e)}var lt=gql`
    mutation deletePost($id: ID!) {
  deletePost(id: $id)
}
    `;function vt(t){let e={...a,...t};return o.useMutation(lt,e)}var pt=gql`
    mutation addPost($data: AddPostInput!) {
  addPost(data: $data) {
    ...PostDetail
  }
}
    ${y}`;function Ut(t){let e={...a,...t};return o.useMutation(pt,e)}var yt=gql`
    mutation editQuestion($id: ID!, $data: EditQuestionInput!) {
  editQuestion(id: $id, data: $data) {
    ...QuestionDetail
  }
}
    ${g}`;function wt(t){let e={...a,...t};return o.useMutation(yt,e)}var gt=gql`
    mutation deleteQuestion($id: ID!) {
  deleteQuestion(id: $id)
}
    `;function Pt(t){let e={...a,...t};return o.useMutation(gt,e)}var ct=gql`
    mutation addQuestion($data: AddQuestionInput!) {
  addQuestion(data: $data) {
    ...QuestionDetail
  }
}
    ${g}`;function $t(t){let e={...a,...t};return o.useMutation(ct,e)}var mt=gql`
    mutation toggleReaction($refId: ID!, $type: ReactionType!) {
  toggleReaction(refId: $refId, type: $type) {
    ... on Stack {
      id
      reactionCount
      viewerHasReacted
    }
    ... on Bookmark {
      id
      url
      reactionCount
      viewerHasReacted
    }
    ... on Question {
      id
      reactionCount
      viewerHasReacted
    }
    ... on Blog {
      id
      reactionCount
      viewerHasReacted
    }
    ... on Event {
      id
      reactionCount
      viewerHasReacted
    }
    ... on Case {
      id
      reactionCount
      viewerHasReacted
    }
  }
}
    `;function Ht(t){let e={...a,...t};return o.useMutation(mt,e)}var dt=gql`
    mutation editStack($id: ID!, $data: EditStackInput!) {
  editStack(id: $id, data: $data) {
    ...StackDetail
  }
}
    ${m}`;function Ft(t){let e={...a,...t};return o.useMutation(dt,e)}var bt=gql`
    mutation deleteStack($id: ID!) {
  deleteStack(id: $id)
}
    `;function Rt(t){let e={...a,...t};return o.useMutation(bt,e)}var kt=gql`
    mutation addStack($data: AddStackInput!) {
  addStack(data: $data) {
    ...StackDetail
  }
}
    ${m}`;function Ot(t){let e={...a,...t};return o.useMutation(kt,e)}var St=gql`
    mutation toggleStackUser($id: ID!) {
  toggleStackUser(id: $id) {
    ...StackCore
    usedBy {
      ...UserInfo
    }
  }
}
    ${c}
${s}`;function Tt(t){let e={...a,...t};return o.useMutation(St,e)}var Qt=gql`
    mutation deleteUser {
  deleteUser
}
    `;function ht(t){let e={...a,...t};return o.useMutation(Qt,e)}var xt=gql`
    mutation editUser($data: EditUserInput) {
  editUser(data: $data) {
    ...UserInfo
  }
}
    ${s}`;function Lt(t){let e={...a,...t};return o.useMutation(xt,e)}var Mt=gql`
    mutation addView($refId: ID!, $type: ViewType!) {
  addView(refId: $refId, type: $type) {
    ... on Stack {
      id
      count
    }
    ... on Bookmark {
      id
      count
    }
    ... on Question {
      id
      count
    }
    ... on Blog {
      id
      count
    }
  }
}
    `;function Nt(t){let e={...a,...t};return o.useMutation(Mt,e)}var M=gql`
    query getBlogs {
  blogs {
    ...BlogListItem
  }
}
    ${N}`;function qt(t){let e={...a,...t};return o.useQuery(M,e)}function Kt(t){let e={...a,...t};return o.useSuspenseQuery(M,e)}var A=gql`
    query getBlog($slug: String!) {
  blog(slug: $slug) {
    ...BlogDetail
  }
}
    ${q}`;function Wt(t){let e={...a,...t};return o.useQuery(A,e)}function Jt(t){let e={...a,...t};return o.useSuspenseQuery(A,e)}var _=gql`
    query getBookmarks($first: Int, $after: String, $filter: BookmarkFilter) {
  bookmarks(first: $first, after: $after, filter: $filter) {
    ...BookmarksConnection
  }
}
    ${W}`;function jt(t){let e={...a,...t};return o.useQuery(_,e)}function zt(t){let e={...a,...t};return o.useSuspenseQuery(_,e)}var C=gql`
    query getBookmark($id: ID!) {
  bookmark(id: $id) {
    ...BookmarkDetail
  }
}
    ${l}`;function Xt(t){let e={...a,...t};return o.useQuery(C,e)}function Yt(t){let e={...a,...t};return o.useSuspenseQuery(C,e)}var I=gql`
    query getCases {
  cases {
    ...CaseListItem
  }
}
    ${J}`;function Zt(t){let e={...a,...t};return o.useQuery(I,e)}function te(t){let e={...a,...t};return o.useSuspenseQuery(I,e)}var D=gql`
    query getCase($slug: String!) {
  case(slug: $slug) {
    ...CaseDetail
  }
}
    ${j}`;function ee(t){let e={...a,...t};return o.useQuery(D,e)}function ne(t){let e={...a,...t};return o.useSuspenseQuery(D,e)}var B=gql`
    query getComments($refId: ID!, $type: CommentType!) {
  comments(refId: $refId, type: $type) {
    ...CommentInfo
  }
}
    ${p}`;function oe(t){let e={...a,...t};return o.useQuery(B,e)}function ae(t){let e={...a,...t};return o.useSuspenseQuery(B,e)}var V=gql`
    query getPosts($filter: PostFilter) {
  posts(filter: $filter) {
    ...PostListItem
  }
}
    ${z}`;function re(t){let e={...a,...t};return o.useQuery(V,e)}function se(t){let e={...a,...t};return o.useSuspenseQuery(V,e)}var f=gql`
    query getPost($slug: String!) {
  post(slug: $slug) {
    ...PostDetail
  }
}
    ${y}`;function ue(t){let e={...a,...t};return o.useQuery(f,e)}function ie(t){let e={...a,...t};return o.useSuspenseQuery(f,e)}var G=gql`
    query getQuestions($first: Int, $after: String, $filter: QuestionFilter2) {
  questions(first: $first, after: $after, filter: $filter) {
    ...QuestionsConnection
  }
}
    ${Y}`;function le(t){let e={...a,...t};return o.useQuery(G,e)}function pe(t){let e={...a,...t};return o.useSuspenseQuery(G,e)}var E=gql`
    query getQuestion($id: ID!) {
  question(id: $id) {
    ...QuestionDetail
  }
}
    ${g}`;function ye(t){let e={...a,...t};return o.useQuery(E,e)}function ge(t){let e={...a,...t};return o.useSuspenseQuery(E,e)}var v=gql`
    query getStacks($first: Int, $after: String) {
  stacks(first: $first, after: $after) {
    ...StacksConnection
  }
}
    ${tt}`;function ce(t){let e={...a,...t};return o.useQuery(v,e)}function me(t){let e={...a,...t};return o.useSuspenseQuery(v,e)}var U=gql`
    query getStack($slug: String!) {
  stack(slug: $slug) {
    ...StackDetail
  }
}
    ${m}`;function de(t){let e={...a,...t};return o.useQuery(U,e)}function be(t){let e={...a,...t};return o.useSuspenseQuery(U,e)}var w=gql`
    query getTags {
  tags {
    name
  }
}
    `;function ke(t){let e={...a,...t};return o.useQuery(w,e)}function Se(t){let e={...a,...t};return o.useSuspenseQuery(w,e)}var P=gql`
    query getUser($username: String!) {
  user(username: $username) {
    ...UserInfo
  }
}
    ${s}`;function Qe(t){let e={...a,...t};return o.useQuery(P,e)}function xe(t){let e={...a,...t};return o.useSuspenseQuery(P,e)}var $=gql`
    query viewer {
  viewer {
    ...UserInfo
  }
}
    ${s}`;function Me(t){let e={...a,...t};return o.useQuery($,e)}function Ae(t){let e={...a,...t};return o.useSuspenseQuery($,e)}var H=gql`
    query getViewerWithSettings {
  viewer {
    ...UserInfo
    ...UserSettings
  }
}
    ${s}
${et}`;function _e(t){let e={...a,...t};return o.useQuery(H,e)}function Ce(t){let e={...a,...t};return o.useSuspenseQuery(H,e)}

export { at as AddBookmarkDocument, rt as AddCommentDocument, pt as AddPostDocument, ct as AddQuestionDocument, kt as AddStackDocument, Mt as AddViewDocument, F as CacheControlScope, R as CommentType, ot as DeleteBookmarkDocument, ut as DeleteCommentDocument, lt as DeletePostDocument, gt as DeleteQuestionDocument, bt as DeleteStackDocument, Qt as DeleteUserDocument, d as DirtyAssBlogCoreFragmentDoc, q as DirtyAssBlogDetailFragmentDoc, N as DirtyAssBlogListItemFragmentDoc, b as DirtyAssBookmarkCoreFragmentDoc, l as DirtyAssBookmarkDetailFragmentDoc, K as DirtyAssBookmarkListItemFragmentDoc, W as DirtyAssBookmarksConnectionFragmentDoc, k as DirtyAssCaseCoreFragmentDoc, j as DirtyAssCaseDetailFragmentDoc, J as DirtyAssCaseListItemFragmentDoc, p as DirtyAssCommentInfoFragmentDoc, S as DirtyAssEventCoreFragmentDoc, Ct as DirtyAssEventDetailFragmentDoc, _t as DirtyAssEventListItemFragmentDoc, Q as DirtyAssPostCoreFragmentDoc, y as DirtyAssPostDetailFragmentDoc, z as DirtyAssPostListItemFragmentDoc, x as DirtyAssQuestionCoreFragmentDoc, g as DirtyAssQuestionDetailFragmentDoc, X as DirtyAssQuestionListItemFragmentDoc, Y as DirtyAssQuestionsConnectionFragmentDoc, c as DirtyAssStackCoreFragmentDoc, m as DirtyAssStackDetailFragmentDoc, Z as DirtyAssStackListItemFragmentDoc, tt as DirtyAssStacksConnectionFragmentDoc, s as DirtyAssUserInfoFragmentDoc, et as DirtyAssUserSettingsFragmentDoc, nt as EditBookmarkDocument, st as EditCommentDocument, it as EditPostDocument, yt as EditQuestionDocument, dt as EditStackDocument, xt as EditUserDocument, A as GetBlogDocument, M as GetBlogsDocument, C as GetBookmarkDocument, _ as GetBookmarksDocument, D as GetCaseDocument, I as GetCasesDocument, B as GetCommentsDocument, f as GetPostDocument, V as GetPostsDocument, E as GetQuestionDocument, G as GetQuestionsDocument, U as GetStackDocument, v as GetStacksDocument, w as GetTagsDocument, P as GetUserDocument, H as GetViewerWithSettingsDocument, O as QuestionStatus, T as ReactionType, mt as ToggleReactionDocument, St as ToggleStackUserDocument, h as UserRole, L as ViewType, $ as ViewerDocument, Bt as useAddBookmarkMutation, Vt as useAddCommentMutation, Ut as useAddPostMutation, $t as useAddQuestionMutation, Ot as useAddStackMutation, Nt as useAddViewMutation, Dt as useDeleteBookmarkMutation, Gt as useDeleteCommentMutation, vt as useDeletePostMutation, Pt as useDeleteQuestionMutation, Rt as useDeleteStackMutation, ht as useDeleteUserMutation, It as useEditBookmarkMutation, ft as useEditCommentMutation, Et as useEditPostMutation, wt as useEditQuestionMutation, Ft as useEditStackMutation, Lt as useEditUserMutation, Wt as useGetBlogQuery, Jt as useGetBlogSuspenseQuery, qt as useGetBlogsQuery, Kt as useGetBlogsSuspenseQuery, Xt as useGetBookmarkQuery, Yt as useGetBookmarkSuspenseQuery, jt as useGetBookmarksQuery, zt as useGetBookmarksSuspenseQuery, ee as useGetCaseQuery, ne as useGetCaseSuspenseQuery, Zt as useGetCasesQuery, te as useGetCasesSuspenseQuery, oe as useGetCommentsQuery, ae as useGetCommentsSuspenseQuery, ue as useGetPostQuery, ie as useGetPostSuspenseQuery, re as useGetPostsQuery, se as useGetPostsSuspenseQuery, ye as useGetQuestionQuery, ge as useGetQuestionSuspenseQuery, le as useGetQuestionsQuery, pe as useGetQuestionsSuspenseQuery, de as useGetStackQuery, be as useGetStackSuspenseQuery, ce as useGetStacksQuery, me as useGetStacksSuspenseQuery, ke as useGetTagsQuery, Se as useGetTagsSuspenseQuery, Qe as useGetUserQuery, xe as useGetUserSuspenseQuery, _e as useGetViewerWithSettingsQuery, Ce as useGetViewerWithSettingsSuspenseQuery, Ht as useToggleReactionMutation, Tt as useToggleStackUserMutation, Me as useViewerQuery, Ae as useViewerSuspenseQuery };
