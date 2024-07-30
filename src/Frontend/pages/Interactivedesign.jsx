import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import web1 from '../assets/img/images/Elearning.webp'
import web2 from '../assets/img/images/gmdc.webp'
import web3 from '../assets/img/images/bdc.webp'
import web4 from '../assets/img/images/EDC.webp'
import VideoGallery from '../Components/video_components/VideoGallery';
import VideoModal from '../Components/video_components/VideoModal';
import Pagination from '../Components/video_components/Pagination';
import { Seo } from '../Components/Seo';


const videos = [
    {
      id: 1,
      videoId: 'vENU9kXnZRA',
      thumbnail: 'https://img.youtube.com/vi/vENU9kXnZRA/0.jpg',
    },
    {
      id: 2,
      videoId: 'MyI7wCHAnV4',
      thumbnail: 'https://img.youtube.com/vi/MyI7wCHAnV4/0.jpg',
    },
    {
      id: 3,
      videoId: 'nPsUy6Coa3E',
      thumbnail: 'https://img.youtube.com/vi/nPsUy6Coa3E/0.jpg',
    },
    {
      id: 4,
      videoId: 'P8R2fYMU1ug',
      thumbnail: 'https://img.youtube.com/vi/P8R2fYMU1ug/0.jpg',
    },

]


export default function Interactivedesign() {

    
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 12;

  const handleOpenModal = (video) => {
    setCurrentVideo(video);
  };

  const handleCloseModal = () => {
    setCurrentVideo(null);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * videosPerPage;
  const paginatedVideos = videos.slice(offset, offset + videosPerPage);




  return (
    <>
<Header/>
      
      <Seo
        title="E-Commerce website in Dubai | Corporate &amp; E-Learning Websites"
        description="IBC Studio, (Innovative Business Communication) is an Audio-Video Production house as well as designing &amp; multi-media solutions provider, based in Dubai, UAE, IBC Studio, specialized in Video Production, Audio Recording, Web-Design, Corporate Video Presentation, Training Video, Time Lapse Video, Digital still photography and Digital Prints of poster banners and window graphics etc"
        type="article"
        name="@IBCStudioUAE"
        kwords="IVR recording, media companies in dubai, professional photography, voice over recording, wedding photography, voice recording, video production studio, recording studio, videographer dubai, audio recording, video production company dubai, digital printing, product photography, video shoot, recording studio in dubai, Audio &amp; video recording studio in dubai, Audio &amp; video production house in dubai, web development and web designing in dubai, designing, production houses in dubai, corporate video production dubai"
      />
      <link rel="canonical" href="https://www.ibcstudio.com/interactive"/>



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
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/interative"> E-Learning Solutions </a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 
       <div className="section-heading text-center pt-0 pb-0">
                     
                     <h2  data-text-animation="fade-in" data-duration="1.5">  </h2>
                    
                 </div>
       <section className="process-section-2 fade-wrapper  pb-10">
            <div className="container">
            <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                    <p > IBC Studio believes in delivering the uncompromised service. 
                         We deliver professional services using the state-of-the-art technique.
                         Our Interactive Design services are crafted to engage your audience, leaving a lasting impression. 
                        We go beyond aesthetics, focusing on creating user-friendly and dynamic designs that captivate and convert.</p>

                        <p data-text-animation="fade-in" data-duration="1.6"> Your brand is unique, and so should be its representation. Our team adds a touch of bespoke color shades tailored to reflect the essence of your business.
                             Moreover, adding content to educate people about your brand and business.
                             We focus on creating designs that not only catch the eye but also resonate with your brand identity. </p>
 
                </div> 
                 
                <section className="process-section-2 fade-wrapper  pt-20">
            <div className="container">
             <div className="section-heading">
                     
                     <h2  data-text-animation="fade-in" data-duration="1.5">E-Learning Websites & Applications </h2><br/>
                     <p  >Our team will create an E-learning Website & Application with interactive design integrated with your website's color palette. Whether you're 
                        looking to refresh your current design or build a new one from scratch, our team ensures that every interactive element complements your website's 
                        overall aesthetic. From engaging buttons to interactive graphics, we pay attention to every detail to enhance the user experience.</p>
                 </div>
             </div>
             </section>
                <div className="container  ">
                <div className="row">
            
                        <div className="col-lg-3 pt-30 ">
                                <div  >
                                 <a href="/webdev">   <img loading='lazy' class="card-img-top" src={web1} alt="Title" /></a>
                                     
                                </div>

                        </div>
                        <div className="col-lg-3 pt-30 ">
                                 <div >
                                <img loading='lazy' class="card-img-top" src={web2} alt="Title" />
                                
                            </div> 
                        </div>
                        <div className="col-lg-3 pt-30 ">
                        <div >
                        <img loading='lazy' class="card-img-top" src={web3} alt="Title" />
                         
                        </div>
                    </div>
                    <div className="col-lg-3 pt-30  ">
                        <div >
                        <img loading='lazy' class="card-img-top" src={web4} alt="Title" />
                         
                        </div>
                    </div>
                </div>
                </div>



               
                 
             
            </div>
            
        </section>
        <section className="process-section-2 fade-wrapper  pt-50 pb-120">
            <div className="container">
             <div className="section-heading">
                     
                     <h2  data-text-animation="fade-in" data-duration="1.5"> Content Development </h2><br/>
                     <p  >With a holistic approach we also cater clients with content. Our team develops content for your e-learning website and application. 
                        We ensure everything is as per you. Are you ready to take your online presence to the next level? Partner with IBC Studio for Interactive
                         Design that goes beyond the ordinary. Let us transform your digital space into an interactive masterpiece that captivates your audience 
                         and elevates your brand.</p>
                 </div>
                 <section> 
                    <VideoGallery videos={paginatedVideos} onOpenModal={handleOpenModal} />
                      {currentVideo && <VideoModal video={currentVideo} onCloseModal={handleCloseModal} />}
                      <Pagination
                        pageCount={Math.ceil(videos.length / videosPerPage)}
                        onPageChange={handlePageChange}
                      />
 
	</section>  
            
             </div>
             </section>
             
<Footer/>























</>
  )
}
