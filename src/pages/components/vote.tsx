import { Box, createStyles, IconButton, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { ArrowDropUp as UpIcon } from "@material-ui/icons";
import { ArrowDropDown as DownIcon } from "@material-ui/icons";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginRight: 20,
    },
  })
);
interface Props {
  voteCnt: number;
}

export default function Vote({ voteCnt }: Props): ReactElement {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <IconButton disableRipple size="small">
          <UpIcon />
        </IconButton>
        <Typography>{voteCnt}</Typography>
        <IconButton disableRipple size="small">
          <DownIcon />
        </IconButton>
      </Box>
    </div>
  );
}
