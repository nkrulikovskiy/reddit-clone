import {
  AppBar,
  Box,
  Button,
  createStyles,
  IconButton,
  IconButtonProps,
  makeStyles,
  TextField,
  Theme,
  Toolbar,
  withStyles,
} from "@material-ui/core";
import {
  Edit as EditIcon,
  Equalizer,
  Notifications,
  Textsms,
  TrendingUp as Popular,
  Videocam,
} from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import React, { ReactElement } from "react";
import { ReactComponent as LogoIcon } from "../../assets/logo/Logo.svg";
import { ReactComponent as LogoText } from "../../assets/logo/Logo2.svg";
import SearchBar from "./SearchBar";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: theme.palette.background.paper,
    },
    grow: {
      flexGrow: 1,
    },
    free: {
      borderRadius: 30,
      height: 30,
      backgroundColor: "#FBE455",
      "&:hover": {
        backgroundColor: "#D7C34A",
      },
    },
    topicSelector: {
      width: 300,
      marginLeft: theme.spacing(2),
    },
  })
);

const RedditIconButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(1),
    },
  })
)((props: IconButtonProps) => <IconButton disableRipple {...props} />);

export default function Header(): ReactElement {
  const classes = useStyle();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} variant="outlined">
        <Toolbar>
          <LogoIcon height={40} />
          <Box mx={1}></Box>
          <LogoText height={30} />
          <Autocomplete
            options={list}
            classes={{ root: classes.topicSelector }}
            renderInput={(params) => <TextField {...params} variant="standard" placeholder="" />}
          />
          <SearchBar />
          {/* <GrowItem /> */}
          <Box>
            <RedditIconButton>
              <Popular />
            </RedditIconButton>
            <RedditIconButton>
              <Equalizer />
            </RedditIconButton>
            <RedditIconButton>
              <Videocam />
            </RedditIconButton>
            <RedditIconButton>
              <Textsms />
            </RedditIconButton>
            <RedditIconButton>
              <Notifications />
            </RedditIconButton>
            <RedditIconButton>
              <EditIcon />
            </RedditIconButton>
          </Box>
          <Button variant="contained" className={classes.free}>
            Free
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

const list: string[] = ["react", "material-ui"];
