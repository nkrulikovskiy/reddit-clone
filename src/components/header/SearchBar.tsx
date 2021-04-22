import { Box, createStyles, IconButton, InputBase, makeStyles, Theme, useTheme } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import React, { ReactElement, useState } from "react";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
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
interface Props {}

export default function SearchBar({}: Props): ReactElement {
  const classes = useStyle();
  const theme = useTheme();

  const [isFocussed, setFocussed] = useState(false);

  const onSearchCancel = () => {
    setFocussed(false);
  };
  const onSearch = () => {
    setFocussed(true);
    // if (event.key === "Enter") {
    //   setFocussed(false);
    // }
  };
  const onFocusLoss = () => {
    setFocussed(false);
  };

  return (
    <div>
      <Box
        className={classes.search}
        borderRadius={theme.shape.borderRadius}
        bgcolor={isFocussed ? theme.palette.background.default : theme.palette.background.paper}
        boxShadow="1"
        height={"3rem"}
      >
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
      </Box>
    </div>
  );
}
