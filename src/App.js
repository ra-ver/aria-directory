import "babel-polyfill";
import React from "react";
import Box from "mineral-ui/Box";
import { ThemeProvider } from "mineral-ui/themes";

const App = () => (
  <ThemeProvider>
    <>
      <Box>Header</Box>
      <Box inline width={1 / 3}>
        Sidebar
      </Box>
      <Box inline>Content</Box>
    </>
  </ThemeProvider>
);
export default App;
