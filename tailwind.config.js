/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#01303f',
        text: '#d4f0fc',
        subtext: '#ffffff',
        titles: '#02577a',
        links: '#89d6fb'
      },
      fontFamily: {
        body: ['Inter'],
        tech: ['Share Tech Mono'
        ]
      }
    },
  },
  plugins: [],
}

