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
    videoId: 'YH4JeCUJ71o',
    thumbnail: 'https://img.youtube.com/vi/YH4JeCUJ71o/0.jpg',
  },
  {
    id: 2,
    videoId: '-aPj_zk-Z3A',
    thumbnail: 'https://img.youtube.com/vi/-aPj_zk-Z3A/0.jpg',
  },
  {
    id: 3,
    videoId: 'zXATWpEPMR8',
    thumbnail: 'https://img.youtube.com/vi/zXATWpEPMR8/0.jpg',
  },
  {
    id: 4,
    videoId: 'jDqpLjkpjSE',
    thumbnail: 'https://img.youtube.com/vi/jDqpLjkpjSE/0.jpg',
  },
  {
    id: 5,
    videoId: 'zoesWAlB9as',
    thumbnail: 'https://img.youtube.com/vi/zoesWAlB9as/0.jpg',
  },
  {
    id: 6,
    videoId: 'hato_gAql5E',
    thumbnail: 'https://img.youtube.com/vi/hato_gAql5E/0.jpg',
  },
  {
    id: 7,
    videoId: 'ORqROH8rsJ4',
    thumbnail: 'https://img.youtube.com/vi/ORqROH8rsJ4/0.jpg',
  },
  {
    id: 8,
    videoId: 'F_XOl5dmdE8',
    thumbnail: 'https://img.youtube.com/vi/F_XOl5dmdE8/0.jpg',
  },
  {
    id: 9,
    videoId: 'QSmXDvSTM0E',
    thumbnail: 'https://img.youtube.com/vi/QSmXDvSTM0E/0.jpg',
  },
  {
    id: 10,
    videoId: 'Xsym-oTEwEw',
    thumbnail: 'https://img.youtube.com/vi/Xsym-oTEwEw/0.jpg',
  },
  {
    id: 12,
    videoId: 'Izv10G1NMmk',
    thumbnail: 'https://img.youtube.com/vi/Izv10G1NMmk/0.jpg',
  },
  {
    id: 13,
    videoId: 'R3hTAjX4ffg',
    thumbnail: 'https://img.youtube.com/vi/R3hTAjX4ffg/0.jpg',
  },
  {
    id: 14,
    videoId: 'FuVZ-f3BV1g',
    thumbnail: 'https://img.youtube.com/vi/FuVZ-f3BV1g/0.jpg',
  },
  {
    id: 15,
    videoId: 'LQZTw2qBOQw',
    thumbnail: 'https://img.youtube.com/vi/LQZTw2qBOQw/0.jpg',
  },
  {
    id: 15,
    videoId: 'cwX0oWz06u4',
    thumbnail: 'https://img.youtube.com/vi/cwX0oWz06u4/0.jpg',
  },
  {
    id: 16,
    videoId: 'z54WbCZ1XIw',
    thumbnail: 'https://img.youtube.com/vi/z54WbCZ1XIw/0.jpg',
  },
  // Add more video objects here
];


export default function Corporatevid() {

  
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
        title="Corporate Video Production Dubai | Corporate Brand Videos UAE"
        description="Elevate your brand with professional corporate video production in Dubai. IBC Studio crafts impactful brand videos in the UAE. Connect with us for compelling visual storytelling."
        type="article"
        name="@IBCStudioUAE"
        kwords="Corporate Video Production Dubai, best audio recording studios, animation studios in Dubai, film production in Dubai, special effects video, video production companies dubai, production house in Dubai, corporate video production, 360 virtual videos studio in dubai, 3d animation studios in dubai, audio visual companies in dubai, animation companies in dubai, post production dubai, timelapse video"
      />
      <link rel="canonical" href="https://www.ibcstudio.com/corporate"/>





        {/*page-header */} 

        <section className="page-header" data-background={bgimg}>
            <div className="overlay"></div>
            <div className="shapes">
                <div className="shape shape-1"><img src={phs1} alt="shape"/></div>
                <div className="shape shape-2"><img src={phs2} alt="shape"/></div>
                <div className="shape shape-3"><img src={phs3} alt="shape"/></div>
                
            </div>
            <div className="container ">
                <div className="page-header-content text-center">
                    <h1 className="title" style={{color:'orange'}}>Corporate Videos</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/corporate"> Corporate Videos</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 

       <section className="process-section-2 fade-wrapper pt-10 pb-120">
          
               
                <div>
                <section> 
                    <VideoGallery videos={paginatedVideos} onOpenModal={handleOpenModal} />
                      {currentVideo && <VideoModal video={currentVideo} onCloseModal={handleCloseModal} />}
                      <Pagination
                        pageCount={Math.ceil(videos.length / videosPerPage)}
                        onPageChange={handlePageChange}
                      />
 
	</section>         
  <div className="container pt-60">
  <div className="section-heading text-center">
                     
                     <h2  data-text-animation="fade-in" data-duration="1.5">  Corporate Video </h2>  
                    
                 </div>
                <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                        <p> Welcome to IBC Studio, your premier branding solution for Corporate & MNC needs. We specialize in crafting compelling corporate video productions, dynamic TV commercials,
                             captivating animated videos, impactful testimonial videos, and much more. Whatever your vision, we bring it to life
                             with state-of-the-art technology and equipment, ensuring your brand shines in high-definition glory, captivating your target audience across the globe.  </p>

                        <p>Our commitment to excellence goes beyond mere delivery—we thrive on exceeding your expectations, tailoring our approach to meet your unique business requirements.
                             Every video we produce is meticulously crafted, infusing it with charm and professionalism that elevates your brand message. Our inventive ideas make us a preferred 
                             choice in Dubai, while our 360&deg; video strategy ensures your brand is showcased from every conceivable angle, providing an immersive experience for your audience. </p>
                        
                        <p>At IBC Studio, we believe in the power of storytelling. We don't just create videos; we weave narratives that resonate with your viewers, leaving a lasting impression.
                             Corporate business videos offer a distinct perspective, and we specialize in bridging the gap between your brand and your customers, whether you're a burgeoning startup
                              or a multinational corporation. Through the art of video production, we communicate your ideas and goals effectively to your audience, leveraging our highly efficient 
                              and experienced team to bring your vision to fruition.   </p>


                        <p> Elevate your brand's narrative with IBC Studio. Let us help you create engaging visuals that captivate your audience, embodying the essence of your story and leaving an 
                            indelible mark on your viewers' minds. </p>
 
                         
                </div> 
                </div>

               
            </div>
       

          

         
</section>







<Footer/>

    </>
  )
}
