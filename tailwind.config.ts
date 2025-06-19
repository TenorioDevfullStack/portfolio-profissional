import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff",
          dark: "#000000",
        },
        foreground: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        card: {
          DEFAULT: "#ffffff",
          dark: "#000000",
        },
        "card-foreground": {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        primary: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        "primary-foreground": {
          DEFAULT: "#ffffff",
          dark: "#000000",
        },
        secondary: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        "secondary-foreground": {
          DEFAULT: "#ffffff",
          dark: "#000000",
        },
        accent: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        "accent-foreground": {
          DEFAULT: "#ffffff",
          dark: "#000000",
        },
        border: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        input: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        ring: {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        muted: {
          DEFAULT: "#ffffff",
          dark: "#000000",
        },
        "muted-foreground": {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "electric-blue": "#00FFFF",
        "vibrant-cyan": "#06B6D4",
        "deep-teal": "#008080",
        "dark-blue": "#000080",
        "light-gray": "#CCCCCC",
        "dark-gray": "#333333",
        "emerald-green": "#10B981",
        "golden-amber": "#F59E0B",
        "ocean-blue": "#3B82F6",
        "sunset-orange": "#F97316",
        "warm-gray": "#6B7280",
        "cool-gray": "#9CA3AF",
        "soft-blue": "#60A5FA",
        "sage-green": "#34D399",
        "sky-cyan": "#0EA5E9",
        "mint-green": "#10B981",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-move": "gradient 15s ease infinite",
        float: "float 10s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
