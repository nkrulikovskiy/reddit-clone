import { Box, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { PostTypeColor } from "../../consts/mockData";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      borderRadius: theme.spacing(3),
      padding: "3px 15px",
    },
  })
);
interface Props {
  postCategory: PostCategory;
}

export default function CategoryItem({ postCategory }: Props): ReactElement {
  const classes = useStyle();
  return (
    <span className={classes.root} style={{ backgroundColor: PostTypeColor[postCategory.postType] }}>
      {postCategory.title}
    </span>
  );
}
