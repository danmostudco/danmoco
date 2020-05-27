import React from 'react';
import styled from 'styled-components';

import {colors} from '../styles/vars';

import Link from './Link';

const NavLink = styled(Link)`
    color: ${colors.accent};
    font-size: 0.9em;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.15s ease;
    font-weight: 700;

    :hover {
        color: ${colors.accent};
    }

    + a {
        margin: 0 0 0 2.5em;

        @media (min-width: 737px) {
            margin: 0 0 0 4em;
        }
    }
`;

const Header = styled.div`
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: auto;
    z-index: 9;
    position: absolute;
`;

const HeaderContainer = styled.div`
    left: 0%;
    top: auto;
    right: 0%;
    bottom: auto;
    z-index: 10;
    display: flex;
    margin: auto;
    padding: 16px 22px 16px 22px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 479px) {
        align-items: center;
    }
`;

const Face = styled.a`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-image: url(/static/home/facehedcut.jpg);
    background-position: 0px 0px;
    background-size: cover;
`;

const Nav = (props) => (
    <Header>
        <HeaderContainer>
            <Face href="/"></Face>
            <div>
                <NavLink>{'Home'}</NavLink>
                <NavLink slug={'notes'}>{'Notes'}</NavLink>
            </div>
        </HeaderContainer>
    </Header>
);

export default Nav;
