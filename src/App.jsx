
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { Routes,Route} from 'react-router-dom';
import About from '@/Frontend/pages/About';
import Home from '@/Frontend/pages/Home';
import WeDo from '@/Frontend/pages/WeDo';
import OurFacilities from '@/Frontend/pages/OurFacilities';
import Audio from '@/Frontend/pages/Audio';
import Webdesign from '@/Frontend/pages/Webdesign';
import Video from '@/Frontend/pages/Video';
import Industrialphotography from '@/Frontend/pages/Industrialphotography';
import Multimedia from '@/Frontend/pages/Multimedia';
import Aerialtmlps from '@/Frontend/pages/Aerialtmlps';
import ArVrvideo from '@/Frontend/pages/ArVrvideo';
import Clients from '@/Frontend/pages/Clients';
import Contact from '@/Frontend/pages/Contact';
import Audiosamples from '@/Frontend/pages/Audiosamples';
import Webdev from '@/Frontend/pages/Webdev';
import Interactivedesign from '@/Frontend/pages/Interactivedesign';
import Graphicsdesign from '@/Frontend/pages/Graphicsdesign';
import Events from '@/Frontend/pages/Events'; 
import Corporatevid from '@/Frontend/pages/Corporatevid';
import DubbingTut from '@/Frontend/pages/DubbingTut';
import EventsVideo from '@/Frontend/pages/EventsVideo';
import Tvcsocial from '@/Frontend/pages/Tvcsocial';
import Animation from '@/Frontend/pages/Animation'; 
import ProdPhoto from '@/Frontend/pages/ProdPhoto';
import IndustGPhoto from '@/Frontend/pages/IndustGPhoto';
import FoodGPhoto from '@/Frontend/pages/FoodGPhoto';
import ModelGphoto from '@/Frontend/pages/ModelGphoto';
import TravelHotelGPhoto from '@/Frontend/pages/TravelHotelGPhoto';
import OthersGPhoto from '@/Frontend/pages/OthersGPhoto';
import PerishableGPhoto from '@/Frontend/pages/PerishableGPhoto';
import PartiesGphoto from '@/Frontend/pages/PartiesGPhoto';
import SchoolsGphoto from '@/Frontend/pages/SchoolsGPhoto';
import PropertiesGphoto from '@/Frontend/pages/PropertiesGPhoto';
import FacilitiesGphoto from '@/Frontend/pages/FacilitiesGPhoto';
import BlogPost1 from '@/Frontend/pages/BlogPost1';
import BlogPost2 from '@/Frontend/pages/BlogPost2';
import BlogPost3 from '@/Frontend/pages/BlogPost3';
import StillcovGPhoto from '@/Frontend/pages/StillcovGPhoto';
import SoundstgGPhoto from '@/Frontend/pages/SoundstgGPhoto';
import PaypalPayment from '@/Frontend/pages/PaypalPayment';
import Faq from './Frontend/pages/Faq';

function App() {
  
  return (
    <>
     
    <FloatingWhatsApp
        phoneNumber="971552912810"
        accountName="IBC"
        allowEsc
        allowClickAway="false"
        notification
        notificationSound
        buttonClassName="whatsapp"
      />

         
        
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/WeDo" element={<WeDo/>} /> 
            <Route path="/facilities" element={<OurFacilities/>} />
            <Route path="/audio" element={<Audio/>} />
            <Route path="/webdesign" element={<Webdesign/>} />
            <Route path="/video" element={<Video/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/corporate" element={<Corporatevid/>} />
            <Route path="/photography" element={<Industrialphotography/>} />
            <Route path="/prodphoto" element={<ProdPhoto/>} />
            <Route path="/industphoto" element={<IndustGPhoto/>} />
            <Route path="/foodphoto" element={<FoodGPhoto/>} />
            <Route path="/modelphoto" element={<ModelGphoto/>} />
            <Route path="/travelhphoto" element={<TravelHotelGPhoto/>} />
            <Route path="/othersphoto" element={<OthersGPhoto/>} />
            <Route path="/stilcov" element={<StillcovGPhoto/>} />
            <Route path="/soundstg" element={<SoundstgGPhoto/>} />
            <Route path="/perishable" element={<PerishableGPhoto/>} />
            <Route path="/parties" element={<PartiesGphoto/>} />
            <Route path="/schools" element={<SchoolsGphoto/>} />
            <Route path="/properties" element={<PropertiesGphoto/>} />
            <Route path="/facilitiesg" element={<FacilitiesGphoto/>} />
            <Route path="/multimedia" element={<Multimedia/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/eventsvideo" element={<EventsVideo/>} />
            <Route path="/aerialtmlps" element={<Aerialtmlps/>} />
            <Route path="/dubbingtut" element={<DubbingTut/>} />
            <Route path="/tvcsocial" element={<Tvcsocial/>} />
            <Route path="/arVrvideo" element={<ArVrvideo/>} />
            <Route path="/animation" element={<Animation/>} />
            <Route path="/clients" element={<Clients/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/audio_services" element={<BlogPost1/>} />
            <Route path="/photography_services" element={<BlogPost2/>} />
            <Route path="/video_services" element={<BlogPost3/>} />
            <Route path="/audio_samples" element={<Audiosamples/>} /> 
            <Route path="/webdev" element={<Webdev/>} /> 
            <Route path="/interactive" element={<Interactivedesign/>} /> 
            <Route path="/gdesigns" element={<Graphicsdesign/>} /> 
            <Route path="/paypalgwy" element={<PaypalPayment/>} /> 
          </Routes>
        
 
        
            </>
  );
}

export default App;
