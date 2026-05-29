import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        tag: ["13px", { lineHeight: "1.2" }],
        body: ["16px", { lineHeight: "24px" }],
        "card-title": ["24px", { lineHeight: "1.35" }],
        stat: ["36px", { lineHeight: "1" }],
        section: ["48px", { lineHeight: "1.15" }],
        display: ["60px", { lineHeight: "1.1" }],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        "vbs-yellow": "#EEB211",
        "vbs-blue": "#08A0E9",
        "vbs-green": "#1DA100",
        "vbs-red": "#D70416",
        "vbs-soft": "#FEF3F3",
        "vbs-black": "#000000",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
