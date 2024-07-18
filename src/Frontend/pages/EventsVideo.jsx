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


const videos = [
   
    {
      id: 2,
      videoId: 'QiiZJ5PxLZo',
      thumbnail: 'https://img.youtube.com/vi/QiiZJ5PxLZo/0.jpg',
    },
    {
      id: 3,
      videoId: 'APUeJ4XpVEs',
      thumbnail: 'https://img.youtube.com/vi/APUeJ4XpVEs/0.jpg',
    },
    {
      id: 4,
      videoId: '53c0Ncye16I',
      thumbnail: 'https://img.youtube.com/vi/53c0Ncye16I/0.jpg',
    },
    {
      id: 5,
      videoId: '8br4ASTI7Mk',
      thumbnail: 'https://img.youtube.com/vi/8br4ASTI7Mk/0.jpg',
    },
    
      {
        id: 7,
        videoId: 'EjGBkWj7HQE',
        thumbnail: 'https://img.youtube.com/vi/EjGBkWj7HQE/0.jpg',
      },  
      {
        id: 8,
        videoId: 'k3FEhNUGjKc',
        thumbnail: 'https://img.youtube.com/vi/k3FEhNUGjKc/0.jpg',
      },
      
    
    {
        id: 11,
        videoId: 'yiqLE3gXhYA',
        thumbnail: 'https://img.youtube.com/vi/yiqLE3gXhYA/0.jpg',
      },
      {
        id: 12,
        videoId: 'FnJm-z58_Tg',
        thumbnail: 'https://img.youtube.com/vi/FnJm-z58_Tg/0.jpg',
      },
      {
        id: 13,
        videoId: 'IBVzs09Ldmc',
        thumbnail: 'https://img.youtube.com/vi/IBVzs09Ldmc/0.jpg',
      },
      {
        id: 14,
        videoId: 'mhWpgDOMymQ',
        thumbnail: 'https://img.youtube.com/vi/mhWpgDOMymQ/0.jpg',
      },
      {
        id: 15,
        videoId: 'ONGN9eTNUzs',
        thumbnail: 'https://img.youtube.com/vi/ONGN9eTNUzs/0.jpg',
      },
      {
        id: 16,
        videoId: 'kH3JBqltWes',
        thumbnail: 'https://img.youtube.com/vi/kH3JBqltWes/0.jpg',
      },
      {
        id: 1,
        videoId: 'FinVrtsZ-4w',
        thumbnail: 'https://img.youtube.com/vi/FinVrtsZ-4w/0.jpg',
      },
      {
        id: 6,
        videoId: '2Smf_iy0r34',
        thumbnail: 'https://img.youtube.com/vi/2Smf_iy0r34/0.jpg',
      },
      {
        id: 9,
        videoId: 'FwuICYqSewg',
        thumbnail: 'https://img.youtube.com/vi/FwuICYqSewg/0.jpg',
      },
      {
        id: 10,
        videoId: 'AsdHB3Wx2LM',
        thumbnail: 'https://img.youtube.com/vi/AsdHB3Wx2LM/0.jpg',
      },
       
]





export default function EventsVideo() {

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
                    <h1 className="title">Events</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/eventsvideo"> Events Coverage</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 

       <section className="process-section-2 fade-wrapper pt-60 pb-0">
            
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5"> Events Video Coverage </h2>
                   
                </div>
                </section> 
       <section className="process-section-2 fade-wrapper pt-40 pb-30">
       <VideoGallery videos={paginatedVideos} onOpenModal={handleOpenModal} />
                      {currentVideo && <VideoModal video={currentVideo} onCloseModal={handleCloseModal} />}
                      <br/>
                      <Pagination
                        pageCount={Math.ceil(videos.length / videosPerPage)}
                        onPageChange={handlePageChange}
                      />
 
        </section>
  
        

    <Footer/>
    </>
  )
}
