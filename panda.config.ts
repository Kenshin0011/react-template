import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: {
            value: "system-ui, 'Segoe UI', Roboto, sans-serif",
          },
          heading: {
            value: "system-ui, 'Segoe UI', Roboto, sans-serif",
          },
          mono: {
            value: "ui-monospace, Consolas, monospace",
          },
        },

        sizes: {
          mobileHeader: {
            value: "4.25rem",
          },
          main: {
            value: "72rem",
          },
          sidebar: {
            value: "18rem",
          },
        },
      },

      semanticTokens: {
        colors: {
          text: {
            value: {
              base: "#6b6375",
              _dark: "#9ca3af",
            },
          },

          heading: {
            value: {
              base: "#08060d",
              _dark: "#f3f4f6",
            },
          },

          bg: {
            value: {
              base: "#ffffff",
              _dark: "#16171d",
            },
          },

          border: {
            value: {
              base: "#e5e4e7",
              _dark: "#2e303a",
            },
          },

          codeBg: {
            value: {
              base: "#f4f3ec",
              _dark: "#1f2028",
            },
          },

          accent: {
            value: {
              base: "#aa3bff",
              _dark: "#c084fc",
            },
          },

          accentBg: {
            value: {
              base: "rgba(170,59,255,.1)",
              _dark: "rgba(192,132,252,.15)",
            },
          },

          accentBorder: {
            value: {
              base: "rgba(170,59,255,.5)",
              _dark: "rgba(192,132,252,.5)",
            },
          },

          socialBg: {
            value: {
              base: "rgba(244,243,236,.5)",
              _dark: "rgba(47,48,58,.5)",
            },
          },
        },
      },
    },
  },

  jsxFramework: "react",
  outdir: "styled-system",
});
