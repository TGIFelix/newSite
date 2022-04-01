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
			  '.ltr': {
				direction: 'ltr',
			  },
			}
	  
			addUtilities(newUtilities, ['responsive'])
		  })
	],

	darkMode: 'media',
	
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
			keyframes: {
				fadein: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' },
				}
			},
			animation: {
				fadein: 'fadein 3000ms'
			},
			backgroundImage: {
				'devops': "url('/img/bg-devops.webp')",
			}
	  	}
	}
}