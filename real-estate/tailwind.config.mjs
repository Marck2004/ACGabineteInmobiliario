import typography from "@tailwindcss/typography";

export default {
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
				serif: ["Lora", "serif"],
			},
		},
	},
	plugins: [typography],
};
