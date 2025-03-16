import type { Config } from "tailwindcss"

const config = {

  darkMode: ["class"],

  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],

  prefix: "",

  theme: {

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {

      backgroundImage: {
        "odyssey": "url('/assets/images/composites/alto-odyssey.jpg')",
        "stars": "url('/assets/images/other/stars.jpg')",
      },

      fontFamily: {
        nunitosans: ["var(--font-nunitosans)", "sans-serif"],
        avantgarde: ["var(--font-avantgarde)", "sans-serif"]
      },
      
      fontSize: {
        "xslite": ["0.8125rem", {lineHeight: "1.125rem"}],
        "5.5xl": ["3.375rem", "1"]
      },

      letterSpacing: {
        "semiwide": "0.0125em",
      },

      margin: {
        "nav": "min(5vw, 5vh)"
      },

      width: {
        "card": "calc(100% - 22vw)",
        "smcard": "calc(100% - 26vw)",
        "xscard": "calc(100% - 28vw)"
      },

      maxWidth: {
        "card": "calc(100% - 22vw)",
        "smcard": "calc(100% - 26vw)",
        "xscard": "calc(100% - 28vw)"
      },

      maxHeight: {
        "card": "calc(100% - 22vh)"
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        fadeIn: {
          '0%': {opacity:'0', visibility: 'hidden'},
          '1%': {visibility:'visible'},
          '100%': {opacity:'1', visibility: 'visible'},
        },
        fadeOut: {
          '0%': {opacity:'1', visibility: 'visible'},
          '1%': {visibility:'visible'},
          '100%': {opacity:'0', visibility: 'hidden'},
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeIn": "fadeIn ease-in-out forwards",
        "fadeOut": "fadeOut ease-in-out forwards",
      },

      transitionDelay: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "900": "900ms",
        "1100": "1100ms",
        "1200": "1200ms",
        "1300": "1300ms",
        "1400": "1400ms",
        "1500": "1500ms",
        "1600": "1600ms",
        "1700": "1700ms",
        "1800": "1800ms",
        "1900": "1900ms",
        "2000": "2000ms",
        "2500": "2500ms",
      },

      transitionDuration: {
        "800": "800ms",
        "900": "900ms",
      },
      
    },
  },

  plugins: [require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide")
  ],

} satisfies Config

export default config