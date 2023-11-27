/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import { forwardRef as C, useEffect as T, useState as V } from 'react'
var y = function ($, X) {
  const [G, Z] = V(!1),
    [q, _] = V(!1),
    D = encodeURIComponent($.id),
    b =
      typeof $.playlistCoverId === 'string'
        ? encodeURIComponent($.playlistCoverId)
        : null,
    F = $.title,
    J = $.poster || 'hqdefault',
    K = `&${$.params}` || '',
    M = $.muted ? '&mute=1' : '',
    j = $.announce || 'Watch',
    O = $.webp ? 'webp' : 'jpg',
    Q = $.webp ? 'vi_webp' : 'vi',
    R =
      $.thumbnail ||
      (!$.playlist
        ? `https://i.ytimg.com/${Q}/${D}/${J}.${O}`
        : `https://i.ytimg.com/${Q}/${b}/${J}.${O}`)
  let z = $.noCookie
    ? 'https://www.youtube-nocookie.com'
    : 'https://www.youtube.com'
  z = $.cookie ? 'https://www.youtube.com' : 'https://www.youtube-nocookie.com'
  const k = !$.playlist
      ? `${z}/embed/${D}?autoplay=1&state=1${M}${K}`
      : `${z}/embed/videoseries?autoplay=1${M}&list=${D}${K}`,
    x = $.activatedClass || 'lyt-activated',
    A = $.adNetwork || !1,
    H = $.aspectHeight || 9,
    L = $.aspectWidth || 16,
    N = $.iframeClass || '',
    W = $.playerClass || 'lty-playbtn',
    Y = $.wrapperClass || 'yt-lite',
    h = $.onIframeAdded || function () {},
    E = $.rel ? 'prefetch' : 'preload',
    P = $.containerElement || 'article',
    w = () => {
      if (G) return
      Z(!0)
    },
    S = () => {
      if (q) return
      _(!0)
    }
  return (
    T(() => {
      if (q) h()
    }, [q]),
    g(
      B,
      {
        children: [
          g('link', { rel: E, href: R, as: 'image' }, void 0, !1, void 0, this),
          g(
            B,
            {
              children:
                G &&
                g(
                  B,
                  {
                    children: [
                      g(
                        'link',
                        { rel: 'preconnect', href: z },
                        void 0,
                        !1,
                        void 0,
                        this
                      ),
                      g(
                        'link',
                        { rel: 'preconnect', href: 'https://www.google.com' },
                        void 0,
                        !1,
                        void 0,
                        this
                      ),
                      A &&
                        g(
                          B,
                          {
                            children: [
                              g(
                                'link',
                                {
                                  rel: 'preconnect',
                                  href: 'https://static.doubleclick.net',
                                },
                                void 0,
                                !1,
                                void 0,
                                this
                              ),
                              g(
                                'link',
                                {
                                  rel: 'preconnect',
                                  href: 'https://googleads.g.doubleclick.net',
                                },
                                void 0,
                                !1,
                                void 0,
                                this
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          void 0,
                          this
                        ),
                    ],
                  },
                  void 0,
                  !0,
                  void 0,
                  this
                ),
            },
            void 0,
            !1,
            void 0,
            this
          ),
          g(
            P,
            {
              onPointerOver: w,
              onClick: S,
              className: `${Y} ${q ? x : ''}`,
              'data-title': F,
              style: {
                backgroundImage: `url(${R})`,
                ...{ '--aspect-ratio': `${(H / L) * 100}%` },
              },
              children: [
                g(
                  'button',
                  { type: 'button', className: W, 'aria-label': `${j} ${F}` },
                  void 0,
                  !1,
                  void 0,
                  this
                ),
                q &&
                  g(
                    'iframe',
                    {
                      ref: X,
                      className: N,
                      title: F,
                      width: '560',
                      height: '315',
                      allow:
                        'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                      allowFullScreen: !0,
                      src: k,
                    },
                    void 0,
                    !1,
                    void 0,
                    this
                  ),
              ],
            },
            void 0,
            !0,
            void 0,
            this
          ),
        ],
      },
      void 0,
      !0,
      void 0,
      this
    )
  )
}
import { jsxDEV as g, Fragment as B } from 'react/jsx-dev-runtime'
var u = C(y)
export { u as default }
