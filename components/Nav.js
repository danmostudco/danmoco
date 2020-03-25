import React from 'react';
import styled from 'styled-components';

import {colors} from '../styles/vars';

import Link from './Link';

const NavLink = styled(Link)`
    color: ${colors.accent};
    font-size: 0.9em;
    letter-spacing: 0.03em;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.15s ease;

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
    background-color: ${(props) => props['background-color'] || '#FFFFFF'};
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
    background-image: url(/static/home/face.jpg);
    background-position: 0px 0px;
    background-size: cover;
`;

const Nav = (props) => (
    <Header background-color={props['background-color']}>
        <HeaderContainer>
            <Face href="/"></Face>
            <div>
                <NavLink>{'Home'}</NavLink>
                <NavLink slug={'notes'}>{'Notes'}</NavLink>
            </div>
        </HeaderContainer>
    </Header>
);

// const StyledNav = styled.nav`
//     padding: 25px;

//     @media (min-width: 737px) {
//         padding: 2em 4em 4em;
//         text-align: right;
//     }
// `;

// const NavLink = styled(Link)`
//     color: ${colors.accent};
//     font-size: 0.9em;
//     letter-spacing: 0.03em;
//     text-decoration: none;
//     text-transform: uppercase;
//     transition: all 0.15s ease;

//     :hover {
//         color: ${colors.text};
//     }

//     + a {
//         margin: 0 0 0 2.5em;

//         @media (min-width: 737px) {
//             margin: 0 0 0 4em;
//         }
//     }
// `;

// const Nav = () => (
//     <StyledNav>
//         <NavLink>{'Home'}</NavLink>
//         <NavLink slug={'notes'}>{'Notes'}</NavLink>
//     </StyledNav>
// );

export default Nav;
