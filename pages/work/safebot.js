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

const extraPadding = {
    paddingTop: spacing.large
};

const borderRadius = {
    borderRadius: '8px'
};

const description = 'Safebot';
const Index = () => (
    <Page description={description} image={'/static/images/avatar.jpg'} title={`Dan Morrison - ${description}`}>
        <Nav background-color={colors.dark} />
        <CaseMain>
            <CaseHero background-color={'#fff'} background-image={'/static/images/safebot/cb_hero_2.jpg'} />
            <Wrapper background-color="#4e5664">
                <CaseSection>
                    <h2>A Better Way To Report</h2>
                    <p>
                        LiveSafe connects users to the support that can help them resolve various safety incidents.
                        Whether this is a slip and fall from a leaky pipe, stolen laptops from a school library, getting
                        mental help for a colleague struggling with addiction, or even worse - LiveSafe dynamically puts
                        users in contact with the resources that can aid in ambiguous situations.
                    </p>
                    <p>
                        For the end user, this helps them resolve their safety issues sooner. For the organization, it
                        helps them prevent costly react & respond protocols by replacing them with early interventions.
                    </p>
                    <p>
                        However for most students and employees, safety and security incidents aren't regular, daily
                        occurrences. As such, guiding users through the submission process and ensuring they feel like
                        they will get a timely response is critical since using an app to talk to safety professionals
                        is often foreign territory. I led a team researching issues with our old tip submission flow and
                        led the development of an upgrade across design, engineering, and data science departments.
                    </p>
                </CaseSection>
            </Wrapper>
            <Wrapper background-color="#18171d">
                <CaseSection>
                    <h2>Confidence & Quality Data</h2>
                    <p>
                        Using LiveSafe’s categorized incident data, we trained a recommender engine to help guide users
                        through the process of submitting a concern. We found in early iterations that asking a user to
                        categorize and then submit led to tension in users feeling they needed to choose the “right”
                        incident type. The more we could prompt the user and have them confirm rather than provide the
                        raw inputs, the better.
                    </p>
                    <CaseQuote text="At the start people don’t want speed, they want clarity. Once they have clarity, they want speed."></CaseQuote>
                    <p>
                        We had to provide great service through the entire journey, not just the initial report. Since
                        users don’t submit safety information on a day to day basis, letting them know they are in good
                        hands was a critical first step, and offering assurances and cues during the submission process
                        became pillars of success for the feature.
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
                    <p>
                        The most reliable machine is the one with the fewest moving parts. We took this approach with
                        our chatbot, starting with a "happy path" and slowly adding features as our users needed aid or
                        alternative routes.
                    </p>
                    <p>
                        We ended up with three distinct jumping off points that converged on similar points - submitting
                        a tip. Yet each of the starting points helped different types of users in various different
                        mental states.
                    </p>
                    <img className="image_960" src="/static/images/safebot/zoomPhone.jpg"></img>
                    <h3>Start Typing</h3>
                    <p>
                        The quickest, easiest launch point. Type in what you need help with, and LiveSafe will get it to
                        the right person in the right department. This flow simply takes in text, then analyzes it using
                        our trained event classifier, and will then ask the user to tag the incident appropriately to
                        ensure it goes to the right department.
                    </p>
                    <p>
                        For example, tips involving security will be routed to the guard office. Concerns for mental
                        health will be routed to counseling. Broken building infrastructure routed to facilities. Users
                        enjoyed seeing the bot's efforts to help properly categorize events, giving them a sense of
                        confidence their information would reach the proper, final destination.
                    </p>
                    <h3>What Can I report?</h3>
                    <p>
                        This button allowed for users to see the different categories a tip could be deposited into. By
                        showing a few highly-used tags and asking the user to select what they had in mind, it was a
                        teachable moment for first-time users. "What can I report" effectively became a training ground
                        for the junior user, where more seasoned users could simply begin typing knowing how the process
                        worked.
                    </p>
                    <h3>I need help now</h3>
                    <p>
                        Effectively an "eject" button. Many users were skeptical of the speed at which they might get
                        help. Whether legitimate or not, our analytics showed many users mashed the "Emergency" button
                        in LiveSafe to report non-emergency related tips, suggesting a fallacy that if they designated
                        something as critical, it would be triaged faster (this isn't actually true, all inbounds get
                        processed the same way). One user used the Report Emergency feature in the app to report the
                        vending machine eating their money.
                    </p>
                    <p>
                        To alleviate this fear, we added this "I need help now" button which would asyncronously fire an
                        "incoming message" to the security dashboard so an admin can prepare to respond, while this
                        connection was made the bot would collect details, speeding up the interaction. Most users ended
                        up not using this option, but many took immediate solace in knowing it's available. It's mere
                        presence was useful in building credibility.
                    </p>
                    <img className="image_full-width" src="/static/images/safebot/twohandsphones.png"></img>
                </CaseSection>
            </Wrapper>
            <Wrapper background-color="#18171d">
                <CaseSection>
                    <h2>Feedback Loops</h2>
                    <p>
                        Our goal was to reduce the stakes of submitting tips, but many users felt anxiety with how to
                        "properly" categorize certain incidents. Real-world safety incidents don't always fit into a
                        clean information architecture, especially if something could happen but hasn't happened yet.
                        Security officials just want a good enough first pass so they can dispatch the right help.
                    </p>
                    <p>
                        Users responded well to LiveSafe taking the first plunge when categorizing the provided
                        information. They could simply confirm or deny what our model thought was closest, which
                        actually gave us a pretty wide degree of freedom in our model's recommendation, we simply had to
                        ensure in the top 4 to 6 tags contained a "correct" answer.
                    </p>
                    <img className="image_960" src="/static/images/safebot/datamodeling.png"></img>
                    <p>
                        This marked a key milestone in our virtuous cycle of machines and humans curating LiveSafe data.
                        Models would serve up their best guess, and then users on the client side would confirm or deny
                        our guesses, giving us additional training data. Because we established this experiential
                        handshake between our data science operation and mobile applications, this became a core
                        competency of our offering.
                    </p>
                    <h2 style={extraPadding}>A Guided Journey</h2>
                    <p>
                        Submitting security information is a bit like calling your doctor. You hope you don't have to do
                        it at all, and if you do it likely isn't frequently enough to "master" the flow. With this in
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
                        We sought to set clear expectations on users "time to human." Most users in testing noted that
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
                                step of the process as they navigated through a frictionaless submission process with
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
                        A very special thanks to the multi-talented [Geoff
                        Nelowet](https://www.linkedin.com/in/geoff-nelowet-ba874736/) for incredible design leadership
                        during this process & [Tim Gillons](https://www.linkedin.com/in/timgillons/) for exceptional
                        product management as we evolved this from initial concepts to full offering.
                    </p>
                </CaseSection>
            </Wrapper>
        </CaseMain>
    </Page>
);

export default Index;
