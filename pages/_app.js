import React from 'react';
import App from 'next/app';
import '../styles/prism.css';
import Router from 'next/router';

import * as gtag from '../scripts/gtag';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

class CustomApp extends App {
    render() {
        const {Component, pageProps} = this.props;

        return <Component {...pageProps} />;
    }
}

export default CustomApp;
