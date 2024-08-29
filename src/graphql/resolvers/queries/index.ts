import { getBlog, getBlogs } from "./blogs"
import { getBookmark, getBookmarks } from "./bookmarks"
import { getCase, getCases } from "./cases"
import { getComment, getComments } from "./comments"
import { getPost, getPosts } from "./posts"
import { getQuestion, getQuestions } from "./questions"
import { getStack, getStacks } from "./stack"
import { getTags } from "./tags"
import { getUser } from "./user"
import { viewer } from "./viewer"

export default {
	viewer,
	user: getUser,
	bookmark: getBookmark,
	bookmarks: getBookmarks,
	blogs: getBlogs,
	blog: getBlog,
	cases: getCases,
	case: getCase,
	post: getPost,
	posts: getPosts,
	question: getQuestion,
	questions: getQuestions,
	comment: getComment,
	comments: getComments,
	stacks: getStacks,
	stack: getStack,
	tags: getTags,
}
