
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Heroshp from '../assets/img/shapes/hero-shape-1.png'
import Heroimg1 from '../assets/img/images/hero-img-1.webp'
import Heroimg2 from '../assets/img/images/hero-img-2.webp'
import Heroimg3 from '../assets/img/images/hero-img-3.webp'
import Heroimg from '../assets/img/images/hero-img.webp'
import Herobtn from '../assets/img/bg-img/hero-btn-bg.png'
import Processshp from '../assets/img/shapes/process-shape.png'
import Processimg from '../assets/img/images/process-img.png'
import RoundShp from '../assets/img/shapes/round-shape.png'
import Aboutdotshp from '../assets/img/shapes/about-dot-shape.png'
import Aboutimg from '../assets/img/images/about-img.webp'
import Aboutimg1 from '../assets/img/images/about-img-1.webp'
import Abouttext from '../assets/img/images/about-text.png'
import Dronefly from '../assets/img/images/drone.webp'
import serviceshp1 from '../assets/img/shapes/service-shape-1.png'
import serviceshp from '../assets/img/shapes/service-shape.png'
import service1 from '../assets/img/images/services/Audio_Production.webp' 
import service2 from '../assets/img/images/services/Video_Production.webp'
import service3 from '../assets/img/images/services/Commercial Photography.webp'
import service4 from '../assets/img/images/services/360_VRAR.webp'
import service5 from '../assets/img/images/services/Aerial.webp'
import service6 from '../assets/img/images/services/Time_lapse.webp'
import service7 from '../assets/img/images/services/Elearning_web.webp'
import service8 from '../assets/img/images/services/Educational_Tutorials.webp'
import faqshp1 from '../assets/img/shapes/faq-shape-1.png'
import faqimg from '../assets/img/images/faq-img.webp'
import project1 from '../assets/img/project/project-1.webp'
import project2 from '../assets/img/project/project-2.webp'
import project3 from '../assets/img/project/project-3.webp'
import post1 from '../assets/img/blog/post-1.webp'
import post2 from '../assets/img/blog/post-2.webp'
import post3 from '../assets/img/blog/post-3.webp'
import client1 from '../assets/img/clients/ADNEC.webp'
import client2 from '../assets/img/clients/Air arabia.webp'
import client3 from '../assets/img/clients/Al-Futtaim Group.webp'
import client4 from '../assets/img/clients/Carlton Downtown.webp'
import client5 from '../assets/img/clients/Department of health - Abudhabi.webp'
import client6 from '../assets/img/clients/Dewa.webp'
import client7 from '../assets/img/clients/Dubai Frame.webp'
import client8 from '../assets/img/clients/Dubai Municipality  Academy.webp'
import client9 from '../assets/img/clients/ENOC.webp'
import client10 from '../assets/img/clients/Finance House.webp'
import client11 from '../assets/img/clients/Fly Arna.webp'
import client12 from '../assets/img/clients/Fly Jinnah.webp'
import client13 from '../assets/img/clients/GEMS School Dubai.webp'
import client14 from '../assets/img/clients/IKEA.webp'
import client15 from '../assets/img/clients/Ministry of Community Development.webp'
import client16 from '../assets/img/clients/TAMM.webp'
import Slider from 'react-infinite-logo-slider'
import processhp from '../assets/img/shapes/process-shape.png'
import process1 from '../assets/img/icon/process-1.png'
import process2 from '../assets/img/icon/process-2.png'
import process3 from '../assets/img/icon/process-3.png'
import process4 from '../assets/img/icon/process-4.png' 
import Thumbnail1 from '../assets/img/images/Thumbnail1.webp'
import Thumbnail2 from '../assets/img/images/Thumbnail2.webp'
import videobg from '../assets/video/Showreel.webm';
import edu_vid from '../assets/video/edu.webm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
 

/*  
import LazyBackgroundVideo from '../Components/LazyBackgroundVideo'; */
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

 

// import required modules
import { Navigation } from 'swiper/modules';
import { Seo } from '../Components/Seo';


export default function Home() {
  return (
    <>
    <Header/>
     
    <Seo
        title="Audio-Video Production House | Media &amp; Recording | Photo Studio Dubai"
        description="Elevate your creativity at IBC Studio, the best recording studio in UAE. We offer top-notch media production, photo studio, and audio-video production services in Dubai."
        type="website"
        name="@IBCStudioUAE"
        kwords="Photo Studio in Dubai, Best Recording Studio in UAE, Media Production Studio UAE, Audio-Video Production House Dubai,ivr recording,ivr recording uae,top media production houses in dubai, professional photography, professional photographer,voice over recording, voice Recording, voice over dubai, voice record studio, wedding photography, voice recording, video studiodubai, video production company uae, recording studio, videographer dubai, audio recording, audio recording studio, video production company dubai, digital printing, product photography, video shoot, audio recording studio, Audio recording studios, Audio &amp; video production companies, web developing, web designing, post production dubai, corporate video production dubai, event photographer , event photography, event photography in dubai, nearby recording studios, dubai recording studio, Professional photography, good recording studio, sound record studio, designing, industrial photography, photography studio , products photography, photo studio in dubai, photo studio near me, photograph, dubai photography, uae photography, lifestyle photography, modeling photography, video shooting , timelapse, photography company in dubai, commercial, cheap website design dubai, 4k video, video services, post production, ibcdubai , corpprate video , commercial video production, studios in dubai, , studios in uae, dubbing, ivr recording dubai, telephone hold, telephone hold message, sound record studio, audio recorder, signature tunes, radio spot"
      />
      <link rel="canonical" href="https://www.ibcstudio.com/"/>
 
     <section className="hero-section" >
     
            <div className="hero-bg-shape">
            {/*
            <LazyLoadImage src={Herobgshp} alt="shape"/> */}

             <video className='videoTag' preload="metadata" autoPlay loop muted style={{width:'100%', zIndex:-1,opacity:0.5}}>
            <source src={videobg} type='video/mp4'  />
            </video>  

           {/*  <header className="App-header">
                    <LazyBackgroundVideo
                    src="https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FHomeBgVideo%2FShowreel-final~3.webm?alt=media&token=8196068b-2d12-4649-85b6-4c8226b170b7"
                    type="video/mp4"
                    poster="https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FHomeBgVideo%2Ffallback-image%20(1).webp?alt=media&token=2e4e8db1-e8b5-479d-85aa-037829ee7047"
                    />
                    
           </header> */}

            </div>
            <div className="hero-shape"><LazyLoadImage src={Heroshp} alt="shape"/></div>
            <div className="hero-images">
                <LazyLoadImage src={Heroimg1} alt="hero"/>
                <LazyLoadImage src={Heroimg2} alt="hero"/>
                <LazyLoadImage src={Heroimg3} alt="hero"/>
            </div>
            <div className="hero-img"><img src={Heroimg} alt="hero"/></div>
            <div className="container">
                <div className="hero-content">
                    <h4 className="sub-title anim-text">Transforming</h4>
                    <h2 className="title anim-text">Visions into</h2>
                    <h3 className="bottom-title anim-text">Digital Reality</h3>
                    <a href="/about" className="hero-btn"> <LazyLoadImage src={Herobtn} style={{zIndex:-1}} alt="hero"/>  </a>
                </div>
            </div>
        </section>
    <section className="process-section pt-130 fade-wrapper" style={{position:'relative'}} >
   


            <div className="bg-shape"><LazyLoadImage src={Processshp} alt="shape"/>
                     
            </div>
            <div className="container">
           
                <div className="section-heading text-center">
                    
                    <h2 className="section-title overflow-hidden" data-text-animation="fade-in" data-duration="1.5">WELCOME TO IBC STUDIO</h2>
                </div>
                <div className="row gy-lg-0 gy-5">
                    <div className="col-lg-12 col-md-6">
                        <div className="process-item fade-top">
                             
                            <div className="process-content">
                                <p style={{fontSize: 20,textAlign:'center'}}>The finest full-service media production studio in Dubai, UAE that specializes in professional audio recording and dubbing,
                                     video production, commercial photography, IVR recording, web & software development, interactive presentation, and event coverage. 
                                     Here we endeavor to bring to you meaningful business solutions that help your organization improve the sense of clarity by providing
                                      adequate equipment, technology, and expertise. We enable you to produce better stories for your business and communicate them effectively
                                       with your audience. We are in the business for the last 15 years and know the importance of visual art needed for extreme perceptibility 
                                       and superb technology.</p>
                            </div>
                        </div>
                    </div>
                     
                    
                     
                </div>
            </div>
            
            <div>
                   
            <div className="floating" style={{zIndex:9999,position:'absolute'}}>
                    <LazyLoadImage src={Dronefly} alt="Drone" style={{width:500}} />
                    </div>
 
              
                 


            <div className="process-text wow fade-in-bottom" data-wow-delay="400ms">
                <LazyLoadImage src={Processimg} alt="process"/>
                
            </div>
            </div>

        </section>
        
        
         {/* About us */}

         
        <section className="about-section pb-130">
            <div className="round-shape"><LazyLoadImage src={RoundShp} alt="shape"/></div>
            <div className="about-wrap">
                <div className="shape"><LazyLoadImage src={Aboutdotshp} alt="shape"/></div>
                <div className="row about-wrapper align-items-center">
                    <div className="col-lg-7">
                        <div className="about-content fade-wrapper">
                            <div className="section-heading mb-0">
                                <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">About Our Company</h4>
                                <h2 className="section-title overflow-hidden" data-text-animation data-split="word" data-duration="1">Your premier destination for professional Audio &<br/> Video production services<br/> in the heart of the UAE</h2>
                                <p>At IBC Studio, we understand the power of storytelling. Whether you're a budding artist, an established brand, or an aspiring filmmaker, we are here to transform your ideas into captivating audiovisual 
                                    experiences.<br/> Our state-of-the-art facilities are equipped with the latest in audio and video production technology, ensuring that every project we undertake is executed with precision and finesse.</p>
                                <a href="/about" className="rr-primary-btn">Know More&nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-img-wrap">
                            <div className="img-shape"></div>
                            <div className="about-img reveal">
                                <LazyLoadImage className="img-1" src={Aboutimg} alt="img"/>
                            </div>
                            <div className="about-img-2 reveal">
                                <LazyLoadImage className="img-2" src={Aboutimg1} alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-text">
                    <LazyLoadImage src={Abouttext} alt="about"/>
                </div>
                
            </div>
        </section>

         {/* Services */}
         <section className="service-section pt-20 pb-130">
         <div className="shape"><LazyLoadImage src={serviceshp1} alt="shape"/></div>
            <div className="bg-color"></div>
            <div className="container">
                <div className="section-heading text-center">
                    <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">What We Offer For You</h4>
                    <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Services We Provide</h2>
                </div>
             
                <div className="row gy-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item md-pb-30">
                            <h4 className="service-text"><a href="/audio">Audio Recording & Dubbing</a></h4>
                            <div className="service-thumb">
                                <div className="overlay-color"></div>
                                <div className="transparent-shape"><LazyLoadImage src={serviceshp} alt="shape"/></div>
                                <LazyLoadImage src={service1} alt="service"/>
                                <div className="service-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.0491 13.9814C22.483 12.8947 22.5755 11.6017 23.2903 10.6067C23.5142 10.2953 23.9481 10.2242 24.2596 10.4479C24.5711 10.6717 24.6422 11.1057 24.4184 11.4172C24.0113 11.984 23.9586 12.7206 24.281 13.3396C24.5998 13.9516 25.223 14.3291 25.9115 14.3291C25.9224 14.3291 25.9331 14.3287 25.9442 14.3289C26.3237 14.3289 26.6336 14.6341 26.6384 15.0147C26.6432 15.3983 26.3363 15.7131 25.9527 15.7178C25.9388 15.7179 25.9249 15.718 25.9111 15.718C24.7024 15.718 23.6086 15.0556 23.0491 13.9814ZM23.8549 24.1267C23.9952 24.1267 24.1369 24.0842 24.2595 23.9962C24.571 23.7724 24.6421 23.3384 24.4184 23.0269C24.0113 22.4601 23.9586 21.7233 24.2809 21.1043C24.5997 20.4923 25.2229 20.1148 25.9114 20.1148C25.9222 20.1148 25.9334 20.1151 25.9441 20.115C26.3235 20.115 26.6335 19.8098 26.6383 19.4292C26.6432 19.0457 26.3362 18.7308 25.9526 18.7261C24.731 18.7097 23.615 19.3761 23.0491 20.4626C22.4831 21.5492 22.5756 22.8422 23.2902 23.8373C23.426 24.0261 23.6389 24.1267 23.8549 24.1267ZM15.816 17.9867C16.1013 17.6902 16.4217 17.4343 16.7677 17.222C16.4217 17.0096 16.1012 16.7538 15.816 16.4572C14.5557 15.1466 14.1415 13.2647 14.7351 11.546C15.2591 10.029 16.5201 8.86887 18.0618 8.46199C18.1477 7.68821 18.3749 6.92801 18.7477 6.22656C19.619 4.58672 21.1396 3.44326 22.9442 3.05602C23.4347 1.96345 24.2972 1.04481 25.4164 0.506367C27.3348 -0.416341 29.6556 -0.0551947 31.2036 1.40348H34.5114C34.8431 1.40348 35.1286 1.63812 35.1928 1.96365L35.7204 4.6402L38.2529 5.69069L40.5201 4.17041C40.7954 3.98567 41.1633 4.02149 41.398 4.25613L44.9593 7.81729C45.1938 8.05183 45.2298 8.41963 45.0449 8.69525L43.5246 10.9623L44.5751 13.4948L47.2517 14.0225C47.5771 14.0867 47.8118 14.3722 47.8118 14.704V19.7402C47.8118 20.0719 47.5772 20.3574 47.2517 20.4216L44.5751 20.9492L43.5246 23.4818L45.0449 25.7489C45.2297 26.0243 45.1938 26.3921 44.9593 26.6268L41.3979 30.188C41.1634 30.4225 40.7955 30.4584 40.5201 30.2736L38.2529 28.7534L35.7204 29.8039L35.1928 32.4805C35.1286 32.8059 34.8431 33.0406 34.5114 33.0406H31.2034C30.2272 33.9605 28.9439 34.4442 27.6476 34.4443C26.8885 34.4443 26.1249 34.2786 25.4164 33.9376C24.2971 33.3992 23.4345 32.4805 22.944 31.3878C21.1398 31.0003 19.618 29.8557 18.7477 28.2175C18.3748 27.5159 18.1476 26.7554 18.0618 25.9814C16.5211 25.5746 15.2583 24.4125 14.7352 22.8981C14.1416 21.1794 14.5556 19.2974 15.816 17.9867ZM29.9713 17.222C30.8632 17.8762 31.4437 18.931 31.4437 20.1194V24.2619C31.6265 24.276 31.81 24.2834 31.9933 24.2834C35.887 24.2834 39.0548 21.1157 39.0548 17.222C39.0548 13.3282 35.887 10.1605 31.9933 10.1605C31.81 10.1605 31.6264 10.1679 31.4437 10.182V14.3245C31.4437 15.5129 30.8632 16.5677 29.9713 17.222ZM33.9404 2.7925H31.4437V8.79079C31.6267 8.77899 31.8101 8.77145 31.9933 8.77145C36.6529 8.77145 40.4438 12.5623 40.4438 17.222C40.4438 21.8816 36.6529 25.6725 31.9933 25.6725C31.81 25.6725 31.6267 25.6649 31.4437 25.6531V31.6514H33.9404L34.4296 29.1703C34.4746 28.9425 34.6304 28.7521 34.845 28.6632L38.0647 27.3277C38.2793 27.2387 38.5245 27.2629 38.7175 27.3924L40.8196 28.8019L43.5734 26.0482L42.1638 23.9462C42.0342 23.7532 42.01 23.5081 42.0991 23.2934L43.4346 20.0736C43.5235 19.8591 43.7139 19.7032 43.9417 19.6582L46.4228 19.169V15.2746L43.9417 14.7855C43.7139 14.7406 43.5235 14.5848 43.4346 14.3702L42.0991 11.1504C42.0101 10.9356 42.0343 10.6906 42.1638 10.4975L43.5734 8.39552L40.8196 5.64178L38.7175 7.05144C38.5245 7.18082 38.2793 7.20522 38.0647 7.11613L34.845 5.78058C34.6305 5.69159 34.4747 5.50129 34.4296 5.27339L33.9404 2.7925ZM16.8172 15.4945C17.3774 16.077 18.1268 16.4431 18.9305 16.5275H27.8518C29.0664 16.5275 30.0546 15.5393 30.0546 14.3246V8.68969C30.0546 7.28797 29.16 5.64565 27.5019 5.36278C27.1237 5.29829 26.8696 4.93943 26.934 4.56132C26.9985 4.18311 27.3578 3.92912 27.7355 3.99351C28.685 4.15553 29.4614 4.6142 30.0545 5.23033V2.24135C28.9287 1.32043 27.3425 1.12121 26.0185 1.75827C24.6078 2.43691 23.7531 3.94043 23.8915 5.4996C24.0299 7.05878 25.1361 8.38837 26.644 8.80796C27.0136 8.91074 27.2298 9.29372 27.127 9.6632C27.0241 10.0327 26.6413 10.249 26.2717 10.1461C24.2097 9.57232 22.697 7.75438 22.5078 5.62233C22.4781 5.28718 22.482 4.95382 22.5171 4.6265C21.4329 5.04043 20.5319 5.82821 19.974 6.87851C19.2549 8.23151 19.22 9.86471 19.8806 11.2472C20.0459 11.5932 19.8993 12.0079 19.5533 12.1733C19.4566 12.2194 19.3548 12.2412 19.2543 12.2412C18.9951 12.2412 18.7464 12.0955 18.6272 11.8459C18.334 11.2322 18.15 10.5799 18.0692 9.91729C17.1317 10.2757 16.3806 11.036 16.0477 11.9996C15.6252 13.2227 15.9203 14.5618 16.8172 15.4945ZM16.0479 22.4445C16.3803 23.4065 17.1322 24.1682 18.0694 24.5268C18.1501 23.8644 18.3342 23.2119 18.6274 22.5983C18.7928 22.2522 19.2076 22.1058 19.5535 22.271C19.8995 22.4363 20.0461 22.851 19.8808 23.197C19.2203 24.5795 19.2551 26.2127 19.9742 27.5655C20.5316 28.6147 21.4329 29.4032 22.5173 29.8175C22.4822 29.4902 22.4783 29.1569 22.508 28.8217C22.6971 26.6898 24.2097 24.8718 26.2719 24.2979C26.6416 24.1957 27.0243 24.4114 27.1272 24.7808C27.23 25.1504 27.0138 25.5333 26.6443 25.6362C25.1363 26.0557 24.03 27.3853 23.8917 28.9444C23.7532 30.5038 24.608 32.0072 26.0186 32.6858C27.3426 33.3226 28.9289 33.1237 30.0547 32.2028V29.2137C29.4616 29.8298 28.6852 30.2886 27.7356 30.4505C27.6962 30.4572 27.6568 30.4605 27.6179 30.4605C27.2857 30.4605 26.9919 30.2213 26.9342 29.8827C26.8697 29.5046 27.1239 29.1458 27.5021 29.0813C29.1601 28.7985 30.0547 27.1561 30.0547 25.7544V20.1195C30.0547 18.9049 29.0665 17.9167 27.8519 17.9167L27.848 17.9165H18.9351C18.1296 18.0001 17.3784 18.366 16.8173 18.9496C15.9204 19.8822 15.6254 21.2213 16.0479 22.4445ZM48.4403 40.6237C46.4952 43.1804 36.4885 48.886 33.3471 49.5368C31.7607 49.8654 30.1683 50 28.5778 50C24.8919 50 21.2125 49.2776 17.618 48.5717C14.522 47.9638 11.5856 47.3879 8.7203 47.2631C8.49855 48.428 7.47306 49.3117 6.24457 49.3117H1.1281C0.744536 49.3117 0.433594 49.0008 0.433594 48.6172V32.018C0.433594 31.6344 0.744536 31.3235 1.1281 31.3235H6.24457C7.44538 31.3235 8.45212 32.1678 8.70403 33.2937L15.9757 32.6213C18.2183 32.4143 20.0639 32.8542 22.1447 34.0938L25.2052 35.9172C27.6185 37.355 28.3502 37.3507 30.7762 37.3407C30.9974 37.3396 31.2315 37.3386 31.4805 37.3386C32.6339 37.2993 33.6777 37.8708 34.2702 38.8681C34.7374 39.6543 34.8367 40.5589 34.5713 41.3946C37.9089 40.2018 42.1105 38.2414 44.5395 36.8389C46.2793 35.8347 47.8245 36.2551 48.5843 37.1175C49.4066 38.0513 49.3501 39.4276 48.4403 40.6237ZM7.37632 33.8443C7.37632 33.2203 6.86863 32.7126 6.24467 32.7126H1.82262V47.9228H6.24457C6.86854 47.9228 7.37622 47.4151 7.37622 46.7912L7.37632 33.8443ZM47.5419 38.0356C47.1566 37.598 46.2934 37.4304 45.234 38.0419C42.0602 39.8743 34.333 43.4702 30.8791 43.8095L30.8789 43.807C30.4325 43.8601 29.9586 43.8854 29.4667 43.8854C26.2248 43.8854 22.2338 42.8169 20.631 41.7837C20.3086 41.5759 20.2156 41.1461 20.4235 40.8236C20.6314 40.5014 21.0609 40.4083 21.3836 40.6162C23.1192 41.735 28.5421 42.9861 31.4491 42.3021C32.2705 42.109 32.8188 41.7891 33.0789 41.3516C33.4081 40.7976 33.4071 40.1344 33.0761 39.5774C32.745 39.0205 32.1617 38.7015 31.5192 38.7269C31.5105 38.7272 31.5017 38.7274 31.4929 38.7274C31.2415 38.7274 31.0055 38.7285 30.7825 38.7295C28.2769 38.74 27.239 38.7456 24.4942 37.1104L21.4337 35.287C19.6012 34.1953 18.0571 33.8236 16.1035 34.0043L8.76525 34.683V45.8748C11.756 46.0057 14.8684 46.616 17.8856 47.2086C22.8961 48.1924 28.077 49.2097 33.0653 48.1764C35.862 47.5971 45.5953 42.0692 47.3347 39.7825C47.8412 39.1164 47.9188 38.4635 47.5419 38.0356ZM6.66137 44.9758C6.66137 46.1127 5.73638 47.0377 4.59947 47.0377C3.46255 47.0377 2.53757 46.1127 2.53757 44.9758C2.53757 43.8389 3.46255 42.9139 4.59947 42.9139C5.73638 42.9139 6.66137 43.8389 6.66137 44.9758ZM5.27235 44.9758C5.27235 44.6048 4.97044 44.3029 4.59947 44.3029C4.2285 44.3029 3.92659 44.6048 3.92659 44.9758C3.92659 45.3468 4.2285 45.6487 4.59947 45.6487C4.97044 45.6487 5.27235 45.3468 5.27235 44.9758Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <a href="/audio" className="service-btn">Read Details  &nbsp; <FontAwesomeIcon icon={faArrowRight} /> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item md-pb-30">
                            <h4 className="service-text"><a href="/video">Video Production & Post Production</a></h4>
                            <div className="service-thumb">
                                <div className="overlay-color"></div>
                                <div className="transparent-shape"><LazyLoadImage src={serviceshp} alt="shape"/></div>
                                <LazyLoadImage src={service2} alt="service"/>
                                <div className="service-icon">
                                 <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.0491 13.9814C22.483 12.8947 22.5755 11.6017 23.2903 10.6067C23.5142 10.2953 23.9481 10.2242 24.2596 10.4479C24.5711 10.6717 24.6422 11.1057 24.4184 11.4172C24.0113 11.984 23.9586 12.7206 24.281 13.3396C24.5998 13.9516 25.223 14.3291 25.9115 14.3291C25.9224 14.3291 25.9331 14.3287 25.9442 14.3289C26.3237 14.3289 26.6336 14.6341 26.6384 15.0147C26.6432 15.3983 26.3363 15.7131 25.9527 15.7178C25.9388 15.7179 25.9249 15.718 25.9111 15.718C24.7024 15.718 23.6086 15.0556 23.0491 13.9814ZM23.8549 24.1267C23.9952 24.1267 24.1369 24.0842 24.2595 23.9962C24.571 23.7724 24.6421 23.3384 24.4184 23.0269C24.0113 22.4601 23.9586 21.7233 24.2809 21.1043C24.5997 20.4923 25.2229 20.1148 25.9114 20.1148C25.9222 20.1148 25.9334 20.1151 25.9441 20.115C26.3235 20.115 26.6335 19.8098 26.6383 19.4292C26.6432 19.0457 26.3362 18.7308 25.9526 18.7261C24.731 18.7097 23.615 19.3761 23.0491 20.4626C22.4831 21.5492 22.5756 22.8422 23.2902 23.8373C23.426 24.0261 23.6389 24.1267 23.8549 24.1267ZM15.816 17.9867C16.1013 17.6902 16.4217 17.4343 16.7677 17.222C16.4217 17.0096 16.1012 16.7538 15.816 16.4572C14.5557 15.1466 14.1415 13.2647 14.7351 11.546C15.2591 10.029 16.5201 8.86887 18.0618 8.46199C18.1477 7.68821 18.3749 6.92801 18.7477 6.22656C19.619 4.58672 21.1396 3.44326 22.9442 3.05602C23.4347 1.96345 24.2972 1.04481 25.4164 0.506367C27.3348 -0.416341 29.6556 -0.0551947 31.2036 1.40348H34.5114C34.8431 1.40348 35.1286 1.63812 35.1928 1.96365L35.7204 4.6402L38.2529 5.69069L40.5201 4.17041C40.7954 3.98567 41.1633 4.02149 41.398 4.25613L44.9593 7.81729C45.1938 8.05183 45.2298 8.41963 45.0449 8.69525L43.5246 10.9623L44.5751 13.4948L47.2517 14.0225C47.5771 14.0867 47.8118 14.3722 47.8118 14.704V19.7402C47.8118 20.0719 47.5772 20.3574 47.2517 20.4216L44.5751 20.9492L43.5246 23.4818L45.0449 25.7489C45.2297 26.0243 45.1938 26.3921 44.9593 26.6268L41.3979 30.188C41.1634 30.4225 40.7955 30.4584 40.5201 30.2736L38.2529 28.7534L35.7204 29.8039L35.1928 32.4805C35.1286 32.8059 34.8431 33.0406 34.5114 33.0406H31.2034C30.2272 33.9605 28.9439 34.4442 27.6476 34.4443C26.8885 34.4443 26.1249 34.2786 25.4164 33.9376C24.2971 33.3992 23.4345 32.4805 22.944 31.3878C21.1398 31.0003 19.618 29.8557 18.7477 28.2175C18.3748 27.5159 18.1476 26.7554 18.0618 25.9814C16.5211 25.5746 15.2583 24.4125 14.7352 22.8981C14.1416 21.1794 14.5556 19.2974 15.816 17.9867ZM29.9713 17.222C30.8632 17.8762 31.4437 18.931 31.4437 20.1194V24.2619C31.6265 24.276 31.81 24.2834 31.9933 24.2834C35.887 24.2834 39.0548 21.1157 39.0548 17.222C39.0548 13.3282 35.887 10.1605 31.9933 10.1605C31.81 10.1605 31.6264 10.1679 31.4437 10.182V14.3245C31.4437 15.5129 30.8632 16.5677 29.9713 17.222ZM33.9404 2.7925H31.4437V8.79079C31.6267 8.77899 31.8101 8.77145 31.9933 8.77145C36.6529 8.77145 40.4438 12.5623 40.4438 17.222C40.4438 21.8816 36.6529 25.6725 31.9933 25.6725C31.81 25.6725 31.6267 25.6649 31.4437 25.6531V31.6514H33.9404L34.4296 29.1703C34.4746 28.9425 34.6304 28.7521 34.845 28.6632L38.0647 27.3277C38.2793 27.2387 38.5245 27.2629 38.7175 27.3924L40.8196 28.8019L43.5734 26.0482L42.1638 23.9462C42.0342 23.7532 42.01 23.5081 42.0991 23.2934L43.4346 20.0736C43.5235 19.8591 43.7139 19.7032 43.9417 19.6582L46.4228 19.169V15.2746L43.9417 14.7855C43.7139 14.7406 43.5235 14.5848 43.4346 14.3702L42.0991 11.1504C42.0101 10.9356 42.0343 10.6906 42.1638 10.4975L43.5734 8.39552L40.8196 5.64178L38.7175 7.05144C38.5245 7.18082 38.2793 7.20522 38.0647 7.11613L34.845 5.78058C34.6305 5.69159 34.4747 5.50129 34.4296 5.27339L33.9404 2.7925ZM16.8172 15.4945C17.3774 16.077 18.1268 16.4431 18.9305 16.5275H27.8518C29.0664 16.5275 30.0546 15.5393 30.0546 14.3246V8.68969C30.0546 7.28797 29.16 5.64565 27.5019 5.36278C27.1237 5.29829 26.8696 4.93943 26.934 4.56132C26.9985 4.18311 27.3578 3.92912 27.7355 3.99351C28.685 4.15553 29.4614 4.6142 30.0545 5.23033V2.24135C28.9287 1.32043 27.3425 1.12121 26.0185 1.75827C24.6078 2.43691 23.7531 3.94043 23.8915 5.4996C24.0299 7.05878 25.1361 8.38837 26.644 8.80796C27.0136 8.91074 27.2298 9.29372 27.127 9.6632C27.0241 10.0327 26.6413 10.249 26.2717 10.1461C24.2097 9.57232 22.697 7.75438 22.5078 5.62233C22.4781 5.28718 22.482 4.95382 22.5171 4.6265C21.4329 5.04043 20.5319 5.82821 19.974 6.87851C19.2549 8.23151 19.22 9.86471 19.8806 11.2472C20.0459 11.5932 19.8993 12.0079 19.5533 12.1733C19.4566 12.2194 19.3548 12.2412 19.2543 12.2412C18.9951 12.2412 18.7464 12.0955 18.6272 11.8459C18.334 11.2322 18.15 10.5799 18.0692 9.91729C17.1317 10.2757 16.3806 11.036 16.0477 11.9996C15.6252 13.2227 15.9203 14.5618 16.8172 15.4945ZM16.0479 22.4445C16.3803 23.4065 17.1322 24.1682 18.0694 24.5268C18.1501 23.8644 18.3342 23.2119 18.6274 22.5983C18.7928 22.2522 19.2076 22.1058 19.5535 22.271C19.8995 22.4363 20.0461 22.851 19.8808 23.197C19.2203 24.5795 19.2551 26.2127 19.9742 27.5655C20.5316 28.6147 21.4329 29.4032 22.5173 29.8175C22.4822 29.4902 22.4783 29.1569 22.508 28.8217C22.6971 26.6898 24.2097 24.8718 26.2719 24.2979C26.6416 24.1957 27.0243 24.4114 27.1272 24.7808C27.23 25.1504 27.0138 25.5333 26.6443 25.6362C25.1363 26.0557 24.03 27.3853 23.8917 28.9444C23.7532 30.5038 24.608 32.0072 26.0186 32.6858C27.3426 33.3226 28.9289 33.1237 30.0547 32.2028V29.2137C29.4616 29.8298 28.6852 30.2886 27.7356 30.4505C27.6962 30.4572 27.6568 30.4605 27.6179 30.4605C27.2857 30.4605 26.9919 30.2213 26.9342 29.8827C26.8697 29.5046 27.1239 29.1458 27.5021 29.0813C29.1601 28.7985 30.0547 27.1561 30.0547 25.7544V20.1195C30.0547 18.9049 29.0665 17.9167 27.8519 17.9167L27.848 17.9165H18.9351C18.1296 18.0001 17.3784 18.366 16.8173 18.9496C15.9204 19.8822 15.6254 21.2213 16.0479 22.4445ZM48.4403 40.6237C46.4952 43.1804 36.4885 48.886 33.3471 49.5368C31.7607 49.8654 30.1683 50 28.5778 50C24.8919 50 21.2125 49.2776 17.618 48.5717C14.522 47.9638 11.5856 47.3879 8.7203 47.2631C8.49855 48.428 7.47306 49.3117 6.24457 49.3117H1.1281C0.744536 49.3117 0.433594 49.0008 0.433594 48.6172V32.018C0.433594 31.6344 0.744536 31.3235 1.1281 31.3235H6.24457C7.44538 31.3235 8.45212 32.1678 8.70403 33.2937L15.9757 32.6213C18.2183 32.4143 20.0639 32.8542 22.1447 34.0938L25.2052 35.9172C27.6185 37.355 28.3502 37.3507 30.7762 37.3407C30.9974 37.3396 31.2315 37.3386 31.4805 37.3386C32.6339 37.2993 33.6777 37.8708 34.2702 38.8681C34.7374 39.6543 34.8367 40.5589 34.5713 41.3946C37.9089 40.2018 42.1105 38.2414 44.5395 36.8389C46.2793 35.8347 47.8245 36.2551 48.5843 37.1175C49.4066 38.0513 49.3501 39.4276 48.4403 40.6237ZM7.37632 33.8443C7.37632 33.2203 6.86863 32.7126 6.24467 32.7126H1.82262V47.9228H6.24457C6.86854 47.9228 7.37622 47.4151 7.37622 46.7912L7.37632 33.8443ZM47.5419 38.0356C47.1566 37.598 46.2934 37.4304 45.234 38.0419C42.0602 39.8743 34.333 43.4702 30.8791 43.8095L30.8789 43.807C30.4325 43.8601 29.9586 43.8854 29.4667 43.8854C26.2248 43.8854 22.2338 42.8169 20.631 41.7837C20.3086 41.5759 20.2156 41.1461 20.4235 40.8236C20.6314 40.5014 21.0609 40.4083 21.3836 40.6162C23.1192 41.735 28.5421 42.9861 31.4491 42.3021C32.2705 42.109 32.8188 41.7891 33.0789 41.3516C33.4081 40.7976 33.4071 40.1344 33.0761 39.5774C32.745 39.0205 32.1617 38.7015 31.5192 38.7269C31.5105 38.7272 31.5017 38.7274 31.4929 38.7274C31.2415 38.7274 31.0055 38.7285 30.7825 38.7295C28.2769 38.74 27.239 38.7456 24.4942 37.1104L21.4337 35.287C19.6012 34.1953 18.0571 33.8236 16.1035 34.0043L8.76525 34.683V45.8748C11.756 46.0057 14.8684 46.616 17.8856 47.2086C22.8961 48.1924 28.077 49.2097 33.0653 48.1764C35.862 47.5971 45.5953 42.0692 47.3347 39.7825C47.8412 39.1164 47.9188 38.4635 47.5419 38.0356ZM6.66137 44.9758C6.66137 46.1127 5.73638 47.0377 4.59947 47.0377C3.46255 47.0377 2.53757 46.1127 2.53757 44.9758C2.53757 43.8389 3.46255 42.9139 4.59947 42.9139C5.73638 42.9139 6.66137 43.8389 6.66137 44.9758ZM5.27235 44.9758C5.27235 44.6048 4.97044 44.3029 4.59947 44.3029C4.2285 44.3029 3.92659 44.6048 3.92659 44.9758C3.92659 45.3468 4.2285 45.6487 4.59947 45.6487C4.97044 45.6487 5.27235 45.3468 5.27235 44.9758Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <a href="/video" className="service-btn">Read Details &nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item item-3">
                            <h4 className="service-text"><a href="/photography">Commercial Photography</a></h4>
                            <div className="service-thumb">
                                <div className="overlay-color"></div>
                                <div className="transparent-shape"><LazyLoadImage src="assets/img/shapes/service-shape.png" alt="shape"/></div>
                                <LazyLoadImage src={service3} alt="service"/>
                                <div className="service-icon">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.0491 13.9814C22.483 12.8947 22.5755 11.6017 23.2903 10.6067C23.5142 10.2953 23.9481 10.2242 24.2596 10.4479C24.5711 10.6717 24.6422 11.1057 24.4184 11.4172C24.0113 11.984 23.9586 12.7206 24.281 13.3396C24.5998 13.9516 25.223 14.3291 25.9115 14.3291C25.9224 14.3291 25.9331 14.3287 25.9442 14.3289C26.3237 14.3289 26.6336 14.6341 26.6384 15.0147C26.6432 15.3983 26.3363 15.7131 25.9527 15.7178C25.9388 15.7179 25.9249 15.718 25.9111 15.718C24.7024 15.718 23.6086 15.0556 23.0491 13.9814ZM23.8549 24.1267C23.9952 24.1267 24.1369 24.0842 24.2595 23.9962C24.571 23.7724 24.6421 23.3384 24.4184 23.0269C24.0113 22.4601 23.9586 21.7233 24.2809 21.1043C24.5997 20.4923 25.2229 20.1148 25.9114 20.1148C25.9222 20.1148 25.9334 20.1151 25.9441 20.115C26.3235 20.115 26.6335 19.8098 26.6383 19.4292C26.6432 19.0457 26.3362 18.7308 25.9526 18.7261C24.731 18.7097 23.615 19.3761 23.0491 20.4626C22.4831 21.5492 22.5756 22.8422 23.2902 23.8373C23.426 24.0261 23.6389 24.1267 23.8549 24.1267ZM15.816 17.9867C16.1013 17.6902 16.4217 17.4343 16.7677 17.222C16.4217 17.0096 16.1012 16.7538 15.816 16.4572C14.5557 15.1466 14.1415 13.2647 14.7351 11.546C15.2591 10.029 16.5201 8.86887 18.0618 8.46199C18.1477 7.68821 18.3749 6.92801 18.7477 6.22656C19.619 4.58672 21.1396 3.44326 22.9442 3.05602C23.4347 1.96345 24.2972 1.04481 25.4164 0.506367C27.3348 -0.416341 29.6556 -0.0551947 31.2036 1.40348H34.5114C34.8431 1.40348 35.1286 1.63812 35.1928 1.96365L35.7204 4.6402L38.2529 5.69069L40.5201 4.17041C40.7954 3.98567 41.1633 4.02149 41.398 4.25613L44.9593 7.81729C45.1938 8.05183 45.2298 8.41963 45.0449 8.69525L43.5246 10.9623L44.5751 13.4948L47.2517 14.0225C47.5771 14.0867 47.8118 14.3722 47.8118 14.704V19.7402C47.8118 20.0719 47.5772 20.3574 47.2517 20.4216L44.5751 20.9492L43.5246 23.4818L45.0449 25.7489C45.2297 26.0243 45.1938 26.3921 44.9593 26.6268L41.3979 30.188C41.1634 30.4225 40.7955 30.4584 40.5201 30.2736L38.2529 28.7534L35.7204 29.8039L35.1928 32.4805C35.1286 32.8059 34.8431 33.0406 34.5114 33.0406H31.2034C30.2272 33.9605 28.9439 34.4442 27.6476 34.4443C26.8885 34.4443 26.1249 34.2786 25.4164 33.9376C24.2971 33.3992 23.4345 32.4805 22.944 31.3878C21.1398 31.0003 19.618 29.8557 18.7477 28.2175C18.3748 27.5159 18.1476 26.7554 18.0618 25.9814C16.5211 25.5746 15.2583 24.4125 14.7352 22.8981C14.1416 21.1794 14.5556 19.2974 15.816 17.9867ZM29.9713 17.222C30.8632 17.8762 31.4437 18.931 31.4437 20.1194V24.2619C31.6265 24.276 31.81 24.2834 31.9933 24.2834C35.887 24.2834 39.0548 21.1157 39.0548 17.222C39.0548 13.3282 35.887 10.1605 31.9933 10.1605C31.81 10.1605 31.6264 10.1679 31.4437 10.182V14.3245C31.4437 15.5129 30.8632 16.5677 29.9713 17.222ZM33.9404 2.7925H31.4437V8.79079C31.6267 8.77899 31.8101 8.77145 31.9933 8.77145C36.6529 8.77145 40.4438 12.5623 40.4438 17.222C40.4438 21.8816 36.6529 25.6725 31.9933 25.6725C31.81 25.6725 31.6267 25.6649 31.4437 25.6531V31.6514H33.9404L34.4296 29.1703C34.4746 28.9425 34.6304 28.7521 34.845 28.6632L38.0647 27.3277C38.2793 27.2387 38.5245 27.2629 38.7175 27.3924L40.8196 28.8019L43.5734 26.0482L42.1638 23.9462C42.0342 23.7532 42.01 23.5081 42.0991 23.2934L43.4346 20.0736C43.5235 19.8591 43.7139 19.7032 43.9417 19.6582L46.4228 19.169V15.2746L43.9417 14.7855C43.7139 14.7406 43.5235 14.5848 43.4346 14.3702L42.0991 11.1504C42.0101 10.9356 42.0343 10.6906 42.1638 10.4975L43.5734 8.39552L40.8196 5.64178L38.7175 7.05144C38.5245 7.18082 38.2793 7.20522 38.0647 7.11613L34.845 5.78058C34.6305 5.69159 34.4747 5.50129 34.4296 5.27339L33.9404 2.7925ZM16.8172 15.4945C17.3774 16.077 18.1268 16.4431 18.9305 16.5275H27.8518C29.0664 16.5275 30.0546 15.5393 30.0546 14.3246V8.68969C30.0546 7.28797 29.16 5.64565 27.5019 5.36278C27.1237 5.29829 26.8696 4.93943 26.934 4.56132C26.9985 4.18311 27.3578 3.92912 27.7355 3.99351C28.685 4.15553 29.4614 4.6142 30.0545 5.23033V2.24135C28.9287 1.32043 27.3425 1.12121 26.0185 1.75827C24.6078 2.43691 23.7531 3.94043 23.8915 5.4996C24.0299 7.05878 25.1361 8.38837 26.644 8.80796C27.0136 8.91074 27.2298 9.29372 27.127 9.6632C27.0241 10.0327 26.6413 10.249 26.2717 10.1461C24.2097 9.57232 22.697 7.75438 22.5078 5.62233C22.4781 5.28718 22.482 4.95382 22.5171 4.6265C21.4329 5.04043 20.5319 5.82821 19.974 6.87851C19.2549 8.23151 19.22 9.86471 19.8806 11.2472C20.0459 11.5932 19.8993 12.0079 19.5533 12.1733C19.4566 12.2194 19.3548 12.2412 19.2543 12.2412C18.9951 12.2412 18.7464 12.0955 18.6272 11.8459C18.334 11.2322 18.15 10.5799 18.0692 9.91729C17.1317 10.2757 16.3806 11.036 16.0477 11.9996C15.6252 13.2227 15.9203 14.5618 16.8172 15.4945ZM16.0479 22.4445C16.3803 23.4065 17.1322 24.1682 18.0694 24.5268C18.1501 23.8644 18.3342 23.2119 18.6274 22.5983C18.7928 22.2522 19.2076 22.1058 19.5535 22.271C19.8995 22.4363 20.0461 22.851 19.8808 23.197C19.2203 24.5795 19.2551 26.2127 19.9742 27.5655C20.5316 28.6147 21.4329 29.4032 22.5173 29.8175C22.4822 29.4902 22.4783 29.1569 22.508 28.8217C22.6971 26.6898 24.2097 24.8718 26.2719 24.2979C26.6416 24.1957 27.0243 24.4114 27.1272 24.7808C27.23 25.1504 27.0138 25.5333 26.6443 25.6362C25.1363 26.0557 24.03 27.3853 23.8917 28.9444C23.7532 30.5038 24.608 32.0072 26.0186 32.6858C27.3426 33.3226 28.9289 33.1237 30.0547 32.2028V29.2137C29.4616 29.8298 28.6852 30.2886 27.7356 30.4505C27.6962 30.4572 27.6568 30.4605 27.6179 30.4605C27.2857 30.4605 26.9919 30.2213 26.9342 29.8827C26.8697 29.5046 27.1239 29.1458 27.5021 29.0813C29.1601 28.7985 30.0547 27.1561 30.0547 25.7544V20.1195C30.0547 18.9049 29.0665 17.9167 27.8519 17.9167L27.848 17.9165H18.9351C18.1296 18.0001 17.3784 18.366 16.8173 18.9496C15.9204 19.8822 15.6254 21.2213 16.0479 22.4445ZM48.4403 40.6237C46.4952 43.1804 36.4885 48.886 33.3471 49.5368C31.7607 49.8654 30.1683 50 28.5778 50C24.8919 50 21.2125 49.2776 17.618 48.5717C14.522 47.9638 11.5856 47.3879 8.7203 47.2631C8.49855 48.428 7.47306 49.3117 6.24457 49.3117H1.1281C0.744536 49.3117 0.433594 49.0008 0.433594 48.6172V32.018C0.433594 31.6344 0.744536 31.3235 1.1281 31.3235H6.24457C7.44538 31.3235 8.45212 32.1678 8.70403 33.2937L15.9757 32.6213C18.2183 32.4143 20.0639 32.8542 22.1447 34.0938L25.2052 35.9172C27.6185 37.355 28.3502 37.3507 30.7762 37.3407C30.9974 37.3396 31.2315 37.3386 31.4805 37.3386C32.6339 37.2993 33.6777 37.8708 34.2702 38.8681C34.7374 39.6543 34.8367 40.5589 34.5713 41.3946C37.9089 40.2018 42.1105 38.2414 44.5395 36.8389C46.2793 35.8347 47.8245 36.2551 48.5843 37.1175C49.4066 38.0513 49.3501 39.4276 48.4403 40.6237ZM7.37632 33.8443C7.37632 33.2203 6.86863 32.7126 6.24467 32.7126H1.82262V47.9228H6.24457C6.86854 47.9228 7.37622 47.4151 7.37622 46.7912L7.37632 33.8443ZM47.5419 38.0356C47.1566 37.598 46.2934 37.4304 45.234 38.0419C42.0602 39.8743 34.333 43.4702 30.8791 43.8095L30.8789 43.807C30.4325 43.8601 29.9586 43.8854 29.4667 43.8854C26.2248 43.8854 22.2338 42.8169 20.631 41.7837C20.3086 41.5759 20.2156 41.1461 20.4235 40.8236C20.6314 40.5014 21.0609 40.4083 21.3836 40.6162C23.1192 41.735 28.5421 42.9861 31.4491 42.3021C32.2705 42.109 32.8188 41.7891 33.0789 41.3516C33.4081 40.7976 33.4071 40.1344 33.0761 39.5774C32.745 39.0205 32.1617 38.7015 31.5192 38.7269C31.5105 38.7272 31.5017 38.7274 31.4929 38.7274C31.2415 38.7274 31.0055 38.7285 30.7825 38.7295C28.2769 38.74 27.239 38.7456 24.4942 37.1104L21.4337 35.287C19.6012 34.1953 18.0571 33.8236 16.1035 34.0043L8.76525 34.683V45.8748C11.756 46.0057 14.8684 46.616 17.8856 47.2086C22.8961 48.1924 28.077 49.2097 33.0653 48.1764C35.862 47.5971 45.5953 42.0692 47.3347 39.7825C47.8412 39.1164 47.9188 38.4635 47.5419 38.0356ZM6.66137 44.9758C6.66137 46.1127 5.73638 47.0377 4.59947 47.0377C3.46255 47.0377 2.53757 46.1127 2.53757 44.9758C2.53757 43.8389 3.46255 42.9139 4.59947 42.9139C5.73638 42.9139 6.66137 43.8389 6.66137 44.9758ZM5.27235 44.9758C5.27235 44.6048 4.97044 44.3029 4.59947 44.3029C4.2285 44.3029 3.92659 44.6048 3.92659 44.9758C3.92659 45.3468 4.2285 45.6487 4.59947 45.6487C4.97044 45.6487 5.27235 45.3468 5.27235 44.9758Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <a href="/photography" className="service-btn">Read Details &nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <h4 className="service-text"><a href="/arVrvideo"> AR, VR & 360&deg;<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></h4>
                            <div className="service-thumb">
                                <div className="overlay-color"></div>
                                <div className="transparent-shape"><LazyLoadImage src={serviceshp} alt="shape"/></div>
                                <LazyLoadImage src={service4} alt="service"/>
                                <div className="service-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.0491 13.9814C22.483 12.8947 22.5755 11.6017 23.2903 10.6067C23.5142 10.2953 23.9481 10.2242 24.2596 10.4479C24.5711 10.6717 24.6422 11.1057 24.4184 11.4172C24.0113 11.984 23.9586 12.7206 24.281 13.3396C24.5998 13.9516 25.223 14.3291 25.9115 14.3291C25.9224 14.3291 25.9331 14.3287 25.9442 14.3289C26.3237 14.3289 26.6336 14.6341 26.6384 15.0147C26.6432 15.3983 26.3363 15.7131 25.9527 15.7178C25.9388 15.7179 25.9249 15.718 25.9111 15.718C24.7024 15.718 23.6086 15.0556 23.0491 13.9814ZM23.8549 24.1267C23.9952 24.1267 24.1369 24.0842 24.2595 23.9962C24.571 23.7724 24.6421 23.3384 24.4184 23.0269C24.0113 22.4601 23.9586 21.7233 24.2809 21.1043C24.5997 20.4923 25.2229 20.1148 25.9114 20.1148C25.9222 20.1148 25.9334 20.1151 25.9441 20.115C26.3235 20.115 26.6335 19.8098 26.6383 19.4292C26.6432 19.0457 26.3362 18.7308 25.9526 18.7261C24.731 18.7097 23.615 19.3761 23.0491 20.4626C22.4831 21.5492 22.5756 22.8422 23.2902 23.8373C23.426 24.0261 23.6389 24.1267 23.8549 24.1267ZM15.816 17.9867C16.1013 17.6902 16.4217 17.4343 16.7677 17.222C16.4217 17.0096 16.1012 16.7538 15.816 16.4572C14.5557 15.1466 14.1415 13.2647 14.7351 11.546C15.2591 10.029 16.5201 8.86887 18.0618 8.46199C18.1477 7.68821 18.3749 6.92801 18.7477 6.22656C19.619 4.58672 21.1396 3.44326 22.9442 3.05602C23.4347 1.96345 24.2972 1.04481 25.4164 0.506367C27.3348 -0.416341 29.6556 -0.0551947 31.2036 1.40348H34.5114C34.8431 1.40348 35.1286 1.63812 35.1928 1.96365L35.7204 4.6402L38.2529 5.69069L40.5201 4.17041C40.7954 3.98567 41.1633 4.02149 41.398 4.25613L44.9593 7.81729C45.1938 8.05183 45.2298 8.41963 45.0449 8.69525L43.5246 10.9623L44.5751 13.4948L47.2517 14.0225C47.5771 14.0867 47.8118 14.3722 47.8118 14.704V19.7402C47.8118 20.0719 47.5772 20.3574 47.2517 20.4216L44.5751 20.9492L43.5246 23.4818L45.0449 25.7489C45.2297 26.0243 45.1938 26.3921 44.9593 26.6268L41.3979 30.188C41.1634 30.4225 40.7955 30.4584 40.5201 30.2736L38.2529 28.7534L35.7204 29.8039L35.1928 32.4805C35.1286 32.8059 34.8431 33.0406 34.5114 33.0406H31.2034C30.2272 33.9605 28.9439 34.4442 27.6476 34.4443C26.8885 34.4443 26.1249 34.2786 25.4164 33.9376C24.2971 33.3992 23.4345 32.4805 22.944 31.3878C21.1398 31.0003 19.618 29.8557 18.7477 28.2175C18.3748 27.5159 18.1476 26.7554 18.0618 25.9814C16.5211 25.5746 15.2583 24.4125 14.7352 22.8981C14.1416 21.1794 14.5556 19.2974 15.816 17.9867ZM29.9713 17.222C30.8632 17.8762 31.4437 18.931 31.4437 20.1194V24.2619C31.6265 24.276 31.81 24.2834 31.9933 24.2834C35.887 24.2834 39.0548 21.1157 39.0548 17.222C39.0548 13.3282 35.887 10.1605 31.9933 10.1605C31.81 10.1605 31.6264 10.1679 31.4437 10.182V14.3245C31.4437 15.5129 30.8632 16.5677 29.9713 17.222ZM33.9404 2.7925H31.4437V8.79079C31.6267 8.77899 31.8101 8.77145 31.9933 8.77145C36.6529 8.77145 40.4438 12.5623 40.4438 17.222C40.4438 21.8816 36.6529 25.6725 31.9933 25.6725C31.81 25.6725 31.6267 25.6649 31.4437 25.6531V31.6514H33.9404L34.4296 29.1703C34.4746 28.9425 34.6304 28.7521 34.845 28.6632L38.0647 27.3277C38.2793 27.2387 38.5245 27.2629 38.7175 27.3924L40.8196 28.8019L43.5734 26.0482L42.1638 23.9462C42.0342 23.7532 42.01 23.5081 42.0991 23.2934L43.4346 20.0736C43.5235 19.8591 43.7139 19.7032 43.9417 19.6582L46.4228 19.169V15.2746L43.9417 14.7855C43.7139 14.7406 43.5235 14.5848 43.4346 14.3702L42.0991 11.1504C42.0101 10.9356 42.0343 10.6906 42.1638 10.4975L43.5734 8.39552L40.8196 5.64178L38.7175 7.05144C38.5245 7.18082 38.2793 7.20522 38.0647 7.11613L34.845 5.78058C34.6305 5.69159 34.4747 5.50129 34.4296 5.27339L33.9404 2.7925ZM16.8172 15.4945C17.3774 16.077 18.1268 16.4431 18.9305 16.5275H27.8518C29.0664 16.5275 30.0546 15.5393 30.0546 14.3246V8.68969C30.0546 7.28797 29.16 5.64565 27.5019 5.36278C27.1237 5.29829 26.8696 4.93943 26.934 4.56132C26.9985 4.18311 27.3578 3.92912 27.7355 3.99351C28.685 4.15553 29.4614 4.6142 30.0545 5.23033V2.24135C28.9287 1.32043 27.3425 1.12121 26.0185 1.75827C24.6078 2.43691 23.7531 3.94043 23.8915 5.4996C24.0299 7.05878 25.1361 8.38837 26.644 8.80796C27.0136 8.91074 27.2298 9.29372 27.127 9.6632C27.0241 10.0327 26.6413 10.249 26.2717 10.1461C24.2097 9.57232 22.697 7.75438 22.5078 5.62233C22.4781 5.28718 22.482 4.95382 22.5171 4.6265C21.4329 5.04043 20.5319 5.82821 19.974 6.87851C19.2549 8.23151 19.22 9.86471 19.8806 11.2472C20.0459 11.5932 19.8993 12.0079 19.5533 12.1733C19.4566 12.2194 19.3548 12.2412 19.2543 12.2412C18.9951 12.2412 18.7464 12.0955 18.6272 11.8459C18.334 11.2322 18.15 10.5799 18.0692 9.91729C17.1317 10.2757 16.3806 11.036 16.0477 11.9996C15.6252 13.2227 15.9203 14.5618 16.8172 15.4945ZM16.0479 22.4445C16.3803 23.4065 17.1322 24.1682 18.0694 24.5268C18.1501 23.8644 18.3342 23.2119 18.6274 22.5983C18.7928 22.2522 19.2076 22.1058 19.5535 22.271C19.8995 22.4363 20.0461 22.851 19.8808 23.197C19.2203 24.5795 19.2551 26.2127 19.9742 27.5655C20.5316 28.6147 21.4329 29.4032 22.5173 29.8175C22.4822 29.4902 22.4783 29.1569 22.508 28.8217C22.6971 26.6898 24.2097 24.8718 26.2719 24.2979C26.6416 24.1957 27.0243 24.4114 27.1272 24.7808C27.23 25.1504 27.0138 25.5333 26.6443 25.6362C25.1363 26.0557 24.03 27.3853 23.8917 28.9444C23.7532 30.5038 24.608 32.0072 26.0186 32.6858C27.3426 33.3226 28.9289 33.1237 30.0547 32.2028V29.2137C29.4616 29.8298 28.6852 30.2886 27.7356 30.4505C27.6962 30.4572 27.6568 30.4605 27.6179 30.4605C27.2857 30.4605 26.9919 30.2213 26.9342 29.8827C26.8697 29.5046 27.1239 29.1458 27.5021 29.0813C29.1601 28.7985 30.0547 27.1561 30.0547 25.7544V20.1195C30.0547 18.9049 29.0665 17.9167 27.8519 17.9167L27.848 17.9165H18.9351C18.1296 18.0001 17.3784 18.366 16.8173 18.9496C15.9204 19.8822 15.6254 21.2213 16.0479 22.4445ZM48.4403 40.6237C46.4952 43.1804 36.4885 48.886 33.3471 49.5368C31.7607 49.8654 30.1683 50 28.5778 50C24.8919 50 21.2125 49.2776 17.618 48.5717C14.522 47.9638 11.5856 47.3879 8.7203 47.2631C8.49855 48.428 7.47306 49.3117 6.24457 49.3117H1.1281C0.744536 49.3117 0.433594 49.0008 0.433594 48.6172V32.018C0.433594 31.6344 0.744536 31.3235 1.1281 31.3235H6.24457C7.44538 31.3235 8.45212 32.1678 8.70403 33.2937L15.9757 32.6213C18.2183 32.4143 20.0639 32.8542 22.1447 34.0938L25.2052 35.9172C27.6185 37.355 28.3502 37.3507 30.7762 37.3407C30.9974 37.3396 31.2315 37.3386 31.4805 37.3386C32.6339 37.2993 33.6777 37.8708 34.2702 38.8681C34.7374 39.6543 34.8367 40.5589 34.5713 41.3946C37.9089 40.2018 42.1105 38.2414 44.5395 36.8389C46.2793 35.8347 47.8245 36.2551 48.5843 37.1175C49.4066 38.0513 49.3501 39.4276 48.4403 40.6237ZM7.37632 33.8443C7.37632 33.2203 6.86863 32.7126 6.24467 32.7126H1.82262V47.9228H6.24457C6.86854 47.9228 7.37622 47.4151 7.37622 46.7912L7.37632 33.8443ZM47.5419 38.0356C47.1566 37.598 46.2934 37.4304 45.234 38.0419C42.0602 39.8743 34.333 43.4702 30.8791 43.8095L30.8789 43.807C30.4325 43.8601 29.9586 43.8854 29.4667 43.8854C26.2248 43.8854 22.2338 42.8169 20.631 41.7837C20.3086 41.5759 20.2156 41.1461 20.4235 40.8236C20.6314 40.5014 21.0609 40.4083 21.3836 40.6162C23.1192 41.735 28.5421 42.9861 31.4491 42.3021C32.2705 42.109 32.8188 41.7891 33.0789 41.3516C33.4081 40.7976 33.4071 40.1344 33.0761 39.5774C32.745 39.0205 32.1617 38.7015 31.5192 38.7269C31.5105 38.7272 31.5017 38.7274 31.4929 38.7274C31.2415 38.7274 31.0055 38.7285 30.7825 38.7295C28.2769 38.74 27.239 38.7456 24.4942 37.1104L21.4337 35.287C19.6012 34.1953 18.0571 33.8236 16.1035 34.0043L8.76525 34.683V45.8748C11.756 46.0057 14.8684 46.616 17.8856 47.2086C22.8961 48.1924 28.077 49.2097 33.0653 48.1764C35.862 47.5971 45.5953 42.0692 47.3347 39.7825C47.8412 39.1164 47.9188 38.4635 47.5419 38.0356ZM6.66137 44.9758C6.66137 46.1127 5.73638 47.0377 4.59947 47.0377C3.46255 47.0377 2.53757 46.1127 2.53757 44.9758C2.53757 43.8389 3.46255 42.9139 4.59947 42.9139C5.73638 42.9139 6.66137 43.8389 6.66137 44.9758ZM5.27235 44.9758C5.27235 44.6048 4.97044 44.3029 4.59947 44.3029C4.2285 44.3029 3.92659 44.6048 3.92659 44.9758C3.92659 45.3468 4.2285 45.6487 4.59947 45.6487C4.97044 45.6487 5.27235 45.3468 5.27235 44.9758Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <a href="/arVrvideo" className="service-btn">Read Details &nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item md-pb-30">
                            <h4 className="service-text"><a href="/arVrvideo"> Aerial<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a></h4>
                            <div className="service-thumb">
                                <div className="overlay-color"></div>
                                <div className="transparent-shape"><LazyLoadImage src={serviceshp} alt="shape"/></div>
                                <LazyLoadImage src={service5} alt="service"/>
                                <div className="service-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.0491 13.9814C22.483 12.8947 22.5755 11.6017 23.2903 10.6067C23.5142 10.2953 23.9481 10.2242 24.2596 10.4479C24.5711 10.6717 24.6422 11.1057 24.4184 11.4172C24.0113 11.984 23.9586 12.7206 24.281 13.3396C24.5998 13.9516 25.223 14.3291 25.9115 14.3291C25.9224 14.3291 25.9331 14.3287 25.9442 14.3289C26.3237 14.3289 26.6336 14.6341 26.6384 15.0147C26.6432 15.3983 26.3363 15.7131 25.9527 15.7178C25.9388 15.7179 25.9249 15.718 25.9111 15.718C24.7024 15.718 23.6086 15.0556 23.0491 13.9814ZM23.8549 24.1267C23.9952 24.1267 24.1369 24.0842 24.2595 23.9962C24.571 23.7724 24.6421 23.3384 24.4184 23.0269C24.0113 22.4601 23.9586 21.7233 24.2809 21.1043C24.5997 20.4923 25.2229 20.1148 25.9114 20.1148C25.9222 20.1148 25.9334 20.1151 25.9441 20.115C26.3235 20.115 26.6335 19.8098 26.6383 19.4292C26.6432 19.0457 26.3362 18.7308 25.9526 18.7261C24.731 18.7097 23.615 19.3761 23.0491 20.4626C22.4831 21.5492 22.5756 22.8422 23.2902 23.8373C23.426 24.0261 23.6389 24.1267 23.8549 24.1267ZM15.816 17.9867C16.1013 17.6902 16.4217 17.4343 16.7677 17.222C16.4217 17.0096 16.1012 16.7538 15.816 16.4572C14.5557 15.1466 14.1415 13.2647 14.7351 11.546C15.2591 10.029 16.5201 8.86887 18.0618 8.46199C18.1477 7.68821 18.3749 6.92801 18.7477 6.22656C19.619 4.58672 21.1396 3.44326 22.9442 3.05602C23.4347 1.96345 24.2972 1.04481 25.4164 0.506367C27.3348 -0.416341 29.6556 -0.0551947 31.2036 1.40348H34.5114C34.8431 1.40348 35.1286 1.63812 35.1928 1.96365L35.7204 4.6402L38.2529 5.69069L40.5201 4.17041C40.7954 3.98567 41.1633 4.02149 41.398 4.25613L44.9593 7.81729C45.1938 8.05183 45.2298 8.41963 45.0449 8.69525L43.5246 10.9623L44.5751 13.4948L47.2517 14.0225C47.5771 14.0867 47.8118 14.3722 47.8118 14.704V19.7402C47.8118 20.0719 47.5772 20.3574 47.2517 20.4216L44.5751 20.9492L43.5246 23.4818L45.0449 25.7489C45.2297 26.0243 45.1938 26.3921 44.9593 26.6268L41.3979 30.188C41.1634 30.4225 40.7955 30.4584 40.5201 30.2736L38.2529 28.7534L35.7204 29.8039L35.1928 32.4805C35.1286 32.8059 34.8431 33.0406 34.5114 33.0406H31.2034C30.2272 33.9605 28.9439 34.4442 27.6476 34.4443C26.8885 34.4443 26.1249 34.2786 25.4164 33.9376C24.2971 33.3992 23.4345 32.4805 22.944 31.3878C21.1398 31.0003 19.618 29.8557 18.7477 28.2175C18.3748 27.5159 18.1476 26.7554 18.0618 25.9814C16.5211 25.5746 15.2583 24.4125 14.7352 22.8981C14.1416 21.1794 14.5556 19.2974 15.816 17.9867ZM29.9713 17.222C30.8632 17.8762 31.4437 18.931 31.4437 20.1194V24.2619C31.6265 24.276 31.81 24.2834 31.9933 24.2834C35.887 24.2834 39.0548 21.1157 39.0548 17.222C39.0548 13.3282 35.887 10.1605 31.9933 10.1605C31.81 10.1605 31.6264 10.1679 31.4437 10.182V14.3245C31.4437 15.5129 30.8632 16.5677 29.9713 17.222ZM33.9404 2.7925H31.4437V8.79079C31.6267 8.77899 31.8101 8.77145 31.9933 8.77145C36.6529 8.77145 40.4438 12.5623 40.4438 17.222C40.4438 21.8816 36.6529 25.6725 31.9933 25.6725C31.81 25.6725 31.6267 25.6649 31.4437 25.6531V31.6514H33.9404L34.4296 29.1703C34.4746 28.9425 34.6304 28.7521 34.845 28.6632L38.0647 27.3277C38.2793 27.2387 38.5245 27.2629 38.7175 27.3924L40.8196 28.8019L43.5734 26.0482L42.1638 23.9462C42.0342 23.7532 42.01 23.5081 42.0991 23.2934L43.4346 20.0736C43.5235 19.8591 43.7139 19.7032 43.9417 19.6582L46.4228 19.169V15.2746L43.9417 14.7855C43.7139 14.7406 43.5235 14.5848 43.4346 14.3702L42.0991 11.1504C42.0101 10.9356 42.0343 10.6906 42.1638 10.4975L43.5734 8.39552L40.8196 5.64178L38.7175 7.05144C38.5245 7.18082 38.2793 7.20522 38.0647 7.11613L34.845 5.78058C34.6305 5.69159 34.4747 5.50129 34.4296 5.27339L33.9404 2.7925ZM16.8172 15.4945C17.3774 16.077 18.1268 16.4431 18.9305 16.5275H27.8518C29.0664 16.5275 30.0546 15.5393 30.0546 14.3246V8.68969C30.0546 7.28797 29.16 5.64565 27.5019 5.36278C27.1237 5.29829 26.8696 4.93943 26.934 4.56132C26.9985 4.18311 27.3578 3.92912 27.7355 3.99351C28.685 4.15553 29.4614 4.6142 30.0545 5.23033V2.24135C28.9287 1.32043 27.3425 1.12121 26.0185 1.75827C24.6078 2.43691 23.7531 3.94043 23.8915 5.4996C24.0299 7.05878 25.1361 8.38837 26.644 8.80796C27.0136 8.91074 27.2298 9.29372 27.127 9.6632C27.0241 10.0327 26.6413 10.249 26.2717 10.1461C24.2097 9.57232 22.697 7.75438 22.5078 5.62233C22.4781 5.28718 22.482 4.95382 22.5171 4.6265C21.4329 5.04043 20.5319 5.82821 19.974 6.87851C19.2549 8.23151 19.22 9.86471 19.8806 11.2472C20.0459 11.5932 19.8993 12.0079 19.5533 12.1733C19.4566 12.2194 19.3548 12.2412 19.2543 12.2412C18.9951 12.2412 18.7464 12.0955 18.6272 11.8459C18.334 11.2322 18.15 10.5799 18.0692 9.91729C17.1317 10.2757 16.3806 11.036 16.0477 11.9996C15.6252 13.2227 15.9203 14.5618 16.8172 15.4945ZM16.0479 22.4445C16.3803 23.4065 17.1322 24.1682 18.0694 24.5268C18.1501 23.8644 18.3342 23.2119 18.6274 22.5983C18.7928 22.2522 19.2076 22.1058 19.5535 22.271C19.8995 22.4363 20.0461 22.851 19.8808 23.197C19.2203 24.5795 19.2551 26.2127 19.9742 27.5655C20.5316 28.6147 21.4329 29.4032 22.5173 29.8175C22.4822 29.4902 22.4783 29.1569 22.508 28.8217C22.6971 26.6898 24.2097 24.8718 26.2719 24.2979C26.6416 24.1957 27.0243 24.4114 27.1272 24.7808C27.23 25.1504 27.0138 25.5333 26.6443 25.6362C25.1363 26.0557 24.03 27.3853 23.8917 28.9444C23.7532 30.5038 24.608 32.0072 26.0186 32.6858C27.3426 33.3226 28.9289 33.1237 30.0547 32.2028V29.2137C29.4616 29.8298 28.6852 30.2886 27.7356 30.4505C27.6962 30.4572 27.6568 30.4605 27.6179 30.4605C27.2857 30.4605 26.9919 30.2213 26.9342 29.8827C26.8697 29.5046 27.1239 29.1458 27.5021 29.0813C29.1601 28.7985 30.0547 27.1561 30.0547 25.7544V20.1195C30.0547 18.9049 29.0665 17.9167 27.8519 17.9167L27.848 17.9165H18.9351C18.1296 18.0001 17.3784 18.366 16.8173 18.9496C15.9204 19.8822 15.6254 21.2213 16.0479 22.4445ZM48.4403 40.6237C46.4952 43.1804 36.4885 48.886 33.3471 49.5368C31.7607 49.8654 30.1683 50 28.5778 50C24.8919 50 21.2125 49.2776 17.618 48.5717C14.522 47.9638 11.5856 47.3879 8.7203 47.2631C8.49855 48.428 7.47306 49.3117 6.24457 49.3117H1.1281C0.744536 49.3117 0.433594 49.0008 0.433594 48.6172V32.018C0.433594 31.6344 0.744536 31.3235 1.1281 31.3235H6.24457C7.44538 31.3235 8.45212 32.1678 8.70403 33.2937L15.9757 32.6213C18.2183 32.4143 20.0639 32.8542 22.1447 34.0938L25.2052 35.9172C27.6185 37.355 28.3502 37.3507 30.7762 37.3407C30.9974 37.3396 31.2315 37.3386 31.4805 37.3386C32.6339 37.2993 33.6777 37.8708 34.2702 38.8681C34.7374 39.6543 34.8367 40.5589 34.5713 41.3946C37.9089 40.2018 42.1105 38.2414 44.5395 36.8389C46.2793 35.8347 47.8245 36.2551 48.5843 37.1175C49.4066 38.0513 49.3501 39.4276 48.4403 40.6237ZM7.37632 33.8443C7.37632 33.2203 6.86863 32.7126 6.24467 32.7126H1.82262V47.9228H6.24457C6.86854 47.9228 7.37622 47.4151 7.37622 46.7912L7.37632 33.8443ZM47.5419 38.0356C47.1566 37.598 46.2934 37.4304 45.234 38.0419C42.0602 39.8743 34.333 43.4702 30.8791 43.8095L30.8789 43.807C30.4325 43.8601 29.9586 43.8854 29.4667 43.8854C26.2248 43.8854 22.2338 42.8169 20.631 41.7837C20.3086 41.5759 20.2156 41.1461 20.4235 40.8236C20.6314 40.5014 21.0609 40.4083 21.3836 40.6162C23.1192 41.735 28.5421 42.9861 31.4491 42.3021C32.2705 42.109 32.8188 41.7891 33.0789 41.3516C33.4081 40.7976 33.4071 40.1344 33.0761 39.5774C32.745 39.0205 32.1617 38.7015 31.5192 38.7269C31.5105 38.7272 31.5017 38.7274 31.4929 38.7274C31.2415 38.7274 31.0055 38.7285 30.7825 38.7295C28.2769 38.74 27.239 38.7456 24.4942 37.1104L21.4337 35.287C19.6012 34.1953 18.0571 33.8236 16.1035 34.0043L8.76525 34.683V45.8748C11.756 46.0057 14.8684 46.616 17.8856 47.2086C22.8961 48.1924 28.077 49.2097 33.0653 48.1764C35.862 47.5971 45.5953 42.0692 47.3347 39.7825C47.8412 39.1164 47.9188 38.4635 47.5419 38.0356ZM6.66137 44.9758C6.66137 46.1127 5.73638 47.0377 4.59947 47.0377C3.46255 47.0377 2.53757 46.1127 2.53757 44.9758C2.53757 43.8389 3.46255 42.9139 4.59947 42.9139C5.73638 42.9139 6.66137 43.8389 6.66137 44.9758ZM5.27235 44.9758C5.27235 44.6048 4.97044 44.3029 4.59947 44.3029C4.2285 44.3029 3.92659 44.6048 3.92659 44.9758C3.92659 45.3468 4.2285 45.6487 4.59947 45.6487C4.97044 45.6487 5.27235 45.3468 5.27235 44.9758Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <a href="/arVrvideo" className="service-btn">Read Details &nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item md-pb-30">
                            <h4 className="service-text"><a href="/aerialtmlps"> Timelapse <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></h4>
                            <div className="service-thumb">
                                <div className="overlay-color"></div>
                                <div className="transparent-shape"><LazyLoadImage src={serviceshp} alt="shape"/></div>
                                <LazyLoadImage src={service6} alt="service"/>
                                <div className="service-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.0491 13.9814C22.483 12.8947 22.5755 11.6017 23.2903 10.6067C23.5142 10.2953 23.9481 10.2242 24.2596 10.4479C24.5711 10.6717 24.6422 11.1057 24.4184 11.4172C24.0113 11.984 23.9586 12.7206 24.281 13.3396C24.5998 13.9516 25.223 14.3291 25.9115 14.3291C25.9224 14.3291 25.9331 14.3287 25.9442 14.3289C26.3237 14.3289 26.6336 14.6341 26.6384 15.0147C26.6432 15.3983 26.3363 15.7131 25.9527 15.7178C25.9388 15.7179 25.9249 15.718 25.9111 15.718C24.7024 15.718 23.6086 15.0556 23.0491 13.9814ZM23.8549 24.1267C23.9952 24.1267 24.1369 24.0842 24.2595 23.9962C24.571 23.7724 24.6421 23.3384 24.4184 23.0269C24.0113 22.4601 23.9586 21.7233 24.2809 21.1043C24.5997 20.4923 25.2229 20.1148 25.9114 20.1148C25.9222 20.1148 25.9334 20.1151 25.9441 20.115C26.3235 20.115 26.6335 19.8098 26.6383 19.4292C26.6432 19.0457 26.3362 18.7308 25.9526 18.7261C24.731 18.7097 23.615 19.3761 23.0491 20.4626C22.4831 21.5492 22.5756 22.8422 23.2902 23.8373C23.426 24.0261 23.6389 24.1267 23.8549 24.1267ZM15.816 17.9867C16.1013 17.6902 16.4217 17.4343 16.7677 17.222C16.4217 17.0096 16.1012 16.7538 15.816 16.4572C14.5557 15.1466 14.1415 13.2647 14.7351 11.546C15.2591 10.029 16.5201 8.86887 18.0618 8.46199C18.1477 7.68821 18.3749 6.92801 18.7477 6.22656C19.619 4.58672 21.1396 3.44326 22.9442 3.05602C23.4347 1.96345 24.2972 1.04481 25.4164 0.506367C27.3348 -0.416341 29.6556 -0.0551947 31.2036 1.40348H34.5114C34.8431 1.40348 35.1286 1.63812 35.1928 1.96365L35.7204 4.6402L38.2529 5.69069L40.5201 4.17041C40.7954 3.98567 41.1633 4.02149 41.398 4.25613L44.9593 7.81729C45.1938 8.05183 45.2298 8.41963 45.0449 8.69525L43.5246 10.9623L44.5751 13.4948L47.2517 14.0225C47.5771 14.0867 47.8118 14.3722 47.8118 14.704V19.7402C47.8118 20.0719 47.5772 20.3574 47.2517 20.4216L44.5751 20.9492L43.5246 23.4818L45.0449 25.7489C45.2297 26.0243 45.1938 26.3921 44.9593 26.6268L41.3979 30.188C41.1634 30.4225 40.7955 30.4584 40.5201 30.2736L38.2529 28.7534L35.7204 29.8039L35.1928 32.4805C35.1286 32.8059 34.8431 33.0406 34.5114 33.0406H31.2034C30.2272 33.9605 28.9439 34.4442 27.6476 34.4443C26.8885 34.4443 26.1249 34.2786 25.4164 33.9376C24.2971 33.3992 23.4345 32.4805 22.944 31.3878C21.1398 31.0003 19.618 29.8557 18.7477 28.2175C18.3748 27.5159 18.1476 26.7554 18.0618 25.9814C16.5211 25.5746 15.2583 24.4125 14.7352 22.8981C14.1416 21.1794 14.5556 19.2974 15.816 17.9867ZM29.9713 17.222C30.8632 17.8762 31.4437 18.931 31.4437 20.1194V24.2619C31.6265 24.276 31.81 24.2834 31.9933 24.2834C35.887 24.2834 39.0548 21.1157 39.0548 17.222C39.0548 13.3282 35.887 10.1605 31.9933 10.1605C31.81 10.1605 31.6264 10.1679 31.4437 10.182V14.3245C31.4437 15.5129 30.8632 16.5677 29.9713 17.222ZM33.9404 2.7925H31.4437V8.79079C31.6267 8.77899 31.8101 8.77145 31.9933 8.77145C36.6529 8.77145 40.4438 12.5623 40.4438 17.222C40.4438 21.8816 36.6529 25.6725 31.9933 25.6725C31.81 25.6725 31.6267 25.6649 31.4437 25.6531V31.6514H33.9404L34.4296 29.1703C34.4746 28.9425 34.6304 28.7521 34.845 28.6632L38.0647 27.3277C38.2793 27.2387 38.5245 27.2629 38.7175 27.3924L40.8196 28.8019L43.5734 26.0482L42.1638 23.9462C42.0342 23.7532 42.01 23.5081 42.0991 23.2934L43.4346 20.0736C43.5235 19.8591 43.7139 19.7032 43.9417 19.6582L46.4228 19.169V15.2746L43.9417 14.7855C43.7139 14.7406 43.5235 14.5848 43.4346 14.3702L42.0991 11.1504C42.0101 10.9356 42.0343 10.6906 42.1638 10.4975L43.5734 8.39552L40.8196 5.64178L38.7175 7.05144C38.5245 7.18082 38.2793 7.20522 38.0647 7.11613L34.845 5.78058C34.6305 5.69159 34.4747 5.50129 34.4296 5.27339L33.9404 2.7925ZM16.8172 15.4945C17.3774 16.077 18.1268 16.4431 18.9305 16.5275H27.8518C29.0664 16.5275 30.0546 15.5393 30.0546 14.3246V8.68969C30.0546 7.28797 29.16 5.64565 27.5019 5.36278C27.1237 5.29829 26.8696 4.93943 26.934 4.56132C26.9985 4.18311 27.3578 3.92912 27.7355 3.99351C28.685 4.15553 29.4614 4.6142 30.0545 5.23033V2.24135C28.9287 1.32043 27.3425 1.12121 26.0185 1.75827C24.6078 2.43691 23.7531 3.94043 23.8915 5.4996C24.0299 7.05878 25.1361 8.38837 26.644 8.80796C27.0136 8.91074 27.2298 9.29372 27.127 9.6632C27.0241 10.0327 26.6413 10.249 26.2717 10.1461C24.2097 9.57232 22.697 7.75438 22.5078 5.62233C22.4781 5.28718 22.482 4.95382 22.5171 4.6265C21.4329 5.04043 20.5319 5.82821 19.974 6.87851C19.2549 8.23151 19.22 9.86471 19.8806 11.2472C20.0459 11.5932 19.8993 12.0079 19.5533 12.1733C19.4566 12.2194 19.3548 12.2412 19.2543 12.2412C18.9951 12.2412 18.7464 12.0955 18.6272 11.8459C18.334 11.2322 18.15 10.5799 18.0692 9.91729C17.1317 10.2757 16.3806 11.036 16.0477 11.9996C15.6252 13.2227 15.9203 14.5618 16.8172 15.4945ZM16.0479 22.4445C16.3803 23.4065 17.1322 24.1682 18.0694 24.5268C18.1501 23.8644 18.3342 23.2119 18.6274 22.5983C18.7928 22.2522 19.2076 22.1058 19.5535 22.271C19.8995 22.4363 20.0461 22.851 19.8808 23.197C19.2203 24.5795 19.2551 26.2127 19.9742 27.5655C20.5316 28.6147 21.4329 29.4032 22.5173 29.8175C22.4822 29.4902 22.4783 29.1569 22.508 28.8217C22.6971 26.6898 24.2097 24.8718 26.2719 24.2979C26.6416 24.1957 27.0243 24.4114 27.1272 24.7808C27.23 25.1504 27.0138 25.5333 26.6443 25.6362C25.1363 26.0557 24.03 27.3853 23.8917 28.9444C23.7532 30.5038 24.608 32.0072 26.0186 32.6858C27.3426 33.3226 28.9289 33.1237 30.0547 32.2028V29.2137C29.4616 29.8298 28.6852 30.2886 27.7356 30.4505C27.6962 30.4572 27.6568 30.4605 27.6179 30.4605C27.2857 30.4605 26.9919 30.2213 26.9342 29.8827C26.8697 29.5046 27.1239 29.1458 27.5021 29.0813C29.1601 28.7985 30.0547 27.1561 30.0547 25.7544V20.1195C30.0547 18.9049 29.0665 17.9167 27.8519 17.9167L27.848 17.9165H18.9351C18.1296 18.0001 17.3784 18.366 16.8173 18.9496C15.9204 19.8822 15.6254 21.2213 16.0479 22.4445ZM48.4403 40.6237C46.4952 43.1804 36.4885 48.886 33.3471 49.5368C31.7607 49.8654 30.1683 50 28.5778 50C24.8919 50 21.2125 49.2776 17.618 48.5717C14.522 47.9638 11.5856 47.3879 8.7203 47.2631C8.49855 48.428 7.47306 49.3117 6.24457 49.3117H1.1281C0.744536 49.3117 0.433594 49.0008 0.433594 48.6172V32.018C0.433594 31.6344 0.744536 31.3235 1.1281 31.3235H6.24457C7.44538 31.3235 8.45212 32.1678 8.70403 33.2937L15.9757 32.6213C18.2183 32.4143 20.0639 32.8542 22.1447 34.0938L25.2052 35.9172C27.6185 37.355 28.3502 37.3507 30.7762 37.3407C30.9974 37.3396 31.2315 37.3386 31.4805 37.3386C32.6339 37.2993 33.6777 37.8708 34.2702 38.8681C34.7374 39.6543 34.8367 40.5589 34.5713 41.3946C37.9089 40.2018 42.1105 38.2414 44.5395 36.8389C46.2793 35.8347 47.8245 36.2551 48.5843 37.1175C49.4066 38.0513 49.3501 39.4276 48.4403 40.6237ZM7.37632 33.8443C7.37632 33.2203 6.86863 32.7126 6.24467 32.7126H1.82262V47.9228H6.24457C6.86854 47.9228 7.37622 47.4151 7.37622 46.7912L7.37632 33.8443ZM47.5419 38.0356C47.1566 37.598 46.2934 37.4304 45.234 38.0419C42.0602 39.8743 34.333 43.4702 30.8791 43.8095L30.8789 43.807C30.4325 43.8601 29.9586 43.8854 29.4667 43.8854C26.2248 43.8854 22.2338 42.8169 20.631 41.7837C20.3086 41.5759 20.2156 41.1461 20.4235 40.8236C20.6314 40.5014 21.0609 40.4083 21.3836 40.6162C23.1192 41.735 28.5421 42.9861 31.4491 42.3021C32.2705 42.109 32.8188 41.7891 33.0789 41.3516C33.4081 40.7976 33.4071 40.1344 33.0761 39.5774C32.745 39.0205 32.1617 38.7015 31.5192 38.7269C31.5105 38.7272 31.5017 38.7274 31.4929 38.7274C31.2415 38.7274 31.0055 38.7285 30.7825 38.7295C28.2769 38.74 27.239 38.7456 24.4942 37.1104L21.4337 35.287C19.6012 34.1953 18.0571 33.8236 16.1035 34.0043L8.76525 34.683V45.8748C11.756 46.0057 14.8684 46.616 17.8856 47.2086C22.8961 48.1924 28.077 49.2097 33.0653 48.1764C35.862 47.5971 45.5953 42.0692 47.3347 39.7825C47.8412 39.1164 47.9188 38.4635 47.5419 38.0356ZM6.66137 44.9758C6.66137 46.1127 5.73638 47.0377 4.59947 47.0377C3.46255 47.0377 2.53757 46.1127 2.53757 44.9758C2.53757 43.8389 3.46255 42.9139 4.59947 42.9139C5.73638 42.9139 6.66137 43.8389 6.66137 44.9758ZM5.27235 44.9758C5.27235 44.6048 4.97044 44.3029 4.59947 44.3029C4.2285 44.3029 3.92659 44.6048 3.92659 44.9758C3.92659 45.3468 4.2285 45.6487 4.59947 45.6487C4.97044 45.6487 5.27235 45.3468 5.27235 44.9758Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <a href="/aerialtmlps" className="service-btn">Read Details &nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item item-3">
                            <h4 className="service-text"><a href="/interactive"> E-Learning <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></h4>
                            <div className="service-thumb">
                                <div className="overlay-color"></div>
                                <div className="transparent-shape"><LazyLoadImage src={serviceshp} alt="shape"/></div>
                                <LazyLoadImage src={service7} alt="service"/>
                                <div className="service-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.0491 13.9814C22.483 12.8947 22.5755 11.6017 23.2903 10.6067C23.5142 10.2953 23.9481 10.2242 24.2596 10.4479C24.5711 10.6717 24.6422 11.1057 24.4184 11.4172C24.0113 11.984 23.9586 12.7206 24.281 13.3396C24.5998 13.9516 25.223 14.3291 25.9115 14.3291C25.9224 14.3291 25.9331 14.3287 25.9442 14.3289C26.3237 14.3289 26.6336 14.6341 26.6384 15.0147C26.6432 15.3983 26.3363 15.7131 25.9527 15.7178C25.9388 15.7179 25.9249 15.718 25.9111 15.718C24.7024 15.718 23.6086 15.0556 23.0491 13.9814ZM23.8549 24.1267C23.9952 24.1267 24.1369 24.0842 24.2595 23.9962C24.571 23.7724 24.6421 23.3384 24.4184 23.0269C24.0113 22.4601 23.9586 21.7233 24.2809 21.1043C24.5997 20.4923 25.2229 20.1148 25.9114 20.1148C25.9222 20.1148 25.9334 20.1151 25.9441 20.115C26.3235 20.115 26.6335 19.8098 26.6383 19.4292C26.6432 19.0457 26.3362 18.7308 25.9526 18.7261C24.731 18.7097 23.615 19.3761 23.0491 20.4626C22.4831 21.5492 22.5756 22.8422 23.2902 23.8373C23.426 24.0261 23.6389 24.1267 23.8549 24.1267ZM15.816 17.9867C16.1013 17.6902 16.4217 17.4343 16.7677 17.222C16.4217 17.0096 16.1012 16.7538 15.816 16.4572C14.5557 15.1466 14.1415 13.2647 14.7351 11.546C15.2591 10.029 16.5201 8.86887 18.0618 8.46199C18.1477 7.68821 18.3749 6.92801 18.7477 6.22656C19.619 4.58672 21.1396 3.44326 22.9442 3.05602C23.4347 1.96345 24.2972 1.04481 25.4164 0.506367C27.3348 -0.416341 29.6556 -0.0551947 31.2036 1.40348H34.5114C34.8431 1.40348 35.1286 1.63812 35.1928 1.96365L35.7204 4.6402L38.2529 5.69069L40.5201 4.17041C40.7954 3.98567 41.1633 4.02149 41.398 4.25613L44.9593 7.81729C45.1938 8.05183 45.2298 8.41963 45.0449 8.69525L43.5246 10.9623L44.5751 13.4948L47.2517 14.0225C47.5771 14.0867 47.8118 14.3722 47.8118 14.704V19.7402C47.8118 20.0719 47.5772 20.3574 47.2517 20.4216L44.5751 20.9492L43.5246 23.4818L45.0449 25.7489C45.2297 26.0243 45.1938 26.3921 44.9593 26.6268L41.3979 30.188C41.1634 30.4225 40.7955 30.4584 40.5201 30.2736L38.2529 28.7534L35.7204 29.8039L35.1928 32.4805C35.1286 32.8059 34.8431 33.0406 34.5114 33.0406H31.2034C30.2272 33.9605 28.9439 34.4442 27.6476 34.4443C26.8885 34.4443 26.1249 34.2786 25.4164 33.9376C24.2971 33.3992 23.4345 32.4805 22.944 31.3878C21.1398 31.0003 19.618 29.8557 18.7477 28.2175C18.3748 27.5159 18.1476 26.7554 18.0618 25.9814C16.5211 25.5746 15.2583 24.4125 14.7352 22.8981C14.1416 21.1794 14.5556 19.2974 15.816 17.9867ZM29.9713 17.222C30.8632 17.8762 31.4437 18.931 31.4437 20.1194V24.2619C31.6265 24.276 31.81 24.2834 31.9933 24.2834C35.887 24.2834 39.0548 21.1157 39.0548 17.222C39.0548 13.3282 35.887 10.1605 31.9933 10.1605C31.81 10.1605 31.6264 10.1679 31.4437 10.182V14.3245C31.4437 15.5129 30.8632 16.5677 29.9713 17.222ZM33.9404 2.7925H31.4437V8.79079C31.6267 8.77899 31.8101 8.77145 31.9933 8.77145C36.6529 8.77145 40.4438 12.5623 40.4438 17.222C40.4438 21.8816 36.6529 25.6725 31.9933 25.6725C31.81 25.6725 31.6267 25.6649 31.4437 25.6531V31.6514H33.9404L34.4296 29.1703C34.4746 28.9425 34.6304 28.7521 34.845 28.6632L38.0647 27.3277C38.2793 27.2387 38.5245 27.2629 38.7175 27.3924L40.8196 28.8019L43.5734 26.0482L42.1638 23.9462C42.0342 23.7532 42.01 23.5081 42.0991 23.2934L43.4346 20.0736C43.5235 19.8591 43.7139 19.7032 43.9417 19.6582L46.4228 19.169V15.2746L43.9417 14.7855C43.7139 14.7406 43.5235 14.5848 43.4346 14.3702L42.0991 11.1504C42.0101 10.9356 42.0343 10.6906 42.1638 10.4975L43.5734 8.39552L40.8196 5.64178L38.7175 7.05144C38.5245 7.18082 38.2793 7.20522 38.0647 7.11613L34.845 5.78058C34.6305 5.69159 34.4747 5.50129 34.4296 5.27339L33.9404 2.7925ZM16.8172 15.4945C17.3774 16.077 18.1268 16.4431 18.9305 16.5275H27.8518C29.0664 16.5275 30.0546 15.5393 30.0546 14.3246V8.68969C30.0546 7.28797 29.16 5.64565 27.5019 5.36278C27.1237 5.29829 26.8696 4.93943 26.934 4.56132C26.9985 4.18311 27.3578 3.92912 27.7355 3.99351C28.685 4.15553 29.4614 4.6142 30.0545 5.23033V2.24135C28.9287 1.32043 27.3425 1.12121 26.0185 1.75827C24.6078 2.43691 23.7531 3.94043 23.8915 5.4996C24.0299 7.05878 25.1361 8.38837 26.644 8.80796C27.0136 8.91074 27.2298 9.29372 27.127 9.6632C27.0241 10.0327 26.6413 10.249 26.2717 10.1461C24.2097 9.57232 22.697 7.75438 22.5078 5.62233C22.4781 5.28718 22.482 4.95382 22.5171 4.6265C21.4329 5.04043 20.5319 5.82821 19.974 6.87851C19.2549 8.23151 19.22 9.86471 19.8806 11.2472C20.0459 11.5932 19.8993 12.0079 19.5533 12.1733C19.4566 12.2194 19.3548 12.2412 19.2543 12.2412C18.9951 12.2412 18.7464 12.0955 18.6272 11.8459C18.334 11.2322 18.15 10.5799 18.0692 9.91729C17.1317 10.2757 16.3806 11.036 16.0477 11.9996C15.6252 13.2227 15.9203 14.5618 16.8172 15.4945ZM16.0479 22.4445C16.3803 23.4065 17.1322 24.1682 18.0694 24.5268C18.1501 23.8644 18.3342 23.2119 18.6274 22.5983C18.7928 22.2522 19.2076 22.1058 19.5535 22.271C19.8995 22.4363 20.0461 22.851 19.8808 23.197C19.2203 24.5795 19.2551 26.2127 19.9742 27.5655C20.5316 28.6147 21.4329 29.4032 22.5173 29.8175C22.4822 29.4902 22.4783 29.1569 22.508 28.8217C22.6971 26.6898 24.2097 24.8718 26.2719 24.2979C26.6416 24.1957 27.0243 24.4114 27.1272 24.7808C27.23 25.1504 27.0138 25.5333 26.6443 25.6362C25.1363 26.0557 24.03 27.3853 23.8917 28.9444C23.7532 30.5038 24.608 32.0072 26.0186 32.6858C27.3426 33.3226 28.9289 33.1237 30.0547 32.2028V29.2137C29.4616 29.8298 28.6852 30.2886 27.7356 30.4505C27.6962 30.4572 27.6568 30.4605 27.6179 30.4605C27.2857 30.4605 26.9919 30.2213 26.9342 29.8827C26.8697 29.5046 27.1239 29.1458 27.5021 29.0813C29.1601 28.7985 30.0547 27.1561 30.0547 25.7544V20.1195C30.0547 18.9049 29.0665 17.9167 27.8519 17.9167L27.848 17.9165H18.9351C18.1296 18.0001 17.3784 18.366 16.8173 18.9496C15.9204 19.8822 15.6254 21.2213 16.0479 22.4445ZM48.4403 40.6237C46.4952 43.1804 36.4885 48.886 33.3471 49.5368C31.7607 49.8654 30.1683 50 28.5778 50C24.8919 50 21.2125 49.2776 17.618 48.5717C14.522 47.9638 11.5856 47.3879 8.7203 47.2631C8.49855 48.428 7.47306 49.3117 6.24457 49.3117H1.1281C0.744536 49.3117 0.433594 49.0008 0.433594 48.6172V32.018C0.433594 31.6344 0.744536 31.3235 1.1281 31.3235H6.24457C7.44538 31.3235 8.45212 32.1678 8.70403 33.2937L15.9757 32.6213C18.2183 32.4143 20.0639 32.8542 22.1447 34.0938L25.2052 35.9172C27.6185 37.355 28.3502 37.3507 30.7762 37.3407C30.9974 37.3396 31.2315 37.3386 31.4805 37.3386C32.6339 37.2993 33.6777 37.8708 34.2702 38.8681C34.7374 39.6543 34.8367 40.5589 34.5713 41.3946C37.9089 40.2018 42.1105 38.2414 44.5395 36.8389C46.2793 35.8347 47.8245 36.2551 48.5843 37.1175C49.4066 38.0513 49.3501 39.4276 48.4403 40.6237ZM7.37632 33.8443C7.37632 33.2203 6.86863 32.7126 6.24467 32.7126H1.82262V47.9228H6.24457C6.86854 47.9228 7.37622 47.4151 7.37622 46.7912L7.37632 33.8443ZM47.5419 38.0356C47.1566 37.598 46.2934 37.4304 45.234 38.0419C42.0602 39.8743 34.333 43.4702 30.8791 43.8095L30.8789 43.807C30.4325 43.8601 29.9586 43.8854 29.4667 43.8854C26.2248 43.8854 22.2338 42.8169 20.631 41.7837C20.3086 41.5759 20.2156 41.1461 20.4235 40.8236C20.6314 40.5014 21.0609 40.4083 21.3836 40.6162C23.1192 41.735 28.5421 42.9861 31.4491 42.3021C32.2705 42.109 32.8188 41.7891 33.0789 41.3516C33.4081 40.7976 33.4071 40.1344 33.0761 39.5774C32.745 39.0205 32.1617 38.7015 31.5192 38.7269C31.5105 38.7272 31.5017 38.7274 31.4929 38.7274C31.2415 38.7274 31.0055 38.7285 30.7825 38.7295C28.2769 38.74 27.239 38.7456 24.4942 37.1104L21.4337 35.287C19.6012 34.1953 18.0571 33.8236 16.1035 34.0043L8.76525 34.683V45.8748C11.756 46.0057 14.8684 46.616 17.8856 47.2086C22.8961 48.1924 28.077 49.2097 33.0653 48.1764C35.862 47.5971 45.5953 42.0692 47.3347 39.7825C47.8412 39.1164 47.9188 38.4635 47.5419 38.0356ZM6.66137 44.9758C6.66137 46.1127 5.73638 47.0377 4.59947 47.0377C3.46255 47.0377 2.53757 46.1127 2.53757 44.9758C2.53757 43.8389 3.46255 42.9139 4.59947 42.9139C5.73638 42.9139 6.66137 43.8389 6.66137 44.9758ZM5.27235 44.9758C5.27235 44.6048 4.97044 44.3029 4.59947 44.3029C4.2285 44.3029 3.92659 44.6048 3.92659 44.9758C3.92659 45.3468 4.2285 45.6487 4.59947 45.6487C4.97044 45.6487 5.27235 45.3468 5.27235 44.9758Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <a href="/interactive" className="service-btn">Read Details &nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <h4 className="service-text"><a href="/interactive"> Educational Tutorials </a></h4>
                            <div className="service-thumb">
                                <div className="overlay-color"></div>
                                <div className="transparent-shape"><LazyLoadImage src={serviceshp} alt="shape"/></div>
                                <LazyLoadImage src={service8} alt="service"/>
                                <div className="service-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.0491 13.9814C22.483 12.8947 22.5755 11.6017 23.2903 10.6067C23.5142 10.2953 23.9481 10.2242 24.2596 10.4479C24.5711 10.6717 24.6422 11.1057 24.4184 11.4172C24.0113 11.984 23.9586 12.7206 24.281 13.3396C24.5998 13.9516 25.223 14.3291 25.9115 14.3291C25.9224 14.3291 25.9331 14.3287 25.9442 14.3289C26.3237 14.3289 26.6336 14.6341 26.6384 15.0147C26.6432 15.3983 26.3363 15.7131 25.9527 15.7178C25.9388 15.7179 25.9249 15.718 25.9111 15.718C24.7024 15.718 23.6086 15.0556 23.0491 13.9814ZM23.8549 24.1267C23.9952 24.1267 24.1369 24.0842 24.2595 23.9962C24.571 23.7724 24.6421 23.3384 24.4184 23.0269C24.0113 22.4601 23.9586 21.7233 24.2809 21.1043C24.5997 20.4923 25.2229 20.1148 25.9114 20.1148C25.9222 20.1148 25.9334 20.1151 25.9441 20.115C26.3235 20.115 26.6335 19.8098 26.6383 19.4292C26.6432 19.0457 26.3362 18.7308 25.9526 18.7261C24.731 18.7097 23.615 19.3761 23.0491 20.4626C22.4831 21.5492 22.5756 22.8422 23.2902 23.8373C23.426 24.0261 23.6389 24.1267 23.8549 24.1267ZM15.816 17.9867C16.1013 17.6902 16.4217 17.4343 16.7677 17.222C16.4217 17.0096 16.1012 16.7538 15.816 16.4572C14.5557 15.1466 14.1415 13.2647 14.7351 11.546C15.2591 10.029 16.5201 8.86887 18.0618 8.46199C18.1477 7.68821 18.3749 6.92801 18.7477 6.22656C19.619 4.58672 21.1396 3.44326 22.9442 3.05602C23.4347 1.96345 24.2972 1.04481 25.4164 0.506367C27.3348 -0.416341 29.6556 -0.0551947 31.2036 1.40348H34.5114C34.8431 1.40348 35.1286 1.63812 35.1928 1.96365L35.7204 4.6402L38.2529 5.69069L40.5201 4.17041C40.7954 3.98567 41.1633 4.02149 41.398 4.25613L44.9593 7.81729C45.1938 8.05183 45.2298 8.41963 45.0449 8.69525L43.5246 10.9623L44.5751 13.4948L47.2517 14.0225C47.5771 14.0867 47.8118 14.3722 47.8118 14.704V19.7402C47.8118 20.0719 47.5772 20.3574 47.2517 20.4216L44.5751 20.9492L43.5246 23.4818L45.0449 25.7489C45.2297 26.0243 45.1938 26.3921 44.9593 26.6268L41.3979 30.188C41.1634 30.4225 40.7955 30.4584 40.5201 30.2736L38.2529 28.7534L35.7204 29.8039L35.1928 32.4805C35.1286 32.8059 34.8431 33.0406 34.5114 33.0406H31.2034C30.2272 33.9605 28.9439 34.4442 27.6476 34.4443C26.8885 34.4443 26.1249 34.2786 25.4164 33.9376C24.2971 33.3992 23.4345 32.4805 22.944 31.3878C21.1398 31.0003 19.618 29.8557 18.7477 28.2175C18.3748 27.5159 18.1476 26.7554 18.0618 25.9814C16.5211 25.5746 15.2583 24.4125 14.7352 22.8981C14.1416 21.1794 14.5556 19.2974 15.816 17.9867ZM29.9713 17.222C30.8632 17.8762 31.4437 18.931 31.4437 20.1194V24.2619C31.6265 24.276 31.81 24.2834 31.9933 24.2834C35.887 24.2834 39.0548 21.1157 39.0548 17.222C39.0548 13.3282 35.887 10.1605 31.9933 10.1605C31.81 10.1605 31.6264 10.1679 31.4437 10.182V14.3245C31.4437 15.5129 30.8632 16.5677 29.9713 17.222ZM33.9404 2.7925H31.4437V8.79079C31.6267 8.77899 31.8101 8.77145 31.9933 8.77145C36.6529 8.77145 40.4438 12.5623 40.4438 17.222C40.4438 21.8816 36.6529 25.6725 31.9933 25.6725C31.81 25.6725 31.6267 25.6649 31.4437 25.6531V31.6514H33.9404L34.4296 29.1703C34.4746 28.9425 34.6304 28.7521 34.845 28.6632L38.0647 27.3277C38.2793 27.2387 38.5245 27.2629 38.7175 27.3924L40.8196 28.8019L43.5734 26.0482L42.1638 23.9462C42.0342 23.7532 42.01 23.5081 42.0991 23.2934L43.4346 20.0736C43.5235 19.8591 43.7139 19.7032 43.9417 19.6582L46.4228 19.169V15.2746L43.9417 14.7855C43.7139 14.7406 43.5235 14.5848 43.4346 14.3702L42.0991 11.1504C42.0101 10.9356 42.0343 10.6906 42.1638 10.4975L43.5734 8.39552L40.8196 5.64178L38.7175 7.05144C38.5245 7.18082 38.2793 7.20522 38.0647 7.11613L34.845 5.78058C34.6305 5.69159 34.4747 5.50129 34.4296 5.27339L33.9404 2.7925ZM16.8172 15.4945C17.3774 16.077 18.1268 16.4431 18.9305 16.5275H27.8518C29.0664 16.5275 30.0546 15.5393 30.0546 14.3246V8.68969C30.0546 7.28797 29.16 5.64565 27.5019 5.36278C27.1237 5.29829 26.8696 4.93943 26.934 4.56132C26.9985 4.18311 27.3578 3.92912 27.7355 3.99351C28.685 4.15553 29.4614 4.6142 30.0545 5.23033V2.24135C28.9287 1.32043 27.3425 1.12121 26.0185 1.75827C24.6078 2.43691 23.7531 3.94043 23.8915 5.4996C24.0299 7.05878 25.1361 8.38837 26.644 8.80796C27.0136 8.91074 27.2298 9.29372 27.127 9.6632C27.0241 10.0327 26.6413 10.249 26.2717 10.1461C24.2097 9.57232 22.697 7.75438 22.5078 5.62233C22.4781 5.28718 22.482 4.95382 22.5171 4.6265C21.4329 5.04043 20.5319 5.82821 19.974 6.87851C19.2549 8.23151 19.22 9.86471 19.8806 11.2472C20.0459 11.5932 19.8993 12.0079 19.5533 12.1733C19.4566 12.2194 19.3548 12.2412 19.2543 12.2412C18.9951 12.2412 18.7464 12.0955 18.6272 11.8459C18.334 11.2322 18.15 10.5799 18.0692 9.91729C17.1317 10.2757 16.3806 11.036 16.0477 11.9996C15.6252 13.2227 15.9203 14.5618 16.8172 15.4945ZM16.0479 22.4445C16.3803 23.4065 17.1322 24.1682 18.0694 24.5268C18.1501 23.8644 18.3342 23.2119 18.6274 22.5983C18.7928 22.2522 19.2076 22.1058 19.5535 22.271C19.8995 22.4363 20.0461 22.851 19.8808 23.197C19.2203 24.5795 19.2551 26.2127 19.9742 27.5655C20.5316 28.6147 21.4329 29.4032 22.5173 29.8175C22.4822 29.4902 22.4783 29.1569 22.508 28.8217C22.6971 26.6898 24.2097 24.8718 26.2719 24.2979C26.6416 24.1957 27.0243 24.4114 27.1272 24.7808C27.23 25.1504 27.0138 25.5333 26.6443 25.6362C25.1363 26.0557 24.03 27.3853 23.8917 28.9444C23.7532 30.5038 24.608 32.0072 26.0186 32.6858C27.3426 33.3226 28.9289 33.1237 30.0547 32.2028V29.2137C29.4616 29.8298 28.6852 30.2886 27.7356 30.4505C27.6962 30.4572 27.6568 30.4605 27.6179 30.4605C27.2857 30.4605 26.9919 30.2213 26.9342 29.8827C26.8697 29.5046 27.1239 29.1458 27.5021 29.0813C29.1601 28.7985 30.0547 27.1561 30.0547 25.7544V20.1195C30.0547 18.9049 29.0665 17.9167 27.8519 17.9167L27.848 17.9165H18.9351C18.1296 18.0001 17.3784 18.366 16.8173 18.9496C15.9204 19.8822 15.6254 21.2213 16.0479 22.4445ZM48.4403 40.6237C46.4952 43.1804 36.4885 48.886 33.3471 49.5368C31.7607 49.8654 30.1683 50 28.5778 50C24.8919 50 21.2125 49.2776 17.618 48.5717C14.522 47.9638 11.5856 47.3879 8.7203 47.2631C8.49855 48.428 7.47306 49.3117 6.24457 49.3117H1.1281C0.744536 49.3117 0.433594 49.0008 0.433594 48.6172V32.018C0.433594 31.6344 0.744536 31.3235 1.1281 31.3235H6.24457C7.44538 31.3235 8.45212 32.1678 8.70403 33.2937L15.9757 32.6213C18.2183 32.4143 20.0639 32.8542 22.1447 34.0938L25.2052 35.9172C27.6185 37.355 28.3502 37.3507 30.7762 37.3407C30.9974 37.3396 31.2315 37.3386 31.4805 37.3386C32.6339 37.2993 33.6777 37.8708 34.2702 38.8681C34.7374 39.6543 34.8367 40.5589 34.5713 41.3946C37.9089 40.2018 42.1105 38.2414 44.5395 36.8389C46.2793 35.8347 47.8245 36.2551 48.5843 37.1175C49.4066 38.0513 49.3501 39.4276 48.4403 40.6237ZM7.37632 33.8443C7.37632 33.2203 6.86863 32.7126 6.24467 32.7126H1.82262V47.9228H6.24457C6.86854 47.9228 7.37622 47.4151 7.37622 46.7912L7.37632 33.8443ZM47.5419 38.0356C47.1566 37.598 46.2934 37.4304 45.234 38.0419C42.0602 39.8743 34.333 43.4702 30.8791 43.8095L30.8789 43.807C30.4325 43.8601 29.9586 43.8854 29.4667 43.8854C26.2248 43.8854 22.2338 42.8169 20.631 41.7837C20.3086 41.5759 20.2156 41.1461 20.4235 40.8236C20.6314 40.5014 21.0609 40.4083 21.3836 40.6162C23.1192 41.735 28.5421 42.9861 31.4491 42.3021C32.2705 42.109 32.8188 41.7891 33.0789 41.3516C33.4081 40.7976 33.4071 40.1344 33.0761 39.5774C32.745 39.0205 32.1617 38.7015 31.5192 38.7269C31.5105 38.7272 31.5017 38.7274 31.4929 38.7274C31.2415 38.7274 31.0055 38.7285 30.7825 38.7295C28.2769 38.74 27.239 38.7456 24.4942 37.1104L21.4337 35.287C19.6012 34.1953 18.0571 33.8236 16.1035 34.0043L8.76525 34.683V45.8748C11.756 46.0057 14.8684 46.616 17.8856 47.2086C22.8961 48.1924 28.077 49.2097 33.0653 48.1764C35.862 47.5971 45.5953 42.0692 47.3347 39.7825C47.8412 39.1164 47.9188 38.4635 47.5419 38.0356ZM6.66137 44.9758C6.66137 46.1127 5.73638 47.0377 4.59947 47.0377C3.46255 47.0377 2.53757 46.1127 2.53757 44.9758C2.53757 43.8389 3.46255 42.9139 4.59947 42.9139C5.73638 42.9139 6.66137 43.8389 6.66137 44.9758ZM5.27235 44.9758C5.27235 44.6048 4.97044 44.3029 4.59947 44.3029C4.2285 44.3029 3.92659 44.6048 3.92659 44.9758C3.92659 45.3468 4.2285 45.6487 4.59947 45.6487C4.97044 45.6487 5.27235 45.3468 5.27235 44.9758Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <a href="/interactive" className="service-btn">Read Details &nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



     {/* FAQ */}   

        <section className="faq-section pt-130 pb-130">
            <div className="faq-shape"><LazyLoadImage src={faqshp1} alt="shape"/></div>
            <div className="faq-top-shape"></div>
            <div className="container">
                <div className="row gy-lg-0 gy-4">
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        <div className="faq-content">
                            <div className="section-heading">
                                <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">Just Ask us some question</h4>
                                <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Digital Marketing Solution That Improve Your Company Growth</h2>
                            </div>
                            <div className="accordion" id="accordionExampleTwo">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                         What services does IBC Studio offer?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        IBC Studio provides a range of media services including commercial photography, videography, on-hold messages, interactive voice response (IVR) systems, product photoshoots, and real estate video shoots.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                         How can I book a photoshoot or video shoot with IBC Studio? 
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        You can book a session by contacting us through our website's contact form, calling our office, or sending us an email at info@ibcstudio.com. We'll discuss your project needs and schedule a convenient time.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        What is the typical turnaround time for receiving the final photos or videos? 
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        The turnaround time varies depending on the project scope, but generally, you can expect to receive your final photos or videos within 7-14 business days after the shoot.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        Do you offer packages for real estate videography? 
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExampleTwo">
                                        <div className="accordion-body">
                                        Yes, we offer various packages tailored to different needs and budgets. Our packages can include drone footage, 3D tours, and high-definition video walkthroughs. Please contact us for detailed package information.
                                        </div>
                                    </div>
                                    
                                </div>
                            </div><p ><a href="/faq" className="rr-primary-btn">More FAQs&nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12">
                        <div className="faq-img reveal text-center">
                            <LazyLoadImage src={faqimg} alt="faq" />
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
       
        <div className="running-text testi">
            <div className="container">
                <div className="scroller" data-speed="fast">
                    <ul className="text-anim scroller__inner">
                        <li>Customer Testimonial .</li>
                        <li>Client Feedbacks</li>
                    </ul>
                </div>
            </div>
        </div>
        
       {/* Testimonial */}

        <section className="testimonial-section">
            <div className='container'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <video id='vidtest' preload="none" poster={Thumbnail1}  src='https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FHomeBgVideo%2Ftestimonial-1-new.webm?alt=media&token=642a6822-6194-40ae-95fb-7e02aee20c91'   width="100%" height="100%" controls="1" controlsList="nodownload" >  </video> </SwiperSlide>
        <SwiperSlide> <video  id='vidtest' preload="none" poster={Thumbnail2}   src='https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Videos%2FHomeBgVideo%2Ftestimonial-2.webm?alt=media&token=b85dae87-7970-48c2-a7c5-b8ced7833668'  width="100%" height="100%" controls="1" controlsList="nodownload" > </video> </SwiperSlide>
       
        </Swiper>
        </div>
        </section>


        {/* testimonial-section */}

        <section className="project-section pt-10 pb-130">
            <div className="container">
                <div className="project-top heading-space align-items-end">
                    <div className="section-heading mb-0">
                        <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">Project Showcase</h4>
                        <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Let's Look Our Recent <br/> Project Gallery</h2>
                    </div>
                    <a href="/video" className="rr-primary-btn">View More Project&nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                </div>
                <div className="project-accordion">
                    <div className="accordion" id="projectAccordion">
                        <div className="accordion-item project-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span className="project-content">
                                        <span className="number">01</span>
                                        <span className="project-right">
                                            <span className="category">Audio Production</span>
                                            <span className="title">Announcements </span>
                                        </span>
                                    </span>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#projectAccordion">
                                <div className="accordion-body">
                                    <div className="hover-content">
                                        <div className="content-left">
                                            <p>Voice announcements serve as a powerful tool for effective communication across various domains, improving accessibility, safety, customer experience, and overall efficiency.</p>
                                            <a href="/audio" className="rr-primary-btn">View Details&nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                                        </div>
                                        <div className="content-right">
                                            <div className="project-thumb">
                                                <LazyLoadImage src={project1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item project-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span className="project-content">
                                        <span className="number">02</span>
                                        <span className="project-right">
                                     <span className="category">Video Production</span>
                                            <span className="title">Event Shoots</span>
                                        </span>
                                    </span>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#projectAccordion">
                                <div className="accordion-body">
                                    <div className="hover-content">
                                        <div className="content-left">
                                            <p>We offer specialized video production services in Dubai like corporate video production, TV commercial, high-definition animated videos, testimonial videos, and more.
                                                 We have a wide range of clients across a diverse spectrum of businesses and industries in the UAE. </p>
                                            <a href="/video" className="rr-primary-btn">View Details&nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                                        </div>
                                        <div className="content-right">
                                            <div className="project-thumb">
                                                <LazyLoadImage src={project2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item project-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span className="project-content">
                                        <span className="number">03</span>
                                        <span className="project-right">
                                       <span className="category">Photography</span>
                                            <span className="title">Product Shoot</span>
                                        </span>
                                    </span>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#projectAccordion">
                                <div className="accordion-body">
                                    <div className="hover-content">
                                        <div className="content-left">
                                            <p>Product photography is a specialized form of photography aimed at showcasing products in an attractive and informative way. 
                                                Its primary goal is to present products in the best possible light to entice potential buyers,
                                                 whether in online stores, catalogs, advertisements, or other promotional materials.</p>
                                            <a href="/photography" className="rr-primary-btn">View Details&nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                                        </div>
                                        <div className="content-right">
                                            <div className="project-thumb">
                                                <LazyLoadImage src={project3} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item project-item">
                            <h2 className="accordion-header" id="projectHeadingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#projectCollapseFour" aria-expanded="false" aria-controls="projectCollapseFour">
                                    <span className="project-content">
                                        <span className="number">04</span>
                                        <span className="project-right">
                                        <span className="category">Software Development & Educational Tutorials</span>
                                            <span className="title">Emirates Driving Company, Abu Dhabi</span> 
                                        </span>
                                    </span>
                                </button>
                            </h2>
                            <div id="projectCollapseFour" className="accordion-collapse collapse" aria-labelledby="projectHeadingFour" data-bs-parent="#projectAccordion">
                                <div className="accordion-body">
                                    <div className="hover-content">
                                        <div className="content-left">
                                            <p>By focusing on clear objectives, structured content, practical examples, and learner engagement, we can produce tutorials that are informative, engaging, and impactful. 
                                                Whether in written or video format, high-quality tutorials can significantly enhance the learning experience and help learners achieve their goals.</p>
                                            <a href="/interactive" className="rr-primary-btn">View Details&nbsp; <FontAwesomeIcon icon={faArrowRight} />  </a>
                                        </div>
                                        <div className="content-right">
                                            <div className="project-thumb">
                                              {/*   <LazyLoadImage src={project4} alt=""/> */}
                                                
                                                <video className="videoTag" autoPlay loop  style={{zIndex:999,marginTop:90,maxWidth:'100%'}} controlsList='nodownload' oncontextmenu='return false;'>
            <source src={edu_vid} type='video/mp4'  />
            </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


   {/* Project-section */}

        <div className="running-text running-1">
            <div className="container">
                <div className="scroller" data-speed='slow'>
                    <ul className="text-anim scroller__inner inner-2">
                        <li>A Leading Media Production House</li>
                        <li>Digital Marketing Solutions' Provider</li>
                        <li>Professional Audio Recording Studio</li>
                        <li> Radio Spots / Jingles / Signature Tunes</li>
                        <li>Telephone Hold Message Recording</li>
                        <li>IVR (Interactive Voice Response) Recording</li>
                        <li>Corporate Video Presentations</li>
                        <li>Training Safety Video</li>
                        <li>Time Lapse Video</li>
                        <li>360&deg; VR & AR Video</li>
                        <li>Testimonial Video</li> 
                    </ul>
                </div>
            </div>
        </div>
        {/* running-text */}

        <div className="running-text">
            <div className="container">
                <div className="scroller" data-speed="slow">
                    <ul className="text-anim scroller__inner">
                        <li>Documentaries</li>
                        <li> Multi-Media Presentation</li>
                        <li> Customized Logo & Brochure Design </li>
                        <li> Website Designing & Developing </li>
                        <li>Lip-Synch. Dubbing Facilities in Video & Animation</li>
                        <li>2D & 3D Animated Film</li>
                        <li> Commercial Still Photography </li>
                        <li>Events Coverage: Corporate & Private Parties / Product Launch / Seminars etc</li>
                    
                    </ul>
                </div>
            </div>
        </div>
        {/*running-text */}

        <section className="process-section pt-130 fade-wrapper">
            <div className="bg-shape"><LazyLoadImage src={processhp} alt="shape"/></div>
            <div className="container">
                <div className="section-heading text-center">
                    <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">Work Process</h4>
                    <h2 className="section-title overflow-hidden" data-text-animation data-split="word" data-duration="1">Follow 4 Easy Work Steps</h2>
                </div>
                <div className="row gy-lg-0 gy-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="process-item fade-top">
                            <div className="process-icon">
                                <div className="icon-border"></div>
                                <LazyLoadImage src={process1} alt="icon"/>
                            </div>
                            <div className="process-content">
                                <h3 className="title">1.Initial Consultation</h3>
                                <p>Client and IBC Studio discuss project scope, requirements, and goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-item fade-top">
                            <div className="process-icon">
                                <div className="icon-border"></div>
                                <LazyLoadImage src={process2} alt="icon"/>
                            </div>
                            <div className="process-content">
                                <h3 className="title">2.Proposal and Agreement</h3>
                                <p>IBC Studio provides a detailed proposal, and both parties sign an agreement.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-item fade-top">
                            <div className="process-icon">
                                <div className="icon-border"></div>
                                <LazyLoadImage src={process3} alt="icon" />
                            </div>
                            <div className="process-content">
                                <h3 className="title">3.Production Phase</h3>
                                <p>IBC Studio conducts audio, video, and photo shoots as per the agreed plan.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="process-item fade-top">
                            <div className="process-icon">
                                <div className="icon-border"></div>
                                <LazyLoadImage src={process4} alt="icon"/>
                            </div>
                            <div className="process-content">
                                <h3 className="title">4.Delivery and Review</h3>
                                <p>Final product is delivered to the client for review and approval.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </section>
       {/* process-section */}


        <section className="blog-section pt-130 pb-130 fade-wrapper">
            <div className="container">
                <div className="section-heading text-center">
                    <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">NEWS & LATEST UPDATES</h4>
                    <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Check Our Company Inside Story</h2>
                </div>
                <div className="post-wrap">
                    <div className="post-card-wrap fade-top">
                        <div className="post-card">
                            <div className="post-thumb">
                                <LazyLoadImage src={post1} alt="post"/>
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-sharp fa-regular fa-clock"></i>25 June, 2024</li>
                                        <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                                    </ul>
                                    <h3 className="title"><a href="/audio_services">Audio Services - The Power of Voice</a></h3>
                                    <a href="/audio_services" className="rr-primary-btn blog-btn"> Audio Services &nbsp; <FontAwesomeIcon icon={faArrowRight} /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-card-wrap fade-top">
                        <div className="post-card">
                            <div className="post-thumb">
                                <LazyLoadImage src={post2} alt="post"/>
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-sharp fa-regular fa-clock"></i>25 June, 2024</li>
                                        <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                                    </ul>
                                    <h3 className="title"><a href="/photography_services">Photography by IBC Studio</a></h3>
                                    <a href="/photography_services" className="rr-primary-btn blog-btn">Photography Services &nbsp; <FontAwesomeIcon icon={faArrowRight} /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-card-wrap fade-top">
                        <div className="post-card">
                            <div className="post-thumb">
                                <LazyLoadImage src={post3} alt="post"/>
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><i className="fa-sharp fa-regular fa-clock"></i>25 June, 2024</li>
                                        <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                                    </ul>
                                    <h3 className="title"><a href="/video_services">Video Services - Capturing Excellence</a></h3>
                                    <a href="/video_services" className="rr-primary-btn blog-btn">Video Services &nbsp; <FontAwesomeIcon icon={faArrowRight} /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       {/*  blog-section */}

        <section className="sponsor-section pb-30">
        <div >
                <div className="section-heading text-center">
                    <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">Our Clients</h4>
                    <h2 className="section-title" data-text-animation data-split="word" data-duration="1"><a href="/clients">More Than 3000 Satisfied Clients...</a></h2>
                </div>
        <Slider
            width="200px"
            duration={20}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <LazyLoadImage src={client1} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client2} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client3} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client4} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client5} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client6} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client7} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client8} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client9} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client10} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client11} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client12} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client13} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client14} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client15} alt="Client" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <LazyLoadImage src={client16} alt="Client" className='w-36' />
            </Slider.Slide>
        </Slider>
        </div>
 
        </section>

       



          {/*  blog-section */}

            <Footer/>
        </>
  )
}
