module.exports = {
  content: [
    'src/**/*.{js,jsx,ts,tsx}', // Make sure your paths are correct
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // This line ensures that the forms plugin is used
  ],
};
