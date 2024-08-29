import forms from "@tailwindcss/forms"
import typo from "@tailwindcss/typography"
import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
	content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
	//darkMode: "media",
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)", ...fontFamily.sans],
				imp: ["var(--imp)", ...fontFamily.serif],
				mono: ["var(--mono)", ...fontFamily.mono],
				quad: ["var(--font-quad)", ...fontFamily.serif],
			},
			colors: {
				white: "#fff",
				green: colors.emerald,
				yellow: colors.amber,
				purple: colors.violet,
				gray: colors.neutral,
				"gray-150": "#EEEFF2",
				"gray-1000": "#050505",
				black: "#050505",
				"design-details": "#458886",
				"design-details-light": "#EEF3F3",
				"design-details-dark": "#273F3F",
				"hacker-news": "#FF965A",
				twitter: "#479BEA",
				current: "currentColor",
			},
			boxShadow: {
				xs: "0 1px 2px 0px rgba(0,0,0,0.03)",
				subtle: "0 4px 32px rgba(0,0,0,0.03)",
				cardHover:
					"0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)",
			},
			animation: {
				modalEnter: "modal-enter 200ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
			},
			keyframes: {
				"modal-enter": {
					"0%": { opacity: "0", transform: "translate(-50%, -50%) scale(.96)" },
					"100%": { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
				},
				slideDownAndFade: {
					from: { opacity: "0", transform: "translateY(-2px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideLeftAndFade: {
					from: { opacity: "0", transform: "translateX(2px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				slideUpAndFade: {
					from: { opacity: "0", transform: "translateY(2px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				slideRightAndFade: {
					from: { opacity: "0", transform: "translateX(-2px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
			},
		},
	},
	plugins: [typo, forms],
} satisfies Config
