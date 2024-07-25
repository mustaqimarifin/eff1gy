import * as Apollo from "@apollo/client";
import type { DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	Date: { input: any; output: any };
	JSON: { input: any; output: any };
};

export type AddBookmarkInput = {
	tag: Scalars["String"]["input"];
	url: Scalars["String"]["input"];
};

export type AddPostInput = {
	excerpt?: InputMaybe<Scalars["String"]["input"]>;
	slug: Scalars["String"]["input"];
	text: Scalars["String"]["input"];
	title: Scalars["String"]["input"];
};

export type AddQuestionInput = {
	audioUrl?: InputMaybe<Scalars["String"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	title: Scalars["String"]["input"];
	waveform?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type AddStackInput = {
	description: Scalars["String"]["input"];
	image: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	tag?: InputMaybe<Scalars["String"]["input"]>;
	url: Scalars["String"]["input"];
};

export type Blog = {
	__typename?: "Blog";
	count?: Maybe<Scalars["Int"]["output"]>;
	date?: Maybe<Scalars["Date"]["output"]>;
	id: Scalars["ID"]["output"];
	reactionCount?: Maybe<Scalars["Int"]["output"]>;
	slug?: Maybe<Scalars["String"]["output"]>;
	title?: Maybe<Scalars["String"]["output"]>;
	viewerHasReacted?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Bookmark = {
	__typename?: "Bookmark";
	count?: Maybe<Scalars["Int"]["output"]>;
	createdAt: Scalars["Date"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	faviconUrl?: Maybe<Scalars["String"]["output"]>;
	host: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	image?: Maybe<Scalars["String"]["output"]>;
	reactionCount?: Maybe<Scalars["Int"]["output"]>;
	tags: Array<Maybe<Tag>>;
	title?: Maybe<Scalars["String"]["output"]>;
	updatedAt: Scalars["Date"]["output"];
	url?: Maybe<Scalars["String"]["output"]>;
	viewerHasReacted?: Maybe<Scalars["Boolean"]["output"]>;
};

export type BookmarkEdge = {
	__typename?: "BookmarkEdge";
	cursor?: Maybe<Scalars["String"]["output"]>;
	node?: Maybe<Bookmark>;
};

export type BookmarkFilter = {
	host?: InputMaybe<Scalars["String"]["input"]>;
	tag?: InputMaybe<Scalars["String"]["input"]>;
};

export type BookmarksConnection = {
	__typename?: "BookmarksConnection";
	edges: Array<Maybe<BookmarkEdge>>;
	pageInfo?: Maybe<PageInfo>;
};

export enum CacheControlScope {
	Private = "PRIVATE",
	Public = "PUBLIC",
}

export type Case = {
	__typename?: "Case";
	count?: Maybe<Scalars["Int"]["output"]>;
	date?: Maybe<Scalars["Date"]["output"]>;
	id: Scalars["ID"]["output"];
	reactionCount?: Maybe<Scalars["Int"]["output"]>;
	slug?: Maybe<Scalars["String"]["output"]>;
	title?: Maybe<Scalars["String"]["output"]>;
	viewerHasReacted?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Comment = {
	__typename?: "Comment";
	author: User;
	createdAt: Scalars["Date"]["output"];
	id: Scalars["ID"]["output"];
	parentId?: Maybe<Scalars["String"]["output"]>;
	replies?: Maybe<Array<Maybe<Comment>>>;
	text?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["Date"]["output"]>;
	viewerCanDelete?: Maybe<Scalars["Boolean"]["output"]>;
	viewerCanEdit?: Maybe<Scalars["Boolean"]["output"]>;
};

export enum CommentType {
	Blog = "BLOG",
	Bookmark = "BOOKMARK",
	Case = "CASE",
	Event = "EVENT",
	Post = "POST",
	Question = "QUESTION",
	Stack = "STACK",
}

export type EditBookmarkInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	faviconUrl?: InputMaybe<Scalars["String"]["input"]>;
	tag?: InputMaybe<Scalars["String"]["input"]>;
	title: Scalars["String"]["input"];
};

export type EditPostInput = {
	excerpt?: InputMaybe<Scalars["String"]["input"]>;
	published?: InputMaybe<Scalars["Boolean"]["input"]>;
	slug: Scalars["String"]["input"];
	text: Scalars["String"]["input"];
	title: Scalars["String"]["input"];
};

export type EditQuestionInput = {
	audioUrl?: InputMaybe<Scalars["String"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	title: Scalars["String"]["input"];
	waveform?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type EditStackInput = {
	description: Scalars["String"]["input"];
	image: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	tag?: InputMaybe<Scalars["String"]["input"]>;
	url: Scalars["String"]["input"];
};

export type EditUserInput = {
	email?: InputMaybe<Scalars["String"]["input"]>;
	username?: InputMaybe<Scalars["String"]["input"]>;
};

export type Event = {
	__typename?: "Event";
	count?: Maybe<Scalars["Int"]["output"]>;
	id: Scalars["ID"]["output"];
	reactionCount?: Maybe<Scalars["Int"]["output"]>;
	viewerHasReacted?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Mutation = {
	__typename?: "Mutation";
	addBookmark?: Maybe<Bookmark>;
	addComment?: Maybe<Comment>;
	addPost?: Maybe<Post>;
	addQuestion?: Maybe<Question>;
	addStack?: Maybe<Stack>;
	addView?: Maybe<Viewable>;
	deleteBookmark?: Maybe<Scalars["Boolean"]["output"]>;
	deleteComment?: Maybe<Scalars["Boolean"]["output"]>;
	deletePost?: Maybe<Scalars["Boolean"]["output"]>;
	deleteQuestion?: Maybe<Scalars["Boolean"]["output"]>;
	deleteStack?: Maybe<Scalars["Boolean"]["output"]>;
	deleteUser?: Maybe<Scalars["Boolean"]["output"]>;
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
	parentId?: InputMaybe<Scalars["String"]["input"]>;
	refId: Scalars["ID"]["input"];
	text: Scalars["String"]["input"];
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
	refId: Scalars["ID"]["input"];
	type: ViewType;
};

export type MutationDeleteBookmarkArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationDeleteCommentArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationDeletePostArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationDeleteQuestionArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationDeleteStackArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationEditBookmarkArgs = {
	data: EditBookmarkInput;
	id: Scalars["ID"]["input"];
};

export type MutationEditCommentArgs = {
	id: Scalars["ID"]["input"];
	text?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationEditPostArgs = {
	data: EditPostInput;
	id: Scalars["ID"]["input"];
};

export type MutationEditQuestionArgs = {
	data: EditQuestionInput;
	id: Scalars["ID"]["input"];
};

export type MutationEditStackArgs = {
	data: EditStackInput;
	id: Scalars["ID"]["input"];
};

export type MutationEditUserArgs = {
	data?: InputMaybe<EditUserInput>;
};

export type MutationToggleReactionArgs = {
	refId: Scalars["ID"]["input"];
	type: ReactionType;
};

export type MutationToggleStackUserArgs = {
	id: Scalars["ID"]["input"];
};

export type PageInfo = {
	__typename?: "PageInfo";
	endCursor?: Maybe<Scalars["String"]["output"]>;
	hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
	totalCount?: Maybe<Scalars["Int"]["output"]>;
};

export type Post = {
	__typename?: "Post";
	author?: Maybe<User>;
	createdAt?: Maybe<Scalars["Date"]["output"]>;
	excerpt?: Maybe<Scalars["String"]["output"]>;
	featureImage?: Maybe<Scalars["String"]["output"]>;
	hitRate?: Maybe<Scalars["Int"]["output"]>;
	id: Scalars["ID"]["output"];
	publishedAt?: Maybe<Scalars["Date"]["output"]>;
	reactionCount?: Maybe<Scalars["Int"]["output"]>;
	slug?: Maybe<Scalars["String"]["output"]>;
	text?: Maybe<Scalars["String"]["output"]>;
	title?: Maybe<Scalars["String"]["output"]>;
	updatedAt?: Maybe<Scalars["Date"]["output"]>;
	viewerHasReacted?: Maybe<Scalars["Boolean"]["output"]>;
};

export type PostFilter = {
	published?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Query = {
	__typename?: "Query";
	blog?: Maybe<Blog>;
	blogs: Array<Maybe<Blog>>;
	bookmark?: Maybe<Bookmark>;
	bookmarks: BookmarksConnection;
	case?: Maybe<Case>;
	cases: Array<Maybe<Case>>;
	comment?: Maybe<Comment>;
	comments: Array<Maybe<Comment>>;
	event?: Maybe<Event>;
	events: Array<Maybe<Event>>;
	post?: Maybe<Post>;
	posts: Array<Maybe<Post>>;
	question?: Maybe<Question>;
	questions: QuestionsConnection;
	stack?: Maybe<Stack>;
	stacks: StacksConnection;
	tags: Array<Maybe<Tag>>;
	user?: Maybe<User>;
	viewer?: Maybe<User>;
};

export type QueryBlogArgs = {
	slug: Scalars["String"]["input"];
};

export type QueryBookmarkArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryBookmarksArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	filter?: InputMaybe<BookmarkFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCaseArgs = {
	slug: Scalars["String"]["input"];
};

export type QueryCommentArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryCommentsArgs = {
	refId: Scalars["ID"]["input"];
	type: CommentType;
};

export type QueryEventArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryPostArgs = {
	slug: Scalars["String"]["input"];
};

export type QueryPostsArgs = {
	filter?: InputMaybe<PostFilter>;
};

export type QueryQuestionArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryQuestionsArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	filter?: InputMaybe<QuestionFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryStackArgs = {
	slug: Scalars["String"]["input"];
};

export type QueryStacksArgs = {
	after?: InputMaybe<Scalars["String"]["input"]>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUserArgs = {
	username: Scalars["String"]["input"];
};

export type Question = {
	__typename?: "Question";
	audioUrl?: Maybe<Scalars["String"]["output"]>;
	author?: Maybe<User>;
	count?: Maybe<Scalars["Int"]["output"]>;
	createdAt: Scalars["Date"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	playCount?: Maybe<Scalars["Int"]["output"]>;
	reactionCount?: Maybe<Scalars["Int"]["output"]>;
	status?: Maybe<QuestionStatus>;
	title: Scalars["String"]["output"];
	updatedAt?: Maybe<Scalars["Date"]["output"]>;
	viewerCanComment?: Maybe<Scalars["Boolean"]["output"]>;
	viewerCanEdit?: Maybe<Scalars["Boolean"]["output"]>;
	viewerHasReacted?: Maybe<Scalars["Boolean"]["output"]>;
	waveform?: Maybe<Scalars["JSON"]["output"]>;
};

export type QuestionEdge = {
	__typename?: "QuestionEdge";
	cursor?: Maybe<Scalars["String"]["output"]>;
	node?: Maybe<Question>;
};

export type QuestionFilter = {
	status?: InputMaybe<QuestionStatus>;
};

export enum QuestionStatus {
	Answered = "ANSWERED",
	Pending = "PENDING",
}

export type QuestionsConnection = {
	__typename?: "QuestionsConnection";
	edges: Array<Maybe<QuestionEdge>>;
	pageInfo?: Maybe<PageInfo>;
};

export type Reactable = Blog | Bookmark | Case | Event | Post | Question | Stack;

export enum ReactionType {
	Blog = "BLOG",
	Bookmark = "BOOKMARK",
	Case = "CASE",
	Event = "EVENT",
	Post = "POST",
	Question = "QUESTION",
	Stack = "STACK",
}

export type Stack = {
	__typename?: "Stack";
	count?: Maybe<Scalars["Int"]["output"]>;
	createdAt: Scalars["Date"]["output"];
	description?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	image?: Maybe<Scalars["String"]["output"]>;
	name: Scalars["String"]["output"];
	reactionCount?: Maybe<Scalars["Int"]["output"]>;
	slug: Scalars["String"]["output"];
	tags: Array<Maybe<Tag>>;
	updatedAt?: Maybe<Scalars["Date"]["output"]>;
	url: Scalars["String"]["output"];
	usedBy: Array<Maybe<User>>;
	usedByViewer?: Maybe<Scalars["Boolean"]["output"]>;
	viewerHasReacted?: Maybe<Scalars["Boolean"]["output"]>;
};

export type StackEdge = {
	__typename?: "StackEdge";
	cursor?: Maybe<Scalars["String"]["output"]>;
	node?: Maybe<Stack>;
};

export type StacksConnection = {
	__typename?: "StacksConnection";
	edges: Array<Maybe<StackEdge>>;
	pageInfo?: Maybe<PageInfo>;
};

export type Tag = {
	__typename?: "Tag";
	name: Scalars["String"]["output"];
};

export type User = {
	__typename?: "User";
	createdAt?: Maybe<Scalars["Date"]["output"]>;
	email?: Maybe<Scalars["String"]["output"]>;
	id: Scalars["ID"]["output"];
	image?: Maybe<Scalars["String"]["output"]>;
	isAdmin?: Maybe<Scalars["Boolean"]["output"]>;
	isViewer?: Maybe<Scalars["Boolean"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	pendingEmail?: Maybe<Scalars["String"]["output"]>;
	role?: Maybe<UserRole>;
	username?: Maybe<Scalars["String"]["output"]>;
};

export enum UserRole {
	Admin = "ADMIN",
	Blocked = "BLOCKED",
	User = "USER",
}

export enum ViewType {
	Blog = "BLOG",
	Bookmark = "BOOKMARK",
	Case = "CASE",
	Event = "EVENT",
	Post = "POST",
	Question = "QUESTION",
	Stack = "STACK",
}

export type Viewable = Blog | Bookmark | Case | Event | Post | Question | Stack;

export type BookmarkDetailFragment_Bookmark_tags_Tag = { name: string } & { __typename?: "Tag" };

export type BookmarkDetailFragment = {
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
	id: string;
	url?: string | null;
	host: string;
	title?: string | null;
	description?: string | null;
	faviconUrl?: string | null;
	count?: number | null;
	tags: Array<BookmarkDetailFragment_Bookmark_tags_Tag | null>;
} & { __typename: "Bookmark" };

export type BookmarkCoreFragment = {
	id: string;
	url?: string | null;
	host: string;
	title?: string | null;
	description?: string | null;
	faviconUrl?: string | null;
	count?: number | null;
} & { __typename: "Bookmark" };

export type CommentInfoFragment_Comment_author_User = {
	id: string;
	username?: string | null;
	image?: string | null;
	name?: string | null;
	role?: UserRole | null;
	isViewer?: boolean | null;
	isAdmin?: boolean | null;
} & { __typename: "User" };

export type CommentInfoFragment = {
	id: string;
	parentId?: string | null;
	createdAt: any;
	updatedAt?: any | null;
	text?: string | null;
	viewerCanEdit?: boolean | null;
	viewerCanDelete?: boolean | null;
	author: CommentInfoFragment_Comment_author_User;
} & { __typename: "Comment" };

export type UserInfoFragment = {
	id: string;
	username?: string | null;
	image?: string | null;
	name?: string | null;
	role?: UserRole | null;
	isViewer?: boolean | null;
	isAdmin?: boolean | null;
} & { __typename: "User" };

export type PostDetailFragment = {
	text?: string | null;
	featureImage?: string | null;
	reactionCount?: number | null;
	hitRate?: number | null;
	viewerHasReacted?: boolean | null;
	id: string;
	publishedAt?: any | null;
	title?: string | null;
	slug?: string | null;
	excerpt?: string | null;
} & { __typename: "Post" };

export type PostCoreFragment = {
	id: string;
	publishedAt?: any | null;
	title?: string | null;
	slug?: string | null;
	excerpt?: string | null;
} & { __typename: "Post" };

export type QuestionDetailFragment = {
	description?: string | null;
	status?: QuestionStatus | null;
	viewerCanEdit?: boolean | null;
	viewerCanComment?: boolean | null;
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
	id: string;
	title: string;
	audioUrl?: string | null;
	waveform?: any | null;
	count?: number | null;
	createdAt: any;
	author?: CommentInfoFragment_Comment_author_User | null;
} & { __typename: "Question" };

export type QuestionCoreFragment = {
	id: string;
	title: string;
	audioUrl?: string | null;
	waveform?: any | null;
	count?: number | null;
	createdAt: any;
	author?: CommentInfoFragment_Comment_author_User | null;
} & { __typename: "Question" };

export type StackDetailFragment = {
	createdAt: any;
	description?: string | null;
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
	usedByViewer?: boolean | null;
	id: string;
	name: string;
	image?: string | null;
	url: string;
	slug: string;
	count?: number | null;
	usedBy: Array<CommentInfoFragment_Comment_author_User | null>;
	tags: Array<BookmarkDetailFragment_Bookmark_tags_Tag | null>;
} & { __typename: "Stack" };

export type StackCoreFragment = {
	id: string;
	name: string;
	image?: string | null;
	url: string;
	slug: string;
	count?: number | null;
} & { __typename: "Stack" };

export type BlogListItemFragment = {
	id: string;
	title?: string | null;
	date?: any | null;
	slug?: string | null;
	count?: number | null;
} & { __typename: "Blog" };

export type BlogCoreFragment = {
	id: string;
	title?: string | null;
	date?: any | null;
	slug?: string | null;
	count?: number | null;
} & { __typename: "Blog" };

export type BlogDetailFragment = {
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
	id: string;
	title?: string | null;
	date?: any | null;
	slug?: string | null;
	count?: number | null;
} & { __typename: "Blog" };

export type BookmarksConnectionFragment_BookmarksConnection_pageInfo_PageInfo = {
	hasNextPage?: boolean | null;
	totalCount?: number | null;
	endCursor?: string | null;
} & { __typename?: "PageInfo" };

export type BookmarksConnectionFragment_BookmarksConnection_edges_BookmarkEdge_node_Bookmark = {
	id: string;
	url?: string | null;
	host: string;
	title?: string | null;
	description?: string | null;
	faviconUrl?: string | null;
	count?: number | null;
} & { __typename: "Bookmark" };

export type BookmarksConnectionFragment_BookmarksConnection_edges_BookmarkEdge = {
	cursor?: string | null;
	node?: BookmarksConnectionFragment_BookmarksConnection_edges_BookmarkEdge_node_Bookmark | null;
} & { __typename?: "BookmarkEdge" };

export type BookmarksConnectionFragment = {
	pageInfo?: BookmarksConnectionFragment_BookmarksConnection_pageInfo_PageInfo | null;
	edges: Array<BookmarksConnectionFragment_BookmarksConnection_edges_BookmarkEdge | null>;
} & { __typename?: "BookmarksConnection" };

export type BookmarkListItemFragment = {
	id: string;
	url?: string | null;
	host: string;
	title?: string | null;
	description?: string | null;
	faviconUrl?: string | null;
	count?: number | null;
} & { __typename: "Bookmark" };

export type CaseListItemFragment = {
	id: string;
	title?: string | null;
	date?: any | null;
	slug?: string | null;
	count?: number | null;
} & { __typename: "Case" };

export type CaseCoreFragment = {
	id: string;
	title?: string | null;
	date?: any | null;
	slug?: string | null;
	count?: number | null;
} & { __typename: "Case" };

export type CaseDetailFragment = {
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
	id: string;
	title?: string | null;
	date?: any | null;
	slug?: string | null;
	count?: number | null;
} & { __typename: "Case" };

export type PostListItemFragment = {
	id: string;
	publishedAt?: any | null;
	title?: string | null;
	slug?: string | null;
	excerpt?: string | null;
} & { __typename: "Post" };

export type QuestionsConnectionFragment_QuestionsConnection_edges_QuestionEdge_node_Question = {
	id: string;
	title: string;
	audioUrl?: string | null;
	waveform?: any | null;
	count?: number | null;
	createdAt: any;
	author?: CommentInfoFragment_Comment_author_User | null;
} & { __typename: "Question" };

export type QuestionsConnectionFragment_QuestionsConnection_edges_QuestionEdge = {
	cursor?: string | null;
	node?: QuestionsConnectionFragment_QuestionsConnection_edges_QuestionEdge_node_Question | null;
} & { __typename?: "QuestionEdge" };

export type QuestionsConnectionFragment = {
	pageInfo?: BookmarksConnectionFragment_BookmarksConnection_pageInfo_PageInfo | null;
	edges: Array<QuestionsConnectionFragment_QuestionsConnection_edges_QuestionEdge | null>;
} & { __typename?: "QuestionsConnection" };

export type QuestionListItemFragment = {
	id: string;
	title: string;
	audioUrl?: string | null;
	waveform?: any | null;
	count?: number | null;
	createdAt: any;
	author?: CommentInfoFragment_Comment_author_User | null;
} & { __typename: "Question" };

export type StacksConnectionFragment_StacksConnection_edges_StackEdge_node_Stack = {
	id: string;
	name: string;
	image?: string | null;
	url: string;
	slug: string;
	count?: number | null;
} & { __typename: "Stack" };

export type StacksConnectionFragment_StacksConnection_edges_StackEdge = {
	cursor?: string | null;
	node?: StacksConnectionFragment_StacksConnection_edges_StackEdge_node_Stack | null;
} & { __typename?: "StackEdge" };

export type StacksConnectionFragment = {
	pageInfo?: BookmarksConnectionFragment_BookmarksConnection_pageInfo_PageInfo | null;
	edges: Array<StacksConnectionFragment_StacksConnection_edges_StackEdge | null>;
} & { __typename?: "StacksConnection" };

export type StackListItemFragment = {
	id: string;
	name: string;
	image?: string | null;
	url: string;
	slug: string;
	count?: number | null;
} & { __typename: "Stack" };

export type UserSettingsFragment = { email?: string | null; pendingEmail?: string | null } & { __typename?: "User" };

export type EditBookmarkMutation_editBookmark_Bookmark = {
	id: string;
	url?: string | null;
	host: string;
	title?: string | null;
	description?: string | null;
	faviconUrl?: string | null;
	count?: number | null;
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
	tags: Array<BookmarkDetailFragment_Bookmark_tags_Tag | null>;
} & { __typename: "Bookmark" };

export type EditBookmarkMutation_Mutation = { editBookmark?: EditBookmarkMutation_editBookmark_Bookmark | null } & {
	__typename?: "Mutation";
};

export type EditBookmarkMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	data: EditBookmarkInput;
}>;

export type EditBookmarkMutation = EditBookmarkMutation_Mutation;

export type DeleteBookmarkMutation_Mutation = { deleteBookmark?: boolean | null } & { __typename?: "Mutation" };

export type DeleteBookmarkMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteBookmarkMutation = DeleteBookmarkMutation_Mutation;

export type AddBookmarkMutation_Mutation = { addBookmark?: EditBookmarkMutation_editBookmark_Bookmark | null } & {
	__typename?: "Mutation";
};

export type AddBookmarkMutationVariables = Exact<{
	data: AddBookmarkInput;
}>;

export type AddBookmarkMutation = AddBookmarkMutation_Mutation;

export type AddCommentMutation_addComment_Comment = {
	id: string;
	parentId?: string | null;
	createdAt: any;
	updatedAt?: any | null;
	text?: string | null;
	viewerCanEdit?: boolean | null;
	viewerCanDelete?: boolean | null;
	author: CommentInfoFragment_Comment_author_User;
} & { __typename: "Comment" };

export type AddCommentMutation_Mutation = { addComment?: AddCommentMutation_addComment_Comment | null } & {
	__typename?: "Mutation";
};

export type AddCommentMutationVariables = Exact<{
	refId: Scalars["ID"]["input"];
	parentId?: InputMaybe<Scalars["String"]["input"]>;
	type: CommentType;
	text: Scalars["String"]["input"];
}>;

export type AddCommentMutation = AddCommentMutation_Mutation;

export type EditCommentMutation_Mutation = { editComment?: AddCommentMutation_addComment_Comment | null } & {
	__typename?: "Mutation";
};

export type EditCommentMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	text: Scalars["String"]["input"];
}>;

export type EditCommentMutation = EditCommentMutation_Mutation;

export type DeleteCommentMutation_Mutation = { deleteComment?: boolean | null } & { __typename?: "Mutation" };

export type DeleteCommentMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteCommentMutation = DeleteCommentMutation_Mutation;

export type EditPostMutation_editPost_Post = {
	id: string;
	publishedAt?: any | null;
	title?: string | null;
	slug?: string | null;
	excerpt?: string | null;
	text?: string | null;
	featureImage?: string | null;
	reactionCount?: number | null;
	hitRate?: number | null;
	viewerHasReacted?: boolean | null;
} & { __typename: "Post" };

export type EditPostMutation_Mutation = { editPost?: EditPostMutation_editPost_Post | null } & {
	__typename?: "Mutation";
};

export type EditPostMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	data: EditPostInput;
}>;

export type EditPostMutation = EditPostMutation_Mutation;

export type DeletePostMutation_Mutation = { deletePost?: boolean | null } & { __typename?: "Mutation" };

export type DeletePostMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeletePostMutation = DeletePostMutation_Mutation;

export type AddPostMutation_Mutation = { addPost?: EditPostMutation_editPost_Post | null } & {
	__typename?: "Mutation";
};

export type AddPostMutationVariables = Exact<{
	data: AddPostInput;
}>;

export type AddPostMutation = AddPostMutation_Mutation;

export type EditQuestionMutation_editQuestion_Question = {
	id: string;
	title: string;
	audioUrl?: string | null;
	waveform?: any | null;
	count?: number | null;
	createdAt: any;
	description?: string | null;
	status?: QuestionStatus | null;
	viewerCanEdit?: boolean | null;
	viewerCanComment?: boolean | null;
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
	author?: CommentInfoFragment_Comment_author_User | null;
} & { __typename: "Question" };

export type EditQuestionMutation_Mutation = { editQuestion?: EditQuestionMutation_editQuestion_Question | null } & {
	__typename?: "Mutation";
};

export type EditQuestionMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	data: EditQuestionInput;
}>;

export type EditQuestionMutation = EditQuestionMutation_Mutation;

export type DeleteQuestionMutation_Mutation = { deleteQuestion?: boolean | null } & { __typename?: "Mutation" };

export type DeleteQuestionMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteQuestionMutation = DeleteQuestionMutation_Mutation;

export type AddQuestionMutation_Mutation = { addQuestion?: EditQuestionMutation_editQuestion_Question | null } & {
	__typename?: "Mutation";
};

export type AddQuestionMutationVariables = Exact<{
	data: AddQuestionInput;
}>;

export type AddQuestionMutation = AddQuestionMutation_Mutation;

export type ToggleReactionMutation_toggleReaction_BKyHqGdoFdS0AN6p04a0wRih3RXybe8RXjEGPenvWU8 = {
	id: string;
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
} & { __typename?: "Blog" | "Case" | "Event" | "Question" | "Stack" };

export type ToggleReactionMutation_toggleReaction_Bookmark = {
	id: string;
	url?: string | null;
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
} & { __typename?: "Bookmark" };

export type ToggleReactionMutation_toggleReaction_Post = { __typename?: "Post" };

export type ToggleReactionMutation_toggleReaction =
	| ToggleReactionMutation_toggleReaction_BKyHqGdoFdS0AN6p04a0wRih3RXybe8RXjEGPenvWU8
	| ToggleReactionMutation_toggleReaction_Bookmark
	| ToggleReactionMutation_toggleReaction_Post;

export type ToggleReactionMutation_Mutation = { toggleReaction?: ToggleReactionMutation_toggleReaction | null } & {
	__typename?: "Mutation";
};

export type ToggleReactionMutationVariables = Exact<{
	refId: Scalars["ID"]["input"];
	type: ReactionType;
}>;

export type ToggleReactionMutation = ToggleReactionMutation_Mutation;

export type EditStackMutation_editStack_Stack = {
	id: string;
	name: string;
	image?: string | null;
	url: string;
	slug: string;
	count?: number | null;
	createdAt: any;
	description?: string | null;
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
	usedByViewer?: boolean | null;
	usedBy: Array<CommentInfoFragment_Comment_author_User | null>;
	tags: Array<BookmarkDetailFragment_Bookmark_tags_Tag | null>;
} & { __typename: "Stack" };

export type EditStackMutation_Mutation = { editStack?: EditStackMutation_editStack_Stack | null } & {
	__typename?: "Mutation";
};

export type EditStackMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	data: EditStackInput;
}>;

export type EditStackMutation = EditStackMutation_Mutation;

export type DeleteStackMutation_Mutation = { deleteStack?: boolean | null } & { __typename?: "Mutation" };

export type DeleteStackMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type DeleteStackMutation = DeleteStackMutation_Mutation;

export type AddStackMutation_Mutation = { addStack?: EditStackMutation_editStack_Stack | null } & {
	__typename?: "Mutation";
};

export type AddStackMutationVariables = Exact<{
	data: AddStackInput;
}>;

export type AddStackMutation = AddStackMutation_Mutation;

export type ToggleStackUserMutation_toggleStackUser_Stack = {
	id: string;
	name: string;
	image?: string | null;
	url: string;
	slug: string;
	count?: number | null;
	usedBy: Array<CommentInfoFragment_Comment_author_User | null>;
} & { __typename: "Stack" };

export type ToggleStackUserMutation_Mutation = {
	toggleStackUser?: ToggleStackUserMutation_toggleStackUser_Stack | null;
} & { __typename?: "Mutation" };

export type ToggleStackUserMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type ToggleStackUserMutation = ToggleStackUserMutation_Mutation;

export type DeleteUserMutation_Mutation = { deleteUser?: boolean | null } & { __typename?: "Mutation" };

export type DeleteUserMutationVariables = Exact<{ [key: string]: never }>;

export type DeleteUserMutation = DeleteUserMutation_Mutation;

export type EditUserMutation_Mutation = { editUser?: CommentInfoFragment_Comment_author_User | null } & {
	__typename?: "Mutation";
};

export type EditUserMutationVariables = Exact<{
	data?: InputMaybe<EditUserInput>;
}>;

export type EditUserMutation = EditUserMutation_Mutation;

export type AddViewMutation_addView_eehSljCDzEEcfNMHqRY9v5qecvDbkm6GKd0g0pNSfcE = {
	id: string;
	count?: number | null;
} & { __typename?: "Blog" | "Bookmark" | "Question" | "Stack" };

export type AddViewMutation_addView_Case_Event_Post = { __typename?: "Case" | "Event" | "Post" };

export type AddViewMutation_addView =
	| AddViewMutation_addView_eehSljCDzEEcfNMHqRY9v5qecvDbkm6GKd0g0pNSfcE
	| AddViewMutation_addView_Case_Event_Post;

export type AddViewMutation_Mutation = { addView?: AddViewMutation_addView | null } & { __typename?: "Mutation" };

export type AddViewMutationVariables = Exact<{
	refId: Scalars["ID"]["input"];
	type: ViewType;
}>;

export type AddViewMutation = AddViewMutation_Mutation;

export type GetBlogsQuery_blogs_Blog = {
	id: string;
	title?: string | null;
	date?: any | null;
	slug?: string | null;
	count?: number | null;
} & { __typename: "Blog" };

export type GetBlogsQuery_Query = { blogs: Array<GetBlogsQuery_blogs_Blog | null> } & { __typename?: "Query" };

export type GetBlogsQueryVariables = Exact<{ [key: string]: never }>;

export type GetBlogsQuery = GetBlogsQuery_Query;

export type GetBlogQuery_blog_Blog = {
	id: string;
	title?: string | null;
	date?: any | null;
	slug?: string | null;
	count?: number | null;
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
} & { __typename: "Blog" };

export type GetBlogQuery_Query = { blog?: GetBlogQuery_blog_Blog | null } & { __typename?: "Query" };

export type GetBlogQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
}>;

export type GetBlogQuery = GetBlogQuery_Query;

export type GetBookmarksQuery_bookmarks_BookmarksConnection = {
	pageInfo?: BookmarksConnectionFragment_BookmarksConnection_pageInfo_PageInfo | null;
	edges: Array<BookmarksConnectionFragment_BookmarksConnection_edges_BookmarkEdge | null>;
} & { __typename?: "BookmarksConnection" };

export type GetBookmarksQuery_Query = { bookmarks: GetBookmarksQuery_bookmarks_BookmarksConnection } & {
	__typename?: "Query";
};

export type GetBookmarksQueryVariables = Exact<{
	first?: InputMaybe<Scalars["Int"]["input"]>;
	after?: InputMaybe<Scalars["String"]["input"]>;
	filter?: InputMaybe<BookmarkFilter>;
}>;

export type GetBookmarksQuery = GetBookmarksQuery_Query;

export type GetBookmarkQuery_Query = { bookmark?: EditBookmarkMutation_editBookmark_Bookmark | null } & {
	__typename?: "Query";
};

export type GetBookmarkQueryVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type GetBookmarkQuery = GetBookmarkQuery_Query;

export type GetCasesQuery_cases_Case = {
	id: string;
	title?: string | null;
	date?: any | null;
	slug?: string | null;
	count?: number | null;
} & { __typename: "Case" };

export type GetCasesQuery_Query = { cases: Array<GetCasesQuery_cases_Case | null> } & { __typename?: "Query" };

export type GetCasesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCasesQuery = GetCasesQuery_Query;

export type GetCaseQuery_case_Case = {
	id: string;
	title?: string | null;
	date?: any | null;
	slug?: string | null;
	count?: number | null;
	reactionCount?: number | null;
	viewerHasReacted?: boolean | null;
} & { __typename: "Case" };

export type GetCaseQuery_Query = { case?: GetCaseQuery_case_Case | null } & { __typename?: "Query" };

export type GetCaseQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
}>;

export type GetCaseQuery = GetCaseQuery_Query;

export type GetCommentsQuery_Query = { comments: Array<AddCommentMutation_addComment_Comment | null> } & {
	__typename?: "Query";
};

export type GetCommentsQueryVariables = Exact<{
	refId: Scalars["ID"]["input"];
	type: CommentType;
}>;

export type GetCommentsQuery = GetCommentsQuery_Query;

export type GetPostsQuery_posts_Post = {
	id: string;
	publishedAt?: any | null;
	title?: string | null;
	slug?: string | null;
	excerpt?: string | null;
} & { __typename: "Post" };

export type GetPostsQuery_Query = { posts: Array<GetPostsQuery_posts_Post | null> } & { __typename?: "Query" };

export type GetPostsQueryVariables = Exact<{
	filter?: InputMaybe<PostFilter>;
}>;

export type GetPostsQuery = GetPostsQuery_Query;

export type GetPostQuery_Query = { post?: EditPostMutation_editPost_Post | null } & { __typename?: "Query" };

export type GetPostQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
}>;

export type GetPostQuery = GetPostQuery_Query;

export type GetQuestionsQuery_questions_QuestionsConnection = {
	pageInfo?: BookmarksConnectionFragment_BookmarksConnection_pageInfo_PageInfo | null;
	edges: Array<QuestionsConnectionFragment_QuestionsConnection_edges_QuestionEdge | null>;
} & { __typename?: "QuestionsConnection" };

export type GetQuestionsQuery_Query = { questions: GetQuestionsQuery_questions_QuestionsConnection } & {
	__typename?: "Query";
};

export type GetQuestionsQueryVariables = Exact<{
	first?: InputMaybe<Scalars["Int"]["input"]>;
	after?: InputMaybe<Scalars["String"]["input"]>;
	filter?: InputMaybe<QuestionFilter>;
}>;

export type GetQuestionsQuery = GetQuestionsQuery_Query;

export type GetQuestionQuery_Query = { question?: EditQuestionMutation_editQuestion_Question | null } & {
	__typename?: "Query";
};

export type GetQuestionQueryVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type GetQuestionQuery = GetQuestionQuery_Query;

export type GetStacksQuery_stacks_StacksConnection = {
	pageInfo?: BookmarksConnectionFragment_BookmarksConnection_pageInfo_PageInfo | null;
	edges: Array<StacksConnectionFragment_StacksConnection_edges_StackEdge | null>;
} & { __typename?: "StacksConnection" };

export type GetStacksQuery_Query = { stacks: GetStacksQuery_stacks_StacksConnection } & { __typename?: "Query" };

export type GetStacksQueryVariables = Exact<{
	first?: InputMaybe<Scalars["Int"]["input"]>;
	after?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetStacksQuery = GetStacksQuery_Query;

export type GetStackQuery_Query = { stack?: EditStackMutation_editStack_Stack | null } & { __typename?: "Query" };

export type GetStackQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
}>;

export type GetStackQuery = GetStackQuery_Query;

export type GetTagsQuery_Query = { tags: Array<BookmarkDetailFragment_Bookmark_tags_Tag | null> } & {
	__typename?: "Query";
};

export type GetTagsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTagsQuery = GetTagsQuery_Query;

export type GetUserQuery_Query = { user?: CommentInfoFragment_Comment_author_User | null } & { __typename?: "Query" };

export type GetUserQueryVariables = Exact<{
	username: Scalars["String"]["input"];
}>;

export type GetUserQuery = GetUserQuery_Query;

export type ViewerQuery_Query = { viewer?: CommentInfoFragment_Comment_author_User | null } & { __typename?: "Query" };

export type ViewerQueryVariables = Exact<{ [key: string]: never }>;

export type ViewerQuery = ViewerQuery_Query;

export type GetViewerWithSettingsQuery_viewer_User = {
	id: string;
	username?: string | null;
	image?: string | null;
	name?: string | null;
	role?: UserRole | null;
	isViewer?: boolean | null;
	isAdmin?: boolean | null;
	email?: string | null;
	pendingEmail?: string | null;
} & { __typename: "User" };

export type GetViewerWithSettingsQuery_Query = { viewer?: GetViewerWithSettingsQuery_viewer_User | null } & {
	__typename?: "Query";
};

export type GetViewerWithSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type GetViewerWithSettingsQuery = GetViewerWithSettingsQuery_Query;

export const DirtyAssBlogCoreFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BlogCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Blog" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "date" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssBlogListItemFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BlogListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Blog" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BlogCore" } }],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BlogCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Blog" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "date" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssBlogDetailFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BlogDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Blog" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "BlogCore" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BlogCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Blog" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "date" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssBookmarkCoreFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "host" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "faviconUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssBookmarkDetailFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkCore" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "tags" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "host" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "faviconUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssBookmarkListItemFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkCore" } }],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "host" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "faviconUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssBookmarksConnectionFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarksConnection" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BookmarksConnection" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "pageInfo" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
								{ kind: "Field", name: { kind: "Name", value: "totalCount" } },
								{ kind: "Field", name: { kind: "Name", value: "endCursor" } },
							],
						},
					},
					{
						kind: "Field",
						name: { kind: "Name", value: "edges" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "cursor" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "node" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkListItem" } }],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "host" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "faviconUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkCore" } }],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssCaseCoreFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CaseCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Case" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "date" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssCaseListItemFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CaseListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Case" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CaseCore" } }],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CaseCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Case" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "date" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssCaseDetailFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CaseDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Case" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "CaseCore" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CaseCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Case" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "date" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssUserInfoFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssCommentInfoFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CommentInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Comment" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "parentId" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{ kind: "Field", name: { kind: "Name", value: "updatedAt" } },
					{ kind: "Field", name: { kind: "Name", value: "text" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanEdit" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanDelete" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssEventCoreFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "EventCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Event" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssEventListItemFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "EventListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Event" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "EventCore" } }],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "EventCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Event" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssEventDetailFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "EventDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Event" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "EventCore" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "EventCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Event" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssPostCoreFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "publishedAt" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "excerpt" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssPostListItemFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PostCore" } }],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "publishedAt" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "excerpt" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssPostDetailFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "PostCore" } },
					{ kind: "Field", name: { kind: "Name", value: "text" } },
					{ kind: "Field", name: { kind: "Name", value: "featureImage" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "hitRate" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "publishedAt" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "excerpt" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssQuestionCoreFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "audioUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "waveform" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssQuestionDetailFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionCore" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "status" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanEdit" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanComment" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "audioUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "waveform" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssQuestionListItemFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionCore" } }],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "audioUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "waveform" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssQuestionsConnectionFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionsConnection" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "QuestionsConnection" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "pageInfo" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
								{ kind: "Field", name: { kind: "Name", value: "totalCount" } },
								{ kind: "Field", name: { kind: "Name", value: "endCursor" } },
							],
						},
					},
					{
						kind: "Field",
						name: { kind: "Name", value: "edges" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "cursor" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "node" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionListItem" } }],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "audioUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "waveform" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionCore" } }],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssStackCoreFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssStackDetailFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "StackCore" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
					{ kind: "Field", name: { kind: "Name", value: "usedByViewer" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "usedBy" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
					{
						kind: "Field",
						name: { kind: "Name", value: "tags" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssStackListItemFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StackCore" } }],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssStacksConnectionFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StacksConnection" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "StacksConnection" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "pageInfo" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
								{ kind: "Field", name: { kind: "Name", value: "totalCount" } },
								{ kind: "Field", name: { kind: "Name", value: "endCursor" } },
							],
						},
					},
					{
						kind: "Field",
						name: { kind: "Name", value: "edges" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "cursor" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "node" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StackListItem" } }],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StackCore" } }],
			},
		},
	],
} as unknown as DocumentNode;
export const DirtyAssUserSettingsFragmentDoc = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserSettings" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "email" } },
					{ kind: "Field", name: { kind: "Name", value: "pendingEmail" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export const EditBookmarkDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "editBookmark" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "EditBookmarkInput" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "editBookmark" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "data" },
								value: { kind: "Variable", name: { kind: "Name", value: "data" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "host" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "faviconUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkCore" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "tags" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export type EditBookmarkMutationFn = Apollo.MutationFunction<EditBookmarkMutation, EditBookmarkMutationVariables>;
export function useEditBookmarkMutation(
	baseOptions?: Apollo.MutationHookOptions<EditBookmarkMutation, EditBookmarkMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<EditBookmarkMutation, EditBookmarkMutationVariables>(EditBookmarkDocument, options);
}
export type EditBookmarkMutationHookResult = ReturnType<typeof useEditBookmarkMutation>;
export type EditBookmarkMutationResult = Apollo.MutationResult<EditBookmarkMutation>;
export type EditBookmarkMutationOptions = Apollo.BaseMutationOptions<
	EditBookmarkMutation,
	EditBookmarkMutationVariables
>;
export const DeleteBookmarkDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "deleteBookmark" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "deleteBookmark" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export type DeleteBookmarkMutationFn = Apollo.MutationFunction<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>;
export function useDeleteBookmarkMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>(DeleteBookmarkDocument, options);
}
export type DeleteBookmarkMutationHookResult = ReturnType<typeof useDeleteBookmarkMutation>;
export type DeleteBookmarkMutationResult = Apollo.MutationResult<DeleteBookmarkMutation>;
export type DeleteBookmarkMutationOptions = Apollo.BaseMutationOptions<
	DeleteBookmarkMutation,
	DeleteBookmarkMutationVariables
>;
export const AddBookmarkDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "addBookmark" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "AddBookmarkInput" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "addBookmark" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "data" },
								value: { kind: "Variable", name: { kind: "Name", value: "data" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "host" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "faviconUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkCore" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "tags" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export type AddBookmarkMutationFn = Apollo.MutationFunction<AddBookmarkMutation, AddBookmarkMutationVariables>;
export function useAddBookmarkMutation(
	baseOptions?: Apollo.MutationHookOptions<AddBookmarkMutation, AddBookmarkMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<AddBookmarkMutation, AddBookmarkMutationVariables>(AddBookmarkDocument, options);
}
export type AddBookmarkMutationHookResult = ReturnType<typeof useAddBookmarkMutation>;
export type AddBookmarkMutationResult = Apollo.MutationResult<AddBookmarkMutation>;
export type AddBookmarkMutationOptions = Apollo.BaseMutationOptions<AddBookmarkMutation, AddBookmarkMutationVariables>;
export const AddCommentDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "addComment" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "refId" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "parentId" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "CommentType" } } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "text" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "addComment" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "refId" },
								value: { kind: "Variable", name: { kind: "Name", value: "refId" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "parentId" },
								value: { kind: "Variable", name: { kind: "Name", value: "parentId" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "type" },
								value: { kind: "Variable", name: { kind: "Name", value: "type" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "text" },
								value: { kind: "Variable", name: { kind: "Name", value: "text" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CommentInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CommentInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Comment" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "parentId" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{ kind: "Field", name: { kind: "Name", value: "updatedAt" } },
					{ kind: "Field", name: { kind: "Name", value: "text" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanEdit" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanDelete" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;
export function useAddCommentMutation(
	baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
}
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const EditCommentDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "editComment" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "text" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "editComment" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "text" },
								value: { kind: "Variable", name: { kind: "Name", value: "text" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CommentInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CommentInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Comment" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "parentId" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{ kind: "Field", name: { kind: "Name", value: "updatedAt" } },
					{ kind: "Field", name: { kind: "Name", value: "text" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanEdit" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanDelete" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export type EditCommentMutationFn = Apollo.MutationFunction<EditCommentMutation, EditCommentMutationVariables>;
export function useEditCommentMutation(
	baseOptions?: Apollo.MutationHookOptions<EditCommentMutation, EditCommentMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<EditCommentMutation, EditCommentMutationVariables>(EditCommentDocument, options);
}
export type EditCommentMutationHookResult = ReturnType<typeof useEditCommentMutation>;
export type EditCommentMutationResult = Apollo.MutationResult<EditCommentMutation>;
export type EditCommentMutationOptions = Apollo.BaseMutationOptions<EditCommentMutation, EditCommentMutationVariables>;
export const DeleteCommentDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "deleteComment" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "deleteComment" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;
export function useDeleteCommentMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
}
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<
	DeleteCommentMutation,
	DeleteCommentMutationVariables
>;
export const EditPostDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "editPost" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "EditPostInput" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "editPost" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "data" },
								value: { kind: "Variable", name: { kind: "Name", value: "data" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PostDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "publishedAt" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "excerpt" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "PostCore" } },
					{ kind: "Field", name: { kind: "Name", value: "text" } },
					{ kind: "Field", name: { kind: "Name", value: "featureImage" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "hitRate" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export type EditPostMutationFn = Apollo.MutationFunction<EditPostMutation, EditPostMutationVariables>;
export function useEditPostMutation(
	baseOptions?: Apollo.MutationHookOptions<EditPostMutation, EditPostMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<EditPostMutation, EditPostMutationVariables>(EditPostDocument, options);
}
export type EditPostMutationHookResult = ReturnType<typeof useEditPostMutation>;
export type EditPostMutationResult = Apollo.MutationResult<EditPostMutation>;
export type EditPostMutationOptions = Apollo.BaseMutationOptions<EditPostMutation, EditPostMutationVariables>;
export const DeletePostDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "deletePost" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "deletePost" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;
export function useDeletePostMutation(
	baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
}
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const AddPostDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "addPost" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "AddPostInput" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "addPost" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "data" },
								value: { kind: "Variable", name: { kind: "Name", value: "data" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PostDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "publishedAt" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "excerpt" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "PostCore" } },
					{ kind: "Field", name: { kind: "Name", value: "text" } },
					{ kind: "Field", name: { kind: "Name", value: "featureImage" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "hitRate" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;
export function useAddPostMutation(
	baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, options);
}
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const EditQuestionDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "editQuestion" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
					type: {
						kind: "NonNullType",
						type: { kind: "NamedType", name: { kind: "Name", value: "EditQuestionInput" } },
					},
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "editQuestion" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "data" },
								value: { kind: "Variable", name: { kind: "Name", value: "data" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "audioUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "waveform" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionCore" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "status" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanEdit" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanComment" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export type EditQuestionMutationFn = Apollo.MutationFunction<EditQuestionMutation, EditQuestionMutationVariables>;
export function useEditQuestionMutation(
	baseOptions?: Apollo.MutationHookOptions<EditQuestionMutation, EditQuestionMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<EditQuestionMutation, EditQuestionMutationVariables>(EditQuestionDocument, options);
}
export type EditQuestionMutationHookResult = ReturnType<typeof useEditQuestionMutation>;
export type EditQuestionMutationResult = Apollo.MutationResult<EditQuestionMutation>;
export type EditQuestionMutationOptions = Apollo.BaseMutationOptions<
	EditQuestionMutation,
	EditQuestionMutationVariables
>;
export const DeleteQuestionDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "deleteQuestion" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "deleteQuestion" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export type DeleteQuestionMutationFn = Apollo.MutationFunction<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export function useDeleteQuestionMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteQuestionMutation, DeleteQuestionMutationVariables>(DeleteQuestionDocument, options);
}
export type DeleteQuestionMutationHookResult = ReturnType<typeof useDeleteQuestionMutation>;
export type DeleteQuestionMutationResult = Apollo.MutationResult<DeleteQuestionMutation>;
export type DeleteQuestionMutationOptions = Apollo.BaseMutationOptions<
	DeleteQuestionMutation,
	DeleteQuestionMutationVariables
>;
export const AddQuestionDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "addQuestion" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "AddQuestionInput" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "addQuestion" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "data" },
								value: { kind: "Variable", name: { kind: "Name", value: "data" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "audioUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "waveform" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionCore" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "status" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanEdit" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanComment" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export type AddQuestionMutationFn = Apollo.MutationFunction<AddQuestionMutation, AddQuestionMutationVariables>;
export function useAddQuestionMutation(
	baseOptions?: Apollo.MutationHookOptions<AddQuestionMutation, AddQuestionMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<AddQuestionMutation, AddQuestionMutationVariables>(AddQuestionDocument, options);
}
export type AddQuestionMutationHookResult = ReturnType<typeof useAddQuestionMutation>;
export type AddQuestionMutationResult = Apollo.MutationResult<AddQuestionMutation>;
export type AddQuestionMutationOptions = Apollo.BaseMutationOptions<AddQuestionMutation, AddQuestionMutationVariables>;
export const ToggleReactionDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "toggleReaction" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "refId" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ReactionType" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "toggleReaction" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "refId" },
								value: { kind: "Variable", name: { kind: "Name", value: "refId" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "type" },
								value: { kind: "Variable", name: { kind: "Name", value: "type" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "InlineFragment",
									typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "id" } },
											{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
											{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
										],
									},
								},
								{
									kind: "InlineFragment",
									typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "id" } },
											{ kind: "Field", name: { kind: "Name", value: "url" } },
											{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
											{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
										],
									},
								},
								{
									kind: "InlineFragment",
									typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "id" } },
											{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
											{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
										],
									},
								},
								{
									kind: "InlineFragment",
									typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Blog" } },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "id" } },
											{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
											{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
										],
									},
								},
								{
									kind: "InlineFragment",
									typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Event" } },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "id" } },
											{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
											{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
										],
									},
								},
								{
									kind: "InlineFragment",
									typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Case" } },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "id" } },
											{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
											{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export type ToggleReactionMutationFn = Apollo.MutationFunction<ToggleReactionMutation, ToggleReactionMutationVariables>;
export function useToggleReactionMutation(
	baseOptions?: Apollo.MutationHookOptions<ToggleReactionMutation, ToggleReactionMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<ToggleReactionMutation, ToggleReactionMutationVariables>(ToggleReactionDocument, options);
}
export type ToggleReactionMutationHookResult = ReturnType<typeof useToggleReactionMutation>;
export type ToggleReactionMutationResult = Apollo.MutationResult<ToggleReactionMutation>;
export type ToggleReactionMutationOptions = Apollo.BaseMutationOptions<
	ToggleReactionMutation,
	ToggleReactionMutationVariables
>;
export const EditStackDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "editStack" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "EditStackInput" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "editStack" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "data" },
								value: { kind: "Variable", name: { kind: "Name", value: "data" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StackDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "StackCore" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
					{ kind: "Field", name: { kind: "Name", value: "usedByViewer" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "usedBy" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
					{
						kind: "Field",
						name: { kind: "Name", value: "tags" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export type EditStackMutationFn = Apollo.MutationFunction<EditStackMutation, EditStackMutationVariables>;
export function useEditStackMutation(
	baseOptions?: Apollo.MutationHookOptions<EditStackMutation, EditStackMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<EditStackMutation, EditStackMutationVariables>(EditStackDocument, options);
}
export type EditStackMutationHookResult = ReturnType<typeof useEditStackMutation>;
export type EditStackMutationResult = Apollo.MutationResult<EditStackMutation>;
export type EditStackMutationOptions = Apollo.BaseMutationOptions<EditStackMutation, EditStackMutationVariables>;
export const DeleteStackDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "deleteStack" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "deleteStack" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
						],
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export type DeleteStackMutationFn = Apollo.MutationFunction<DeleteStackMutation, DeleteStackMutationVariables>;
export function useDeleteStackMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteStackMutation, DeleteStackMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteStackMutation, DeleteStackMutationVariables>(DeleteStackDocument, options);
}
export type DeleteStackMutationHookResult = ReturnType<typeof useDeleteStackMutation>;
export type DeleteStackMutationResult = Apollo.MutationResult<DeleteStackMutation>;
export type DeleteStackMutationOptions = Apollo.BaseMutationOptions<DeleteStackMutation, DeleteStackMutationVariables>;
export const AddStackDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "addStack" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "AddStackInput" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "addStack" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "data" },
								value: { kind: "Variable", name: { kind: "Name", value: "data" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StackDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "StackCore" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
					{ kind: "Field", name: { kind: "Name", value: "usedByViewer" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "usedBy" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
					{
						kind: "Field",
						name: { kind: "Name", value: "tags" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export type AddStackMutationFn = Apollo.MutationFunction<AddStackMutation, AddStackMutationVariables>;
export function useAddStackMutation(
	baseOptions?: Apollo.MutationHookOptions<AddStackMutation, AddStackMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<AddStackMutation, AddStackMutationVariables>(AddStackDocument, options);
}
export type AddStackMutationHookResult = ReturnType<typeof useAddStackMutation>;
export type AddStackMutationResult = Apollo.MutationResult<AddStackMutation>;
export type AddStackMutationOptions = Apollo.BaseMutationOptions<AddStackMutation, AddStackMutationVariables>;
export const ToggleStackUserDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "toggleStackUser" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "toggleStackUser" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "FragmentSpread", name: { kind: "Name", value: "StackCore" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "usedBy" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export type ToggleStackUserMutationFn = Apollo.MutationFunction<
	ToggleStackUserMutation,
	ToggleStackUserMutationVariables
>;
export function useToggleStackUserMutation(
	baseOptions?: Apollo.MutationHookOptions<ToggleStackUserMutation, ToggleStackUserMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<ToggleStackUserMutation, ToggleStackUserMutationVariables>(
		ToggleStackUserDocument,
		options,
	);
}
export type ToggleStackUserMutationHookResult = ReturnType<typeof useToggleStackUserMutation>;
export type ToggleStackUserMutationResult = Apollo.MutationResult<ToggleStackUserMutation>;
export type ToggleStackUserMutationOptions = Apollo.BaseMutationOptions<
	ToggleStackUserMutation,
	ToggleStackUserMutationVariables
>;
export const DeleteUserDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "deleteUser" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "Field", name: { kind: "Name", value: "deleteUser" } }],
			},
		},
	],
} as unknown as DocumentNode;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export function useDeleteUserMutation(
	baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
}
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const EditUserDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "editUser" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "EditUserInput" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "editUser" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "data" },
								value: { kind: "Variable", name: { kind: "Name", value: "data" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;
export function useEditUserMutation(
	baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
}
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const AddViewDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "mutation",
			name: { kind: "Name", value: "addView" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "refId" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ViewType" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "addView" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "refId" },
								value: { kind: "Variable", name: { kind: "Name", value: "refId" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "type" },
								value: { kind: "Variable", name: { kind: "Name", value: "type" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "InlineFragment",
									typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "id" } },
											{ kind: "Field", name: { kind: "Name", value: "count" } },
										],
									},
								},
								{
									kind: "InlineFragment",
									typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "id" } },
											{ kind: "Field", name: { kind: "Name", value: "count" } },
										],
									},
								},
								{
									kind: "InlineFragment",
									typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "id" } },
											{ kind: "Field", name: { kind: "Name", value: "count" } },
										],
									},
								},
								{
									kind: "InlineFragment",
									typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Blog" } },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{ kind: "Field", name: { kind: "Name", value: "id" } },
											{ kind: "Field", name: { kind: "Name", value: "count" } },
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export type AddViewMutationFn = Apollo.MutationFunction<AddViewMutation, AddViewMutationVariables>;
export function useAddViewMutation(
	baseOptions?: Apollo.MutationHookOptions<AddViewMutation, AddViewMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<AddViewMutation, AddViewMutationVariables>(AddViewDocument, options);
}
export type AddViewMutationHookResult = ReturnType<typeof useAddViewMutation>;
export type AddViewMutationResult = Apollo.MutationResult<AddViewMutation>;
export type AddViewMutationOptions = Apollo.BaseMutationOptions<AddViewMutation, AddViewMutationVariables>;
export const GetBlogsDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getBlogs" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "blogs" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BlogListItem" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BlogCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Blog" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "date" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BlogListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Blog" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BlogCore" } }],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, options);
}
export function useGetBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, options);
}
export function useGetBlogsSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, options);
}
export type GetBlogsQueryHookResult = ReturnType<typeof useGetBlogsQuery>;
export type GetBlogsLazyQueryHookResult = ReturnType<typeof useGetBlogsLazyQuery>;
export type GetBlogsSuspenseQueryHookResult = ReturnType<typeof useGetBlogsSuspenseQuery>;
export type GetBlogsQueryResult = Apollo.QueryResult<GetBlogsQuery, GetBlogsQueryVariables>;
export function refetchGetBlogsQuery(variables?: GetBlogsQueryVariables) {
	return { query: GetBlogsDocument, variables: variables };
}
export const GetBlogDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getBlog" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "blog" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "slug" },
								value: { kind: "Variable", name: { kind: "Name", value: "slug" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BlogDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BlogCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Blog" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "date" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BlogDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Blog" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "BlogCore" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetBlogQuery(
	baseOptions: Apollo.QueryHookOptions<GetBlogQuery, GetBlogQueryVariables> &
		({ variables: GetBlogQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetBlogQuery, GetBlogQueryVariables>(GetBlogDocument, options);
}
export function useGetBlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogQuery, GetBlogQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetBlogQuery, GetBlogQueryVariables>(GetBlogDocument, options);
}
export function useGetBlogSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogQuery, GetBlogQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetBlogQuery, GetBlogQueryVariables>(GetBlogDocument, options);
}
export type GetBlogQueryHookResult = ReturnType<typeof useGetBlogQuery>;
export type GetBlogLazyQueryHookResult = ReturnType<typeof useGetBlogLazyQuery>;
export type GetBlogSuspenseQueryHookResult = ReturnType<typeof useGetBlogSuspenseQuery>;
export type GetBlogQueryResult = Apollo.QueryResult<GetBlogQuery, GetBlogQueryVariables>;
export function refetchGetBlogQuery(variables: GetBlogQueryVariables) {
	return { query: GetBlogDocument, variables: variables };
}
export const GetBookmarksDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getBookmarks" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "filter" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "BookmarkFilter" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "bookmarks" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "first" },
								value: { kind: "Variable", name: { kind: "Name", value: "first" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "after" },
								value: { kind: "Variable", name: { kind: "Name", value: "after" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "filter" },
								value: { kind: "Variable", name: { kind: "Name", value: "filter" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarksConnection" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "host" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "faviconUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkCore" } }],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarksConnection" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BookmarksConnection" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "pageInfo" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
								{ kind: "Field", name: { kind: "Name", value: "totalCount" } },
								{ kind: "Field", name: { kind: "Name", value: "endCursor" } },
							],
						},
					},
					{
						kind: "Field",
						name: { kind: "Name", value: "edges" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "cursor" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "node" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkListItem" } }],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetBookmarksQuery(
	baseOptions?: Apollo.QueryHookOptions<GetBookmarksQuery, GetBookmarksQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(GetBookmarksDocument, options);
}
export function useGetBookmarksLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetBookmarksQuery, GetBookmarksQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(GetBookmarksDocument, options);
}
export function useGetBookmarksSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetBookmarksQuery, GetBookmarksQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetBookmarksQuery, GetBookmarksQueryVariables>(GetBookmarksDocument, options);
}
export type GetBookmarksQueryHookResult = ReturnType<typeof useGetBookmarksQuery>;
export type GetBookmarksLazyQueryHookResult = ReturnType<typeof useGetBookmarksLazyQuery>;
export type GetBookmarksSuspenseQueryHookResult = ReturnType<typeof useGetBookmarksSuspenseQuery>;
export type GetBookmarksQueryResult = Apollo.QueryResult<GetBookmarksQuery, GetBookmarksQueryVariables>;
export function refetchGetBookmarksQuery(variables?: GetBookmarksQueryVariables) {
	return { query: GetBookmarksDocument, variables: variables };
}
export const GetBookmarkDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getBookmark" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "bookmark" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "host" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "faviconUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "BookmarkDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Bookmark" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "BookmarkCore" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "tags" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetBookmarkQuery(
	baseOptions: Apollo.QueryHookOptions<GetBookmarkQuery, GetBookmarkQueryVariables> &
		({ variables: GetBookmarkQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetBookmarkQuery, GetBookmarkQueryVariables>(GetBookmarkDocument, options);
}
export function useGetBookmarkLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetBookmarkQuery, GetBookmarkQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetBookmarkQuery, GetBookmarkQueryVariables>(GetBookmarkDocument, options);
}
export function useGetBookmarkSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetBookmarkQuery, GetBookmarkQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetBookmarkQuery, GetBookmarkQueryVariables>(GetBookmarkDocument, options);
}
export type GetBookmarkQueryHookResult = ReturnType<typeof useGetBookmarkQuery>;
export type GetBookmarkLazyQueryHookResult = ReturnType<typeof useGetBookmarkLazyQuery>;
export type GetBookmarkSuspenseQueryHookResult = ReturnType<typeof useGetBookmarkSuspenseQuery>;
export type GetBookmarkQueryResult = Apollo.QueryResult<GetBookmarkQuery, GetBookmarkQueryVariables>;
export function refetchGetBookmarkQuery(variables: GetBookmarkQueryVariables) {
	return { query: GetBookmarkDocument, variables: variables };
}
export const GetCasesDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getCases" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "cases" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CaseListItem" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CaseCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Case" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "date" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CaseListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Case" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CaseCore" } }],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetCasesQuery(baseOptions?: Apollo.QueryHookOptions<GetCasesQuery, GetCasesQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetCasesQuery, GetCasesQueryVariables>(GetCasesDocument, options);
}
export function useGetCasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCasesQuery, GetCasesQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetCasesQuery, GetCasesQueryVariables>(GetCasesDocument, options);
}
export function useGetCasesSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetCasesQuery, GetCasesQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetCasesQuery, GetCasesQueryVariables>(GetCasesDocument, options);
}
export type GetCasesQueryHookResult = ReturnType<typeof useGetCasesQuery>;
export type GetCasesLazyQueryHookResult = ReturnType<typeof useGetCasesLazyQuery>;
export type GetCasesSuspenseQueryHookResult = ReturnType<typeof useGetCasesSuspenseQuery>;
export type GetCasesQueryResult = Apollo.QueryResult<GetCasesQuery, GetCasesQueryVariables>;
export function refetchGetCasesQuery(variables?: GetCasesQueryVariables) {
	return { query: GetCasesDocument, variables: variables };
}
export const GetCaseDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getCase" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "case" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "slug" },
								value: { kind: "Variable", name: { kind: "Name", value: "slug" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CaseDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CaseCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Case" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "date" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CaseDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Case" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "CaseCore" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetCaseQuery(
	baseOptions: Apollo.QueryHookOptions<GetCaseQuery, GetCaseQueryVariables> &
		({ variables: GetCaseQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetCaseQuery, GetCaseQueryVariables>(GetCaseDocument, options);
}
export function useGetCaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCaseQuery, GetCaseQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetCaseQuery, GetCaseQueryVariables>(GetCaseDocument, options);
}
export function useGetCaseSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetCaseQuery, GetCaseQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetCaseQuery, GetCaseQueryVariables>(GetCaseDocument, options);
}
export type GetCaseQueryHookResult = ReturnType<typeof useGetCaseQuery>;
export type GetCaseLazyQueryHookResult = ReturnType<typeof useGetCaseLazyQuery>;
export type GetCaseSuspenseQueryHookResult = ReturnType<typeof useGetCaseSuspenseQuery>;
export type GetCaseQueryResult = Apollo.QueryResult<GetCaseQuery, GetCaseQueryVariables>;
export function refetchGetCaseQuery(variables: GetCaseQueryVariables) {
	return { query: GetCaseDocument, variables: variables };
}
export const GetCommentsDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getComments" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "refId" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "CommentType" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "comments" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "refId" },
								value: { kind: "Variable", name: { kind: "Name", value: "refId" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "type" },
								value: { kind: "Variable", name: { kind: "Name", value: "type" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CommentInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "CommentInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Comment" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "parentId" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{ kind: "Field", name: { kind: "Name", value: "updatedAt" } },
					{ kind: "Field", name: { kind: "Name", value: "text" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanEdit" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanDelete" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetCommentsQuery(
	baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables> &
		({ variables: GetCommentsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
}
export function useGetCommentsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
}
export function useGetCommentsSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
}
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsSuspenseQueryHookResult = ReturnType<typeof useGetCommentsSuspenseQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export function refetchGetCommentsQuery(variables: GetCommentsQueryVariables) {
	return { query: GetCommentsDocument, variables: variables };
}
export const GetPostsDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getPosts" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "filter" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "PostFilter" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "posts" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "filter" },
								value: { kind: "Variable", name: { kind: "Name", value: "filter" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PostListItem" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "publishedAt" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "excerpt" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PostCore" } }],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
}
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
}
export function useGetPostsSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsSuspenseQueryHookResult = ReturnType<typeof useGetPostsSuspenseQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export function refetchGetPostsQuery(variables?: GetPostsQueryVariables) {
	return { query: GetPostsDocument, variables: variables };
}
export const GetPostDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getPost" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "post" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "slug" },
								value: { kind: "Variable", name: { kind: "Name", value: "slug" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PostDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "publishedAt" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "excerpt" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "PostDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Post" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "PostCore" } },
					{ kind: "Field", name: { kind: "Name", value: "text" } },
					{ kind: "Field", name: { kind: "Name", value: "featureImage" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "hitRate" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetPostQuery(
	baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables> &
		({ variables: GetPostQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
}
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
}
export function useGetPostSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostQuery, GetPostQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostSuspenseQueryHookResult = ReturnType<typeof useGetPostSuspenseQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export function refetchGetPostQuery(variables: GetPostQueryVariables) {
	return { query: GetPostDocument, variables: variables };
}
export const GetQuestionsDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getQuestions" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "filter" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "QuestionFilter" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "questions" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "first" },
								value: { kind: "Variable", name: { kind: "Name", value: "first" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "after" },
								value: { kind: "Variable", name: { kind: "Name", value: "after" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "filter" },
								value: { kind: "Variable", name: { kind: "Name", value: "filter" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionsConnection" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "audioUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "waveform" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionCore" } }],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionsConnection" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "QuestionsConnection" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "pageInfo" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
								{ kind: "Field", name: { kind: "Name", value: "totalCount" } },
								{ kind: "Field", name: { kind: "Name", value: "endCursor" } },
							],
						},
					},
					{
						kind: "Field",
						name: { kind: "Name", value: "edges" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "cursor" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "node" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionListItem" } }],
									},
								},
							],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetQuestionsQuery(
	baseOptions?: Apollo.QueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
}
export function useGetQuestionsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
}
export function useGetQuestionsSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
}
export type GetQuestionsQueryHookResult = ReturnType<typeof useGetQuestionsQuery>;
export type GetQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuestionsLazyQuery>;
export type GetQuestionsSuspenseQueryHookResult = ReturnType<typeof useGetQuestionsSuspenseQuery>;
export type GetQuestionsQueryResult = Apollo.QueryResult<GetQuestionsQuery, GetQuestionsQueryVariables>;
export function refetchGetQuestionsQuery(variables?: GetQuestionsQueryVariables) {
	return { query: GetQuestionsDocument, variables: variables };
}
export const GetQuestionDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getQuestion" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "question" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "id" },
								value: { kind: "Variable", name: { kind: "Name", value: "id" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "title" } },
					{ kind: "Field", name: { kind: "Name", value: "audioUrl" } },
					{ kind: "Field", name: { kind: "Name", value: "waveform" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "author" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "QuestionDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Question" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "QuestionCore" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "status" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanEdit" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerCanComment" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetQuestionQuery(
	baseOptions: Apollo.QueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables> &
		({ variables: GetQuestionQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetQuestionQuery, GetQuestionQueryVariables>(GetQuestionDocument, options);
}
export function useGetQuestionLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetQuestionQuery, GetQuestionQueryVariables>(GetQuestionDocument, options);
}
export function useGetQuestionSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetQuestionQuery, GetQuestionQueryVariables>(GetQuestionDocument, options);
}
export type GetQuestionQueryHookResult = ReturnType<typeof useGetQuestionQuery>;
export type GetQuestionLazyQueryHookResult = ReturnType<typeof useGetQuestionLazyQuery>;
export type GetQuestionSuspenseQueryHookResult = ReturnType<typeof useGetQuestionSuspenseQuery>;
export type GetQuestionQueryResult = Apollo.QueryResult<GetQuestionQuery, GetQuestionQueryVariables>;
export function refetchGetQuestionQuery(variables: GetQuestionQueryVariables) {
	return { query: GetQuestionDocument, variables: variables };
}
export const GetStacksDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getStacks" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
				},
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
					type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "stacks" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "first" },
								value: { kind: "Variable", name: { kind: "Name", value: "first" } },
							},
							{
								kind: "Argument",
								name: { kind: "Name", value: "after" },
								value: { kind: "Variable", name: { kind: "Name", value: "after" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StacksConnection" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackListItem" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StackCore" } }],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StacksConnection" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "StacksConnection" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "pageInfo" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "hasNextPage" } },
								{ kind: "Field", name: { kind: "Name", value: "totalCount" } },
								{ kind: "Field", name: { kind: "Name", value: "endCursor" } },
							],
						},
					},
					{
						kind: "Field",
						name: { kind: "Name", value: "edges" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "cursor" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "node" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StackListItem" } }],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetStacksQuery(baseOptions?: Apollo.QueryHookOptions<GetStacksQuery, GetStacksQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetStacksQuery, GetStacksQueryVariables>(GetStacksDocument, options);
}
export function useGetStacksLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetStacksQuery, GetStacksQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetStacksQuery, GetStacksQueryVariables>(GetStacksDocument, options);
}
export function useGetStacksSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetStacksQuery, GetStacksQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetStacksQuery, GetStacksQueryVariables>(GetStacksDocument, options);
}
export type GetStacksQueryHookResult = ReturnType<typeof useGetStacksQuery>;
export type GetStacksLazyQueryHookResult = ReturnType<typeof useGetStacksLazyQuery>;
export type GetStacksSuspenseQueryHookResult = ReturnType<typeof useGetStacksSuspenseQuery>;
export type GetStacksQueryResult = Apollo.QueryResult<GetStacksQuery, GetStacksQueryVariables>;
export function refetchGetStacksQuery(variables?: GetStacksQueryVariables) {
	return { query: GetStacksDocument, variables: variables };
}
export const GetStackDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getStack" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "stack" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "slug" },
								value: { kind: "Variable", name: { kind: "Name", value: "slug" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StackDetail" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackCore" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "url" } },
					{ kind: "Field", name: { kind: "Name", value: "slug" } },
					{ kind: "Field", name: { kind: "Name", value: "count" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "StackDetail" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Stack" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "FragmentSpread", name: { kind: "Name", value: "StackCore" } },
					{ kind: "Field", name: { kind: "Name", value: "createdAt" } },
					{ kind: "Field", name: { kind: "Name", value: "description" } },
					{ kind: "Field", name: { kind: "Name", value: "reactionCount" } },
					{ kind: "Field", name: { kind: "Name", value: "viewerHasReacted" } },
					{ kind: "Field", name: { kind: "Name", value: "usedByViewer" } },
					{
						kind: "Field",
						name: { kind: "Name", value: "usedBy" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
					{
						kind: "Field",
						name: { kind: "Name", value: "tags" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetStackQuery(
	baseOptions: Apollo.QueryHookOptions<GetStackQuery, GetStackQueryVariables> &
		({ variables: GetStackQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetStackQuery, GetStackQueryVariables>(GetStackDocument, options);
}
export function useGetStackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStackQuery, GetStackQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetStackQuery, GetStackQueryVariables>(GetStackDocument, options);
}
export function useGetStackSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetStackQuery, GetStackQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetStackQuery, GetStackQueryVariables>(GetStackDocument, options);
}
export type GetStackQueryHookResult = ReturnType<typeof useGetStackQuery>;
export type GetStackLazyQueryHookResult = ReturnType<typeof useGetStackLazyQuery>;
export type GetStackSuspenseQueryHookResult = ReturnType<typeof useGetStackSuspenseQuery>;
export type GetStackQueryResult = Apollo.QueryResult<GetStackQuery, GetStackQueryVariables>;
export function refetchGetStackQuery(variables: GetStackQueryVariables) {
	return { query: GetStackDocument, variables: variables };
}
export const GetTagsDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getTags" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "tags" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
}
export function useGetTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
}
export function useGetTagsSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
}
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsSuspenseQueryHookResult = ReturnType<typeof useGetTagsSuspenseQuery>;
export type GetTagsQueryResult = Apollo.QueryResult<GetTagsQuery, GetTagsQueryVariables>;
export function refetchGetTagsQuery(variables?: GetTagsQueryVariables) {
	return { query: GetTagsDocument, variables: variables };
}
export const GetUserDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getUser" },
			variableDefinitions: [
				{
					kind: "VariableDefinition",
					variable: { kind: "Variable", name: { kind: "Name", value: "username" } },
					type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
				},
			],
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "user" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "username" },
								value: { kind: "Variable", name: { kind: "Name", value: "username" } },
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetUserQuery(
	baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> &
		({ variables: GetUserQueryVariables; skip?: boolean } | { skip: boolean }),
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export function useGetUserSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export function refetchGetUserQuery(variables: GetUserQueryVariables) {
	return { query: GetUserDocument, variables: variables };
}
export const ViewerDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "viewer" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "viewer" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } }],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useViewerQuery(baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
}
export function useViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
}
export function useViewerSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<ViewerQuery, ViewerQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
}
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerSuspenseQueryHookResult = ReturnType<typeof useViewerSuspenseQuery>;
export type ViewerQueryResult = Apollo.QueryResult<ViewerQuery, ViewerQueryVariables>;
export function refetchViewerQuery(variables?: ViewerQueryVariables) {
	return { query: ViewerDocument, variables: variables };
}
export const GetViewerWithSettingsDocument = /*#__PURE__*/ {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "getViewerWithSettings" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "viewer" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "FragmentSpread", name: { kind: "Name", value: "UserInfo" } },
								{ kind: "FragmentSpread", name: { kind: "Name", value: "UserSettings" } },
							],
						},
					},
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserInfo" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "__typename" } },
					{ kind: "Field", name: { kind: "Name", value: "id" } },
					{ kind: "Field", name: { kind: "Name", value: "username" } },
					{ kind: "Field", name: { kind: "Name", value: "image" } },
					{ kind: "Field", name: { kind: "Name", value: "name" } },
					{ kind: "Field", name: { kind: "Name", value: "role" } },
					{ kind: "Field", name: { kind: "Name", value: "isViewer" } },
					{ kind: "Field", name: { kind: "Name", value: "isAdmin" } },
				],
			},
		},
		{
			kind: "FragmentDefinition",
			name: { kind: "Name", value: "UserSettings" },
			typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{ kind: "Field", name: { kind: "Name", value: "email" } },
					{ kind: "Field", name: { kind: "Name", value: "pendingEmail" } },
				],
			},
		},
	],
} as unknown as DocumentNode;
export function useGetViewerWithSettingsQuery(
	baseOptions?: Apollo.QueryHookOptions<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>(
		GetViewerWithSettingsDocument,
		options,
	);
}
export function useGetViewerWithSettingsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>(
		GetViewerWithSettingsDocument,
		options,
	);
}
export function useGetViewerWithSettingsSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>(
		GetViewerWithSettingsDocument,
		options,
	);
}
export type GetViewerWithSettingsQueryHookResult = ReturnType<typeof useGetViewerWithSettingsQuery>;
export type GetViewerWithSettingsLazyQueryHookResult = ReturnType<typeof useGetViewerWithSettingsLazyQuery>;
export type GetViewerWithSettingsSuspenseQueryHookResult = ReturnType<typeof useGetViewerWithSettingsSuspenseQuery>;
export type GetViewerWithSettingsQueryResult = Apollo.QueryResult<
	GetViewerWithSettingsQuery,
	GetViewerWithSettingsQueryVariables
>;
export function refetchGetViewerWithSettingsQuery(variables?: GetViewerWithSettingsQueryVariables) {
	return { query: GetViewerWithSettingsDocument, variables: variables };
}
