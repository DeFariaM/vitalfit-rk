/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#d74545",
        secondary: "#d6774f",
        accent: "#475157",
        bgray: "#475157",
      },
      fontFamily: {
        bebas: "var(--bebas)",
        montserrat: "var(--montserrat)",
      },
      backgroundImage: {
        pattern: "url('.../public/subtle-prism.svg')",
        tornado: "url('../public/diamond-sunset.svg')",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
