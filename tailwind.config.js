const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/primeng/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#325685",
          strong: "#223A59",
          light: "#B5C9E3",
          faded: "#D3DFEE",
        },
        secondary: {
          main: "#FFC72C",
          strong: "#D4A625",
          light: "#FFE395",
          faded: "#FFF4D5",
        },
        whiteShade: {
          strong: "#EBEBEB",
          main: "#F5F5F5",
          light: "#FAFAFA",
        },
        blackShade: {
          strong: "#0A0A0A",
          main: "#333333",
          light: "#5C5C5C",
        },
        background: "#F4F5F7",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      transitionProperty: {
        height: "max-height",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      const colors = theme("colors");

      const customProperties = {
        "--primary-main": colors.primary?.main,
        "--primary-strong": colors.primary?.strong,
        "--primary-light": colors.primary?.light,
        "--primary-faded": colors.primary?.faded,

        "--secondary-main": colors.secondary?.main,
        "--secondary-strong": colors.secondary?.strong,
        "--secondary-light": colors.secondary?.light,
        "--secondary-faded": colors.secondary?.faded,

        "--white-strong": colors.whiteShade?.strong,
        "--white-main": colors.whiteShade?.main,
        "--white-light": colors.whiteShade?.light,

        "--black-strong": colors.blackShade?.strong,
        "--black-main": colors.blackShade?.main,
        "--black-light": colors.blackShade?.light,

        "--background": colors.background,
      };

      addBase({ ":root": customProperties });
    }),
  ],
};
