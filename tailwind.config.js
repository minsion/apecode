module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./.vitepress/**/*.js", "./.vitepress/**/*.vue", "./.vitepress/**/*.ts"],
    options: {
      safelist: ["html", "body"],
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},

    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      180: "1.8",
      200: "2",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
