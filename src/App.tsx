import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { Fragment, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useUIStore } from "./context/UiStore";
import Home from "./pages/Home";

function App() {
  const { theme } = useUIStore();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback = {<Fragment/>}>
          <Route path="/" component={Home} />
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
