import React, { ReactElement } from "react";
import { Box, Container, Grid, Paper } from "@material-ui/core";
import Header from "../components/header/Header";
import CategoryTab from "./components/CategoryTab";
import TopicItem from "./components/TopicItem";
import { mockComponent } from "react-dom/test-utils";
import { mockPost } from "../consts/mockData";

interface Props {}

export default function Home(): ReactElement {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <CategoryTab />
            <Box>
              <Paper>
                {mockPost.map((item, index) => (
                  <TopicItem key={index} post={item} />
                ))}
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Paper style={{ height: "80vh" }}></Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
