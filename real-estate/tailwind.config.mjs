import typography from "@tailwindcss/typography";

export default {
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
				serif: ["Lora", "serif"],
			},
			colors: {
				customGray: '#f1f3f6',
				brand: '#c22a24'
			}
		},
	},
	plugins: [typography],
};
