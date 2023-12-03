var T = function (b) {
    return /^[^\S\r\n]+$/g.test(b)
  },
  V7 = function (b) {
    return u.has(b)
  },
  Z7 = function (b) {
    return b
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  },
  y = function (b) {
    return /^[\w_]+$/.test(b) || o(b)
  },
  $7 = function (b) {
    const V = b[0]
    return (y(V) && V === V.toUpperCase()) || b === 'null'
  },
  o = function (b) {
    return /[^\u0000-\u007f]/.test(b)
  },
  a = function (b) {
    return /^[a-zA-Z]$/.test(b)
  },
  i = function (b) {
    return a(b) || o(b)
  },
  z7 = function (b) {
    return i(b[0]) && (b.length === 1 || y(b.slice(1)))
  },
  E = function (b) {
    return b === '`'
  },
  R = function (b) {
    return b === '"' || b === "'"
  },
  X7 = function (b) {
    return R(b) || E(b)
  },
  p = function (b) {
    return (b = b.slice(0, 2)), b === '//' || b === '/*'
  },
  Y7 = function (b) {
    return b[0] === '/' && !p(b[0] + b[1])
  },
  H7 = function (b) {
    let V = '',
      K = -1,
      M = [null, null]
    const Y = []
    let z = !1,
      $ = 0,
      H = !1,
      W = 0
    const O = () => z && !H && !$,
      A = () => $ && !O(),
      Q = () => !$ && O() && !H && W > 0
    let U = null,
      B = 0,
      J = 0
    const j = () => U !== null,
      G = () => J > B,
      _ = () => J > 0 && J === B
    function c(w) {
      const q = w === '\n'
      if (A() && j()) return D
      if (Q()) return w7
      if (j()) return D
      else if (e.has(w)) return M[1] === '.' ? m : b7
      else if (q) return I
      else if (T(w)) return d
      else if (w.split('').every(V7)) return F
      else if ($7(w)) return A() ? m : q7
      else return z7(w) && !G() && !R(U) ? m : D
    }
    const Z = (w, q) => {
      if (q) V = q
      if (V) {
        K = w || c(V)
        const P = [K, V]
        if (K !== d && K !== I) M = P
        Y.push(P)
      }
      V = ''
    }
    for (let w = 0; w < b.length; w++) {
      const q = b[w],
        P = b[w - 1],
        f = b[w + 1],
        N = P + q,
        X = q + f
      if (R(q) && !Q()) {
        if ((Z(), P !== '\\')) {
          if (U && q === U) U = null
          else if (!U) U = q
        }
        Z(D, q)
        continue
      }
      if (!G()) {
        if (P !== '\\n' && E(q)) {
          Z(), Z(D, q), J++
          continue
        }
      }
      if (G()) {
        if (P !== '\\n' && E(q)) {
          if (J > 0) {
            Z(), J--, Z(D, q)
            continue
          }
        }
        if (X === '${') {
          B++, Z(D), Z(F, X), w++
          continue
        }
      }
      if (_() && q === '}') {
        Z(), B--, Z(F, q)
        continue
      }
      if (O()) {
        if (q === '{') {
          Z(), Z(F, q), (H = !0)
          continue
        }
      }
      if (z) {
        if (!$ && q === '<') {
          if ((Z(), f === '/')) ($ = 2), (V = X), w++
          else ($ = 1), (V = q)
          Z(F)
          continue
        }
        if ($) {
          if (q === '>' && !'/='.includes(P)) {
            if ((Z(), $ === 1)) ($ = 0), W++
            else ($ = 0), (z = !1)
            Z(F, q)
            continue
          }
          if (X === '/>' || X === '</') {
            if (V !== '<' && V !== '/') Z()
            if (X === '/>') $ = 0
            else W--
            if (!W) z = !1
            ;(V = X), w++, Z(F)
            continue
          }
          if (q === '<') {
            Z(), (V = q), Z(F)
            continue
          }
        }
      }
      if (!$ && ((q === '<' && i(f)) || X === '</')) {
        if ((($ = f === '/' ? 2 : 1), q === '<' && (f === '/' || a(f)))) z = !0
      }
      const n = X7(q),
        s = G(),
        h = !z && Y7(X),
        k = Q()
      if (n || s || R(U)) V += q
      else if (h) {
        Z()
        const [v, t] = M
        if (h && v && !((v === F && t !== ')') || v === l)) {
          ;(V = q), Z()
          continue
        }
        const L = w++,
          r = () => w >= b.length,
          S = () => r() || b[w] === '\n'
        let x = !1
        for (; !S(); w++)
          if (b[w] === '/' && b[w - 1] !== '\\') {
            x = !0
            while (L !== w && /^[a-z]$/.test(b[w + 1]) && !S()) w++
            break
          }
        if (L !== w && x) (V = b.slice(L, w + 1)), Z(D)
        else (V = q), Z(), (w = L)
      } else if (p(X)) {
        Z()
        const v = w
        if (f === '/') for (; w < b.length && b[w] !== '\n'; w++);
        else for (; w < b.length && b[w - 1] + b[w] !== '*/'; w++);
        ;(V = b.slice(v, w + 1)), Z(l)
      } else if (q === ' ' || q === '\n')
        if (q === ' ' && (T(V) || !V || k)) {
          if (((V += q), f === '<')) Z()
        } else Z(), (V = q), Z()
      else if (H && q === '}') Z(), (V = q), Z(), (H = !1)
      else if (
        (k && !g.has(q)) ||
        ((y(q) === y(V[V.length - 1]) || O()) && !u.has(q))
      )
        V += q
      else {
        if (N === '</') V = N
        if ((Z(), N !== '</')) V = q
        if (X === '</' || X === '/>') (V = X), Z(), w++
        else if (g.has(q)) Z()
      }
    }
    return Z(), Y
  },
  P7 = function (b) {
    const V = [],
      K = (z) => `<span class="sh__line">${z}</span>`
    function M(z) {
      V.push(
        K(
          z
            .map(
              ([$, H]) =>
                `<span class="sh__token--${C[$]}" style="color: var(--sh-${
                  C[$]
                })">${Z7(H)}</span>`
            )
            .join('')
        )
      )
    }
    const Y = []
    for (let z = 0; z < b.length; z++) {
      const $ = b[z],
        [H, W] = $
      if (H !== I)
        if (W.includes('\n')) {
          const O = W.split('\n')
          for (let A = 0; A < O.length; A++)
            if ((Y.push([H, O[A]]), A < O.length - 1)) M(Y), (Y.length = 0)
        } else Y.push($)
      else Y.push([H, '']), M(Y), (Y.length = 0)
    }
    if (Y.length) M(Y)
    return V
  },
  F7 = function (b) {
    const V = H7(b)
    return P7(V).join('\n')
  },
  g = new Set(['<', '>', '{', '}', '[', ']']),
  e = new Set([
    'for',
    'do',
    'while',
    'if',
    'else',
    'return',
    'function',
    'var',
    'let',
    'const',
    'true',
    'false',
    'undefined',
    'this',
    'new',
    'delete',
    'typeof',
    'in',
    'instanceof',
    'void',
    'break',
    'continue',
    'switch',
    'case',
    'default',
    'throw',
    'try',
    'catch',
    'finally',
    'debugger',
    'with',
    'yield',
    'async',
    'await',
    'class',
    'extends',
    'super',
    'import',
    'export',
    'from',
    'static',
  ]),
  u = new Set([
    '+',
    '-',
    '*',
    '/',
    '%',
    '=',
    '!',
    '&',
    '|',
    '^',
    '~',
    '!',
    '?',
    ':',
    '.',
    ',',
    ';',
    "'",
    '"',
    '.',
    '(',
    ')',
    '[',
    ']',
    '#',
    '@',
    '\\',
    ...g,
  ]),
  C = [
    'identifier',
    'keyword',
    'string',
    'class',
    'sign',
    'comment',
    'break',
    'space',
    'jsxliterals',
  ],
  [m, b7, D, q7, F, l, I, d, w7] = C.map((b, V) => V),
  O7 = { TokenTypes: C }
export { F7 as highlight, O7 as SugarHigh, H7 as tokenize }
