import { Box, Button, Collapse, createStyles, Divider, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import GrowItem from "../../components/header/GrowItem";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
  })
);
interface Props {}

export default function CreatePost({}: Props): ReactElement {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Paper variant="outlined">
        <Box padding={2} marginTop={2}>
          <Typography>The (unofficial) React.js subreddit for all things React!</Typography>
          <Box display="flex">
            <Box>
              <Typography variant="subtitle1">10.8k</Typography>
              <Typography>Components</Typography>
            </Box>
            <Box mx={5}></Box>
            <Box>
              <Typography variant="subtitle1">17</Typography>
              <Typography>Online</Typography>
            </Box>
          </Box>
          <Divider />
          <Box my={2}>
            <Typography component="h4" variant="subtitle2">
              Created Sep t, 2011
            </Typography>
            <Button variant="contained" fullWidth color="primary" style={{ borderRadius: 18 }}>
              Create Post
            </Button>
          </Box>
          <Divider />
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Community Options</Typography>
            </AccordionSummary>
            <AccordionDetails>This is community options</AccordionDetails>
          </Accordion>
        </Box>
      </Paper>
    </div>
  );
}
