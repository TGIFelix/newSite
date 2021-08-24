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
		colors: {
			primary: 'var(--primary-color)',
			dark: '#212121',
			light: '#fff'
		},
		fontSize: {
			xxl: 'clamp(2rem, 5vw, 4rem)',
		},
	  }
	}
  }