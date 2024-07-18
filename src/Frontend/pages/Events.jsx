import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import Event1 from '../assets/img/images/Event1.webp'
import Event2 from '../assets/img/images/Event2.webp'
import Event3 from '../assets/img/images/Event3.webp'
import { Seo } from '../Components/Seo';


export default function Events() {
  return (
    <>
             <Header/>
 
        <Seo
        title="Event coverage shooting in Dubai UAE | Interview Shooting"
        description="Corporate &amp; Private, Parties Product Launch Seminars etc. Light &amp; Sound, Video&amp; Still Coverage, Production of curtain Raiser Presentation, Event Management."
        type="article"
        name="@IBCStudioUAE"
        kwords="events photography in dubai, event photography , event photographer"
      />
         <link rel="canonical" href="https://www.ibcstudio.com/events"/>





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
                    <h1 className="title">Events </h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/events"> Events </a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 

       <section className="process-section-2 fade-wrapper pt-60 pb-50">
            <div className="container">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5">  Event & Seminar </h2>
                   
                </div>
                <div>

               
                <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                        <p>The world never sleeps, and each day brings forth a new opportunity to shape a distinctive identity, moving steadily toward milestones in every 
                            business endeavor. Companies, both nationally and internationally, actively engage in a myriad of events, exhibitions, and seminars. 
                            To seamlessly orchestrate these experiences for participants and capture the essence of the moment, we offer top-notch sound and stage management
                             services, accompanied by skilled photographers and videographers.</p>
 
                </div> 
                </div>
            </div>
        </section>

        <div className="container pb-100">
           <div className="row">
            
                        <div className="col-lg-4 pt-30 pb-30">
                                <div  >
                                 <a href="/eventsvideo">   <img class="card-img-top" src={Event1} alt="Title" /></a>
                                    <div class="card-body">
                                        <h3 class="card-title" style={{textAlign:'center',padding:10,fontWeight:800,color:'#f37331' }}>Video Coverage</h3>
                                        <p class="card-text" >Immerse yourself in the art of motion as we present the finest video coverage service in Dubai. Our professional skills,
                                         tailored to your budget, ensure comprehensive coverage of both intimate gatherings and grand events. Utilize our high-definition motion-capturing 
                                         cameras to immortalize your moments, creating valuable assets for promotional and marketing purposes. Contact us to elevate your video content to new heights. </p>
                                    </div>
                                </div>

                        </div>
                        <div className="col-lg-4 pt-30 pb-30">
                                 <div >
                                 <a href='/stilcov'> <img class="card-img-top" src={Event2} alt="Title" /></a>
                                <div class="card-body">
                                    <h3 class="card-title" style={{textAlign:'center',padding:10,fontWeight:800,color:'#f37331' }}>Still Coverage</h3>
                                    <p class="card-text"> Embark on a visual journey with IBC Studio's Still coverage service. Our team of experienced photographers excels in capturing the perfect moments 
                                    using state-of-the-art equipment and techniques. Uncover a world of professional photography services, transforming your event into a spectacular showcase. 
                                    Receive your raw images within 24 hours, granting you the freedom to share and relive those special moments on your social media accounts. Discover the essence 
                                    of well-organized executives working tirelessly to make your event a resounding success. Contact us today to secure your date and elevate your event with our exceptional
                                     services.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-4 pt-30 pb-30">
                        <div >
                        <a href='/soundstg'> <img class="card-img-top" src={Event3} alt="Title" /> </a>
                        <div class="card-body">
                            <h3 class="card-title" style={{textAlign:'center',padding:10,fontWeight:800,color:'#f37331' }}>Sound & Stage</h3>
                            <p class="card-text"> Immerse your event in unparalleled audio and visual excellence with our top-tier sound and stage services in Dubai. Our team of experts attends to all 
                            technical needs, ensuring a seamless and memorable experience. Guaranteeing the highest quality in sound and stage production, we offer a range of support options,
                             from production experts to sound managers. With us, success is not just a possibility; it's a certainty. Book your date now, and let us set the stage for your unforgettable
                              event.</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>




    <Footer/>
    </>
  )
}
