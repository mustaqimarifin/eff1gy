import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
  JSON: { input: any; output: any }
}

export type AddBookmarkInput = {
  tag: Scalars['String']['input']
  url: Scalars['String']['input']
}

export type AddPostInput = {
  excerpt?: InputMaybe<Scalars['String']['input']>
  slug: Scalars['String']['input']
  text: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type AddQuestionInput = {
  audioUrl?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  waveform?: InputMaybe<Scalars['JSON']['input']>
}

export type AddStackInput = {
  description: Scalars['String']['input']
  image: Scalars['String']['input']
  name: Scalars['String']['input']
  tag?: InputMaybe<Scalars['String']['input']>
  url: Scalars['String']['input']
}

export type Blog = {
  __typename?: 'Blog'
  date?: Maybe<Scalars['Date']['output']>
  id: Scalars['ID']['output']
  reactionCount?: Maybe<Scalars['Int']['output']>
  slug: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>
}

export type Bookmark = {
  __typename?: 'Bookmark'
  createdAt: Scalars['Date']['output']
  description?: Maybe<Scalars['String']['output']>
  faviconUrl?: Maybe<Scalars['String']['output']>
  hitRate?: Maybe<Scalars['Int']['output']>
  host: Scalars['String']['output']
  id: Scalars['ID']['output']
  image?: Maybe<Scalars['String']['output']>
  reactionCount?: Maybe<Scalars['Int']['output']>
  tags: Array<Maybe<Tag>>
  title?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['Date']['output']
  url: Scalars['String']['output']
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>
}

export type BookmarkEdge = {
  __typename?: 'BookmarkEdge'
  cursor?: Maybe<Scalars['String']['output']>
  node?: Maybe<Bookmark>
}

export type BookmarkFilter = {
  host?: InputMaybe<Scalars['String']['input']>
  tag?: InputMaybe<Scalars['String']['input']>
}

export type BookmarksConnection = {
  __typename?: 'BookmarksConnection'
  edges: Array<Maybe<BookmarkEdge>>
  pageInfo?: Maybe<PageInfo>
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Comment = {
  __typename?: 'Comment'
  author: User
  createdAt: Scalars['Date']['output']
  id: Scalars['ID']['output']
  parentId?: Maybe<Scalars['String']['output']>
  replies?: Maybe<Array<Maybe<Comment>>>
  text?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['Date']['output']>
  viewerCanDelete?: Maybe<Scalars['Boolean']['output']>
  viewerCanEdit?: Maybe<Scalars['Boolean']['output']>
}

export enum CommentType {
  Blog = 'BLOG',
  Bookmark = 'BOOKMARK',
  Post = 'POST',
  Question = 'QUESTION',
  Stack = 'STACK',
}

export type EditBookmarkInput = {
  description?: InputMaybe<Scalars['String']['input']>
  faviconUrl?: InputMaybe<Scalars['String']['input']>
  tag?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
}

export type EditPostInput = {
  excerpt?: InputMaybe<Scalars['String']['input']>
  published?: InputMaybe<Scalars['Boolean']['input']>
  slug: Scalars['String']['input']
  text: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type EditQuestionInput = {
  audioUrl?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  waveform?: InputMaybe<Scalars['JSON']['input']>
}

export type EditStackInput = {
  description: Scalars['String']['input']
  image: Scalars['String']['input']
  name: Scalars['String']['input']
  tag?: InputMaybe<Scalars['String']['input']>
  url: Scalars['String']['input']
}

export type EditUserInput = {
  email?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Hit = {
  __typename?: 'Hit'
  catID?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['Date']['output']
  hitRate?: Maybe<Scalars['Int']['output']>
  id: Scalars['ID']['output']
  updatedAt?: Maybe<Scalars['Date']['output']>
}

export enum HitType {
  Bookmark = 'BOOKMARK',
  Post = 'POST',
  Question = 'QUESTION',
  Stack = 'STACK',
}

export type Mutation = {
  __typename?: 'Mutation'
  addBookmark?: Maybe<Bookmark>
  addComment?: Maybe<Comment>
  addHit?: Maybe<Hit>
  addPost?: Maybe<Post>
  addQuestion?: Maybe<Question>
  addStack?: Maybe<Stack>
  deleteBookmark?: Maybe<Scalars['Boolean']['output']>
  deleteComment?: Maybe<Scalars['Boolean']['output']>
  deleteHit?: Maybe<Scalars['Boolean']['output']>
  deletePost?: Maybe<Scalars['Boolean']['output']>
  deleteQuestion?: Maybe<Scalars['Boolean']['output']>
  deleteStack?: Maybe<Scalars['Boolean']['output']>
  deleteUser?: Maybe<Scalars['Boolean']['output']>
  editBookmark?: Maybe<Bookmark>
  editComment?: Maybe<Comment>
  editHit?: Maybe<Hit>
  editPost?: Maybe<Post>
  editQuestion?: Maybe<Question>
  editStack?: Maybe<Stack>
  editUser?: Maybe<User>
  toggleReaction?: Maybe<Reactable>
  toggleStackUser?: Maybe<Stack>
}

export type MutationAddBookmarkArgs = {
  data: AddBookmarkInput
}

export type MutationAddCommentArgs = {
  parentId?: InputMaybe<Scalars['String']['input']>
  refId: Scalars['ID']['input']
  text: Scalars['String']['input']
  type: CommentType
}

export type MutationAddHitArgs = {
  pageId: Scalars['ID']['input']
  type: HitType
}

export type MutationAddPostArgs = {
  data: AddPostInput
}

export type MutationAddQuestionArgs = {
  data: AddQuestionInput
}

export type MutationAddStackArgs = {
  data: AddStackInput
}

export type MutationDeleteBookmarkArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteHitArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeletePostArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteQuestionArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteStackArgs = {
  id: Scalars['ID']['input']
}

export type MutationEditBookmarkArgs = {
  data: EditBookmarkInput
  id: Scalars['ID']['input']
}

export type MutationEditCommentArgs = {
  id: Scalars['ID']['input']
  text?: InputMaybe<Scalars['String']['input']>
}

export type MutationEditHitArgs = {
  id: Scalars['ID']['input']
  text?: InputMaybe<Scalars['String']['input']>
}

export type MutationEditPostArgs = {
  data: EditPostInput
  id: Scalars['ID']['input']
}

export type MutationEditQuestionArgs = {
  data: EditQuestionInput
  id: Scalars['ID']['input']
}

export type MutationEditStackArgs = {
  data: EditStackInput
  id: Scalars['ID']['input']
}

export type MutationEditUserArgs = {
  data?: InputMaybe<EditUserInput>
}

export type MutationToggleReactionArgs = {
  refId: Scalars['ID']['input']
  type: ReactionType
}

export type MutationToggleStackUserArgs = {
  id: Scalars['ID']['input']
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage?: Maybe<Scalars['Boolean']['output']>
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type Post = {
  __typename?: 'Post'
  author?: Maybe<User>
  createdAt?: Maybe<Scalars['Date']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  featureImage?: Maybe<Scalars['String']['output']>
  hitRate?: Maybe<Scalars['Int']['output']>
  id: Scalars['ID']['output']
  publishedAt?: Maybe<Scalars['Date']['output']>
  reactionCount?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  text?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['Date']['output']>
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>
}

export type Query = {
  __typename?: 'Query'
  blog?: Maybe<Blog>
  blogs: Array<Maybe<Blog>>
  bookmark?: Maybe<Bookmark>
  bookmarks: BookmarksConnection
  comment?: Maybe<Comment>
  comments: Array<Maybe<Comment>>
  hit?: Maybe<Hit>
  hits: Array<Maybe<Hit>>
  post?: Maybe<Post>
  posts: Array<Maybe<Post>>
  question?: Maybe<Question>
  questions: QuestionsConnection
  stack?: Maybe<Stack>
  stacks: StacksConnection
  tags: Array<Maybe<Tag>>
  user?: Maybe<User>
  viewer?: Maybe<User>
}

export type QueryBlogArgs = {
  slug: Scalars['String']['input']
}

export type QueryBookmarkArgs = {
  id: Scalars['ID']['input']
}

export type QueryBookmarksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<BookmarkFilter>
  first?: InputMaybe<Scalars['Int']['input']>
}

export type QueryCommentArgs = {
  id: Scalars['ID']['input']
}

export type QueryCommentsArgs = {
  refId: Scalars['ID']['input']
  type: CommentType
}

export type QueryHitArgs = {
  id: Scalars['ID']['input']
}

export type QueryHitsArgs = {
  pageId: Scalars['ID']['input']
  type: HitType
}

export type QueryPostArgs = {
  slug: Scalars['String']['input']
}

export type QueryPostsArgs = {
  filter?: InputMaybe<WritingFilter>
}

export type QueryQuestionArgs = {
  id: Scalars['ID']['input']
}

export type QueryQuestionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<QuestionFilter>
  first?: InputMaybe<Scalars['Int']['input']>
}

export type QueryStackArgs = {
  slug: Scalars['String']['input']
}

export type QueryStacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
}

export type QueryUserArgs = {
  id: Scalars['ID']['input']
}

export type Question = {
  __typename?: 'Question'
  audioUrl?: Maybe<Scalars['String']['output']>
  author?: Maybe<User>
  createdAt: Scalars['Date']['output']
  description?: Maybe<Scalars['String']['output']>
  hitRate?: Maybe<Scalars['Int']['output']>
  id: Scalars['ID']['output']
  playCount?: Maybe<Scalars['Int']['output']>
  reactionCount?: Maybe<Scalars['Int']['output']>
  status?: Maybe<QuestionStatus>
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['Date']['output']>
  viewerCanComment?: Maybe<Scalars['Boolean']['output']>
  viewerCanEdit?: Maybe<Scalars['Boolean']['output']>
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>
  waveform?: Maybe<Scalars['JSON']['output']>
}

export type QuestionEdge = {
  __typename?: 'QuestionEdge'
  cursor?: Maybe<Scalars['String']['output']>
  node?: Maybe<Question>
}

export type QuestionFilter = {
  status?: InputMaybe<QuestionStatus>
}

export enum QuestionStatus {
  Answered = 'ANSWERED',
  Pending = 'PENDING',
}

export type QuestionsConnection = {
  __typename?: 'QuestionsConnection'
  edges: Array<Maybe<QuestionEdge>>
  pageInfo?: Maybe<PageInfo>
}

export type Reactable = Blog | Bookmark | Post | Question | Stack

export enum ReactionType {
  Blog = 'BLOG',
  Bookmark = 'BOOKMARK',
  Post = 'POST',
  Question = 'QUESTION',
  Stack = 'STACK',
}

export type Stack = {
  __typename?: 'Stack'
  createdAt: Scalars['Date']['output']
  description?: Maybe<Scalars['String']['output']>
  hitRate?: Maybe<Scalars['Int']['output']>
  id: Scalars['ID']['output']
  image?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  reactionCount?: Maybe<Scalars['Int']['output']>
  slug: Scalars['String']['output']
  tags: Array<Maybe<Tag>>
  updatedAt?: Maybe<Scalars['Date']['output']>
  url: Scalars['String']['output']
  usedBy: Array<Maybe<User>>
  usedByViewer?: Maybe<Scalars['Boolean']['output']>
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>
}

export type StackEdge = {
  __typename?: 'StackEdge'
  cursor?: Maybe<Scalars['String']['output']>
  node?: Maybe<Stack>
}

export type StacksConnection = {
  __typename?: 'StacksConnection'
  edges: Array<Maybe<StackEdge>>
  pageInfo?: Maybe<PageInfo>
}

export type Tag = {
  __typename?: 'Tag'
  name: Scalars['String']['output']
}

export type User = {
  __typename?: 'User'
  createdAt?: Maybe<Scalars['Date']['output']>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  image?: Maybe<Scalars['String']['output']>
  isAdmin?: Maybe<Scalars['Boolean']['output']>
  isViewer?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  pendingEmail?: Maybe<Scalars['String']['output']>
  role?: Maybe<UserRole>
  username?: Maybe<Scalars['String']['output']>
}

export enum UserRole {
  Admin = 'ADMIN',
  Blocked = 'BLOCKED',
  User = 'USER',
}

export type WritingFilter = {
  published?: InputMaybe<Scalars['Boolean']['input']>
}

export type BookmarkDetailFragment = {
  reactionCount?: number | null
  hitRate?: number | null
  viewerHasReacted?: boolean | null
  id: string
  url: string
  host: string
  title?: string | null
  description?: string | null
  faviconUrl?: string | null
  tags: Array<({ name: string } & { __typename?: 'Tag' }) | null>
} & { __typename: 'Bookmark' }

export type BookmarkCoreFragment = {
  id: string
  url: string
  host: string
  title?: string | null
  description?: string | null
  faviconUrl?: string | null
} & { __typename: 'Bookmark' }

export type CommentInfoFragment = {
  id: string
  parentId?: string | null
  createdAt: any
  updatedAt?: any | null
  text?: string | null
  viewerCanEdit?: boolean | null
  viewerCanDelete?: boolean | null
  author: {
    id: string
    username?: string | null
    image?: string | null
    name?: string | null
    role?: UserRole | null
    isViewer?: boolean | null
    isAdmin?: boolean | null
  } & { __typename: 'User' }
} & { __typename: 'Comment' }

export type UserInfoFragment = {
  id: string
  username?: string | null
  image?: string | null
  name?: string | null
  role?: UserRole | null
  isViewer?: boolean | null
  isAdmin?: boolean | null
} & { __typename: 'User' }

export type PostDetailFragment = {
  text?: string | null
  featureImage?: string | null
  reactionCount?: number | null
  hitRate?: number | null
  viewerHasReacted?: boolean | null
  id: string
  publishedAt?: any | null
  title?: string | null
  slug?: string | null
  excerpt?: string | null
} & { __typename: 'Post' }

export type PostCoreFragment = {
  id: string
  publishedAt?: any | null
  title?: string | null
  slug?: string | null
  excerpt?: string | null
} & { __typename: 'Post' }

export type QuestionDetailFragment = {
  description?: string | null
  status?: QuestionStatus | null
  viewerCanEdit?: boolean | null
  viewerCanComment?: boolean | null
  reactionCount?: number | null
  hitRate?: number | null
  viewerHasReacted?: boolean | null
  id: string
  title: string
  audioUrl?: string | null
  waveform?: any | null
  createdAt: any
  author?:
    | ({
        id: string
        username?: string | null
        image?: string | null
        name?: string | null
        role?: UserRole | null
        isViewer?: boolean | null
        isAdmin?: boolean | null
      } & { __typename: 'User' })
    | null
} & { __typename: 'Question' }

export type QuestionCoreFragment = {
  id: string
  title: string
  audioUrl?: string | null
  waveform?: any | null
  createdAt: any
  author?:
    | ({
        id: string
        username?: string | null
        image?: string | null
        name?: string | null
        role?: UserRole | null
        isViewer?: boolean | null
        isAdmin?: boolean | null
      } & { __typename: 'User' })
    | null
} & { __typename: 'Question' }

export type StackDetailFragment = {
  createdAt: any
  description?: string | null
  reactionCount?: number | null
  hitRate?: number | null
  viewerHasReacted?: boolean | null
  usedByViewer?: boolean | null
  id: string
  name: string
  image?: string | null
  url: string
  slug: string
  usedBy: Array<
    | ({
        id: string
        username?: string | null
        image?: string | null
        name?: string | null
        role?: UserRole | null
        isViewer?: boolean | null
        isAdmin?: boolean | null
      } & { __typename: 'User' })
    | null
  >
  tags: Array<({ name: string } & { __typename?: 'Tag' }) | null>
} & { __typename: 'Stack' }

export type StackCoreFragment = {
  id: string
  name: string
  image?: string | null
  url: string
  slug: string
} & { __typename: 'Stack' }

export type BlogListItemFragment = {
  id: string
  date?: any | null
  title?: string | null
  slug: string
} & { __typename: 'Blog' }

export type BlogCoreFragment = {
  id: string
  date?: any | null
  title?: string | null
  slug: string
} & { __typename: 'Blog' }

export type BlogDetailFragment = {
  reactionCount?: number | null
  viewerHasReacted?: boolean | null
  id: string
  date?: any | null
  title?: string | null
  slug: string
} & { __typename: 'Blog' }

export type BookmarksConnectionFragment = {
  pageInfo?:
    | ({
        hasNextPage?: boolean | null
        totalCount?: number | null
        endCursor?: string | null
      } & { __typename?: 'PageInfo' })
    | null
  edges: Array<
    | ({
        cursor?: string | null
        node?:
          | ({
              id: string
              url: string
              host: string
              title?: string | null
              description?: string | null
              faviconUrl?: string | null
            } & { __typename: 'Bookmark' })
          | null
      } & { __typename?: 'BookmarkEdge' })
    | null
  >
} & { __typename?: 'BookmarksConnection' }

export type BookmarkListItemFragment = {
  id: string
  url: string
  host: string
  title?: string | null
  description?: string | null
  faviconUrl?: string | null
} & { __typename: 'Bookmark' }

export type PostListItemFragment = {
  id: string
  publishedAt?: any | null
  title?: string | null
  slug?: string | null
  excerpt?: string | null
} & { __typename: 'Post' }

export type QuestionsConnectionFragment = {
  pageInfo?:
    | ({
        hasNextPage?: boolean | null
        totalCount?: number | null
        endCursor?: string | null
      } & { __typename?: 'PageInfo' })
    | null
  edges: Array<
    | ({
        cursor?: string | null
        node?:
          | ({
              id: string
              title: string
              audioUrl?: string | null
              waveform?: any | null
              createdAt: any
              author?:
                | ({
                    id: string
                    username?: string | null
                    image?: string | null
                    name?: string | null
                    role?: UserRole | null
                    isViewer?: boolean | null
                    isAdmin?: boolean | null
                  } & { __typename: 'User' })
                | null
            } & { __typename: 'Question' })
          | null
      } & { __typename?: 'QuestionEdge' })
    | null
  >
} & { __typename?: 'QuestionsConnection' }

export type QuestionListItemFragment = {
  id: string
  title: string
  audioUrl?: string | null
  waveform?: any | null
  createdAt: any
  author?:
    | ({
        id: string
        username?: string | null
        image?: string | null
        name?: string | null
        role?: UserRole | null
        isViewer?: boolean | null
        isAdmin?: boolean | null
      } & { __typename: 'User' })
    | null
} & { __typename: 'Question' }

export type StacksConnectionFragment = {
  pageInfo?:
    | ({
        hasNextPage?: boolean | null
        totalCount?: number | null
        endCursor?: string | null
      } & { __typename?: 'PageInfo' })
    | null
  edges: Array<
    | ({
        cursor?: string | null
        node?:
          | ({
              id: string
              name: string
              image?: string | null
              url: string
              slug: string
            } & { __typename: 'Stack' })
          | null
      } & { __typename?: 'StackEdge' })
    | null
  >
} & { __typename?: 'StacksConnection' }

export type StackListItemFragment = {
  id: string
  name: string
  image?: string | null
  url: string
  slug: string
} & { __typename: 'Stack' }

export type UserSettingsFragment = {
  email?: string | null
  pendingEmail?: string | null
} & { __typename?: 'User' }

export type EditBookmarkMutationVariables = Exact<{
  id: Scalars['ID']['input']
  data: EditBookmarkInput
}>

export type EditBookmarkMutation = {
  editBookmark?:
    | ({
        id: string
        url: string
        host: string
        title?: string | null
        description?: string | null
        faviconUrl?: string | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
        tags: Array<({ name: string } & { __typename?: 'Tag' }) | null>
      } & { __typename: 'Bookmark' })
    | null
} & { __typename?: 'Mutation' }

export type DeleteBookmarkMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type DeleteBookmarkMutation = { deleteBookmark?: boolean | null } & {
  __typename?: 'Mutation'
}

export type AddBookmarkMutationVariables = Exact<{
  data: AddBookmarkInput
}>

export type AddBookmarkMutation = {
  addBookmark?:
    | ({
        id: string
        url: string
        host: string
        title?: string | null
        description?: string | null
        faviconUrl?: string | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
        tags: Array<({ name: string } & { __typename?: 'Tag' }) | null>
      } & { __typename: 'Bookmark' })
    | null
} & { __typename?: 'Mutation' }

export type AddCommentMutationVariables = Exact<{
  refId: Scalars['ID']['input']
  parentId?: InputMaybe<Scalars['String']['input']>
  type: CommentType
  text: Scalars['String']['input']
}>

export type AddCommentMutation = {
  addComment?:
    | ({
        id: string
        parentId?: string | null
        createdAt: any
        updatedAt?: any | null
        text?: string | null
        viewerCanEdit?: boolean | null
        viewerCanDelete?: boolean | null
        author: {
          id: string
          username?: string | null
          image?: string | null
          name?: string | null
          role?: UserRole | null
          isViewer?: boolean | null
          isAdmin?: boolean | null
        } & { __typename: 'User' }
      } & { __typename: 'Comment' })
    | null
} & { __typename?: 'Mutation' }

export type EditCommentMutationVariables = Exact<{
  id: Scalars['ID']['input']
  text: Scalars['String']['input']
}>

export type EditCommentMutation = {
  editComment?:
    | ({
        id: string
        parentId?: string | null
        createdAt: any
        updatedAt?: any | null
        text?: string | null
        viewerCanEdit?: boolean | null
        viewerCanDelete?: boolean | null
        author: {
          id: string
          username?: string | null
          image?: string | null
          name?: string | null
          role?: UserRole | null
          isViewer?: boolean | null
          isAdmin?: boolean | null
        } & { __typename: 'User' }
      } & { __typename: 'Comment' })
    | null
} & { __typename?: 'Mutation' }

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type DeleteCommentMutation = { deleteComment?: boolean | null } & {
  __typename?: 'Mutation'
}

export type EditPostMutationVariables = Exact<{
  id: Scalars['ID']['input']
  data: EditPostInput
}>

export type EditPostMutation = {
  editPost?:
    | ({
        id: string
        publishedAt?: any | null
        title?: string | null
        slug?: string | null
        excerpt?: string | null
        text?: string | null
        featureImage?: string | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
      } & { __typename: 'Post' })
    | null
} & { __typename?: 'Mutation' }

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type DeletePostMutation = { deletePost?: boolean | null } & {
  __typename?: 'Mutation'
}

export type AddPostMutationVariables = Exact<{
  data: AddPostInput
}>

export type AddPostMutation = {
  addPost?:
    | ({
        id: string
        publishedAt?: any | null
        title?: string | null
        slug?: string | null
        excerpt?: string | null
        text?: string | null
        featureImage?: string | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
      } & { __typename: 'Post' })
    | null
} & { __typename?: 'Mutation' }

export type EditQuestionMutationVariables = Exact<{
  id: Scalars['ID']['input']
  data: EditQuestionInput
}>

export type EditQuestionMutation = {
  editQuestion?:
    | ({
        id: string
        title: string
        audioUrl?: string | null
        waveform?: any | null
        createdAt: any
        description?: string | null
        status?: QuestionStatus | null
        viewerCanEdit?: boolean | null
        viewerCanComment?: boolean | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
        author?:
          | ({
              id: string
              username?: string | null
              image?: string | null
              name?: string | null
              role?: UserRole | null
              isViewer?: boolean | null
              isAdmin?: boolean | null
            } & { __typename: 'User' })
          | null
      } & { __typename: 'Question' })
    | null
} & { __typename?: 'Mutation' }

export type DeleteQuestionMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type DeleteQuestionMutation = { deleteQuestion?: boolean | null } & {
  __typename?: 'Mutation'
}

export type AddQuestionMutationVariables = Exact<{
  data: AddQuestionInput
}>

export type AddQuestionMutation = {
  addQuestion?:
    | ({
        id: string
        title: string
        audioUrl?: string | null
        waveform?: any | null
        createdAt: any
        description?: string | null
        status?: QuestionStatus | null
        viewerCanEdit?: boolean | null
        viewerCanComment?: boolean | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
        author?:
          | ({
              id: string
              username?: string | null
              image?: string | null
              name?: string | null
              role?: UserRole | null
              isViewer?: boolean | null
              isAdmin?: boolean | null
            } & { __typename: 'User' })
          | null
      } & { __typename: 'Question' })
    | null
} & { __typename?: 'Mutation' }

export type ToggleReactionMutationVariables = Exact<{
  refId: Scalars['ID']['input']
  type: ReactionType
}>

export type ToggleReactionMutation = {
  toggleReaction?:
    | ({
        id: string
        reactionCount?: number | null
        viewerHasReacted?: boolean | null
      } & { __typename?: 'Blog' | 'Post' | 'Question' | 'Stack' })
    | ({
        id: string
        url: string
        reactionCount?: number | null
        viewerHasReacted?: boolean | null
      } & { __typename?: 'Bookmark' })
    | null
} & { __typename?: 'Mutation' }

export type EditStackMutationVariables = Exact<{
  id: Scalars['ID']['input']
  data: EditStackInput
}>

export type EditStackMutation = {
  editStack?:
    | ({
        id: string
        name: string
        image?: string | null
        url: string
        slug: string
        createdAt: any
        description?: string | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
        usedByViewer?: boolean | null
        usedBy: Array<
          | ({
              id: string
              username?: string | null
              image?: string | null
              name?: string | null
              role?: UserRole | null
              isViewer?: boolean | null
              isAdmin?: boolean | null
            } & { __typename: 'User' })
          | null
        >
        tags: Array<({ name: string } & { __typename?: 'Tag' }) | null>
      } & { __typename: 'Stack' })
    | null
} & { __typename?: 'Mutation' }

export type DeleteStackMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type DeleteStackMutation = { deleteStack?: boolean | null } & {
  __typename?: 'Mutation'
}

export type AddStackMutationVariables = Exact<{
  data: AddStackInput
}>

export type AddStackMutation = {
  addStack?:
    | ({
        id: string
        name: string
        image?: string | null
        url: string
        slug: string
        createdAt: any
        description?: string | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
        usedByViewer?: boolean | null
        usedBy: Array<
          | ({
              id: string
              username?: string | null
              image?: string | null
              name?: string | null
              role?: UserRole | null
              isViewer?: boolean | null
              isAdmin?: boolean | null
            } & { __typename: 'User' })
          | null
        >
        tags: Array<({ name: string } & { __typename?: 'Tag' }) | null>
      } & { __typename: 'Stack' })
    | null
} & { __typename?: 'Mutation' }

export type ToggleStackUserMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type ToggleStackUserMutation = {
  toggleStackUser?:
    | ({
        id: string
        name: string
        image?: string | null
        url: string
        slug: string
        usedBy: Array<
          | ({
              id: string
              username?: string | null
              image?: string | null
              name?: string | null
              role?: UserRole | null
              isViewer?: boolean | null
              isAdmin?: boolean | null
            } & { __typename: 'User' })
          | null
        >
      } & { __typename: 'Stack' })
    | null
} & { __typename?: 'Mutation' }

export type DeleteUserMutationVariables = Exact<{ [key: string]: never }>

export type DeleteUserMutation = { deleteUser?: boolean | null } & {
  __typename?: 'Mutation'
}

export type EditUserMutationVariables = Exact<{
  data?: InputMaybe<EditUserInput>
}>

export type EditUserMutation = {
  editUser?:
    | ({
        id: string
        username?: string | null
        image?: string | null
        name?: string | null
        role?: UserRole | null
        isViewer?: boolean | null
        isAdmin?: boolean | null
      } & { __typename: 'User' })
    | null
} & { __typename?: 'Mutation' }

export type GetBlogsQueryVariables = Exact<{ [key: string]: never }>

export type GetBlogsQuery = {
  blogs: Array<
    | ({
        id: string
        date?: any | null
        title?: string | null
        slug: string
      } & { __typename: 'Blog' })
    | null
  >
} & { __typename?: 'Query' }

export type GetBlogQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetBlogQuery = {
  blog?:
    | ({
        id: string
        date?: any | null
        title?: string | null
        slug: string
        reactionCount?: number | null
        viewerHasReacted?: boolean | null
      } & { __typename: 'Blog' })
    | null
} & { __typename?: 'Query' }

export type GetBookmarksQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>
  after?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<BookmarkFilter>
}>

export type GetBookmarksQuery = {
  bookmarks: {
    pageInfo?:
      | ({
          hasNextPage?: boolean | null
          totalCount?: number | null
          endCursor?: string | null
        } & { __typename?: 'PageInfo' })
      | null
    edges: Array<
      | ({
          cursor?: string | null
          node?:
            | ({
                id: string
                url: string
                host: string
                title?: string | null
                description?: string | null
                faviconUrl?: string | null
              } & { __typename: 'Bookmark' })
            | null
        } & { __typename?: 'BookmarkEdge' })
      | null
    >
  } & { __typename?: 'BookmarksConnection' }
} & { __typename?: 'Query' }

export type GetBookmarkQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetBookmarkQuery = {
  bookmark?:
    | ({
        id: string
        url: string
        host: string
        title?: string | null
        description?: string | null
        faviconUrl?: string | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
        tags: Array<({ name: string } & { __typename?: 'Tag' }) | null>
      } & { __typename: 'Bookmark' })
    | null
} & { __typename?: 'Query' }

export type GetCommentsQueryVariables = Exact<{
  refId: Scalars['ID']['input']
  type: CommentType
}>

export type GetCommentsQuery = {
  comments: Array<
    | ({
        id: string
        parentId?: string | null
        createdAt: any
        updatedAt?: any | null
        text?: string | null
        viewerCanEdit?: boolean | null
        viewerCanDelete?: boolean | null
        author: {
          id: string
          username?: string | null
          image?: string | null
          name?: string | null
          role?: UserRole | null
          isViewer?: boolean | null
          isAdmin?: boolean | null
        } & { __typename: 'User' }
      } & { __typename: 'Comment' })
    | null
  >
} & { __typename?: 'Query' }

export type GetPostsQueryVariables = Exact<{
  filter?: InputMaybe<WritingFilter>
}>

export type GetPostsQuery = {
  posts: Array<
    | ({
        id: string
        publishedAt?: any | null
        title?: string | null
        slug?: string | null
        excerpt?: string | null
      } & { __typename: 'Post' })
    | null
  >
} & { __typename?: 'Query' }

export type GetPostQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetPostQuery = {
  post?:
    | ({
        id: string
        publishedAt?: any | null
        title?: string | null
        slug?: string | null
        excerpt?: string | null
        text?: string | null
        featureImage?: string | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
      } & { __typename: 'Post' })
    | null
} & { __typename?: 'Query' }

export type GetQuestionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>
  after?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<QuestionFilter>
}>

export type GetQuestionsQuery = {
  questions: {
    pageInfo?:
      | ({
          hasNextPage?: boolean | null
          totalCount?: number | null
          endCursor?: string | null
        } & { __typename?: 'PageInfo' })
      | null
    edges: Array<
      | ({
          cursor?: string | null
          node?:
            | ({
                id: string
                title: string
                audioUrl?: string | null
                waveform?: any | null
                createdAt: any
                author?:
                  | ({
                      id: string
                      username?: string | null
                      image?: string | null
                      name?: string | null
                      role?: UserRole | null
                      isViewer?: boolean | null
                      isAdmin?: boolean | null
                    } & { __typename: 'User' })
                  | null
              } & { __typename: 'Question' })
            | null
        } & { __typename?: 'QuestionEdge' })
      | null
    >
  } & { __typename?: 'QuestionsConnection' }
} & { __typename?: 'Query' }

export type GetQuestionQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetQuestionQuery = {
  question?:
    | ({
        id: string
        title: string
        audioUrl?: string | null
        waveform?: any | null
        createdAt: any
        description?: string | null
        status?: QuestionStatus | null
        viewerCanEdit?: boolean | null
        viewerCanComment?: boolean | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
        author?:
          | ({
              id: string
              username?: string | null
              image?: string | null
              name?: string | null
              role?: UserRole | null
              isViewer?: boolean | null
              isAdmin?: boolean | null
            } & { __typename: 'User' })
          | null
      } & { __typename: 'Question' })
    | null
} & { __typename?: 'Query' }

export type GetStacksQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>
  after?: InputMaybe<Scalars['String']['input']>
}>

export type GetStacksQuery = {
  stacks: {
    pageInfo?:
      | ({
          hasNextPage?: boolean | null
          totalCount?: number | null
          endCursor?: string | null
        } & { __typename?: 'PageInfo' })
      | null
    edges: Array<
      | ({
          cursor?: string | null
          node?:
            | ({
                id: string
                name: string
                image?: string | null
                url: string
                slug: string
              } & { __typename: 'Stack' })
            | null
        } & { __typename?: 'StackEdge' })
      | null
    >
  } & { __typename?: 'StacksConnection' }
} & { __typename?: 'Query' }

export type GetStackQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetStackQuery = {
  stack?:
    | ({
        id: string
        name: string
        image?: string | null
        url: string
        slug: string
        createdAt: any
        description?: string | null
        reactionCount?: number | null
        hitRate?: number | null
        viewerHasReacted?: boolean | null
        usedByViewer?: boolean | null
        usedBy: Array<
          | ({
              id: string
              username?: string | null
              image?: string | null
              name?: string | null
              role?: UserRole | null
              isViewer?: boolean | null
              isAdmin?: boolean | null
            } & { __typename: 'User' })
          | null
        >
        tags: Array<({ name: string } & { __typename?: 'Tag' }) | null>
      } & { __typename: 'Stack' })
    | null
} & { __typename?: 'Query' }

export type GetTagsQueryVariables = Exact<{ [key: string]: never }>

export type GetTagsQuery = {
  tags: Array<({ name: string } & { __typename?: 'Tag' }) | null>
} & { __typename?: 'Query' }

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetUserQuery = {
  user?:
    | ({
        id: string
        username?: string | null
        image?: string | null
        name?: string | null
        role?: UserRole | null
        isViewer?: boolean | null
        isAdmin?: boolean | null
      } & { __typename: 'User' })
    | null
} & { __typename?: 'Query' }

export type ViewerQueryVariables = Exact<{ [key: string]: never }>

export type ViewerQuery = {
  viewer?:
    | ({
        id: string
        username?: string | null
        image?: string | null
        name?: string | null
        role?: UserRole | null
        isViewer?: boolean | null
        isAdmin?: boolean | null
      } & { __typename: 'User' })
    | null
} & { __typename?: 'Query' }

export type GetViewerWithSettingsQueryVariables = Exact<{
  [key: string]: never
}>

export type GetViewerWithSettingsQuery = {
  viewer?:
    | ({
        id: string
        username?: string | null
        image?: string | null
        name?: string | null
        role?: UserRole | null
        isViewer?: boolean | null
        isAdmin?: boolean | null
        email?: string | null
        pendingEmail?: string | null
      } & { __typename: 'User' })
    | null
} & { __typename?: 'Query' }

export const BlogCoreFragmentDoc = gql`
  fragment BlogCore on Blog {
    __typename
    id
    date
    title
    slug
  }
`
export const BlogListItemFragmentDoc = gql`
  fragment BlogListItem on Blog {
    ...BlogCore
  }
  ${BlogCoreFragmentDoc}
`
export const BlogDetailFragmentDoc = gql`
  fragment BlogDetail on Blog {
    ...BlogCore
    reactionCount
    viewerHasReacted
  }
  ${BlogCoreFragmentDoc}
`
export const BookmarkCoreFragmentDoc = gql`
  fragment BookmarkCore on Bookmark {
    __typename
    id
    url
    host
    title
    description
    faviconUrl
  }
`
export const BookmarkDetailFragmentDoc = gql`
  fragment BookmarkDetail on Bookmark {
    ...BookmarkCore
    reactionCount
    hitRate
    viewerHasReacted
    tags {
      name
    }
  }
  ${BookmarkCoreFragmentDoc}
`
export const BookmarkListItemFragmentDoc = gql`
  fragment BookmarkListItem on Bookmark {
    ...BookmarkCore
  }
  ${BookmarkCoreFragmentDoc}
`
export const BookmarksConnectionFragmentDoc = gql`
  fragment BookmarksConnection on BookmarksConnection {
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
  ${BookmarkListItemFragmentDoc}
`
export const UserInfoFragmentDoc = gql`
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
`
export const CommentInfoFragmentDoc = gql`
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
  ${UserInfoFragmentDoc}
`
export const PostCoreFragmentDoc = gql`
  fragment PostCore on Post {
    __typename
    id
    publishedAt
    title
    slug
    excerpt
  }
`
export const PostListItemFragmentDoc = gql`
  fragment PostListItem on Post {
    ...PostCore
  }
  ${PostCoreFragmentDoc}
`
export const PostDetailFragmentDoc = gql`
  fragment PostDetail on Post {
    ...PostCore
    text
    featureImage
    reactionCount
    hitRate
    viewerHasReacted
  }
  ${PostCoreFragmentDoc}
`
export const QuestionCoreFragmentDoc = gql`
  fragment QuestionCore on Question {
    __typename
    id
    title
    audioUrl
    waveform
    createdAt
    author {
      ...UserInfo
    }
  }
  ${UserInfoFragmentDoc}
`
export const QuestionDetailFragmentDoc = gql`
  fragment QuestionDetail on Question {
    ...QuestionCore
    description
    status
    viewerCanEdit
    viewerCanComment
    reactionCount
    hitRate
    viewerHasReacted
  }
  ${QuestionCoreFragmentDoc}
`
export const QuestionListItemFragmentDoc = gql`
  fragment QuestionListItem on Question {
    ...QuestionCore
  }
  ${QuestionCoreFragmentDoc}
`
export const QuestionsConnectionFragmentDoc = gql`
  fragment QuestionsConnection on QuestionsConnection {
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
  ${QuestionListItemFragmentDoc}
`
export const StackCoreFragmentDoc = gql`
  fragment StackCore on Stack {
    __typename
    id
    name
    image
    url
    slug
  }
`
export const StackDetailFragmentDoc = gql`
  fragment StackDetail on Stack {
    ...StackCore
    createdAt
    description
    reactionCount
    hitRate
    viewerHasReacted
    usedByViewer
    usedBy {
      ...UserInfo
    }
    tags {
      name
    }
  }
  ${StackCoreFragmentDoc}
  ${UserInfoFragmentDoc}
`
export const StackListItemFragmentDoc = gql`
  fragment StackListItem on Stack {
    ...StackCore
  }
  ${StackCoreFragmentDoc}
`
export const StacksConnectionFragmentDoc = gql`
  fragment StacksConnection on StacksConnection {
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
  ${StackListItemFragmentDoc}
`
export const UserSettingsFragmentDoc = gql`
  fragment UserSettings on User {
    email
    pendingEmail
  }
`
export const EditBookmarkDocument = gql`
  mutation editBookmark($id: ID!, $data: EditBookmarkInput!) {
    editBookmark(id: $id, data: $data) {
      ...BookmarkDetail
    }
  }
  ${BookmarkDetailFragmentDoc}
`
export type EditBookmarkMutationFn = Apollo.MutationFunction<
  EditBookmarkMutation,
  EditBookmarkMutationVariables
>

/**
 * __useEditBookmarkMutation__
 *
 * To run a mutation, you first call `useEditBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBookmarkMutation, { data, loading, error }] = useEditBookmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditBookmarkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditBookmarkMutation,
    EditBookmarkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    EditBookmarkMutation,
    EditBookmarkMutationVariables
  >(EditBookmarkDocument, options)
}
export type EditBookmarkMutationHookResult = ReturnType<
  typeof useEditBookmarkMutation
>
export type EditBookmarkMutationResult =
  Apollo.MutationResult<EditBookmarkMutation>
export type EditBookmarkMutationOptions = Apollo.BaseMutationOptions<
  EditBookmarkMutation,
  EditBookmarkMutationVariables
>
export const DeleteBookmarkDocument = gql`
  mutation deleteBookmark($id: ID!) {
    deleteBookmark(id: $id)
  }
`
export type DeleteBookmarkMutationFn = Apollo.MutationFunction<
  DeleteBookmarkMutation,
  DeleteBookmarkMutationVariables
>

/**
 * __useDeleteBookmarkMutation__
 *
 * To run a mutation, you first call `useDeleteBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookmarkMutation, { data, loading, error }] = useDeleteBookmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookmarkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBookmarkMutation,
    DeleteBookmarkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteBookmarkMutation,
    DeleteBookmarkMutationVariables
  >(DeleteBookmarkDocument, options)
}
export type DeleteBookmarkMutationHookResult = ReturnType<
  typeof useDeleteBookmarkMutation
>
export type DeleteBookmarkMutationResult =
  Apollo.MutationResult<DeleteBookmarkMutation>
export type DeleteBookmarkMutationOptions = Apollo.BaseMutationOptions<
  DeleteBookmarkMutation,
  DeleteBookmarkMutationVariables
>
export const AddBookmarkDocument = gql`
  mutation addBookmark($data: AddBookmarkInput!) {
    addBookmark(data: $data) {
      ...BookmarkDetail
    }
  }
  ${BookmarkDetailFragmentDoc}
`
export type AddBookmarkMutationFn = Apollo.MutationFunction<
  AddBookmarkMutation,
  AddBookmarkMutationVariables
>

/**
 * __useAddBookmarkMutation__
 *
 * To run a mutation, you first call `useAddBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookmarkMutation, { data, loading, error }] = useAddBookmarkMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddBookmarkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddBookmarkMutation,
    AddBookmarkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddBookmarkMutation, AddBookmarkMutationVariables>(
    AddBookmarkDocument,
    options
  )
}
export type AddBookmarkMutationHookResult = ReturnType<
  typeof useAddBookmarkMutation
>
export type AddBookmarkMutationResult =
  Apollo.MutationResult<AddBookmarkMutation>
export type AddBookmarkMutationOptions = Apollo.BaseMutationOptions<
  AddBookmarkMutation,
  AddBookmarkMutationVariables
>
export const AddCommentDocument = gql`
  mutation addComment(
    $refId: ID!
    $parentId: String
    $type: CommentType!
    $text: String!
  ) {
    addComment(refId: $refId, parentId: $parentId, type: $type, text: $text) {
      ...CommentInfo
    }
  }
  ${CommentInfoFragmentDoc}
`
export type AddCommentMutationFn = Apollo.MutationFunction<
  AddCommentMutation,
  AddCommentMutationVariables
>

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      refId: // value for 'refId'
 *      parentId: // value for 'parentId'
 *      type: // value for 'type'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useAddCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddCommentMutation,
    AddCommentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(
    AddCommentDocument,
    options
  )
}
export type AddCommentMutationHookResult = ReturnType<
  typeof useAddCommentMutation
>
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<
  AddCommentMutation,
  AddCommentMutationVariables
>
export const EditCommentDocument = gql`
  mutation editComment($id: ID!, $text: String!) {
    editComment(id: $id, text: $text) {
      ...CommentInfo
    }
  }
  ${CommentInfoFragmentDoc}
`
export type EditCommentMutationFn = Apollo.MutationFunction<
  EditCommentMutation,
  EditCommentMutationVariables
>

/**
 * __useEditCommentMutation__
 *
 * To run a mutation, you first call `useEditCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommentMutation, { data, loading, error }] = useEditCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useEditCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditCommentMutation,
    EditCommentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<EditCommentMutation, EditCommentMutationVariables>(
    EditCommentDocument,
    options
  )
}
export type EditCommentMutationHookResult = ReturnType<
  typeof useEditCommentMutation
>
export type EditCommentMutationResult =
  Apollo.MutationResult<EditCommentMutation>
export type EditCommentMutationOptions = Apollo.BaseMutationOptions<
  EditCommentMutation,
  EditCommentMutationVariables
>
export const DeleteCommentDocument = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id)
  }
`
export type DeleteCommentMutationFn = Apollo.MutationFunction<
  DeleteCommentMutation,
  DeleteCommentMutationVariables
>

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >(DeleteCommentDocument, options)
}
export type DeleteCommentMutationHookResult = ReturnType<
  typeof useDeleteCommentMutation
>
export type DeleteCommentMutationResult =
  Apollo.MutationResult<DeleteCommentMutation>
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<
  DeleteCommentMutation,
  DeleteCommentMutationVariables
>
export const EditPostDocument = gql`
  mutation editPost($id: ID!, $data: EditPostInput!) {
    editPost(id: $id, data: $data) {
      ...PostDetail
    }
  }
  ${PostDetailFragmentDoc}
`
export type EditPostMutationFn = Apollo.MutationFunction<
  EditPostMutation,
  EditPostMutationVariables
>

/**
 * __useEditPostMutation__
 *
 * To run a mutation, you first call `useEditPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPostMutation, { data, loading, error }] = useEditPostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditPostMutation,
    EditPostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<EditPostMutation, EditPostMutationVariables>(
    EditPostDocument,
    options
  )
}
export type EditPostMutationHookResult = ReturnType<typeof useEditPostMutation>
export type EditPostMutationResult = Apollo.MutationResult<EditPostMutation>
export type EditPostMutationOptions = Apollo.BaseMutationOptions<
  EditPostMutation,
  EditPostMutationVariables
>
export const DeletePostDocument = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id)
  }
`
export type DeletePostMutationFn = Apollo.MutationFunction<
  DeletePostMutation,
  DeletePostMutationVariables
>

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePostMutation,
    DeletePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(
    DeletePostDocument,
    options
  )
}
export type DeletePostMutationHookResult = ReturnType<
  typeof useDeletePostMutation
>
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<
  DeletePostMutation,
  DeletePostMutationVariables
>
export const AddPostDocument = gql`
  mutation addPost($data: AddPostInput!) {
    addPost(data: $data) {
      ...PostDetail
    }
  }
  ${PostDetailFragmentDoc}
`
export type AddPostMutationFn = Apollo.MutationFunction<
  AddPostMutation,
  AddPostMutationVariables
>

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddPostMutation,
    AddPostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(
    AddPostDocument,
    options
  )
}
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>
export type AddPostMutationOptions = Apollo.BaseMutationOptions<
  AddPostMutation,
  AddPostMutationVariables
>
export const EditQuestionDocument = gql`
  mutation editQuestion($id: ID!, $data: EditQuestionInput!) {
    editQuestion(id: $id, data: $data) {
      ...QuestionDetail
    }
  }
  ${QuestionDetailFragmentDoc}
`
export type EditQuestionMutationFn = Apollo.MutationFunction<
  EditQuestionMutation,
  EditQuestionMutationVariables
>

/**
 * __useEditQuestionMutation__
 *
 * To run a mutation, you first call `useEditQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editQuestionMutation, { data, loading, error }] = useEditQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditQuestionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditQuestionMutation,
    EditQuestionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    EditQuestionMutation,
    EditQuestionMutationVariables
  >(EditQuestionDocument, options)
}
export type EditQuestionMutationHookResult = ReturnType<
  typeof useEditQuestionMutation
>
export type EditQuestionMutationResult =
  Apollo.MutationResult<EditQuestionMutation>
export type EditQuestionMutationOptions = Apollo.BaseMutationOptions<
  EditQuestionMutation,
  EditQuestionMutationVariables
>
export const DeleteQuestionDocument = gql`
  mutation deleteQuestion($id: ID!) {
    deleteQuestion(id: $id)
  }
`
export type DeleteQuestionMutationFn = Apollo.MutationFunction<
  DeleteQuestionMutation,
  DeleteQuestionMutationVariables
>

/**
 * __useDeleteQuestionMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestionMutation, { data, loading, error }] = useDeleteQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuestionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteQuestionMutation,
    DeleteQuestionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteQuestionMutation,
    DeleteQuestionMutationVariables
  >(DeleteQuestionDocument, options)
}
export type DeleteQuestionMutationHookResult = ReturnType<
  typeof useDeleteQuestionMutation
>
export type DeleteQuestionMutationResult =
  Apollo.MutationResult<DeleteQuestionMutation>
export type DeleteQuestionMutationOptions = Apollo.BaseMutationOptions<
  DeleteQuestionMutation,
  DeleteQuestionMutationVariables
>
export const AddQuestionDocument = gql`
  mutation addQuestion($data: AddQuestionInput!) {
    addQuestion(data: $data) {
      ...QuestionDetail
    }
  }
  ${QuestionDetailFragmentDoc}
`
export type AddQuestionMutationFn = Apollo.MutationFunction<
  AddQuestionMutation,
  AddQuestionMutationVariables
>

/**
 * __useAddQuestionMutation__
 *
 * To run a mutation, you first call `useAddQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addQuestionMutation, { data, loading, error }] = useAddQuestionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddQuestionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddQuestionMutation,
    AddQuestionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddQuestionMutation, AddQuestionMutationVariables>(
    AddQuestionDocument,
    options
  )
}
export type AddQuestionMutationHookResult = ReturnType<
  typeof useAddQuestionMutation
>
export type AddQuestionMutationResult =
  Apollo.MutationResult<AddQuestionMutation>
export type AddQuestionMutationOptions = Apollo.BaseMutationOptions<
  AddQuestionMutation,
  AddQuestionMutationVariables
>
export const ToggleReactionDocument = gql`
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
      ... on Post {
        id
        reactionCount
        viewerHasReacted
      }
      ... on Blog {
        id
        reactionCount
        viewerHasReacted
      }
    }
  }
`
export type ToggleReactionMutationFn = Apollo.MutationFunction<
  ToggleReactionMutation,
  ToggleReactionMutationVariables
>

/**
 * __useToggleReactionMutation__
 *
 * To run a mutation, you first call `useToggleReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleReactionMutation, { data, loading, error }] = useToggleReactionMutation({
 *   variables: {
 *      refId: // value for 'refId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useToggleReactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleReactionMutation,
    ToggleReactionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    ToggleReactionMutation,
    ToggleReactionMutationVariables
  >(ToggleReactionDocument, options)
}
export type ToggleReactionMutationHookResult = ReturnType<
  typeof useToggleReactionMutation
>
export type ToggleReactionMutationResult =
  Apollo.MutationResult<ToggleReactionMutation>
export type ToggleReactionMutationOptions = Apollo.BaseMutationOptions<
  ToggleReactionMutation,
  ToggleReactionMutationVariables
>
export const EditStackDocument = gql`
  mutation editStack($id: ID!, $data: EditStackInput!) {
    editStack(id: $id, data: $data) {
      ...StackDetail
    }
  }
  ${StackDetailFragmentDoc}
`
export type EditStackMutationFn = Apollo.MutationFunction<
  EditStackMutation,
  EditStackMutationVariables
>

/**
 * __useEditStackMutation__
 *
 * To run a mutation, you first call `useEditStackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditStackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editStackMutation, { data, loading, error }] = useEditStackMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditStackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditStackMutation,
    EditStackMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<EditStackMutation, EditStackMutationVariables>(
    EditStackDocument,
    options
  )
}
export type EditStackMutationHookResult = ReturnType<
  typeof useEditStackMutation
>
export type EditStackMutationResult = Apollo.MutationResult<EditStackMutation>
export type EditStackMutationOptions = Apollo.BaseMutationOptions<
  EditStackMutation,
  EditStackMutationVariables
>
export const DeleteStackDocument = gql`
  mutation deleteStack($id: ID!) {
    deleteStack(id: $id)
  }
`
export type DeleteStackMutationFn = Apollo.MutationFunction<
  DeleteStackMutation,
  DeleteStackMutationVariables
>

/**
 * __useDeleteStackMutation__
 *
 * To run a mutation, you first call `useDeleteStackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStackMutation, { data, loading, error }] = useDeleteStackMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteStackMutation,
    DeleteStackMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteStackMutation, DeleteStackMutationVariables>(
    DeleteStackDocument,
    options
  )
}
export type DeleteStackMutationHookResult = ReturnType<
  typeof useDeleteStackMutation
>
export type DeleteStackMutationResult =
  Apollo.MutationResult<DeleteStackMutation>
export type DeleteStackMutationOptions = Apollo.BaseMutationOptions<
  DeleteStackMutation,
  DeleteStackMutationVariables
>
export const AddStackDocument = gql`
  mutation addStack($data: AddStackInput!) {
    addStack(data: $data) {
      ...StackDetail
    }
  }
  ${StackDetailFragmentDoc}
`
export type AddStackMutationFn = Apollo.MutationFunction<
  AddStackMutation,
  AddStackMutationVariables
>

/**
 * __useAddStackMutation__
 *
 * To run a mutation, you first call `useAddStackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStackMutation, { data, loading, error }] = useAddStackMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddStackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddStackMutation,
    AddStackMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddStackMutation, AddStackMutationVariables>(
    AddStackDocument,
    options
  )
}
export type AddStackMutationHookResult = ReturnType<typeof useAddStackMutation>
export type AddStackMutationResult = Apollo.MutationResult<AddStackMutation>
export type AddStackMutationOptions = Apollo.BaseMutationOptions<
  AddStackMutation,
  AddStackMutationVariables
>
export const ToggleStackUserDocument = gql`
  mutation toggleStackUser($id: ID!) {
    toggleStackUser(id: $id) {
      ...StackCore
      usedBy {
        ...UserInfo
      }
    }
  }
  ${StackCoreFragmentDoc}
  ${UserInfoFragmentDoc}
`
export type ToggleStackUserMutationFn = Apollo.MutationFunction<
  ToggleStackUserMutation,
  ToggleStackUserMutationVariables
>

/**
 * __useToggleStackUserMutation__
 *
 * To run a mutation, you first call `useToggleStackUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleStackUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleStackUserMutation, { data, loading, error }] = useToggleStackUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleStackUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleStackUserMutation,
    ToggleStackUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    ToggleStackUserMutation,
    ToggleStackUserMutationVariables
  >(ToggleStackUserDocument, options)
}
export type ToggleStackUserMutationHookResult = ReturnType<
  typeof useToggleStackUserMutation
>
export type ToggleStackUserMutationResult =
  Apollo.MutationResult<ToggleStackUserMutation>
export type ToggleStackUserMutationOptions = Apollo.BaseMutationOptions<
  ToggleStackUserMutation,
  ToggleStackUserMutationVariables
>
export const DeleteUserDocument = gql`
  mutation deleteUser {
    deleteUser
  }
`
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options
  )
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>
export const EditUserDocument = gql`
  mutation editUser($data: EditUserInput) {
    editUser(data: $data) {
      ...UserInfo
    }
  }
  ${UserInfoFragmentDoc}
`
export type EditUserMutationFn = Apollo.MutationFunction<
  EditUserMutation,
  EditUserMutationVariables
>

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditUserMutation,
    EditUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(
    EditUserDocument,
    options
  )
}
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>
export type EditUserMutationOptions = Apollo.BaseMutationOptions<
  EditUserMutation,
  EditUserMutationVariables
>
export const GetBlogsDocument = gql`
  query getBlogs {
    blogs {
      ...BlogListItem
    }
  }
  ${BlogListItemFragmentDoc}
`

/**
 * __useGetBlogsQuery__
 *
 * To run a query within a React component, call `useGetBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBlogsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetBlogsQuery, GetBlogsQueryVariables>(
    GetBlogsDocument,
    options
  )
}
export function useGetBlogsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBlogsQuery,
    GetBlogsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetBlogsQuery, GetBlogsQueryVariables>(
    GetBlogsDocument,
    options
  )
}
export function useGetBlogsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetBlogsQuery,
    GetBlogsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetBlogsQuery, GetBlogsQueryVariables>(
    GetBlogsDocument,
    options
  )
}
export type GetBlogsQueryHookResult = ReturnType<typeof useGetBlogsQuery>
export type GetBlogsLazyQueryHookResult = ReturnType<
  typeof useGetBlogsLazyQuery
>
export type GetBlogsSuspenseQueryHookResult = ReturnType<
  typeof useGetBlogsSuspenseQuery
>
export type GetBlogsQueryResult = Apollo.QueryResult<
  GetBlogsQuery,
  GetBlogsQueryVariables
>
export const GetBlogDocument = gql`
  query getBlog($slug: String!) {
    blog(slug: $slug) {
      ...BlogDetail
    }
  }
  ${BlogDetailFragmentDoc}
`

/**
 * __useGetBlogQuery__
 *
 * To run a query within a React component, call `useGetBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetBlogQuery(
  baseOptions: Apollo.QueryHookOptions<GetBlogQuery, GetBlogQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetBlogQuery, GetBlogQueryVariables>(
    GetBlogDocument,
    options
  )
}
export function useGetBlogLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetBlogQuery, GetBlogQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetBlogQuery, GetBlogQueryVariables>(
    GetBlogDocument,
    options
  )
}
export function useGetBlogSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetBlogQuery,
    GetBlogQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetBlogQuery, GetBlogQueryVariables>(
    GetBlogDocument,
    options
  )
}
export type GetBlogQueryHookResult = ReturnType<typeof useGetBlogQuery>
export type GetBlogLazyQueryHookResult = ReturnType<typeof useGetBlogLazyQuery>
export type GetBlogSuspenseQueryHookResult = ReturnType<
  typeof useGetBlogSuspenseQuery
>
export type GetBlogQueryResult = Apollo.QueryResult<
  GetBlogQuery,
  GetBlogQueryVariables
>
export const GetBookmarksDocument = gql`
  query getBookmarks($first: Int, $after: String, $filter: BookmarkFilter) {
    bookmarks(first: $first, after: $after, filter: $filter) {
      ...BookmarksConnection
    }
  }
  ${BookmarksConnectionFragmentDoc}
`

/**
 * __useGetBookmarksQuery__
 *
 * To run a query within a React component, call `useGetBookmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookmarksQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetBookmarksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBookmarksQuery,
    GetBookmarksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(
    GetBookmarksDocument,
    options
  )
}
export function useGetBookmarksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBookmarksQuery,
    GetBookmarksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(
    GetBookmarksDocument,
    options
  )
}
export function useGetBookmarksSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetBookmarksQuery,
    GetBookmarksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(
    GetBookmarksDocument,
    options
  )
}
export type GetBookmarksQueryHookResult = ReturnType<
  typeof useGetBookmarksQuery
>
export type GetBookmarksLazyQueryHookResult = ReturnType<
  typeof useGetBookmarksLazyQuery
>
export type GetBookmarksSuspenseQueryHookResult = ReturnType<
  typeof useGetBookmarksSuspenseQuery
>
export type GetBookmarksQueryResult = Apollo.QueryResult<
  GetBookmarksQuery,
  GetBookmarksQueryVariables
>
export const GetBookmarkDocument = gql`
  query getBookmark($id: ID!) {
    bookmark(id: $id) {
      ...BookmarkDetail
    }
  }
  ${BookmarkDetailFragmentDoc}
`

/**
 * __useGetBookmarkQuery__
 *
 * To run a query within a React component, call `useGetBookmarkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookmarkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookmarkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookmarkQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBookmarkQuery,
    GetBookmarkQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetBookmarkQuery, GetBookmarkQueryVariables>(
    GetBookmarkDocument,
    options
  )
}
export function useGetBookmarkLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBookmarkQuery,
    GetBookmarkQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetBookmarkQuery, GetBookmarkQueryVariables>(
    GetBookmarkDocument,
    options
  )
}
export function useGetBookmarkSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetBookmarkQuery,
    GetBookmarkQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetBookmarkQuery, GetBookmarkQueryVariables>(
    GetBookmarkDocument,
    options
  )
}
export type GetBookmarkQueryHookResult = ReturnType<typeof useGetBookmarkQuery>
export type GetBookmarkLazyQueryHookResult = ReturnType<
  typeof useGetBookmarkLazyQuery
>
export type GetBookmarkSuspenseQueryHookResult = ReturnType<
  typeof useGetBookmarkSuspenseQuery
>
export type GetBookmarkQueryResult = Apollo.QueryResult<
  GetBookmarkQuery,
  GetBookmarkQueryVariables
>
export const GetCommentsDocument = gql`
  query getComments($refId: ID!, $type: CommentType!) {
    comments(refId: $refId, type: $type) {
      ...CommentInfo
    }
  }
  ${CommentInfoFragmentDoc}
`

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      refId: // value for 'refId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetCommentsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCommentsQuery,
    GetCommentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(
    GetCommentsDocument,
    options
  )
}
export function useGetCommentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCommentsQuery,
    GetCommentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(
    GetCommentsDocument,
    options
  )
}
export function useGetCommentsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCommentsQuery,
    GetCommentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetCommentsQuery, GetCommentsQueryVariables>(
    GetCommentsDocument,
    options
  )
}
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>
export type GetCommentsLazyQueryHookResult = ReturnType<
  typeof useGetCommentsLazyQuery
>
export type GetCommentsSuspenseQueryHookResult = ReturnType<
  typeof useGetCommentsSuspenseQuery
>
export type GetCommentsQueryResult = Apollo.QueryResult<
  GetCommentsQuery,
  GetCommentsQueryVariables
>
export const GetPostsDocument = gql`
  query getPosts($filter: WritingFilter) {
    posts(filter: $filter) {
      ...PostListItem
    }
  }
  ${PostListItemFragmentDoc}
`

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  )
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  )
}
export function useGetPostsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    options
  )
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>
export type GetPostsSuspenseQueryHookResult = ReturnType<
  typeof useGetPostsSuspenseQuery
>
export type GetPostsQueryResult = Apollo.QueryResult<
  GetPostsQuery,
  GetPostsQueryVariables
>
export const GetPostDocument = gql`
  query getPost($slug: String!) {
    post(slug: $slug) {
      ...PostDetail
    }
  }
  ${PostDetailFragmentDoc}
`

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostQuery(
  baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    options
  )
}
export function useGetPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    options
  )
}
export function useGetPostSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPostQuery,
    GetPostQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    options
  )
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>
export type GetPostSuspenseQueryHookResult = ReturnType<
  typeof useGetPostSuspenseQuery
>
export type GetPostQueryResult = Apollo.QueryResult<
  GetPostQuery,
  GetPostQueryVariables
>
export const GetQuestionsDocument = gql`
  query getQuestions($first: Int, $after: String, $filter: QuestionFilter) {
    questions(first: $first, after: $after, filter: $filter) {
      ...QuestionsConnection
    }
  }
  ${QuestionsConnectionFragmentDoc}
`

/**
 * __useGetQuestionsQuery__
 *
 * To run a query within a React component, call `useGetQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetQuestionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetQuestionsQuery,
    GetQuestionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(
    GetQuestionsDocument,
    options
  )
}
export function useGetQuestionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetQuestionsQuery,
    GetQuestionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(
    GetQuestionsDocument,
    options
  )
}
export function useGetQuestionsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetQuestionsQuery,
    GetQuestionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(
    GetQuestionsDocument,
    options
  )
}
export type GetQuestionsQueryHookResult = ReturnType<
  typeof useGetQuestionsQuery
>
export type GetQuestionsLazyQueryHookResult = ReturnType<
  typeof useGetQuestionsLazyQuery
>
export type GetQuestionsSuspenseQueryHookResult = ReturnType<
  typeof useGetQuestionsSuspenseQuery
>
export type GetQuestionsQueryResult = Apollo.QueryResult<
  GetQuestionsQuery,
  GetQuestionsQueryVariables
>
export const GetQuestionDocument = gql`
  query getQuestion($id: ID!) {
    question(id: $id) {
      ...QuestionDetail
    }
  }
  ${QuestionDetailFragmentDoc}
`

/**
 * __useGetQuestionQuery__
 *
 * To run a query within a React component, call `useGetQuestionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetQuestionQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetQuestionQuery,
    GetQuestionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetQuestionQuery, GetQuestionQueryVariables>(
    GetQuestionDocument,
    options
  )
}
export function useGetQuestionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetQuestionQuery,
    GetQuestionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetQuestionQuery, GetQuestionQueryVariables>(
    GetQuestionDocument,
    options
  )
}
export function useGetQuestionSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetQuestionQuery,
    GetQuestionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetQuestionQuery, GetQuestionQueryVariables>(
    GetQuestionDocument,
    options
  )
}
export type GetQuestionQueryHookResult = ReturnType<typeof useGetQuestionQuery>
export type GetQuestionLazyQueryHookResult = ReturnType<
  typeof useGetQuestionLazyQuery
>
export type GetQuestionSuspenseQueryHookResult = ReturnType<
  typeof useGetQuestionSuspenseQuery
>
export type GetQuestionQueryResult = Apollo.QueryResult<
  GetQuestionQuery,
  GetQuestionQueryVariables
>
export const GetStacksDocument = gql`
  query getStacks($first: Int, $after: String) {
    stacks(first: $first, after: $after) {
      ...StacksConnection
    }
  }
  ${StacksConnectionFragmentDoc}
`

/**
 * __useGetStacksQuery__
 *
 * To run a query within a React component, call `useGetStacksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStacksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStacksQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetStacksQuery(
  baseOptions?: Apollo.QueryHookOptions<GetStacksQuery, GetStacksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetStacksQuery, GetStacksQueryVariables>(
    GetStacksDocument,
    options
  )
}
export function useGetStacksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStacksQuery,
    GetStacksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetStacksQuery, GetStacksQueryVariables>(
    GetStacksDocument,
    options
  )
}
export function useGetStacksSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetStacksQuery,
    GetStacksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetStacksQuery, GetStacksQueryVariables>(
    GetStacksDocument,
    options
  )
}
export type GetStacksQueryHookResult = ReturnType<typeof useGetStacksQuery>
export type GetStacksLazyQueryHookResult = ReturnType<
  typeof useGetStacksLazyQuery
>
export type GetStacksSuspenseQueryHookResult = ReturnType<
  typeof useGetStacksSuspenseQuery
>
export type GetStacksQueryResult = Apollo.QueryResult<
  GetStacksQuery,
  GetStacksQueryVariables
>
export const GetStackDocument = gql`
  query getStack($slug: String!) {
    stack(slug: $slug) {
      ...StackDetail
    }
  }
  ${StackDetailFragmentDoc}
`

/**
 * __useGetStackQuery__
 *
 * To run a query within a React component, call `useGetStackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStackQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetStackQuery(
  baseOptions: Apollo.QueryHookOptions<GetStackQuery, GetStackQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetStackQuery, GetStackQueryVariables>(
    GetStackDocument,
    options
  )
}
export function useGetStackLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStackQuery,
    GetStackQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetStackQuery, GetStackQueryVariables>(
    GetStackDocument,
    options
  )
}
export function useGetStackSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetStackQuery,
    GetStackQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetStackQuery, GetStackQueryVariables>(
    GetStackDocument,
    options
  )
}
export type GetStackQueryHookResult = ReturnType<typeof useGetStackQuery>
export type GetStackLazyQueryHookResult = ReturnType<
  typeof useGetStackLazyQuery
>
export type GetStackSuspenseQueryHookResult = ReturnType<
  typeof useGetStackSuspenseQuery
>
export type GetStackQueryResult = Apollo.QueryResult<
  GetStackQuery,
  GetStackQueryVariables
>
export const GetTagsDocument = gql`
  query getTags {
    tags {
      name
    }
  }
`

/**
 * __useGetTagsQuery__
 *
 * To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTagsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(
    GetTagsDocument,
    options
  )
}
export function useGetTagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(
    GetTagsDocument,
    options
  )
}
export function useGetTagsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetTagsQuery,
    GetTagsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetTagsQuery, GetTagsQueryVariables>(
    GetTagsDocument,
    options
  )
}
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>
export type GetTagsSuspenseQueryHookResult = ReturnType<
  typeof useGetTagsSuspenseQuery
>
export type GetTagsQueryResult = Apollo.QueryResult<
  GetTagsQuery,
  GetTagsQueryVariables
>
export const GetUserDocument = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      ...UserInfo
    }
  }
  ${UserInfoFragmentDoc}
`

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  )
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  )
}
export function useGetUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  )
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserSuspenseQueryHookResult = ReturnType<
  typeof useGetUserSuspenseQuery
>
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>
export const ViewerDocument = gql`
  query viewer {
    viewer {
      ...UserInfo
    }
  }
  ${UserInfoFragmentDoc}
`

/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerQuery(
  baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ViewerQuery, ViewerQueryVariables>(
    ViewerDocument,
    options
  )
}
export function useViewerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ViewerQuery, ViewerQueryVariables>(
    ViewerDocument,
    options
  )
}
export function useViewerSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ViewerQuery,
    ViewerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ViewerQuery, ViewerQueryVariables>(
    ViewerDocument,
    options
  )
}
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>
export type ViewerSuspenseQueryHookResult = ReturnType<
  typeof useViewerSuspenseQuery
>
export type ViewerQueryResult = Apollo.QueryResult<
  ViewerQuery,
  ViewerQueryVariables
>
export const GetViewerWithSettingsDocument = gql`
  query getViewerWithSettings {
    viewer {
      ...UserInfo
      ...UserSettings
    }
  }
  ${UserInfoFragmentDoc}
  ${UserSettingsFragmentDoc}
`

/**
 * __useGetViewerWithSettingsQuery__
 *
 * To run a query within a React component, call `useGetViewerWithSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewerWithSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewerWithSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetViewerWithSettingsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetViewerWithSettingsQuery,
    GetViewerWithSettingsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetViewerWithSettingsQuery,
    GetViewerWithSettingsQueryVariables
  >(GetViewerWithSettingsDocument, options)
}
export function useGetViewerWithSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetViewerWithSettingsQuery,
    GetViewerWithSettingsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetViewerWithSettingsQuery,
    GetViewerWithSettingsQueryVariables
  >(GetViewerWithSettingsDocument, options)
}
export function useGetViewerWithSettingsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetViewerWithSettingsQuery,
    GetViewerWithSettingsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetViewerWithSettingsQuery,
    GetViewerWithSettingsQueryVariables
  >(GetViewerWithSettingsDocument, options)
}
export type GetViewerWithSettingsQueryHookResult = ReturnType<
  typeof useGetViewerWithSettingsQuery
>
export type GetViewerWithSettingsLazyQueryHookResult = ReturnType<
  typeof useGetViewerWithSettingsLazyQuery
>
export type GetViewerWithSettingsSuspenseQueryHookResult = ReturnType<
  typeof useGetViewerWithSettingsSuspenseQuery
>
export type GetViewerWithSettingsQueryResult = Apollo.QueryResult<
  GetViewerWithSettingsQuery,
  GetViewerWithSettingsQueryVariables
>
export type BlogKeySpecifier = (
  | 'date'
  | 'id'
  | 'reactionCount'
  | 'slug'
  | 'title'
  | 'viewerHasReacted'
  | BlogKeySpecifier
)[]
export type BlogFieldPolicy = {
  date?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  reactionCount?: FieldPolicy<any> | FieldReadFunction<any>
  slug?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
  viewerHasReacted?: FieldPolicy<any> | FieldReadFunction<any>
}
export type BookmarkKeySpecifier = (
  | 'createdAt'
  | 'description'
  | 'faviconUrl'
  | 'hitRate'
  | 'host'
  | 'id'
  | 'image'
  | 'reactionCount'
  | 'tags'
  | 'title'
  | 'updatedAt'
  | 'url'
  | 'viewerHasReacted'
  | BookmarkKeySpecifier
)[]
export type BookmarkFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  description?: FieldPolicy<any> | FieldReadFunction<any>
  faviconUrl?: FieldPolicy<any> | FieldReadFunction<any>
  hitRate?: FieldPolicy<any> | FieldReadFunction<any>
  host?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  image?: FieldPolicy<any> | FieldReadFunction<any>
  reactionCount?: FieldPolicy<any> | FieldReadFunction<any>
  tags?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
  url?: FieldPolicy<any> | FieldReadFunction<any>
  viewerHasReacted?: FieldPolicy<any> | FieldReadFunction<any>
}
export type BookmarkEdgeKeySpecifier = (
  | 'cursor'
  | 'node'
  | BookmarkEdgeKeySpecifier
)[]
export type BookmarkEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>
  node?: FieldPolicy<any> | FieldReadFunction<any>
}
export type BookmarksConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | BookmarksConnectionKeySpecifier
)[]
export type BookmarksConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
}
export type CommentKeySpecifier = (
  | 'author'
  | 'createdAt'
  | 'id'
  | 'parentId'
  | 'replies'
  | 'text'
  | 'updatedAt'
  | 'viewerCanDelete'
  | 'viewerCanEdit'
  | CommentKeySpecifier
)[]
export type CommentFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  parentId?: FieldPolicy<any> | FieldReadFunction<any>
  replies?: FieldPolicy<any> | FieldReadFunction<any>
  text?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
  viewerCanDelete?: FieldPolicy<any> | FieldReadFunction<any>
  viewerCanEdit?: FieldPolicy<any> | FieldReadFunction<any>
}
export type HitKeySpecifier = (
  | 'catID'
  | 'createdAt'
  | 'hitRate'
  | 'id'
  | 'updatedAt'
  | HitKeySpecifier
)[]
export type HitFieldPolicy = {
  catID?: FieldPolicy<any> | FieldReadFunction<any>
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  hitRate?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
}
export type MutationKeySpecifier = (
  | 'addBookmark'
  | 'addComment'
  | 'addHit'
  | 'addPost'
  | 'addQuestion'
  | 'addStack'
  | 'deleteBookmark'
  | 'deleteComment'
  | 'deleteHit'
  | 'deletePost'
  | 'deleteQuestion'
  | 'deleteStack'
  | 'deleteUser'
  | 'editBookmark'
  | 'editComment'
  | 'editHit'
  | 'editPost'
  | 'editQuestion'
  | 'editStack'
  | 'editUser'
  | 'toggleReaction'
  | 'toggleStackUser'
  | MutationKeySpecifier
)[]
export type MutationFieldPolicy = {
  addBookmark?: FieldPolicy<any> | FieldReadFunction<any>
  addComment?: FieldPolicy<any> | FieldReadFunction<any>
  addHit?: FieldPolicy<any> | FieldReadFunction<any>
  addPost?: FieldPolicy<any> | FieldReadFunction<any>
  addQuestion?: FieldPolicy<any> | FieldReadFunction<any>
  addStack?: FieldPolicy<any> | FieldReadFunction<any>
  deleteBookmark?: FieldPolicy<any> | FieldReadFunction<any>
  deleteComment?: FieldPolicy<any> | FieldReadFunction<any>
  deleteHit?: FieldPolicy<any> | FieldReadFunction<any>
  deletePost?: FieldPolicy<any> | FieldReadFunction<any>
  deleteQuestion?: FieldPolicy<any> | FieldReadFunction<any>
  deleteStack?: FieldPolicy<any> | FieldReadFunction<any>
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>
  editBookmark?: FieldPolicy<any> | FieldReadFunction<any>
  editComment?: FieldPolicy<any> | FieldReadFunction<any>
  editHit?: FieldPolicy<any> | FieldReadFunction<any>
  editPost?: FieldPolicy<any> | FieldReadFunction<any>
  editQuestion?: FieldPolicy<any> | FieldReadFunction<any>
  editStack?: FieldPolicy<any> | FieldReadFunction<any>
  editUser?: FieldPolicy<any> | FieldReadFunction<any>
  toggleReaction?: FieldPolicy<any> | FieldReadFunction<any>
  toggleStackUser?: FieldPolicy<any> | FieldReadFunction<any>
}
export type PageInfoKeySpecifier = (
  | 'endCursor'
  | 'hasNextPage'
  | 'totalCount'
  | PageInfoKeySpecifier
)[]
export type PageInfoFieldPolicy = {
  endCursor?: FieldPolicy<any> | FieldReadFunction<any>
  hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>
}
export type PostKeySpecifier = (
  | 'author'
  | 'createdAt'
  | 'excerpt'
  | 'featureImage'
  | 'hitRate'
  | 'id'
  | 'publishedAt'
  | 'reactionCount'
  | 'slug'
  | 'text'
  | 'title'
  | 'updatedAt'
  | 'viewerHasReacted'
  | PostKeySpecifier
)[]
export type PostFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  excerpt?: FieldPolicy<any> | FieldReadFunction<any>
  featureImage?: FieldPolicy<any> | FieldReadFunction<any>
  hitRate?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  publishedAt?: FieldPolicy<any> | FieldReadFunction<any>
  reactionCount?: FieldPolicy<any> | FieldReadFunction<any>
  slug?: FieldPolicy<any> | FieldReadFunction<any>
  text?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
  viewerHasReacted?: FieldPolicy<any> | FieldReadFunction<any>
}
export type QueryKeySpecifier = (
  | 'blog'
  | 'blogs'
  | 'bookmark'
  | 'bookmarks'
  | 'comment'
  | 'comments'
  | 'hit'
  | 'hits'
  | 'post'
  | 'posts'
  | 'question'
  | 'questions'
  | 'stack'
  | 'stacks'
  | 'tags'
  | 'user'
  | 'viewer'
  | QueryKeySpecifier
)[]
export type QueryFieldPolicy = {
  blog?: FieldPolicy<any> | FieldReadFunction<any>
  blogs?: FieldPolicy<any> | FieldReadFunction<any>
  bookmark?: FieldPolicy<any> | FieldReadFunction<any>
  bookmarks?: FieldPolicy<any> | FieldReadFunction<any>
  comment?: FieldPolicy<any> | FieldReadFunction<any>
  comments?: FieldPolicy<any> | FieldReadFunction<any>
  hit?: FieldPolicy<any> | FieldReadFunction<any>
  hits?: FieldPolicy<any> | FieldReadFunction<any>
  post?: FieldPolicy<any> | FieldReadFunction<any>
  posts?: FieldPolicy<any> | FieldReadFunction<any>
  question?: FieldPolicy<any> | FieldReadFunction<any>
  questions?: FieldPolicy<any> | FieldReadFunction<any>
  stack?: FieldPolicy<any> | FieldReadFunction<any>
  stacks?: FieldPolicy<any> | FieldReadFunction<any>
  tags?: FieldPolicy<any> | FieldReadFunction<any>
  user?: FieldPolicy<any> | FieldReadFunction<any>
  viewer?: FieldPolicy<any> | FieldReadFunction<any>
}
export type QuestionKeySpecifier = (
  | 'audioUrl'
  | 'author'
  | 'createdAt'
  | 'description'
  | 'hitRate'
  | 'id'
  | 'playCount'
  | 'reactionCount'
  | 'status'
  | 'title'
  | 'updatedAt'
  | 'viewerCanComment'
  | 'viewerCanEdit'
  | 'viewerHasReacted'
  | 'waveform'
  | QuestionKeySpecifier
)[]
export type QuestionFieldPolicy = {
  audioUrl?: FieldPolicy<any> | FieldReadFunction<any>
  author?: FieldPolicy<any> | FieldReadFunction<any>
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  description?: FieldPolicy<any> | FieldReadFunction<any>
  hitRate?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  playCount?: FieldPolicy<any> | FieldReadFunction<any>
  reactionCount?: FieldPolicy<any> | FieldReadFunction<any>
  status?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
  viewerCanComment?: FieldPolicy<any> | FieldReadFunction<any>
  viewerCanEdit?: FieldPolicy<any> | FieldReadFunction<any>
  viewerHasReacted?: FieldPolicy<any> | FieldReadFunction<any>
  waveform?: FieldPolicy<any> | FieldReadFunction<any>
}
export type QuestionEdgeKeySpecifier = (
  | 'cursor'
  | 'node'
  | QuestionEdgeKeySpecifier
)[]
export type QuestionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>
  node?: FieldPolicy<any> | FieldReadFunction<any>
}
export type QuestionsConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | QuestionsConnectionKeySpecifier
)[]
export type QuestionsConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
}
export type StackKeySpecifier = (
  | 'createdAt'
  | 'description'
  | 'hitRate'
  | 'id'
  | 'image'
  | 'name'
  | 'reactionCount'
  | 'slug'
  | 'tags'
  | 'updatedAt'
  | 'url'
  | 'usedBy'
  | 'usedByViewer'
  | 'viewerHasReacted'
  | StackKeySpecifier
)[]
export type StackFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  description?: FieldPolicy<any> | FieldReadFunction<any>
  hitRate?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  image?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
  reactionCount?: FieldPolicy<any> | FieldReadFunction<any>
  slug?: FieldPolicy<any> | FieldReadFunction<any>
  tags?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
  url?: FieldPolicy<any> | FieldReadFunction<any>
  usedBy?: FieldPolicy<any> | FieldReadFunction<any>
  usedByViewer?: FieldPolicy<any> | FieldReadFunction<any>
  viewerHasReacted?: FieldPolicy<any> | FieldReadFunction<any>
}
export type StackEdgeKeySpecifier = (
  | 'cursor'
  | 'node'
  | StackEdgeKeySpecifier
)[]
export type StackEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>
  node?: FieldPolicy<any> | FieldReadFunction<any>
}
export type StacksConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | StacksConnectionKeySpecifier
)[]
export type StacksConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
}
export type TagKeySpecifier = ('name' | TagKeySpecifier)[]
export type TagFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UserKeySpecifier = (
  | 'createdAt'
  | 'email'
  | 'id'
  | 'image'
  | 'isAdmin'
  | 'isViewer'
  | 'name'
  | 'pendingEmail'
  | 'role'
  | 'username'
  | UserKeySpecifier
)[]
export type UserFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  email?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  image?: FieldPolicy<any> | FieldReadFunction<any>
  isAdmin?: FieldPolicy<any> | FieldReadFunction<any>
  isViewer?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
  pendingEmail?: FieldPolicy<any> | FieldReadFunction<any>
  role?: FieldPolicy<any> | FieldReadFunction<any>
  username?: FieldPolicy<any> | FieldReadFunction<any>
}
export type StrictTypedTypePolicies = {
  Blog?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | BlogKeySpecifier | (() => undefined | BlogKeySpecifier)
    fields?: BlogFieldPolicy
  }
  Bookmark?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | BookmarkKeySpecifier
      | (() => undefined | BookmarkKeySpecifier)
    fields?: BookmarkFieldPolicy
  }
  BookmarkEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | BookmarkEdgeKeySpecifier
      | (() => undefined | BookmarkEdgeKeySpecifier)
    fields?: BookmarkEdgeFieldPolicy
  }
  BookmarksConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | BookmarksConnectionKeySpecifier
      | (() => undefined | BookmarksConnectionKeySpecifier)
    fields?: BookmarksConnectionFieldPolicy
  }
  Comment?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CommentKeySpecifier
      | (() => undefined | CommentKeySpecifier)
    fields?: CommentFieldPolicy
  }
  Hit?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | HitKeySpecifier | (() => undefined | HitKeySpecifier)
    fields?: HitFieldPolicy
  }
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier)
    fields?: MutationFieldPolicy
  }
  PageInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PageInfoKeySpecifier
      | (() => undefined | PageInfoKeySpecifier)
    fields?: PageInfoFieldPolicy
  }
  Post?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier)
    fields?: PostFieldPolicy
  }
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier)
    fields?: QueryFieldPolicy
  }
  Question?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QuestionKeySpecifier
      | (() => undefined | QuestionKeySpecifier)
    fields?: QuestionFieldPolicy
  }
  QuestionEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QuestionEdgeKeySpecifier
      | (() => undefined | QuestionEdgeKeySpecifier)
    fields?: QuestionEdgeFieldPolicy
  }
  QuestionsConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QuestionsConnectionKeySpecifier
      | (() => undefined | QuestionsConnectionKeySpecifier)
    fields?: QuestionsConnectionFieldPolicy
  }
  Stack?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | StackKeySpecifier
      | (() => undefined | StackKeySpecifier)
    fields?: StackFieldPolicy
  }
  StackEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | StackEdgeKeySpecifier
      | (() => undefined | StackEdgeKeySpecifier)
    fields?: StackEdgeFieldPolicy
  }
  StacksConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | StacksConnectionKeySpecifier
      | (() => undefined | StacksConnectionKeySpecifier)
    fields?: StacksConnectionFieldPolicy
  }
  Tag?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier)
    fields?: TagFieldPolicy
  }
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier)
    fields?: UserFieldPolicy
  }
}
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies
export const ListAllOperations = {
  Query: {
    getBlogs: 'getBlogs',
    getBlog: 'getBlog',
    getBookmarks: 'getBookmarks',
    getBookmark: 'getBookmark',
    getComments: 'getComments',
    getPosts: 'getPosts',
    getPost: 'getPost',
    getQuestions: 'getQuestions',
    getQuestion: 'getQuestion',
    getStacks: 'getStacks',
    getStack: 'getStack',
    getTags: 'getTags',
    getUser: 'getUser',
    viewer: 'viewer',
    getViewerWithSettings: 'getViewerWithSettings',
  },
  Mutation: {
    editBookmark: 'editBookmark',
    deleteBookmark: 'deleteBookmark',
    addBookmark: 'addBookmark',
    addComment: 'addComment',
    editComment: 'editComment',
    deleteComment: 'deleteComment',
    editPost: 'editPost',
    deletePost: 'deletePost',
    addPost: 'addPost',
    editQuestion: 'editQuestion',
    deleteQuestion: 'deleteQuestion',
    addQuestion: 'addQuestion',
    toggleReaction: 'toggleReaction',
    editStack: 'editStack',
    deleteStack: 'deleteStack',
    addStack: 'addStack',
    toggleStackUser: 'toggleStackUser',
    deleteUser: 'deleteUser',
    editUser: 'editUser',
  },
  Fragment: {
    BlogCore: 'BlogCore',
    BlogListItem: 'BlogListItem',
    BlogDetail: 'BlogDetail',
    BookmarkCore: 'BookmarkCore',
    BookmarkListItem: 'BookmarkListItem',
    BookmarkDetail: 'BookmarkDetail',
    BookmarksConnection: 'BookmarksConnection',
    CommentInfo: 'CommentInfo',
    PostCore: 'PostCore',
    PostListItem: 'PostListItem',
    PostDetail: 'PostDetail',
    QuestionCore: 'QuestionCore',
    QuestionListItem: 'QuestionListItem',
    QuestionDetail: 'QuestionDetail',
    QuestionsConnection: 'QuestionsConnection',
    StackCore: 'StackCore',
    StackListItem: 'StackListItem',
    StackDetail: 'StackDetail',
    StacksConnection: 'StacksConnection',
    UserInfo: 'UserInfo',
    UserSettings: 'UserSettings',
  },
}
