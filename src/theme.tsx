import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const lightTheme = createMuiTheme({
  props: {
    MuiButton: {
      disableRipple: true,
    },
    MuiTab: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      main: "#0079d3",
    },
    secondary: {
      main: "#ff4500",
    },
    background: {
      default: "#DAE0E6",
    },
  },

  spacing: 5,
  typography: {
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      lineHeight: 2.5,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export const light = responsiveFontSizes(lightTheme);
export const dark = responsiveFontSizes(darkTheme);
