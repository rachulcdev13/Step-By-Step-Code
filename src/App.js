import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./Footer";
import Header from "./RouterComponents/Header";
import Router from "./RouterComponents/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
