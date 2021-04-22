import React, { ReactElement } from "react";

import {
  Tabs,
  Tab,
  makeStyles,
  Theme,
  createStyles,
  TabProps,
  TabsProps,
  withStyles,
  Box,
  Paper,
} from "@material-ui/core";
import { Equalizer, NewReleases, Whatshot } from "@material-ui/icons";
export const RedditTabs = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    indicator: {
      display: "none",
    },
    centered: {
      alignItems: "center",
      justifyContent: "center",
    },
  })
)(Tabs);

export const RedditTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      display: "block",
      borderRadius: "20px",
      textAlign: "center",
      transition: "all .5s",
      color: "#555555",
      height: "auto",
      opacity: "1",
      float: "none",
      minHeight: 30,
      [theme.breakpoints.up("md")]: {
        minWidth: 90,
      },
      margin: "10px 5px",
      "&:hover": {
        color: "rgba(0,0,0,0.8)",
        backgroundColor: "",
        boxShadow: "0 7px 10px -5px rgba(0, 0, 0, 0.4)",
      },
    },
    selected: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
    },
    wrapper: {
      textTransform: "none",
      fontSize: "12px",
      fontWeight: 500,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center",
      color: "inherit",
    },
  })
)(Tab);

interface Props {}

export default function CategoryTab({}: Props): ReactElement {
  const [tabIndex, setTabIndex] = React.useState(1);
  return (
    <Box bgcolor="white" borderRadius={5} marginY={2}>
      <Paper variant="outlined">
        <RedditTabs value={tabIndex} onChange={(e, index) => setTabIndex(index)}>
          <RedditTab label={"Hot"} icon={<Whatshot style={{ marginBottom: "0px", marginRight: "5px" }} />} />
          <RedditTab label={"New"} icon={<NewReleases style={{ marginBottom: "0px", marginRight: "5px" }} />} />
          <RedditTab label={"Top"} icon={<Equalizer style={{ marginBottom: "0px", marginRight: "5px" }} />} />
        </RedditTabs>
      </Paper>
    </Box>
  );
}
