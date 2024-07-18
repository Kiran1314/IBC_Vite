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
       videoId: 'PPJaQl6KMKw',
       thumbnail: 'https://img.youtube.com/vi/PPJaQl6KMKw/0.jpg',
     },
     
   
     {
       id: 2,
       videoId: 'nnEQqwawMV8',
       thumbnail: 'https://img.youtube.com/vi/nnEQqwawMV8/0.jpg',
     },
  
     {
      id: 3,
      videoId: 'AogShMy0I90',
      thumbnail: 'https://img.youtube.com/vi/AogShMy0I90/0.jpg',
    },
    {
        id: 4,
        videoId: 'M8QjmfbGnW8',
        thumbnail: 'https://img.youtube.com/vi/M8QjmfbGnW8/0.jpg',
      },
      {
        id: 5,
        videoId: 'LhFD5ksDn3U',
        thumbnail: 'https://img.youtube.com/vi/LhFD5ksDn3U/0.jpg',
      },
      {
        id: 6,
        videoId: 'KdoIKqDpXW4',
        thumbnail: 'https://img.youtube.com/vi/KdoIKqDpXW4/0.jpg',
      },
      {
        id: 7,
        videoId: 'mg9JYkL0wGY',
        thumbnail: 'https://img.youtube.com/vi/mg9JYkL0wGY/0.jpg',
      },
      {
        id: 8,
        videoId: '6XosRX1XJnY',
        thumbnail: 'https://img.youtube.com/vi/6XosRX1XJnY/0.jpg',
      },
      {
        id: 9,
        videoId: 'Y9Suk5XJv-o',
        thumbnail: 'https://img.youtube.com/vi/Y9Suk5XJv-o/0.jpg',
      },
      {
        id: 10,
        videoId: 'fnRbGpBA_c0',
        thumbnail: 'https://img.youtube.com/vi/fnRbGpBA_c0/0.jpg',
      },
  
  ]

export default function Animation() {

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
        title="IBC Studio | Audio &amp; Video Production House, Dubai - UAE"
        description="IBC Studio is one of the Top Audio and Video Production Companies in Dubai offering animations, corporate videos and dubbing services."
        type="article"
        name="@IBCStudioUAE"
        kwords="corporate video production, 360 virtual videos studio in dubai, 3d animation studios in dubai, audio visual companies in dubai, animation companies in dubai, post production dubai, timelapse video"
      />

       <link rel="canonical" href="https://www.ibcstudio.com/animation/"/>



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
                    <h1 className="title">Animation</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/animation"> Animation</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 

       <section className="process-section-2 fade-wrapper pt-60 pb-10">
            <div className="container">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5"> Animation </h2>
                   
                </div>
                <div>

               
                <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                        <p> Elevate your business with the magic of storytelling through our captivating animation videos. At IBC Studios, we specialize in crafting unique narratives for your 
                            products and services, presenting them in the coolest and most engaging manner to reach your customers.</p>

                        <p> Immerse your audience in an unforgettable experience by transforming your business narrative with our expertly crafted animation videos. Whether you aim to introduce 
                            your brand, simplify complex services, or showcase products, IBC Studios possesses the creative prowess to bring your ideas to life with finesse. </p>

                        <p>Our team of skilled animators combines expertise and craftsmanship to ensure every frame is meticulously designed, delivering your message with precision. Each frame is
                             a work of art, conveying a unique brand message that resonates with your audience. Our animation videos go beyond mere visuals; they are strategically crafted to leave
                              a lasting impression on your target audience.  </p>

                        <p>IBC Studios is not just a service provider; we are your dedicated partner in business growth. We specialize in delivering animated videos that effectively communicate 
                            the essence of your business services and products. From the initial conceptualization to the final execution, our team is committed to creating compelling content 
                            that not only tells your story but drives tangible results. </p>

                        <p>Experience the power of personalized storytelling animation with IBC Studios – where every frame is a masterpiece, and every video is a strategic tool for your business 
                            success. Contact us today to bring your ideas to life and leave an indelible mark on your audience. </p>

                        


                </div> 
               
                </div>
                <section className='pb-40'> 
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
