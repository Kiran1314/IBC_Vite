import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import Gallery from '../Components/ClinetsLGallery/ClientsPhoto';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Seo } from '../Components/Seo';


export default function Clients() {
  return (
    <>
     <Header/>
     <Seo
        title="IBC Studio Recording Production in Dubai | Reputed Clients Dubai UAE"
        description="IBC Studio, (Innovative Business Communication) is an Audio-Video Production house as well as designing &amp; multi-media solutions provider, based in Dubai, UAE, IBC Studio, specialized in Video Production, Audio Recording, Web-Design, Corporate Video Presentation, Training Video, Time Lapse Video, Digital still photography and Digital Prints of poster banners and window graphics etc"
        type="article"
        name="@IBCStudioUAE"
        kwords="IVR recording, media companies in dubai, professional photography, voice over recording, wedding photography, voice recording, video production studio, recording studio, videographer dubai, audio recording, video production company dubai, digital printing, product photography, video shoot, recording studio in dubai, Audio &amp; video recording studio in dubai, Audio &amp; video production house in dubai, web development and web designing in dubai, designing, production houses in dubai, corporate video production dubai"
      />
      <link rel="canonical" href="https://www.ibcstudio.com/clients"/>



           {/*page-header */} 

        <section className="page-header" data-background={bgimg}>
            <div className="overlay"></div>
            <div className="shapes">
                <div className="shape shape-1"><LazyLoadImage src={phs1} alt="shape"/></div>
                <div className="shape shape-2"><LazyLoadImage src={phs2} alt="shape"/></div>
                <div className="shape shape-3"><LazyLoadImage src={phs3} alt="shape"/></div>
                
            </div>
            <div className="container">
                <div className="page-header-content text-center">
                    <h1 className="title">Our Clients</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/clients"> Clients</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 

       <section className="process-section-2 fade-wrapper pt-60 pb-120">
             
               <div className='container' align='center'>
                    <h3> We have served more than 3000 clients and all seem to carry plausible ideas about our expertise, professionalism, and services. We thrive to satisfy all our client's
                            needs and we do it successfully every time.<br/> Read our client review and decide for yourself.
                    </h3>
                   
                    </div>
                    <Gallery />
               
       </section>

      

      <Footer/>   
    
    </>
  )
}
