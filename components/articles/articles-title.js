import React from 'react';
import styled from 'styled-components';

import {heading} from '../../styles/mixins';
import {spacing} from '../../styles/vars';

const StyledArticlesTitle = styled.h1`
    ${heading} color: #2e2e2e;
    font-weight: 800;
    letter-spacing: -2px;
    font-size: 2.5em;
    margin-bottom: ${spacing.large};
`;

const ArticlesTitle = ({children}) => <StyledArticlesTitle>{children}</StyledArticlesTitle>;

export default ArticlesTitle;
