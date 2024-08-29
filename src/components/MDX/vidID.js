function J(q) {
	if (q.includes("?")) q = q.split("?")[0]
	if (q.includes("/")) q = q.split("/")[0]
	if (q.includes("&")) q = q.split("&")[0]
	return q
}
function I(q) {
	let j = q
	;(j = j.replace(/#t=.*$/, "")), (j = j.replace(/^https?:\/\//, ""))
	const z = /youtube:\/\/|youtu\.be\/|y2u\.be\//g
	if (z.test(j)) {
		const B = j.split(z)[1]
		return J(B)
	}
	const D = /\/shorts\//g
	if (D.test(j)) return J(j.split(D)[1])
	const G = /v=|vi=/g
	if (G.test(j)) {
		const F = j.split(G)
		return J(F[1].split("&")[0])
	}
	const C = /\/v\/|\/vi\/|\/watch\//g
	if (C.test(j)) {
		const O = j.split(C)[1]
		return J(O)
	}
	const K = /\/an_webp\//g
	if (K.test(j)) {
		const V = j.split(K)[1]
		return J(V)
	}
	const N = /\/e\//g
	if (N.test(j)) {
		const X = j.split(N)[1]
		return J(X)
	}
	const Q = /\/embed\//g
	if (Q.test(j)) {
		const Y = j.split(Q)[1]
		return J(Y)
	}
	const Z = /\/user\/([a-zA-Z\d]*)$/g
	if (Z.test(j)) return
	const W = /\/user\/(?!.*videos)/g
	if (W.test(j)) {
		const U = j.split("/")
		return J(U.pop())
	}
	const E = /\/attribution_link\?.*v%3D([^%&]*)(%26|&|$)/
	if (E.test(j)) return J(j.match(E)[1])
}
const f = (q, j) => M(q) || k(q, j) || w(q, j) || L()
function M(q) {
	if (Array.isArray(q)) return q
}
function k(q, j) {
	let z =
		q == null
			? null
			: (typeof Symbol !== "undefined" && q[Symbol.iterator]) || q["@@iterator"]
	if (z == null) return
	const B = []
	let D = !0
	let G = !1
	let F
	let C
	try {
		for (z = z.call(q); !(D = (F = z.next()).done); D = !0) {
			if ((B.push(F.value), j && B.length === j)) break
		}
	} catch (O) {
		;(G = !0), (C = O)
	} finally {
		try {
			if (!D && z.return != null) z.return()
		} finally {
			if (G) throw C
		}
	}
	return B
}
function w(q, j) {
	if (!q) return
	if (typeof q === "string") return H(q, j)
	let z = Object.prototype.toString.call(q).slice(8, -1)
	if (z === "Object" && q.constructor) z = q.constructor.name
	if (z === "Map" || z === "Set") return Array.from(q)
	if (z === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z))
		return H(q, j)
}
function H(q, j) {
	if (j == null || j > q.length) j = q.length
	for (let z = 0, B = new Array(j); z < j; z++) B[z] = q[z]
	return B
}
function L() {
	throw new TypeError(
		"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
	)
}
function A(q) {
	let j = q
	if (j.includes("#")) {
		const z = j.split("#")
		const B = f(z, 1)
		j = B[0]
	}
	if (j.includes("?") && !j.includes("clip_id=")) {
		const D = j.split("?")
		const G = f(D, 1)
		j = G[0]
	}
	let F
	let C
	const O = /https?:\/\/vimeo\.com\/event\/(\d+)$/
	const K = O.exec(j)
	if (K?.[1]) return K[1]
	const V = /https?:\/\/vimeo\.com\/(\d+)/
	const N = V.exec(j)
	if (N?.[1]) return N[1]
	const X = [
		"https?://player.vimeo.com/video/[0-9]+$",
		"https?://vimeo.com/channels",
		"groups",
		"album",
	].join("|")
	const Q = new RegExp(X, "gim")
	if (Q.test(j)) {
		if (((C = j.split("/")), C && C.length > 0)) F = C.pop()
	} else if (/clip_id=/i.test(j)) {
		if (((C = j.split("clip_id=")), C && C.length > 0)) {
			const Y = C[1].split("&")
			const Z = f(Y, 1)
			F = Z[0]
		}
	}
	return F
}
function T(q) {
	const j = /https:\/\/vine\.co\/v\/([a-zA-Z\d]*)\/?/
	const z = j.exec(q)
	if (z && z.length > 1) return z[1]
}
function v(q) {
	let j
	if (q.includes("embed")) return (j = /embed\/(\w{8})/), q.match(j)[1]
	j = /\/v\/(\w{8})/
	const z = q.match(j)
	if (z && z.length > 0) return z[1]
}
function x(q) {
	const j = q.includes("embed")
		? /https:\/\/web\.microsoftstream\.com\/embed\/video\/([a-zA-Z\d-]*)\/?/
		: /https:\/\/web\.microsoftstream\.com\/video\/([a-zA-Z\d-]*)\/?/
	const z = j.exec(q)
	if (z && z.length > 1) return z[1]
}
function R(q) {
	const j = /tiktok\.com(.*)\/video\/(\d+)/g
	const z = j.exec(q)
	if (z && z.length > 2) return z[2]
}
function $(q) {
	const j = /dailymotion\.com(.*)(video)\/([a-zA-Z\d]+)/g
	const z = j.exec(q)
	if (z) return z[3]
	const B = /dai\.ly\/([a-zA-Z\d]+)/g
	const D = B.exec(q)
	if (D && D.length > 1) return D[1]
	const G = /dailymotion\.com(.*)video=([a-zA-Z\d]+)/g
	const F = G.exec(q)
	if (F && F.length > 2) return F[2]
}
function b(q) {
	if (typeof q !== "string") throw new TypeError("getSrc expected a string")
	const j = /src="(.*?)"/g
	const z = j.exec(q)
	if (z && z.length >= 2) return z[1]
}
function P(q) {
	if (typeof q !== "string") throw new TypeError("get-video-id expects a string")
	let j = q
	if (/<iframe/i.test(j)) j = b(j) || ""
	;(j = j.trim()), (j = j.replace("-nocookie", "")), (j = j.replace("/www.", "/"))
	let z = { id: null, service: null }
	if (/\/\/google/.test(j)) {
		const B = j.match(/url=([^&]+)&/)
		if (B) j = decodeURIComponent(B[1])
	}
	if (/youtube|youtu\.be|y2u\.be|i.ytimg\./.test(j)) z = { id: I(j), service: "youtube" }
	else if (/vimeo/.test(j)) z = { id: A(j), service: "vimeo" }
	else if (/vine/.test(j)) z = { id: T(j), service: "vine" }
	else if (/videopress/.test(j)) z = { id: v(j), service: "videopress" }
	else if (/microsoftstream/.test(j)) z = { id: x(j), service: "microsoftstream" }
	else if (/tiktok\.com/.test(j)) z = { id: R(j), service: "tiktok" }
	else if (/(dailymotion\.com|dai\.ly)/.test(j)) z = { id: $(j), service: "dailymotion" }
	return z
}
/*! get-video-id v3.6.5 | @license MIT © Michael Wuergler | https://github.com/radiovisual/get-video-id */ const y =
	P
export { y as default }
