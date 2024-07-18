import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import VideoGallery from '../Components/video_components/VideoGallery';
import VideoModal from '../Components/video_components/VideoModal';
import Pagination from '../Components/video_components/Pagination';
import { Seo } from '../Components/Seo';



const videos = [
    {
      id: 1,
      videoId: 'YFROAqsGJ3w',
      thumbnail: 'https://img.youtube.com/vi/YFROAqsGJ3w/0.jpg',
    },
    {
      id: 2,
      videoId: 'TSXUoahwhoI',
      thumbnail: 'https://img.youtube.com/vi/TSXUoahwhoI/0.jpg',
    },
    {
      id: 3,
      videoId: 'rjqhEsLl2UY',
      thumbnail: 'https://img.youtube.com/vi/rjqhEsLl2UY/0.jpg',
    },
    {
      id: 4,
      videoId: 'QJp_aCNyOQY',
      thumbnail: 'https://img.youtube.com/vi/QJp_aCNyOQY/0.jpg',
    },
    {
      id: 5,
      videoId: 'X5enP_OvkzY',
      thumbnail: 'https://img.youtube.com/vi/X5enP_OvkzY/0.jpg',
    },
    {
        id: 6,
        videoId: '88QpIU3_g6E',
        thumbnail: 'https://img.youtube.com/vi/88QpIU3_g6E/0.jpg',
      },
      {
        id: 7,
        videoId: 'n5dwAoxRRdU',
        thumbnail: 'https://img.youtube.com/vi/n5dwAoxRRdU/0.jpg',
      },  
      {
        id: 8,
        videoId: 'kioXGu3O6Jk',
        thumbnail: 'https://img.youtube.com/vi/kioXGu3O6Jk/0.jpg',
      },
      {
        id: 9,
        videoId: 'MyI7wCHAnV4',
        thumbnail: 'https://img.youtube.com/vi/MyI7wCHAnV4/0.jpg',
      },
]
 
export default function DubbingTut() {

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
        title="Best Dubbing Recording Studio in Dubai | Professional AV Dubbing studio"
        description="IBC Studio is best recording studio in Dubai, UAE. Whether you want to produce Dubbing on videos, corporate videos, testimonials, TV commercials, or animations, the professional video production services provided at IBC Studio will help you develop video of utmost excellence. To hire services, call +971 4 5705 785!"
        type="article"
        name="@IBCStudioUAE"
        kwords="corporate video production, 360 virtual videos studio in dubai, 3d animation studios in dubai, audio visual companies in dubai, animation companies in dubai, post production dubai, timelapse video"
      />
      <link rel="canonical" href="https://www.ibcstudio.com/dubbingtut"/>
          
          
          
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
                    <h1 className="title">Dubbing & Tutorials</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/dubbingtut"> Dubbing & Tutorials</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 


       <section className="process-section-2 fade-wrapper pt-60 pb-10">
            <div className="container">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5"> Dubbing & Tutorials </h2>
                   
                </div>
                <div>
  <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                        <p>At IBC Studio, we understand the importance of delivering your message effectively to your target audience. That's why we're excited to introduce our
                             comprehensive Dubbing Tutorial section, designed to assist businesses in mastering the art of effective communication through voiceover and dubbing.  </p>

                        <p>Whether you're a content creator, marketer, filmmaker, or business owner, our Dubbing Tutorial videos caters to individuals and organizations aiming 
                            to enhance their communication strategies through effective dubbing techniques. </p>

                        <p>At IBC Studio, we're passionate about empowering businesses to communicate effectively with their audience. Our Dubbing Tutorial section is your gateway 
                            to mastering the art of dubbing and ensuring that your message transcends language barriers. </p>

                        <p>Explore our tutorials, gain valuable insights, and embark on a journey towards creating impactful and resonant content through the art of dubbing.<br/>

                            Ready to make your voice heard? Dive into the world of dubbing with IBC Studio!   </p>
                </div> 
                </div>
            </div>
        </section>
  
        <section className='pb-40'> 
                    <VideoGallery videos={paginatedVideos} onOpenModal={handleOpenModal} />
                      {currentVideo && <VideoModal video={currentVideo} onCloseModal={handleCloseModal} />}
                      <Pagination
                        pageCount={Math.ceil(videos.length / videosPerPage)}
                        onPageChange={handlePageChange}
                      />
 
	    </section>

    <Footer/>
    </>
  )
}
