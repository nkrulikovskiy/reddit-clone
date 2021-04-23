import { Box, Container, Grid, Paper } from "@material-ui/core";
import React, { ReactElement } from "react";
import Header from "../components/header/Header";
import { mockPost } from "../consts/mockData";
import CategoryList from "./components/CategoryList";
import CategoryTab from "./components/CategoryTab";
import CreatePost from "./components/CreatePost";
import Moderators from "./components/Moderators";
import TopicItem from "./components/TopicItem";

export default function Home(): ReactElement {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={12} md={9}>
            <CategoryTab />
            <Box>
              <Paper>
                {mockPost.map((item, index) => (
                  <TopicItem key={index} post={item} />
                ))}
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <CreatePost />
            <CategoryList />
            <Moderators />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
