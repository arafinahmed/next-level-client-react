import React from 'react';
import FooterBar from '../FooterBar/FooterBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
const Footer = () => {

    return (
        <div className="footer-container">
            <div className="container">
                <FooterBar></FooterBar>

                <div className="">

                    <div className="rowAlign">
                        <p className="social-media">
                            <li className="list-inline-item"><a href="https://facebook.com/arafinahmed"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com/arafinahmed_"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/arafinahmed/"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/arafinahmed/"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                        </p>

                        <p className="align-right">Email: <a href="mailto:arafin2021@gmail.com">arafin2021@gmail.com</a></p>
                    </div>
                    <div className="rowAlign">
                        <p className="">NEXT Level is proudly made in Bangladesh</p>
                        <p className="align-right">© {(new Date()).getFullYear()} NEXT Level</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;