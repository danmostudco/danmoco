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
                    <h2 style={extraPadding}>The Nugget</h2>
                    <p>
                        Submitting security information is a bit like calling your doctor. You hope you don't have to do
                        it at all, and if you do, it likely isn't frequently enough to "master" the flow. With this in
                        mind we set out to give a guided experience to instill confidence and a sense of progress in the
                        user as they went through the process.
                    </p>
                    <div className="_2-col">
                        <img className="align-center" src="/static/images/safebot/connectme.jpg"></img>
                        <div className="align-center">
                            <h3>Our Bot</h3>
                            <p>
                                A bot seemed like a natural choice to escort users through the flow in a cordial,
                                non-intimidating fashion. This conversational tone helped us talk about options, status,
                                and hiccups along the way. Once more, the combination of text entry and button tapping
                                kept users more engaged during the submission process, even if it was a tiny bit slower.
                            </p>
                            <p>
                                In going with this paradigm, we found our bot needed to overcommunicate to provide a
                                sense of "forward momentum" to users. Even if we were still processing a request,
                                providing in-line cues as to what was happening showcased progress in the reporting
                                process, mitigating a sense of helplessness that can arise when expectations are not
                                clearly communicated and updated.
                            </p>
                        </div>
                    </div>
                    <h3>Review Before Sending</h3>
                    <p>
                        We spent a great deal of time at the "moment of truth" in which a user will submit their final
                        report to their organization. Submitting can be hard, especially with sensitive information, so
                        we wanted to take care to ensure the user could see all their details in one place.
                    </p>
                    <div className="_3-col">
                        <img style={borderRadius} src="/static/images/safebot/summarybase.jpg"></img>
                        <img
                            className="hide-small-viewport"
                            style={borderRadius}
                            src="/static/images/safebot/summaryedit.jpg"
                        ></img>
                        <img style={borderRadius} src="/static/images/safebot/summarylocation.jpg"></img>
                    </div>
                    <p>
                        In addition to allowing users to view their submission, we also focused on easy editing of
                        content, location, and media. We found other bots would be unclear about what specific data was
                        being transferred and when, so providing as much clarity as possible before pressing "send" was
                        mission critical. This gave users a proper safety net in terms of owning their information
                        before transmitting.
                    </p>
                    <h3>Connecting Sequence</h3>
                    <p>
                        LiveSafe offers a two-way chat between users and safety officials which means users must wait
                        for their tip to be opened, read, and responded to. In that regard, submitting is just the
                        start. Earlier iterations of the LiveSafe platform suffered from drop-off of users who didn't
                        know how long to wait for responses. Admins would eventually respond and ask for details but the
                        user was nowhere to be found. This led to poor experiences on both the sending and receiving end
                        of a communication.
                    </p>
                    <div className="_3-col">
                        <img src="/static/images/safebot/connectblue.jpg"></img>
                        <img src="/static/images/safebot/connectyellow.jpg"></img>
                        <img src="/static/images/safebot/connectcomplete.jpg"></img>
                    </div>
                    <p>
                        We sought to set clear expectations on users' "time to human." Most users in testing noted that
                        anything over a minute would be "unacceptable," especially in light of a time-sensitive report.
                        We introduced a timer which allows a user to see how long we expect their tip will take to get a
                        chat response, which kept them on the line for a very critical 60 to 90 seconds as we found a
                        dispatcher to chat with them.
                    </p>
                    <p>
                        Once we exceeded the allotted time, we informed users that their tip would be processed
                        eventually and we could simply send a push notification to their phone to draw them back in when
                        the time was right. This way, even with a few-minute delay users could still be at the ready to
                        hold a conversation with an admin.
                    </p>
                    <p>
                        We even took pains to try and give a "ta-da" style moment when the user does get connected:
                        flashing a banner and pop in a new, human icon. This little celebration at the end gave a moment
                        of triumph and added to the sense of progress we had built up to this point. You have been
                        connected!
                    </p>
                    <h3>Close Out Sequence</h3>
                    <p>
                        After chatting with the organization, we had two goals in mind: collect some feedback on the
                        whole process from the user and provide the user with some catharsis by rating how things went.
                        Users enjoyed getting to weigh in on the help they got, especially if it was just a few taps to
                        rate and tag some aspects of the interaction.
                    </p>
                    <div className="_2-col">
                        <img src="/static/images/safebot/rateexperience.jpg"></img>
                        <img src="/static/images/safebot/tagexperience.jpg"></img>
                    </div>
                    <p>
                        These interactions have been popularized by ride-share and food-delivery platforms, and it's
                        important for LiveSafe to understand what aspects make great service in the personal safety
                        industry. Very rarely do you get to rate your interaction with the security guard of your
                        building, or the facilities manager of your campus, which is a shame especially when they do a
                        great job. Understanding satisfaction is a key data-point.
                    </p>
                    <p>
                        This final prompt allows LiveSafe to collect quantitative and qualitative insights about the
                        interaction to feed back into the organization to further improve future responses.
                    </p>
                    <div className="h-stack">
                        <img src="/static/images/safebot/someexamples.jpg"></img>
                        <div>
                            <h3>Right Module, Right Time</h3>
                            <p>
                                The chatbot was a joy to work on because it provided many unique design challenges - we
                                had to select the right module for the right place in the flow. We ended up with much
                                more than a simple chat interface, but a real showcase of modularized interaction design
                                served up dynamically based on the direction the user took the interaction.
                            </p>
                            <p>
                                LiveSafe users don't send in an abundance of tips because ideally, users don't see
                                security threats regularly. It brought a smile to my face to see users delighted by each
                                step of the process as they navigated through a frictionless submission process with
                                confidence.
                            </p>
                        </div>
                    </div>
                    <div className="h-stack reverse">
                        <div>
                            <h3>Keep Things Moving</h3>
                            <p>
                                The use of a diversity of modules also helped us control the pace of the conversation.
                                We could speed things up where needed, or slow things down when we need more time to
                                connect the user or process data.
                            </p>
                            <p>
                                By having such a varied set of experiences, users weren't overwhelmed but legitimately
                                curious and intrigued by how we would guide them each step, with many users noting how
                                much quicker and clearer things progressed than they first expected. We had turned the
                                chatbot pattern into one that overperformed expectations, leaving users on a positive
                                note.
                            </p>
                        </div>
                        <img src="/static/images/safebot/connectedhandoff.jpg"></img>
                    </div>
                </CaseSection>
            </Wrapper>
            <Wrapper background-color="#18171d">
                <CaseSection>
                    <h2>A Cohesive Effort</h2>
                    <p>
                        Most exciting to me in developing this feature was the full company effort that enabled it. Our
                        sales team sold every contract that allowed us to collect categorized incident data over several
                        years. Our customer success team implemented and tweaked LiveSafe deployments to ensure they met
                        clients' needs. Our engineering team worked in an iterative cycle to get the transitions and
                        modules just right. Our data science team tinkered with endless models to best surface the right
                        number of choices to help categorize user inputs.
                    </p>
                    <p>
                        While the feature looks like a simple conversational user interface, it reflects the sum of
                        knowledge and experience developed from a company trying to make safety & security more
                        streamlined and accessible across the world. To lead the effort in pioneering a feature that
                        draws so heavily on so many moving parts was a real treat, and an amazing problem-space to work
                        in.
                    </p>
                    <p>
                        A very special thanks to the multi-talented{' '}
                        <a href="https://www.linkedin.com/in/geoff-nelowet-ba874736/">Geoff Nelowet</a> for incredible
                        design leadership during this process,{' '}
                        <a href="https://www.linkedin.com/in/timgillons/">Tim Gillons</a> for exceptional product
                        management as we evolved this from initial concepts to full offering, and{' '}
                        <a href="https://www.linkedin.com/in/james-nix-959a332a/">James Nix</a> for paving the way for
                        the underlying data science to power the experience.
                    </p>
                </CaseSection>
            </Wrapper>
        </CaseMain>
    </Page>
);

export default Index;
