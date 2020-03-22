import React from 'react';
import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    width: 100%;
    max-width: 1400px;
    padding: 80px 60px 60px;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 991px) {
        margin-top: 60px;
        padding: 40px 20px;
    }

    @media (max-width: 767px) {
        margin-top: 0px;
        padding-top: 80px;
        padding-bottom: 20px;
    }

    @media (max-width: 479px) {
        margin-top: 0px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;

export const HeroSection = styled(Section)`
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
