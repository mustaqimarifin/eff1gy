import { gql } from "@apollo/client"

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
  type Post {
    id: ID!
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    author: User
    title: String
    slug: String
    text: String
    excerpt: String
    featureImage: String
    reactionCount: Int
    viewerHasReacted: Boolean
    hitRate: Int
  }

  type Event {
    id: ID!
    count: Int
    reactionCount: Int
    viewerHasReacted: Boolean
  }
  type Case {
    id: ID!
    title: String
    date: Date
    slug: String
    count: Int
    reactionCount: Int
    viewerHasReacted: Boolean
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
    EVENT
    CASE
    POST
  }
  enum ViewType {
    BOOKMARK
    QUESTION
    STACK
    BLOG
    EVENT
    CASE
    POST
  }

  # enum ReactionType {
  #   BOOKMARK
  #   QUESTION
  #   STACK
  #   BLOG
  #   EVENT
  #   CASE
  #   POST
  # }

  enum ReactionType {
    bookmark
    question
    stack
    blog
    event
    case
    post
  }

  type Tag {
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
    pendingEmail: String
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

  input PostFilter {
    published: Boolean
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

  type BConnection {
    pageInfo: PageInfo
    edges: [BookmarkEdge]!
  }

  type QConnection {
    pageInfo: PageInfo
    edges: [QuestionEdge]!
  }

  type SConnection {
    pageInfo: PageInfo
    edges: [StackEdge]!
  }

  type Query {
    viewer: User
    user(username: String!): User
    bookmark(id: ID!): Bookmark
    bookmarks(first: Int, after: String, filter: BookmarkFilter): BConnection!
    stack(slug: String!): Stack
    stacks(first: Int, after: String): SConnection!
    comment(id: ID!): Comment
    comments(refId: ID!, type: CommentType!): [Comment]!
    blogs: [Blog]!
    blog(slug: String!): Blog
    cases: [Case]!
    case(slug: String!): Case
    posts(filter: PostFilter): [Post]!
    post(slug: String!): Post
    events: [Event]!
    event(id: ID!): Event
    question(id: ID!): Question
    questions(first: Int, after: String, filter: QuestionFilter): QConnection!

    tags: [Tag]!
  }

  input EditUserInput {
    username: String
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
  input AddPostInput {
    title: String!
    text: String!
    slug: String!
    excerpt: String
  }

  input EditPostInput {
    title: String!
    text: String!
    slug: String!
    excerpt: String
    published: Boolean
  }

  union Reactable = Bookmark | Question | Stack | Blog | Event | Case | Post
  union Viewable = Bookmark | Question | Stack | Blog | Event | Case | Post

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
    addComment(refId: ID!, parentId: String, type: CommentType!, text: String!): Comment
    editComment(id: ID!, text: String): Comment
    deleteComment(id: ID!): Boolean
    editUser(data: EditUserInput): User
    deleteUser: Boolean
    toggleReaction(refId: ID!, type: ReactionType!): Reactable
    addPost(data: AddPostInput!): Post
    editPost(id: ID!, data: EditPostInput!): Post
    deletePost(id: ID!): Boolean
    addView(refId: ID!, type: ViewType!): Viewable
  }
`
