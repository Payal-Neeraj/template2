import React from 'react';
import styled from 'styled-components';
import youtube from '../images/youtube.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png'

function Footer(){
    return(
        <>
        <FooterContainer className="main-footer"> 
        <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* column1 */}
                        <div className="col-md-3 col-sm-6">
                            <h1 >Let's find your dream home</h1>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            {/* <h4>Let's find your dream home</h4> */}
                        </div>

                        {/* column2 */}
                        <div className="col-md-3 col-sm-6">
                            <h5>Contact us</h5>
                            <ul className="list-unstyled">
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>

                        {/* column3 */}
                        <div className="col-md-3 col-sm-6">
                            <h5>Help & FAQs</h5>
                            <ul className="list-unstyled">
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <img className="m-2" src={youtube} alt="youtube"></img>
                            <img className="m-2" src={twitter} alt="youtube"></img>
                            <img className="m-2" src={linkedin} alt="youtube"></img>
                            <img className="m-2" src={facebook} alt="youtube"></img>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center d-flex justify-content-center">
                            &copy;{new Date().getFullYear()} City Guide App - All Rights
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    </>
    );
}

export default Footer;

const FooterContainer = styled.footer  `
    .footer-middle{
        background: #000d1a;
        padding-top: 3rem;
        color: var(--mainWhite);
        color: white;
    }

    .footer-bottom{
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    ul li{
        font-size: 15px;
    }

    h1{
        font-italic: true;
    }

    
`;
