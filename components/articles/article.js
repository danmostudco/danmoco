import React from 'react';
import styled from 'styled-components';

import {colors, spacing} from '../../styles/vars';
import Date from '../Date';
import H3 from '../elements/h3';
import Link from '../Link';

const StyledArticle = styled.li`
    margin-bottom: ${spacing.extralarge};
    transition: all 0.15s ease;

    + li {
        margin: 2em 0 ${spacing.extralarge};
    }

    h3 {
        margin-top: 0;
        font-size: 30px;

        @media (max-width: 479px) {
            font-size: 20px;
        }
    }

    :hover {
        h3 {
            transition: all 0.15s ease;
            color: ${colors.accent};
        }
    }
`;

const ExternalLink = styled.a`
    text-decoration: none;
`;

const PublisherInfo = styled.span`
    color: ${colors.light};
    display: block;
    font-size: 0.9em;
    margin: 0.5em 0 0;
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;

const Publisher = styled.span`
    color: ${colors.accent};
`;

const Article = ({article}) => (
    <StyledArticle>
        {article.url ? (
            <ExternalLink href={article.url}>
                <PublisherInfo>
                    {'Hosted by '}
                    <Publisher>{article.publisher}</Publisher>
                </PublisherInfo>
                <H3>{article.title}</H3>
            </ExternalLink>
        ) : (
            <Link slug={`notes/${article.slug}`}>
                <Date>{article.date}</Date>
                <H3>{article.title}</H3>
            </Link>
        )}
    </StyledArticle>
);

export default Article;
