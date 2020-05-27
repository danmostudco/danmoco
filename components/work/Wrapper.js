import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props['background-color'] || '#FFFFFF'};

    @media (max-width: 767px) {
        padding-top: 0px;
    }

    @media (max-width: 479px) {
        padding-top: 0px;
        padding-bottom: 0px;
    }
`;

export default Wrapper;
