import React from 'react';
import styled from 'styled-components';

import {colors, spacing} from '../../styles/vars';

const StyledSocialLink = styled.a`
    color: #ffffff;
    display: inline-block;
    text-decoration: none;

    @media (max-width: 479px) {
        font-size: 12px;
    }

    svg {
        display: inline-block;
        height: 24px;
        margin-right: ${spacing.extrasmall};
        vertical-align: middle;
        width: 24px;
        fill: #ffffff;

        @media (max-width: 479px) {
            height: 15px;
            width: 15px;
        }
    }
`;

const SocialLink = ({children, href, title}) => (
    <StyledSocialLink href={href} title={title}>
        {children}
    </StyledSocialLink>
);

export default SocialLink;
