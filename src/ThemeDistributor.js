import bg from "./background.svg";

export const ThemeDistributor = (theme) => ({
  // #action :
  //  background
  //  backdrop modal

  ScuiBackground: {
    background: `url(${bg})  no-repeat center center fixed`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },

  // Fonts
  ScuiFontSignup: {
    fontSize: "40px",
    letterSpacing: "-2px",
    wordSpacing: "0px",
    color: "#000000",
    fontWeight: 700,
    textDecoration: "none solid rgb(68, 68, 68)",
    fontStyle: "normal",
    fontVariant: "normal",
    textTransform: "capitalize"
  },

  // Divider

  ScuiDividerTB3: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  ScuiDividerTB2: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  ScuiDividerTB1: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },

  //

  ScuiLinkUnderLineRemove: {
    textDecoration: "none",
    textTransform: "none"
  },

  // #action :
  //  Grid Conteiner
  //  Main Paper
  //  Main Card
  //  Grid Card Footer

  ScuiMainContainer: {
    height: "100vh",
    overflow: "auto"
  },
  ScuiFlexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  ScuiCenter: {
    display: "flex",
    justifyContent: "center"
  },

  ScuiBoxFullHeight: {
    height: "100vh"
  },

  ScuiNone: {},

  ScuiPaperSmall: {
    maxWidth: 500
  },

  ScuiCardSmall: {
    maxWidth: 500,
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1)
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3)
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4)
    },

    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up("xl")]: {
      padding: theme.spacing(6)
    }
  }
});
