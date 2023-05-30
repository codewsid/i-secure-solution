/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-bg': '#0B072A',
				'custom-green': '#09D21D'
			},
			fontFamily: {
        sans: ["Chakra Petch", ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
