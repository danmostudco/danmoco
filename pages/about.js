import React from "react";
import Page from "../components/Page";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

// Page
// Nav
// Main
// Footer
// Page

const description =
  "Curious product management leader with a results-driven approach to designing and shipping all things digital. Currently heading up New Product Development at LiveSafe.";

export default function About() {
  return (
    <Page
      description={description}
      image={"/static/images/avatar.jpg"}
      title={"Dan Morrison - About Me"}
    >
      <Nav />
      <Main>
        <h1>About Me</h1>
      </Main>
      <Footer />
    </Page>
  );
}
