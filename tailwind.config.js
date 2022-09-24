module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // add font family
      fontFamily: {
        Rubik: ["Rubik, sans-serif"],
      },

      colors: {
        green: "#008485",
        red: "#CD4858",
        purple: "#882D83",
        pink: "#FA4EAB",
      },

      container: {
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
  },
  plugins: [],
};
