import React from "react";
import Page from "../components/Page";
import Nav from "../components/Nav";

const description = "Personal and client projects by Dan Morrison";

export default function Work() {
  return (
    <Page
      description={description}
      image={"/static/images/avatar.jpg"}
      title={"Dan Morrison - About Me"}
    >
      <Nav />
      <p>This is the work page</p>
    </Page>
  );
}
