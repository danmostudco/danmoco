import React from 'react';
import App from 'next/app';
import '../styles/prism.css';

class CustomApp extends App {
    render() {
        const {Component, pageProps} = this.props;

        return <Component {...pageProps}></Component>;
    }
}

export default CustomApp;
