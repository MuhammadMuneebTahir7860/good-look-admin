import { styled } from "@mui/material/styles";
import { colors } from "../../constants/Color";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PaidIcon from "@mui/icons-material/Paid";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EngineeringIcon from "@mui/icons-material/Engineering";
export const DS = {
  MainPageContainer: styled("div")(() => ({
    width: "100%",
  })),
  PagetopBoxesContainer: styled("div")(() => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 30,
    "@media (max-width: 900px)": {
      display: "block",
    },
  })),
  TopBox: styled("div")(({ color }) => ({
    width: "30%",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    backgroundColor: color,
    marginTop: 10,
    "@media (max-width: 900px)": {
      width: "100%",
    },
  })),
  BoxCountText: styled("p")(() => ({
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  })),
  BoxTitle: styled("p")(() => ({
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  })),
  WbSunnyIcon: styled(DryCleaningIcon)(() => ({
    color: colors.white,
    height: 50,
    width: 50,
  })),
  CurrencyExchangeIcon: styled(AccountCircleIcon)(() => ({
    color: colors.white,
    height: 50,
    width: 50,
  })),
  PaidIcon: styled(EngineeringIcon)(() => ({
    color: colors.white,
    height: 50,
    width: 50,
  })),
  GraphContainer: styled("div")(() => ({
    width: "99.3%",
    minHeight: 350,
    backgroundColor: colors.graphBgClr,
    // border: colors.graphContainerBorder && `1px solid ${colors.graphContainerBorderClr}`,
    marginBottom: 30,
    boxShadow:
      colors.graphContainerBoxShadow &&
      `0 1px 20px 0px ${colors.graphContainerBoxShadowClr}`,
  })),
  TotalNumbersHeadingContainersRow: styled("div")(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  })),
  TotalNumbersHeadingContainer: styled("div")(({ color, width }) => ({
    width: width,
    minHeight: 40,
    backgroundColor: color,
    marginTop: 10,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    "@media (max-width: 900px)": {
      paddingLeft: 10,
      paddingRight: 10,
    },
  })),
  TotalNumbers: styled("p")(() => ({
    marginTop: 0,
    marginBottom: 0,
    color: colors.white,
    fontSize: 16,
    fontWeight: "bolder",
    "@media (max-width: 900px)": {
      fontSize: 12,
    },
    "@media (max-width: 500px)": {
      fontSize: 10,
    },
  })),
  GraphContainerHeight: styled("div")(() => ({
    minHeight: 300,
  })),
  GraphsRow: styled("div")(() => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 900px)": {
      display: "block",
    },
  })),
  InsideRowGraphContainer: styled("div")(() => ({
    width: "49%",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  })),
  ChartsTitle: styled("p")(() => ({
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
    fontSize: 22,
  })),
  LineSeparator: styled("div")(() => ({
    width: "100%",
    backgroundColor: colors.white,
    height: 2,
    marginTop: 20,
    marginBottom: 40,
  })),
};
