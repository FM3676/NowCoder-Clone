/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    // screens: {
    //   xs: "614px",
    //   sm: "1002px",
    //   md: "1022px",
    //   lg: "1092px",
    //   xl: "1280px",
    // },

    extend: {
      colors: {
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
        green: {
          50: "#eefaf7",
          250: "#5bd5ad",
          350: "#32ca99",
        },
      },
      maxWidth: {
        "8xl": "88rem",
      },
      width: {
        xs: "614px",
        sm: "1002px",
        md: "1022px",
        lg: "1092px",
        xl: "1280px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
