export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type BookmarkCoreFragment = (
  { id: string, url?: string | null, host: string, title?: string | null, description?: string | null, faviconUrl?: string | null, count?: number | null }
  & { __typename: 'Bookmark' }
);

export type CommentInfoFragment = (
  { id: string, parentId?: string | null, createdAt: any, updatedAt?: any | null, text?: string | null, viewerCanEdit?: boolean | null, viewerCanDelete?: boolean | null, author: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) }
  & { __typename: 'Comment' }
);

export type UserInfoFragment = (
  { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
  & { __typename: 'User' }
);

export type PostDetailFragment = (
  { text?: string | null, featureImage?: string | null, reactionCount?: number | null, hitRate?: number | null, viewerHasReacted?: boolean | null, id: string, publishedAt?: any | null, title?: string | null, slug?: string | null, excerpt?: string | null }
  & { __typename: 'Post' }
);

export type PostCoreFragment = (
  { id: string, publishedAt?: any | null, title?: string | null, slug?: string | null, excerpt?: string | null }
  & { __typename: 'Post' }
);

export type QuestionDetailFragment = (
  { description?: string | null, status?: QuestionStatus | null, viewerCanEdit?: boolean | null, viewerCanComment?: boolean | null, reactionCount?: number | null, viewerHasReacted?: boolean | null, id: string, title: string, audioUrl?: string | null, waveform?: any | null, count?: number | null, createdAt: any, author?: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) | null }
  & { __typename: 'Question' }
);

export type QuestionCoreFragment = (
  { id: string, title: string, audioUrl?: string | null, waveform?: any | null, count?: number | null, createdAt: any, author?: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) | null }
  & { __typename: 'Question' }
);

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

export type StackCoreFragment = (
  { id: string, name: string, image?: string | null, url: string, slug: string, count?: number | null }
  & { __typename: 'Stack' }
);

export type BlogListItemFragment = (
  { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Blog' }
);

export type BlogCoreFragment = (
  { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Blog' }
);

export type BlogDetailFragment = (
  { reactionCount?: number | null, viewerHasReacted?: boolean | null, id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Blog' }
);

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

export type BookmarkListItemFragment = (
  { id: string, url?: string | null, host: string, title?: string | null, description?: string | null, faviconUrl?: string | null, count?: number | null }
  & { __typename: 'Bookmark' }
);

export type CaseListItemFragment = (
  { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Case' }
);

export type CaseCoreFragment = (
  { id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Case' }
);

export type CaseDetailFragment = (
  { reactionCount?: number | null, viewerHasReacted?: boolean | null, id: string, title?: string | null, date?: any | null, slug?: string | null, count?: number | null }
  & { __typename: 'Case' }
);

export type PostListItemFragment = (
  { id: string, publishedAt?: any | null, title?: string | null, slug?: string | null, excerpt?: string | null }
  & { __typename: 'Post' }
);

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

export type QuestionListItemFragment = (
  { id: string, title: string, audioUrl?: string | null, waveform?: any | null, count?: number | null, createdAt: any, author?: (
    { id: string, username?: string | null, image?: string | null, name?: string | null, role?: UserRole | null, isViewer?: boolean | null, isAdmin?: boolean | null }
    & { __typename: 'User' }
  ) | null }
  & { __typename: 'Question' }
);

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

export type StackListItemFragment = (
  { id: string, name: string, image?: string | null, url: string, slug: string, count?: number | null }
  & { __typename: 'Stack' }
);

export type UserSettingsFragment = (
  { email?: string | null, pendingEmail?: string | null }
  & { __typename?: 'User' }
);

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
