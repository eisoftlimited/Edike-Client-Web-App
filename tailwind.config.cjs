/** @type {import('tailwindcss').Config} */


const newColors = {
	primary: 'var(--primary)',
	secondary: 'var(--secondary)',
	tertiary: 'var(--tertiary)',
	stroke: 'var(--stroke)',
	lightGray: 'var(--light-gray)',
	darkGray: 'var(--dark-gray)',
	white: 'var(--app-white)',
	black: 'var(--app-black)',
	success: 'var(--success)',
	error: 'var(--error)',
	warning: 'var(--warning)',
	boldText: 'var(--bold-text)'
}


module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx,vue}",
	],
	theme: {
	  extend: {
		colors: newColors,
	  },
	},
	plugins: [],
  }