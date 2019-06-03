import React from "react";
import Page from "../components/Page";
import Nav from "../components/Nav";

const description = "Blogs of Dan Morrison";

export default function Notes() {
  return (
    <Page
      description={description}
      image={"/static/images/avatar.jpg"}
      title={"Dan Morrison - Blog"}
    >
      <Nav />
      <p>This is the notes page</p>
    </Page>
  );
}
