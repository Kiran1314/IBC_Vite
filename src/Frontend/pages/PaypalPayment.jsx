import React, { useState } from 'react';

 
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import bgimg from '../assets/img/bg-img/page-header-bg.jpg'
import phs1 from '../assets/img/shapes/page-header-shape-1.png'
import phs2 from '../assets/img/shapes/page-header-shape-2.png'
import phs3 from '../assets/img/shapes/page-header-shape-3.png'
import { Seo } from '../Components/Seo';

import PayPalButton from '../Components/PayPalButton';
import BillForm from '../Components/BillForm';

export default function PaypalPayment() {

    const clientId = 'sb';  
    const [billDetails, setBillDetails] = useState(null);
  
    const handleFormSubmit = (details) => {
      setBillDetails(details);
    };


  return (
    <>
    <Header/>
    <Seo
        title="Voice Recording Studio in Dubai | Professional &amp; Video Production Studio"
        description="IBC Studio, (Innovative Business Communication) is an Audio-Video Production house as well as designing &amp; multi-media solutions provider, based in Dubai, UAE, IBC Studio, specialized in Video Production, Audio Recording, Web-Design, Corporate Video Presentation, Training Video, Time Lapse Video, Digital still photography and Digital Prints of poster banners and window graphics etc"
        type="article"
        name="@IBCStudioUAE"
        kwords="ivr recording, ivr recording uae, top media production houses in dubai, professional photography, professional photographer, voice over recording, voice Recording, voice over dubai, voice record studio, wedding photography, voice recording, video studio dubai, video production company uae, recording studio, videographer dubai, audio recording, audio recording studio, video production company dubai, digital printing, product photography, video shoot, audio recording studio, Audio recording studios, Audio &amp; video production companies, web developing, web designing, post production dubai, corporate video production dubai, event photographer , event photography, event photography in dubai, nearby recording studios, dubai recording studio, Professional photography, good recording studio, sound record studio, designing, industrial photography, photography studio , products photography, photo studio in dubai, photo studio near me, photograph, dubai photography, uae photography, lifestyle photography, modeling photography, video shooting , timelapse, photography company in dubai, commercial, cheap website design dubai, 4k video, video services, post production, ibcdubai , corpprate video , commercial video production, studios in dubai, , studios in uae, dubbing, ivr recording dubai, telephone hold, telephone hold message, sound record studio"
      />
  <link rel="canonical" href="https://www.ibcstudio.com/paypalgwy"/>



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
                <h1 className="title">We Also Accept Payments Online</h1>
                <h4 className="sub-title"><a className="home" href="/home">Home </a><span></span><a className="inner-page" href="/ArVrvideo"> Paypal</a></h4>
            </div>
        </div>
    </section>
   {/*page-header */} 


  


   <section className="process-section-2 fade-wrapper pt-60 pb-10">
       
   
    <h2 data-text-animation="fade-in" data-duration="1.5" align="center"> PayPal Payment </h2>
    <div className="container pt-30 pb-40"  >
 
    <BillForm onSubmit={handleFormSubmit} />
      {billDetails && (
        <PayPalButton
          clientId={clientId}
          description={billDetails.description}
          amount={billDetails.amount}
          invoiceId={billDetails.invoiceId}
        />
      )}
   
    </div>


 
    </section>

    

  <Footer/>   


</>
  )
}

