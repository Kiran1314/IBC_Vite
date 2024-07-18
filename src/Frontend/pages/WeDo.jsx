import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import service1 from '../assets/img/images/services/audio_prod.webp'
import service2 from '../assets/img/images/services/media-prod.webp'
import service3 from '../assets/img/images/services/VEDIO.webp'
import service4 from '../assets/img/images/services/COMMERCIAL.webp'
import service5 from '../assets/img/images/services/EVENT.webp'
import service6 from '../assets/img/images/services/multimedia.webp'
import { Seo } from '../Components/Seo';

export default function WeDo() {
  return (
    <>
    <Header/>

    <Seo
        title="IVR Recording Studio in Dubai | Video Production Studio"
        description="IBC Studio, (Innovative Business Communication) is an Audio-Video Production house as well as designing &amp; multi-media solutions provider, based in Dubai, UAE, IBC Studio, specialized in Video Production, Audio Recording, Web-Design, Corporate Video Presentation, Training Video, Time Lapse Video, Digital still photography and Digital Prints of poster banners and window graphics etc"
        type="article"
        name="@IBCStudioUAE"
        kwords="ivr recording, ivr recording uae, top media production houses in dubai, professional photography, professional photographer, voice over recording, voice Recording, voice over dubai, voice record studio, wedding photography, voice recording, video studio dubai, video production company uae, recording studio, videographer dubai, audio recording, audio recording studio, video production company dubai, digital printing, product photography, video shoot, audio recording studio, Audio recording studios, Audio &amp; video production companies, web developing, web designing, post production dubai, corporate video production dubai, event photographer , event photography, event photography in dubai, nearby recording studios, dubai recording studio, Professional photography, good recording studio, sound record studio, designing, industrial photography, photography studio , products photography, photo studio in dubai, photo studio near me, photograph, dubai photography, uae photography, lifestyle photography, modeling photography, video shooting , timelapse, photography company in dubai, commercial, cheap website design dubai, 4k video, video services, post production, ibcdubai , corpprate video , commercial video production, studios in dubai, , studios in uae, dubbing, ivr recording dubai, telephone hold, telephone hold message, sound record studio"
      />
       <link rel="canonical" href="https://www.ibcstudio.com/wedo"/>

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
                    <h1 className="title">Services</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/wedo"> We Do</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 

    <section className="process-section-2 fade-wrapper pt-120 pb-10">
            <div className="container">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5">What We Do?</h2>
                   
                </div>
                <div>

               
                <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                    <p>We offer video production & Post Production services for various purposes. Be it corporate videos, ad films,
 infotainment videos for YouTube or the exhibition videos for OEM manufacturer, we deal with all kinds of video production services.</p>

<p>These all give you a reasonable & transparent pricing, providing solutions as per your requirements and budget. Our recording studio is designed to produce
     the highest quality audio for voice over for various requirements like the radio spot, IVR, Telephone Message, and Audio Book etc.</p>

<p> In addition, our Equipped designing Suit will support for website & software development, E-Product Catalogue & many more Our Commercial 
    Photography Division also offering for Professional Photography & Event, Exhibition, Parties Coverage.</p>

<p>These all services make us one of the most desired service providers in the region. </p>
                </div> 
                </div>
            </div>
        </section>

        <section className="pricing-section pt-20 pb-130">
            <div className="container">
                <div className="pricing-tab wow fade-in-bottom" data-wow-delay="500ms">
                   
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="row gy-lg-0 gy-4 justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h3   align='center'>Audio Recording & Composing</h3>
                                        <div className="card">
                                        <div className="card-body">
                               
                                        <img src={service1} alt='service1' /> 
                               
                                        </div>
                                        </div>
                                         
                                        <h3 className="feature pt-30">Services:</h3>
                                        <p className="card-text">
                                            <ul>
                                                <li>Radio Spots / Jingles / Signature Tunes.</li>
                                                <li>Audio Tutorial</li>
                                                <li>For Telephone system: <br/>
                                                   * On-Hold Messages (Telephone Hold) & Auto Attendant <br/>
                                                   * Interactive Voice Response (IVR)</li>  
                                                <li>Audio Book</li>
                                                <li>Lip-Sync Dubbing</li>
                                                <li>Tutorial Audio Recording</li>
                                                <li>Voice Artist & Talents</li>
                                                <li>Composing Signature Tunes</li>
                                                </ul>

                                        </p>
                                    </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h3   align='center'>Video Production &<br/> Post Production</h3>
                                        <div className="card">
                                        <div className="card-body">
                               
                                        <img src={service3} alt='service3' /> 
                               
                                        </div>
                                        </div>
                                         
                                        <h3 className="feature pt-30">Services:</h3>
                                        <p className="card-text">
                                            <ul>
                                                <li>TV commercials</li>
                                                <li>Corporate Video Presentations</li> 
                                                <li>Documentaries / Testimonial Video / Company Profile Video</li> 
                                                <li>Training Video</li>
                                                <li>Time Lapse Video to Showcase your on going Project</li>
                                                <li>360 Degree / Aerial</li>
                                                <li>Lip-Synch. Dubbing Facilities in Film & Animation</li> 
                                                <li>On line Marketing / Social Media Presentation</li>
                                                </ul>

                                            </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h3   align='center'>Website & Software Solutions</h3>
                                        <div className="card">
                                        <div className="card-body">
                               
                                        <img src={service2} alt='service2' /> 
                               
                                        </div>
                                        </div>
                                         
                                        <h3 className="feature pt-30">Services:</h3>
                                        <p className="card-text">
                                            <ul>
                                                <li>Interactive E-Product Catalogue</li>
                                                <li>Website & Software Developing</li>
                                                <li>Content / Copy Writing</li>
                                                <li>Customized logo design, Brochure Design</li>
                                                <li>Designing Vehicle Graphic, Indoor & Outdoor display</li>
                                                <li>Various On-Line Software & Applications</li>
                                                <li>E-learning & Corporate website</li>
                                                <li>Augmented Reality</li>
                                                <li>Virtual Reality</li>
                                                <li>Online Tutorial</li>
                                                </ul>

                                         </p>
                                    </div>
                                </div>
                                 
                                
                            </div>
                            <div className="row gy-lg-0 gy-4 justify-content-center pt-40">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h3   align='center'>Commercial Still Photography</h3>
                                        <div className="card">
                                        <div className="card-body">
                               
                                        <img src={service4} alt='service4' /> 
                               
                                        </div>
                                        </div>
                                         
                                        <h3 className="feature pt-30">Services:</h3>
                                        <p className="card-text">
                                            <ul>
                                            <li>Products/ Models / Industrial Photography</li>
                                            <li>Product Photography</li>
                                            <li>Industrial Photography</li>
                                            <li>Food Photography</li>
                                            <li>Model & Portrait</li>
                                            <li>Travel Tourism & Hotel</li>
                                            <li>Perishable Products</li>
                                            <li>Parties and Wedding</li>
                                            <li>Schools & Centers</li>
                                            <li>Properties</li>
                                            <li>Facilities</li>

                                            </ul>

                                         </p>
                                    </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h3   align='center'>Event <br/>Coverage</h3>
                                        <div className="card">
                                        <div className="card-body">
                               
                                        <img src={service5} alt='service5' /> 
                               
                                        </div>
                                        </div>
                                         
                                        <h3 className="feature pt-30">Services:</h3>
                                        <p className="card-text">
                                            <ul>
                                                <li>Corporate & Private Parties</li>
                                                <li>Product Launch / Seminars</li>
                                                <li>Video & Still Coverage</li>
                                                <li>Production of Curtain Raiser Presentation</li>
                                                <li>Event Management</li>
                                                <li>Light & Sound</li>
                                            </ul>

                                            </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item">
                                        <h3   align='center'>Multi-Media & Motion Graphics</h3>
                                        <div className="card">
                                        <div className="card-body">
                               
                                        <img src={service6} alt='service6' /> 
                               
                                        </div>
                                        </div>
                                         
                                        <h3 className="feature pt-30">Services:</h3>
                                        <p className="card-text">
                                            <ul>
                                                <li>Video Animations</li>
                                                <li>Animation Tutorial</li>
                                                <li>Motion Graphic Editing & Designing</li>
                                                <li>3d & 2D Animations Videos</li>
                                              
                                                </ul>

                                         </p>
                                    </div>
                                </div>
                                 
                                
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>
        </section>



       {/*  <section>
        <div className="container">
        <div className="row"  data-text-animation="fade-in" data-duration="1.5"> 
          
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                               
                                <img src={service1} alt='service1' /> 
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6 pl-60 "> 
                    <h2 >Audio Recording & Composing</h2>
                    <p className="card-text">
                                <ul>
                                    <li>Radio Spots / Jingles / Signature Tunes.</li>
                                    <li>Audio Tutorial.</li>
                                    <li>For Telephone system:</li>
                                    <li>On-Hold Messages (Telephone Hold) & Auto Attendant</li>
                                    <li>Interactive Voice Response (IVR).</li>
                                    </ul>

                                </p>
                    </div>

          </div>         
          <div className="row pt-25"  data-text-animation="fade-in" data-duration="1.5">       

                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                               
                                <img src={service2} alt='service2' /> 
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6 pl-60 "> 
                    <h2 >Website & Software Developing</h2>
                    <p className="card-text">
                                <ul>
                                    <li>Interactive E-Product Catalogue</li>
                                    <li>Website & software Developing</li>
                                    <li>Content / Copy Writing</li>
                                    <li>Customized logo design, Brochure Design</li>
                                    <li>Designing Vehicle Graphic, Indoor & Outdoor display</li>
                                    <li>Various On-Line Software & Applications</li>
                                    </ul>

                                </p>
                    </div>
        </div>
                    <div className="row pt-25"  data-text-animation="fade-in" data-duration="1.5">   
                    
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                               
                                <img src={service3} alt='service3' /> 
                               
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-sm-12 col-md-6 pl-60 "> 
                    <h2 >Video Productions</h2>
                    <p className="card-text">
                                <ul>
                                    <li>TV commercials</li>
                                    <li>Corporate Video Presentations</li>
                                    <li>Company Profile Video</li>
                                    <li>Documentaries</li>
                                    <li>Training Video</li>
                                    <li>Testimonial Video</li>
                                    <li>Time Lapse Video to Showcase your on going Project</li>
                                    <li>360 Degree / Aerial</li>
                                    <li>Lip-Synch. Dubbing Facilities in Film & Animation</li>
                                    <li>2D & 3D Animated film</li>
                                    <li>On line Marketing / Social Media Presentation</li>
                                    </ul>

                                </p>
                    </div>

                    </div>
                    
                    <div className="row pt-25"  data-text-animation="fade-in" data-duration="1.5">  

                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                               
                                <img src={service4} alt='service4' /> 
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6 pl-60 "> 
                    <h2 >Commercial Still Photography</h2>
                    <p className="card-text">
                                <ul>
                                <li>Products/ Models / Industrial Photography</li>
                                    </ul>

                                </p>
                    </div>

                    </div>

                    <div className="row pt-25"  data-text-animation="fade-in" data-duration="1.5">  
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                               
                                <img src={service5} alt='service5' /> 
                               
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12 col-md-6 pl-60 "> 
                    <h2 >Events: Corporate & Private Parties / Product Launch / Seminars etc</h2>
                    <p className="card-text">
                                <ul>
                                    <li>Video & Still Coverage</li>
                                    <li>Production of Curtain Raiser Presentation</li>
                                    <li>Event Management</li>
                                    <li>Light & Sound</li>
                                    </ul>

                                </p>
                    </div>
                    </div>

                    <div className="row pt-25 pb-50"  data-text-animation="fade-in" data-duration="1.5">  
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="card">
                            <div className="card-body">
                               
                            <img src={service6} alt='service6' /> 
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6 pl-60 "> 
                    <h2 >Multi-Media & Motion Graphics</h2>
                    <p className="card-text">
                                <ul>
                                     
                                    </ul>

                                </p>
                    </div>
                    </div>
                     
                    
 
                </div>
                
        
         
        
     
        </section> */}

    <Footer/>
    </>
  )
}
