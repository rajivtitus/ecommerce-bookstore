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
				primary: "#016dc3",
				secondary: "#feAd00",
				lightGray: "#f3f4f6",
				medGray: "#e5e7eb",
				darkGray: "#4b5563",
				success: "#16a34a",
				failure: "#dc2626",
			},
		},
	},
	plugins: [],
};
