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
        videoId: 'rPLxJIXUul4',
        thumbnail: 'https://img.youtube.com/vi/rPLxJIXUul4/0.jpg',
      },
      
    
      {
        id: 2,
        videoId: 'MjqB8lXFBew',
        thumbnail: 'https://img.youtube.com/vi/MjqB8lXFBew/0.jpg',
      },
    {
      id: 3,
      videoId: '5Xv3wCkJ4KQ',
      thumbnail: 'https://img.youtube.com/vi/5Xv3wCkJ4KQ/0.jpg',
    },
    {
        id: 4,
        videoId: 'A7_4pAOtmWI',
        thumbnail: 'https://img.youtube.com/vi/A7_4pAOtmWI/0.jpg',
      },
    {
      id: 5,
      videoId: 'cwX0oWz06u4',
      thumbnail: 'https://img.youtube.com/vi/cwX0oWz06u4/0.jpg',
    },
    {
        id: 6,
        videoId: 'WCXQFAg7ju4',
        thumbnail: 'https://img.youtube.com/vi/WCXQFAg7ju4/0.jpg',
      },
    {
      id: 7,
      videoId: 'YH4JeCUJ71o',
      thumbnail: 'https://img.youtube.com/vi/YH4JeCUJ71o/0.jpg',
    },
   
      {
        id: 8,
        videoId: '2zyRRmCpTSA',
        thumbnail: 'https://img.youtube.com/vi/2zyRRmCpTSA/0.jpg',
      },
    {
      id: 9,
      videoId: 'O5IYnJITQ08',
      thumbnail: 'https://img.youtube.com/vi/O5IYnJITQ08/0.jpg',
    },
    {
      id: 10,
      videoId: 'KZmduB-zE2E',
      thumbnail: 'https://img.youtube.com/vi/KZmduB-zE2E/0.jpg',
    },
    {
        id: 11,
        videoId: 'TajjcGenUXM',
        thumbnail: 'https://img.youtube.com/vi/TajjcGenUXM/0.jpg',
      },
      {
        id: 12,
        videoId: '2yqomU6rjj4',
        thumbnail: 'https://img.youtube.com/vi/2yqomU6rjj4/0.jpg',
      },  
      {
        id: 13,
        videoId: 'RWyYvHb67uk',
        thumbnail: 'https://img.youtube.com/vi/RWyYvHb67uk/0.jpg',
      },
      {
        id: 14,
        videoId: 'HplmcCvmDPg',
        thumbnail: 'https://img.youtube.com/vi/HplmcCvmDPg/0.jpg',
      },
      {
        id: 15,
        videoId: '991ZI5JJ2SU',
        thumbnail: 'https://img.youtube.com/vi/991ZI5JJ2SU/0.jpg',
      },
      {
        id: 16,
        videoId: '1oQ6CEST0fM',
        thumbnail: 'https://img.youtube.com/vi/1oQ6CEST0fM/0.jpg',
      },
     
]
 
export default function Tvcsocial() {

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
        title="Best TV Commercial &amp; Media Production Company in Dubai"
        description="Unleash the power of your brand with IBC Studio, your go-to for top-notch TV commercial shoots in Dubai. Elevate your message with our innovative media production expertise."
        type="article"
        name="@IBCStudioUAE"
        kwords="Best TV Commercial Shoot Dubai, ommercial Shoot Dubai, corporate video production, 360 virtual videos studio in dubai, 3d animation studios in dubai, audio visual companies in dubai, animation companies in dubai, post production dubai, timelapse video"
      />
      <link rel="canonical" href="https://www.ibcstudio.com/tvcsocial"/>


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
                    <h1 className="title">TVC & Social Media</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/tvcsocial"> TVC & Social Media</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 


       <section className="process-section-2 fade-wrapper pt-60 pb-10">
            <div className="container">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5"> TV Commercial</h2>
                   
                </div>
                <div>
  <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                        <p> Television boasts the largest audience among all mediums. Opting for television advertising is nothing short of seizing an opportunity to reach an extensive and diverse
                             pool of potential customers. Its far-reaching capabilities and precision in targeting specific demographics empower businesses to adeptly convey their message to a vast 
                             audience. Moreover, the visual and auditory allure of TV commercials can leave an indelible mark on viewers, rendering them a compelling medium for brand promotion. </p>

                        <p> With hundreds of channels broadcasting round the clock, the likelihood of your ad reaching its intended audience escalates significantly. Reaching an audience without 
                            advertising is near the edge of possibility. A proficient advertising company comprehends every facet of the television landscape, ensuring strategic placement of your
                             commercial before the right viewers at the opportune moment. Additionally, television advertising presents a distinctive chance for businesses to exhibit 
                            their products or services in a visually captivating manner, enabling potential customers to witness the product in action and grasp its inherent value. </p>

                        <p>Connect with us and outline your requirements; we're eager to assist you in making a resounding impact in the fiercely competitive market. Our team of experts will 
                            collaborate closely with you to craft a captivating commercial that eloquently conveys your brand message and resonates profoundly with your target audience. Embrace the
                             chance to propel your business to new echelons through television advertising. </p>
 
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

