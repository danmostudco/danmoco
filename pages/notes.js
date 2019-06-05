import React from "react";
import Page from "../components/Page";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

const description = "Blog of Dan Morrison";

export default function Notes() {
  return (
    <Page
      description={description}
      image={"/static/images/avatar.jpg"}
      title={"Dan Morrison - Blog"}
    >
      <Nav />
      <Main>
        <h1>Notes</h1>
      </Main>
      <Footer />
    </Page>
  );
}
