import styled from 'styled-components';
import Wrapper from './Wrapper.js';

const StyledCaseHero = styled(Wrapper)`
    height: 80vh;
    margin-bottom: 0px;
    background-image: url(${(props) => props['background-image']});
    background-color: ${(props) => props['background-color']};
    background-position: 50% 0%;
    background-size: 100%;
    background-repeat: no-repeat;

    @media (max-width: 991px) {
        height: 50vh;
        margin-top: 60px;
        flex-direction: row;
        align-items: flex-end;
    }

    @media (max-width: 767px) {
        height: 40vh;
    }

    @media (max-width: 479px) {
        height: 35vh;
        margin-top: 0px;
        background-position: 50% 0px;
    }

    .hero_section {
        position: absolute;
        left: 0%;
        right: 0%;
        bottom: 0%;
        top: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        margin: 0px auto;
        padding-bottom: 80px;
        padding-top: 40px;
        align-items: center;
        width: 100%;
        max-width: 1400px;

        @media (max-width: 991px) {
            padding-bottom: 60px;
            position: absolute;
            left: 0%;
            top: auto;
            right: 0%;
            bottom: 0%;
            margin: 0px auto;
        }

        @media (max-width: 479px) {
            margin-bottom: 10px;
            font-size: 40px;
            text-align: center;
            letter-spacing: -1px;
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }

    h1 {
        color: #1b1a20;
        font-weight: 800;
        margin-top: 0px;
        margin-bottom: 20px;
        letter-spacing: -3px;
        max-width: 700px;
        text-transform: capitalize;
        font-size: 80px;

        @media (max-width: 991px) {
            font-size: 60px;
            line-height: 1em;
        }

        @media (max-width: 767px) {
            font-size: 50px;
            line-height: 1.1em;
        }

        @media (max-width: 479px) {
            margin-bottom: 10px;
            font-size: 40px;
            text-align: center;
            letter-spacing: -1px;
        }
    }

    p {
        color: #18171d;
        margin-top: 0px;
        margin-bottom: 0px;
        text-align: center;
        line-height: 1.1em;
        font-weight: 700;
        width: 100%;
        max-width: 700px;
        font-size: 20px;
        letter-spacing: -0.15px;
        opacity: 0.6;

        @media (max-width: 991px) {
            line-height: 1em;
        }

        @media (max-width: 479px) {
            font-size: 16px;
            margin-bottom: 20px;
        }
    }
`;

const CaseHero = (props) => (
    <StyledCaseHero background-color={props['background-color']} background-image={props['background-image']}>
        <div className="hero_section">
            <h1>{props.title}</h1>
            <p>
                {props.role} · {props.year}
            </p>
        </div>
    </StyledCaseHero>
);

export default CaseHero;
