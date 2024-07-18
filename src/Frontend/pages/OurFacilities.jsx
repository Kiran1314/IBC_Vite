import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import abtsh1 from '../assets/img/shapes/about-shape-1.png'
import abtsh2 from '../assets/img/shapes/about-shape-2.png'
import aboutvideo from '../assets/video/Facilities~1.webm'
import { Seo } from '../Components/Seo';



export default function OurFacilities() {
  return (
    <>
    <Header/>
    <Seo
        title="Commercial &amp; Corporate Photography | Photography Services Dubai"
        description="Elevate Your Brand with Pro Photography in Dubai. IBC Studio: Commercial Photo shoot, Products Photography, Industrial Photography, Event &amp; Exhibition Coverage, &amp; Modeling Photo Shoot, Life style photography."
        type="article"
        name="@IBCStudioUAE"
        kwords="Commercial Photography Dubai, Professional Corporate Photography Dubai, Professional Photography Services Dubai,professional photography , event photography in dubai, industrial photography, wedding photography dubai, photography studio, event photography, products photography , photo studio in dubai, event photographer, product photography, professional photographer , photo studio near me, dubai photography , uaephotography, life style photography, modeling photography, photography company in dubai, studios in dubai , studios in uae. "
      />
      <link rel="canonical" href="https://www.ibcstudio.com/facilitiesg"/>

         
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
                    <h1 className="title">Our Facilities</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/facilities"> Facilities</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 


       <section className="about-section-2 pt-80 pb-0">
            <div className="container">
            <h3>We have the latest technology, talent and expert professional to execute your ideas into visual reality. For the past 15 years, we have been 
            constantly growing and adding new technologies into our system.</h3>
                <div className="row about-wrap-2 gy-lg-0 gy-4 align-items-center pt-20">
                
                <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="about-content-2">
                            <div className="section-heading">
                           <br/>  <br/>
                                <h3  data-text-animation="fade-in" data-duration="1.5"  >Audio set up:</h3>
                                <p>Equipped Acoustic control Digital Recording Studio <br/>
                                        Frontier Design Dakota 24-Bit PCI Soundcard. <br/>
                                        V-Studio 20 recording system with Digital Yamaha Mixing Console. <br/>
                                        Professional industry standard NEUMANN Large Diaphragm condenser microphone. <br/>
                                        DAT Recorder & Transfer Facilities.</p>

                                <h3  data-text-animation="fade-in" data-duration="1.5">Video Production Suite:</h3>
                                <p>Cakewalk / Logic Studio Pro 9 / Sound Cut Pro for Macintosh <br/>
                                      Pro Tool & Sound Forge Pro 10 <br/>
                                      Digital file conversions facility.</p>
                                      <h3  data-text-animation="fade-in" data-duration="1.5">Software:</h3>
                                <p>HD (High Definition) & 4K Camera set up for Video Shoot.
                                      Insta 360 camera for 360 degree Commercial video & presentations<br/>
                                      Video edits suites like Final Cut Pro (FCP) & AVID on Mac & Windows<br/>
                                      Canopus ADVC-1394 Video Capture card<br/>
                                      A Complete Lip-synch Dubbing Set with Pic-synch system.<br/>
                                      Motion Graphics Video</p>
                                      <h3  data-text-animation="fade-in" data-duration="1.5">Professional Still Photography :</h3>
                                <p>Complete studio lighting facilities with High Resolution Digital Cameras.<br/>
                                      Polaroid Camera to take pictures and create a hardcopy almost instantly</p>
                                      <h3  data-text-animation="fade-in" data-duration="1.5">Voice Talents:</h3>
                                <p>We have Wide range of Voice talents bank and music bank to serve you prompt and efficient service in various languages Like English, Arabic, Hindi, 
                                  Urdu, Malayalam, Germany, Chinese, French, Spanish, Farsi & Many more.</p>                                                


                            </div>


                   </div>
                   </div>
                    
               
                    <div className="col-lg-5 col-md-12 col-sm-12" style={{marginTop:30,maxHeight:200}} >
                        <div className="about-img-box">
                            <div className="shapes">
                            <img className="shape shape-1" src={abtsh1} alt="about"/>
             <img className="shape shape-2" src={abtsh2} alt="about" style={{zIndex:-1}}/>
                                <video classNameName='videoTag' autoPlay loop controls    style={{zIndex:999,paddingRight:70}} controlsList='nodownload' oncontextmenu='return false;'>
            <source src={aboutvideo} type='video/mp4'  />
            </video>
            
            
                            </div>
                           
                            
                        </div>
                    </div>
                    </div>
                    </div>
</section>




    <Footer/>
    </>
  )
}
