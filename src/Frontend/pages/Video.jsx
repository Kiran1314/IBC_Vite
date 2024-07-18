import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import { Seo } from '../Components/Seo';

import VideoGallery from '../Components/video_components/VserviceGallery';




const videos = [
  { id: 1, videoSrc: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FServiceVideoCat%2Fservice_video1~1.webm?alt=media&token=7aea5b07-ba7d-4f08-8ab9-98c700c40ce8', caption: 'Corporate Video', link: '/corporate' },
  { id: 2, videoSrc: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FServiceVideoCat%2Fservice_video2~1.webm?alt=media&token=41de09b8-a3c4-418b-8b9e-081db8582c42', caption: 'Timelapse Video', link: '/aerialtmlps' },
  { id: 3, videoSrc: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FServiceVideoCat%2Fservice_video3~1.webm?alt=media&token=4bff0fad-6dde-4064-babf-fe740bfc64d6', caption: 'Dubbing & Tutorial', link: '/dubbingtut' },
  { id: 4, videoSrc: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FServiceVideoCat%2Fservice_video4~1.webm?alt=media&token=3a923004-7376-492d-afc3-d778461cc839', caption: 'Event & Exhibition', link: '/eventsvideo' },
  { id: 5, videoSrc: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FServiceVideoCat%2Fservice_video5~1.webm?alt=media&token=3d2970e1-8808-40e2-80bc-060efe63c88f', caption: 'TVC & Social Media', link: '/tvcsocial' },
  { id: 6, videoSrc: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FServiceVideoCat%2Fservice_video6~1.webm?alt=media&token=0157423c-ce84-4b2e-ab70-efb4e5119016', caption: '360 Vitual Tour', link: '/arVrvideo' },
  { id: 7, videoSrc: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FServiceVideoCat%2Fservice_video7~1.webm?alt=media&token=16d45e13-5de6-4aeb-881a-3c8c8fbd8ace', caption: 'Aerial Shoot', link: '/aerialtmlps' },
  { id: 8, videoSrc: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FServiceVideoCat%2Fservice_video8~1.webm?alt=media&token=8abb52ab-34f0-4aea-a2e9-20ec6e81161d', caption: 'Animation', link: '/animation' },
];

export default function Video() {

 
   
  return (
    <>
        <Header/>
        <Seo
        title="Video &amp; Post Production Services | Video Production Company Dubai"
        description="Need corporate videos, testimonials, TV commercials, or animations in Dubai? IBC Studio delivers! Our professional video production services help you tell your story, captivate audiences, &amp; achieve results."
        type="article"
        name="@IBCStudioUAE"
        kwords="Video Production Services Dubai, Best Video Production Company Dubai, corporate video production, 360 virtual videos studio in dubai, 3d animation studios in dubai, audio visual companies in dubai, animation companies in dubai, post production dubai, timelapse video"
      />
  <link rel="canonical" href="https://www.ibcstudio.com/video"/>
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
                    <h1 className="title">Video Production</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/video"> Video Production</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 

       <section className="process-section-2 fade-wrapper pt-60 pb-10">
            <div className="container">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5"> Our Video Production Services </h2>
                   
                </div>
                </div>
         </section>       


 

        <section>
    <div className='row'>
		<div  className='col-xs-12'>

    <VideoGallery videos={videos} />
	 	</div>				</div>						 
	</section>




       
       <section className="process-section-2 fade-wrapper pt-60 pb-120">
            <div className="container" style={{padding:'5'}}>
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5">Professional Video Production Services in Dubai</h2>
                   
                </div>
                <div>

               
                <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                    <p style={{color:'#f37331'}}><b>IBC Studio: The Best in Video Production in Dubai</b></p><br/>
                    <p> IBC Studio is one of the premier full-service media production companies that offer high-quality professional video production services in Dubai, UAE.
                     We offer specialized video production services in Dubai like corporate video production, TV commercial, high-definition animated videos, testimonial videos,
                      and more. We have a wide range of clients across a diverse spectrum of businesses and industries in the UAE. Our in-house video engineers and technicians
                      have outstanding expertise in the field of video production. All our clients to date have been happy with our professional video production services.
                     
                    </p>
                    
                    <p style={{color:'#f37331'}}><b>Premium Video Production Services Provided by IBC Studio</b></p><br/>
                    <p> IBC studio is fortunate to have a wonderful team of video and audio technicians who make each project a great success. 
                        Our dedicated videographers know how to approach each project of every scale, detail, and genre, from single-camera studio 
                        interviews to multi-camera set-ups and commercial event shoots, and offer quality services in every aspect. Whether you desire
                        to create a highly professional digital marketing video to launch a new product, promote your image, or communicate your vision,
                        or simply produce a video to share your story, our professional video production technicians in Dubai, UAE will help you in every manner.</p>

                   
                    <p> Our services are primarily focused on: </p>

                     <p>• Corporate video<br/>
                        • Company shows & Customer Testimonial Videos<br/>
                        • Training videos that offer visual demonstrations<br/>
                        • Time-Lapse Video </p>


                        <p style={{color:'#f37331'}}><b>Post-Production at IBC Studio</b></p><br/>
                        <p>We at IBC Studio are proud to work with some of the best post-production professionals in Dubai. Our video production engineers,
                             photographers, event videographers, creative directors, editors, artists, and animators all work dedicatedly to create outstanding 
                             deliverables. We are extremely passionate about each of our assignments and offer all kinds of post-production services that include
                             video editing, visual effects, sound design, and color correction. We use all the latest video production software tools in Dubai like 
                             Adobe Premiere Pro, Final Cut Pro, Maya, Nuke, After Effects, etc. We are committed to providing the best and
                             the highest-quality videos while providing a fresh approach and concept to capturing events like corporate events, etc.</p>
                </div> 
                </div>
            </div>
        </section>



        <Footer/>




    </>
  )
}
