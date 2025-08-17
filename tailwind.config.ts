import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'], // works with your ThemePanel
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",       // optional if you store rgb vars
      },
      // You can also just use arbitrary values like bg-[color:var(--panel)]
    },
  },
  plugins: [],
} satisfies Config;
