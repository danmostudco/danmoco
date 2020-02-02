import React from 'react';
import Articles from '../components/articles/articles';
import Page from '../components/Page';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';

const description = 'Blog of Dan Morrison';

const Notes = () => (
    <Page
        description={'Thoughts on products, product management, UX, design, life, and more.'}
        image={'/static/images/avatar.jpg'}
        title={'Dan Morrison - Notes'}
    >
        <Nav />
        <Main>
            <Articles />
        </Main>
        <Footer />
    </Page>
);

export default Notes;
