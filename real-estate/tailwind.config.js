module.exports = {
	content: [
		// Asegúrate de incluir todas las rutas de tus archivos
		"./src/**/*.{html,js,ts,jsx,tsx,md}",
	  ],
	daisyui:{
		themes: false, // Desactiva los temas globales de daisyUI
		styled: false, // Desactiva los estilos predeterminados
		base: false, // Desactiva los estilos base
	},
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
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
