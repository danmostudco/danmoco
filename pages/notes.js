import React from "react";
import Articles from "../components/articles/articles";
import Page from "../components/Page";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

const description = "Blog of Dan Morrison";

const Notes = () => (
  <Page
    description={
      "Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    }
    image={"/static/images/avatar.jpg"}
    title={"Dan Morrison - Blog"}
  >
    <Nav />
    <Main>
      <Articles />
    </Main>
    <Footer />
  </Page>
);

export default Notes;
