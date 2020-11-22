const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: "class",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.gray.900"),
              "&:hover": {
                color: "#000",
                textDecoration: "none",
              },
            },
          },
        },

        dark: {
          css: {
            color: "#fff",
            a: {
              color: "#fff",
              "&:hover": {
                color: "#fff",
              },
            },
            "ol > li": {
              color: "#fff",
              "&:before": {
                color: "#fff",
              },
            },
            h1: {
              color: "#fff",
            },
            h2: {
              color: "#fff",
            },
            h3: {
              color: "#fff",
            },
            h4: {
              color: "#fff",
            },
            h5: {
              color: "#fff",
            },
            h6: {
              color: "#fff",
            },

            strong: {
              color: "#fff",
            },

            code: {
              color: "#fff",
            },

            figcaption: {
              color: "#fff",
            },
          },
        },
      }),
    },
  },

  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
}
