import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);
interface Props {}

export default function Header({}: Props): ReactElement {
  const classes = useStyle();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography>reddit</Typography>
      </Toolbar>
    </AppBar>
  );
}


