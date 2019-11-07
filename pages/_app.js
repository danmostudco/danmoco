import React from "react";
import Router from "next/router";
import withGA from "next-ga";
import App, { Container } from "next/app";
import '../styles/prism.css';

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withGA("UA-41051140-1", Router)(CustomApp);
