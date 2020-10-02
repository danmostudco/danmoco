import React from 'react';
import styled from 'styled-components';

import Nav from '../../components/Nav';
import Page from '../../components/Page';
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

const extraPadding = {
    paddingTop: spacing.large
};

const borderRadius = {
    borderRadius: '8px'
};

const description = 'Insights';
const Index = () => (
    <Page description={description} image={'/static/images/avatar.jpg'} title={`Dan Morrison - ${description}`}>
        <Nav background-color={colors.dark} />
        <CaseMain>
            <CaseHero
                title="Insights"
                role="Product Manager"
                year="2020"
                background-color={'#fff'}
                background-image={'/static/images/insights/in_hero.jpg'}
            />
            <Wrapper background-color="#4e5664">
                <CaseSection>
                    <h2>Intelligent Reporting</h2>
                    <p>
                        Managing a security communications platform for your community can be overwhelming, as there are
                        numerous moving parts to track. Who has downloaded the company app? Who is using what features I
                        purchased? How much outbound communication is my team pushing, and about what topics? How many
                        inbounds am I getting, and what is the content of those messages?
                    </p>
                    <p>
                        For the broad base of clients that deploy LiveSafe, answering these questions was challenging.
                        We span over a dozen industries and workforces ranging from a couple hundred employees to
                        hundreds of thousands. Additionally, at different points in a deployment lifecycle clients
                        require different types of information, which multiplies the challenge manifold.
                    </p>
                    <p>
                        We set out to create a flexible product that would grow with the needs of our clients as their
                        usage of the platform matured.
                    </p>
                </CaseSection>
            </Wrapper>
            <Wrapper background-color="#18171d">
                <CaseSection>
                    <h2>Optimize for Flexibility</h2>
                    <p>
                        We started with a one-size fits all report we would distribute to our clients on a monthly
                        basis. Very quickly it became apparent that we would struggle to make this work for as wide and
                        varied of a client-base as LiveSafe. Analyses that played well for our education clients and
                        their broad campuses weren’t that relevant for our enterprise clients in single locations.
                        Visualizations prepared for our healthcare clients and their 24/7 operations didn’t mesh with
                        our event-driven sports & entertainment clients.
                    </p>
                    <p>
                        The team iterated over and over, watching clients who gravitated toward bits of our early
                        reports and skipped over other entire sections. We knew from the disparate responses we would
                        have to tackle the problem in an entirely different fashion.
                    </p>
                    <CaseQuote text="We couldn’t create just reports. We needed to create an engine that assembled reports dynamically based on context."></CaseQuote>
                    <p>
                        This made for an exciting challenge bounded by a litany of constraints: differing needs per
                        client, limited engineering resources to execute, the need to rapidly prototype and experiment
                        with real-world data. As a product manager, I had to lean into these constraints more than ever
                        before and devise how my team could use them to our avantage.
                    </p>
                </CaseSection>
            </Wrapper>
            <Wrapper background-color="#2d2d30">
                <CaseSection>
                    <h2>Dynamic Reporting</h2>
                    <p>
                        We began crafting a monthly report to deliver to clients via email, with the idea that we would
                        focus on surfacing key statistics and anomalous data directly in their inbox. In the same way
                        users expect emails from their banks, their cloud providers, their insurance provider, their
                        favorite brands, so too would clients get a digestible email regarding their LiveSafe activity.
                        The emails covered the common questions our clients peppered us in check-in meetings: "Is this
                        number normal?" "What does that look like for other clients?" "Can you guys tell me when you
                        detect X or Y?"
                    </p>
                    <p>
                        A vessel emerged built for flexibility. A report that showed what was relevant for that month,
                        and hide what was not, with some common-sense thresholds built in to determine what was in and
                        what was out. If certain activity was steady, there was no sense in surfacing that to key
                        stakeholders. But with enough volatility or change over time, we generated a small module
                        detailing the change and some underlying information.
                    </p>
                    <img className="image_960" src="/static/images/insights/tipresponsiveness.jpg"></img>
                    <div className="h-stack collage">
                        <img className="" src="/static/images/insights/darknuggets.jpg"></img>
                        <img className="" src="/static/images/insights/insightsbranding.jpg"></img>
                    </div>
                    <h3>"I don't need another dashboard"</h3>
                    <p>
                        Our research showed many security and administrative professionals were experiencing dashboard
                        fatigue; every SAAS product they purchased came with another login, another set of charts to
                        review, permissions to manage, and digging for information they wanted. Plus, many of our key
                        PoC's spent very little time at their actual desks, often communicating with their staff via
                        flurries of emails and text messages as they were on the go and in-between meetings, making
                        dashboards a rarely accessed toy.
                    </p>
                    <p>
                        Simple, mobile-friendly emails with snippets of information became the canvas we would use to
                        paint our first analytics offering, and this delighted an on-the-go professional who wanted
                        quick highlights from their deployment.
                    </p>
                    <img className="image_full-width" src="/static/images/insights/signuppagereport.jpg"></img>
                </CaseSection>
            </Wrapper>
            <Wrapper background-color="#18171d">
                <CaseSection>
                    <h2>Constructing Reports</h2>
                    <p>
                        Each Insights report is generated from a bank of analyses we continuously add to, and each is
                        composed of three moving parts. First is a qualification criteria which ensures the client has
                        enough relevant data to populate the visualization. Second, Insights queries our data warehouse
                        to pull together all the data to construct a visualization, sometimes even pulling aggregate,
                        anonymized stats from a client's peers for comparison. Finally, the data is showcased in a
                        compartmentalized visual.
                    </p>
                    <p>
                        If they are particularly advanced, some clients qualify for many pieces of analysis. Others only
                        qualify for one or two. We aim to provide something actionable and relevant based on their usage
                        of the platform, either by showcasing particular highlights over the last month, or linking to
                        resources in our Knowledge Base to inform the user how they could be further utilizing the
                        platform.
                    </p>
                    <img className="image_960" src="/static/images/insights/reportconstruction.jpg"></img>
                    <p>
                        This building block approach was powerful, as it allowed us to rapidly show clients very
                        different visualizations with only a little bit of upfront work to create each new analysis. If
                        clients wanted a particular type of analysis, adding it to the repository and having it show up
                        in the following month's report was trivial.
                    </p>
                    <p>
                        To enable this construct, we spent a great deal of time tinkering with the data and design
                        paradigms that underpinned this ecosystem. We sought to serve up delightful tidbits of
                        information in eye-catching, unique packaging. The primary vessel for this became known
                        internally as the Nugget.
                    </p>
                    <div className="_2-col">
                        <img className="align-center" src="/static/images/insights/thenuggetintro.jpg"></img>
                        <div className="align-center">
                            <h3>The Nugget</h3>
                            <p>
                                We designed these to be small tidbits of information we could mix and match for clients
                                on a whim. Each nugget is a self-contained, compartmentalized piece of story-telling
                                regarding the client's use of LiveSafe.
                            </p>
                        </div>
                    </div>
                    <h3>Spacious Nuggets</h3>
                    <p>
                        Insights reports can get fairly information dense. In order to lighten the cognitive load of
                        some of the findings, we prototyped different types of nuggets. One of my favorites was the
                        concept of a "spacious nugget," which relied more on typography and imagery to give a bite-size
                        piece of analysis.
                    </p>
                    <div className="_3-col">
                        <img style={borderRadius} src="/static/images/insights/spacious1.png"></img>
                        <img style={borderRadius} src="/static/images/insights/spacious2.png"></img>
                        <img style={borderRadius} src="/static/images/insights/spacious3.png"></img>
                    </div>
                    <p>
                        That's not to say the spacious nuggets were "throwaway" nuggets. They were often answering
                        quick, acute questions we heard back from clients, or conversation starters for when account
                        managers reviewed their reports with clients.
                    </p>
                    <h3>Rich Nuggets</h3>
                    <p>
                        To balance some of the stylistic flavor of the spacious nuggets, we also had a number of more
                        information-dense nuggets that made up the meat of the report. These richer nuggets often showed
                        month over month trends, comparative analyses, benchmarked performance metrics, and more. Each
                        visualization was a conversation unto itself.
                    </p>
                    <div className="photo-collage">
                        <img src="/static/images/insights/rich1.png"></img>
                        <img src="/static/images/insights/rich2.png"></img>
                    </div>
                    <p>
                        LiveSafe deals in categorical incident data, so we often produced multiple takes of the same
                        nugget using different sets of data. For example, we may show two tips over time charts in the
                        same report: one with a deep dive on facilities incidents and one with a deep dive on traffic
                        concerns. This way, if a client is particularly active within a certain class of information, we
                        can provide the necessary level of granularity.
                    </p>
                    <p>
                        The result was a visually stunning report, dynamically generated based on the exact needs of the
                        client. The visual identity of the product was crisp and distinct, the mix of softer insights
                        and more rigorous charting became a core pillar of the product. Plus, the fact this was all done
                        via an email meant it was lightweight and extensible, something we desperately needed as we
                        tried to hit key deadlines and deliver proofs of concept on different stories we wanted to tell.
                    </p>
                    <img className="image_full-width" src="/static/images/insights/reports.jpg"></img>
                    <h2>Designed for Experimentation</h2>
                    <p>
                        In addition to the light-weight development cycle, one of the great benefits of creating a
                        subscription-based email report was allowing us to experiment rapidly with new nuggets. We were
                        able to test out new ideas, big and small, and send them out in each month's set of reports. If
                        they resonated with customers, we moved them into our regular rotation. If they were a flop, we
                        could iterate on the design or pull the nugget entirely.
                    </p>
                    <p>
                        This greatly reduced the level of certainty we needed in proving out new ideas, which is a great
                        space to be in when it comes to shipping a brand new offering. We knew we could suppress
                        anything that didn't click for customers in the next report; so our tolerance for
                        experimentation went up and allowed us to settle a lot of internal debates by simply looking at
                        performance.
                    </p>
                    <p>
                        We also had the ability to "soft launch" certain visualizations by limiting the clients who
                        would see modules using our report generation criteria. Using this mechanic we could start small
                        and slowly expand the number of clients who qualified for the nugget as we became more confident
                        in the story.
                    </p>
                    <img className="image_960" src="/static/images/insights/reportexperiment.jpg"></img>
                    <p>
                        Our vault of nuggets was a Darwinian exercise in rising winners and sagging losers. Each quarter
                        we would add additional nuggets and see how they fared in the ecosystem we constructed. Winners
                        would propagate further into the Insights ecosystem, while losers were pulled back for more time
                        in the lab. This constant push and pull made the product a joy to work on and see as ideas came
                        to life through constant refinements.
                    </p>
                    <div className="h-stack">
                        <img src="/static/images/insights/downloadrate.jpg"></img>
                        <div>
                            <h3>Keeping It Light</h3>
                            <p>
                                I often found myself thinking "that could be a nugget" while sitting in meetings as we
                                discussed the best way to surface very specific types of information to our clients. As
                                national trends would change the topic of conversation and the information flowing in
                                LiveSafe, we needed a simple, low-touch way to provide timely insights to our client
                                base.
                            </p>
                            <p>
                                The engine behind Insights kept us lean and agile in reacting to changing circumstances
                                in our industry, and provides a solid framework to build on as the needs of customers
                                evolve.
                            </p>
                        </div>
                    </div>
                </CaseSection>
            </Wrapper>
            <Wrapper background-color="#18171d">
                <CaseSection>
                    <h2>Leaning Into Constraints</h2>
                    <p>
                        Early on in the research process we asked ourselves, "what is our data capable of telling us?"
                        Insights centered around a fundamental challenge many companies face: understanding what your
                        data can do and what your data can't do while being honest about the limitations and the
                        possibilities. Some categories of data were abundant in certain clients, and lacking in others.
                        A same-size reporting solution without some understanding of how to segment and adapt to
                        different clients simply wouldn't do.
                    </p>
                    <p>
                        We used user research, technical-feasibility, data-analysis, and a whole lot of creativity to
                        arrive at a solution tailor made for the unique challenges of the problem. The outcome was far
                        from pre-determined, and instead arrived at through a rigorous commitment to experimentation and
                        hypothesis testing that made the product much stronger than we first imagined. For that reason
                        it was a joy to lead a team to deliver such an offering to market.
                    </p>
                    <p>
                        A sincere thanks goes out to{' '}
                        <a href="https://www.linkedin.com/in/geoff-nelowet-ba874736/">Geoff Nelowet</a> for creating a
                        beautiful design language for the product,{' '}
                        <a href="https://www.linkedin.com/in/tyler-mamrot-50986a105/">Tyler Mamrot</a> for providing
                        incredible full-stack capabilities to a team needing front-end and back-end chops,{' '}
                        <a href="https://www.linkedin.com/in/tyler-mamrot-50986a105/">Ray Budd</a> for spinning up a
                        robust nugget prototyping framework integrated with our NLP capabilities, and{' '}
                        <a href="https://www.linkedin.com/in/james-nix-959a332a/">James Nix</a> for following the data
                        wherever it took us.
                    </p>
                </CaseSection>
            </Wrapper>
        </CaseMain>
    </Page>
);

export default Index;
