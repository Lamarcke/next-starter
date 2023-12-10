import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        xs: "var(--mantine-spacing-xs)",
        sm: "var(--mantine-spacing-sm)",
        md: "var(--mantine-spacing-md)",
        lg: "var(--mantine-spacing-lg)",
        xl: "var(--mantine-spacing-xl)",
      },
      borderRadius: {
        xs: "var(--mantine-radius-xs)",
        sm: "var(--mantine-radius-sm)",
        md: "var(--mantine-radius-md)",
        lg: "var(--mantine-radius-lg)",
        xl: "var(--mantine-radius-xl)",
      },
      screens: {
        xs: "30em",
        sm: "48em",
        md: "64em",
        lg: "74em",
        xl: "90em",
      },
      fontSize: {
        xs: "var(--mantine-font-size-xs)",
        sm: "var(--mantine-font-size-sm)",
        md: "var(--mantine-font-size-md)",
        lg: "var(--mantine-font-size-lg)",
        xl: "var(--mantine-font-size-xl)",
      },
    },
  },
}
export default config
