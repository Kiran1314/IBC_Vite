import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import { Seo } from '../Components/Seo';
import ContactForm from '../Components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faMobilePhone } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <>
     <Header/>
     <Seo
        title="IBC Studio Production house in Dubai | Call now for quick job quote"
        description="IBC Studio, (Innovative Business Communication) is an Audio-Video Production house as well as designing &amp; multi-media solutions provider, based in Dubai, UAE, IBC Studio, specialized in Video Production, Audio Recording, Web-Design, Corporate Video Presentation, Training Video, Time Lapse Video, Digital still photography and Digital Prints of poster banners and window graphics etc"
        type="article"
        name="@IBCStudioUAE"
        kwords="IVR recording, media companies in dubai, professional photography, voice over recording, wedding photography, voice recording, video production studio, recording studio, videographer dubai, audio recording, video production company dubai, digital printing, product photography, video shoot, recording studio in dubai, Audio &amp; video recording studio in dubai, Audio &amp; video production house in dubai, web development and web designing in dubai, designing, production houses in dubai, corporate video production dubai"
      />
      <link rel="canonical" href="https://www.ibcstudio.com/contact"/>

 

           {/*page-header */} 

        <section className="page-header" data-background={bgimg}>
            <div className="overlay"></div>
            <div className="shapes">
                <div className="shape shape-1"><img src={phs1} alt="shape"/></div>
                <div className="shape shape-2"><img src={phs2} alt="shape"/></div>
                <div className="shape shape-3"><img src={phs3} alt="shape"/></div>
                
            </div>
            <div className="container">
                <div className="page-header-content text-center">
                    <h1 className="title">Contact Us</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/contact"> Contact us</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 
       <div className='container'  >
      
       <div className="row">
        
       <div className="col-xs-12 col-md-6  col-lg-6 pt-40 pb-50"> 
       
       

        <div className="contact-content" >
                            <div className="section-heading">
                                <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">Contact Us</h4>
                                <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Let's work together</h2>
                                <p>We have a Complete In-House setup; Multi-media Production & Designing Suite, Equipped Acoustic Control Digital Recording Studio, Professional Video Editing 
        Platform FCP & AVID, HD & 4K Cameras & Commercial Photographic division, a wide range of voice talent bank. These all give you a reasonable & transparent pricing, 
        providing solutions as per your requirements and budget.</p>
                                
                                
        <p>We have Served Government, Semi-Government, Multi-nationals & Entrepreneurs last 15 years, we have been delivering excellence. Call us today to avail our services.</p>
       
                            </div>
                            <div className="contact-list">
                                <div className="list-item">
                                    <div className="icon">
                                    <FontAwesomeIcon icon={faLocationDot} /> 
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Our Address</h4>
                                        <p>IBN Batuta Gate Office, P.O. Box: 120472,<br/>Dubai, UAE</p>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div className="icon">
                                    <FontAwesomeIcon icon={faMobilePhone} />    
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Phone Number</h4>
                                        <span><a href="tel:+65485965789">(+971) 55 2912810</a></span>
                                        <span><a href="mailto: info@ibcstudio.com"> info@ibcstudio.com</a></span>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div className="icon">
                                    <FontAwesomeIcon icon={faClock} />  
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Hours of Operation</h4>
                                        <span>Monday - Saturday: 09:00 AM - 8:00 PM</span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
         
        </div>
      <div className="col-xs-12 col-md-6 col-lg-6 pt-80 pb30"> 
       
       <div className='contact-form'  >
       <h2 className="section-title  pb-30" data-text-animation data-split="word" align='center' data-duration="1">Send us a message!</h2>
        <ContactForm/>
        </div>
      </div>
      </div>
     </div>
      <Footer/>   
    
    </>
  )
}
