/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#013659",
				primaryLight: "#01365945",
				customBlack: "#0C0C0C",
				customGray: "#888888",
				customBlue: "#0277C4",
			},
			fontFamily: {
				custom: "'Albert Sans', sans-serif",
			},
			backgroundColor: {
				customLight: "rgba(8, 73, 88, 0.04)",
			},
			screens: {
				"2xl": { min: "1440px" },
			},
		},
	},
	plugins: [],
};
