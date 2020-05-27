import React from 'react';
import styled from 'styled-components';

import Link from '../../components/Link';
import Nav from '../../components/Nav';
import Page from '../../components/Page';
import {column} from '../../styles/mixins';
import {colors, spacing} from '../../styles/vars';

import {Section} from '../../components/Section';

import Social from '../../components/socials/social';
import Wrapper from '../../components/work/Wrapper';
import CaseHero from '../../components/work/CaseHero';
import CaseSection from '../../components/work/CaseSection';
import CaseQuote from '../../components/work/CaseQuote';

const CaseMain = styled.main`
    background-color: ${colors.dark};
    color: #fefefe;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const description = 'Case Study - LiveSafe Chatbot';
const Index = () => (
    <Page description={description} image={'/static/images/avatar.jpg'} title={`Dan Morrison - ${description}`}>
        <Nav background-color={colors.dark} />
        <CaseMain>
            <CaseHero background-color={'#fff'} background-image={'/static/images/safebot/cb_hero.jpg'} />
            <Wrapper background-color="#4e5664">
                <CaseSection>
                    <h2>A Better Way To Report</h2>
                    <p>
                        LiveSafe helps connect users to the help that can help them resolve various incidents. Whether
                        this is a slip and fall from a leaky pipe, stolen laptops from a school library, getting mental
                        help for a colleague struggling with addiction, or even worse - LiveSafe dynamically puts users
                        in contact with the resources that can help them in ambiguous situations.
                    </p>
                    <p>
                        For the end user, this helps them resolve their safety issues sooner. For the organization, it
                        helps them prevent costly react & respond protocols with early interventions.
                    </p>
                    <p>
                        However, safety and security incidents don’t happen everyday, so guiding users through the
                        submission process and ensuring they feel like they will get a timely response is critical. I
                        led a team researching issues with our old tip submission flow and led the development of an
                        upgrade across design, engineering, and data science.
                    </p>
                </CaseSection>
            </Wrapper>
            <Wrapper background-color="#18171d">
                <CaseSection>
                    <h2>Confidence & Quality Data</h2>
                    <p>
                        Using LiveSafe’s categorized incident data, we trained a recommender engine to help guide users
                        through the process of submitting a concern. We found in early iterations that asking a user to
                        categorize and then submit led to tension in choosing the “right” incident type. The more we
                        could prompt the user and have them confirm rather than provide the raw inputs, the better.
                    </p>
                    <CaseQuote text="At the start people don’t want speed, they want clarity. Once they have clarity, they want speed."></CaseQuote>
                    <p>
                        We had to provide great service through the entire journey, not just the initial report. Users
                        don’t submit safety information on a day to day basis, so letting them know they are in good
                        hands was a critical first step, and offering assurances and cues during the submission process
                        was critical.
                    </p>
                    <p>
                        Once the users understood our system could understand their concerns on a number of different
                        dimensions, their focus shifted to having a speedy, quality interaction with the dispatcher
                        resolving the tip. Everything from connecting to help, waiting for a response, and closeout was
                        under a microscope.
                    </p>
                </CaseSection>
            </Wrapper>
            <Wrapper background-color="#2d2d30">
                <CaseSection>
                    <h2>Choose Your Adventure</h2>
                    <p>Lorum ipsum</p>
                    <img className="image_960" src="/static/images/safebot/zoomPhone.jpg"></img>
                    <h3>Start Typing</h3>
                    <p>
                        Once the users understood our system could understand their concerns on a number of different
                        dimensions, their focus shifted to having a speedy, quality interaction with the dispatcher
                        resolving the tip. Everything from connecting to help, waiting for a response, and closeout was
                        under a microscope.
                    </p>
                    <h3>What Can I report?</h3>
                    <p>
                        Once the users understood our system could understand their concerns on a number of different
                        dimensions, their focus shifted to having a speedy, quality interaction with the dispatcher
                        resolving the tip. Everything from connecting to help, waiting for a response, and closeout was
                        under a microscope.
                    </p>
                    <h3>I need help now</h3>
                    <p>
                        Once the users understood our system could understand their concerns on a number of different
                        dimensions, their focus shifted to having a speedy, quality interaction with the dispatcher
                        resolving the tip. Everything from connecting to help, waiting for a response, and closeout was
                        under a microscope.
                    </p>
                    <img className="image_full-width" src="/static/images/safebot/twohandsphones.png"></img>
                </CaseSection>
            </Wrapper>
            <Wrapper background-color="#18171d">
                <CaseSection>
                    <h2>Confidence & Quality Data</h2>
                    <p>
                        Using LiveSafe’s categorized incident data, we trained a recommender engine to help guide users
                        through the process of submitting a concern. We found in early iterations that asking a user to
                        categorize and then submit led to tension in choosing the “right” incident type. The more we
                        could prompt the user and have them confirm rather than provide the raw inputs, the better.
                    </p>
                    <p>More to come later...</p>
                </CaseSection>
            </Wrapper>
        </CaseMain>
    </Page>
);

export default Index;
