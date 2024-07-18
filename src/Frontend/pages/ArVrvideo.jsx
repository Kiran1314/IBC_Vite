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
    videoId: '3JYKRGzJ4og',
    thumbnail: 'https://img.youtube.com/vi/3JYKRGzJ4og/0.jpg',
  },
  
  {
     id: 2,
     videoId: '43VvUTAoE2o',
     thumbnail: 'https://img.youtube.com/vi/43VvUTAoE2o/0.jpg',
   },
   
 
   {
     id: 3,
     videoId: 'Kwnb64MnGbw',
     thumbnail: 'https://img.youtube.com/vi/Kwnb64MnGbw/0.jpg',
   },

   {
    id: 4,
    videoId: 'aRTLsRoA_CI',
    thumbnail: 'https://img.youtube.com/vi/aRTLsRoA_CI/0.jpg',
  },

  

]



export default function ArVrvideo() {

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
        title="Best 360 &amp; VR Video Production in Dubai, UAE"
        description="IBC Studio, (Innovative Business Communication) is an Audio-Video Production house as well as designing &amp; multi-media solutions provider, based in Dubai, UAE, IBC Studio, specialized in Video Production, Audio Recording, Web-Design, Corporate Video Presentation, Training Video, Time Lapse Video, Digital still photography and Digital Prints of poster banners and window graphics etc"
        type="article"
        name="@IBCStudioUAE"
        kwords="IVR recording, media companies in dubai, professional photography, voice over recording, wedding photography, voice recording, video production studio, recording studio, videographer dubai, audio recording, video production company dubai, digital printing, product photography, video shoot, recording studio in dubai, Audio &amp; video recording studio in dubai, Audio &amp; video production house in dubai, web development and web designing in dubai, designing, production houses in dubai, corporate video production dubai"
      />
      <link rel="canonical" href="https://www.ibcstudio.com/arVrvideo"/>



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
                    <h1 className="title">AR, VR & 360&deg; VIRTUAL VIDEO</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/ArVrvideo"> AR, VR & 360&deg; VIRTUAL VIDEO</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 


      


       <section className="process-section-2 fade-wrapper pt-60 pb-10">
           
       
        <h2 data-text-animation="fade-in" data-duration="1.5" align="center">360&deg; Property Virtual Tour - Touch Interactive</h2>
        <div className="pt-30" align="center">
        <iframe title="myFrame" width="800" height="550" style={{width: '600', height: '450',border: 'none',maxWidth: '100%'}} frameborder="0" allowfullscreen allow="xr-spatial-tracking; gyroscope; accelerometer" src="https://kuula.co/share/collection/7Yjvm?fs=1&vr=1&zoom=1&sd=1&initload=0&autopalt=1&thumbs=1&margin=10&alpha=0.60&card=1&info=1&logo=-1"></iframe>
        </div>


            <section className='pb-40'> 
                    <VideoGallery videos={paginatedVideos} onOpenModal={handleOpenModal} />
                      {currentVideo && <VideoModal video={currentVideo} onCloseModal={handleCloseModal} />}
                      <Pagination
                        pageCount={Math.ceil(videos.length / videosPerPage)}
                        onPageChange={handlePageChange}
                      />
 
	    </section>

      <div className="container pb-90">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5"> AUGMENTED REALITY, VIRTUAL REALITY <br/> & 360&deg; VIRTUAL VIDEO </h2>
                   
                </div>
                <div>

               
                <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                        <p> In today's dynamic business landscape, the power of immersive technologies such as Augmented Reality (AR) and Virtual Reality (VR) 
                          is reshaping the way businesses connect with their audience. Our 360° AR/VR video services at IBC Studio bring your 
                          content to life, creating an experience that feels incredibly real, even when physically distant from the actual location. </p>

                        <p>Make your audience feel the different space or time, allowing them to explore and engage as if they were physically present. Our AR/VR videos make 
                          this a reality. By combining cutting-edge technology with creative storytelling, we immerse viewers in a captivating experience that transcends 
                          traditional video boundaries. </p>

                        <p>How AR/VR Videos Drive Business Growth: Enhanced Marketing: Businesses can showcase their products, services, or locations in a way that traditional
                           media cannot match. This unique form of presentation captures attention and creates a lasting impression. </p>

                        <p>Virtual Tours: Ideal for real estate, hospitality, or event spaces, our 360° AR/VR videos allow potential clients to explore properties or venues 
                          remotely, fostering a sense of connection and increasing the likelihood of conversion. </p>

                        <p>Training and Simulation: For industries requiring specialized training, our AR/VR videos provide realistic simulations. This ensures a safe and effective
                           training environment, reducing the need for physical presence. </p>

                        <p>At IBC Studio, we are committed to pushing the boundaries of visual storytelling. Our 360° AR/VR video services enable businesses to create experiences 
                          that resonate with audiences on a deeper level, fostering connection and growth. </p>


                        <p>Visit IBC Studio, explore how our services can transform your business narrative into an immersive journey. Elevate your brand, engage your audience, and 
                          stay ahead in the digital realm with IBC Studio's innovative AR/VR video solutions. </p>



                </div> 
               
                </div>
                
            </div>
        </section>

        

      <Footer/>   


    </>
  )
}
