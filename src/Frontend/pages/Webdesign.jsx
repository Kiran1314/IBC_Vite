import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import web1 from '../assets/img/images/web-1.webp'
import web2 from '../assets/img/images/web-2.webp'
import web3 from '../assets/img/images/web-3.webp'
import { Seo } from '../Components/Seo';

export default function Webdesign() {
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
<link rel="canonical" href="https://www.ibcstudio.com/webdesign"/>
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
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/webdesign"> Web Design</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 

       <section className="process-section-2 fade-wrapper pt-60 pb-30">
            <div className="container">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5">Web & Software Developing & Interactive Presentation</h2>
                   
                </div>
                <div>

               
                
                    <p style={{textAlign:'center'}}>Our Well Equipped & Creative Team can support all Kind of Web-Designing & Developing, Software Developing & On-Line Tutorial etc</p>

 
 
            
                </div>
            </div>
        </section>
        <div className="container pb-100">
           <div className="row">
            
                        <div className="col-lg-4 pt-30 pb-30">
                                <div  >
                                 <a href="/webdev">   <img class="card-img-top" src={web1} alt="Title" /></a>
                                    <div class="card-body">
                                        <h3 class="card-title" style={{textAlign:'center',padding:10,fontWeight:800,color:'#f37331' }}>Website Developing</h3>
                                        <p class="card-text" >Get your website designed for the best user experience. Our client-focused, customer-centric approach involves creating website 
                                        solutions that deliver tangible business results. IBC Studio's web developers help brands navigate the ever-changing digital landscape.
                                         Our team is equipped with cutting-edge technology to ensure you and your customers have a seamless experience. We offer a variety of website 
                                         design and development services, from creating mobile web development solutions and responsive website designs to building custom e-commerce and
                                          intranet experiences using the latest and proven web technologies. See your business grow with a professional website. Contact us today to get started.</p>
                                    </div>
                                </div>

                        </div>
                        <div className="col-lg-4 pt-30 pb-30">
                                 <div >
                                 <a href='/interactive'> <img class="card-img-top" src={web2} alt="Title" /></a>
                                <div class="card-body">
                                    <h3 class="card-title" style={{textAlign:'center',padding:10,fontWeight:800,color:'#f37331' }}>Web-Based Solutions</h3>
                                    <p class="card-text">Transform your website into a better channel for communication. With a true and seamless experience, 
                                    you can navigate traffic to pages effortlessly. The advantage of a web-based solution is instant accessibility on all types of devices,
                                     including computers, mobile phones, and tablets, without the need for software installation and updates required with an app. 
                                    Want one for your business? Get in touch with us today! We will ensure bespoke solutions meeting your requirements.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-4 pt-30 pb-30">
                        <div >
                        <a href='/gdesigns'> <img class="card-img-top" src={web3} alt="Title" /> </a>
                        <div class="card-body">
                            <h3 class="card-title" style={{textAlign:'center',padding:10,fontWeight:800,color:'#f37331' }}>Graphic Designing</h3>
                            <p class="card-text">IBC Studio offers a full range of graphic design services – we can create your entire brand identity. 
                            Whether it's a website, business, or brand, nothing works without a creative edge. Graphic design is an integral part of any
                             business's effort to establish an online presence for their brand, and this is where IBC Studio comes into existence. With our
                              team, we cater to businesses that want to provide their clients with a unique experience. We are here to help you get aesthetically
                               appealing and bespoke graphic designs for your clients.
                             We reflect your brand and convey your message in the most impactful manner. Reach out to us today and schedule a meeting!</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>

        <Footer/>


    </>
  )
}
