 import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
/* import web1 from '../assets/img/images/web-1.png'
import web2 from '../assets/img/images/web-2.jpg'
import web3 from '../assets/img/images/web-3.jpg'
import web4 from '../assets/img/images/web-4.png'
import web5 from '../assets/img/images/web-5.jpg'
import web6 from '../assets/img/images/web-6.jpg'
import web7 from '../assets/img/images/web-7.jpg'
import web8 from '../assets/img/images/web-8.jpg' */
import { Seo } from '../Components/Seo';

export default function Webdev() {
  return (
    <>
    <Header/>
    <Seo
        title="Mobile Responsive Website | Corporate Website designing"
        description="Creative &amp; User friendly Web Designing"
        type="article"
        name="@IBCStudioUAE"
        kwords="web designing, web developing, cheap website design dubai"
      />
<link rel="canonical" href="https://www.ibcstudio.com/webdev"/>

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
                    <h1 className="title">Web Design</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/webdev"> Web Design</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 

       <section className="process-section-2 fade-wrapper pt-60 pb-120">
            <div className="container">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5"> Website Designing & Development </h2>
                   
                </div>
                <div>

               
                <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                    <p> Experience the exceptional web design service at IBC Studio. We understand that your website is the digital face of your business. 
                        Our team of skilled IT experts takes pride in creating web designs that not only meet but exceed your expectations. We go beyond aesthetics, 
                        incorporating the latest technology and graphics to ensure your website is not just visually stunning but also highly engaging.</p>

                        <p> From stunning design to uncompromised technology, our team incorporates the best of their skills to build your website. Stay ahead of the curve 
                            with our commitment to integrating the latest technology into your website. 
                            Whether it’s responsive design, seamless navigation, or advanced functionalities, we ensure your website is at the forefront of innovation.</p>

                        <p>Your business is unique, and so should be your website. Our personalized approach to web design ensures that your website reflects the distinct
                             identity of your business. From color schemes to layout, every element is tailored to suit your brand.  </p>

                        <p> Transform your online presence with us and be ready to elevate your online presence. Partner with IBC Studio for web design that combines technology,
                             graphics, and personalized touches to create a website that leaves a lasting impression. Let us turn your digital vision into reality. </p>
                </div> 
                </div>
            </div>
        </section>

  {/* <div className="container pb-100">
           <div className="row">
            
                        <div className="col-lg-4 pt-30 pb-30">
                                <div  >
                                 <a href="/webdev">   <img class="card-img-top" src={web1} alt="Title" /></a>
                                     
                                </div>

                        </div>
                        <div className="col-lg-4 pt-30 pb-30">
                                 <div >
                                <img class="card-img-top" src={web2} alt="Title" />
                                
                            </div> 
                        </div>
                        <div className="col-lg-4 pt-30 pb-30">
                        <div >
                        <img class="card-img-top" src={web3} alt="Title" />
                         
                        </div>
                    </div>
                    <div className="col-lg-4 pt-30 pb-30">
                        <div >
                        <img class="card-img-top" src={web4} alt="Title" />
                         
                        </div>
                    </div>
                </div>
                 
         <div className="row">
            
            <div className="col-lg-4 pt-30 pb-30">
                    <div  >
                     <a href="/webdev">   <img class="card-img-top" src={web5} alt="Title" /></a>
                         
                    </div>

            </div>
            <div className="col-lg-4 pt-30 pb-30">
                     <div >
                    <img class="card-img-top" src={web6} alt="Title" />
                    
                </div> 
            </div>
            <div className="col-lg-4 pt-30 pb-30">
            <div >
            <img class="card-img-top" src={web7} alt="Title" />
             
            </div>
        </div>
        <div className="col-lg-4 pt-30 pb-30">
            <div >
            <img class="card-img-top" src={web8} alt="Title" />
             
            </div>
        </div>
    </div>
    
</div> */}





     <Footer/>
    </>
  )
}
