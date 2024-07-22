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
      videoId: 'z-9rWpjczfI',
      thumbnail: 'https://img.youtube.com/vi/z-9rWpjczfI/0.jpg',
    },
    {
      id: 2,
      videoId: 'cSrsOeWn5I4',
      thumbnail: 'https://img.youtube.com/vi/cSrsOeWn5I4/0.jpg',
    },
    {
      id: 3,
      videoId: 'i_7LIl5D0Ws',
      thumbnail: 'https://img.youtube.com/vi/i_7LIl5D0Ws/0.jpg',
    },
    {
      id: 4,
      videoId: '9MwZ-T4qlco',
      thumbnail: 'https://img.youtube.com/vi/9MwZ-T4qlco/0.jpg',
    },
    {
      id: 5,
      videoId: '4MXmSitf_9Y',
      thumbnail: 'https://img.youtube.com/vi/4MXmSitf_9Y/0.jpg',
    },
    
]
  

 const videos2 = [
  {
    id: 1,
    videoId: '1ej2VRVSe1Y',
    thumbnail: 'https://img.youtube.com/vi/1ej2VRVSe1Y/0.jpg',
  },

  {
    id: 2,
    videoId: 'U1u2pXIC4ho',
    thumbnail: 'https://img.youtube.com/vi/U1u2pXIC4ho/0.jpg',
  },
  
   
    {
      id: 3,
      videoId: 'yGRMVGM763E',
      thumbnail: 'https://img.youtube.com/vi/yGRMVGM763E/0.jpg',
    },
    {
      id: 4,
      videoId: 'UtHhr5yNJRo',
      thumbnail: 'https://img.youtube.com/vi/UtHhr5yNJRo/0.jpg',
    },
    {
      id: 5,
      videoId: 'nlAIVCCPnY8',
      thumbnail: 'https://img.youtube.com/vi/nlAIVCCPnY8/0.jpg',
    },
    {
      id: 6,
      videoId: 'sj4z4O1Vu5o',
      thumbnail: 'https://img.youtube.com/vi/sj4z4O1Vu5o/0.jpg',
    },
   
    {
      id: 7,
      videoId: 'sGKjKwUDeKo',
      thumbnail: 'https://img.youtube.com/vi/sGKjKwUDeKo/0.jpg',
    },
    {
      id: 8,
      videoId: 'IfW0mzmnpt4',
      thumbnail: 'https://img.youtube.com/vi/IfW0mzmnpt4/0.jpg',
    },
    {
      id: 9,
      videoId: '6eFpoT7_yiI',
      thumbnail: 'https://img.youtube.com/vi/6eFpoT7_yiI/0.jpg',
    },
    {
      id: 10,
      videoId: '4tL8Tjqc37w',
      thumbnail: 'https://img.youtube.com/vi/4tL8Tjqc37w/0.jpg',
    },
     
    // Add more video objects here
  ];  
  

export default function Aerialtmlps() {

 
    const [currentVideo, setCurrentVideo] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const videosPerPage = 3;
  
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
    const paginatedVideos2 = videos2.slice(offset, offset + videosPerPage);

  return (
     <>
     <Header/>
     <Seo
        title="Timelapse Video Shoot | Aerial Video Production | Aerial Shoot UAE"
        description="Transform your narrative with captivating timelapse and aerial videos in Dubai. IBC Studio crafts visuals that transcend, capturing the essence from stunning heights."
        type="article"
        name="@IBCStudioUAE"
        kwords="ivr recording, ivr recording uae, top media production houses in dubai, professional photography, professional photographer, voice over recording, voice Recording, voice over dubai, voice record studio, wedding photography, voice recording, video studio dubai, video production company uae, recording studio, videographer dubai, audio recording, audio recording studio, video production company dubai, digital printing, product photography, video shoot, audio recording studio, Audio recording studios, Audio &amp; video production companies, web developing, web designing, post production dubai, corporate video production dubai, event photographer , event photography, event photography in dubai, nearby recording studios, dubai recording studio, Professional photography, good recording studio, sound record studio, designing, industrial photography, photography studio , products photography, photo studio in dubai, photo studio near me, photograph, dubai photography, uae photography, lifestyle photography, modeling photography, video shooting , timelapse, photography company in dubai, commercial, cheap website design dubai, 4k video, video services, post production, ibcdubai , corpprate video , commercial video production, studios in dubai, , studios in uae, dubbing, ivr recording dubai, telephone hold, telephone hold message, sound record studio"
      />
        <link rel="canonical" href="https://www.ibcstudio.com/aerialtmlps"/>


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
                    <h1 className="title">Ariel & Timelapse</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/aerialtmlps"> Aerial & Timelapse</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 


       <section className="process-section-2 fade-wrapper pt-60 pb-30">
            <div className="container">
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
                <div className="section-heading text-center pt-50">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5"> Aerial Shoot </h2>
                   
                </div>
                <div className='container'>
  <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                        <p>At IBC Studio, we understand the importance of capturing the perfect aerial shot for your real estate project. Our state-of-the-art aerial services are designed
                             to provide you with the clear and stunning footage you need to showcase your properties in the best possible light.  </p>

                        <p>We utilize the best quality cameras to record your aerial shots, ensuring that every detail is captured with precision and clarity. Whether it's a sprawling landscape
                             or a detailed view of a property, our advanced camera technology delivers exceptional results. </p>

                        <p>Our team of experienced professionals is dedicated to delivering top-notch aerial footage that meets your specific requirements. We have the expertise to handle a wide 
                            range of real estate projects, from residential properties to commercial developments. </p>

                        <p>If you're ready to elevate your real estate marketing with stunning aerial footage, IBC Studio is here to help. Contact us today to discuss your project and learn more
                             about how our aerial services can bring your vision to life.  </p>
                </div> 
                </div>
            
       
   
                <section className="process-section-2 fade-wrapper pt-60 pb-30">
            <div className="container">
            <section> 
                    <VideoGallery videos={paginatedVideos2} onOpenModal={handleOpenModal} />
                      {currentVideo && <VideoModal video={currentVideo} onCloseModal={handleCloseModal} />}
                      <Pagination
                        pageCount={Math.ceil(videos2.length / videosPerPage)}
                        onPageChange={handlePageChange}
                      />
 
	    </section>
      </div>
      </section>


        <section className="process-section-2 fade-wrapper pt-60 pb-120">
            <div className="container">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5"> Time Lapse </h2>
                   
                </div>
                <div>

               
                <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                        <p> In the dynamic world of business and project development, staying ahead of the curve is essential. At IBC Studio, we recognize the significance of showcasing your 
                            success stories and project milestones through the powerful medium of time-lapse videography/photography. It's more than just following a trend; it's about 
                            creating an engaging narrative that allows your audience to witness the evolution of your project, from its inception to completion.</p>

                        <p>If you're constructing a building, executing a major infrastructure project, or showcasing the development of your business space, our time-lapse services unveil
                             the entire journey – from the groundbreaking ceremony to the finishing touches. It's a captivating way to convey your dedication to excellence and the evolution 
                             of your vision into reality. </p>

                        <p>Experience the transformative impact of time lapse storytelling with IBC Studio.  </p>
 
                </div> 
                </div>
            </div>
        </section>


      <Footer/>   
     </>
  )
}
