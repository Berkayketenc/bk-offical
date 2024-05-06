module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {}, // postcss-nesting eklentisini etkinleştirin
    tailwindcss: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': true },
    },
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
};
