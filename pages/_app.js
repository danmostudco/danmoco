import React from "react";
import Router from "next/router";
import App, { Container } from "next/app";
import "../styles/styles.scss";

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

export default CustomApp;
