import React from 'react';
import styled from 'styled-components';

import Link from '../components/Link';
import Nav from '../components/Nav';
import Page from '../components/Page';
import {column} from '../styles/mixins';
import {colors, spacing} from '../styles/vars';

import Section from '../components/Section';
import {HomeHeroSection, WorkSection} from '../components/home/homeSections';
import WorkList from '../components/home/WorkList';
import AboutSection from '../components/home/AboutSection';
import Social from '../components/socials/social';

// for simplicity on a custom page,
// split each section into a stateless component
// then imported them into the Index component

const Main = styled.main`
    background-color: ${colors.dark};
    color: #fefefe;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroText = styled.h1`
    font-size: 90px;
    line-height: 1.18em;
    font-weight: 800;
    letter-spacing: -2px;
    color: ${colors.accent};

    @media (max-width: 991px) {
        margin-top: 0px;
        font-size: 70px;
    }

    @media (max-width: 767px) {
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 50px;
    }

    @media (max-width: 479px) {
        font-size: 32px;
        line-height: 1.2em;
    }
`;

const Tagline = styled.h2`
    font-size: 70px;
    font-weight: 600;
    line-height: 1.1em;
    letter-spacing: -0.5px;

    @media (max-width: 991px) {
        max-width: none;
        font-size: 40px;
    }

    @media (max-width: 479px) {
        margin-top: -8px;
        font-size: 20px;
        line-height: 1.3em;
        font-weight: 600;
    }
`;

const SelectWork = styled.h2`
    width: 100%;
    margin-top: 0px;
    margin-bottom: 40px;
    font-family: Inter, sans-serif;
    color: #fff;
    font-size: 48px;
    line-height: 1.1em;
    font-weight: 700;
    letter-spacing: -0.5px;

    @media (max-width: 991px) {
        font-size: 40px;
    }

    @media (max-width: 767px) {
        margin-bottom: 20px;
        font-size: 32px;
    }
    @media (max-width: 479px) {
        font-size: 24px;
    }
`;

const HomeFooter = styled.div`
    display: flex;
    width: 100%;
    max-width: 1400px;
    margin-top: 40px;
    padding: 20px;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    font-size: 14px;

    @media (max-width: 991px) {
        display: flex;
    }

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

const description = 'Strategic Products';
const Index = () => (
    <Page description={description} image={'/static/images/avatar.jpg'} title={`Dan Morrison - ${description}`}>
        <Nav />
        <Main>
            <HomeHeroSection className="home">
                <HeroText>Dan Morrison</HeroText>
                <Tagline>
                    Curious product leader with experience turning strategic imperatives into digital products.
                </Tagline>
            </HomeHeroSection>
            <WorkSection>
                <SelectWork>Select Projects</SelectWork>
                <WorkList></WorkList>
            </WorkSection>
            <AboutSection></AboutSection>
            <Section>
                <Social></Social>
            </Section>
        </Main>
    </Page>
);

export default Index;
