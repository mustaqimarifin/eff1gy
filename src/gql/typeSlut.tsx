import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  filter?: InputMaybe<QuestionFilter>;
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

export enum QuestionStatus {
  Answered = 'ANSWERED',
  Pending = 'PENDING'
}

export type Reactable = Blog | Bookmark | Case | Event | Post | Question | Stack;

export enum ReactionType {
  Blog = 'blog',
  Bookmark = 'bookmark',
  Case = 'case',
  Event = 'event',
  Post = 'post',
  Question = 'question',
  Stack = 'stack'
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
  filter?: InputMaybe<QuestionFilter>;
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

export const DirtyAssBlogCoreFragmentDoc = /*#__PURE__*/ gql`
    fragment BlogCore on Blog {
  __typename
  id
  title
  date
  slug
  count
}
    `;
export const DirtyAssBlogListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment BlogListItem on Blog {
  ...BlogCore
}
    ${DirtyAssBlogCoreFragmentDoc}`;
export const DirtyAssBlogDetailFragmentDoc = /*#__PURE__*/ gql`
    fragment BlogDetail on Blog {
  ...BlogCore
  reactionCount
  viewerHasReacted
}
    ${DirtyAssBlogCoreFragmentDoc}`;
export const DirtyAssBookmarkCoreFragmentDoc = /*#__PURE__*/ gql`
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
    `;
export const DirtyAssBookmarkDetailFragmentDoc = /*#__PURE__*/ gql`
    fragment BookmarkDetail on Bookmark {
  ...BookmarkCore
  reactionCount
  viewerHasReacted
  tags {
    name
  }
}
    ${DirtyAssBookmarkCoreFragmentDoc}`;
export const DirtyAssBookmarkListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment BookmarkListItem on Bookmark {
  ...BookmarkCore
}
    ${DirtyAssBookmarkCoreFragmentDoc}`;
export const DirtyAssBookmarksConnectionFragmentDoc = /*#__PURE__*/ gql`
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
    ${DirtyAssBookmarkListItemFragmentDoc}`;
export const DirtyAssCaseCoreFragmentDoc = /*#__PURE__*/ gql`
    fragment CaseCore on Case {
  __typename
  id
  title
  date
  slug
  count
}
    `;
export const DirtyAssCaseListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment CaseListItem on Case {
  ...CaseCore
}
    ${DirtyAssCaseCoreFragmentDoc}`;
export const DirtyAssCaseDetailFragmentDoc = /*#__PURE__*/ gql`
    fragment CaseDetail on Case {
  ...CaseCore
  reactionCount
  viewerHasReacted
}
    ${DirtyAssCaseCoreFragmentDoc}`;
export const DirtyAssUserInfoFragmentDoc = /*#__PURE__*/ gql`
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
    `;
export const DirtyAssCommentInfoFragmentDoc = /*#__PURE__*/ gql`
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
    ${DirtyAssUserInfoFragmentDoc}`;
export const DirtyAssEventCoreFragmentDoc = /*#__PURE__*/ gql`
    fragment EventCore on Event {
  __typename
  id
  count
}
    `;
export const DirtyAssEventListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment EventListItem on Event {
  ...EventCore
}
    ${DirtyAssEventCoreFragmentDoc}`;
export const DirtyAssEventDetailFragmentDoc = /*#__PURE__*/ gql`
    fragment EventDetail on Event {
  ...EventCore
  reactionCount
  viewerHasReacted
}
    ${DirtyAssEventCoreFragmentDoc}`;
export const DirtyAssPostCoreFragmentDoc = /*#__PURE__*/ gql`
    fragment PostCore on Post {
  __typename
  id
  publishedAt
  title
  slug
  excerpt
}
    `;
export const DirtyAssPostListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment PostListItem on Post {
  ...PostCore
}
    ${DirtyAssPostCoreFragmentDoc}`;
export const DirtyAssPostDetailFragmentDoc = /*#__PURE__*/ gql`
    fragment PostDetail on Post {
  ...PostCore
  text
  featureImage
  reactionCount
  hitRate
  viewerHasReacted
}
    ${DirtyAssPostCoreFragmentDoc}`;
export const DirtyAssQuestionCoreFragmentDoc = /*#__PURE__*/ gql`
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
    ${DirtyAssUserInfoFragmentDoc}`;
export const DirtyAssQuestionDetailFragmentDoc = /*#__PURE__*/ gql`
    fragment QuestionDetail on Question {
  ...QuestionCore
  description
  status
  viewerCanEdit
  viewerCanComment
  reactionCount
  viewerHasReacted
}
    ${DirtyAssQuestionCoreFragmentDoc}`;
export const DirtyAssQuestionListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment QuestionListItem on Question {
  ...QuestionCore
}
    ${DirtyAssQuestionCoreFragmentDoc}`;
export const DirtyAssQuestionsConnectionFragmentDoc = /*#__PURE__*/ gql`
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
    ${DirtyAssQuestionListItemFragmentDoc}`;
export const DirtyAssStackCoreFragmentDoc = /*#__PURE__*/ gql`
    fragment StackCore on Stack {
  __typename
  id
  name
  image
  url
  slug
  count
}
    `;
export const DirtyAssStackDetailFragmentDoc = /*#__PURE__*/ gql`
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
    ${DirtyAssStackCoreFragmentDoc}
${DirtyAssUserInfoFragmentDoc}`;
export const DirtyAssStackListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment StackListItem on Stack {
  ...StackCore
}
    ${DirtyAssStackCoreFragmentDoc}`;
export const DirtyAssStacksConnectionFragmentDoc = /*#__PURE__*/ gql`
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
    ${DirtyAssStackListItemFragmentDoc}`;
export const DirtyAssUserSettingsFragmentDoc = /*#__PURE__*/ gql`
    fragment UserSettings on User {
  email
  pendingEmail
}
    `;
export const EditBookmarkDocument = /*#__PURE__*/ gql`
    mutation editBookmark($id: ID!, $data: EditBookmarkInput!) {
  editBookmark(id: $id, data: $data) {
    ...BookmarkDetail
  }
}
    ${DirtyAssBookmarkDetailFragmentDoc}`;
export type EditBookmarkMutationFn = Apollo.MutationFunction<EditBookmarkMutation, EditBookmarkMutationVariables>;
export function useEditBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<EditBookmarkMutation, EditBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditBookmarkMutation, EditBookmarkMutationVariables>(EditBookmarkDocument, options);
      }
export type EditBookmarkMutationHookResult = ReturnType<typeof useEditBookmarkMutation>;
export type EditBookmarkMutationResult = Apollo.MutationResult<EditBookmarkMutation>;
export type EditBookmarkMutationOptions = Apollo.BaseMutationOptions<EditBookmarkMutation, EditBookmarkMutationVariables>;
export const DeleteBookmarkDocument = /*#__PURE__*/ gql`
    mutation deleteBookmark($id: ID!) {
  deleteBookmark(id: $id)
}
    `;
export type DeleteBookmarkMutationFn = Apollo.MutationFunction<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;
export function useDeleteBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>(DeleteBookmarkDocument, options);
      }
export type DeleteBookmarkMutationHookResult = ReturnType<typeof useDeleteBookmarkMutation>;
export type DeleteBookmarkMutationResult = Apollo.MutationResult<DeleteBookmarkMutation>;
export type DeleteBookmarkMutationOptions = Apollo.BaseMutationOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;
export const AddBookmarkDocument = /*#__PURE__*/ gql`
    mutation addBookmark($data: AddBookmarkInput!) {
  addBookmark(data: $data) {
    ...BookmarkDetail
  }
}
    ${DirtyAssBookmarkDetailFragmentDoc}`;
export type AddBookmarkMutationFn = Apollo.MutationFunction<AddBookmarkMutation, AddBookmarkMutationVariables>;
export function useAddBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<AddBookmarkMutation, AddBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBookmarkMutation, AddBookmarkMutationVariables>(AddBookmarkDocument, options);
      }
export type AddBookmarkMutationHookResult = ReturnType<typeof useAddBookmarkMutation>;
export type AddBookmarkMutationResult = Apollo.MutationResult<AddBookmarkMutation>;
export type AddBookmarkMutationOptions = Apollo.BaseMutationOptions<AddBookmarkMutation, AddBookmarkMutationVariables>;
export const AddCommentDocument = /*#__PURE__*/ gql`
    mutation addComment($refId: ID!, $parentId: String, $type: CommentType!, $text: String!) {
  addComment(refId: $refId, parentId: $parentId, type: $type, text: $text) {
    ...CommentInfo
  }
}
    ${DirtyAssCommentInfoFragmentDoc}`;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const EditCommentDocument = /*#__PURE__*/ gql`
    mutation editComment($id: ID!, $text: String!) {
  editComment(id: $id, text: $text) {
    ...CommentInfo
  }
}
    ${DirtyAssCommentInfoFragmentDoc}`;
export type EditCommentMutationFn = Apollo.MutationFunction<EditCommentMutation, EditCommentMutationVariables>;
export function useEditCommentMutation(baseOptions?: Apollo.MutationHookOptions<EditCommentMutation, EditCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCommentMutation, EditCommentMutationVariables>(EditCommentDocument, options);
      }
export type EditCommentMutationHookResult = ReturnType<typeof useEditCommentMutation>;
export type EditCommentMutationResult = Apollo.MutationResult<EditCommentMutation>;
export type EditCommentMutationOptions = Apollo.BaseMutationOptions<EditCommentMutation, EditCommentMutationVariables>;
export const DeleteCommentDocument = /*#__PURE__*/ gql`
    mutation deleteComment($id: ID!) {
  deleteComment(id: $id)
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const EditPostDocument = /*#__PURE__*/ gql`
    mutation editPost($id: ID!, $data: EditPostInput!) {
  editPost(id: $id, data: $data) {
    ...PostDetail
  }
}
    ${DirtyAssPostDetailFragmentDoc}`;
export type EditPostMutationFn = Apollo.MutationFunction<EditPostMutation, EditPostMutationVariables>;
export function useEditPostMutation(baseOptions?: Apollo.MutationHookOptions<EditPostMutation, EditPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPostMutation, EditPostMutationVariables>(EditPostDocument, options);
      }
export type EditPostMutationHookResult = ReturnType<typeof useEditPostMutation>;
export type EditPostMutationResult = Apollo.MutationResult<EditPostMutation>;
export type EditPostMutationOptions = Apollo.BaseMutationOptions<EditPostMutation, EditPostMutationVariables>;
export const DeletePostDocument = /*#__PURE__*/ gql`
    mutation deletePost($id: ID!) {
  deletePost(id: $id)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const AddPostDocument = /*#__PURE__*/ gql`
    mutation addPost($data: AddPostInput!) {
  addPost(data: $data) {
    ...PostDetail
  }
}
    ${DirtyAssPostDetailFragmentDoc}`;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;
export function useAddPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, options);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const EditQuestionDocument = /*#__PURE__*/ gql`
    mutation editQuestion($id: ID!, $data: EditQuestionInput!) {
  editQuestion(id: $id, data: $data) {
    ...QuestionDetail
  }
}
    ${DirtyAssQuestionDetailFragmentDoc}`;
export type EditQuestionMutationFn = Apollo.MutationFunction<EditQuestionMutation, EditQuestionMutationVariables>;
export function useEditQuestionMutation(baseOptions?: Apollo.MutationHookOptions<EditQuestionMutation, EditQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditQuestionMutation, EditQuestionMutationVariables>(EditQuestionDocument, options);
      }
export type EditQuestionMutationHookResult = ReturnType<typeof useEditQuestionMutation>;
export type EditQuestionMutationResult = Apollo.MutationResult<EditQuestionMutation>;
export type EditQuestionMutationOptions = Apollo.BaseMutationOptions<EditQuestionMutation, EditQuestionMutationVariables>;
export const DeleteQuestionDocument = /*#__PURE__*/ gql`
    mutation deleteQuestion($id: ID!) {
  deleteQuestion(id: $id)
}
    `;
export type DeleteQuestionMutationFn = Apollo.MutationFunction<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export function useDeleteQuestionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestionMutation, DeleteQuestionMutationVariables>(DeleteQuestionDocument, options);
      }
export type DeleteQuestionMutationHookResult = ReturnType<typeof useDeleteQuestionMutation>;
export type DeleteQuestionMutationResult = Apollo.MutationResult<DeleteQuestionMutation>;
export type DeleteQuestionMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export const AddQuestionDocument = /*#__PURE__*/ gql`
    mutation addQuestion($data: AddQuestionInput!) {
  addQuestion(data: $data) {
    ...QuestionDetail
  }
}
    ${DirtyAssQuestionDetailFragmentDoc}`;
export type AddQuestionMutationFn = Apollo.MutationFunction<AddQuestionMutation, AddQuestionMutationVariables>;
export function useAddQuestionMutation(baseOptions?: Apollo.MutationHookOptions<AddQuestionMutation, AddQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddQuestionMutation, AddQuestionMutationVariables>(AddQuestionDocument, options);
      }
export type AddQuestionMutationHookResult = ReturnType<typeof useAddQuestionMutation>;
export type AddQuestionMutationResult = Apollo.MutationResult<AddQuestionMutation>;
export type AddQuestionMutationOptions = Apollo.BaseMutationOptions<AddQuestionMutation, AddQuestionMutationVariables>;
export const ToggleReactionDocument = /*#__PURE__*/ gql`
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
    `;
export type ToggleReactionMutationFn = Apollo.MutationFunction<ToggleReactionMutation, ToggleReactionMutationVariables>;
export function useToggleReactionMutation(baseOptions?: Apollo.MutationHookOptions<ToggleReactionMutation, ToggleReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleReactionMutation, ToggleReactionMutationVariables>(ToggleReactionDocument, options);
      }
export type ToggleReactionMutationHookResult = ReturnType<typeof useToggleReactionMutation>;
export type ToggleReactionMutationResult = Apollo.MutationResult<ToggleReactionMutation>;
export type ToggleReactionMutationOptions = Apollo.BaseMutationOptions<ToggleReactionMutation, ToggleReactionMutationVariables>;
export const EditStackDocument = /*#__PURE__*/ gql`
    mutation editStack($id: ID!, $data: EditStackInput!) {
  editStack(id: $id, data: $data) {
    ...StackDetail
  }
}
    ${DirtyAssStackDetailFragmentDoc}`;
export type EditStackMutationFn = Apollo.MutationFunction<EditStackMutation, EditStackMutationVariables>;
export function useEditStackMutation(baseOptions?: Apollo.MutationHookOptions<EditStackMutation, EditStackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditStackMutation, EditStackMutationVariables>(EditStackDocument, options);
      }
export type EditStackMutationHookResult = ReturnType<typeof useEditStackMutation>;
export type EditStackMutationResult = Apollo.MutationResult<EditStackMutation>;
export type EditStackMutationOptions = Apollo.BaseMutationOptions<EditStackMutation, EditStackMutationVariables>;
export const DeleteStackDocument = /*#__PURE__*/ gql`
    mutation deleteStack($id: ID!) {
  deleteStack(id: $id)
}
    `;
export type DeleteStackMutationFn = Apollo.MutationFunction<DeleteStackMutation, DeleteStackMutationVariables>;
export function useDeleteStackMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStackMutation, DeleteStackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStackMutation, DeleteStackMutationVariables>(DeleteStackDocument, options);
      }
export type DeleteStackMutationHookResult = ReturnType<typeof useDeleteStackMutation>;
export type DeleteStackMutationResult = Apollo.MutationResult<DeleteStackMutation>;
export type DeleteStackMutationOptions = Apollo.BaseMutationOptions<DeleteStackMutation, DeleteStackMutationVariables>;
export const AddStackDocument = /*#__PURE__*/ gql`
    mutation addStack($data: AddStackInput!) {
  addStack(data: $data) {
    ...StackDetail
  }
}
    ${DirtyAssStackDetailFragmentDoc}`;
export type AddStackMutationFn = Apollo.MutationFunction<AddStackMutation, AddStackMutationVariables>;
export function useAddStackMutation(baseOptions?: Apollo.MutationHookOptions<AddStackMutation, AddStackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStackMutation, AddStackMutationVariables>(AddStackDocument, options);
      }
export type AddStackMutationHookResult = ReturnType<typeof useAddStackMutation>;
export type AddStackMutationResult = Apollo.MutationResult<AddStackMutation>;
export type AddStackMutationOptions = Apollo.BaseMutationOptions<AddStackMutation, AddStackMutationVariables>;
export const ToggleStackUserDocument = /*#__PURE__*/ gql`
    mutation toggleStackUser($id: ID!) {
  toggleStackUser(id: $id) {
    ...StackCore
    usedBy {
      ...UserInfo
    }
  }
}
    ${DirtyAssStackCoreFragmentDoc}
${DirtyAssUserInfoFragmentDoc}`;
export type ToggleStackUserMutationFn = Apollo.MutationFunction<ToggleStackUserMutation, ToggleStackUserMutationVariables>;
export function useToggleStackUserMutation(baseOptions?: Apollo.MutationHookOptions<ToggleStackUserMutation, ToggleStackUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleStackUserMutation, ToggleStackUserMutationVariables>(ToggleStackUserDocument, options);
      }
export type ToggleStackUserMutationHookResult = ReturnType<typeof useToggleStackUserMutation>;
export type ToggleStackUserMutationResult = Apollo.MutationResult<ToggleStackUserMutation>;
export type ToggleStackUserMutationOptions = Apollo.BaseMutationOptions<ToggleStackUserMutation, ToggleStackUserMutationVariables>;
export const DeleteUserDocument = /*#__PURE__*/ gql`
    mutation deleteUser {
  deleteUser
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const EditUserDocument = /*#__PURE__*/ gql`
    mutation editUser($data: EditUserInput) {
  editUser(data: $data) {
    ...UserInfo
  }
}
    ${DirtyAssUserInfoFragmentDoc}`;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;
export function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const AddViewDocument = /*#__PURE__*/ gql`
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
    `;
export type AddViewMutationFn = Apollo.MutationFunction<AddViewMutation, AddViewMutationVariables>;
export function useAddViewMutation(baseOptions?: Apollo.MutationHookOptions<AddViewMutation, AddViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddViewMutation, AddViewMutationVariables>(AddViewDocument, options);
      }
export type AddViewMutationHookResult = ReturnType<typeof useAddViewMutation>;
export type AddViewMutationResult = Apollo.MutationResult<AddViewMutation>;
export type AddViewMutationOptions = Apollo.BaseMutationOptions<AddViewMutation, AddViewMutationVariables>;
export const GetBlogsDocument = /*#__PURE__*/ gql`
    query getBlogs {
  blogs {
    ...BlogListItem
  }
}
    ${DirtyAssBlogListItemFragmentDoc}`;
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
export type GetBlogsQueryResult = Apollo.QueryResult<GetBlogsQuery, GetBlogsQueryVariables>;
export function refetchGetBlogsQuery(variables?: GetBlogsQueryVariables) {
      return { query: GetBlogsDocument, variables: variables }
    }
export const GetBlogDocument = /*#__PURE__*/ gql`
    query getBlog($slug: String!) {
  blog(slug: $slug) {
    ...BlogDetail
  }
}
    ${DirtyAssBlogDetailFragmentDoc}`;
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
export type GetBlogQueryResult = Apollo.QueryResult<GetBlogQuery, GetBlogQueryVariables>;
export function refetchGetBlogQuery(variables: GetBlogQueryVariables) {
      return { query: GetBlogDocument, variables: variables }
    }
export const GetBookmarksDocument = /*#__PURE__*/ gql`
    query getBookmarks($first: Int, $after: String, $filter: BookmarkFilter) {
  bookmarks(first: $first, after: $after, filter: $filter) {
    ...BookmarksConnection
  }
}
    ${DirtyAssBookmarksConnectionFragmentDoc}`;
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
export type GetBookmarksQueryResult = Apollo.QueryResult<GetBookmarksQuery, GetBookmarksQueryVariables>;
export function refetchGetBookmarksQuery(variables?: GetBookmarksQueryVariables) {
      return { query: GetBookmarksDocument, variables: variables }
    }
export const GetBookmarkDocument = /*#__PURE__*/ gql`
    query getBookmark($id: ID!) {
  bookmark(id: $id) {
    ...BookmarkDetail
  }
}
    ${DirtyAssBookmarkDetailFragmentDoc}`;
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
export type GetBookmarkQueryResult = Apollo.QueryResult<GetBookmarkQuery, GetBookmarkQueryVariables>;
export function refetchGetBookmarkQuery(variables: GetBookmarkQueryVariables) {
      return { query: GetBookmarkDocument, variables: variables }
    }
export const GetCasesDocument = /*#__PURE__*/ gql`
    query getCases {
  cases {
    ...CaseListItem
  }
}
    ${DirtyAssCaseListItemFragmentDoc}`;
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
export type GetCasesQueryResult = Apollo.QueryResult<GetCasesQuery, GetCasesQueryVariables>;
export function refetchGetCasesQuery(variables?: GetCasesQueryVariables) {
      return { query: GetCasesDocument, variables: variables }
    }
export const GetCaseDocument = /*#__PURE__*/ gql`
    query getCase($slug: String!) {
  case(slug: $slug) {
    ...CaseDetail
  }
}
    ${DirtyAssCaseDetailFragmentDoc}`;
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
export type GetCaseQueryResult = Apollo.QueryResult<GetCaseQuery, GetCaseQueryVariables>;
export function refetchGetCaseQuery(variables: GetCaseQueryVariables) {
      return { query: GetCaseDocument, variables: variables }
    }
export const GetCommentsDocument = /*#__PURE__*/ gql`
    query getComments($refId: ID!, $type: CommentType!) {
  comments(refId: $refId, type: $type) {
    ...CommentInfo
  }
}
    ${DirtyAssCommentInfoFragmentDoc}`;
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
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export function refetchGetCommentsQuery(variables: GetCommentsQueryVariables) {
      return { query: GetCommentsDocument, variables: variables }
    }
export const GetPostsDocument = /*#__PURE__*/ gql`
    query getPosts($filter: PostFilter) {
  posts(filter: $filter) {
    ...PostListItem
  }
}
    ${DirtyAssPostListItemFragmentDoc}`;
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
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export function refetchGetPostsQuery(variables?: GetPostsQueryVariables) {
      return { query: GetPostsDocument, variables: variables }
    }
export const GetPostDocument = /*#__PURE__*/ gql`
    query getPost($slug: String!) {
  post(slug: $slug) {
    ...PostDetail
  }
}
    ${DirtyAssPostDetailFragmentDoc}`;
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
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export function refetchGetPostQuery(variables: GetPostQueryVariables) {
      return { query: GetPostDocument, variables: variables }
    }
export const GetQuestionsDocument = /*#__PURE__*/ gql`
    query getQuestions($first: Int, $after: String, $filter: QuestionFilter) {
  questions(first: $first, after: $after, filter: $filter) {
    ...QuestionsConnection
  }
}
    ${DirtyAssQuestionsConnectionFragmentDoc}`;
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
export type GetQuestionsQueryResult = Apollo.QueryResult<GetQuestionsQuery, GetQuestionsQueryVariables>;
export function refetchGetQuestionsQuery(variables?: GetQuestionsQueryVariables) {
      return { query: GetQuestionsDocument, variables: variables }
    }
export const GetQuestionDocument = /*#__PURE__*/ gql`
    query getQuestion($id: ID!) {
  question(id: $id) {
    ...QuestionDetail
  }
}
    ${DirtyAssQuestionDetailFragmentDoc}`;
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
export type GetQuestionQueryResult = Apollo.QueryResult<GetQuestionQuery, GetQuestionQueryVariables>;
export function refetchGetQuestionQuery(variables: GetQuestionQueryVariables) {
      return { query: GetQuestionDocument, variables: variables }
    }
export const GetStacksDocument = /*#__PURE__*/ gql`
    query getStacks($first: Int, $after: String) {
  stacks(first: $first, after: $after) {
    ...StacksConnection
  }
}
    ${DirtyAssStacksConnectionFragmentDoc}`;
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
export type GetStacksQueryResult = Apollo.QueryResult<GetStacksQuery, GetStacksQueryVariables>;
export function refetchGetStacksQuery(variables?: GetStacksQueryVariables) {
      return { query: GetStacksDocument, variables: variables }
    }
export const GetStackDocument = /*#__PURE__*/ gql`
    query getStack($slug: String!) {
  stack(slug: $slug) {
    ...StackDetail
  }
}
    ${DirtyAssStackDetailFragmentDoc}`;
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
export type GetStackQueryResult = Apollo.QueryResult<GetStackQuery, GetStackQueryVariables>;
export function refetchGetStackQuery(variables: GetStackQueryVariables) {
      return { query: GetStackDocument, variables: variables }
    }
export const GetTagsDocument = /*#__PURE__*/ gql`
    query getTags {
  tags {
    name
  }
}
    `;
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
export type GetTagsQueryResult = Apollo.QueryResult<GetTagsQuery, GetTagsQueryVariables>;
export function refetchGetTagsQuery(variables?: GetTagsQueryVariables) {
      return { query: GetTagsDocument, variables: variables }
    }
export const GetUserDocument = /*#__PURE__*/ gql`
    query getUser($username: String!) {
  user(username: $username) {
    ...UserInfo
  }
}
    ${DirtyAssUserInfoFragmentDoc}`;
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
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export function refetchGetUserQuery(variables: GetUserQueryVariables) {
      return { query: GetUserDocument, variables: variables }
    }
export const ViewerDocument = /*#__PURE__*/ gql`
    query viewer {
  viewer {
    ...UserInfo
  }
}
    ${DirtyAssUserInfoFragmentDoc}`;
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
export type ViewerQueryResult = Apollo.QueryResult<ViewerQuery, ViewerQueryVariables>;
export function refetchViewerQuery(variables?: ViewerQueryVariables) {
      return { query: ViewerDocument, variables: variables }
    }
export const GetViewerWithSettingsDocument = /*#__PURE__*/ gql`
    query getViewerWithSettings {
  viewer {
    ...UserInfo
    ...UserSettings
  }
}
    ${DirtyAssUserInfoFragmentDoc}
${DirtyAssUserSettingsFragmentDoc}`;
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
export type GetViewerWithSettingsQueryResult = Apollo.QueryResult<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>;
export function refetchGetViewerWithSettingsQuery(variables?: GetViewerWithSettingsQueryVariables) {
      return { query: GetViewerWithSettingsDocument, variables: variables }
    }