import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import Student from "./Student";  

function App() {
  return (
    <>
      <Header />
      <Container>
        <Student name={"Mr.Rahul"}
        />
      </Container>
      <Footer />
    </>
  );
}
export default App;
