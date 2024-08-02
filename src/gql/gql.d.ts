import * as Apollo from '@apollo/client';

type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    Date: {
        input: any;
        output: any;
    };
    JSON: {
        input: any;
        output: any;
    };
};
type AddBookmarkInput = {
    tag: Scalars['String']['input'];
    url: Scalars['String']['input'];
};
type AddPostInput = {
    excerpt?: InputMaybe<Scalars['String']['input']>;
    slug: Scalars['String']['input'];
    text: Scalars['String']['input'];
    title: Scalars['String']['input'];
};
type AddQuestionInput = {
    audioUrl?: InputMaybe<Scalars['String']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
    waveform?: InputMaybe<Scalars['JSON']['input']>;
};
type AddStackInput = {
    description: Scalars['String']['input'];
    image: Scalars['String']['input'];
    name: Scalars['String']['input'];
    tag?: InputMaybe<Scalars['String']['input']>;
    url: Scalars['String']['input'];
};
type BConnection = {
    __typename?: 'BConnection';
    edges: Array<Maybe<BookmarkEdge>>;
    pageInfo?: Maybe<PageInfo>;
};
type Blog = {
    __typename?: 'Blog';
    count?: Maybe<Scalars['Int']['output']>;
    date?: Maybe<Scalars['Date']['output']>;
    id: Scalars['ID']['output'];
    reactionCount?: Maybe<Scalars['Int']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    viewerHasReacted?: Maybe<Scalars['Boolean']['output']>;
};
type Bookmark = {
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
type BookmarkEdge = {
    __typename?: 'BookmarkEdge';
    cursor?: Maybe<Scalars['String']['output']>;
    node?: Maybe<Bookmark>;
};
type BookmarkFilter = {
    host?: InputMaybe<Scalars['String']['input']>;
    tag?: InputMaybe<Scalars['String']['input']>;
};
declare enum CacheControlScope {
    Private = "PRIVATE",
    Public = "PUBLIC"
}
type Case = {
    __typename?: 'Case';
    count?: Maybe<Scalars['Int']['output']>;
    date?: Maybe<Scalars['Date']['output']>;
    id: Scalars['ID']['output'];
    reactionCount?: Maybe<Scalars['Int']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    viewerHasReacted?: Maybe<Scalars['Boolean']['output']>;
};
type Comment = {
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
declare enum CommentType {
    Blog = "BLOG",
    Bookmark = "BOOKMARK",
    Case = "CASE",
    Event = "EVENT",
    Post = "POST",
    Question = "QUESTION",
    Stack = "STACK"
}
type EditBookmarkInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    faviconUrl?: InputMaybe<Scalars['String']['input']>;
    tag?: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};
type EditPostInput = {
    excerpt?: InputMaybe<Scalars['String']['input']>;
    published?: InputMaybe<Scalars['Boolean']['input']>;
    slug: Scalars['String']['input'];
    text: Scalars['String']['input'];
    title: Scalars['String']['input'];
};
type EditQuestionInput = {
    audioUrl?: InputMaybe<Scalars['String']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
    waveform?: InputMaybe<Scalars['JSON']['input']>;
};
type EditStackInput = {
    description: Scalars['String']['input'];
    image: Scalars['String']['input'];
    name: Scalars['String']['input'];
    tag?: InputMaybe<Scalars['String']['input']>;
    url: Scalars['String']['input'];
};
type EditUserInput = {
    email?: InputMaybe<Scalars['String']['input']>;
    username?: InputMaybe<Scalars['String']['input']>;
};
type Event = {
    __typename?: 'Event';
    count?: Maybe<Scalars['Int']['output']>;
    id: Scalars['ID']['output'];
    reactionCount?: Maybe<Scalars['Int']['output']>;
    viewerHasReacted?: Maybe<Scalars['Boolean']['output']>;
};
type Mutation = {
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
type MutationAddBookmarkArgs = {
    data: AddBookmarkInput;
};
type MutationAddCommentArgs = {
    parentId?: InputMaybe<Scalars['String']['input']>;
    refId: Scalars['ID']['input'];
    text: Scalars['String']['input'];
    type: CommentType;
};
type MutationAddPostArgs = {
    data: AddPostInput;
};
type MutationAddQuestionArgs = {
    data: AddQuestionInput;
};
type MutationAddStackArgs = {
    data: AddStackInput;
};
type MutationAddViewArgs = {
    refId: Scalars['ID']['input'];
    type: ViewType;
};
type MutationDeleteBookmarkArgs = {
    id: Scalars['ID']['input'];
};
type MutationDeleteCommentArgs = {
    id: Scalars['ID']['input'];
};
type MutationDeletePostArgs = {
    id: Scalars['ID']['input'];
};
type MutationDeleteQuestionArgs = {
    id: Scalars['ID']['input'];
};
type MutationDeleteStackArgs = {
    id: Scalars['ID']['input'];
};
type MutationEditBookmarkArgs = {
    data: EditBookmarkInput;
    id: Scalars['ID']['input'];
};
type MutationEditCommentArgs = {
    id: Scalars['ID']['input'];
    text?: InputMaybe<Scalars['String']['input']>;
};
type MutationEditPostArgs = {
    data: EditPostInput;
    id: Scalars['ID']['input'];
};
type MutationEditQuestionArgs = {
    data: EditQuestionInput;
    id: Scalars['ID']['input'];
};
type MutationEditStackArgs = {
    data: EditStackInput;
    id: Scalars['ID']['input'];
};
type MutationEditUserArgs = {
    data?: InputMaybe<EditUserInput>;
};
type MutationToggleReactionArgs = {
    refId: Scalars['ID']['input'];
    type: ReactionType;
};
type MutationToggleStackUserArgs = {
    id: Scalars['ID']['input'];
};
type PageInfo = {
    __typename?: 'PageInfo';
    endCursor?: Maybe<Scalars['String']['output']>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    totalCount?: Maybe<Scalars['Int']['output']>;
};
type Post = {
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
type PostFilter = {
    published?: InputMaybe<Scalars['Boolean']['input']>;
};
type QConnection = {
    __typename?: 'QConnection';
    edges: Array<Maybe<QuestionEdge>>;
    pageInfo?: Maybe<PageInfo>;
};
type Query = {
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
type QueryBlogArgs = {
    slug: Scalars['String']['input'];
};
type QueryBookmarkArgs = {
    id: Scalars['ID']['input'];
};
type QueryBookmarksArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    filter?: InputMaybe<BookmarkFilter>;
    first?: InputMaybe<Scalars['Int']['input']>;
};
type QueryCaseArgs = {
    slug: Scalars['String']['input'];
};
type QueryCommentArgs = {
    id: Scalars['ID']['input'];
};
type QueryCommentsArgs = {
    refId: Scalars['ID']['input'];
    type: CommentType;
};
type QueryEventArgs = {
    id: Scalars['ID']['input'];
};
type QueryPostArgs = {
    slug: Scalars['String']['input'];
};
type QueryPostsArgs = {
    filter?: InputMaybe<PostFilter>;
};
type QueryQuestionArgs = {
    id: Scalars['ID']['input'];
};
type QueryQuestionsArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    filter?: InputMaybe<QuestionFilter2>;
    first?: InputMaybe<Scalars['Int']['input']>;
};
type QueryStackArgs = {
    slug: Scalars['String']['input'];
};
type QueryStacksArgs = {
    after?: InputMaybe<Scalars['String']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
};
type QueryUserArgs = {
    username: Scalars['String']['input'];
};
type Question = {
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
type QuestionEdge = {
    __typename?: 'QuestionEdge';
    cursor?: Maybe<Scalars['String']['output']>;
    node?: Maybe<Question>;
};
type QuestionFilter = {
    status?: InputMaybe<QuestionStatus>;
};
type QuestionFilter2 = {
    answered?: InputMaybe<Scalars['Boolean']['input']>;
};
declare enum QuestionStatus {
    Answered = "ANSWERED",
    Pending = "PENDING"
}
type Reactable = Blog | Bookmark | Case | Event | Post | Question | Stack;
declare enum ReactionType {
    Blog = "BLOG",
    Bookmark = "BOOKMARK",
    Case = "CASE",
    Event = "EVENT",
    Post = "POST",
    Question = "QUESTION",
    Stack = "STACK"
}
type SConnection = {
    __typename?: 'SConnection';
    edges: Array<Maybe<StackEdge>>;
    pageInfo?: Maybe<PageInfo>;
};
type Stack = {
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
type StackEdge = {
    __typename?: 'StackEdge';
    cursor?: Maybe<Scalars['String']['output']>;
    node?: Maybe<Stack>;
};
type Tag = {
    __typename?: 'Tag';
    name: Scalars['String']['output'];
};
type User = {
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
declare enum UserRole {
    Admin = "ADMIN",
    Blocked = "BLOCKED",
    User = "USER"
}
declare enum ViewType {
    Blog = "BLOG",
    Bookmark = "BOOKMARK",
    Case = "CASE",
    Event = "EVENT",
    Post = "POST",
    Question = "QUESTION",
    Stack = "STACK"
}
type Viewable = Blog | Bookmark | Case | Event | Post | Question | Stack;
type BookmarkDetailFragment = ({
    reactionCount?: number | null;
    viewerHasReacted?: boolean | null;
    id: string;
    url?: string | null;
    host: string;
    title?: string | null;
    description?: string | null;
    faviconUrl?: string | null;
    count?: number | null;
    tags: Array<({
        name: string;
    } & {
        __typename?: 'Tag';
    }) | null>;
} & {
    __typename: 'Bookmark';
});
type BookmarkDetailFragmentVariables = Exact<{
    [key: string]: never;
}>;
type BookmarkCoreFragment = ({
    id: string;
    url?: string | null;
    host: string;
    title?: string | null;
    description?: string | null;
    faviconUrl?: string | null;
    count?: number | null;
} & {
    __typename: 'Bookmark';
});
type BookmarkCoreFragmentVariables = Exact<{
    [key: string]: never;
}>;
type CommentInfoFragment = ({
    id: string;
    parentId?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    text?: string | null;
    viewerCanEdit?: boolean | null;
    viewerCanDelete?: boolean | null;
    author: ({
        id: string;
        username?: string | null;
        image?: string | null;
        name?: string | null;
        role?: UserRole | null;
        isViewer?: boolean | null;
        isAdmin?: boolean | null;
    } & {
        __typename: 'User';
    });
} & {
    __typename: 'Comment';
});
type CommentInfoFragmentVariables = Exact<{
    [key: string]: never;
}>;
type UserInfoFragment = ({
    id: string;
    username?: string | null;
    image?: string | null;
    name?: string | null;
    role?: UserRole | null;
    isViewer?: boolean | null;
    isAdmin?: boolean | null;
} & {
    __typename: 'User';
});
type UserInfoFragmentVariables = Exact<{
    [key: string]: never;
}>;
type PostDetailFragment = ({
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
} & {
    __typename: 'Post';
});
type PostDetailFragmentVariables = Exact<{
    [key: string]: never;
}>;
type PostCoreFragment = ({
    id: string;
    publishedAt?: any | null;
    title?: string | null;
    slug?: string | null;
    excerpt?: string | null;
} & {
    __typename: 'Post';
});
type PostCoreFragmentVariables = Exact<{
    [key: string]: never;
}>;
type QuestionDetailFragment = ({
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
    author?: ({
        id: string;
        username?: string | null;
        image?: string | null;
        name?: string | null;
        role?: UserRole | null;
        isViewer?: boolean | null;
        isAdmin?: boolean | null;
    } & {
        __typename: 'User';
    }) | null;
} & {
    __typename: 'Question';
});
type QuestionDetailFragmentVariables = Exact<{
    [key: string]: never;
}>;
type QuestionCoreFragment = ({
    id: string;
    title: string;
    audioUrl?: string | null;
    waveform?: any | null;
    count?: number | null;
    createdAt: any;
    author?: ({
        id: string;
        username?: string | null;
        image?: string | null;
        name?: string | null;
        role?: UserRole | null;
        isViewer?: boolean | null;
        isAdmin?: boolean | null;
    } & {
        __typename: 'User';
    }) | null;
} & {
    __typename: 'Question';
});
type QuestionCoreFragmentVariables = Exact<{
    [key: string]: never;
}>;
type StackDetailFragment = ({
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
    usedBy: Array<({
        id: string;
        username?: string | null;
        image?: string | null;
        name?: string | null;
        role?: UserRole | null;
        isViewer?: boolean | null;
        isAdmin?: boolean | null;
    } & {
        __typename: 'User';
    }) | null>;
    tags: Array<({
        name: string;
    } & {
        __typename?: 'Tag';
    }) | null>;
} & {
    __typename: 'Stack';
});
type StackDetailFragmentVariables = Exact<{
    [key: string]: never;
}>;
type StackCoreFragment = ({
    id: string;
    name: string;
    image?: string | null;
    url: string;
    slug: string;
    count?: number | null;
} & {
    __typename: 'Stack';
});
type StackCoreFragmentVariables = Exact<{
    [key: string]: never;
}>;
type BlogListItemFragment = ({
    id: string;
    title?: string | null;
    date?: any | null;
    slug?: string | null;
    count?: number | null;
} & {
    __typename: 'Blog';
});
type BlogListItemFragmentVariables = Exact<{
    [key: string]: never;
}>;
type BlogCoreFragment = ({
    id: string;
    title?: string | null;
    date?: any | null;
    slug?: string | null;
    count?: number | null;
} & {
    __typename: 'Blog';
});
type BlogCoreFragmentVariables = Exact<{
    [key: string]: never;
}>;
type BlogDetailFragment = ({
    reactionCount?: number | null;
    viewerHasReacted?: boolean | null;
    id: string;
    title?: string | null;
    date?: any | null;
    slug?: string | null;
    count?: number | null;
} & {
    __typename: 'Blog';
});
type BlogDetailFragmentVariables = Exact<{
    [key: string]: never;
}>;
type BookmarksConnectionFragment = ({
    pageInfo?: ({
        hasNextPage?: boolean | null;
        totalCount?: number | null;
        endCursor?: string | null;
    } & {
        __typename?: 'PageInfo';
    }) | null;
    edges: Array<({
        cursor?: string | null;
        node?: ({
            id: string;
            url?: string | null;
            host: string;
            title?: string | null;
            description?: string | null;
            faviconUrl?: string | null;
            count?: number | null;
        } & {
            __typename: 'Bookmark';
        }) | null;
    } & {
        __typename?: 'BookmarkEdge';
    }) | null>;
} & {
    __typename?: 'BConnection';
});
type BookmarksConnectionFragmentVariables = Exact<{
    [key: string]: never;
}>;
type BookmarkListItemFragment = ({
    id: string;
    url?: string | null;
    host: string;
    title?: string | null;
    description?: string | null;
    faviconUrl?: string | null;
    count?: number | null;
} & {
    __typename: 'Bookmark';
});
type BookmarkListItemFragmentVariables = Exact<{
    [key: string]: never;
}>;
type CaseListItemFragment = ({
    id: string;
    title?: string | null;
    date?: any | null;
    slug?: string | null;
    count?: number | null;
} & {
    __typename: 'Case';
});
type CaseListItemFragmentVariables = Exact<{
    [key: string]: never;
}>;
type CaseCoreFragment = ({
    id: string;
    title?: string | null;
    date?: any | null;
    slug?: string | null;
    count?: number | null;
} & {
    __typename: 'Case';
});
type CaseCoreFragmentVariables = Exact<{
    [key: string]: never;
}>;
type CaseDetailFragment = ({
    reactionCount?: number | null;
    viewerHasReacted?: boolean | null;
    id: string;
    title?: string | null;
    date?: any | null;
    slug?: string | null;
    count?: number | null;
} & {
    __typename: 'Case';
});
type CaseDetailFragmentVariables = Exact<{
    [key: string]: never;
}>;
type PostListItemFragment = ({
    id: string;
    publishedAt?: any | null;
    title?: string | null;
    slug?: string | null;
    excerpt?: string | null;
} & {
    __typename: 'Post';
});
type PostListItemFragmentVariables = Exact<{
    [key: string]: never;
}>;
type QuestionsConnectionFragment = ({
    pageInfo?: ({
        hasNextPage?: boolean | null;
        totalCount?: number | null;
        endCursor?: string | null;
    } & {
        __typename?: 'PageInfo';
    }) | null;
    edges: Array<({
        cursor?: string | null;
        node?: ({
            id: string;
            title: string;
            audioUrl?: string | null;
            waveform?: any | null;
            count?: number | null;
            createdAt: any;
            author?: ({
                id: string;
                username?: string | null;
                image?: string | null;
                name?: string | null;
                role?: UserRole | null;
                isViewer?: boolean | null;
                isAdmin?: boolean | null;
            } & {
                __typename: 'User';
            }) | null;
        } & {
            __typename: 'Question';
        }) | null;
    } & {
        __typename?: 'QuestionEdge';
    }) | null>;
} & {
    __typename?: 'QConnection';
});
type QuestionsConnectionFragmentVariables = Exact<{
    [key: string]: never;
}>;
type QuestionListItemFragment = ({
    id: string;
    title: string;
    audioUrl?: string | null;
    waveform?: any | null;
    count?: number | null;
    createdAt: any;
    author?: ({
        id: string;
        username?: string | null;
        image?: string | null;
        name?: string | null;
        role?: UserRole | null;
        isViewer?: boolean | null;
        isAdmin?: boolean | null;
    } & {
        __typename: 'User';
    }) | null;
} & {
    __typename: 'Question';
});
type QuestionListItemFragmentVariables = Exact<{
    [key: string]: never;
}>;
type StacksConnectionFragment = ({
    pageInfo?: ({
        hasNextPage?: boolean | null;
        totalCount?: number | null;
        endCursor?: string | null;
    } & {
        __typename?: 'PageInfo';
    }) | null;
    edges: Array<({
        cursor?: string | null;
        node?: ({
            id: string;
            name: string;
            image?: string | null;
            url: string;
            slug: string;
            count?: number | null;
        } & {
            __typename: 'Stack';
        }) | null;
    } & {
        __typename?: 'StackEdge';
    }) | null>;
} & {
    __typename?: 'SConnection';
});
type StacksConnectionFragmentVariables = Exact<{
    [key: string]: never;
}>;
type StackListItemFragment = ({
    id: string;
    name: string;
    image?: string | null;
    url: string;
    slug: string;
    count?: number | null;
} & {
    __typename: 'Stack';
});
type StackListItemFragmentVariables = Exact<{
    [key: string]: never;
}>;
type UserSettingsFragment = ({
    email?: string | null;
    pendingEmail?: string | null;
} & {
    __typename?: 'User';
});
type UserSettingsFragmentVariables = Exact<{
    [key: string]: never;
}>;
type EditBookmarkMutationVariables = Exact<{
    id: Scalars['ID']['input'];
    data: EditBookmarkInput;
}>;
type EditBookmarkMutation = ({
    editBookmark?: ({
        id: string;
        url?: string | null;
        host: string;
        title?: string | null;
        description?: string | null;
        faviconUrl?: string | null;
        count?: number | null;
        reactionCount?: number | null;
        viewerHasReacted?: boolean | null;
        tags: Array<({
            name: string;
        } & {
            __typename?: 'Tag';
        }) | null>;
    } & {
        __typename: 'Bookmark';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type DeleteBookmarkMutationVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
type DeleteBookmarkMutation = ({
    deleteBookmark?: boolean | null;
} & {
    __typename?: 'Mutation';
});
type AddBookmarkMutationVariables = Exact<{
    data: AddBookmarkInput;
}>;
type AddBookmarkMutation = ({
    addBookmark?: ({
        id: string;
        url?: string | null;
        host: string;
        title?: string | null;
        description?: string | null;
        faviconUrl?: string | null;
        count?: number | null;
        reactionCount?: number | null;
        viewerHasReacted?: boolean | null;
        tags: Array<({
            name: string;
        } & {
            __typename?: 'Tag';
        }) | null>;
    } & {
        __typename: 'Bookmark';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type AddCommentMutationVariables = Exact<{
    refId: Scalars['ID']['input'];
    parentId?: InputMaybe<Scalars['String']['input']>;
    type: CommentType;
    text: Scalars['String']['input'];
}>;
type AddCommentMutation = ({
    addComment?: ({
        id: string;
        parentId?: string | null;
        createdAt: any;
        updatedAt?: any | null;
        text?: string | null;
        viewerCanEdit?: boolean | null;
        viewerCanDelete?: boolean | null;
        author: ({
            id: string;
            username?: string | null;
            image?: string | null;
            name?: string | null;
            role?: UserRole | null;
            isViewer?: boolean | null;
            isAdmin?: boolean | null;
        } & {
            __typename: 'User';
        });
    } & {
        __typename: 'Comment';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type EditCommentMutationVariables = Exact<{
    id: Scalars['ID']['input'];
    text: Scalars['String']['input'];
}>;
type EditCommentMutation = ({
    editComment?: ({
        id: string;
        parentId?: string | null;
        createdAt: any;
        updatedAt?: any | null;
        text?: string | null;
        viewerCanEdit?: boolean | null;
        viewerCanDelete?: boolean | null;
        author: ({
            id: string;
            username?: string | null;
            image?: string | null;
            name?: string | null;
            role?: UserRole | null;
            isViewer?: boolean | null;
            isAdmin?: boolean | null;
        } & {
            __typename: 'User';
        });
    } & {
        __typename: 'Comment';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type DeleteCommentMutationVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
type DeleteCommentMutation = ({
    deleteComment?: boolean | null;
} & {
    __typename?: 'Mutation';
});
type EditPostMutationVariables = Exact<{
    id: Scalars['ID']['input'];
    data: EditPostInput;
}>;
type EditPostMutation = ({
    editPost?: ({
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
    } & {
        __typename: 'Post';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type DeletePostMutationVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
type DeletePostMutation = ({
    deletePost?: boolean | null;
} & {
    __typename?: 'Mutation';
});
type AddPostMutationVariables = Exact<{
    data: AddPostInput;
}>;
type AddPostMutation = ({
    addPost?: ({
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
    } & {
        __typename: 'Post';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type EditQuestionMutationVariables = Exact<{
    id: Scalars['ID']['input'];
    data: EditQuestionInput;
}>;
type EditQuestionMutation = ({
    editQuestion?: ({
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
        author?: ({
            id: string;
            username?: string | null;
            image?: string | null;
            name?: string | null;
            role?: UserRole | null;
            isViewer?: boolean | null;
            isAdmin?: boolean | null;
        } & {
            __typename: 'User';
        }) | null;
    } & {
        __typename: 'Question';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type DeleteQuestionMutationVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
type DeleteQuestionMutation = ({
    deleteQuestion?: boolean | null;
} & {
    __typename?: 'Mutation';
});
type AddQuestionMutationVariables = Exact<{
    data: AddQuestionInput;
}>;
type AddQuestionMutation = ({
    addQuestion?: ({
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
        author?: ({
            id: string;
            username?: string | null;
            image?: string | null;
            name?: string | null;
            role?: UserRole | null;
            isViewer?: boolean | null;
            isAdmin?: boolean | null;
        } & {
            __typename: 'User';
        }) | null;
    } & {
        __typename: 'Question';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type ToggleReactionMutationVariables = Exact<{
    refId: Scalars['ID']['input'];
    type: ReactionType;
}>;
type ToggleReactionMutation = ({
    toggleReaction?: ({
        id: string;
        reactionCount?: number | null;
        viewerHasReacted?: boolean | null;
    } & {
        __typename?: 'Blog' | 'Case' | 'Event' | 'Question' | 'Stack';
    }) | ({
        id: string;
        url?: string | null;
        reactionCount?: number | null;
        viewerHasReacted?: boolean | null;
    } & {
        __typename?: 'Bookmark';
    }) | {
        __typename?: 'Post';
    } | null;
} & {
    __typename?: 'Mutation';
});
type EditStackMutationVariables = Exact<{
    id: Scalars['ID']['input'];
    data: EditStackInput;
}>;
type EditStackMutation = ({
    editStack?: ({
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
        usedBy: Array<({
            id: string;
            username?: string | null;
            image?: string | null;
            name?: string | null;
            role?: UserRole | null;
            isViewer?: boolean | null;
            isAdmin?: boolean | null;
        } & {
            __typename: 'User';
        }) | null>;
        tags: Array<({
            name: string;
        } & {
            __typename?: 'Tag';
        }) | null>;
    } & {
        __typename: 'Stack';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type DeleteStackMutationVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
type DeleteStackMutation = ({
    deleteStack?: boolean | null;
} & {
    __typename?: 'Mutation';
});
type AddStackMutationVariables = Exact<{
    data: AddStackInput;
}>;
type AddStackMutation = ({
    addStack?: ({
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
        usedBy: Array<({
            id: string;
            username?: string | null;
            image?: string | null;
            name?: string | null;
            role?: UserRole | null;
            isViewer?: boolean | null;
            isAdmin?: boolean | null;
        } & {
            __typename: 'User';
        }) | null>;
        tags: Array<({
            name: string;
        } & {
            __typename?: 'Tag';
        }) | null>;
    } & {
        __typename: 'Stack';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type ToggleStackUserMutationVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
type ToggleStackUserMutation = ({
    toggleStackUser?: ({
        id: string;
        name: string;
        image?: string | null;
        url: string;
        slug: string;
        count?: number | null;
        usedBy: Array<({
            id: string;
            username?: string | null;
            image?: string | null;
            name?: string | null;
            role?: UserRole | null;
            isViewer?: boolean | null;
            isAdmin?: boolean | null;
        } & {
            __typename: 'User';
        }) | null>;
    } & {
        __typename: 'Stack';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type DeleteUserMutationVariables = Exact<{
    [key: string]: never;
}>;
type DeleteUserMutation = ({
    deleteUser?: boolean | null;
} & {
    __typename?: 'Mutation';
});
type EditUserMutationVariables = Exact<{
    data?: InputMaybe<EditUserInput>;
}>;
type EditUserMutation = ({
    editUser?: ({
        id: string;
        username?: string | null;
        image?: string | null;
        name?: string | null;
        role?: UserRole | null;
        isViewer?: boolean | null;
        isAdmin?: boolean | null;
    } & {
        __typename: 'User';
    }) | null;
} & {
    __typename?: 'Mutation';
});
type AddViewMutationVariables = Exact<{
    refId: Scalars['ID']['input'];
    type: ViewType;
}>;
type AddViewMutation = ({
    addView?: ({
        id: string;
        count?: number | null;
    } & {
        __typename?: 'Blog' | 'Bookmark' | 'Question' | 'Stack';
    }) | {
        __typename?: 'Case' | 'Event' | 'Post';
    } | null;
} & {
    __typename?: 'Mutation';
});
type GetBlogsQueryVariables = Exact<{
    [key: string]: never;
}>;
type GetBlogsQuery = ({
    blogs: Array<({
        id: string;
        title?: string | null;
        date?: any | null;
        slug?: string | null;
        count?: number | null;
    } & {
        __typename: 'Blog';
    }) | null>;
} & {
    __typename?: 'Query';
});
type GetBlogQueryVariables = Exact<{
    slug: Scalars['String']['input'];
}>;
type GetBlogQuery = ({
    blog?: ({
        id: string;
        title?: string | null;
        date?: any | null;
        slug?: string | null;
        count?: number | null;
        reactionCount?: number | null;
        viewerHasReacted?: boolean | null;
    } & {
        __typename: 'Blog';
    }) | null;
} & {
    __typename?: 'Query';
});
type GetBookmarksQueryVariables = Exact<{
    first?: InputMaybe<Scalars['Int']['input']>;
    after?: InputMaybe<Scalars['String']['input']>;
    filter?: InputMaybe<BookmarkFilter>;
}>;
type GetBookmarksQuery = ({
    bookmarks: ({
        pageInfo?: ({
            hasNextPage?: boolean | null;
            totalCount?: number | null;
            endCursor?: string | null;
        } & {
            __typename?: 'PageInfo';
        }) | null;
        edges: Array<({
            cursor?: string | null;
            node?: ({
                id: string;
                url?: string | null;
                host: string;
                title?: string | null;
                description?: string | null;
                faviconUrl?: string | null;
                count?: number | null;
            } & {
                __typename: 'Bookmark';
            }) | null;
        } & {
            __typename?: 'BookmarkEdge';
        }) | null>;
    } & {
        __typename?: 'BConnection';
    });
} & {
    __typename?: 'Query';
});
type GetBookmarkQueryVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
type GetBookmarkQuery = ({
    bookmark?: ({
        id: string;
        url?: string | null;
        host: string;
        title?: string | null;
        description?: string | null;
        faviconUrl?: string | null;
        count?: number | null;
        reactionCount?: number | null;
        viewerHasReacted?: boolean | null;
        tags: Array<({
            name: string;
        } & {
            __typename?: 'Tag';
        }) | null>;
    } & {
        __typename: 'Bookmark';
    }) | null;
} & {
    __typename?: 'Query';
});
type GetCasesQueryVariables = Exact<{
    [key: string]: never;
}>;
type GetCasesQuery = ({
    cases: Array<({
        id: string;
        title?: string | null;
        date?: any | null;
        slug?: string | null;
        count?: number | null;
    } & {
        __typename: 'Case';
    }) | null>;
} & {
    __typename?: 'Query';
});
type GetCaseQueryVariables = Exact<{
    slug: Scalars['String']['input'];
}>;
type GetCaseQuery = ({
    case?: ({
        id: string;
        title?: string | null;
        date?: any | null;
        slug?: string | null;
        count?: number | null;
        reactionCount?: number | null;
        viewerHasReacted?: boolean | null;
    } & {
        __typename: 'Case';
    }) | null;
} & {
    __typename?: 'Query';
});
type GetCommentsQueryVariables = Exact<{
    refId: Scalars['ID']['input'];
    type: CommentType;
}>;
type GetCommentsQuery = ({
    comments: Array<({
        id: string;
        parentId?: string | null;
        createdAt: any;
        updatedAt?: any | null;
        text?: string | null;
        viewerCanEdit?: boolean | null;
        viewerCanDelete?: boolean | null;
        author: ({
            id: string;
            username?: string | null;
            image?: string | null;
            name?: string | null;
            role?: UserRole | null;
            isViewer?: boolean | null;
            isAdmin?: boolean | null;
        } & {
            __typename: 'User';
        });
    } & {
        __typename: 'Comment';
    }) | null>;
} & {
    __typename?: 'Query';
});
type GetPostsQueryVariables = Exact<{
    filter?: InputMaybe<PostFilter>;
}>;
type GetPostsQuery = ({
    posts: Array<({
        id: string;
        publishedAt?: any | null;
        title?: string | null;
        slug?: string | null;
        excerpt?: string | null;
    } & {
        __typename: 'Post';
    }) | null>;
} & {
    __typename?: 'Query';
});
type GetPostQueryVariables = Exact<{
    slug: Scalars['String']['input'];
}>;
type GetPostQuery = ({
    post?: ({
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
    } & {
        __typename: 'Post';
    }) | null;
} & {
    __typename?: 'Query';
});
type GetQuestionsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['Int']['input']>;
    after?: InputMaybe<Scalars['String']['input']>;
    filter?: InputMaybe<QuestionFilter2>;
}>;
type GetQuestionsQuery = ({
    questions: ({
        pageInfo?: ({
            hasNextPage?: boolean | null;
            totalCount?: number | null;
            endCursor?: string | null;
        } & {
            __typename?: 'PageInfo';
        }) | null;
        edges: Array<({
            cursor?: string | null;
            node?: ({
                id: string;
                title: string;
                audioUrl?: string | null;
                waveform?: any | null;
                count?: number | null;
                createdAt: any;
                author?: ({
                    id: string;
                    username?: string | null;
                    image?: string | null;
                    name?: string | null;
                    role?: UserRole | null;
                    isViewer?: boolean | null;
                    isAdmin?: boolean | null;
                } & {
                    __typename: 'User';
                }) | null;
            } & {
                __typename: 'Question';
            }) | null;
        } & {
            __typename?: 'QuestionEdge';
        }) | null>;
    } & {
        __typename?: 'QConnection';
    });
} & {
    __typename?: 'Query';
});
type GetQuestionQueryVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
type GetQuestionQuery = ({
    question?: ({
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
        author?: ({
            id: string;
            username?: string | null;
            image?: string | null;
            name?: string | null;
            role?: UserRole | null;
            isViewer?: boolean | null;
            isAdmin?: boolean | null;
        } & {
            __typename: 'User';
        }) | null;
    } & {
        __typename: 'Question';
    }) | null;
} & {
    __typename?: 'Query';
});
type GetStacksQueryVariables = Exact<{
    first?: InputMaybe<Scalars['Int']['input']>;
    after?: InputMaybe<Scalars['String']['input']>;
}>;
type GetStacksQuery = ({
    stacks: ({
        pageInfo?: ({
            hasNextPage?: boolean | null;
            totalCount?: number | null;
            endCursor?: string | null;
        } & {
            __typename?: 'PageInfo';
        }) | null;
        edges: Array<({
            cursor?: string | null;
            node?: ({
                id: string;
                name: string;
                image?: string | null;
                url: string;
                slug: string;
                count?: number | null;
            } & {
                __typename: 'Stack';
            }) | null;
        } & {
            __typename?: 'StackEdge';
        }) | null>;
    } & {
        __typename?: 'SConnection';
    });
} & {
    __typename?: 'Query';
});
type GetStackQueryVariables = Exact<{
    slug: Scalars['String']['input'];
}>;
type GetStackQuery = ({
    stack?: ({
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
        usedBy: Array<({
            id: string;
            username?: string | null;
            image?: string | null;
            name?: string | null;
            role?: UserRole | null;
            isViewer?: boolean | null;
            isAdmin?: boolean | null;
        } & {
            __typename: 'User';
        }) | null>;
        tags: Array<({
            name: string;
        } & {
            __typename?: 'Tag';
        }) | null>;
    } & {
        __typename: 'Stack';
    }) | null;
} & {
    __typename?: 'Query';
});
type GetTagsQueryVariables = Exact<{
    [key: string]: never;
}>;
type GetTagsQuery = ({
    tags: Array<({
        name: string;
    } & {
        __typename?: 'Tag';
    }) | null>;
} & {
    __typename?: 'Query';
});
type GetUserQueryVariables = Exact<{
    username: Scalars['String']['input'];
}>;
type GetUserQuery = ({
    user?: ({
        id: string;
        username?: string | null;
        image?: string | null;
        name?: string | null;
        role?: UserRole | null;
        isViewer?: boolean | null;
        isAdmin?: boolean | null;
    } & {
        __typename: 'User';
    }) | null;
} & {
    __typename?: 'Query';
});
type ViewerQueryVariables = Exact<{
    [key: string]: never;
}>;
type ViewerQuery = ({
    viewer?: ({
        id: string;
        username?: string | null;
        image?: string | null;
        name?: string | null;
        role?: UserRole | null;
        isViewer?: boolean | null;
        isAdmin?: boolean | null;
    } & {
        __typename: 'User';
    }) | null;
} & {
    __typename?: 'Query';
});
type GetViewerWithSettingsQueryVariables = Exact<{
    [key: string]: never;
}>;
type GetViewerWithSettingsQuery = ({
    viewer?: ({
        id: string;
        username?: string | null;
        image?: string | null;
        name?: string | null;
        role?: UserRole | null;
        isViewer?: boolean | null;
        isAdmin?: boolean | null;
        email?: string | null;
        pendingEmail?: string | null;
    } & {
        __typename: 'User';
    }) | null;
} & {
    __typename?: 'Query';
});
declare const DirtyAssBlogCoreFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssBlogListItemFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssBlogDetailFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssBookmarkCoreFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssBookmarkDetailFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssBookmarkListItemFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssBookmarksConnectionFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssCaseCoreFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssCaseListItemFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssCaseDetailFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssUserInfoFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssCommentInfoFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssEventCoreFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssEventListItemFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssEventDetailFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssPostCoreFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssPostListItemFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssPostDetailFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssQuestionCoreFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssQuestionDetailFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssQuestionListItemFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssQuestionsConnectionFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssStackCoreFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssStackDetailFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssStackListItemFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssStacksConnectionFragmentDoc: Apollo.DocumentNode;
declare const DirtyAssUserSettingsFragmentDoc: Apollo.DocumentNode;
declare const EditBookmarkDocument: Apollo.DocumentNode;
declare function useEditBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<EditBookmarkMutation, EditBookmarkMutationVariables>): Apollo.MutationTuple<EditBookmarkMutation, Exact<{
    id: Scalars["ID"]["input"];
    data: EditBookmarkInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const DeleteBookmarkDocument: Apollo.DocumentNode;
declare function useDeleteBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>): Apollo.MutationTuple<DeleteBookmarkMutation, Exact<{
    id: Scalars["ID"]["input"];
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const AddBookmarkDocument: Apollo.DocumentNode;
declare function useAddBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<AddBookmarkMutation, AddBookmarkMutationVariables>): Apollo.MutationTuple<AddBookmarkMutation, Exact<{
    data: AddBookmarkInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const AddCommentDocument: Apollo.DocumentNode;
declare function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>): Apollo.MutationTuple<AddCommentMutation, Exact<{
    refId: Scalars["ID"]["input"];
    parentId?: InputMaybe<Scalars["String"]["input"]>;
    type: CommentType;
    text: Scalars["String"]["input"];
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const EditCommentDocument: Apollo.DocumentNode;
declare function useEditCommentMutation(baseOptions?: Apollo.MutationHookOptions<EditCommentMutation, EditCommentMutationVariables>): Apollo.MutationTuple<EditCommentMutation, Exact<{
    id: Scalars["ID"]["input"];
    text: Scalars["String"]["input"];
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const DeleteCommentDocument: Apollo.DocumentNode;
declare function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>): Apollo.MutationTuple<DeleteCommentMutation, Exact<{
    id: Scalars["ID"]["input"];
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const EditPostDocument: Apollo.DocumentNode;
declare function useEditPostMutation(baseOptions?: Apollo.MutationHookOptions<EditPostMutation, EditPostMutationVariables>): Apollo.MutationTuple<EditPostMutation, Exact<{
    id: Scalars["ID"]["input"];
    data: EditPostInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const DeletePostDocument: Apollo.DocumentNode;
declare function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>): Apollo.MutationTuple<DeletePostMutation, Exact<{
    id: Scalars["ID"]["input"];
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const AddPostDocument: Apollo.DocumentNode;
declare function useAddPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>): Apollo.MutationTuple<AddPostMutation, Exact<{
    data: AddPostInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const EditQuestionDocument: Apollo.DocumentNode;
declare function useEditQuestionMutation(baseOptions?: Apollo.MutationHookOptions<EditQuestionMutation, EditQuestionMutationVariables>): Apollo.MutationTuple<EditQuestionMutation, Exact<{
    id: Scalars["ID"]["input"];
    data: EditQuestionInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const DeleteQuestionDocument: Apollo.DocumentNode;
declare function useDeleteQuestionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>): Apollo.MutationTuple<DeleteQuestionMutation, Exact<{
    id: Scalars["ID"]["input"];
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const AddQuestionDocument: Apollo.DocumentNode;
declare function useAddQuestionMutation(baseOptions?: Apollo.MutationHookOptions<AddQuestionMutation, AddQuestionMutationVariables>): Apollo.MutationTuple<AddQuestionMutation, Exact<{
    data: AddQuestionInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const ToggleReactionDocument: Apollo.DocumentNode;
declare function useToggleReactionMutation(baseOptions?: Apollo.MutationHookOptions<ToggleReactionMutation, ToggleReactionMutationVariables>): Apollo.MutationTuple<ToggleReactionMutation, Exact<{
    refId: Scalars["ID"]["input"];
    type: ReactionType;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const EditStackDocument: Apollo.DocumentNode;
declare function useEditStackMutation(baseOptions?: Apollo.MutationHookOptions<EditStackMutation, EditStackMutationVariables>): Apollo.MutationTuple<EditStackMutation, Exact<{
    id: Scalars["ID"]["input"];
    data: EditStackInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const DeleteStackDocument: Apollo.DocumentNode;
declare function useDeleteStackMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStackMutation, DeleteStackMutationVariables>): Apollo.MutationTuple<DeleteStackMutation, Exact<{
    id: Scalars["ID"]["input"];
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const AddStackDocument: Apollo.DocumentNode;
declare function useAddStackMutation(baseOptions?: Apollo.MutationHookOptions<AddStackMutation, AddStackMutationVariables>): Apollo.MutationTuple<AddStackMutation, Exact<{
    data: AddStackInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const ToggleStackUserDocument: Apollo.DocumentNode;
declare function useToggleStackUserMutation(baseOptions?: Apollo.MutationHookOptions<ToggleStackUserMutation, ToggleStackUserMutationVariables>): Apollo.MutationTuple<ToggleStackUserMutation, Exact<{
    id: Scalars["ID"]["input"];
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const DeleteUserDocument: Apollo.DocumentNode;
declare function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>): Apollo.MutationTuple<DeleteUserMutation, Exact<{
    [key: string]: never;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const EditUserDocument: Apollo.DocumentNode;
declare function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>): Apollo.MutationTuple<EditUserMutation, Exact<{
    data?: InputMaybe<EditUserInput>;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const AddViewDocument: Apollo.DocumentNode;
declare function useAddViewMutation(baseOptions?: Apollo.MutationHookOptions<AddViewMutation, AddViewMutationVariables>): Apollo.MutationTuple<AddViewMutation, Exact<{
    refId: Scalars["ID"]["input"];
    type: ViewType;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
declare const GetBlogsDocument: Apollo.DocumentNode;
declare function useGetBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>): Apollo.QueryResult<GetBlogsQuery, Exact<{
    [key: string]: never;
}>>;
declare function useGetBlogsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>): Apollo.UseSuspenseQueryResult<GetBlogsQuery, Exact<{
    [key: string]: never;
}>>;
declare const GetBlogDocument: Apollo.DocumentNode;
declare function useGetBlogQuery(baseOptions: Apollo.QueryHookOptions<GetBlogQuery, GetBlogQueryVariables> & ({
    variables: GetBlogQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<GetBlogQuery, Exact<{
    slug: Scalars["String"]["input"];
}>>;
declare function useGetBlogSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogQuery, GetBlogQueryVariables>): Apollo.UseSuspenseQueryResult<GetBlogQuery, Exact<{
    slug: Scalars["String"]["input"];
}>>;
declare const GetBookmarksDocument: Apollo.DocumentNode;
declare function useGetBookmarksQuery(baseOptions?: Apollo.QueryHookOptions<GetBookmarksQuery, GetBookmarksQueryVariables>): Apollo.QueryResult<GetBookmarksQuery, Exact<{
    first?: InputMaybe<Scalars["Int"]["input"]>;
    after?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<BookmarkFilter>;
}>>;
declare function useGetBookmarksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBookmarksQuery, GetBookmarksQueryVariables>): Apollo.UseSuspenseQueryResult<GetBookmarksQuery, Exact<{
    first?: InputMaybe<Scalars["Int"]["input"]>;
    after?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<BookmarkFilter>;
}>>;
declare const GetBookmarkDocument: Apollo.DocumentNode;
declare function useGetBookmarkQuery(baseOptions: Apollo.QueryHookOptions<GetBookmarkQuery, GetBookmarkQueryVariables> & ({
    variables: GetBookmarkQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<GetBookmarkQuery, Exact<{
    id: Scalars["ID"]["input"];
}>>;
declare function useGetBookmarkSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBookmarkQuery, GetBookmarkQueryVariables>): Apollo.UseSuspenseQueryResult<GetBookmarkQuery, Exact<{
    id: Scalars["ID"]["input"];
}>>;
declare const GetCasesDocument: Apollo.DocumentNode;
declare function useGetCasesQuery(baseOptions?: Apollo.QueryHookOptions<GetCasesQuery, GetCasesQueryVariables>): Apollo.QueryResult<GetCasesQuery, Exact<{
    [key: string]: never;
}>>;
declare function useGetCasesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCasesQuery, GetCasesQueryVariables>): Apollo.UseSuspenseQueryResult<GetCasesQuery, Exact<{
    [key: string]: never;
}>>;
declare const GetCaseDocument: Apollo.DocumentNode;
declare function useGetCaseQuery(baseOptions: Apollo.QueryHookOptions<GetCaseQuery, GetCaseQueryVariables> & ({
    variables: GetCaseQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<GetCaseQuery, Exact<{
    slug: Scalars["String"]["input"];
}>>;
declare function useGetCaseSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCaseQuery, GetCaseQueryVariables>): Apollo.UseSuspenseQueryResult<GetCaseQuery, Exact<{
    slug: Scalars["String"]["input"];
}>>;
declare const GetCommentsDocument: Apollo.DocumentNode;
declare function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables> & ({
    variables: GetCommentsQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<GetCommentsQuery, Exact<{
    refId: Scalars["ID"]["input"];
    type: CommentType;
}>>;
declare function useGetCommentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>): Apollo.UseSuspenseQueryResult<GetCommentsQuery, Exact<{
    refId: Scalars["ID"]["input"];
    type: CommentType;
}>>;
declare const GetPostsDocument: Apollo.DocumentNode;
declare function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>): Apollo.QueryResult<GetPostsQuery, Exact<{
    filter?: InputMaybe<PostFilter>;
}>>;
declare function useGetPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>): Apollo.UseSuspenseQueryResult<GetPostsQuery, Exact<{
    filter?: InputMaybe<PostFilter>;
}>>;
declare const GetPostDocument: Apollo.DocumentNode;
declare function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables> & ({
    variables: GetPostQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<GetPostQuery, Exact<{
    slug: Scalars["String"]["input"];
}>>;
declare function useGetPostSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostQuery, GetPostQueryVariables>): Apollo.UseSuspenseQueryResult<GetPostQuery, Exact<{
    slug: Scalars["String"]["input"];
}>>;
declare const GetQuestionsDocument: Apollo.DocumentNode;
declare function useGetQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>): Apollo.QueryResult<GetQuestionsQuery, Exact<{
    first?: InputMaybe<Scalars["Int"]["input"]>;
    after?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<QuestionFilter2>;
}>>;
declare function useGetQuestionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>): Apollo.UseSuspenseQueryResult<GetQuestionsQuery, Exact<{
    first?: InputMaybe<Scalars["Int"]["input"]>;
    after?: InputMaybe<Scalars["String"]["input"]>;
    filter?: InputMaybe<QuestionFilter2>;
}>>;
declare const GetQuestionDocument: Apollo.DocumentNode;
declare function useGetQuestionQuery(baseOptions: Apollo.QueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables> & ({
    variables: GetQuestionQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<GetQuestionQuery, Exact<{
    id: Scalars["ID"]["input"];
}>>;
declare function useGetQuestionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetQuestionQuery, GetQuestionQueryVariables>): Apollo.UseSuspenseQueryResult<GetQuestionQuery, Exact<{
    id: Scalars["ID"]["input"];
}>>;
declare const GetStacksDocument: Apollo.DocumentNode;
declare function useGetStacksQuery(baseOptions?: Apollo.QueryHookOptions<GetStacksQuery, GetStacksQueryVariables>): Apollo.QueryResult<GetStacksQuery, Exact<{
    first?: InputMaybe<Scalars["Int"]["input"]>;
    after?: InputMaybe<Scalars["String"]["input"]>;
}>>;
declare function useGetStacksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetStacksQuery, GetStacksQueryVariables>): Apollo.UseSuspenseQueryResult<GetStacksQuery, Exact<{
    first?: InputMaybe<Scalars["Int"]["input"]>;
    after?: InputMaybe<Scalars["String"]["input"]>;
}>>;
declare const GetStackDocument: Apollo.DocumentNode;
declare function useGetStackQuery(baseOptions: Apollo.QueryHookOptions<GetStackQuery, GetStackQueryVariables> & ({
    variables: GetStackQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<GetStackQuery, Exact<{
    slug: Scalars["String"]["input"];
}>>;
declare function useGetStackSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetStackQuery, GetStackQueryVariables>): Apollo.UseSuspenseQueryResult<GetStackQuery, Exact<{
    slug: Scalars["String"]["input"];
}>>;
declare const GetTagsDocument: Apollo.DocumentNode;
declare function useGetTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>): Apollo.QueryResult<GetTagsQuery, Exact<{
    [key: string]: never;
}>>;
declare function useGetTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>): Apollo.UseSuspenseQueryResult<GetTagsQuery, Exact<{
    [key: string]: never;
}>>;
declare const GetUserDocument: Apollo.DocumentNode;
declare function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({
    variables: GetUserQueryVariables;
    skip?: boolean;
} | {
    skip: boolean;
})): Apollo.QueryResult<GetUserQuery, Exact<{
    username: Scalars["String"]["input"];
}>>;
declare function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>): Apollo.UseSuspenseQueryResult<GetUserQuery, Exact<{
    username: Scalars["String"]["input"];
}>>;
declare const ViewerDocument: Apollo.DocumentNode;
declare function useViewerQuery(baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>): Apollo.QueryResult<ViewerQuery, Exact<{
    [key: string]: never;
}>>;
declare function useViewerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ViewerQuery, ViewerQueryVariables>): Apollo.UseSuspenseQueryResult<ViewerQuery, Exact<{
    [key: string]: never;
}>>;
declare const GetViewerWithSettingsDocument: Apollo.DocumentNode;
declare function useGetViewerWithSettingsQuery(baseOptions?: Apollo.QueryHookOptions<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>): Apollo.QueryResult<GetViewerWithSettingsQuery, Exact<{
    [key: string]: never;
}>>;
declare function useGetViewerWithSettingsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetViewerWithSettingsQuery, GetViewerWithSettingsQueryVariables>): Apollo.UseSuspenseQueryResult<GetViewerWithSettingsQuery, Exact<{
    [key: string]: never;
}>>;

export { AddBookmarkDocument, type AddBookmarkInput, type AddBookmarkMutation, type AddBookmarkMutationVariables, AddCommentDocument, type AddCommentMutation, type AddCommentMutationVariables, AddPostDocument, type AddPostInput, type AddPostMutation, type AddPostMutationVariables, AddQuestionDocument, type AddQuestionInput, type AddQuestionMutation, type AddQuestionMutationVariables, AddStackDocument, type AddStackInput, type AddStackMutation, type AddStackMutationVariables, AddViewDocument, type AddViewMutation, type AddViewMutationVariables, type BConnection, type Blog, type BlogCoreFragment, type BlogCoreFragmentVariables, type BlogDetailFragment, type BlogDetailFragmentVariables, type BlogListItemFragment, type BlogListItemFragmentVariables, type Bookmark, type BookmarkCoreFragment, type BookmarkCoreFragmentVariables, type BookmarkDetailFragment, type BookmarkDetailFragmentVariables, type BookmarkEdge, type BookmarkFilter, type BookmarkListItemFragment, type BookmarkListItemFragmentVariables, type BookmarksConnectionFragment, type BookmarksConnectionFragmentVariables, CacheControlScope, type Case, type CaseCoreFragment, type CaseCoreFragmentVariables, type CaseDetailFragment, type CaseDetailFragmentVariables, type CaseListItemFragment, type CaseListItemFragmentVariables, type Comment, type CommentInfoFragment, type CommentInfoFragmentVariables, CommentType, DeleteBookmarkDocument, type DeleteBookmarkMutation, type DeleteBookmarkMutationVariables, DeleteCommentDocument, type DeleteCommentMutation, type DeleteCommentMutationVariables, DeletePostDocument, type DeletePostMutation, type DeletePostMutationVariables, DeleteQuestionDocument, type DeleteQuestionMutation, type DeleteQuestionMutationVariables, DeleteStackDocument, type DeleteStackMutation, type DeleteStackMutationVariables, DeleteUserDocument, type DeleteUserMutation, type DeleteUserMutationVariables, DirtyAssBlogCoreFragmentDoc, DirtyAssBlogDetailFragmentDoc, DirtyAssBlogListItemFragmentDoc, DirtyAssBookmarkCoreFragmentDoc, DirtyAssBookmarkDetailFragmentDoc, DirtyAssBookmarkListItemFragmentDoc, DirtyAssBookmarksConnectionFragmentDoc, DirtyAssCaseCoreFragmentDoc, DirtyAssCaseDetailFragmentDoc, DirtyAssCaseListItemFragmentDoc, DirtyAssCommentInfoFragmentDoc, DirtyAssEventCoreFragmentDoc, DirtyAssEventDetailFragmentDoc, DirtyAssEventListItemFragmentDoc, DirtyAssPostCoreFragmentDoc, DirtyAssPostDetailFragmentDoc, DirtyAssPostListItemFragmentDoc, DirtyAssQuestionCoreFragmentDoc, DirtyAssQuestionDetailFragmentDoc, DirtyAssQuestionListItemFragmentDoc, DirtyAssQuestionsConnectionFragmentDoc, DirtyAssStackCoreFragmentDoc, DirtyAssStackDetailFragmentDoc, DirtyAssStackListItemFragmentDoc, DirtyAssStacksConnectionFragmentDoc, DirtyAssUserInfoFragmentDoc, DirtyAssUserSettingsFragmentDoc, EditBookmarkDocument, type EditBookmarkInput, type EditBookmarkMutation, type EditBookmarkMutationVariables, EditCommentDocument, type EditCommentMutation, type EditCommentMutationVariables, EditPostDocument, type EditPostInput, type EditPostMutation, type EditPostMutationVariables, EditQuestionDocument, type EditQuestionInput, type EditQuestionMutation, type EditQuestionMutationVariables, EditStackDocument, type EditStackInput, type EditStackMutation, type EditStackMutationVariables, EditUserDocument, type EditUserInput, type EditUserMutation, type EditUserMutationVariables, type Event, type Exact, GetBlogDocument, type GetBlogQuery, type GetBlogQueryVariables, GetBlogsDocument, type GetBlogsQuery, type GetBlogsQueryVariables, GetBookmarkDocument, type GetBookmarkQuery, type GetBookmarkQueryVariables, GetBookmarksDocument, type GetBookmarksQuery, type GetBookmarksQueryVariables, GetCaseDocument, type GetCaseQuery, type GetCaseQueryVariables, GetCasesDocument, type GetCasesQuery, type GetCasesQueryVariables, GetCommentsDocument, type GetCommentsQuery, type GetCommentsQueryVariables, GetPostDocument, type GetPostQuery, type GetPostQueryVariables, GetPostsDocument, type GetPostsQuery, type GetPostsQueryVariables, GetQuestionDocument, type GetQuestionQuery, type GetQuestionQueryVariables, GetQuestionsDocument, type GetQuestionsQuery, type GetQuestionsQueryVariables, GetStackDocument, type GetStackQuery, type GetStackQueryVariables, GetStacksDocument, type GetStacksQuery, type GetStacksQueryVariables, GetTagsDocument, type GetTagsQuery, type GetTagsQueryVariables, GetUserDocument, type GetUserQuery, type GetUserQueryVariables, GetViewerWithSettingsDocument, type GetViewerWithSettingsQuery, type GetViewerWithSettingsQueryVariables, type Incremental, type InputMaybe, type MakeEmpty, type MakeMaybe, type MakeOptional, type Maybe, type Mutation, type MutationAddBookmarkArgs, type MutationAddCommentArgs, type MutationAddPostArgs, type MutationAddQuestionArgs, type MutationAddStackArgs, type MutationAddViewArgs, type MutationDeleteBookmarkArgs, type MutationDeleteCommentArgs, type MutationDeletePostArgs, type MutationDeleteQuestionArgs, type MutationDeleteStackArgs, type MutationEditBookmarkArgs, type MutationEditCommentArgs, type MutationEditPostArgs, type MutationEditQuestionArgs, type MutationEditStackArgs, type MutationEditUserArgs, type MutationToggleReactionArgs, type MutationToggleStackUserArgs, type PageInfo, type Post, type PostCoreFragment, type PostCoreFragmentVariables, type PostDetailFragment, type PostDetailFragmentVariables, type PostFilter, type PostListItemFragment, type PostListItemFragmentVariables, type QConnection, type Query, type QueryBlogArgs, type QueryBookmarkArgs, type QueryBookmarksArgs, type QueryCaseArgs, type QueryCommentArgs, type QueryCommentsArgs, type QueryEventArgs, type QueryPostArgs, type QueryPostsArgs, type QueryQuestionArgs, type QueryQuestionsArgs, type QueryStackArgs, type QueryStacksArgs, type QueryUserArgs, type Question, type QuestionCoreFragment, type QuestionCoreFragmentVariables, type QuestionDetailFragment, type QuestionDetailFragmentVariables, type QuestionEdge, type QuestionFilter, type QuestionFilter2, type QuestionListItemFragment, type QuestionListItemFragmentVariables, QuestionStatus, type QuestionsConnectionFragment, type QuestionsConnectionFragmentVariables, type Reactable, ReactionType, type SConnection, type Scalars, type Stack, type StackCoreFragment, type StackCoreFragmentVariables, type StackDetailFragment, type StackDetailFragmentVariables, type StackEdge, type StackListItemFragment, type StackListItemFragmentVariables, type StacksConnectionFragment, type StacksConnectionFragmentVariables, type Tag, ToggleReactionDocument, type ToggleReactionMutation, type ToggleReactionMutationVariables, ToggleStackUserDocument, type ToggleStackUserMutation, type ToggleStackUserMutationVariables, type User, type UserInfoFragment, type UserInfoFragmentVariables, UserRole, type UserSettingsFragment, type UserSettingsFragmentVariables, ViewType, type Viewable, ViewerDocument, type ViewerQuery, type ViewerQueryVariables, useAddBookmarkMutation, useAddCommentMutation, useAddPostMutation, useAddQuestionMutation, useAddStackMutation, useAddViewMutation, useDeleteBookmarkMutation, useDeleteCommentMutation, useDeletePostMutation, useDeleteQuestionMutation, useDeleteStackMutation, useDeleteUserMutation, useEditBookmarkMutation, useEditCommentMutation, useEditPostMutation, useEditQuestionMutation, useEditStackMutation, useEditUserMutation, useGetBlogQuery, useGetBlogSuspenseQuery, useGetBlogsQuery, useGetBlogsSuspenseQuery, useGetBookmarkQuery, useGetBookmarkSuspenseQuery, useGetBookmarksQuery, useGetBookmarksSuspenseQuery, useGetCaseQuery, useGetCaseSuspenseQuery, useGetCasesQuery, useGetCasesSuspenseQuery, useGetCommentsQuery, useGetCommentsSuspenseQuery, useGetPostQuery, useGetPostSuspenseQuery, useGetPostsQuery, useGetPostsSuspenseQuery, useGetQuestionQuery, useGetQuestionSuspenseQuery, useGetQuestionsQuery, useGetQuestionsSuspenseQuery, useGetStackQuery, useGetStackSuspenseQuery, useGetStacksQuery, useGetStacksSuspenseQuery, useGetTagsQuery, useGetTagsSuspenseQuery, useGetUserQuery, useGetUserSuspenseQuery, useGetViewerWithSettingsQuery, useGetViewerWithSettingsSuspenseQuery, useToggleReactionMutation, useToggleStackUserMutation, useViewerQuery, useViewerSuspenseQuery };
