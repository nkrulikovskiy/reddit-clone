import { Box, Button, createStyles, Link, makeStyles, Paper, Theme, Typography, useTheme } from "@material-ui/core";
import { Message } from "@material-ui/icons";
import React, { ReactElement } from "react";
import { MessageIcon } from "../../assets/logo";
import CategoryItem from "../../components/header/CategoryItem";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function Moderators(): ReactElement {
  const classes = useStyle();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Box>
        <Paper>
          <Box p={2} borderRadius={5} bgcolor={theme.palette.primary.main} color="white">
            <Typography variant="subtitle1">View by Post Types</Typography>
          </Box>
          <Box padding={2}>
            <Button variant="outlined" color="primary" style={{ borderRadius: 18 }} fullWidth startIcon={<Message />}>
              Message the mods
            </Button>

            <Typography>
              <Link style={{ cursor: "pointer" }}>u/GennaroIsGod</Link>
              &nbsp;
              <span>Admin</span>
            </Typography>

            <Box display="flex">
              <div></div>
              <Button color="primary" style={{ marginLeft: "auto", marginRight: 0 }}>
                VIEW ALL MODERATORS
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
