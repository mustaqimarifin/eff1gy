const T = (b) => /^[^\S\r\n]+$/g.test(b);
const V7 = (b) => u.has(b);
const Z7 = (b) =>
	b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
const y = (b) => /^[\w_]+$/.test(b) || o(b);
const $7 = (b) => {
	const V = b[0];
	return (y(V) && V === V.toUpperCase()) || b === "null";
};
const o = (b) => /[^\u0000-\u007f]/.test(b);
const a = (b) => /^[a-zA-Z]$/.test(b);
const i = (b) => a(b) || o(b);
const z7 = (b) => i(b[0]) && (b.length === 1 || y(b.slice(1)));
const E = (b) => b === "`";
const R = (b) => b === '"' || b === "'";
const X7 = (b) => R(b) || E(b);
const p = (b) => ((b = b.slice(0, 2)), b === "//" || b === "/*");
const Y7 = (b) => b[0] === "/" && !p(b[0] + b[1]);
const H7 = (b) => {
	let V = "";
	let K = -1;
	let M = [null, null];
	const Y = [];
	let z = !1;
	let $ = 0;
	let H = !1;
	let W = 0;
	const O = () => z && !H && !$;
	const A = () => $ && !O();
	const Q = () => !$ && O() && !H && W > 0;
	let U = null;
	let B = 0;
	let J = 0;
	const j = () => U !== null;
	const G = () => J > B;
	const _ = () => J > 0 && J === B;
	function c(w) {
		const q = w === "\n";
		if (A() && j()) return D;
		if (Q()) return w7;
		if (j()) return D;
		if (e.has(w)) return M[1] === "." ? m : b7;
		if (q) return I;
		if (T(w)) return d;
		if (w.split("").every(V7)) return F;
		if ($7(w)) return A() ? m : q7;
		return z7(w) && !G() && !R(U) ? m : D;
	}
	const Z = (w, q) => {
		if (q) V = q;
		if (V) {
			K = w || c(V);
			const P = [K, V];
			if (K !== d && K !== I) M = P;
			Y.push(P);
		}
		V = "";
	};
	for (let w = 0; w < b.length; w++) {
		const q = b[w];
		const P = b[w - 1];
		const f = b[w + 1];
		const N = P + q;
		const X = q + f;
		if (R(q) && !Q()) {
			if ((Z(), P !== "\\")) {
				if (U && q === U) U = null;
				else if (!U) U = q;
			}
			Z(D, q);
			continue;
		}
		if (!G()) {
			if (P !== "\\n" && E(q)) {
				Z(), Z(D, q), J++;
				continue;
			}
		}
		if (G()) {
			if (P !== "\\n" && E(q)) {
				if (J > 0) {
					Z(), J--, Z(D, q);
					continue;
				}
			}
			if (X === "${") {
				B++, Z(D), Z(F, X), w++;
				continue;
			}
		}
		if (_() && q === "}") {
			Z(), B--, Z(F, q);
			continue;
		}
		if (O()) {
			if (q === "{") {
				Z(), Z(F, q), (H = !0);
				continue;
			}
		}
		if (z) {
			if (!$ && q === "<") {
				if ((Z(), f === "/")) ($ = 2), (V = X), w++;
				else ($ = 1), (V = q);
				Z(F);
				continue;
			}
			if ($) {
				if (q === ">" && !"/=".includes(P)) {
					if ((Z(), $ === 1)) ($ = 0), W++;
					else ($ = 0), (z = !1);
					Z(F, q);
					continue;
				}
				if (X === "/>" || X === "</") {
					if (V !== "<" && V !== "/") Z();
					if (X === "/>") $ = 0;
					else W--;
					if (!W) z = !1;
					(V = X), w++, Z(F);
					continue;
				}
				if (q === "<") {
					Z(), (V = q), Z(F);
					continue;
				}
			}
		}
		if (!$ && ((q === "<" && i(f)) || X === "</")) {
			if ((($ = f === "/" ? 2 : 1), q === "<" && (f === "/" || a(f)))) z = !0;
		}
		const n = X7(q);
		const s = G();
		const h = !z && Y7(X);
		const k = Q();
		if (n || s || R(U)) V += q;
		else if (h) {
			Z();
			const [v, t] = M;
			if (h && v && !((v === F && t !== ")") || v === l)) {
				(V = q), Z();
				continue;
			}
			const L = w++;
			const r = () => w >= b.length;
			const S = () => r() || b[w] === "\n";
			let x = !1;
			for (; !S(); w++)
				if (b[w] === "/" && b[w - 1] !== "\\") {
					x = !0;
					while (L !== w && /^[a-z]$/.test(b[w + 1]) && !S()) w++;
					break;
				}
			if (L !== w && x) (V = b.slice(L, w + 1)), Z(D);
			else (V = q), Z(), (w = L);
		} else if (p(X)) {
			Z();
			const v = w;
			if (f === "/") for (; w < b.length && b[w] !== "\n"; w++);
			else for (; w < b.length && b[w - 1] + b[w] !== "*/"; w++);
			(V = b.slice(v, w + 1)), Z(l);
		} else if (q === " " || q === "\n")
			if (q === " " && (T(V) || !V || k)) {
				if (((V += q), f === "<")) Z();
			} else Z(), (V = q), Z();
		else if (H && q === "}") Z(), (V = q), Z(), (H = !1);
		else if ((k && !g.has(q)) || ((y(q) === y(V[V.length - 1]) || O()) && !u.has(q))) V += q;
		else {
			if (N === "</") V = N;
			if ((Z(), N !== "</")) V = q;
			if (X === "</" || X === "/>") (V = X), Z(), w++;
			else if (g.has(q)) Z();
		}
	}
	return Z(), Y;
};
const P7 = (b) => {
	const V = [];
	const K = (z) => `<span class="sh__line">${z}</span>`;
	function M(z) {
		V.push(
			K(
				z.map(([$, H]) => `<span class="sh__token--${C[$]}" style="color: var(--sh-${C[$]})">${Z7(H)}</span>`).join(""),
			),
		);
	}
	const Y = [];
	for (let z = 0; z < b.length; z++) {
		const $ = b[z];
		const [H, W] = $;
		if (H !== I)
			if (W.includes("\n")) {
				const O = W.split("\n");
				for (let A = 0; A < O.length; A++) if ((Y.push([H, O[A]]), A < O.length - 1)) M(Y), (Y.length = 0);
			} else Y.push($);
		else Y.push([H, ""]), M(Y), (Y.length = 0);
	}
	if (Y.length) M(Y);
	return V;
};
const F7 = (b) => {
	const V = H7(b);
	return P7(V).join("\n");
};
const g = new Set(["<", ">", "{", "}", "[", "]"]);
const e = new Set([
	"for",
	"do",
	"while",
	"if",
	"else",
	"return",
	"function",
	"var",
	"let",
	"const",
	"true",
	"false",
	"undefined",
	"this",
	"new",
	"delete",
	"typeof",
	"in",
	"instanceof",
	"void",
	"break",
	"continue",
	"switch",
	"case",
	"default",
	"throw",
	"try",
	"catch",
	"finally",
	"debugger",
	"with",
	"yield",
	"async",
	"await",
	"class",
	"extends",
	"super",
	"import",
	"export",
	"from",
	"static",
]);
const u = new Set([
	"+",
	"-",
	"*",
	"/",
	"%",
	"=",
	"!",
	"&",
	"|",
	"^",
	"~",
	"!",
	"?",
	":",
	".",
	",",
	";",
	"'",
	'"',
	".",
	"(",
	")",
	"[",
	"]",
	"#",
	"@",
	"\\",
	...g,
]);
const C = ["identifier", "keyword", "string", "class", "sign", "comment", "break", "space", "jsxliterals"];
const [m, b7, D, q7, F, l, I, d, w7] = C.map((b, V) => V);
const O7 = { TokenTypes: C };
export { F7 as highlight, O7 as SugarHigh, H7 as tokenize };
