import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

const AboutHeader = styled.h2`
    width: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
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
        font-size: 32px;
    }

    @media (max-width: 479px) {
        font-size: 24px;
    }
`;

const Bio = styled.div`
    display: grid;
    margin-top: 30px;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

    @media (max-width: 991px) {
        justify-content: stretch;
        justify-items: stretch;
        -webkit-align-content: start;
        -ms-flex-line-pack: start;
        align-content: start;
        -ms-grid-columns: 2fr 2fr;
        grid-template-columns: 2fr 2fr;
    }

    @media (max-width: 767px) {
        margin-top: 40px;
        grid-template-columns: 2fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    @media (max-width: 479px) {
        grid-row-gap: 0px;
        margin-top: 20px;
    }

    p {
        width: 100%;
        max-width: 700px;
        margin-bottom: 1.4em;
        margin-top: 0px;
        opacity: 0.6;
        font-family: Inter, sans-serif;
        color: #fff;
        font-size: 18px;
        line-height: 1.5em;
        font-weight: 400;

        @media (max-width: 479px) {
            font-size: 16px;
        }
    }
`;

const AboutSection = () => (
    <Section>
        <AboutHeader margin-bottom="0px">Who's This Cowboy </AboutHeader>
        <Bio>
            <p>
                I'm an analytical mind nested in the creative shell of a digital product manager. I blend rigorous
                financial and operational savvy with technical and creative chops to build good stuff. I'm happiest when
                teams I build and lead are shipping new capabilities that push the boundaries of our offerings.
                <br />
                <br />
                As a consultant, designer, and PM I have deployed solutions in problem spaces including rotorcraft
                supply chain analytics, global health system compliance, rail logistics systems, security communications
                for the world’s biggest companies, and more.
                <br />
                <br />
                Over the years I have picked up a well-rounded skill set from delivering a litany of projects, from
                native applications to web apps to data services to product marketing campaigns to beta programs to
                C-Suite briefings.
            </p>
            <p>
                Raised in central Virginia, I recieved my degree in Finance from the University of Virginia while
                serving as Student Body President for 21,000 graduate and undergraduate students. My time in school
                taught me the enormous value of entertaining disparate ideas simultaneously.
                <br />
                <br />
                My pastimes as a kid included breaking my parents' cameras making films for local festivals, burning
                clay sculptures in the family oven, overheating laptops playing with 3D Rendering software, and
                programming video games with my brother and best friend, Ben.
                <br />
                <br />
                In my spare time, I'm interested in investing in life-long passions, as opposed to onesie-twosie
                activities (my grandchildren will never care that I got 3 stars on every Angry Birds level). Those
                passions as of late have included chess, drawing, tennis, yoga, and writing.
            </p>
        </Bio>
    </Section>
);

export default AboutSection;
