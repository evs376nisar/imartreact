// Import this once at the root of your project (index.js or _app.js)
import "@fontsource/josefin-sans"; // Defaults to weight 400
import "@fontsource/josefin-sans/600.css"; // If you use semi-bold
import "@fontsource/josefin-sans/700.css"; // If you use bold

import * as theme from "@mui/system";

export const baseThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 1000,
      lg: 1240,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          fontFamily: '"Josefin Sans", sans-serif', // 🔥 apply globally
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
        "#nprogress": {
          pointerEvents: "none",
        },
        "#nprogress .bar": {
          backgroundColor: "#5048E5",
          height: 3,
          left: 0,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 2000,
        },
      },
    },
    // ... keep your other component overrides unchanged
  },
  direction: "ltr",
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Josefin Sans", sans-serif', // 🔥 main font family
    button: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: "11.85px",
    },
    body3: {
      fontSize: "0.625rem",
      fontWeight: 400,
      lineHeight: "11.85px",
    },
    body4: {
      fontSize: "0.5rem",
      fontWeight: 400,
      lineHeight: "17px",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: "18.96px",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: "20px",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.375,
    },
    h7: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.375,
    },
    h8: {
      fontWeight: 600,
      fontSize: "0.75rem",
      lineHeight: 1.375,
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
};
