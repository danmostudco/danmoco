import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

export const HomeHeroSection = styled(Section)`
    height: 70vh;
    margin-top: 60px;
    margin-bottom: 0px;
    padding-top: 60px;
    padding-bottom: 0px;

    @media (max-width: 991px) {
        height: auto;
        padding-top: 20px;
        padding-bottom: 0px;
    }

    @media (max-width: 767px) {
        height: auto;
        margin-top: 60px;
        padding-top: 20px;
        padding-bottom: 40px;
    }

    @media (max-width: 479px) {
        height: auto;
        margin-bottom: 0px;
        padding-top: 0px;
        padding-bottom: 40px;
    }
`;

export const WorkSection = styled(Section)`
    margin-bottom: 0px;
    padding-bottom: 0px;

    @media (max-width: 767px) {
        margin-top: 0px;
        padding-top: 20px;
    }
`;
