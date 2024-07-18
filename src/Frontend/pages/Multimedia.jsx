import React,{useState} from 'react'
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
    videoId: '3sehzWCV2iQ',
    thumbnail: 'https://img.youtube.com/vi/3sehzWCV2iQ/0.jpg',
  },
  {
    id: 2,
    videoId: 'n5dwAoxRRdU',
    thumbnail: 'https://img.youtube.com/vi/n5dwAoxRRdU/0.jpg',
  },
  {
    id: 3,
    videoId: 'M1V27i0Xc3w',
    thumbnail: 'https://img.youtube.com/vi/M1V27i0Xc3w/0.jpg',
  },
  {
    id: 4,
    videoId: 'pI88MfeWmX0',
    thumbnail: 'https://img.youtube.com/vi/pI88MfeWmX0/0.jpg',
  },
  {
    id: 5,
    videoId: '7liXsX6Su04',
    thumbnail: 'https://img.youtube.com/vi/7liXsX6Su04/0.jpg',
  },
  {
    id: 6,
    videoId: '2OqG69dLhJA',
    thumbnail: 'https://img.youtube.com/vi/2OqG69dLhJA/0.jpg',
  },
  {
    id: 7,
    videoId: 'Y9Suk5XJv-o',
    thumbnail: 'https://img.youtube.com/vi/Y9Suk5XJv-o/0.jpg',
  },
  {
    id: 8,
    videoId: 'RWyYvHb67uk',
    thumbnail: 'https://img.youtube.com/vi/RWyYvHb67uk/0.jpg',
  },
  {
    id: 9,
    videoId: 'bNTDE5BVs78',
    thumbnail: 'https://img.youtube.com/vi/bNTDE5BVs78/0.jpg',
  },
  {
    id: 10,
    videoId: '8yYkZFWgVOQ',
    thumbnail: 'https://img.youtube.com/vi/8yYkZFWgVOQ/0.jpg',
  },
  {
    id: 11,
    videoId: 'Ess0Jb9Hbvg',
    thumbnail: 'https://img.youtube.com/vi/Ess0Jb9Hbvg/0.jpg',
  },
  
  // Add more video objects here
];


export default function Multimedia() {

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
        title="Multimedia Solutions Provider UAE | Motion Graphics Services Dubai"
        description="description" content="Unlock captivating multimedia experiences with our services in UAE. Elevate your brand with the best motion graphics in Dubai. Explore our dynamic solutions."
        type="article"
        name="@IBCStudioUAE"
        kwords="Multi-media Solutions Provider UAE, Best Motion Graphics Services Dubai, corporate video production, 360 virtual videos studio in dubai, 3d animation studios in dubai, audio visual companies in dubai, animation companies in dubai, post production dubai, timelapse video"
      />
      <link rel="canonical" href="https://www.ibcstudio.com/multimedia"/>




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
                    <h1 className="title">Multimedia</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/multimedia"> Multimedia</a></h4>
                </div>
            </div>
        </section>
       {/*page-header */} 

       <section className="process-section-2 fade-wrapper pt-60 pb-120">
            
       <section> 
                    <VideoGallery videos={paginatedVideos} onOpenModal={handleOpenModal} />
                      {currentVideo && <VideoModal video={currentVideo} onCloseModal={handleCloseModal} />}
                      <Pagination
                        pageCount={Math.ceil(videos.length / videosPerPage)}
                        onPageChange={handlePageChange}
                      />
 
	     </section>         
            
            
            
            
            <div className="container pt-50">
                <div className="section-heading text-center">
                     
                    <h2  data-text-animation="fade-in" data-duration="1.5"> Multimedia & Motion Graphics </h2>
                   
                </div>
                <div>

               
                <div className="row gy-lg-0 gy-4"  data-text-animation="fade-in" data-duration="1.5">
                        <p>In the contemporary business landscape, the significance of audio-visual presentations as a powerful marketing tool cannot be overstated.
                           In both small and large companies, the traditional approach of relying solely on videos has evolved into a dynamic blend of graphical animations,
                            info-graphics, and video content. Recognizing this paradigm shift, 
                          IBC Studio is here to provide comprehensive solutions tailored to meet the evolving demands of impactful presentations. </p>

                        <p>At IBC Studio, we understand that a successful presentation goes beyond just video content. It involves seamlessly integrating graphical animations 
                          and info-graphics to create a visually engaging and informative narrative. Our multimedia solutions are designed to strike the perfect balance between
                           information and visuals, ensuring your company profile, brand, or any other information is portrayed with maximum impact. </p>

                        <p> Explore the potential of multimedia presentations with IBC Studio. Whether you need to showcase your company profile, elevate your brand image, or 
                          convey critical information, our multimedia solutions are crafted to meet your specific needs. </p>
   
                        <p>Reach us to embark on a journey of transforming your ideas into captivating visual narratives. Let your story unfold with the power of multimedia.</p>
                </div> 
                </div>
            </div>
        </section>




      <Footer/>   


    </>
  )
}
