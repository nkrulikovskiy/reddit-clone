import { createStyles, IconButton, InputBase, makeStyles, Paper, Theme } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import React, { ReactElement } from "react";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
      marginLeft: theme.spacing(2),
    },
    searchContainer: {
      height: "3rem",
      width: "100%",
    },
    search: {
      display: "flex",
      justifyContent: "center",
      maxWidth: "100%",
      transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: theme.spacing(1),
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      flex: 1,
      alignItems: "center",
    },
    inputInput: {
      width: "100%",
    },
  })
);

export default function SearchBar(): ReactElement {
  const classes = useStyle();


  const onSearch = () => {
    // if (event.key === "Enter") {
    //   setFocussed(false);
    // }
  };

  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.searchContainer}>
        <IconButton disableRipple disableFocusRipple>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onKeyDown={onSearch}
        />
      </Paper>
    </div>
  );
}
