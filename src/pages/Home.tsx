import React, { ReactElement } from "react";
import { Container } from "@material-ui/core";

interface Props {}

export default function Home(): ReactElement {
  return (
    <div>
      <Container maxWidth="lg">This is Home</Container>
    </div>
  );
}
