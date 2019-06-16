import React from "react";
import Router from "next/router";
import App, { Container } from "next/app";
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
