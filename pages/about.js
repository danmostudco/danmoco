import React from "react";
import styled from "styled-components";

import { heading } from "../styles/mixins";
import { spacing } from "../styles/vars";
import A from "../components/elements/a";
import Footer from "../components/Footer";
import H3 from "../components/elements/h3";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Page from "../components/Page";
import Social from "../components/socials/social";

const AboutTitle = styled.h1`
  ${heading}
  color: #2e2e2e;
  font-size: 2.5em;
  margin-bottom: ${spacing.large};
`;

const description = "Strategic Products";

const Index = () => (
  <Page
    description={description}
    image={"/static/images/avatar.jpg"}
    title={"Dan Morrison - About Me"}
  >
    <Nav />
    <Main>
      <AboutTitle>{"About Me"}</AboutTitle>
      <p>
        I'm an analytical mind nested in the creative shell of a digital product
        manager. I blend rigorous financial and operational savvy with technical
        and creative chops to build good stuff.
      </p>
      <p />
      <p>
        As a designer and consultant, I’ve both led and served on teams
        delivering applications that facilitate human coordination at a global
        scale. I love crunchy problems and have designed for problem spaces
        including rotorcraft supply chain analytics, global health system
        compliance, rail logistics systems spanning America, crowd-sourcing
        threat intelligence for the world’s biggest companies, and more.
      </p>
      <H3>{"Contact"}</H3>
      <Social />
      <p>
        Raised in central Virginia, I recieved my degree in Finance from the
        University of Virginia's{" "}
        <A href="https://www.commerce.virginia.edu/">
          {"McIntire School of Commerce"}
        </A>{" "}
        while serving as{" "}
        <A href="https://www.youtube.com/watch?v=nrKoYcHIPZ8">
          {"Student Body President"}
        </A>{" "}
        for UVA's 21,000 graduate and undergraduate students.
      </p>
      <p>
        Growing up, I created - a lot. My favorite pastimes included breaking my
        parents' cameras making films for local festivals, burning up clay
        sculptures in the family oven, overheating laptops playing with 3D
        Rendering software, and programming video games with my brother and best
        friend, Ben.
      </p>
    </Main>
    <Footer />
  </Page>
);

export default Index;
