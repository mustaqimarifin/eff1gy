import { defaultSEO, extendSEO } from "./seo"

const routes = {
	home: {
		label: "Home",
		path: "/",
		seo: defaultSEO,
	},
	about: {
		label: "About",
		path: "/about",
		seo: extendSEO({
			title: "About",
			url: "about",
		}),
	},
	blog: {
		label: "Blog",
		path: "/blog",
		seo: extendSEO({
			title: "Blog",
			description: "Thinking out loud",
			image: "og/post.png",
			url: "blog",
		}),
	},
	writing: {
		label: "Writing",
		path: "/post",
		seo: extendSEO({
			title: "Writing",
			description: "Thinking out loud about software design and development.",
			image: "og/post.png",
			url: "writing",
		}),
	},
	crit: {
		label: "Crit",
		path: "/crit",
		seo: extendSEO({
			title: "Crit",
			description: "A comprehensive product design health report.",
			image: "og/crit.png",
			url: "crit",
		}),
	},

	bookmarks: {
		label: "Bookmarks",
		path: "/bookmarks",
		seo: extendSEO({
			title: "Bookmarks",
			description: "Internet things, saved for later.",
			image: "og/bookmarks.png",
			url: "bookmarks",
		}),
	},
	appDissection: {
		label: "App Dissection",
		path: "/app-dissection",
		seo: extendSEO({
			title: "App Dissection",
			description: "In-depth design explorations.",
			image: "og/app-dissection.png",
			url: "app-dissection",
		}),
	},
	ama: {
		label: "AMA",
		path: "/ama",
		seo: extendSEO({
			title: "AMA",
			description: "Ask me anything.",
			image: "og/ama.png",
			url: "ama",
		}),
	},

	stack: {
		label: "Stack",
		path: "/stack",
		seo: extendSEO({
			title: "Stack",
			description: "My favorite tools and software.",
			image: "og/stack.png",
			url: "stack",
		}),
	},
	privacy: {
		label: "Privacy Policy",
		path: "/privacypolicy",
		seo: extendSEO({
			title: "Privacy Policy",
			description: null,
			image: "og/pp.png",
			url: "privacypolicy",
		}),
	},
	terms: {
		label: "Terms of Service",
		path: "/termsofservice",
		seo: extendSEO({
			title: "Terms of Service",
			description: null,
			image: "og/tos.png",
			url: "termsofservice",
		}),
	},
	settings: {
		label: "Settings",
		path: "/settings",
		seo: extendSEO({
			title: "Settings",
			description: "Manage your profile.",
			image: "og/settings.png",
			url: "settings",
		}),
	},
}

export default routes
