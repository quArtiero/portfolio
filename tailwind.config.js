module.exports = {
  content: [
    './src/**/*.{js,jsx}'
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        background: '#0A0F23',
        neon: '#39FF14'
      },
      boxShadow: {
        neon: '0 0 10px #39FF14, 0 0 20px #39FF14'
      }
    }
  },
  plugins: []
}
