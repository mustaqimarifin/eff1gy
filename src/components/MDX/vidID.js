var J = function (q) {
    if (q.includes('?')) q = q.split('?')[0]
    if (q.includes('/')) q = q.split('/')[0]
    if (q.includes('&')) q = q.split('&')[0]
    return q
  },
  I = function (q) {
    var j = q
    ;(j = j.replace(/#t=.*$/, '')), (j = j.replace(/^https?:\/\//, ''))
    var z = /youtube:\/\/|youtu\.be\/|y2u\.be\//g
    if (z.test(j)) {
      var B = j.split(z)[1]
      return J(B)
    }
    var D = /\/shorts\//g
    if (D.test(j)) return J(j.split(D)[1])
    var G = /v=|vi=/g
    if (G.test(j)) {
      var F = j.split(G)
      return J(F[1].split('&')[0])
    }
    var C = /\/v\/|\/vi\/|\/watch\//g
    if (C.test(j)) {
      var O = j.split(C)[1]
      return J(O)
    }
    var K = /\/an_webp\//g
    if (K.test(j)) {
      var V = j.split(K)[1]
      return J(V)
    }
    var N = /\/e\//g
    if (N.test(j)) {
      var X = j.split(N)[1]
      return J(X)
    }
    var Q = /\/embed\//g
    if (Q.test(j)) {
      var Y = j.split(Q)[1]
      return J(Y)
    }
    var Z = /\/user\/([a-zA-Z\d]*)$/g
    if (Z.test(j)) return
    var W = /\/user\/(?!.*videos)/g
    if (W.test(j)) {
      var U = j.split('/')
      return J(U.pop())
    }
    var E = /\/attribution_link\?.*v%3D([^%&]*)(%26|&|$)/
    if (E.test(j)) return J(j.match(E)[1])
    return
  },
  f = function (q, j) {
    return M(q) || k(q, j) || w(q, j) || L()
  },
  M = function (q) {
    if (Array.isArray(q)) return q
  },
  k = function (q, j) {
    var z =
      q == null
        ? null
        : (typeof Symbol !== 'undefined' && q[Symbol.iterator]) ||
          q['@@iterator']
    if (z == null) return
    var B = [],
      D = !0,
      G = !1,
      F,
      C
    try {
      for (z = z.call(q); !(D = (F = z.next()).done); D = !0)
        if ((B.push(F.value), j && B.length === j)) break
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
  },
  w = function (q, j) {
    if (!q) return
    if (typeof q === 'string') return H(q, j)
    var z = Object.prototype.toString.call(q).slice(8, -1)
    if (z === 'Object' && q.constructor) z = q.constructor.name
    if (z === 'Map' || z === 'Set') return Array.from(q)
    if (z === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z))
      return H(q, j)
  },
  H = function (q, j) {
    if (j == null || j > q.length) j = q.length
    for (var z = 0, B = new Array(j); z < j; z++) B[z] = q[z]
    return B
  },
  L = function () {
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  },
  A = function (q) {
    var j = q
    if (j.includes('#')) {
      var z = j.split('#'),
        B = f(z, 1)
      j = B[0]
    }
    if (j.includes('?') && !j.includes('clip_id=')) {
      var D = j.split('?'),
        G = f(D, 1)
      j = G[0]
    }
    var F,
      C,
      O = /https?:\/\/vimeo\.com\/event\/(\d+)$/,
      K = O.exec(j)
    if (K && K[1]) return K[1]
    var V = /https?:\/\/vimeo\.com\/(\d+)/,
      N = V.exec(j)
    if (N && N[1]) return N[1]
    var X = [
        'https?://player.vimeo.com/video/[0-9]+$',
        'https?://vimeo.com/channels',
        'groups',
        'album',
      ].join('|'),
      Q = new RegExp(X, 'gim')
    if (Q.test(j)) {
      if (((C = j.split('/')), C && C.length > 0)) F = C.pop()
    } else if (/clip_id=/gim.test(j)) {
      if (((C = j.split('clip_id=')), C && C.length > 0)) {
        var Y = C[1].split('&'),
          Z = f(Y, 1)
        F = Z[0]
      }
    }
    return F
  },
  T = function (q) {
    var j = /https:\/\/vine\.co\/v\/([a-zA-Z\d]*)\/?/,
      z = j.exec(q)
    if (z && z.length > 1) return z[1]
    return
  },
  v = function (q) {
    var j
    if (q.includes('embed')) return (j = /embed\/(\w{8})/), q.match(j)[1]
    j = /\/v\/(\w{8})/
    var z = q.match(j)
    if (z && z.length > 0) return z[1]
    return
  },
  x = function (q) {
    var j = q.includes('embed')
        ? /https:\/\/web\.microsoftstream\.com\/embed\/video\/([a-zA-Z\d-]*)\/?/
        : /https:\/\/web\.microsoftstream\.com\/video\/([a-zA-Z\d-]*)\/?/,
      z = j.exec(q)
    if (z && z.length > 1) return z[1]
    return
  },
  R = function (q) {
    var j = /tiktok\.com(.*)\/video\/(\d+)/gm,
      z = j.exec(q)
    if (z && z.length > 2) return z[2]
    return
  },
  $ = function (q) {
    var j = /dailymotion\.com(.*)(video)\/([a-zA-Z\d]+)/gm,
      z = j.exec(q)
    if (z) return z[3]
    var B = /dai\.ly\/([a-zA-Z\d]+)/gm,
      D = B.exec(q)
    if (D && D.length > 1) return D[1]
    var G = /dailymotion\.com(.*)video=([a-zA-Z\d]+)/gm,
      F = G.exec(q)
    if (F && F.length > 2) return F[2]
    return
  },
  b = function (q) {
    if (typeof q !== 'string') throw new TypeError('getSrc expected a string')
    var j = /src="(.*?)"/gm,
      z = j.exec(q)
    if (z && z.length >= 2) return z[1]
    return
  },
  P = function (q) {
    if (typeof q !== 'string')
      throw new TypeError('get-video-id expects a string')
    var j = q
    if (/<iframe/gi.test(j)) j = b(j) || ''
    ;(j = j.trim()),
      (j = j.replace('-nocookie', '')),
      (j = j.replace('/www.', '/'))
    var z = { id: null, service: null }
    if (/\/\/google/.test(j)) {
      var B = j.match(/url=([^&]+)&/)
      if (B) j = decodeURIComponent(B[1])
    }
    if (/youtube|youtu\.be|y2u\.be|i.ytimg\./.test(j))
      z = { id: I(j), service: 'youtube' }
    else if (/vimeo/.test(j)) z = { id: A(j), service: 'vimeo' }
    else if (/vine/.test(j)) z = { id: T(j), service: 'vine' }
    else if (/videopress/.test(j)) z = { id: v(j), service: 'videopress' }
    else if (/microsoftstream/.test(j))
      z = { id: x(j), service: 'microsoftstream' }
    else if (/tiktok\.com/.test(j)) z = { id: R(j), service: 'tiktok' }
    else if (/(dailymotion\.com|dai\.ly)/.test(j))
      z = { id: $(j), service: 'dailymotion' }
    return z
  }
/*! get-video-id v3.6.5 | @license MIT © Michael Wuergler | https://github.com/radiovisual/get-video-id */ var y =
  P
export { y as default }
