import React from "react";
import Nav from "../components/Nav";

// for simplicity on a custom page,
// split each section into a stateless component
// then imported them into the Index component

const Intro = () => {
  return (
    <div className="main__intro">
      <h2 className="intro__subtext">
        Strategic Imperatives to Digital Products
      </h2>
      <h1 className="intro__name">Dan Morrison</h1>
    </div>
  );
};

const MainQuote = () => {
  return (
    <blockquote className="main__quote">
      <h3 className="quote__content">
        Curious product management leader with a results-driven approach to
        designing and shipping all things digital. Currently heading up New
        Product Development at LiveSafe.
      </h3>
    </blockquote>
  );
};

const SectionLink = props => {
  var route = "/" + `${props.route}`;
  return (
    <h4 className="main__link-section">
      Check out his <a href={route}>{props.displayName}</a>
    </h4>
  );
};

const Index = () => (
  <div className="main">
    <div className="main__content">
      <Intro />
      <MainQuote />
      <SectionLink route="notes" displayName="blog" />
      <SectionLink route="work" displayName="projects" />
      <SectionLink route="about" displayName="about him" />
    </div>
  </div>
);

export default Index;
