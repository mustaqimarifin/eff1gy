import { gql } from '@apollo/client'

export default gql`
  scalar Date
  scalar JSON

  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION

  type Blog {
    id: ID!
    title: String
    date: Date
    slug: String
    count: Int
    reactionCount: Int
    viewerHasReacted: Boolean
  }

  type Event {
    id: ID!
    count: Int
  }
  type Case {
    id: ID!
    count: Int
  }
  type Bookmark {
    id: ID!
    createdAt: Date!
    updatedAt: Date!
    url: String
    host: String!
    title: String
    image: String
    faviconUrl: String
    description: String
    count: Int
    tags: [Tag]!
    reactionCount: Int
    viewerHasReacted: Boolean
  }

  type Question {
    id: ID!
    createdAt: Date!
    updatedAt: Date
    author: User
    title: String!
    audioUrl: String
    waveform: JSON
    playCount: Int
    description: String
    count: Int
    status: QuestionStatus
    viewerCanEdit: Boolean
    viewerCanComment: Boolean
    reactionCount: Int
    viewerHasReacted: Boolean
  }

  enum UserRole {
    BLOCKED
    USER
    ADMIN
  }

  enum CommentType {
    BOOKMARK
    QUESTION
    STACK
    BLOG
  }
  enum ViewType {
    BOOKMARK
    QUESTION
    STACK
    BLOG
    EVENT
    CASE
  }

  enum ReactionType {
    BOOKMARK
    QUESTION
    STACK
    BLOG
  }

  type Tag @cacheControl(maxAge: 3600) {
    name: String!
  }

  type Stack {
    id: ID!
    createdAt: Date!
    updatedAt: Date
    name: String!
    description: String
    image: String
    url: String!
    count: Int
    slug: String!
    tags: [Tag]!
    usedBy: [User]!
    usedByViewer: Boolean
    reactionCount: Int
    viewerHasReacted: Boolean
  }

  type User {
    id: ID!
    createdAt: Date
    role: UserRole
    username: String
    image: String
    name: String
    isViewer: Boolean
    email: String
    isAdmin: Boolean
  }

  type Comment {
    id: ID!
    parentId: String
    createdAt: Date!
    updatedAt: Date
    text: String
    author: User!
    viewerCanEdit: Boolean
    viewerCanDelete: Boolean
    replies: [Comment]
  }

  input BookmarkFilter {
    tag: String
    host: String
  }

  enum QuestionStatus {
    ANSWERED
    PENDING
  }

  input QuestionFilter {
    status: QuestionStatus
  }

  type BookmarkEdge {
    node: Bookmark
    cursor: String
  }

  type QuestionEdge {
    node: Question
    cursor: String
  }

  type StackEdge {
    node: Stack
    cursor: String
  }

  type PageInfo {
    hasNextPage: Boolean
    totalCount: Int
    endCursor: String
  }

  type BookmarksConnection {
    pageInfo: PageInfo
    edges: [BookmarkEdge]!
  }

  type QuestionsConnection {
    pageInfo: PageInfo
    edges: [QuestionEdge]!
  }

  type StacksConnection {
    pageInfo: PageInfo
    edges: [StackEdge]!
  }

  type Query {
    viewer: User
    user(id: ID!): User
    bookmark(id: ID!): Bookmark
    bookmarks(
      first: Int
      after: String
      filter: BookmarkFilter
    ): BookmarksConnection!
    stack(slug: String!): Stack
    stacks(first: Int, after: String): StacksConnection!
    comment(id: ID!): Comment
    comments(refId: ID!, type: CommentType!): [Comment]!
    blogs: [Blog]!
    blog(slug: String!): Blog
    events: [Event]!
    event(id: ID!): Event
    cases: [Case]!
    case(id: ID!): Case
    question(id: ID!): Question
    questions(
      first: Int
      after: String
      filter: QuestionFilter
    ): QuestionsConnection!

    tags: [Tag]!
  }

  input EditUserInput {
    name: String
    email: String
  }

  input AddStackInput {
    name: String!
    url: String!
    image: String!
    description: String!
    tag: String
  }

  input EditStackInput {
    name: String!
    url: String!
    image: String!
    description: String!
    tag: String
  }

  input AddBookmarkInput {
    url: String!
    tag: String!
  }

  input EditBookmarkInput {
    title: String!
    description: String
    tag: String
    faviconUrl: String
  }

  input EditQuestionInput {
    title: String!
    description: String
    audioUrl: String
    waveform: JSON
  }

  input AddQuestionInput {
    title: String!
    description: String
    audioUrl: String
    waveform: JSON
  }

  union Reactable = Bookmark | Question | Stack | Blog | Event | Case
  union Viewable = Bookmark | Question | Stack | Blog | Event | Case

  type Mutation {
    addBookmark(data: AddBookmarkInput!): Bookmark
    editBookmark(id: ID!, data: EditBookmarkInput!): Bookmark
    deleteBookmark(id: ID!): Boolean
    addStack(data: AddStackInput!): Stack
    editStack(id: ID!, data: EditStackInput!): Stack
    deleteStack(id: ID!): Boolean
    toggleStackUser(id: ID!): Stack
    addQuestion(data: AddQuestionInput!): Question
    editQuestion(id: ID!, data: EditQuestionInput!): Question
    deleteQuestion(id: ID!): Boolean
    addComment(
      refId: ID!
      parentId: String
      type: CommentType!
      text: String!
    ): Comment
    editComment(id: ID!, text: String): Comment
    deleteComment(id: ID!): Boolean

    editUser(data: EditUserInput): User
    deleteUser: Boolean
    toggleReaction(refId: ID!, type: ReactionType!): Reactable
    addView(refId: ID!, type: ViewType!): Viewable
  }
`
