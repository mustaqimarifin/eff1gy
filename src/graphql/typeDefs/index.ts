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

  type Post @cacheControl(maxAge: 240) {
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

  type Bookmark @cacheControl(maxAge: 240) {
    id: ID!
    createdAt: Date!
    updatedAt: Date!
    url: String!
    host: String!
    title: String
    image: String
    faviconUrl: String
    description: String
    tags: [Tag]!
    reactionCount: Int
    viewerHasReacted: Boolean
    hitRate: Int
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
    status: QuestionStatus
    viewerCanEdit: Boolean
    viewerCanComment: Boolean
    reactionCount: Int
    viewerHasReacted: Boolean
    hitRate: Int
  }

  enum CommentType {
    BOOKMARK
    QUESTION
    STACK
    POST
  }

  enum ReactionType {
    BOOKMARK
    QUESTION
    STACK
    POST
  }

  enum HitType {
    BOOKMARK
    QUESTION
    STACK
    POST
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
    slug: String!
    tags: [Tag]!
    usedBy: [User]!
    usedByViewer: Boolean
    reactionCount: Int
    viewerHasReacted: Boolean
    hitRate: Int
  }

  enum UserRole {
    BLOCKED
    USER
    ADMIN
  }

  enum EmailSubscriptionType {
    HACKER_NEWS
    NEWSLETTER
  }

  type EmailSubscription {
    type: EmailSubscriptionType
    subscribed: Boolean
  }

  type User {
    id: ID!
    createdAt: Date
    role: UserRole
    name: String!
    image: String
    pendingEmail: String
    isViewer: Boolean
    email: String
    emailSubscriptions: [EmailSubscription]
    isAdmin: Boolean
  }

  type Comment {
    id: ID!
    createdAt: Date!
    updatedAt: Date
    text: String
    author: User!
    viewerCanEdit: Boolean
    viewerCanDelete: Boolean
  }

  type Hit {
    id: ID!
    createdAt: Date!
    updatedAt: Date
    catID: String
    hitRate: Int
  }

  type HackerNewsComment {
    id: ID
    user: String
    comments_count: String
    comments: [HackerNewsComment]
    time_ago: String
    time: Int
    level: Int
    content: String
  }

  type HackerNewsPost {
    id: ID
    title: String
    user: String
    time: Int
    time_ago: String
    comments: [HackerNewsComment]
    comments_count: String
    url: String
    domain: String
    content: String
  }

  input BookmarkFilter {
    tag: String
    host: String
  }

  enum QuestionStatus {
    ANSWERED
    PENDING
  }

  input WritingFilter {
    published: Boolean
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
    hit(id: ID!): Hit
    hits(pageId: ID!, type: HitType!): [Hit]!
    #reaction(type: StickerType!): Reaction
    #reactions(refId: ID!, type: CommentType!): [Reaction]!
    posts(filter: WritingFilter): [Post]!
    post(slug: String!): Post
    question(id: ID!): Question
    questions(
      first: Int
      after: String
      filter: QuestionFilter
    ): QuestionsConnection!
    hackerNewsPosts: [HackerNewsPost]!
    hackerNewsPost(id: ID!): HackerNewsPost
    tags: [Tag]!
  }

  input EditUserInput {
    name: String
    email: String
  }

  input EmailSubscriptionInput {
    type: EmailSubscriptionType!
    subscribed: Boolean!
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

  union Reactable = Bookmark | Question | Post | Stack

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

    addComment(refId: ID!, type: CommentType!, text: String!): Comment
    editComment(id: ID!, text: String): Comment
    deleteComment(id: ID!): Boolean

    addHit(pageId: ID!, type: HitType!): Hit
    editHit(id: ID!, text: String): Hit
    deleteHit(id: ID!): Boolean

    editUser(data: EditUserInput): User
    deleteUser: Boolean
    editEmailSubscription(data: EmailSubscriptionInput): User
    addPost(data: AddPostInput!): Post
    editPost(id: ID!, data: EditPostInput!): Post
    deletePost(id: ID!): Boolean
    toggleReaction(refId: ID!, type: ReactionType!): Reactable
  }
`
