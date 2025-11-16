const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eef4ff",
          100: "#d6e4ff",
          500: "#185CFF", // main blue
          600: "#1349cc",
          700: "#0f3aa3",
        },
        dark: "#0B1433",
        body: "#4b587c",
        lightBg: "#f5f7ff",
      },
      boxShadow: {
        card: "0 18px 45px rgba(15, 76, 129, 0.12)",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
    },
  },
};

export default config;
