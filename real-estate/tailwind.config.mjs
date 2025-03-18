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
	theme: {
		extend: {
		  colors: {
			customGray: '#f1f3f6', // Agregar tu color hexadecimal como un nombre personalizado
		  },
		},
	  },
};
