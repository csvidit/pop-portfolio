import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/data/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				linen: {
					"50": "#f6f6f0",
					"100": "#e1ddc9",
					"200": "#d5ceb3",
					"300": "#bdb087",
					"400": "#a99766",
					"500": "#9a8558",
					"600": "#846c4a",
					"700": "#6b543d",
					"800": "#5b4838",
					"900": "#503f33",
					"950": "#2d221b",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
