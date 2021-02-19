/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    .footer-middle{
        background:var(--mainDark);
        padding-top:3rem;
        color: var(--mainWhite);
    }
    .footer-bottom{
        padding-top: 3rem;
        padding-bottom: 2rem;
    }
    ul li a{
        color: var(--mainGrey);
    }

    ul li a:hover{
        color:var(--mainLightGrey)
    }
`;

function Footer() {
    return (
        <Fragment>
            <FooterContainer className="main-footer">
                <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li>Dhanmondi, Dhaka</li>
                                <li>+880-123-456-789 </li>
                                <li>info@arafatislam.com</li>
                                <li>Bangladesh</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>lorem iosus</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Lorem Ipsum </a></li>
                                <li><a href="#">Lorem Ipsum </a></li>
                                <li><a href="#">Lorem Ipsum </a></li>
                                <li><a href="#">Lorem Ipsum </a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>lorem iosus</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Lorem Ipsum </a></li>
                                <li><a href="#">Lorem Ipsum </a></li>
                                <li><a href="#">Lorem Ipsum </a></li>
                                <li><a href="#">Lorem Ipsum </a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>lorem iosus</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Lorem Ipsum </a></li>
                                <li><a href="#">Lorem Ipsum </a></li>
                                <li><a href="#">Lorem Ipsum </a></li>
                                <li><a href="#">Lorem Ipsum </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                    <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} Arafat Islam City Guide App-All Rights Reserved.
                    </p>
                </div>
                </div>
                </div>
            </FooterContainer>
        </Fragment>
    )
}
export default Footer;
