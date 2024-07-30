import React from 'react'
import footershp from '../assets/img/shapes/footer-shape.png'
import paypal from '../assets/img/images/paypal.webp'
import Ariba from '../assets/img/images/Ariba.webp'
 
import Content from "../Components/readmore";
import Content2 from "../Components/readmore2";
import ytblive from '../../Frontend/assets/img/images/ytblive.webp'
import { LazyLoadImage } from "react-lazy-load-image-component";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faInstagram, faLinkedin, faYoutube, faThreads } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
  return (
    <>
       
      
    <footer className="footer-section bg-dark-1">
    <div className="shape"><LazyLoadImage src={footershp} alt="footer"/></div>
    <div className="container">
        <div className="row footer-wrap">
            <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                    <div className="widget-header">
                    <h3 className="widget-title">Who we are?</h3>
                    </div>
                    
                    <p> 
                        
                         <Content />
                    
                    </p>
 

                    <h4 className="title">WE ARE AVAILABLE <span>Mon-Sat: 09.00 am to 8 pm</span></h4>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-col-2">
                    <div className="widget-header">
                        <h3 className="widget-title">Why IBC Studio?</h3>
                    </div>
                    <p>
                    <Content2 />
                        
                    </p>
                   
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                    <div className="widget-header">
                        <h3 className="widget-title">Contact Us</h3>
                    </div>
                    <p style={{fontSize:16}} className="mb-20">
                         For any Inquires Please contact us at <br/>
                         P.O. Box: 120472, Dubai, UAE <br/>
                         <a href="mailto:info@ibcstudio.com"><FontAwesomeIcon icon={faEnvelope} /> &nbsp;  info@ibcstudio.com </a><br/>
                         <a href="tel:+971 55 2912810"><FontAwesomeIcon icon={faMobile} />  &nbsp;  +971 55 2912810</a> 
                       </p>
                       <a target='_blank' rel="noreferrer"  href='http://discovery.ariba.com/profile/AN01411288101'><ul className="social-list" >
                       <li> <LazyLoadImage src={Ariba} alt='Ariba' style={{marginTop:28}}  /> </li>
                       
                    </ul></a>
                                      
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                    <div className="widget-header">
                        <h3 className="widget-title">Follow us</h3>
                    </div>
                    <div className="footer-form mb-20">
                    <ul className="footer-list" >
                    <li>Be the first to get our updates, please contact us through one of the following channels.</li>

                    </ul>
                    <ul className="social-list">
                        <li className="facebook">
                            <a rel="noreferrer" href="https://www.facebook.com/IBCStudioUAE/" target='_blank' aria-label="IBC Studio facebookPg"><FontAwesomeIcon icon={faFacebookF} /></a>
                        </li>
                        <li className="linkedIn">
                            <a rel="noreferrer" href="https://www.linkedin.com/in/ibcstudiouae/" target='_blank' aria-label="IBC Studio LinkedInPg"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                       
                        <li className="instagram">
                            <a rel="noreferrer" href="https://www.instagram.com/ibcstudiouae/" target='_blank' aria-label="IBC Studio InstagramPg"><FontAwesomeIcon icon={faInstagram} /></a>
                        </li>

                        <li className="threads">
                            <a rel="noreferrer" href="https://www.threads.net/@ibcstudiouae" target='_blank' aria-label="IBC Studio ThreadsPg"><FontAwesomeIcon icon={faThreads} /></a>
                        </li>

                        <li className="Youtube">
                            <a rel="noreferrer" href="https://www.youtube.com/@ibcstudiome" target='_blank' aria-label="IBC Studio YoutubePlist" ><FontAwesomeIcon icon={faYoutube} /></a>
                        </li>
                        &nbsp; &nbsp; <a rel="noreferrer" href="https://www.youtube.com/@ibcstudiome" target='_blank' aria-label="IBC Studio YoutubeLive"><LazyLoadImage src={ytblive}  alt='ytblive' width={10}/></a>
                    </ul><br></br>
                    <ul className="social-list">
                  <a href='/paypalgwy'><li>  <LazyLoadImage src={paypal} alt='paypal'  /> </li></a>
                        
                    </ul>
                    </div>
                   
                    <div className="form-check form-item">
                     
                         
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-area">
        <div className="container">
            <div className="row copyright-content">
                <div className="col-lg-12">
                    <p style={{textAlign:'center'}}>© 2024 All Rights Reserved | IBC STUDIO - UAE</p>
                </div>
                
            </div>
        </div>
    </div>
</footer>
{/* footer-section */}

</>
  )
}
