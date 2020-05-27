import styled from 'styled-components';

const StyledQuote = styled.blockquote`
    width: 100%;
    max-width: 960px;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-left: 0px solid #000;
    opacity: 0.7;
    font-family: Merriweather, serif;
    color: #fff;
    font-size: 36px;
    line-height: 1.2em;
    font-weight: 300;
    text-align: center;

    em {
        font-style: italic;
    }

    @media (max-width: 479px) {
        padding-right: 0px;
        padding-left: 0px;
        font-size: 20px;
        text-align: left;
    }
`;

const CaseQuote = (props) => (
    <StyledQuote>
        <em>{props.text}</em>
    </StyledQuote>
);

export default CaseQuote;
