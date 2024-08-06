import React from 'react'
import Logo from './Logo.png'
import ytblive from '../../Frontend/assets/img/images/ytblive.webp'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faInstagram, faLinkedin, faThreads, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {  faLocationDot,faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <>
       <header className="header sticky-active">
            <div className="primary-header">
                <div className="primary-header-inner">
                    <div className="header-logo d-lg-block">
                        <a href="/">
                            <LazyLoadImage src={Logo} alt="Logo" width={200}/>
                        </a>
                    </div>
                    <div className="header-right-wrap">
                        <div className="header-menu-wrap">
                            <div className="mobile-menu-items">
                                <ul>
                                    <li>
                                    <a href="/">Home</a>     
                                    </li>
                                    <li>
                                         
                                    <a href="/about">About Us</a>   
                                        </li>
                                    <li>
                                        <a href="/wedo">We Do</a>
                                      
                                    </li>
                                    <li><a href="/facilities">Our Facilities</a></li>
                                    <li className="menu-item-has-children">
                                        <a href="/">Our Work Samples</a>
                                        <ul>
                                        <li><a href="/webdesign">Web IT Solutions</a></li>
                                        <li><a href="/audio">Audio Recording</a></li>
                                        <li><a href="/video">Video Shooting & Post Production</a></li>
                                        <li><a href="/photography">Photography</a></li>
                                        <li><a href="/multimedia">Multimedia & Motion Graphics</a></li>
                                        <li><a href="/events">Events</a></li>
                                        <li><a href="/aerialtmlps">Ariel & Timelapse</a></li>
                                        <li><a href="/arVrvideo">AR, VR & 360 Virtual Video</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/clients">Our Clients</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                    <li><a rel="noreferrer" href="https://www.youtube.com/@ibcstudiome" target='_blank'><LazyLoadImage  src={ytblive}  alt='ytblive' width={10}/></a></li>
                                </ul>
                            </div>
                        </div>
                     
                        <div className="header-right">
                            <div className="sidebar-icon">
                                <button className="sidebar-trigger open" name='side-button'>
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="https://www.w3.org/2000/svg">
                                        <path d="M0.300781 0H5.30078V5H0.300781V0Z" fill="currentColor"/>
                                        <path d="M0.300781 9H5.30078V14H0.300781V9Z" fill="currentColor"/>
                                        <path d="M0.300781 18H5.30078V23H0.300781V18Z" fill="currentColor"/>
                                        <path d="M9.30078 0H14.3008V5H9.30078V0Z" fill="currentColor"/>
                                        <path d="M9.30078 9H14.3008V14H9.30078V9Z" fill="currentColor"/>
                                        <path d="M9.30078 18H14.3008V23H9.30078V18Z" fill="currentColor"/>
                                        <path d="M18.3008 0H23.3008V5H18.3008V0Z" fill="currentColor"/>
                                        <path d="M18.3008 9H23.3008V14H18.3008V9Z" fill="currentColor"/>
                                        <path d="M18.3008 18H23.3008V23H18.3008V18Z" fill="currentColor"/>
                                        </svg>
                                </button>
                            </div>
                        </div>
                       
                    </div>
                </div>
                
            </div>
        </header>
        

        <div id="popup-search-box">
            <div className="box-inner-wrap d-flex align-items-center">
                <form id="form" action="#" method="get" role="search">
                    <input id="popup-search" type="text" name="s" placeholder="Type keywords here..."/>
                </form>
                <div className="search-close"><i className="fa-sharp fa-regular fa-xmark"></i></div>
            </div>
        </div>
        

        <div id="sidebar-area" className="sidebar-area">
       <button className="sidebar-trigger close" name='close-btn'>
                 X
            </button>   
            <div className="side-menu-content">
                <div className="side-menu-logo">
                    <a href="index.html"><LazyLoadImage src={Logo} alt="logo"/></a>
                </div>
                <div className="side-menu-wrap"></div>
                <div className="side-menu-about">
                    <div className="side-menu-header">
                        <h3>About Us</h3>
                    </div>
                    <p>Whether you're looking to produce a hit single, create a captivating commercial, or bring your cinematic masterpiece to life, IBC Studio is here to make it happen. Contact us today to learn more about how we can help 
                        you achieve your audio and video production goals. Let's create something extraordinary together.</p>
                    <a href="/contact" className="rr-primary-btn">Contact Us</a>
                </div>
                <div className="side-menu-contact">
                    <div className="side-menu-header">
                        <h3>Contact Us</h3>
                    </div>
                    <ul className="side-menu-list">
                        <li>
                        <FontAwesomeIcon icon={faLocationDot} /> &nbsp;
                            <p>IBN Batuta Gate Office, P.O. Box: 120472, Dubai, UAE</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faMobile} /> &nbsp;
                            <a href="tel:+971 55 2912810">+971 55 2912810</a>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                            <a href="mailto:info@ibcstudio.com">info@ibcstudio.com</a>
                        </li>
                    </ul>
                </div>
                <ul className="side-menu-social">
                    <li className="facebook"><a href="https://www.facebook.com/IBCStudioUAE/">  <FontAwesomeIcon icon={faFacebookF} /> </a></li>
                    <li className="instagram"><a href="https://www.instagram.com/ibc.studiouae">  <FontAwesomeIcon icon={faInstagram} /> </a></li>
                    <li className="threads"><a href="https://www.threads.net/@ibcstudiouae">  <FontAwesomeIcon icon={faThreads} /> </a></li>
                    <li className="linkedin"><a href="https://www.linkedin.com/in/ibcstudiouae/">  <FontAwesomeIcon icon={faLinkedin} /> </a></li>
                    <li className="youtube"><a href="https://www.youtube.com/@ibcstudiome">  <FontAwesomeIcon icon={faYoutube} /> </a></li>
                    
                </ul>
            </div>
        </div>
    
 {/*
        <div id="preloader">
            <div className="preloader-close">X</div>
            <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
            </div>
        </div>
    */}

       
        </>
     
  )
}
