module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        "max-height": "max-height",
        spacing: "margin, padding",
      },
      transitionTimingFunction: {
        "ease-in-out-quint": "cubic-bezier(0.83, 0, 0.17, 1)",
      },
    },
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
