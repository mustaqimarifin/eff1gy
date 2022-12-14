/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

const linkHeadingStyles = {
  color: colors.gray[100],
  borderBottomColor: 'transparent !important',
  '&:hover': {
    color: `${colors.gray[900]} !important`,
  },
}
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['UntitledSans', ...fontFamily.sans],
        serif: ['Ivar', ...fontFamily.serif],
        mono: ['SFMono', ...fontFamily.mono],
      },
      colors: {
        active: '#48b7e2',
        secondary: '#71c440',
        accent: '#9247d1',
        neutral: '#222334',
        coyGreen: ' #51cf66',
        coyRed: '#d68599',
        coyYellow: '#fcc419',
        coyBlue: '#74c0fc',
        coyPurp: '#8888fc',
        'base-100': '#F0EFF1',
        info: '#fee6e8',
        success: '#178766',
        warning: '#8F580A',
        error: '#E4536E',
        white: '#fff',
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
        'gray-150': '#EEEFF2',
        'gray-1000': '#050505',
        black: '#050505',
        'design-details': '#458886',
        'design-details-light': '#EEF3F3',
        'design-details-dark': '#273F3F',
        'hacker-news': '#FF965A',
        twitter: '#479BEA',
        google: '#DB4437',
        github: '#6e5494',
        current: 'currentColor',
      },
      boxShadow: {
        xs: '0 1px 2px 0px rgba(0,0,0,0.03)',
        subtle: '0 4px 32px rgba(0,0,0,0.03)',
        cardHover:
          '0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)',
      },
      animation: {
        modalEnter: 'modal-enter 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'modal-enter': {
          '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(.96)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '.prose h1,h2,h3,h4,h5,h6': { color: colors.slate[900] },
            '.prose h2 a': linkHeadingStyles,
            '.prose h3 a': linkHeadingStyles,
            '.prose h4 a': linkHeadingStyles,
            '.prose h5 a': linkHeadingStyles,
            '.prose h6 a': linkHeadingStyles,
            blockquote: {
              fontSize: '90%',
              color: colors.slate[500],
              borderLeftColor: colors.zinc[700],
              'p::before': {
                display: 'none',
              },
              'p::after': {
                display: 'none',
              },
            },
            '.prose a': {
              textDecoration: 'none',
              borderBottom: 'none',
              color: colors.pink[700],
              transition:
                'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
              '&:hover': {
                color: `${colors.zinc[900]} !important`,
                borderBottomColor: `${colors.cyan[200]} !important`,
                background: colors.purple[200],
              },
            },
            '.prose pre': {
              background: 'none',
              transition:
                'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
            },
            '.prose code': {
              color: colors.pink[500],
              '&::before': {
                content: `"" !important`,
              },
              '&::after': {
                content: `"" !important`,
              },
              fontWeight: 'normal',
            },
          },
        },
        dark: {
          css: {
            '.prose h1,h2,h3,h4,h5,h6': { color: colors.white },
            '.prose h2 a': linkHeadingStyles,
            '.prose h3 a': linkHeadingStyles,
            '.prose h4 a': linkHeadingStyles,
            '.prose h5 a': linkHeadingStyles,
            '.prose h6 a': linkHeadingStyles,
            blockquote: {
              fontSize: '90%',
              color: colors.zinc[500],
              borderLeftColor: colors.zinc[700],
              'p::before': {
                display: 'none',
              },
              'p::after': {
                display: 'none',
              },
            },
            '.prose a': {
              textDecoration: 'none',
              borderBottom: 'none',
              color: colors.rose[300],
              transition:
                'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
              '&:hover': {
                color: `${colors.zinc[900]} !important`,
                borderBottomColor: `${colors.cyan[200]} !important`,
                background: colors.purple[200],
              },
            },
            '.prose pre': {
              background: colors.slate[100],
              transition:
                'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
            },
            '.prose code': {
              color: colors.rose[400],
              '&::before': {
                content: `"" !important`,
              },
              '&::after': {
                content: `"" !important`,
              },
              fontWeight: 'normal',
            },
          },
        },
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
}
