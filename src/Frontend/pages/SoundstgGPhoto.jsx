import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Gallery from '../Components/PhotoGallery/SoundstgPhoto'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'  
import { Seo } from '../Components/Seo';

export default function SoundstgGPhoto() {
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
      <link rel="canonical" href="https://www.ibcstudio.com/soundstg"/>


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
                   <h1 className="title">Sound & Stage - Craft</h1>
                   <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/schools">Sound & Stage - Craft</a></h4>
               </div>
           </div>
       </section>
      {/*page-header */}

     
      <div className="row pt-90 pb-200">
       <div className='col-lg-12'>
        <Gallery/>
        </div>
       </div>
       


   <Footer/>
   
   </>

  )
}
