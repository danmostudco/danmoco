import React from 'react';
import styled from 'styled-components';

import {colors} from '../styles/vars';
import {dateTime, full} from '../utils/date-format';

const StyledDate = styled.time`
    color: ${colors.accent};
    display: block;
    font-size: 0.75em;
    margin: 0.5em 0 0;
    text-transform: uppercase;
    letter-spacing: 0.04em;

    @media (max-width: 479px) {
        font-size: 0.65em;
    }
`;

const Date = ({children}) => <StyledDate dateTime={dateTime(children)}>{full(children)}</StyledDate>;

export default Date;
