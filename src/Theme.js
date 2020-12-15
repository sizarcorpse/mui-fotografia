import { createMuiTheme } from "@material-ui/core/styles";

const baal = "#3f72af";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#112d4e",
      main: "#112d4e",
      dark: "#112d4e"
    },
    secondary: {
      light: " #3f72af",
      main: "#3f72af",
      dark: "#303f9f"
    },
    text: {
      primary: "#112d4e",
      secondary: "#3f72af"
    }
  },
  typography: {
    fontFamily: '"Roboto"',
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    body1: {},
    body2: {},
    subtitle1: {},
    subtitle2: {},
    button: {},
    caption: {},
    overline: {}
  }
});

theme.overrides = {
  MuiInputLabel: {
    root: {
      top: 0,
      color: "#112d4e",
      fontSize: 14,
      "&$focused": {
        color: "#3f72af"
      }
    }
  },
  MuiInputBase: {
    input: {
      height: 5,
      fontSize: "14px",
      color: "#3f72af"
    }
  },
  MuiOutlinedInput: {
    root: {
      "& fieldset": {
        borderColor: "#c1c1c1"
      },
      "&:hover": {
        "& fieldset.MuiOutlinedInput": {
          borderColor: "blue"
        }
      },
      "&$focused": {
        "& fieldset.MuiOutlinedInput-notchedOutline": {
          borderColor: "#7579e7"
        }
      },
      "&$active": {
        "& fieldset.MuiOutlinedInput-notchedOutline": {
          borderColor: "purple"
        }
      }
    }
  },

  // #action : Button

  MuiButton: {
    root: {
      borderRadius: 0,
      textTransform: "none"
    },
    containedPrimary: {
      height: 40,
      marginTop: theme.spacing(1),
      marginBotton: theme.spacing(1),
      backgroundColor: baal,
      "&:hover": {
        backgroundColor: "#396dab"
      }
    },
    containedSecondary: {
      height: 40,
      marginTop: theme.spacing(2),
      marginBotton: theme.spacing(2),
      backgroundColor: baal,
      "&:hover": {
        backgroundColor: "#396dab"
      }
    }
  }
};

theme.props = {
  // #action :
};

export default theme;
