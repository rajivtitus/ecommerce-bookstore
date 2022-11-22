/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				lora: " 'Lora', serif ",
				sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: "#043E85",
				secondary: "#DDB57C",
			},
		},
	},
	plugins: [],
};
