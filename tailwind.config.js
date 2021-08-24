const plugin = require('tailwindcss/plugin')

module.exports = {
	mode: 'jit',

	purge: {
	  enabled: false,
	  content: [
		'src/_includes/**/*.njk',
	  ]
	},

	plugins: [
		require('tailwindcss-debug-screens'),
		plugin(function({ addUtilities }) {
			const newUtilities = {
			  '.rtl': {
				direction: 'rtl',
			  },
			}
	  
			addUtilities(newUtilities, ['responsive'])
		  })
	],

	darkMode: 'media', // or 'media' or 'class'

	theme: {
		container: {
			center: true,
			padding: '0.5rem',
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