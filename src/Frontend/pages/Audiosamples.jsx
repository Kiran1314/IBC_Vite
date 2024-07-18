import React from 'react'
import Header from '../Components/Header'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import Footer from '../Components/Footer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import { Seo } from '../Components/Seo';

const tracks = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Audio%2F01.Dubai-Electricity-and-Water-Authority_AE.mp3?alt=media&token=91950634-0ca8-4811-ad8f-a3cb8c6e6d55",
      title: "01.Dubai-Electricity-and-Water-Authority-AE",
      tags: ["IVR "],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Audio%2F02.Zayed-Military-Hospital_AE.mp3?alt=media&token=73a3fca4-3cd4-4b9e-a833-e617f3f0852f",
      title: "02.Zayed-Military-Hospital-AE",
      tags: ["IVR "],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Audio%2F02_Emirates-Islamic-Bank.mp3?alt=media&token=f930f2b6-71cb-4128-9f36-4083eab2c6b9",
      title: "03.Emirates-Islamic-Bank",
      tags: ["IVR "],
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Audio%2F03.Al-Jalila-Children’s-Specialty-Hospital_AE_KIDS.mp3?alt=media&token=db0f7da1-7ed6-4a0f-8e09-1ec2d135fdfb",
        title: "04.Al-Jalila-Children’s-Specialty-Hospital-AE_KIDS",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Audio%2F03_City-bank.mp3?alt=media&token=69320aa0-d989-4f28-bdfe-2abc88baf4b5",
        title: "05.City-bank",
        tags: ["IVR "],
      },
       
       
  ];


  const tracks2 = [
   
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/OHM%2F01_Splash.mp3?alt=media&token=1543c986-bbdf-41b8-b9d2-44e0b59ce0ab",
        title: "01.Splash",
        tags: ["On Hold Message "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/OHM%2F02_KanooGroup.mp3?alt=media&token=7b5d92d5-22d1-4859-a511-55d3b1f04784",
        title: "02.KanooGroup",
        tags: ["On Hold Message "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/OHM%2F03_AXA.mp3?alt=media&token=17040aea-ee57-43e7-a3e9-a75125d65930",
        title: "03.AXA",
        tags: ["On Hold Message "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/OHM%2F04_Union-Properties.mp3?alt=media&token=0c6c99ca-ebde-4bfd-a9ae-a4fb9eaa70e1",
        title: "04.Union-Properties",
        tags: ["On Hold Message "],
      },
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/OHM%2F05_Dubai-Courts.mp3?alt=media&token=ec9c7d5a-91e3-446e-b588-85f49faed035",
        title: "05.Dubai-Courts",
        tags: ["On Hold Message "],
      },
    ];
      const tracks3 = [
   
        {
            url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Radio%20Spot%2F01_Dalili-RTA.mp3?alt=media&token=ea76358b-c8a3-42e2-a63d-228643b9ddb4",
            title: "01.Dalili-RTA",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Radio%20Spot%2F02_Lionel-Richi.mp3?alt=media&token=d73be4aa-8826-4f9a-af1b-b47526d869d8",
            title: "02.Lionel-Richi",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Radio%20Spot%2F03_Captian-Liquid.mp3?alt=media&token=df914484-271e-4ee6-bcae-1191877e26d6",
            title: "03.Captian-Liquid",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Radio%20Spot%2F04_Sega-Republic.mp3?alt=media&token=776030da-d453-4e27-8f47-4177bcfd9a86",
            title: "04.Sega-Republic",
            tags: ["Radio Spot"],
          },
          
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Radio%20Spot%2F05_Dial-_-Dine.mp3?alt=media&token=ff7e2493-1290-4b91-b878-b241895cef2b",
            title: "05.Dial-_-Dine",
            tags: ["Radio Spot"],
          },
  ];

  const tracks4 = [
   
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Industry%20wise%2FAnnouncement%2FAirport_BusAnnouncement_E.mp3?alt=media&token=12845868-043d-43b5-a47c-37cdb5cebb76",
        title: "01.Airport-Bus-E",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Industry%20wise%2FAnnouncement%2FAirport_Bus_Announcement_A.mp3?alt=media&token=e7ab74e5-9e5f-40d7-ac5d-42d90da331af",
        title: "02.Airport-Bus-A",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Industry%20wise%2FAnnouncement%2FFire-Alarm.mp3?alt=media&token=8589021e-0ab9-4e3f-ac40-d97aaf6c0199",
        title: "03.Fire-Alarm",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Industry%20wise%2FAnnouncement%2FIn-Flight-Announcement_ARB.mp3?alt=media&token=847ceac9-5a03-44bd-a3f3-60438723ae0d",
        title: "04.In-Flight-ARB",
        tags: ["Announcements"],
      },
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Industry%20wise%2FAnnouncement%2FIn-Flight-Announcement_BNG.mp3?alt=media&token=fe89ee80-7789-46bd-9237-4b3f2b745b0f",
        title: "05.In-Flight-BNG",
        tags: ["Announcements"],
      },
];


const tracks5 = [
   
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Industry%20wise%2FAnnouncement%2FAirport_BusAnnouncement_E.mp3?alt=media&token=12845868-043d-43b5-a47c-37cdb5cebb76",
        title: "01.Airport-Bus-E",
        tags: ["English"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Industry%20wise%2FAnnouncement%2FAirport_Bus_Announcement_A.mp3?alt=media&token=e7ab74e5-9e5f-40d7-ac5d-42d90da331af",
        title: "02.Airport-Bus-A",
        tags: ["English"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Industry%20wise%2FAnnouncement%2FFire-Alarm.mp3?alt=media&token=8589021e-0ab9-4e3f-ac40-d97aaf6c0199",
        title: "03.Fire-Alarm",
        tags: ["English"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Industry%20wise%2FAnnouncement%2FIn-Flight-Announcement_ARB.mp3?alt=media&token=847ceac9-5a03-44bd-a3f3-60438723ae0d",
        title: "04.In-Flight-ARB",
        tags: ["English"],
      },
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Industry%20wise%2FAnnouncement%2FIn-Flight-Announcement_BNG.mp3?alt=media&token=fe89ee80-7789-46bd-9237-4b3f2b745b0f",
        title: "05.In-Flight-BNG",
        tags: ["English"],
      },
];



  const colors = {
    tagsBackground: "#3e32e4",
    tagsText: "#ffffff",
    tagsBackgroundHoverActive: "#6e65f1",
    tagsTextHoverActive: "#ffffff",
    searchBackground: "#313a52",
    searchText: "#ffffff",
    searchPlaceHolder: "#575a77",
    playerBackground: "#313a52",
    titleColor: "#ffffff",
    timeColor: "#ffffff",
    progressSlider: "#3e32e4",
    progressUsed: "#ffffff",
    progressLeft: "#151616",
    bufferLoaded: "#1f212b",
    volumeSlider: "#3e32e4",
    volumeUsed: "#ffffff",
    volumeLeft: "#151616",
    playlistBackground: "#313a52",
    playlistText: "#575a77",
    playlistBackgroundHoverActive: "#313a52",
    playlistTextHoverActive: "#ffffff",
    fontsize: 14,
  };


export default function Audiosamples() {
  return (
    <>
    <Header/>
    <Seo
        title="IVR Recording Studio Dubai, UAE | Audio Recording Studio UAE"
        description="Craft captivating narratives with our IVR recording studio in Dubai, UAE. Explore audio excellence for corporate videos at IBC Studio. Your story, our expertise."
        type="article"
        name="@IBCStudioUAE"
        kwords="IVR Recording Studio Dubai, UAE, Arabic Voice Recording in Dubai, Audio Recording Studio UAE, recording studio in dubai, music studios in Dubai, dubai recording studio, Voice Over Recording Studio, voice recording Studio, best recording studio in dubai, ivr recording, professional ivr recordings, recording studios near me, nearby recording studio, audio recording studio, voice over recording, audio recording, dubai recording studio, voice recording, good recording studio, IVR recording, sound record studio, IVR recording UAE, Dubbing, IVR recording Dubai, telephone hold message, sound record studio, voice over dubai, audio recorder, audio recording studios, good recording studios, signature tunes, radio spot, radio production companies"
      />

<link rel="canonical" href="https://www.ibcstudio.com/audio"/>


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
                    <h1 className="title">Audio Recording</h1>
                    <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="about.html"> Audio Recording</a></h4>
                </div>
            </div>
    </section>
       {/*page-header */} 
     
       <section className="process-section-2 fade-wrapper pt-120">
       <div className='container'>
       <div className="section-heading text-center">
                 
                 <h2  data-text-animation="fade-in" data-duration="1.5">Audio Samples</h2>
                
             </div> 
      </div>
      </section>
      <div className="container">
      <div className="row"> 
      <div className="col-lg-6">
      <div className="exTab3 container pt-40"  style={{paddingLeft:10,paddingRight:10}}>	
      <Tabs>
            <TabList className='audio-category' align='center'>
            <Tab>IVR</Tab>
            <Tab>ON HOLD MESSAGES</Tab>
            <Tab>RADIO SPOT</Tab>
            </TabList>

            <TabPanel>
            <Player trackList={tracks} customColorScheme={colors} />
            </TabPanel>
            <TabPanel>
            <Player trackList={tracks2} customColorScheme={colors} />
            </TabPanel>
            <TabPanel>
            <Player trackList={tracks3} customColorScheme={colors} />
            </TabPanel>
        </Tabs>


        </div>
        </div>
        <div className="col-lg-6">
        <section className="process-section-2 fade-wrapper pt-30 pb-120">
        <div className='container'>
                <div  data-text-animation="fade-in" data-duration="1.5" style={{paddingTop:-100}}>
                    <p>IBC Studio is having Complete Digital Audio Recording set up for IVR & Telephone Message recording; Jingles & Radio Spots; 
                        Audio Book; all type of Tutorials & Info-graphics Voice Over.</p>

<p> At IBC Studio, the pioneering visual art studio in Dubai, UAE, we thrive to comply with optimal quality standards in the industry for audio recording and dubbing. We have access to all state-of-the-art tools and technology for flawless and professional audio recording, IVR recording, dubbing, composing radio spots or jingles, audio books, and voice overs. At our audio recording studio in Dubai, UAE, we have a complete set up for IVR and telephone message recording. Our excellent talent poll also helps make the voice recording or audio production flawless. We have the most professional sound engineers working in our studio. No matter how simple or complex, big or small your audio
     recording project may be, we ensure to offer 100% commitment to outstanding work. We also offer language-based specialized Arabic voice recording.</p>

<p> Over the years, we have served numerous clients with our audio recording and dubbing services. We are fully equipped and capable of handling any audio recording requirement, whether IVR recording, radio jingle spots or dubbing. </p>

<p> Contact our team today! </p>
                </div> 
             
                </div>    
        </section>

        </div>
        </div>
        </div>

      <div className="container pb-140">
      <div className="row"> 
      <div className="col-lg-6">
        <section className="process-section-2 fade-wrapper pt-60 pb-30">
        
       <div className="section-heading text-center">
                 
                 <h2  data-text-animation="fade-in" data-duration="1.5">Industry Wise Samples</h2>
                
             </div> 
     
      </section>
        <Tabs>
           <TabList className='audio-category' align='center'>
            <Tab>Announcement</Tab>
            <Tab>Automobiles</Tab>
            <Tab>Banks Financial</Tab>
            <Tab>Events</Tab>
            <Tab>Fashion</Tab>
            <Tab>GCC Exhibition</Tab>
            <Tab>Governments</Tab>
            <Tab>Industry</Tab>
            <Tab>Trade</Tab>
            <Tab>Malls</Tab>
            <Tab>Medicals</Tab>
            <Tab>Oil & Gas</Tab>
            <Tab>Real Estate</Tab>
            <Tab>Schools</Tab>
            <Tab>Sharjah museum</Tab>
            <Tab>Telecom</Tab>
            <Tab>Transportation</Tab>
            <Tab>Travels</Tab>  
            </TabList>
            <TabPanel> <Player trackList={tracks4} customColorScheme={colors} /></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>

            </Tabs>
</div> 
<div className="col-lg-6">
<section className="process-section-2 fade-wrapper pt-60 pb-30">
       <div className='container'>
       <div className="section-heading text-center">
                 
                 <h2  data-text-animation="fade-in" data-duration="1.5">Voice Samples</h2>
                
             </div> 
      </div>
      </section>
        <Tabs>
           <TabList className='audio-category' align='center'>
            <Tab>English</Tab>
            <Tab>Arabic</Tab>
            <Tab>Bilingual</Tab>
            <Tab>Premium Voices</Tab>
            <Tab>Hindi/Urdu</Tab>
            <Tab>Malayalam</Tab>
            <Tab>Italian</Tab>
            <Tab>Portuguese</Tab>
            <Tab>Russian</Tab>
            <Tab>Spanish</Tab>
            <Tab>Tagalog</Tab>
            <Tab>Chinese</Tab>
            <Tab>French</Tab>
            <Tab>Persian</Tab>
            <Tab>German</Tab>
            <Tab>Other</Tab> 
            </TabList>
            <TabPanel> <Player trackList={tracks5} customColorScheme={colors} /></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>

            </Tabs>




</div>

</div>
</div>
           



     
     
      
  



    <Footer/>
    </>
  )
}
