import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(30 15% 88%)",
        input: "hsl(30 15% 88%)",
        ring: "hsl(24 45% 50%)",
        background: "hsl(40 33% 98%)",
        foreground: "hsl(30 10% 15%)",
        primary: {
          DEFAULT: "hsl(24 45% 50%)",
          foreground: "hsl(40 33% 98%)",
        },
        secondary: {
          DEFAULT: "hsl(30 15% 94%)",
          foreground: "hsl(30 10% 25%)",
        },
        destructive: {
          DEFAULT: "hsl(0 65% 55%)",
          foreground: "hsl(40 33% 98%)",
        },
        muted: {
          DEFAULT: "hsl(30 15% 94%)",
          foreground: "hsl(30 5% 45%)",
        },
        accent: {
          DEFAULT: "hsl(30 15% 94%)",
          foreground: "hsl(30 10% 25%)",
        },
        popover: {
          DEFAULT: "hsl(40 33% 98%)",
          foreground: "hsl(30 10% 15%)",
        },
        card: {
          DEFAULT: "hsl(40 33% 98%)",
          foreground: "hsl(30 10% 15%)",
        },
        cream: {
          50: "#FEFCF9",
          100: "#FDF8F0",
          200: "#FAF0E4",
          300: "#F5E6D3",
          400: "#EDD5B8",
          500: "#E0C19E",
        },
        caramel: {
          400: "#D4956A",
          500: "#C17F53",
          600: "#A86941",
          700: "#8C5535",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config