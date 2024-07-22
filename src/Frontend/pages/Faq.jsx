import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
 
import { Seo } from '../Components/Seo';




export default function Faq() {
  return (
    <>
    <Header/>

<Seo
title="Digital Marketing Solution That Improve Your Company Growth"
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
           <h1 className="title">Frequently Asked Questions </h1>
           <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/events"> Frequently Asked Questions </a></h4>
       </div>
   </div>
</section>
{/*page-header */} 

<section className="faq-section pt-130 pb-130">
            
            <div className="faq-top-shape"></div>
            <div className="container">
                <div className="row ">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="faq-content">
                            <div className="section-heading">
                                <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">Just Ask us some question</h4>
                                <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Digital Marketing Solution That Improve Your Company Growth</h2>
                            </div>
                            <div className="accordion" id="accordionExampleTwo">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                         What services does IBC Studio offer?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        IBC Studio provides a range of media services including commercial photography, videography, on-hold messages, interactive voice response (IVR) systems, product photoshoots, and real estate video shoots.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                         How can I book a photoshoot or video shoot with IBC Studio? 
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        You can book a session by contacting us through our website's contact form, calling our office, or sending us an email at info@ibcstudio.com. We'll discuss your project needs and schedule a convenient time.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        What is the typical turnaround time for receiving the final photos or videos? 
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        The turnaround time varies depending on the project scope, but generally, you can expect to receive your final photos or videos within 7-14 business days after the shoot.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        Do you offer packages for real estate videography? 
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        Yes, we offer various packages tailored to different needs and budgets. Our packages can include drone footage, 3D tours, and high-definition video walkthroughs. Please contact us for detailed package information.
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                         Can you create custom on-hold messages for my business? 
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        Absolutely! We specialize in creating customized on-hold messages that align with your brand's voice and provide important information to your callers. Contact us to discuss your requirements.
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingNine">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                         What type of equipment do you use for photography and videography? 
                                        </button>
                                    </h2>
                                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        We use state-of-the-art equipment, including high-resolution cameras, professional lighting setups, and advanced editing software to ensure the highest quality results for our clients.
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTen">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        Are you able to travel for shoots outside of Dubai? 
                                        </button>
                                    </h2>
                                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        Yes, we can travel to locations outside of Dubai. Additional travel fees may apply depending on the distance and specific requirements of the shoot. Please reach out to discuss your location and project needs.We did for Oman, Saudi Arabia, & middle East various Cities
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEleven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                         Do you provide voice-over talent for IVR and on-hold messages? 
                                        </button>
                                    </h2>
                                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        Yes, we have a roster of professional voice-over talents in various languages and accents to match your specific needs for IVR and on-hold messages.
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwelve">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                         Can you help with the creative direction for my project? 
                                        </button>
                                    </h2>
                                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        Yes, our team includes experienced creative directors who can help conceptualize and guide the creative aspects of your project to ensure it aligns with your vision and goals.
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThirteen">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                         What are your rates for commercial photography and videography? 
                                        </button>
                                    </h2>
                                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        Our rates vary depending on the scope and complexity of the project. Please contact us directly with details about your project, and we will provide a customized quote based on your specific needs.
                                        </div>
                                    </div>
                                    
                                </div>
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
