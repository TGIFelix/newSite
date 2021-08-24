module.exports = {
	mode: 'jit',

	purge: {
	  enabled: false,
	  content: [
		'src/*.md',
		'src/_includes/*.njk',
		'src/_includes/components/*.njk',
	  ]
	},

	plugins: [
		require('tailwindcss-debug-screens'),
	],

	darkMode: 'media', // or 'media' or 'class'

	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
	  
		extend: {
			fontFamily: {
				body: ["JetBrains Mono"]
			},
			colors: {
				primary: 'var(--primary-color)',
				dark: '#212121',
				light: '#fff'
			},
			fontSize: {
				xxl: 'clamp(2rem, 5vw, 4rem)',
			},
			keyframes: {
				fadein: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' },
				}
			},
			animation: {
				fadein: 'fadein 3000ms'
			},
	  	}
	}
}