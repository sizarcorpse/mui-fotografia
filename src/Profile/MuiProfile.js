import bg from "../Assets/background.svg";

export const MuiProfile = (theme) => ({
  //cover and info

  ScuiCoverBG: {
    background: `url(${bg}) no-repeat fixed center`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },

  ScuiProfilePhoto: {
    height: 100,
    width: 100,
    borderRadius: 0
  }

  // user navigation
});
