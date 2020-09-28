import styled from 'styled-components';
import {colors} from '../../styles/vars';

const CaseSection = styled.div`
    display: flex;
    width: 100%;
    max-width: 1400px;
    padding: 40px 60px 40px;
    flex-direction: column;
    justify-content: center;
    margin-top: 0px;
    align-items: center;

    @media (max-width: 991px) {
        padding: 40px 20px;
    }

    @media (max-width: 479px) {
        padding: 40px 20px;
    }

    h2 {
        max-width: 700px;
        width: 100%;
        margin-top: 0px;
        margin-bottom: 20px;
        font-family: Inter, sans-serif;
        color: #fff;
        font-size: 48px;
        line-height: 1.1em;
        font-weight: 800;
        letter-spacing: -0.3px;
        text-transform: capitalize;

        @media (max-width: 767px) {
            font-size: 32px;
        }

        @media (max-width: 479px) {
            font-size: 24px;
            margin-bottom: 8px;
        }
    }

    h3 {
        width: 100%;
        max-width: 700px;
        margin-bottom: 20px;
        margin-top: 20px;
        font-family: Inter, sans-serif;
        color: #fff;
        font-size: 30px;
        line-height: 1.1em;
        font-weight: 700;
        letter-spacing: -0.4px;
        text-transform: capitalize;

        @media (max-width: 991px) {
            font-size: 28px;
        }

        @media (max-width: 767px) {
            margin-bottom: 12px;
            font-weight: 600;
        }

        @media (max-width: 479px) {
            margin-bottom: 12px;
            font-size: 20px;
            line-height: 1.3em;
            font-weight: 700;
        }
    }

    p {
        width: 100%;
        max-width: 700px;
        margin-bottom: 1.4em;
        margin-top: 0px;
        opacity: 0.7;
        font-family: Inter, sans-serif;
        color: #fff;
        font-size: 20px;
        line-height: 1.5em;
        font-weight: 400;
        letter-spacing: -0.15px;

        @media (max-width: 991px) {
            font-size: 18px;
        }

        @media (max-width: 479px) {
            margin-bottom: 1em;
            font-size: 16px;
            line-height: 1.4em;
        }
    }

    img {
        display: inline-block;
        max-width: 100%;
        box-sizing: border-box;
        vertical-align: middle;
    }

    .image_960 {
        max-width: 960px;
        margin-bottom: 40px;
        max-width: 960px;

        @media (max-width: 991px) {
            width: 100%;
            margin-bottom: 20px;
            max-width: 960px;
        }

        @media (max-width: 479px) {
        }
    }

    .image_full-width {
        vertical-align: middle;
        display: inline-block;
        max-width: 100%;
        margin-top: 40px;
        margin-bottom: -80px;
    }

    ._2-col {
        display: grid;
        grid-auto-flow: row;
        grid-auto-columns: 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;

        @media (max-width: 479px) {
            grid-template-columns: 1fr;
        }
    }

    ._3-col {
        display: grid;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 40px;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        flex: 1;
        grid-auto-columns: 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;

        @media (max-width: 479px) {
            grid-template-columns: 1fr 1fr;
        }
    }

    .h-stack {
        position: relative;
        display: grid;
        width: 100%;
        max-width: 960px;
        margin-top: 40px;
        margin-bottom: 40px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        grid-auto-columns: 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        grid-template-columns: 1fr 1fr;
        -ms-grid-rows: auto;
        grid-template-rows: auto;

        @media (max-width: 991px) {
            margin-top: 0px;
            margin-bottom: 0px;
        }

        @media (max-width: 767px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
        }

        @media (max-width: 479px) {
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
        }
    }

    .h-stack.reverse {
        position: static;

        @media (max-width: 767px) {
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: reverse;
            flex-direction: column-reverse;
            flex-direction: column-reverse;
        }

        @media (max-width: 479px) {
            position: static;
        }
    }

    .h-stack.collage {
        margin-top: 0px;
        align-items: stretch;
        grid-template-columns: 0.5fr 1fr;

        @media (max-width: 991px) {
            margin-bottom: 40px;
        }

        @media (max-width: 767px) {
            margin-bottom: 20px;
            grid-template-rows: auto;
        }

        @media (max-width: 479px) {
            display: grid;
            margin-bottom: 20px;
            grid-auto-columns: 1fr;
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            grid-template-columns: 0.5fr 1fr;
            grid-template-rows: auto;
        }
    }

    .align-center {
        align-self: center;
    }

    .hide-small-viewport {
        @media (max-width: 479px) {
            display: none;
        }
    }

    a {
        color: ${colors.accent};
        text-decoration: none;

        :hover {
            text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
        }
    }
`;

export default CaseSection;
