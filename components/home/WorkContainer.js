import React from 'react';
import styled from 'styled-components';

const StyledWorkContainer = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 50vw;
    max-height: 600px;
    margin-bottom: 60px;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 20px;
    background-color: hsla(219.99999999999997, 5.05%, 68.88%, 1);
    background-image: linear-gradient(135deg, hsla(0, 0%, 100%, 0.6), hsla(0, 0%, 100%, 0));

    @media (max-width: 991px) {
        height: 50vw;
        min-height: 500px;
        margin-bottom: 30px;
    }

    @media (max-width: 767px) {
        height: auto;
        max-height: none;
        min-height: auto;
        margin-bottom: 20px;
        border-radius: 12px;
    }

    @media (max-width: 479px) {
        position: static;
        overflow: visible;
        height: auto;
        min-height: auto;
        margin-top: 0px;
        margin-bottom: 12px;
        background-color: hsla(219.99999999999997, 5.05%, 68.88%, 1);
        background-image: none;
    }

    .work-description {
        position: absolute;
        left: 0%;
        top: 0%;
        right: auto;
        bottom: auto;
        z-index: 2;
        display: block;
        width: 50%;
        max-width: 350px;
        min-width: auto;
        margin-top: 60px;
        margin-left: 60px;
        justify-content: space-between;

        @media (max-width: 991px) {
            max-width: 250px;
            margin-top: 40px;
            margin-left: 40px;
        }

        @media (max-width: 767px) {
            position: static;
            width: 100%;
            max-width: none;
            margin: 20px;
        }

        @media (max-width: 479px) {
            position: static;
            display: block;
            width: 100%;
            max-width: none;
        }
    }

    .work-header {
        @media (max-width: 479px) {
            display: flex;
            align-items: center;
        }
    }

    .work-header-text {
        display: flex;
        flex: 1;
    }

    .title {
        margin-top: 12px;
        margin-bottom: 0px;
        color: #18171d;
        font-weight: 700;
        width: 100%;
        max-width: 700px;
        font-family: Inter, sans-serif;
        font-size: 30px;
        line-height: 1.1em;
        letter-spacing: -0.4px;
        text-transform: capitalize;

        @media (max-width: 991px) {
            margin-top: 4px;
        }

        @media (max-width: 479px) {
            margin-top: 0px;
            font-size: 20px;
        }
    }

    .metadata {
        margin-top: 4px;
        margin-bottom: 8px;
        opacity: 0.7;
        color: #18171d;

        @media (max-width: 479px) {
            margin-top: 0px;
        }
    }

    .work-metadata {
        display: inline-block;
        padding-right: 4px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;

        @media (max-width: 479px) {
            font-weight: 500;
        }
    }

    .work-logo {
        width: 72px;
        height: 72px;
        margin-right: 12px;
        margin-bottom: 12px;
        border-radius: 16px;

        @media (max-width: 991px) {
            width: 60px;
            height: 60px;
        }

        @media (max-width: 479px) {
            width: 50px;
            height: 50px;
            margin-bottom: 12px;
            border-radius: 12px;
        }
    }

    .blurb {
        max-width: none;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #18171d;
        font-size: 20px;
        line-height: 1.3em;
        font-weight: 400;
        letter-spacing: -0.5px;
        opacity: 0.6;

        @media (max-width: 991px) {
            font-size: 16px;
        }

        @media (max-width: 767px) {
            margin-top: 0px;
        }

        @media (max-width: 479px) {
            margin-top: 0px;
            margin-bottom: 0px;
            font-size: 16px;
            line-height: 1.4em;
        }
    }

    .work-img {
        position: absolute;
        z-index: 1;
        height: 100%;
        max-width: none;
        margin-left: 39%;
    }

    .work-buttons {
        margin-top: 8px;
        -webkit-box-flex: 0;
        -webkit-flex: 0 auto;
        -ms-flex: 0 auto;
        flex: 0 auto;

        @media (max-width: 479px) {
            display: flex;
            margin-top: 20px;
            margin-right: -12px;
            justify-content: space-around;
        }
    }

    .w-button {
        height: 40px;
        display: inline-block;
        margin-top: 12px;
        margin-right: 12px;
        padding: 9px 15px;
        border-radius: 8px;
        background-color: hsla(219.99999999999997, 5.05%, 68.88%, 1);
        color: #18171d;
        border: 0;
        line-height: inherit;
        text-decoration: none;
        cursor: pointer;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;

        @media (max-width: 479px) {
            background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
            flex: 1;
            text-align: center;
            font-weight: 500;
        }
    }

    .work-img.desktop.hide {
        @media (max-width: 767px) {
            display: none;
        }

        @media (max-width: 991px) {
            margin-left: 35vw;
        }
    }

    .desktop.hide {
        margin-left: 450px;
    }

    .desktop {
        @media (max-width: 479px) {
            display: none;
        }
    }
`;

const WorkContainer = ({project}) => (
    <StyledWorkContainer>
        <div className="work-description">
            <div className="work-header">
                <img src={project.logo} alt="" className="work-logo" />
                <div className="work-header-text">
                    <div>
                        <h3 className="title">{project.title}</h3>
                        <div className="metadata">
                            <div className="work-metadata">{project.year}</div>
                            <div className="work-metadata"> · </div>
                            <div className="work-metadata desktop">{project.role}</div>
                            <div className="work-metadata desktop">·</div>
                            <div className="work-metadata">{project.company}</div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="blurb">{project.description}</p>
            <div className="work-buttons">
                <a href={project.button1Link} className="w-button">
                    {project.button1Label}
                </a>
                <a href={project.button2Link} className="w-button">
                    {project.button2Label}
                </a>
            </div>
        </div>

        <img
            src={project.backgroundImage}
            alt=""
            sizes="100vw"
            srcSet={project.backgroundsrcset}
            className="work-img desktop hide"
        />
    </StyledWorkContainer>
);

export default WorkContainer;
