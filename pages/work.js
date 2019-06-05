import React from "react";
import Page from "../components/Page";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

const description = "Personal and client projects by Dan Morrison";

export default function Work() {
  return (
    <Page
      description={description}
      image={"/static/images/avatar.jpg"}
      title={"Dan Morrison - About Me"}
    >
      <Nav />
      <Main>
        <h1>Work</h1>
      </Main>
      <Footer />
    </Page>
  );
}
