export default {
	content: [
		// Asegúrate de incluir todas las rutas de tus archivos
		"./src/**/*.{html,js,ts,jsx,tsx,md}",
	  ],
	  plugins: [require("@tailwindcss/typography")],
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
	}
};
