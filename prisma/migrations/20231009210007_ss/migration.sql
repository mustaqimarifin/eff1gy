-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BLOCKED', 'USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "EmailSubscriptionType" AS ENUM ('HACKER_NEWS');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "email" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "emailVerified" TIMESTAMP(3),
    "pendingEmail" TEXT,
    "description" VARCHAR(256),
    "location" TEXT,
    "twitterId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Bookmark" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "host" TEXT,
    "title" TEXT,
    "image" TEXT,
    "description" TEXT,
    "twitterHandle" TEXT,
    "faviconUrl" TEXT,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "plays" INTEGER NOT NULL DEFAULT 0,
    "waveform" JSONB,
    "audioUrl" TEXT,
    "description" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "userId" TEXT,
    "bookmarkId" TEXT,
    "questionId" TEXT,
    "stackId" TEXT,
    "postId" TEXT,
    "blogId" TEXT,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Audio" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "plays" INTEGER NOT NULL,
    "waveform" JSONB NOT NULL,
    "url" TEXT NOT NULL,
    "transcription" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "Audio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "slug" TEXT,
    "userId" TEXT,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "featureImage" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostEdit" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "featureImage" TEXT,
    "postId" TEXT,

    CONSTRAINT "PostEdit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Stack" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Stack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reaction" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "bookmarkId" TEXT,
    "questionId" TEXT,
    "stackId" TEXT,
    "postId" TEXT,
    "blogId" TEXT,

    CONSTRAINT "Reaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageView" (
    "slug" TEXT NOT NULL,
    "lastSeen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "viewCount" INTEGER DEFAULT 1,

    CONSTRAINT "PageView_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "PostComment" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "userId" TEXT,
    "parentId" TEXT,
    "slug" TEXT,
    "blogId" TEXT,

    CONSTRAINT "PostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Like" (
    "userId" TEXT NOT NULL,
    "postCommentId" TEXT NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("userId","postCommentId")
);

-- CreateTable
CREATE TABLE "EmailSubscription" (
    "email" TEXT NOT NULL,
    "type" "EmailSubscriptionType" NOT NULL
);

-- CreateTable
CREATE TABLE "_BookmarkToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_StackToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_StackToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_twitterId_key" ON "User"("twitterId");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_url_key" ON "Bookmark"("url");

-- CreateIndex
CREATE INDEX "Bookmark_host_idx" ON "Bookmark"("host");

-- CreateIndex
CREATE INDEX "Question_userId_idx" ON "Question"("userId");

-- CreateIndex
CREATE INDEX "Comment_bookmarkId_idx" ON "Comment"("bookmarkId");

-- CreateIndex
CREATE INDEX "Comment_questionId_idx" ON "Comment"("questionId");

-- CreateIndex
CREATE INDEX "Comment_postId_idx" ON "Comment"("postId");

-- CreateIndex
CREATE INDEX "Comment_blogId_idx" ON "Comment"("blogId");

-- CreateIndex
CREATE INDEX "Comment_stackId_idx" ON "Comment"("stackId");

-- CreateIndex
CREATE INDEX "Comment_userId_idx" ON "Comment"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Audio_commentId_key" ON "Audio"("commentId");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_slug_key" ON "Blog"("slug");

-- CreateIndex
CREATE INDEX "Blog_date_idx" ON "Blog"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE INDEX "Post_publishedAt_idx" ON "Post"("publishedAt");

-- CreateIndex
CREATE INDEX "Post_userId_idx" ON "Post"("userId");

-- CreateIndex
CREATE INDEX "PostEdit_postId_idx" ON "PostEdit"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "Stack_slug_key" ON "Stack"("slug");

-- CreateIndex
CREATE INDEX "Reaction_bookmarkId_idx" ON "Reaction"("bookmarkId");

-- CreateIndex
CREATE INDEX "Reaction_questionId_idx" ON "Reaction"("questionId");

-- CreateIndex
CREATE INDEX "Reaction_postId_idx" ON "Reaction"("postId");

-- CreateIndex
CREATE INDEX "Reaction_blogId_idx" ON "Reaction"("blogId");

-- CreateIndex
CREATE INDEX "Reaction_stackId_idx" ON "Reaction"("stackId");

-- CreateIndex
CREATE INDEX "Reaction_userId_idx" ON "Reaction"("userId");

-- CreateIndex
CREATE INDEX "PostComment_userId_slug_createdAt_idx" ON "PostComment"("userId", "slug", "createdAt");

-- CreateIndex
CREATE INDEX "EmailSubscription_email_idx" ON "EmailSubscription"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EmailSubscription_email_type_key" ON "EmailSubscription"("email", "type");

-- CreateIndex
CREATE UNIQUE INDEX "_BookmarkToTag_AB_unique" ON "_BookmarkToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_BookmarkToTag_B_index" ON "_BookmarkToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StackToTag_AB_unique" ON "_StackToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_StackToTag_B_index" ON "_StackToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StackToUser_AB_unique" ON "_StackToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_StackToUser_B_index" ON "_StackToUser"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_bookmarkId_fkey" FOREIGN KEY ("bookmarkId") REFERENCES "Bookmark"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_stackId_fkey" FOREIGN KEY ("stackId") REFERENCES "Stack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audio" ADD CONSTRAINT "Audio_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostEdit" ADD CONSTRAINT "PostEdit_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_bookmarkId_fkey" FOREIGN KEY ("bookmarkId") REFERENCES "Bookmark"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_stackId_fkey" FOREIGN KEY ("stackId") REFERENCES "Stack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostComment" ADD CONSTRAINT "PostComment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "PostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostComment" ADD CONSTRAINT "PostComment_slug_fkey" FOREIGN KEY ("slug") REFERENCES "Post"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostComment" ADD CONSTRAINT "PostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostComment" ADD CONSTRAINT "PostComment_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_postCommentId_fkey" FOREIGN KEY ("postCommentId") REFERENCES "PostComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookmarkToTag" ADD CONSTRAINT "_BookmarkToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Bookmark"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookmarkToTag" ADD CONSTRAINT "_BookmarkToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StackToTag" ADD CONSTRAINT "_StackToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Stack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StackToTag" ADD CONSTRAINT "_StackToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StackToUser" ADD CONSTRAINT "_StackToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Stack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StackToUser" ADD CONSTRAINT "_StackToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
