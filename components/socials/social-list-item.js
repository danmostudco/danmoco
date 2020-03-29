import styled from 'styled-components';

import {spacing} from '../../styles/vars';

const SocialListItem = styled.div`
    display: inline-block;
    margin-bottom: ${spacing.normal};
    margin-right: ${spacing.large};

    @media (max-width: 767px) {
        margin-right: ${spacing.normal};

        &:last-child {
            margin-right: 0;
        }
    }

    @media (max-width: 479px) {
        margin-right: ${spacing.large};

        &:last-child {
            margin-right: 0;
        }
    }
`;

export default SocialListItem;
