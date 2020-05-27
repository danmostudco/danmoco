import styled from 'styled-components';

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
`;

export default CaseSection;
