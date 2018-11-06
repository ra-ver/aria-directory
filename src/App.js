// @flow
import "babel-polyfill";
import React from "react";
import { ThemeProvider } from "mineral-ui/themes";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => (
  <ThemeProvider>
    <>
      <Header />
      <SideNav />
      <MainContent />
      <Footer />
    </>
  </ThemeProvider>
);
export default App;
