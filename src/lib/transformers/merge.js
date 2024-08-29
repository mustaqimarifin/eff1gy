function B(...x) {
	function q(i) {
		return Object.prototype.toString.call(i).slice(8, -1).toLowerCase()
	}
	function A(i, f) {
		for (const [h, w] of Object.entries(f)) {
			const z = q(w)
			if (i[h] !== void 0 && q(i[h]) === z && ["array", "object"].includes(z))
				i[h] = B(i[h], w)
			else i[h] = structuredClone(w)
		}
	}
	let d = structuredClone(x.shift())
	for (const i of x) {
		const f = q(i)
		if (q(d) !== f) {
			d = structuredClone(i)
			continue
		}
		if (f === "array") d = [...d, ...structuredClone(i)]
		else if (f === "object") A(d, i)
		else d = i
	}
	return d
}
export { B as deepmerge }
