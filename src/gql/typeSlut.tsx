import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AddBookmarkInput = {
  tag: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type AddPostInput = {
  excerpt?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type AddQuestionInput = {
  audioUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  waveform?: InputMaybe<Scalars['JSON']['input']>;
};

export type AddStackInput = {
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  tag?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type BConnection = {
  __typename?: 'BConnection';
  edges: Array<Maybe<BookmarkEdge>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Blog = {
  __typename?: 'Blog';
  count?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  reactionCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>;
};

export type Bookmark = {
  __typename?: 'Bookmark';
  count?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  faviconUrl?: Maybe<Scalars['String']['output']>;
  host: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  reactionCount?: Maybe<Scalars['Int']['output']>;
  tags: Array<Maybe<Tag>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
  url?: Maybe<Scalars['String']['output']>;
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>;
};

export type BookmarkEdge = {
  __typename?: 'BookmarkEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Bookmark>;
};

export type BookmarkFilter = {
  host?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Case = {
  __typename?: 'Case';
  count?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  reactionCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  replies?: Maybe<Array<Maybe<Comment>>>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  viewerCanDelete?: Maybe<Scalars['Boolean']['output']>;
  viewerCanEdit?: Maybe<Scalars['Boolean']['output']>;
};

export enum CommentType {
  Blog = 'BLOG',
  Bookmark = 'BOOKMARK',
  Case = 'CASE',
  Event = 'EVENT',
  Post = 'POST',
  Question = 'QUESTION',
  Stack = 'STACK'
}

export type EditBookmarkInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  faviconUrl?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type EditPostInput = {
  excerpt?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditQuestionInput = {
  audioUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  waveform?: InputMaybe<Scalars['JSON']['input']>;
};

export type EditStackInput = {
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  tag?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type EditUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Event = {
  __typename?: 'Event';
  count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  reactionCount?: Maybe<Scalars['Int']['output']>;
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBookmark?: Maybe<Bookmark>;
  addComment?: Maybe<Comment>;
  addPost?: Maybe<Post>;
  addQuestion?: Maybe<Question>;
  addStack?: Maybe<Stack>;
  addView?: Maybe<Viewable>;
  deleteBookmark?: Maybe<Scalars['Boolean']['output']>;
  deleteComment?: Maybe<Scalars['Boolean']['output']>;
  deletePost?: Maybe<Scalars['Boolean']['output']>;
  deleteQuestion?: Maybe<Scalars['Boolean']['output']>;
  deleteStack?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  editBookmark?: Maybe<Bookmark>;
  editComment?: Maybe<Comment>;
  editPost?: Maybe<Post>;
  editQuestion?: Maybe<Question>;
  editStack?: Maybe<Stack>;
  editUser?: Maybe<User>;
  toggleReaction?: Maybe<Reactable>;
  toggleStackUser?: Maybe<Stack>;
};


export type MutationAddBookmarkArgs = {
  data: AddBookmarkInput;
};


export type MutationAddCommentArgs = {
  parentId?: InputMaybe<Scalars['String']['input']>;
  refId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  type: CommentType;
};


export type MutationAddPostArgs = {
  data: AddPostInput;
};


export type MutationAddQuestionArgs = {
  data: AddQuestionInput;
};


export type MutationAddStackArgs = {
  data: AddStackInput;
};


export type MutationAddViewArgs = {
  refId: Scalars['ID']['input'];
  type: ViewType;
};


export type MutationDeleteBookmarkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStackArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditBookmarkArgs = {
  data: EditBookmarkInput;
  id: Scalars['ID']['input'];
};


export type MutationEditCommentArgs = {
  id: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditPostArgs = {
  data: EditPostInput;
  id: Scalars['ID']['input'];
};


export type MutationEditQuestionArgs = {
  data: EditQuestionInput;
  id: Scalars['ID']['input'];
};


export type MutationEditStackArgs = {
  data: EditStackInput;
  id: Scalars['ID']['input'];
};


export type MutationEditUserArgs = {
  data?: InputMaybe<EditUserInput>;
};


export type MutationToggleReactionArgs = {
  refId: Scalars['ID']['input'];
  type: ReactionType;
};


export type MutationToggleStackUserArgs = {
  id: Scalars['ID']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  featureImage?: Maybe<Scalars['String']['output']>;
  hitRate?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['Date']['output']>;
  reactionCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>;
};

export type PostFilter = {
  published?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QConnection = {
  __typename?: 'QConnection';
  edges: Array<Maybe<QuestionEdge>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Query = {
  __typename?: 'Query';
  blog?: Maybe<Blog>;
  blogs: Array<Maybe<Blog>>;
  bookmark?: Maybe<Bookmark>;
  bookmarks: BConnection;
  case?: Maybe<Case>;
  cases: Array<Maybe<Case>>;
  comment?: Maybe<Comment>;
  comments: Array<Maybe<Comment>>;
  event?: Maybe<Event>;
  events: Array<Maybe<Event>>;
  post?: Maybe<Post>;
  posts: Array<Maybe<Post>>;
  question?: Maybe<Question>;
  questions: QConnection;
  stack?: Maybe<Stack>;
  stacks: SConnection;
  tags: Array<Maybe<Tag>>;
  user?: Maybe<User>;
  viewer?: Maybe<User>;
};


export type QueryBlogArgs = {
  slug: Scalars['String']['input'];
};


export type QueryBookmarkArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookmarksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BookmarkFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCaseArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentsArgs = {
  refId: Scalars['ID']['input'];
  type: CommentType;
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostArgs = {
  slug: Scalars['String']['input'];
};


export type QueryPostsArgs = {
  filter?: InputMaybe<PostFilter>;
};


export type QueryQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQuestionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<QuestionFilter2>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStackArgs = {
  slug: Scalars['String']['input'];
};


export type QueryStacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export type Question = {
  __typename?: 'Question';
  audioUrl?: Maybe<Scalars['String']['output']>;
  author?: Maybe<User>;
  count?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  playCount?: Maybe<Scalars['Int']['output']>;
  reactionCount?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<QuestionStatus>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  viewerCanComment?: Maybe<Scalars['Boolean']['output']>;
  viewerCanEdit?: Maybe<Scalars['Boolean']['output']>;
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>;
  waveform?: Maybe<Scalars['JSON']['output']>;
};

export type QuestionEdge = {
  __typename?: 'QuestionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Question>;
};

export type QuestionFilter = {
  status?: InputMaybe<QuestionStatus>;
};

export type QuestionFilter2 = {
  answered?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum QuestionStatus {
  Answered = 'ANSWERED',
  Pending = 'PENDING'
}

export type Reactable = Blog | Bookmark | Case | Event | Post | Question | Stack;

export enum ReactionType {
  Blog = 'BLOG',
  Bookmark = 'BOOKMARK',
  Case = 'CASE',
  Event = 'EVENT',
  Post = 'POST',
  Question = 'QUESTION',
  Stack = 'STACK'
}

export type SConnection = {
  __typename?: 'SConnection';
  edges: Array<Maybe<StackEdge>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Stack = {
  __typename?: 'Stack';
  count?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  reactionCount?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  tags: Array<Maybe<Tag>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url: Scalars['String']['output'];
  usedBy: Array<Maybe<User>>;
  usedByViewer?: Maybe<Scalars['Boolean']['output']>;
  viewerHasReacted?: Maybe<Scalars['Boolean']['output']>;
};

export type StackEdge = {
  __typename?: 'StackEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Stack>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  isViewer?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pendingEmail?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  username?: Maybe<Scalars['String']['output']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Blocked = 'BLOCKED',
  User = 'USER'
}

export enum ViewType {
  Blog = 'BLOG',
  Bookmark = 'BOOKMARK',
  Case = 'CASE',
  Event = 'EVENT',
  Post = 'POST',
  Question = 'QUESTION',
  Stack = 'STACK'
}

export type Viewable = Blog | Bookmark | Case | Event | Post | Question | Stack;

export type BookmarkDetailFragment = (
  { reactionCount?: number | null, viewerHasReacted?: boolean | null, id: string, url?: string | null, host: string, title?: string | null, description?: string | null, faviconUrl?: string | null, count?: number | null, tags: Array<(
    { name: string }
    & { __typename?: 'Tag' }
  ) | null> }
  & { __typename: 'Bookmark' }
);


export type BookmarkDetailFragmentVariables = Exact<{ [key: string]: never; }>;

export type BookmarkCoreFragment = (
  { id: string, url?: string | null, host: string, title?: string | null, description?: string | null, faviconUrl?: string | null, count?: number | null }
  & { __typename: 'Bookmark' }
);


export type BookmarkCoreFragmentVariables = Exact<{ [key: string]: never; }>;

export type CommentInfoFragment = (
  { id: string, parentId?: string | null, createdAt: any, updatedAt?: any | null, text?: string | null, viewerCanEdit?: boolean | null, viewerCanDelete?: boolean | null, author: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) }
  & { __typename: 'Comment' }
);


export type CommentInfoFragmentVariables = Exact<{ [key: string]: never; }>;

export type UserInfoFragment = (
  { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
  & { __typename: 'User' }
);


export type UserInfoFragmentVariables = Exact<{ [key: string]: never; }>;

export type PostDetailFragment = (
  { text?: string | null, featureImage?: string | null, reactionCount?: number | null, hitRate?: number | null, viewerHasReacted?: boolean | null, id: string, publishedAt?: any | null, title?: string | null, slug?: string | null, excerpt?: string | null }
  & { __typename: 'Post' }
);


export type PostDetailFragmentVariables = Exact<{ [key: string]: never; }>;

export type PostCoreFragment = (
  { id: string, publishedAt?: any | null, title?: string | null, slug?: string | null, excerpt?: string | null }
  & { __typename: 'Post' }
);


export type PostCoreFragmentVariables = Exact<{ [key: string]: never; }>;

export type QuestionDetailFragment = (
  { description?: string | null, status?: QuestionStatus | null, viewerCanEdit?: boolean | null, viewerCanComment?: boolean | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, id: string, title: string, audioUrl?: string | null, waveform?: any | null, count?: number | null, createdAt: any, author?: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) | null }
  & { __typename: 'Question' }
);


export type QuestionDetailFragmentVariables = Exact<{ [key: string]: never; }>;

export type QuestionCoreFragment = (
  { id: string, title: string, audioUrl?: string | null, waveform?: any | null, count?: number | null, createdAt: any, author?: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) | null }
  & { __typename: 'Question' }
);


export type QuestionCoreFragmentVariables = Exact<{ [key: string]: never; }>;

export type StackDetailFragment = (
  { createdAt: any, description?: string | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, usedByViewer?: boolean | null, id: string, name: string, image?: string | null, url: string, slug: string, count?: number | null, usedBy: Array<(
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) | null>, tags: Array<(
    { name: string }
    & { __typename?: 'Tag' }
  ) | null> }
  & { __typename: 'Stack' }
);


export type StackDetailFragmentVariables = Exact<{ [key: string]: never; }>;

export type StackCoreFragment = (
  { id: string, name: string, image?: string | null, url: string, slug: string, count?: number | null }
  & { __typename: 'Stack' }
);


export type StackCoreFragmentVariables = Exact<{ [key: string]: never; }>;

export type BlogListItemFragment = (
  { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Blog' }
);


export type BlogListItemFragmentVariables = Exact<{ [key: string]: never; }>;

export type BlogCoreFragment = (
  { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Blog' }
);


export type BlogCoreFragmentVariables = Exact<{ [key: string]: never; }>;

export type BlogDetailFragment = (
  { reactionCount?: number | null, viewerHasReacted?: boolean | null, id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Blog' }
);


export type BlogDetailFragmentVariables = Exact<{ [key: string]: never; }>;

export type BookmarksConnectionFragment = (
  { pageInfo?: (
    { hasNextPage?: boolean | null, totalCount?: number | null, endCursor?: string | null }
    & { __typename?: 'PageInfo' }
  ) | null, edges: Array<(
    { cursor?: string | null, node?: (
      { id: string, url?: string | null, host: string, title?: string | null, description?: string | null, faviconUrl?: string | null, count?: number | null }
      & { __typename: 'Bookmark' }
    ) | null }
    & { __typename?: 'BookmarkEdge' }
  ) | null> }
  & { __typename?: 'BConnection' }
);


export type BookmarksConnectionFragmentVariables = Exact<{ [key: string]: never; }>;

export type BookmarkListItemFragment = (
  { id: string, url?: string | null, host: string, title?: string | null, description?: string | null, faviconUrl?: string | null, count?: number | null }
  & { __typename: 'Bookmark' }
);


export type BookmarkListItemFragmentVariables = Exact<{ [key: string]: never; }>;

export type CaseListItemFragment = (
  { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Case' }
);


export type CaseListItemFragmentVariables = Exact<{ [key: string]: never; }>;

export type CaseCoreFragment = (
  { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Case' }
);


export type CaseCoreFragmentVariables = Exact<{ [key: string]: never; }>;

export type CaseDetailFragment = (
  { reactionCount?: number | null, viewerHasReacted?: boolean | null, id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Case' }
);


export type CaseDetailFragmentVariables = Exact<{ [key: string]: never; }>;

export type PostListItemFragment = (
  { id: string, publishedAt?: any | null, title?: string | null, slug?: string | null, excerpt?: string | null }
  & { __typename: 'Post' }
);


export type PostListItemFragmentVariables = Exact<{ [key: string]: never; }>;

export type QuestionsConnectionFragment = (
  { pageInfo?: (
    { hasNextPage?: boolean | null, totalCount?: number | null, endCursor?: string | null }
    & { __typename?: 'PageInfo' }
  ) | null, edges: Array<(
    { cursor?: string | null, node?: (
      { id: string, title: string, audioUrl?: string | null, waveform?: any | null, count?: number | null, createdAt: any, author?: (
        { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
        & { __typename: 'User' }
      ) | null }
      & { __typename: 'Question' }
    ) | null }
    & { __typename?: 'QuestionEdge' }
  ) | null> }
  & { __typename?: 'QConnection' }
);


export type QuestionsConnectionFragmentVariables = Exact<{ [key: string]: never; }>;

export type QuestionListItemFragment = (
  { id: string, title: string, audioUrl?: string | null, waveform?: any | null, count?: number | null, createdAt: any, author?: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) | null }
  & { __typename: 'Question' }
);


export type QuestionListItemFragmentVariables = Exact<{ [key: string]: never; }>;

export type StacksConnectionFragment = (
  { pageInfo?: (
    { hasNextPage?: boolean | null, totalCount?: number | null, endCursor?: string | null }
    & { __typename?: 'PageInfo' }
  ) | null, edges: Array<(
    { cursor?: string | null, node?: (
      { id: string, name: string, image?: string | null, url: string, slug: string, count?: number | null }
      & { __typename: 'Stack' }
    ) | null }
    & { __typename?: 'StackEdge' }
  ) | null> }
  & { __typename?: 'SConnection' }
);


export type StacksConnectionFragmentVariables = Exact<{ [key: string]: never; }>;

export type StackListItemFragment = (
  { id: string, name: string, image?: string | null, url: string, slug: string, count?: number | null }
  & { __typename: 'Stack' }
);


export type StackListItemFragmentVariables = Exact<{ [key: string]: never; }>;

export type UserSettingsFragment = (
  { email?: string | null, pendingEmail?: string | null }
  & { __typename?: 'User' }
);


export type UserSettingsFragmentVariables = Exact<{ [key: string]: never; }>;

export type EditBookmarkMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: EditBookmarkInput;
}>;


export type EditBookmarkMutation = (
  { editBookmark?: (
    { id: string, url?: string | null, host: string, title?: string | null, description?: string | null, faviconUrl?: string | null, count?: number | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, tags: Array<(
      { name: string }
      & { __typename?: 'Tag' }
    ) | null> }
    & { __typename: 'Bookmark' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type DeleteBookmarkMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteBookmarkMutation = (
  { deleteBookmark?: boolean | null }
  & { __typename?: 'Mutation' }
);

export type AddBookmarkMutationVariables = Exact<{
  data: AddBookmarkInput;
}>;


export type AddBookmarkMutation = (
  { addBookmark?: (
    { id: string, url?: string | null, host: string, title?: string | null, description?: string | null, faviconUrl?: string | null, count?: number | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, tags: Array<(
      { name: string }
      & { __typename?: 'Tag' }
    ) | null> }
    & { __typename: 'Bookmark' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type AddCommentMutationVariables = Exact<{
  refId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  type: CommentType;
  text: Scalars['String']['input'];
}>;


export type AddCommentMutation = (
  { addComment?: (
    { id: string, parentId?: string | null, createdAt: any, updatedAt?: any | null, text?: string | null, viewerCanEdit?: boolean | null, viewerCanDelete?: boolean | null, author: (
      { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
      & { __typename: 'User' }
    ) }
    & { __typename: 'Comment' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type EditCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  text: Scalars['String']['input'];
}>;


export type EditCommentMutation = (
  { editComment?: (
    { id: string, parentId?: string | null, createdAt: any, updatedAt?: any | null, text?: string | null, viewerCanEdit?: boolean | null, viewerCanDelete?: boolean | null, author: (
      { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
      & { __typename: 'User' }
    ) }
    & { __typename: 'Comment' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCommentMutation = (
  { deleteComment?: boolean | null }
  & { __typename?: 'Mutation' }
);

export type EditPostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: EditPostInput;
}>;


export type EditPostMutation = (
  { editPost?: (
    { id: string, publishedAt?: any | null, title?: string | null, slug?: string | null, excerpt?: string | null, text?: string | null, featureImage?: string | null, reactionCount?: number | null, hitRate?: number | null, viewerHasReacted?: boolean | null }
    & { __typename: 'Post' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePostMutation = (
  { deletePost?: boolean | null }
  & { __typename?: 'Mutation' }
);

export type AddPostMutationVariables = Exact<{
  data: AddPostInput;
}>;


export type AddPostMutation = (
  { addPost?: (
    { id: string, publishedAt?: any | null, title?: string | null, slug?: string | null, excerpt?: string | null, text?: string | null, featureImage?: string | null, reactionCount?: number | null, hitRate?: number | null, viewerHasReacted?: boolean | null }
    & { __typename: 'Post' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type EditQuestionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: EditQuestionInput;
}>;


export type EditQuestionMutation = (
  { editQuestion?: (
    { id: string, title: string, audioUrl?: string | null, waveform?: any | null, count?: number | null, createdAt: any, description?: string | null, status?: QuestionStatus | null, viewerCanEdit?: boolean | null, viewerCanComment?: boolean | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, author?: (
      { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
      & { __typename: 'User' }
    ) | null }
    & { __typename: 'Question' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type DeleteQuestionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteQuestionMutation = (
  { deleteQuestion?: boolean | null }
  & { __typename?: 'Mutation' }
);

export type AddQuestionMutationVariables = Exact<{
  data: AddQuestionInput;
}>;


export type AddQuestionMutation = (
  { addQuestion?: (
    { id: string, title: string, audioUrl?: string | null, waveform?: any | null, count?: number | null, createdAt: any, description?: string | null, status?: QuestionStatus | null, viewerCanEdit?: boolean | null, viewerCanComment?: boolean | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, author?: (
      { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
      & { __typename: 'User' }
    ) | null }
    & { __typename: 'Question' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type ToggleReactionMutationVariables = Exact<{
  refId: Scalars['ID']['input'];
  type: ReactionType;
}>;


export type ToggleReactionMutation = (
  { toggleReaction?: (
    { id: string, reactionCount?: number | null, viewerHasReacted?: boolean | null }
    & { __typename?: 'Blog' | 'Case' | 'Event' | 'Question' | 'Stack' }
  ) | (
    { id: string, url?: string | null, reactionCount?: number | null, viewerHasReacted?: boolean | null }
    & { __typename?: 'Bookmark' }
  ) | { __typename?: 'Post' } | null }
  & { __typename?: 'Mutation' }
);

export type EditStackMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: EditStackInput;
}>;


export type EditStackMutation = (
  { editStack?: (
    { id: string, name: string, image?: string | null, url: string, slug: string, count?: number | null, createdAt: any, description?: string | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, usedByViewer?: boolean | null, usedBy: Array<(
      { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
      & { __typename: 'User' }
    ) | null>, tags: Array<(
      { name: string }
      & { __typename?: 'Tag' }
    ) | null> }
    & { __typename: 'Stack' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type DeleteStackMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteStackMutation = (
  { deleteStack?: boolean | null }
  & { __typename?: 'Mutation' }
);

export type AddStackMutationVariables = Exact<{
  data: AddStackInput;
}>;


export type AddStackMutation = (
  { addStack?: (
    { id: string, name: string, image?: string | null, url: string, slug: string, count?: number | null, createdAt: any, description?: string | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, usedByViewer?: boolean | null, usedBy: Array<(
      { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
      & { __typename: 'User' }
    ) | null>, tags: Array<(
      { name: string }
      & { __typename?: 'Tag' }
    ) | null> }
    & { __typename: 'Stack' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type ToggleStackUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ToggleStackUserMutation = (
  { toggleStackUser?: (
    { id: string, name: string, image?: string | null, url: string, slug: string, count?: number | null, usedBy: Array<(
      { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
      & { __typename: 'User' }
    ) | null> }
    & { __typename: 'Stack' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = (
  { deleteUser?: boolean | null }
  & { __typename?: 'Mutation' }
);

export type EditUserMutationVariables = Exact<{
  data?: InputMaybe<EditUserInput>;
}>;


export type EditUserMutation = (
  { editUser?: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) | null }
  & { __typename?: 'Mutation' }
);

export type AddViewMutationVariables = Exact<{
  refId: Scalars['ID']['input'];
  type: ViewType;
}>;


export type AddViewMutation = (
  { addView?: (
    { id: string, count?: number | null }
    & { __typename?: 'Blog' | 'Bookmark' | 'Question' | 'Stack' }
  ) | { __typename?: 'Case' | 'Event' | 'Post' } | null }
  & { __typename?: 'Mutation' }
);

export type GetBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogsQuery = (
  { blogs: Array<(
    { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
    & { __typename: 'Blog' }
  ) | null> }
  & { __typename?: 'Query' }
);

export type GetBlogQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetBlogQuery = (
  { blog?: (
    { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null, reactionCount?: number | null, viewerHasReacted?: boolean | null }
    & { __typename: 'Blog' }
  ) | null }
  & { __typename?: 'Query' }
);

export type GetBookmarksQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BookmarkFilter>;
}>;


export type GetBookmarksQuery = (
  { bookmarks: (
    { pageInfo?: (
      { hasNextPage?: boolean | null, totalCount?: number | null, endCursor?: string | null }
      & { __typename?: 'PageInfo' }
    ) | null, edges: Array<(
      { cursor?: string | null, node?: (
        { id: string, url?: string | null, host: string, title?: string | null, description?: string | null, faviconUrl?: string | null, count?: number | null }
        & { __typename: 'Bookmark' }
      ) | null }
      & { __typename?: 'BookmarkEdge' }
    ) | null> }
    & { __typename?: 'BConnection' }
  ) }
  & { __typename?: 'Query' }
);

export type GetBookmarkQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetBookmarkQuery = (
  { bookmark?: (
    { id: string, url?: string | null, host: string, title?: string | null, description?: string | null, faviconUrl?: string | null, count?: number | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, tags: Array<(
      { name: string }
      & { __typename?: 'Tag' }
    ) | null> }
    & { __typename: 'Bookmark' }
  ) | null }
  & { __typename?: 'Query' }
);

export type GetCasesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCasesQuery = (
  { cases: Array<(
    { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
    & { __typename: 'Case' }
  ) | null> }
  & { __typename?: 'Query' }
);

export type GetCaseQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCaseQuery = (
  { case?: (
    { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null, reactionCount?: number | null, viewerHasReacted?: boolean | null }
    & { __typename: 'Case' }
  ) | null }
  & { __typename?: 'Query' }
);

export type GetCommentsQueryVariables = Exact<{
  refId: Scalars['ID']['input'];
  type: CommentType;
}>;


export type GetCommentsQuery = (
  { comments: Array<(
    { id: string, parentId?: string | null, createdAt: any, updatedAt?: any | null, text?: string | null, viewerCanEdit?: boolean | null, viewerCanDelete?: boolean | null, author: (
      { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
      & { __typename: 'User' }
    ) }
    & { __typename: 'Comment' }
  ) | null> }
  & { __typename?: 'Query' }
);

export type GetPostsQueryVariables = Exact<{
  filter?: InputMaybe<PostFilter>;
}>;


export type GetPostsQuery = (
  { posts: Array<(
    { id: string, publishedAt?: any | null, title?: string | null, slug?: string | null, excerpt?: string | null }
    & { __typename: 'Post' }
  ) | null> }
  & { __typename?: 'Query' }
);

export type GetPostQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPostQuery = (
  { post?: (
    { id: string, publishedAt?: any | null, title?: string | null, slug?: string | null, excerpt?: string | null, text?: string | null, featureImage?: string | null, reactionCount?: number | null, hitRate?: number | null, viewerHasReacted?: boolean | null }
    & { __typename: 'Post' }
  ) | null }
  & { __typename?: 'Query' }
);

export type GetQuestionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<QuestionFilter2>;
}>;


export type GetQuestionsQuery = (
  { questions: (
    { pageInfo?: (
      { hasNextPage?: boolean | null, totalCount?: number | null, endCursor?: string | null }
      & { __typename?: 'PageInfo' }
    ) | null, edges: Array<(
      { cursor?: string | null, node?: (
        { id: string, title: string, audioUrl?: string | null, waveform?: any | null, count?: number | null, createdAt: any, author?: (
          { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
          & { __typename: 'User' }
        ) | null }
        & { __typename: 'Question' }
      ) | null }
      & { __typename?: 'QuestionEdge' }
    ) | null> }
    & { __typename?: 'QConnection' }
  ) }
  & { __typename?: 'Query' }
);

export type GetQuestionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetQuestionQuery = (
  { question?: (
    { id: string, title: string, audioUrl?: string | null, waveform?: any | null, count?: number | null, createdAt: any, description?: string | null, status?: QuestionStatus | null, viewerCanEdit?: boolean | null, viewerCanComment?: boolean | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, author?: (
      { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
      & { __typename: 'User' }
    ) | null }
    & { __typename: 'Question' }
  ) | null }
  & { __typename?: 'Query' }
);

export type GetStacksQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetStacksQuery = (
  { stacks: (
    { pageInfo?: (
      { hasNextPage?: boolean | null, totalCount?: number | null, endCursor?: string | null }
      & { __typename?: 'PageInfo' }
    ) | null, edges: Array<(
      { cursor?: string | null, node?: (
        { id: string, name: string, image?: string | null, url: string, slug: string, count?: number | null }
        & { __typename: 'Stack' }
      ) | null }
      & { __typename?: 'StackEdge' }
    ) | null> }
    & { __typename?: 'SConnection' }
  ) }
  & { __typename?: 'Query' }
);

export type GetStackQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetStackQuery = (
  { stack?: (
    { id: string, name: string, image?: string | null, url: string, slug: string, count?: number | null, createdAt: any, description?: string | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, usedByViewer?: boolean | null, usedBy: Array<(
      { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
      & { __typename: 'User' }
    ) | null>, tags: Array<(
      { name: string }
      & { __typename?: 'Tag' }
    ) | null> }
    & { __typename: 'Stack' }
  ) | null }
  & { __typename?: 'Query' }
);

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = (
  { tags: Array<(
    { name: string }
    & { __typename?: 'Tag' }
  ) | null> }
  & { __typename?: 'Query' }
);

export type GetUserQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type GetUserQuery = (
  { user?: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) | null }
  & { __typename?: 'Query' }
);

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = (
  { viewer?: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) | null }
  & { __typename?: 'Query' }
);

export type GetViewerWithSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetViewerWithSettingsQuery = (
  { viewer?: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null, email?: string | null, pendingEmail?: string | null }
    & { __typename: 'User' }
  ) | null }
  & { __typename?: 'Query' }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  Reactable: ( Blog ) | ( Bookmark ) | ( Case ) | ( Event ) | ( Post ) | ( Question ) | ( Stack );
  Viewable: ( Blog ) | ( Bookmark ) | ( Case ) | ( Event ) | ( Post ) | ( Question ) | ( Stack );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddBookmarkInput: AddBookmarkInput;
  AddPostInput: AddPostInput;
  AddQuestionInput: AddQuestionInput;
  AddStackInput: AddStackInput;
  BConnection: ResolverTypeWrapper<BConnection>;
  Blog: ResolverTypeWrapper<Blog>;
  Bookmark: ResolverTypeWrapper<Bookmark>;
  BookmarkEdge: ResolverTypeWrapper<BookmarkEdge>;
  BookmarkFilter: BookmarkFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CacheControlScope: CacheControlScope;
  Case: ResolverTypeWrapper<Case>;
  Comment: ResolverTypeWrapper<Comment>;
  CommentType: CommentType;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  EditBookmarkInput: EditBookmarkInput;
  EditPostInput: EditPostInput;
  EditQuestionInput: EditQuestionInput;
  EditStackInput: EditStackInput;
  EditUserInput: EditUserInput;
  Event: ResolverTypeWrapper<Event>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Post: ResolverTypeWrapper<Post>;
  PostFilter: PostFilter;
  QConnection: ResolverTypeWrapper<QConnection>;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<Question>;
  QuestionEdge: ResolverTypeWrapper<QuestionEdge>;
  QuestionFilter: QuestionFilter;
  QuestionFilter2: QuestionFilter2;
  QuestionStatus: QuestionStatus;
  Reactable: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Reactable']>;
  ReactionType: ReactionType;
  SConnection: ResolverTypeWrapper<SConnection>;
  Stack: ResolverTypeWrapper<Stack>;
  StackEdge: ResolverTypeWrapper<StackEdge>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tag: ResolverTypeWrapper<Tag>;
  User: ResolverTypeWrapper<User>;
  UserRole: UserRole;
  ViewType: ViewType;
  Viewable: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Viewable']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddBookmarkInput: AddBookmarkInput;
  AddPostInput: AddPostInput;
  AddQuestionInput: AddQuestionInput;
  AddStackInput: AddStackInput;
  BConnection: BConnection;
  Blog: Blog;
  Bookmark: Bookmark;
  BookmarkEdge: BookmarkEdge;
  BookmarkFilter: BookmarkFilter;
  Boolean: Scalars['Boolean']['output'];
  Case: Case;
  Comment: Comment;
  Date: Scalars['Date']['output'];
  EditBookmarkInput: EditBookmarkInput;
  EditPostInput: EditPostInput;
  EditQuestionInput: EditQuestionInput;
  EditStackInput: EditStackInput;
  EditUserInput: EditUserInput;
  Event: Event;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  Mutation: {};
  PageInfo: PageInfo;
  Post: Post;
  PostFilter: PostFilter;
  QConnection: QConnection;
  Query: {};
  Question: Question;
  QuestionEdge: QuestionEdge;
  QuestionFilter: QuestionFilter;
  QuestionFilter2: QuestionFilter2;
  Reactable: ResolversUnionTypes<ResolversParentTypes>['Reactable'];
  SConnection: SConnection;
  Stack: Stack;
  StackEdge: StackEdge;
  String: Scalars['String']['output'];
  Tag: Tag;
  User: User;
  Viewable: ResolversUnionTypes<ResolversParentTypes>['Viewable'];
};

export type CacheControlDirectiveArgs = {
  inheritMaxAge?: Maybe<Scalars['Boolean']['input']>;
  maxAge?: Maybe<Scalars['Int']['input']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BConnection'] = ResolversParentTypes['BConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['BookmarkEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reactionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  viewerHasReacted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bookmark'] = ResolversParentTypes['Bookmark']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  faviconUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  host?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reactionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  viewerHasReacted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookmarkEdge'] = ResolversParentTypes['BookmarkEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Bookmark']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Case'] = ResolversParentTypes['Case']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reactionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  viewerHasReacted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  viewerCanDelete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  viewerCanEdit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reactionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  viewerHasReacted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBookmark?: Resolver<Maybe<ResolversTypes['Bookmark']>, ParentType, ContextType, RequireFields<MutationAddBookmarkArgs, 'data'>>;
  addComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationAddCommentArgs, 'refId' | 'text' | 'type'>>;
  addPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationAddPostArgs, 'data'>>;
  addQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<MutationAddQuestionArgs, 'data'>>;
  addStack?: Resolver<Maybe<ResolversTypes['Stack']>, ParentType, ContextType, RequireFields<MutationAddStackArgs, 'data'>>;
  addView?: Resolver<Maybe<ResolversTypes['Viewable']>, ParentType, ContextType, RequireFields<MutationAddViewArgs, 'refId' | 'type'>>;
  deleteBookmark?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteBookmarkArgs, 'id'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  deletePost?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>;
  deleteQuestion?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteQuestionArgs, 'id'>>;
  deleteStack?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteStackArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  editBookmark?: Resolver<Maybe<ResolversTypes['Bookmark']>, ParentType, ContextType, RequireFields<MutationEditBookmarkArgs, 'data' | 'id'>>;
  editComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationEditCommentArgs, 'id'>>;
  editPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationEditPostArgs, 'data' | 'id'>>;
  editQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<MutationEditQuestionArgs, 'data' | 'id'>>;
  editStack?: Resolver<Maybe<ResolversTypes['Stack']>, ParentType, ContextType, RequireFields<MutationEditStackArgs, 'data' | 'id'>>;
  editUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationEditUserArgs>>;
  toggleReaction?: Resolver<Maybe<ResolversTypes['Reactable']>, ParentType, ContextType, RequireFields<MutationToggleReactionArgs, 'refId' | 'type'>>;
  toggleStackUser?: Resolver<Maybe<ResolversTypes['Stack']>, ParentType, ContextType, RequireFields<MutationToggleStackUserArgs, 'id'>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  excerpt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featureImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hitRate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  reactionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  viewerHasReacted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['QConnection'] = ResolversParentTypes['QConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['QuestionEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  blog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<QueryBlogArgs, 'slug'>>;
  blogs?: Resolver<Array<Maybe<ResolversTypes['Blog']>>, ParentType, ContextType>;
  bookmark?: Resolver<Maybe<ResolversTypes['Bookmark']>, ParentType, ContextType, RequireFields<QueryBookmarkArgs, 'id'>>;
  bookmarks?: Resolver<ResolversTypes['BConnection'], ParentType, ContextType, Partial<QueryBookmarksArgs>>;
  case?: Resolver<Maybe<ResolversTypes['Case']>, ParentType, ContextType, RequireFields<QueryCaseArgs, 'slug'>>;
  cases?: Resolver<Array<Maybe<ResolversTypes['Case']>>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryCommentArgs, 'id'>>;
  comments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType, RequireFields<QueryCommentsArgs, 'refId' | 'type'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'id'>>;
  events?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'slug'>>;
  posts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType, Partial<QueryPostsArgs>>;
  question?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<QueryQuestionArgs, 'id'>>;
  questions?: Resolver<ResolversTypes['QConnection'], ParentType, ContextType, Partial<QueryQuestionsArgs>>;
  stack?: Resolver<Maybe<ResolversTypes['Stack']>, ParentType, ContextType, RequireFields<QueryStackArgs, 'slug'>>;
  stacks?: Resolver<ResolversTypes['SConnection'], ParentType, ContextType, Partial<QueryStacksArgs>>;
  tags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'username'>>;
  viewer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = {
  audioUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  playCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reactionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['QuestionStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  viewerCanComment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  viewerCanEdit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  viewerHasReacted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  waveform?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionEdge'] = ResolversParentTypes['QuestionEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReactableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reactable'] = ResolversParentTypes['Reactable']> = {
  __resolveType: TypeResolveFn<'Blog' | 'Bookmark' | 'Case' | 'Event' | 'Post' | 'Question' | 'Stack', ParentType, ContextType>;
};

export type SConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SConnection'] = ResolversParentTypes['SConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['StackEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stack'] = ResolversParentTypes['Stack']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reactionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usedBy?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  usedByViewer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  viewerHasReacted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StackEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StackEdge'] = ResolversParentTypes['StackEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Stack']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isViewer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pendingEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UserRole']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Viewable'] = ResolversParentTypes['Viewable']> = {
  __resolveType: TypeResolveFn<'Blog' | 'Bookmark' | 'Case' | 'Event' | 'Post' | 'Question' | 'Stack', ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BConnection?: BConnectionResolvers<ContextType>;
  Blog?: BlogResolvers<ContextType>;
  Bookmark?: BookmarkResolvers<ContextType>;
  BookmarkEdge?: BookmarkEdgeResolvers<ContextType>;
  Case?: CaseResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Event?: EventResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  QConnection?: QConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  QuestionEdge?: QuestionEdgeResolvers<ContextType>;
  Reactable?: ReactableResolvers<ContextType>;
  SConnection?: SConnectionResolvers<ContextType>;
  Stack?: StackResolvers<ContextType>;
  StackEdge?: StackEdgeResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Viewable?: ViewableResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};

export const DirtyAssBlogCoreFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]} as unknown as DocumentNode;
export const DirtyAssBlogListItemFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogCore"}}]}},...DirtyAssBlogCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssBlogDetailFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogCore"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}}]}},...DirtyAssBlogCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssBookmarkCoreFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookmarkCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bookmark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"host"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"faviconUrl"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]} as unknown as DocumentNode;
export const DirtyAssBookmarkDetailFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookmarkDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bookmark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookmarkCore"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},...DirtyAssBookmarkCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssBookmarkListItemFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookmarkListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bookmark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookmarkCore"}}]}},...DirtyAssBookmarkCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssBookmarksConnectionFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookmarksConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookmarkListItem"}}]}}]}}]}},...DirtyAssBookmarkListItemFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssCaseCoreFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Case"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]} as unknown as DocumentNode;
export const DirtyAssCaseListItemFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Case"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CaseCore"}}]}},...DirtyAssCaseCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssCaseDetailFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CaseDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Case"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CaseCore"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}}]}},...DirtyAssCaseCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssUserInfoFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"isViewer"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]} as unknown as DocumentNode;
export const DirtyAssCommentInfoFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"viewerCanEdit"}},{"kind":"Field","name":{"kind":"Name","value":"viewerCanDelete"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},...DirtyAssUserInfoFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssEventCoreFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]} as unknown as DocumentNode;
export const DirtyAssEventListItemFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventCore"}}]}},...DirtyAssEventCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssEventDetailFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventCore"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}}]}},...DirtyAssEventCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssPostCoreFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}}]}}]} as unknown as DocumentNode;
export const DirtyAssPostListItemFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCore"}}]}},...DirtyAssPostCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssPostDetailFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCore"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"hitRate"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}}]}},...DirtyAssPostCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssQuestionCoreFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}},{"kind":"Field","name":{"kind":"Name","value":"waveform"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},...DirtyAssUserInfoFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssQuestionDetailFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionCore"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"viewerCanEdit"}},{"kind":"Field","name":{"kind":"Name","value":"viewerCanComment"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}}]}},...DirtyAssQuestionCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssQuestionListItemFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionCore"}}]}},...DirtyAssQuestionCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssQuestionsConnectionFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestionsConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionListItem"}}]}}]}}]}},...DirtyAssQuestionListItemFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssStackCoreFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StackCore"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stack"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]} as unknown as DocumentNode;
export const DirtyAssStackDetailFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StackDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stack"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StackCore"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}},{"kind":"Field","name":{"kind":"Name","value":"usedByViewer"}},{"kind":"Field","name":{"kind":"Name","value":"usedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},...DirtyAssStackCoreFragmentDoc.definitions,...DirtyAssUserInfoFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssStackListItemFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StackListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stack"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StackCore"}}]}},...DirtyAssStackCoreFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssStacksConnectionFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StacksConnection"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StackListItem"}}]}}]}}]}},...DirtyAssStackListItemFragmentDoc.definitions]} as unknown as DocumentNode;
export const DirtyAssUserSettingsFragmentDoc = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"pendingEmail"}}]}}]} as unknown as DocumentNode;
export const EditBookmarkDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditBookmarkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookmarkDetail"}}]}}]}},...DirtyAssBookmarkDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export type EditBookmarkMutationFn = Apollo.MutationFunction<EditBookmarkMutation, EditBookmarkMutationVariables>;
export function useEditBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<EditBookmarkMutation, EditBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditBookmarkMutation, EditBookmarkMutationVariables>(EditBookmarkDocument, options);
      }
export type EditBookmarkMutationHookResult = ReturnType<typeof useEditBookmarkMutation>;
export type EditBookmarkMutationOptions = Apollo.BaseMutationOptions<EditBookmarkMutation, EditBookmarkMutationVariables>;
export const DeleteBookmarkDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;
export type DeleteBookmarkMutationFn = Apollo.MutationFunction<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;
export function useDeleteBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>(DeleteBookmarkDocument, options);
      }
export type DeleteBookmarkMutationHookResult = ReturnType<typeof useDeleteBookmarkMutation>;
export type DeleteBookmarkMutationOptions = Apollo.BaseMutationOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;
export const AddBookmarkDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddBookmarkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookmarkDetail"}}]}}]}},...DirtyAssBookmarkDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export type AddBookmarkMutationFn = Apollo.MutationFunction<AddBookmarkMutation, AddBookmarkMutationVariables>;
export function useAddBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<AddBookmarkMutation, AddBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBookmarkMutation, AddBookmarkMutationVariables>(AddBookmarkDocument, options);
      }
export type AddBookmarkMutationHookResult = ReturnType<typeof useAddBookmarkMutation>;
export type AddBookmarkMutationOptions = Apollo.BaseMutationOptions<AddBookmarkMutation, AddBookmarkMutationVariables>;
export const AddCommentDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refId"}}},{"kind":"Argument","name":{"kind":"Name","value":"parentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentInfo"}}]}}]}},...DirtyAssCommentInfoFragmentDoc.definitions]} as unknown as DocumentNode;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const EditCommentDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentInfo"}}]}}]}},...DirtyAssCommentInfoFragmentDoc.definitions]} as unknown as DocumentNode;
export type EditCommentMutationFn = Apollo.MutationFunction<EditCommentMutation, EditCommentMutationVariables>;
export function useEditCommentMutation(baseOptions?: Apollo.MutationHookOptions<EditCommentMutation, EditCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCommentMutation, EditCommentMutationVariables>(EditCommentDocument, options);
      }
export type EditCommentMutationHookResult = ReturnType<typeof useEditCommentMutation>;
export type EditCommentMutationOptions = Apollo.BaseMutationOptions<EditCommentMutation, EditCommentMutationVariables>;
export const DeleteCommentDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const EditPostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditPostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostDetail"}}]}}]}},...DirtyAssPostDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export type EditPostMutationFn = Apollo.MutationFunction<EditPostMutation, EditPostMutationVariables>;
export function useEditPostMutation(baseOptions?: Apollo.MutationHookOptions<EditPostMutation, EditPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPostMutation, EditPostMutationVariables>(EditPostDocument, options);
      }
export type EditPostMutationHookResult = ReturnType<typeof useEditPostMutation>;
export type EditPostMutationOptions = Apollo.BaseMutationOptions<EditPostMutation, EditPostMutationVariables>;
export const DeletePostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const AddPostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddPostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostDetail"}}]}}]}},...DirtyAssPostDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;
export function useAddPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, options);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const EditQuestionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditQuestionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionDetail"}}]}}]}},...DirtyAssQuestionDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export type EditQuestionMutationFn = Apollo.MutationFunction<EditQuestionMutation, EditQuestionMutationVariables>;
export function useEditQuestionMutation(baseOptions?: Apollo.MutationHookOptions<EditQuestionMutation, EditQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditQuestionMutation, EditQuestionMutationVariables>(EditQuestionDocument, options);
      }
export type EditQuestionMutationHookResult = ReturnType<typeof useEditQuestionMutation>;
export type EditQuestionMutationOptions = Apollo.BaseMutationOptions<EditQuestionMutation, EditQuestionMutationVariables>;
export const DeleteQuestionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;
export type DeleteQuestionMutationFn = Apollo.MutationFunction<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export function useDeleteQuestionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestionMutation, DeleteQuestionMutationVariables>(DeleteQuestionDocument, options);
      }
export type DeleteQuestionMutationHookResult = ReturnType<typeof useDeleteQuestionMutation>;
export type DeleteQuestionMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export const AddQuestionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddQuestionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionDetail"}}]}}]}},...DirtyAssQuestionDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export type AddQuestionMutationFn = Apollo.MutationFunction<AddQuestionMutation, AddQuestionMutationVariables>;
export function useAddQuestionMutation(baseOptions?: Apollo.MutationHookOptions<AddQuestionMutation, AddQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddQuestionMutation, AddQuestionMutationVariables>(AddQuestionDocument, options);
      }
export type AddQuestionMutationHookResult = ReturnType<typeof useAddQuestionMutation>;
export type AddQuestionMutationOptions = Apollo.BaseMutationOptions<AddQuestionMutation, AddQuestionMutationVariables>;
export const ToggleReactionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"toggleReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReactionType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleReaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stack"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bookmark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Case"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reactionCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerHasReacted"}}]}}]}}]}}]} as unknown as DocumentNode;
export type ToggleReactionMutationFn = Apollo.MutationFunction<ToggleReactionMutation, ToggleReactionMutationVariables>;
export function useToggleReactionMutation(baseOptions?: Apollo.MutationHookOptions<ToggleReactionMutation, ToggleReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleReactionMutation, ToggleReactionMutationVariables>(ToggleReactionDocument, options);
      }
export type ToggleReactionMutationHookResult = ReturnType<typeof useToggleReactionMutation>;
export type ToggleReactionMutationOptions = Apollo.BaseMutationOptions<ToggleReactionMutation, ToggleReactionMutationVariables>;
export const EditStackDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editStack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditStackInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editStack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StackDetail"}}]}}]}},...DirtyAssStackDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export type EditStackMutationFn = Apollo.MutationFunction<EditStackMutation, EditStackMutationVariables>;
export function useEditStackMutation(baseOptions?: Apollo.MutationHookOptions<EditStackMutation, EditStackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditStackMutation, EditStackMutationVariables>(EditStackDocument, options);
      }
export type EditStackMutationHookResult = ReturnType<typeof useEditStackMutation>;
export type EditStackMutationOptions = Apollo.BaseMutationOptions<EditStackMutation, EditStackMutationVariables>;
export const DeleteStackDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteStack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;
export type DeleteStackMutationFn = Apollo.MutationFunction<DeleteStackMutation, DeleteStackMutationVariables>;
export function useDeleteStackMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStackMutation, DeleteStackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStackMutation, DeleteStackMutationVariables>(DeleteStackDocument, options);
      }
export type DeleteStackMutationHookResult = ReturnType<typeof useDeleteStackMutation>;
export type DeleteStackMutationOptions = Apollo.BaseMutationOptions<DeleteStackMutation, DeleteStackMutationVariables>;
export const AddStackDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addStack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddStackInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addStack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StackDetail"}}]}}]}},...DirtyAssStackDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export type AddStackMutationFn = Apollo.MutationFunction<AddStackMutation, AddStackMutationVariables>;
export function useAddStackMutation(baseOptions?: Apollo.MutationHookOptions<AddStackMutation, AddStackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStackMutation, AddStackMutationVariables>(AddStackDocument, options);
      }
export type AddStackMutationHookResult = ReturnType<typeof useAddStackMutation>;
export type AddStackMutationOptions = Apollo.BaseMutationOptions<AddStackMutation, AddStackMutationVariables>;
export const ToggleStackUserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"toggleStackUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleStackUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StackCore"}},{"kind":"Field","name":{"kind":"Name","value":"usedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}}]}},...DirtyAssStackCoreFragmentDoc.definitions,...DirtyAssUserInfoFragmentDoc.definitions]} as unknown as DocumentNode;
export type ToggleStackUserMutationFn = Apollo.MutationFunction<ToggleStackUserMutation, ToggleStackUserMutationVariables>;
export function useToggleStackUserMutation(baseOptions?: Apollo.MutationHookOptions<ToggleStackUserMutation, ToggleStackUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleStackUserMutation, ToggleStackUserMutationVariables>(ToggleStackUserDocument, options);
      }
export type ToggleStackUserMutationHookResult = ReturnType<typeof useToggleStackUserMutation>;
export type ToggleStackUserMutationOptions = Apollo.BaseMutationOptions<ToggleStackUserMutation, ToggleStackUserMutationVariables>;
export const DeleteUserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"}}]}}]} as unknown as DocumentNode;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const EditUserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EditUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},...DirtyAssUserInfoFragmentDoc.definitions]} as unknown as DocumentNode;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;
export function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const AddViewDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addView"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ViewType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addView"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stack"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Bookmark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Question"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Blog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode;
export type AddViewMutationFn = Apollo.MutationFunction<AddViewMutation, AddViewMutationVariables>;
export function useAddViewMutation(baseOptions?: Apollo.MutationHookOptions<AddViewMutation, AddViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddViewMutation, AddViewMutationVariables>(AddViewDocument, options);
      }
export type AddViewMutationHookResult = ReturnType<typeof useAddViewMutation>;
export type AddViewMutationOptions = Apollo.BaseMutationOptions<AddViewMutation, AddViewMutationVariables>;
export const GetBlogsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBlogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListItem"}}]}}]}},...DirtyAssBlogListItemFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, options);
      }
export function useGetBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, options);
        }
export function useGetBlogsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, options);
        }
export type GetBlogsQueryHookResult = ReturnType<typeof useGetBlogsQuery>;
export type GetBlogsLazyQueryHookResult = ReturnType<typeof useGetBlogsLazyQuery>;
export type GetBlogsSuspenseQueryHookResult = ReturnType<typeof useGetBlogsSuspenseQuery>;
export const GetBlogDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBlog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogDetail"}}]}}]}},...DirtyAssBlogDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetBlogQuery(baseOptions: Apollo.QueryHookOptions<GetBlogQuery, GetBlogQueryVariables> & ({ variables: GetBlogQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogQuery, GetBlogQueryVariables>(GetBlogDocument, options);
      }
export function useGetBlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogQuery, GetBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogQuery, GetBlogQueryVariables>(GetBlogDocument, options);
        }
export function useGetBlogSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogQuery, GetBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogQuery, GetBlogQueryVariables>(GetBlogDocument, options);
        }
export type GetBlogQueryHookResult = ReturnType<typeof useGetBlogQuery>;
export type GetBlogLazyQueryHookResult = ReturnType<typeof useGetBlogLazyQuery>;
export type GetBlogSuspenseQueryHookResult = ReturnType<typeof useGetBlogSuspenseQuery>;
export const GetBookmarksDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBookmarks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BookmarkFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmarks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookmarksConnection"}}]}}]}},...DirtyAssBookmarksConnectionFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<GetBookmarksQuery, GetBookmarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(GetBookmarksDocument, options);
      }
export function useGetBookmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookmarksQuery, GetBookmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(GetBookmarksDocument, options);
        }
export function useGetBookmarksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBookmarksQuery, GetBookmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(GetBookmarksDocument, options);
        }
export type GetBookmarksQueryHookResult = ReturnType<typeof useGetBookmarksQuery>;
export type GetBookmarksLazyQueryHookResult = ReturnType<typeof useGetBookmarksLazyQuery>;
export type GetBookmarksSuspenseQueryHookResult = ReturnType<typeof useGetBookmarksSuspenseQuery>;
export const GetBookmarkDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookmarkDetail"}}]}}]}},...DirtyAssBookmarkDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetBookmarkQuery(baseOptions: Apollo.QueryHookOptions<GetBookmarkQuery, GetBookmarkQueryVariables> & ({ variables: GetBookmarkQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookmarkQuery, GetBookmarkQueryVariables>(GetBookmarkDocument, options);
      }
export function useGetBookmarkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookmarkQuery, GetBookmarkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookmarkQuery, GetBookmarkQueryVariables>(GetBookmarkDocument, options);
        }
export function useGetBookmarkSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBookmarkQuery, GetBookmarkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBookmarkQuery, GetBookmarkQueryVariables>(GetBookmarkDocument, options);
        }
export type GetBookmarkQueryHookResult = ReturnType<typeof useGetBookmarkQuery>;
export type GetBookmarkLazyQueryHookResult = ReturnType<typeof useGetBookmarkLazyQuery>;
export type GetBookmarkSuspenseQueryHookResult = ReturnType<typeof useGetBookmarkSuspenseQuery>;
export const GetCasesDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cases"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CaseListItem"}}]}}]}},...DirtyAssCaseListItemFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetCasesQuery(baseOptions?: Apollo.QueryHookOptions<GetCasesQuery, GetCasesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCasesQuery, GetCasesQueryVariables>(GetCasesDocument, options);
      }
export function useGetCasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCasesQuery, GetCasesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCasesQuery, GetCasesQueryVariables>(GetCasesDocument, options);
        }
export function useGetCasesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCasesQuery, GetCasesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCasesQuery, GetCasesQueryVariables>(GetCasesDocument, options);
        }
export type GetCasesQueryHookResult = ReturnType<typeof useGetCasesQuery>;
export type GetCasesLazyQueryHookResult = ReturnType<typeof useGetCasesLazyQuery>;
export type GetCasesSuspenseQueryHookResult = ReturnType<typeof useGetCasesSuspenseQuery>;
export const GetCaseDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"case"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CaseDetail"}}]}}]}},...DirtyAssCaseDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetCaseQuery(baseOptions: Apollo.QueryHookOptions<GetCaseQuery, GetCaseQueryVariables> & ({ variables: GetCaseQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCaseQuery, GetCaseQueryVariables>(GetCaseDocument, options);
      }
export function useGetCaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCaseQuery, GetCaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCaseQuery, GetCaseQueryVariables>(GetCaseDocument, options);
        }
export function useGetCaseSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCaseQuery, GetCaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCaseQuery, GetCaseQueryVariables>(GetCaseDocument, options);
        }
export type GetCaseQueryHookResult = ReturnType<typeof useGetCaseQuery>;
export type GetCaseLazyQueryHookResult = ReturnType<typeof useGetCaseLazyQuery>;
export type GetCaseSuspenseQueryHookResult = ReturnType<typeof useGetCaseSuspenseQuery>;
export const GetCommentsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentInfo"}}]}}]}},...DirtyAssCommentInfoFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables> & ({ variables: GetCommentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
export function useGetCommentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsSuspenseQueryHookResult = ReturnType<typeof useGetCommentsSuspenseQuery>;
export const GetPostsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostListItem"}}]}}]}},...DirtyAssPostListItemFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export function useGetPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsSuspenseQueryHookResult = ReturnType<typeof useGetPostsSuspenseQuery>;
export const GetPostDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostDetail"}}]}}]}},...DirtyAssPostDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables> & ({ variables: GetPostQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export function useGetPostSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostSuspenseQueryHookResult = ReturnType<typeof useGetPostSuspenseQuery>;
export const GetQuestionsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"QuestionFilter2"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionsConnection"}}]}}]}},...DirtyAssQuestionsConnectionFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
      }
export function useGetQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
        }
export function useGetQuestionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
        }
export type GetQuestionsQueryHookResult = ReturnType<typeof useGetQuestionsQuery>;
export type GetQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuestionsLazyQuery>;
export type GetQuestionsSuspenseQueryHookResult = ReturnType<typeof useGetQuestionsSuspenseQuery>;
export const GetQuestionDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestionDetail"}}]}}]}},...DirtyAssQuestionDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetQuestionQuery(baseOptions: Apollo.QueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables> & ({ variables: GetQuestionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionQuery, GetQuestionQueryVariables>(GetQuestionDocument, options);
      }
export function useGetQuestionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionQuery, GetQuestionQueryVariables>(GetQuestionDocument, options);
        }
export function useGetQuestionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetQuestionQuery, GetQuestionQueryVariables>(GetQuestionDocument, options);
        }
export type GetQuestionQueryHookResult = ReturnType<typeof useGetQuestionQuery>;
export type GetQuestionLazyQueryHookResult = ReturnType<typeof useGetQuestionLazyQuery>;
export type GetQuestionSuspenseQueryHookResult = ReturnType<typeof useGetQuestionSuspenseQuery>;
export const GetStacksDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStacks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stacks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StacksConnection"}}]}}]}},...DirtyAssStacksConnectionFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetStacksQuery(baseOptions?: Apollo.QueryHookOptions<GetStacksQuery, GetStacksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStacksQuery, GetStacksQueryVariables>(GetStacksDocument, options);
      }
export function useGetStacksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStacksQuery, GetStacksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStacksQuery, GetStacksQueryVariables>(GetStacksDocument, options);
        }
export function useGetStacksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetStacksQuery, GetStacksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStacksQuery, GetStacksQueryVariables>(GetStacksDocument, options);
        }
export type GetStacksQueryHookResult = ReturnType<typeof useGetStacksQuery>;
export type GetStacksLazyQueryHookResult = ReturnType<typeof useGetStacksLazyQuery>;
export type GetStacksSuspenseQueryHookResult = ReturnType<typeof useGetStacksSuspenseQuery>;
export const GetStackDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StackDetail"}}]}}]}},...DirtyAssStackDetailFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetStackQuery(baseOptions: Apollo.QueryHookOptions<GetStackQuery, GetStackQueryVariables> & ({ variables: GetStackQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStackQuery, GetStackQueryVariables>(GetStackDocument, options);
      }
export function useGetStackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStackQuery, GetStackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStackQuery, GetStackQueryVariables>(GetStackDocument, options);
        }
export function useGetStackSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetStackQuery, GetStackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStackQuery, GetStackQueryVariables>(GetStackDocument, options);
        }
export type GetStackQueryHookResult = ReturnType<typeof useGetStackQuery>;
export type GetStackLazyQueryHookResult = ReturnType<typeof useGetStackLazyQuery>;
export type GetStackSuspenseQueryHookResult = ReturnType<typeof useGetStackSuspenseQuery>;
export const GetTagsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export function useGetTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
      }
export function useGetTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
        }
export function useGetTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
        }
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsSuspenseQueryHookResult = ReturnType<typeof useGetTagsSuspenseQuery>;
export const GetUserDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},...DirtyAssUserInfoFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export const ViewerDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}}]}}]}},...DirtyAssUserInfoFragmentDoc.definitions]} as unknown as DocumentNode;
export function useViewerQuery(baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
      }
export function useViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
        }
export function useViewerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
        }
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerSuspenseQueryHookResult = ReturnType<typeof useViewerSuspenseQuery>;
export const GetViewerWithSettingsDocument = /*#__PURE__*/ {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getViewerWithSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSettings"}}]}}]}},...DirtyAssUserInfoFragmentDoc.definitions,...DirtyAssUserSettingsFragmentDoc.definitions]} as unknown as DocumentNode;
export function useGetViewerWithSettingsQuery(baseOptions?: Apollo.QueryHookOptions<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>(GetViewerWithSettingsDocument, options);
      }
export function useGetViewerWithSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>(GetViewerWithSettingsDocument, options);
        }
export function useGetViewerWithSettingsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>(GetViewerWithSettingsDocument, options);
        }
export type GetViewerWithSettingsQueryHookResult = ReturnType<typeof useGetViewerWithSettingsQuery>;
export type GetViewerWithSettingsLazyQueryHookResult = ReturnType<typeof useGetViewerWithSettingsLazyQuery>;
export type GetViewerWithSettingsSuspenseQueryHookResult = ReturnType<typeof useGetViewerWithSettingsSuspenseQuery>;