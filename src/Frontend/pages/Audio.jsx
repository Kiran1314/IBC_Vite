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
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FADNEC%20Group_Greeting_AACC_A_E.mp3?alt=media&token=db9f6b40-d5df-4b2c-b7c9-54fc6f6219d1",
    title: "01.ADNEC Group_Greeting_AACC_A_E",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FADNEC%20Group_A_E.mp3?alt=media&token=b9f660a4-11ce-4eb1-9c3d-3cc8b9d95ebb",
    title: "02.ADNEC Group_A_E",
    tags: ["IVR "],
  },
  
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FCTS%20KHADA_E_A.mp3?alt=media&token=d1a06a7c-63ff-443d-801f-0a21f99b6425",
    title: "03.CTS_KHADA_E_A",
    tags: ["IVR "],
  },
   
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FDepartment%20of%20health%20-%20Abudhabi_A_E.mp3?alt=media&token=b51f9573-2179-4fbe-918c-ded5f72ec35d",
    title: "04.Department of health - Abudhabi_A_E",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FFinance%20House_A_E.mp3?alt=media&token=ff66e2d0-1adc-4646-8227-a48ae369b1a2",
    title: "05.Finance House",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FMinistry%20of%20Community%20Development_E_A.mp3?alt=media&token=7c418e28-bfce-4117-a764-89f44deb49fa",
    title: "06.Ministry of Community Development_E_A",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTelepeformence_ADGCC_TAAM%20E_A.mp3?alt=media&token=98e2568d-0f74-49f9-873c-87166b08ce16",
    title: "07.Telepeformence_ADGCC_TAAM E_A",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FAl-Futtaim%20Group%20_AE.mp3?alt=media&token=29e03f3b-c690-4305-b31b-29a9e104e203",
    title: "08.Al-Futtaim Group _AE",
    tags: ["IVR "],
  },
  
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FSharjah%20Nurseries%20contact%20center_E.mp3?alt=media&token=6a0c9767-3d0e-44f5-a03e-75cd48fbc645",
    title: "09.Sharjah Nurseries contact center_E",
    tags: ["IVR "],
  },
   
  
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FDubai%20Taxi%20Corpotration_WEL_CUS_Arabic.mp3?alt=media&token=71384c74-1f8d-45b6-80df-28b55ba25cb7",
    title: "09.Dubai Taxi Corpotration_WEL_CUS_Arabic",
    tags: ["IVR "],
  },

  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FDubai%20Taxi%20Corpotration_WEL_CUS_English.mp3?alt=media&token=fa0223c4-916b-4ab7-9b67-55cbf84503a7",
    title: "10.Dubai Taxi Corpotration_WEL_CUS_English",
    tags: ["IVR "],
  },

  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FDubai%20Taxi%20Corpotration_WEL_DR_Urdu.mp3?alt=media&token=e6847b89-f461-4768-9a22-c734449d7ffe",
    title: "11.Dubai Taxi Corpotration_WEL_DR_Urdu",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FENOC_A_E_H.mp3?alt=media&token=568bb767-cbc3-4956-8020-7a205e0f7f30",
    title: "12.ENOC_A_E_H",
    tags: ["IVR "],
  },
  
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FAl%20Futtaim_Move%20to%20Change_survey_AE.mp3?alt=media&token=0428e801-7a3c-4570-8e61-e7319d84a3f3",
    title: "13.Al Futtaim_Move to Change_survey_AE",
    tags: ["IVR "],
  },

  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FDar%20Al%20Marefa%20Private%20School_E%26A.mp3?alt=media&token=4f6282ee-5d56-4ae8-8e04-ff664018a1cb",
    title: "14.Dar Al Marefa Private School_E&A",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FDubai%20Electricity%20%26%20Water%20Authority%20(DEWA)_E%26A.mp3?alt=media&token=68fb81a1-b5ee-429b-8fdb-24fd12e1c13d",
    title: "15.Dubai Electricity & Water Authority (DEWA)_E&A",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FIKEA_A_E.mp3?alt=media&token=77e32f0e-94f7-48b5-bb9a-ccfd903c52a1",
    title: "16.IKEA_A_E",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FIKEA%20%20Abu%20Dhabi%20Yas_A.mp3?alt=media&token=dfcf4bb4-8031-43ab-912b-6b434671ff97",
    title: "17.IKEA  Abu Dhabi Yas_E_A",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FIKEA%20Alain_E_A.mp3?alt=media&token=dc385907-8013-41c0-8356-91c187092e5b",
    title: "18.IKEA Alain_E_A",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FENOC%20KSA_A.mp3?alt=media&token=42cc7503-5005-4d25-8914-624df72bd105",
    title: "19.ENOC KSA_A",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FENOC%20KSA_E.mp3?alt=media&token=68b03a96-8c7b-4da1-8c92-fdf818d8cde7",
    title: "20.ENOC KSA_E",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FENOC%20KSA_H.mp3?alt=media&token=50be29f0-37ab-4206-a687-3be49aefc44b",
    title: "21.ENOC KSA_H",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FENOC_A.mp3?alt=media&token=1c4a3717-c23c-4fae-9ebf-a6459f308770",
    title: "22.ENOC_A",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FENOC%20KSA_A_E_H.mp3?alt=media&token=249980de-310f-42da-acbf-9cb1441d9980",
    title: "23.ENOC KSA_A_E_H",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTeleperformence_Saturday%20Off-DED_E.mp3?alt=media&token=dd98cf43-e877-4070-a44c-f471fa3f6362",
    title: "24.Teleperformence_Saturday Off-DED_E",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTafaseel%20%20DCCA_Prompt%201%20A_E.mp3?alt=media&token=ab43143a-dd87-464d-8090-e0e9ec3f53ef",
    title: "25.Tafaseel  DCCA_Prompt 1 A_E",
    tags: ["IVR "],
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FEMARATECH_E%26A.mp3?alt=media&token=02706698-e36d-4333-830a-e1774cec724d",
    title: "26.EMARATECH_E&A",
    tags: ["IVR "],
  },
  
  {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F01.Dubai-Electricity-and-Water-Authority_AE.mp3?alt=media&token=20d30351-6165-4ff4-b5c3-2187089a5594",
      title: "27.Dubai-Electricity-and-Water-Authority_AE",
      tags: ["IVR "],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F03.Al-Jalila-Children’s-Specialty-Hospital_AE_KIDS.mp3?alt=media&token=cf9f5af5-7220-461e-908c-39d1cc182669",
      title: "28.Al-Jalila-Children’s-Specialty-Hospital_AE_KIDS",
      tags: ["IVR "],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F03_City-bank.mp3?alt=media&token=8c453f6f-cb36-47ea-8841-e2fb718a5c14",
      title: "29.City-bank",
      tags: ["IVR "],
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F04_Bank-Muscat.mp3?alt=media&token=4b8e106c-0d98-4791-967f-6eee47687094",
        title: "30.Bank-Muscat",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F06.Dubai-International-Financial-Centre_EA.mp3?alt=media&token=fd93ddec-c43f-44ff-a612-120361bed7d2",
        title: "31.Dubai-International-Financial-Centre_EA",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F07_Abu-Dhabi-International-Airport.mp3?alt=media&token=8ad4a4f2-f81e-481d-8aab-a58aa203cc74",
        title: "32.Qatar-International-Islamic-Bank-QIIB",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F07_Abu-Dhabi-International-Airport.mp3?alt=media&token=8ad4a4f2-f81e-481d-8aab-a58aa203cc74",
        title: "33.Abu-Dhabi-International-Airport",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F08_Dubai-Airport.mp3?alt=media&token=76f1b395-b369-487c-8146-b2f9da1d7a54",
        title: "34.Dubai-Airport",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F09_Ministry-of-Labour.mp3?alt=media&token=15334644-55b6-4a91-ae62-e1e9fb9ad0c7",
        title: "35.Ministry-of-Labour",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F10_Road-Transport-Authority-RTA.mp3?alt=media&token=edd5c27b-7922-49b9-ab59-6f9279b0549f",
        title: "36.Road-Transport-Authority-RTA",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F11.Ministry-of-Economy_ENG.mp3?alt=media&token=5e713945-c24b-4de9-aca7-c6375f569c24",
        title: "37.Ministry-of-Economy_ENG",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F11_Abu-Dhabi-Police.mp3?alt=media&token=c84f2f99-2533-47e9-a6b2-9a0cf79a794e",
        title: "38.Abu-Dhabi-Police",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F12_Dubai-Police.mp3?alt=media&token=92df801c-c901-4538-97f0-ba367b7a75a8",
        title: "39.Dubai-Police",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F13_At-The-Top-Burj-Khalifa.mp3?alt=media&token=dccac11c-225d-4768-a9cc-a70d77e1014c",
        title: "40.At-The-Top-Burj-Khalifa",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F14_Al-Ameen-Service-Dubai-Police.mp3?alt=media&token=a35f2a27-0f9d-428a-af2a-94d240a114f5",
        title: "41.Al-Ameen-Service-Dubai-Police",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F18_Dubai-economic-Dept.mp3?alt=media&token=149aad7e-3046-4086-af79-48c75c87a73d",
        title: "42.Dubai-economic-Dept",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F20_Commercial-Bank-of-Dubai-CBD.mp3?alt=media&token=932fee01-01a7-40f5-82f2-a8ccc711e125",
        title: "43.Commercial-Bank-of-Dubai-CBD",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F21.Emirates-Post-Group_AEU.mp3?alt=media&token=4f1858a3-8488-4741-9807-8a2782385251",
        title: "44.Emirates-Post-Group_AEU",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F22_Department-of-Finance-DOF-.mp3?alt=media&token=ef3f0f3c-e750-4d8b-884b-de7eb4c67211",
        title: "45.Department-of-Finance-DOF",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F24_Dubai-Mall.mp3?alt=media&token=f8b2a5b4-654f-43ff-89ac-30ac9621c217",
        title: "46.Dubai-Mall",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F26_Salik.mp3?alt=media&token=874ed2f7-5202-4106-a75c-9c4ddd46f788",
        title: "47.Salik",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F27_Sharjah-Aviation.mp3?alt=media&token=179f46f4-621e-47fa-a5a0-8d5d2081f98b",
        title: "48.Sharjah-Aviation",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F28_Qatar-General-Electricity-Water-Corporation.mp3?alt=media&token=4b7fdb29-c689-446f-b44b-9541e0b12655",
        title: "49.Qatar-General-Electricity-Water-Corporation",
        tags: ["IVR "],
      },
      {
        url: "24.https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F34_Dubai-Health-Care-City.mp3?alt=media&token=c1498b36-21fb-4b6e-9793-bb940dc8423c",
        title: "50.Dubai-Health-Care-City",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F36_Du.mp3?alt=media&token=b41d116f-c677-419a-8eb2-ba7aecc8045d",
        title: "51.Du",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F40_Carrefour.mp3?alt=media&token=04fe42ee-fb7c-4fb1-a7ff-d5afe2feae01",
        title: "52.Carrefour",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F41_Global-Village.mp3?alt=media&token=dd9dcd57-c52e-43c4-bcd8-f4da64ab65f7",
        title: "53.Global-Village",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F44_National-Bank-of-Fujerah.mp3?alt=media&token=f1704e97-6e21-4d78-9f38-2c8e4aec155d",
        title: "54.National-Bank-of-Fujerah",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F62_EMAAR.mp3?alt=media&token=fcfe31af-cecd-4e02-a26c-e745ea3f8885",
        title: "55.EMAAR",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F66_Samsung.mp3?alt=media&token=493941fd-3955-4117-ba3c-4a2bd6053a9e",
        title: "56.Samsung",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F69_Panasonic-Middle-East.mp3?alt=media&token=ec0f8eb8-8da4-418a-a947-e41dfe18056c",
        title: "57.Panasonic-Middle-East",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F70_Air-Arabia.mp3?alt=media&token=5eb7e75c-1bfc-4a73-a2ea-a136ed68a909",
        title: "58.Air-Arabia",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2F74_Expo-Centre-Sharjah.mp3?alt=media&token=a64f5fac-f95d-4ae0-903d-fb44011da047",
        title: "59.Expo-Centre-Sharjah",
        tags: ["IVR "],
      },
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FAl%20Futtaim_Move%20to%20Change_survey_A.mp3?alt=media&token=1e70bc91-7ff0-45ca-8059-6ffe285001b1",
        title: "60.Al Futtaim_Move to Change_survey_A",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FAl%20Futtaim_Move%20to%20Change_survey_E.mp3?alt=media&token=b083b8dd-72dd-449f-b063-e5f514bc4abb",
        title: "61.Al Futtaim_Move to Change_survey_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FAl%20Futtaim_Thank%20you%20for%20your%20call_A.mp3?alt=media&token=d30ecb89-f1bc-4f91-a3d0-54dc4d15b4f6",
        title: "62.Al Futtaim_Thank you for your call_A",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FAl%20Futtaim_Thank%20you%20for%20your%20call_E.mp3?alt=media&token=a91c58cf-5cd5-4717-a85d-c2f83de0268d",
        title: "63.Al Futtaim_Thank you for your call_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FAl%20Rayyan-Hilton%20Hotel_A_E.mp3?alt=media&token=51bf13f9-9512-46dd-96d8-717728e16b93",
        title: "64.Al Rayyan-Hilton Hotel_A_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FAl-Futtaim%20Group_CM-1000-AR.mp3?alt=media&token=4ea2e666-a83d-4189-a8f6-c16f7027626b",
        title: "65.Al-Futtaim Group_CM-1000-AR",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FAl-Futtaim%20Group_CM-1000-EN.mp3?alt=media&token=e1db717f-acdb-4b65-a19a-174878fc90a0",
        title: "66.Al-Futtaim Group_CM-1000-EN",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FBarraquer%20Eye%20Hospital_A.mp3?alt=media&token=76af1258-fdfa-4e94-a8eb-74464a0345f2",
        title: "67.Barraquer Eye Hospital_A",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FBarraquer%20Eye%20Hospital_E.mp3?alt=media&token=0a5527e8-a676-465e-aee8-bb268aebd9a8",
        title: "68.Barraquer Eye Hospital_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FBiits%20Spira_E_A.mp3?alt=media&token=50f5df40-1a17-49e4-9d20-233df1aab339",
        title: "69.Biits Spira_E_A",
        tags: ["IVR "],
      },

       
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FCarlton%20Downtown_E%26A.mp3?alt=media&token=b5e75cff-b218-4798-ab1e-3dcbd9e6bfca",
        title: "70.Carlton Downtown_E&A",
        tags: ["IVR "],
      },
     
     
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FEMARATECH_E%26A.mp3?alt=media&token=1dd64ade-2171-42e5-b4d1-b623ee1f805f",
        title: "71.EMARATECH_E&A",
        tags: ["IVR "],
      },
      
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FFederal-Transport-Authority_A.mp3?alt=media&token=d8e8fe49-a55b-4086-84c7-ef5b7e992aaa",
        title: "72.Federal-Transport-Authority_A",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FFederal-Transport-Authority_E.mp3?alt=media&token=d1b67b90-5c80-4d37-a831-dbf3a6796905",
        title: "73.Federal-Transport-Authority_E",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FFederal-Transport-Authority_U.mp3?alt=media&token=6f0532d1-e496-4ac9-9c50-58fc9c922887",
        title: "74.Federal-Transport-Authority_U",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FFinance%20House_A.mp3?alt=media&token=7a172223-0523-44b6-9c1d-f016dd277eb9",
        title: "75.Finance House_A",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FFinance%20House_E.mp3?alt=media&token=0e37bc27-ca1f-4a81-8262-819bcec03837",
        title: "76.Finance House_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FFinance%20House_H.mp3?alt=media&token=4e10e8f2-d586-43a3-894c-9656852d5973",
        title: "77.Finance House_H",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FGEMS%20School%20Dubai_A_E.mp3?alt=media&token=7049d9fc-429c-497d-903e-1b354c40e098",
        title: "78.GEMS School Dubai_A_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FHilton%20Hotel%20Dubal%20Busness%20Bay_A_E.mp3?alt=media&token=5da5ab0b-f074-4269-ad75-16d2cd68219c",
        title: "79.Hilton Hotel Dubal Busness Bay_A_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FIKEA%20%20Abu%20Dhabi%20Yas_A.mp3?alt=media&token=dfcf4bb4-8031-43ab-912b-6b434671ff97",
        title: "80.IKEA Abu Dhabi Yas_A",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FIKEA%20%20Abu%20Dhabi%20Yas_E.mp3?alt=media&token=3ada1787-c842-4b24-82a1-e674184df58b",
        title: "81.IKEA Abu Dhabi Yas_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FIKEA%20Alain_A.mp3?alt=media&token=279ed40a-c1da-4c4b-b1cf-e8b07058f961",
        title: "82.IKEA Alain_A",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FIKEA%20Alain_E.mp3?alt=media&token=b4ea439a-0e19-48ef-914a-90242591336d",
        title: "83.IKEA Alain_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FIKEA_A.mp3?alt=media&token=3e170b62-1b6a-440f-9ba6-1f0be171f7ae",
        title: "84.IKEA_A",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FIKEA_E.mp3?alt=media&token=284126d0-200e-4fba-9dd2-9f0b67e13cc9",
        title: "85.IKEA_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FJebel-Ali-Free-Zone-Customs.mp3?alt=media&token=3de4db04-7e5c-4f84-8ddc-a67c23a810d8",
        title: "86.Jebel-Ali-Free-Zone-Customs",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FMinistry%20of%20Community%20Development_A.mp3?alt=media&token=861e80a5-2efc-4934-bcd5-9f75553005b3",
        title: "87.Ministry of Community Development_A",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FMinistry%20of%20Community%20Development_E.mp3?alt=media&token=fd842e91-d026-4ccb-8730-491c1b183009",
        title: "88.Ministry of Community Development_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FSAAS%20Properties_E_A.mp3?alt=media&token=d8d331a4-1a9c-4c0a-9972-1c86596cbce4",
        title: "89.SAAS Properties_E_A",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FSharjah%20Nurseries%20contact%20center_A.mp3?alt=media&token=05134c8e-477c-4a5e-8400-f3523b3c76d1",
        title: "90.Sharjah Nurseries contact center_A",
        tags: ["IVR "],
      },

      

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTafaseel%20%20DCCA_%20A_E.mp3?alt=media&token=b1adfec5-02c9-4edd-b5fd-fd83929168b7",
        title: "91.Tafaseel DCCA_ A_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTafaseel%20%20DCCA_E.mp3?alt=media&token=d494316e-b783-4165-8f5b-d6d6d144b465",
        title: "92.Tafaseel DCCA_E",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTafaseel%20BPO_A.mp3?alt=media&token=669d9581-ae4e-447a-b67a-2fa147080d2f",
        title: "93.Tafaseel BPO_A",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTafaseel%20BPO_E.mp3?alt=media&token=19a9ce3c-e947-4bc4-8c3b-d198de0621d6",
        title: "94.Tafaseel BPO_E",
        tags: ["IVR "],
      },

      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTelepeformence_ADGCC_A.mp3?alt=media&token=b785c300-6603-4ec9-92ad-b62c120729c8",
        title: "95.Telepeformence_ADGCC_A",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTelepeformence_ADGCC_E.mp3?alt=media&token=c8aa142e-1f25-42b0-8a54-a0993b34bdda",
        title: "96.Telepeformence_ADGCC_E",
        tags: ["IVR "],
      },

      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTeleperformec%20DTC_WEL_CUS_A.mp3?alt=media&token=bc135d93-98de-40ff-90cf-c3bd8cc52687",
        title: "97.Teleperformance DTC_WEL_CUS_A",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTelepeformence_ADGCC_E.mp3?alt=media&token=c8aa142e-1f25-42b0-8a54-a0993b34bdda",
        title: "98.Telepeformance_ADGCC_E",
        tags: ["IVR "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTeleperformec%20DTC_WEL_CUS_A.mp3?alt=media&token=bc135d93-98de-40ff-90cf-c3bd8cc52687",
        title: "99.Teleperformance DTC_WEL_A",
        tags: ["IVR "],
      },

       /* {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTeleperformec%20DTC_WEL_CUS_E.mp3?alt=media&token=28b6fbcd-c428-4d7a-8cc5-4ea6db657f10",
        title: "100.Teleperformance DTC_WEL_E",
        tags: ["IVR "],
      },
     {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTeleperformec%20DTC_WEL_DR_U.mp3?alt=media&token=21585fef-3895-47b0-9005-499745371400",
        title: "101.Teleperformec DTC_WEL_U",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTeleperformence%20%20DET_Saturday%20Off-DED_A.mp3?alt=media&token=3e047c69-4c4e-4dae-97f4-5410aeac5711",
        title: "102.Teleperformence  DET_Saturday_A",
        tags: ["IVR "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIVR%2FTeleperformence%20%20DET_Saturday%20Off-DED_E.mp3?alt=media&token=c671be0a-35ad-4086-bfae-2c4885482219",
        title: "103.Teleperformence  DET_SaturdayOff_E",
        tags: ["IVR "],
      }, */


       
  ];


  const tracks2 = [
   
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FOHM%2F01_Splash.mp3?alt=media&token=41289ef4-18fc-4f1e-990c-4396349ecdc5",
        title: "01.Splash",
        tags: ["On Hold Message "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FOHM%2F03_AXA.mp3?alt=media&token=88eba4de-8e1a-4f63-8fbf-a4ac719862de",
        title: "02.AXA",
        tags: ["On Hold Message "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FOHM%2F04_Union-Properties.mp3?alt=media&token=9025f2b4-a847-45ff-ba91-b053c59cf6a0",
        title: "03.Union-Properties",
        tags: ["On Hold Message "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FOHM%2F11_British-Petrolium.mp3?alt=media&token=f158aacc-ed89-40c7-9e9f-bbe05f94c015",
        title: "04.British-Petrolium",
        tags: ["On Hold Message "],
      },
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FOHM%2FAl%20Rayyan-Hilton%20Hotel_A_E.mp3?alt=media&token=67e2278a-eee5-4f2e-a164-cfda163c8674",
        title: "05.Al Rayyan-Hilton Hotel_A_E",
        tags: ["On Hold Message "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FOHM%2FBiits%20Spira_E_A.mp3?alt=media&token=49f3d06f-4be6-4ba5-a1fd-45d714fd7cc1",
        title: "06.Biits Spira_E_A",
        tags: ["On Hold Message "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FOHM%2FGEMS%20School%20Dubai_A_E.mp3?alt=media&token=69c772c8-1efb-4629-b434-5913ccf204d4",
        title: "07.GEMS School Dubai_A_E",
        tags: ["On Hold Message "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FOHM%2FHilton%20Hotel%20Dubal%20Busness%20Bay.mp3?alt=media&token=62fc08f4-b89a-4b4e-aa5a-2607fc547e00",
        title: "08.Hilton Hotel Dubal Busness Bay",
        tags: ["On Hold Message "],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FOHM%2FSAAS%20Properties_E_A.mp3?alt=media&token=2bc9e324-76a1-4944-ac11-b05143ccdc7b",
        title: "09.SAAS Properties_E_A",
        tags: ["On Hold Message "],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FOHM%2FCarlton_Downtown_E%26A.mp3?alt=media&token=1768f080-682a-45f9-af9f-cc632ce1b397",
        title: "10.Carlton_Downtown_E&A",
        tags: ["On Hold Message "],
      },




    ];
      const tracks3 = [
   
        {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F01_Dalili-RTA.mp3?alt=media&token=4fb3c64c-955e-4c7d-9e73-add8e61a5899",
            title: "01.Dalili-RTA",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F02_Lionel-Richi.mp3?alt=media&token=e88d9c92-b83a-40ac-87d1-884ac95954fa",
            title: "02.Lionel-Richi",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibcstudio2024.appspot.com/o/Radio%20Spot%2F03_Captian-Liquid.mp3?alt=media&token=df914484-271e-4ee6-bcae-1191877e26d6",
            title: "03.Captian-Liquid",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F04_Sega-Republic.mp3?alt=media&token=5f2eae36-50aa-48ee-9fee-82f48f9dd418",
            title: "04.Sega-Republic",
            tags: ["Radio Spot"],
          },
          
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F05_Dial-_-Dine.mp3?alt=media&token=1ca12d83-95ba-430d-8dbf-8191b1b8b879",
            title: "05.Dial-_-Dine",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F06_Shivaki.mp3?alt=media&token=17801082-ed72-4989-93aa-9755795a83f6",
            title: "06.Shivaki",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F07_Marina-Mall_ENG.mp3?alt=media&token=14559d76-c5c0-4566-b866-3e4ded77b9d5",
            title: "07.Marina-Mall_ENG",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F08_SASA-Liquid-blue.mp3?alt=media&token=53378174-7b42-4cbb-a9b9-2f271668c8ac",
            title: "08.SASA-Liquid-blue",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F09_Zulekha-Hospital_English.mp3?alt=media&token=6006ee5d-715b-4334-87e1-cfaa1dc3ffec",
            title: "09.Zulekha-Hospital_English",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F10_Zulekha-Hospital_hindi.mp3?alt=media&token=bdd5cf97-4957-4c71-8fc3-6d328f645d38",
            title: "10.Zulekha-Hospital_hindi",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F11_Western-Union_hindi.mp3?alt=media&token=1f273b23-f08c-4726-94e6-5326c97daf0f",
            title: "11.Western-Union_hindi",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F12_Zulekha-Hospital_Malayalam.mp3?alt=media&token=68d3f4be-1bce-4adf-80ef-fc2ee4e13657",
            title: "12.Zulekha-Hospital_Malayalam",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F14_Khaleej-Times.mp3?alt=media&token=058866ac-cc19-4478-a1c0-ae0db00cd92f",
            title: "13.Khaleej-Times",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F15_Neocare_Malayalam.mp3?alt=media&token=f0770ec0-a202-4068-91a6-50c9e8630693",
            title: "14.Neocare_Malayalam",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F16_AFC-Holidays.mp3?alt=media&token=0f422879-9fc7-452b-9680-4ea2d09bfa46",
            title: "15.AFC-Holidays",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F17_Amber-Clinic.mp3?alt=media&token=e5b804a1-2c0d-4eb1-91c4-dde217243f21",
            title: "16.Amber-Clinic",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F18_Captian-liquid-2.mp3?alt=media&token=0a13dee6-ff85-40b4-8abc-8054562d16d5",
            title: "17.Captian-liquid-2",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F19_HSBC_English.mp3?alt=media&token=931e522f-3832-4777-a1a2-69fe91c5f46e",
            title: "18.HSBC_English",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F20_Canadian-University_Arabic.mp3?alt=media&token=b228b366-840c-4278-9841-d4a3258eb65c",
            title: "19.Canadian-University_Arabic",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F21_Dial-_-Dine-2.mp3?alt=media&token=c46918de-1f1b-4fad-8c32-94d7eb0b0c04",
            title: "20.Dial-_-Dine-2",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F22_JK-White-Cement_ENG.mp3?alt=media&token=4d83ad2b-5f4f-4ddb-9d9a-ce855320f4c0",
            title: "21.JK-White-Cement_ENG",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F25_Kundan_Jewl_hindi.mp3?alt=media&token=ba98406d-199f-4db6-af09-c5027c1b92c6",
            title: "22.Kundan_Jewl_hindi",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F25_Marina-Mall_ARB.mp3?alt=media&token=c98b820a-1955-46ba-bb62-e4f3379f8228",
            title: "23.Marina-Mall_ARB",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F27_Neocare_English.mp3?alt=media&token=771ab95d-4238-45d9-ae3d-a7d2f13a8d26",
            title: "24.Neocare_English",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F29_Qatar-Airwayse_English.mp3?alt=media&token=f56e474e-7c91-467e-9792-1d70e308604c",
            title: "25.Qatar-Airwayse_English",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F30_Roko.mp3?alt=media&token=7a0a6458-aba1-40b3-8de7-d958921b43eb",
            title: "26.Roko",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F31_VLCC_Arabic.mp3?alt=media&token=85d1cd22-baf0-43bc-849e-dfc3caf93f86",
            title: "27.VLCC_Arabic",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2F32_Zulekha-Hospital_Arabic.mp3?alt=media&token=65eeff45-6d54-446e-998d-09c4c610ec36",
            title: "28.Zulekha-Hospital_Arabic",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FAFC-Holidays-2friends.mp3?alt=media&token=a1f020c5-250e-465e-9d42-ec924b042ab5",
            title: "29.AFC-Holidays-2friends",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FAFC-Holidays_Doctor_Patient.mp3?alt=media&token=aa69f3b1-b145-4561-bea5-f394bb38cfac",
            title: "30.AFC-Holidays_Doctor_Patient",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FAmerican-Hospital_Post-Launch-F.mp3?alt=media&token=85bd4baf-aa7b-47df-800c-4cae9164745e",
            title: "31.American-Hospital_Post-Launch-F",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FAmerican-Hospital_Prelaunch_M.mp3?alt=media&token=b9a99e97-3c9a-489a-9ae3-0e87b7a6e9d5",
            title: "32.American-Hospital_Prelaunch_M",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FBusinessware_RD_1.mp3?alt=media&token=dc0dd030-cbcc-473a-8e1e-4dcce9b44d24",
            title: "33.Businessware_RD_1",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FDubai-Property-Show-1.mp3?alt=media&token=c2bda090-36b1-4a8d-abde-e379252dcc3c",
            title: "34.Dubai-Property-Show-1",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FDubai-Property-Show-3.mp3?alt=media&token=238f3d67-55c2-41f3-ab45-0e695faeb83f",
            title: "35.Dubai-Property-Show-3",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FDubai-Property-Show-4.mp3?alt=media&token=397b746e-53c8-4c93-a879-cd26c0a87b03",
            title: "36.Dubai-Property-Show-4",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FDubai-property-show-2.mp3?alt=media&token=6f26b049-24c6-48b5-842b-a910f9cab4be",
            title: "37.Dubai-property-show-2",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FGrand-Excelsior-Sharjah_ARB.mp3?alt=media&token=8f5c1133-90fa-42ea-96d9-c7f589dd8dd1",
            title: "38.Grand-Excelsior-Sharjah_ARB",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FLLH_Hospital_M.mp3?alt=media&token=328814fd-0199-438a-b5b3-aca4090a42b6",
            title: "39.LLH_Hospital_M",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FVLCC-Assurance.mp3?alt=media&token=e47c8c53-3a1b-4f95-84a5-2d847672da01",
            title: "40.VLCC-Assurance",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FVLCC-Radio-Spot_English.mp3?alt=media&token=f56ad539-879a-4215-98a3-20e6f0b9dc7c",
            title: "41.VLCC-Radio-Spot_English",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FVLCC-Radio-Spot_Malyalam.mp3?alt=media&token=c5e9522a-7694-449b-ae07-b12046c41224",
            title: "42.VLCC-Radio-Spot_Malyalam",
            tags: ["Radio Spot"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FRadioSpot%2FVTAC-LED-Lights_HS_1.mp3?alt=media&token=6b843657-ab1d-4928-a22d-4e007d5075bd",
            title: "43.VTAC-LED-Lights_HS_1",
            tags: ["Radio Spot"],
          },



  ];

  const tracks4 = [
   
    
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FDubai%20Municipality%20%20Academy.mp3?alt=media&token=62cc39a6-08a5-4444-821f-5ab3b9eb2862",
      title: "01.Dubai Municipality  Academy",
      tags: ["Announcements"],
    },

    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FDubai%20Frame_English.mp3?alt=media&token=f2bec2d2-fec3-4035-99a8-6415e51e8225",
      title: "02.Dubai Frame_English",
      tags: ["Announcements"],
    },

    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FDubai%20Frame_Arabia.mp3?alt=media&token=6ae63495-7d5c-4d0b-b040-02df9b203ed0",
      title: "03.Dubai Frame_Arabic",
      tags: ["Announcements"],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FAir%20arabia%20Bording_Msg%20_French.mp3?alt=media&token=0973588d-6c1c-45b5-b3d0-0ea04ad27c6f",
      title: "04.Air_Arabia_Boarding _F",
      tags: ["Announcements"],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FAir%20arabia%20Bording_Msg_Russian.mp3?alt=media&token=cacc537c-81f0-4824-ac46-0a161b231e81",
      title: "05.Arabia_Boarding_Russian",
      tags: ["Announcements"],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FAir%20arabia%20Bording_Msg_Arabic.mp3?alt=media&token=9a150b99-a703-4e6d-9f90-9c4b0099ca4d",
      title: "06.Arabia_Boarding_A",
      tags: ["Announcements"],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FAir%20arabia%20Bording_Msg_Bengali.mp3?alt=media&token=3abd7f4c-3fcb-4153-ae93-35f137eaaea1",
      title: "07.Air_Arabia_Boarding_B",
      tags: ["Announcements"],
    },
    
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FAir%20arabia%20Bording_Msg_English.mp3?alt=media&token=9f32f576-0bc7-41f7-b367-41bd3a355744",
      title: "08.Air_Arabia_Boarding_E",
      tags: ["Announcements"],
    },

    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FAir%20arabia%20Bording_Msg_Hindi.mp3?alt=media&token=e9681773-fec6-4d2d-8efa-6c0a663e51db",
      title: "09.Air_Arabia_Boarding_H",
      tags: ["Announcements"],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FAir%20arabia%20Bording_Msg_Urdu.mp3?alt=media&token=eb1c20ba-66c3-4ce2-a418-0ccd67fdf648",
      title: "10.Air_Arabia_Boarding_U",
      tags: ["Announcements"],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FFly%20Arna%20Bording%20Message_Ar.mp3?alt=media&token=3a05a1f6-d7f2-4032-be79-feab0686aea0",
      title: "11.Fly Arna Bording Message_Ar",
      tags: ["Announcements"],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FFly%20Arna%20Bording%20Message_E.mp3?alt=media&token=b3b9f57a-7ccf-4be6-84ef-2fb18be40964",
      title: "12.Fly Arna Bording Message_E",
      tags: ["Announcements"],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FFly%20Arna%20Bording%20Msg_Russian.mp3?alt=media&token=196e1e9c-918b-4411-bd32-162cf7c67137",
      title: "13.Fly Arna Bording Message_Russian",
      tags: ["Announcements"],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FFly%20Jinnah%20_Boarding_E.mp3?alt=media&token=4f099cc7-390f-47ce-9a3d-ac6a291d2f32",
      title: "14.Fly Jinnah _Boarding_E",
      tags: ["Announcements"],
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FFly%20Jinnah%20_Boarding_U.mp3?alt=media&token=3f16ffe3-808b-4417-b8a1-24d5eed45d36",
      title: "15.Fly Jinnah _Boarding_U",
      tags: ["Announcements"],
    },
     
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FAirport_BusAnnouncement_E.mp3?alt=media&token=66a9da6f-b866-4b0f-9f3d-9c156996ceb0",
        title: "16.Airport_BusAnnouncement_E",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FAirport_Bus_Announcement_A.mp3?alt=media&token=f4cc0550-4b64-402d-91c1-ef389adeaf0d",
        title: "17.Airport_Bus_Announcement_A",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FFire-Alarm.mp3?alt=media&token=663f4d76-929a-4b80-bdfe-40980c72d1a9",
        title: "18.Fire-Alarm",
        tags: ["Announcements"],
      },
       
    
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FFuture%20Dubai_A.mp3?alt=media&token=aaa5bd7e-7362-4ec4-98ac-d01619b96761",
        title: "19.Future Dubai_A",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FFuture%20Dubai_E.mp3?alt=media&token=4ffb19a2-7736-4382-8949-e41ce76234e1",
        title: "20.Future Dubai_E",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FIn-Flight-Announcement_ARB.mp3?alt=media&token=b557bceb-82a8-416a-9624-52c8d41b9b64",
        title: "21.In-Flight-Announcement_ARB",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FIn-Flight-Announcement_BNG.mp3?alt=media&token=37c74f49-41ea-4311-9566-6e686f7f5d8e",
        title: "22.In-Flight-Announcement_BNG",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FIn-Flight-Announcement_ENG.mp3?alt=media&token=e5607ec5-ae68-4180-ba0f-da409ce8583f",
        title: "23.In-Flight-Announcement_ENG",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FIn-Flight-Announcement_FRN.mp3?alt=media&token=739f33c9-bce3-4018-8240-97fef08362fa",
        title: "24.In-Flight-Announcement_FRN",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FIn-Flight-Announcement_HINDI.mp3?alt=media&token=94064826-ba09-404d-8f68-4ca33e7f7109",
        title: "25.In-Flight-Announcement_HINDI",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FMezzanine%20Floor_A.mp3?alt=media&token=bcf47207-1d46-4f18-9e1b-fd178ae86890",
        title: "26.Mezzanine Floor_A",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FOld%20Dubai%20Museum_A.mp3?alt=media&token=e07fcce9-e10c-4642-8c99-9dd4900e0849",
        title: "27.Old Dubai Museum_A",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FOld%20Dubai%20Museum_E.mp3?alt=media&token=e282c63e-9d61-47e2-96c4-cc317ef37f53",
        title: "28.Old Dubai Museum_E",
        tags: ["Announcements"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAnnouncement%2FShop-Closing_MAX.mp3?alt=media&token=5160c882-05db-4114-a5f1-a841a420e256",
        title: "29.Shop-Closing_MAX",
        tags: ["Announcements"],
      },



];


const tracks5 = [
   
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2F56_Volvo-On-Call.mp3?alt=media&token=7f8c1ca6-528f-4151-8e34-80494dc336e5",
        title: "01.Volvo-On-Call",
        tags: ["Automobiles"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FCar-Fare-Rent-A-Car.mp3?alt=media&token=165be75a-ad6d-4147-adf2-5d196c95c6c2",
        title: "02.Car-Fare-Rent-A-Car",
        tags: ["Automobiles"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FFerrari-Roadside-Assistance.mp3?alt=media&token=6f3548d9-ca6a-47e3-94d5-f1a2b0d0d5ad",
        title: "03.Ferrari-Roadside-Assistance",
        tags: ["Automobiles"],
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FFord-Road-Assist.mp3?alt=media&token=4fed8dbb-6e7d-4602-94e4-9aa00ca50a35",
        title: "04.Ford-Road-Assist",
        tags: ["Automobiles"],
      },
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FHyundai-Showroom.mp3?alt=media&token=1f2b2454-bd25-4e2a-bcb8-ecfe01f0df1a",
        title: "05.Hyundai-Showroom",
        tags: ["Automobiles"],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FInfiniti-Roadside-Assistance.mp3?alt=media&token=6802eecd-7b20-4f4b-92a9-dfd761966f32",
        title: "06.Infiniti-Roadside-Assistance",
        tags: ["Automobiles"],
      },
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FJaguar-Total-Care.mp3?alt=media&token=b927715f-9aef-425f-ac32-3e24749725a6",
        title: "07.Jaguar-Total-Care",
        tags: ["Automobiles"],
      },
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FJaguar-and-Land-Rover-Total-Care.mp3?alt=media&token=d866a63d-de57-407d-862f-14ff9c052b7d",
        title: "08.Jaguar-and-Land-Rover-Total-Care",
        tags: ["Automobiles"],
      },
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FKia-Showroom.mp3?alt=media&token=85916ad3-0cfb-456d-9c9b-7681f251a6ed",
        title: "09.Kia-Showroom",
        tags: ["Automobiles"],
      },
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FLand-Rover-Total-Care.mp3?alt=media&token=8fd373b5-fa9d-4fe3-962c-79f2a520c76e",
        title: "10.Land-Rover-Total-Care",
        tags: ["Automobiles"],
      },
      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FMaserati-Roadside-Assistance.mp3?alt=media&token=601ff0b3-e7ee-4f73-ac68-1a992d771611",
        title: "11.Maserati-Roadside-Assistance",
        tags: ["Automobiles"],
      },

      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FPorsche-Assistance.mp3?alt=media&token=83e9129a-88ac-438a-af1d-544c0ecc4ecb",
        title: "12.Porsche-Assistance",
        tags: ["Automobiles"],
      },

      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FPorsche-Spyder-Assistance.mp3?alt=media&token=52505d6f-199c-4206-9cea-7dd409d9341d",
        title: "13.Porsche-Spyder-Assistance",
        tags: ["Automobiles"],
      },

      
      {
        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FAutomobiles%2FPorsche-VIP-Assistance.mp3?alt=media&token=3a136d6b-2481-40f2-91c7-afd858233246",
        title: "14.Porsche-VIP-Assistance",
        tags: ["Automobiles"],
      },

      
];

const tracks6 = [
   
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F01_Emirates-NBD.mp3?alt=media&token=d1f8569b-f24c-498c-96ca-d2490d321136",
          title: "01.Emirates-NBD",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F02_Emirates-Islamic-Bank.mp3?alt=media&token=7c6e91e8-2cdf-4d33-82f2-fe88a5120131",
          title: "02.Emirates-Islamic-Bank",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F03_AXA.mp3?alt=media&token=d63279b7-59ba-4798-926d-66048f5e0c19",
          title: "03.AXA",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F04_Bank-Muscat.mp3?alt=media&token=254aa04d-77ab-4e93-9ea4-d673d35fc4c9",
          title: "04.Bank-Muscat",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F11_Western-Union_hindi.mp3?alt=media&token=ed4ef988-2624-4800-93b6-0d2b08aa5d98",
          title: "05.Western-Union_hindi",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F17.Majid-Al-Futtaim-Finance.mp3?alt=media&token=4f649863-c3f3-405d-865d-843da1f3f0e",
          title: "06.Majid-Al-Futtaim-Finance",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F19_Barwa-Bank.mp3?alt=media&token=bc287f3b-fbaa-4994-bb05-0b3972f89bb0",
          title: "07.Barwa-Bank",
          tags: ["Banks Financial"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F19_HSBC_English.mp3?alt=media&token=bba09d47-a255-4179-9509-8a4315e1e611",
          title: "08.HSBC_English",
          tags: ["Banks Financial"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F21_Bank-of-sharjah.mp3?alt=media&token=fdc3a423-e030-472b-a858-6c8d2a72947a",
          title: "09.Bank-of-sharjah",
          tags: ["Banks Financial"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F23_Dubai-First.mp3?alt=media&token=0b31e369-a11b-436e-9ca7-bc229aedfc29",
          title: "10.Dubai-First",
          tags: ["Banks Financial"],
        },
        
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F23_HSBC_Arabic.mp3?alt=media&token=73be23c3-111b-4bef-ba33-1670d7a0e29a",
          title: "11.HSBC_Arabic",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F25_FGB.mp3?alt=media&token=dc1f4c76-776e-4eff-bb3b-a8285025945f",
          title: "12.FGB",
          tags: ["Banks Financial"],
        },
        
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F30_United-Bank-Ltd_UBL.mp3?alt=media&token=c78dd376-492b-4178-9f56-c451782f407b",
          title: "13.United-Bank-Ltd_UBL",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F33_Axis-bank.mp3?alt=media&token=2076729e-5ff7-43b8-b47c-2ff0e638f161",
          title: "14.Axis-bank",
          tags: ["Banks Financial"],
        },
        
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F41_New-Age-Insurance.mp3?alt=media&token=f3c138d8-6a38-44f9-9581-b94fe2100060",
          title: "15.New-Age-Insurance",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F42_Sharjah-Islamic-Bank.mp3?alt=media&token=3b458c31-d781-4b3a-9f41-382a974454b2",
          title: "16.Sharjah-Islamic-Bank",
          tags: ["Banks Financial"],
        },
        
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F44_National-Bank-of-Fujerah.mp3?alt=media&token=7e8cdaaa-4d81-402d-9bf2-ea9d0e73bb33",
          title: "17.National-Bank-of-Fujerah",
          tags: ["Banks Financial"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F46_UAE-Exchange.mp3?alt=media&token=9c9b9327-3215-4da5-a0fb-3bc553156fd7",
          title: "18.UAE-Exchange",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F49_Al-Masraf-bank.mp3?alt=media&token=613c622d-6ba6-4c9a-b681-df9aad7792bf",
          title: "19.Al-Masraf-bank",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F54_United-Arab-Bank.mp3?alt=media&token=1ab0a099-284c-43e3-9ed9-1fa754215912",
          title: "20.United-Arab-Bank",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F57_National-Bonds.mp3?alt=media&token=50abb64b-ad16-495c-9c69-51eac3aa03f6",
          title: "21.National-Bonds",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F58_Wall-Street-Exchange-Center-LLC.mp3?alt=media&token=241e272f-116e-40fe-9ab0-e22641b4983b",
          title: "22.Wall-Street-Exchange-Center-LLC",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F60_Abu-Dhabi-National-Insurance-Company.mp3?alt=media&token=5e68b852-e049-4058-9246-7d4d2acab0ba",
          title: "23.Abu-Dhabi-National-Insurance-Company",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F61_Amlak-Finance.mp3?alt=media&token=b3fd9be1-6f0d-497b-8b90-31671e37ad43",
          title: "24.Amlak-Finance",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F71_Al-Fardan-Exchange.mp3?alt=media&token=ea253278-2d62-44c2-8822-dc49d3dfa42e",
          title: "25.Al-Fardan-Exchange",
          tags: ["Banks Financial"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2F72_CBI-Bank.mp3?alt=media&token=646cef29-98ac-4045-bf01-5deadfac2ef5",
          title: "26.CBI-Bank",
          tags: ["Banks Financial"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2FAlliance-Housing-Bank.mp3?alt=media&token=29e4e96c-aa54-4871-9963-e8fa36e9160e",
          title: "27.Alliance-Housing-Bank",
          tags: ["Banks Financial"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2FArab-Emirates-Investment-bank.mp3?alt=media&token=ddaecf90-25a0-4f47-89b5-b6043f64a1bb",
          title: "28.Arab-Emirates-Investment-bank",
          tags: ["Banks Financial"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2FDIFC-Helpdesk-Center.mp3?alt=media&token=91e32210-4836-48a7-a93d-21efb8de478b",
          title: "29.DIFC-Helpdesk-Center",
          tags: ["Banks Financial"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2FDubai-Financial-Market_DFM.mp3?alt=media&token=85ed6548-48dc-4ab9-a095-5a3f9ce8275d",
          title: "30.Dubai-Financial-Market_DFM",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2FDubai-Gold-Commodity-Exchange.mp3?alt=media&token=9523c2ba-2d15-479c-8bbf-a06b531cf6d9",
          title: "31.Dubai-Gold-Commodity-Exchange",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2FDubai-International-Financial-Center.mp3?alt=media&token=c19111cd-96f7-453d-b6d5-f28482b13ea8",
          title: "32.Dubai-International-Financial-Center",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2FDubai-bank.mp3?alt=media&token=a946ef7e-6aae-4627-9c99-24242829f0b1",
          title: "33.Dubai-bank",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2FFinance-House.mp3?alt=media&token=825db48d-950e-4368-8b86-58160ce90628",
          title: "34.Finance-House",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2FLari-Exchange.mp3?alt=media&token=61c50c52-b419-4944-9179-6dbc08a7aeb0",
          title: "35.Lari-Exchange",
          tags: ["Banks Financial"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FBanks%20Financial%2FQatar-International-Islamic-Bank-QIIB.mp3?alt=media&token=82387535-edd1-4674-a98a-071b308a7754",
          title: "36.Qatar-International-Islamic-Bank-QIIB",
          tags: ["Banks Financial"],
        },
        


      ]

      const tracks7 = [
   
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEvents%20Exhibition%2F01_Splash.mp3?alt=media&token=b3121f1e-d093-4cb4-be33-9297c31dbb98",
          title: "01.Splash",
          tags: ["Events Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEvents%20Exhibition%2F08_Marina-Gulf.mp3?alt=media&token=95c6c1c2-5d67-4ad9-abd3-eda3e9dab745",
          title: "02.Marina-Gulf",
          tags: ["Events Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEvents%20Exhibition%2F10.Paris-Galary.mp3?alt=media&token=51668cd8-be25-494d-ab2f-8e9cb96798ec",
          title: "03.Paris-Galary",
          tags: ["Events Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEvents%20Exhibition%2F16_Banafa-Perfume.mp3?alt=media&token=dcc95ed9-bb33-45fd-9a99-981bbd484219",
          title: "04.Banafa-Perfume",
          tags: ["Events Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEvents%20Exhibition%2F38_Fitness-First.mp3?alt=media&token=5ccb7bb5-0be8-45a5-b558-04d38c8dad09",
          title: "05.Fitness-First",
          tags: ["Events Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEvents%20Exhibition%2FAl-Manara-Jewellery.mp3?alt=media&token=74d982bc-d649-4856-9794-8722bedff6f1",
          title: "06.Al-Manara-Jewellery",
          tags: ["Events Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEvents%20Exhibition%2FNabeel-Perfume.mp3?alt=media&token=644de143-efc0-4809-b114-1eeb2ac11a00",
          title: "07.Nabeel-Perfume",
          tags: ["Events Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEvents%20Exhibition%2FRoyal-Spanish-Cosmatic.mp3?alt=media&token=e6479535-98a6-483a-be27-ca5a02962af3",
          title: "08.Royal-Spanish-Cosmatic",
          tags: ["Events Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEvents%20Exhibition%2FSedar-Marcopolo.mp3?alt=media&token=fd53e389-e19e-4192-922c-c428d9a9fee8",
          title: "09.Sedar-Marcopolo",
          tags: ["Events Exhibition"],
        },


      ]

      const tracks8 = [
   
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2F37th-MidEast-watch-Jewellery-show-A.mp3?alt=media&token=5e8fcd5a-9c87-4d70-a717-20be1e426f82",
          title: "01.37th-MidEast-watch-Jewellery-show-A",
          tags: ["GCC Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2F37th-MidEast-watch-Jewellery-show-E.mp3?alt=media&token=f756035b-ebb7-44eb-9c64-555d4a525fa2",
          title: "02.37th-MidEast-watch-Jewellery-show-E",
          tags: ["GCC Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FChainese-Commodities-A.mp3?alt=media&token=00746c64-9951-4dc8-8416-8754db2be0dd",
          title: "03.Chinese-Commodities-A",
          tags: ["GCC Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FChainese-Commodities-E.mp3?alt=media&token=d80fb73d-7d75-468b-8c2f-b6f2f7b6bba7",
          title: "04.Chinese-Commodities-E",
          tags: ["GCC Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FGreen-Middle-East-A.mp3?alt=media&token=fbee5d70-86df-48a9-9825-b5679a5884f6",
          title: "05.Green-Middle-East-A",
          tags: ["GCC Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FGreen-Middle-East-E.mp3?alt=media&token=5939f276-f12e-4b65-8b26-12011ca2eb39",
          title: "06.Green-Middle-East-E",
          tags: ["GCC Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FHalal-Middle-East-A.mp3?alt=media&token=0389fcff-685c-47f0-982f-f8da59e4d9c5",
          title: "07.Halal-Middle-East-A",
          tags: ["GCC Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FHalal-Middle-East-E.mp3?alt=media&token=508a2c09-14c0-49a5-a3d2-c0e663f9f4e3",
          title: "08.Halal-Middle-East-E",
          tags: ["GCC Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FInternational-Automobile-Show-A.mp3?alt=media&token=a6d16914-360e-4623-a85e-bf1d350cd5e7",
          title: "09.International-Automobile-Show-A",
          tags: ["GCC Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FInternational-Automobile-Show-E.mp3?alt=media&token=553d91db-c468-4722-8977-aa0e46ccd373",
          title: "10.International-Automobile-Show-E",
          tags: ["GCC Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FKitchen-Equipment-Middle-East-A.mp3?alt=media&token=df9a30c0-af63-46ce-ae8d-8c7b4d9142c5",
          title: "11.Kitchen-Equipment-Middle-East-A",
          tags: ["GCC Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FKitchen-Equipment-Middle-East-E.mp3?alt=media&token=767ed27e-ec14-4d60-82ec-73983190a0af",
          title: "12.Kitchen-Equipment-Middle-East-E",
          tags: ["GCC Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FRamadan-Eid-Fair-A.mp3?alt=media&token=09a88b1b-d98d-407c-842f-f5aa30fbaa27",
          title: "13.Ramadan-Eid-Fair-A",
          tags: ["GCC Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FRamadan-Eid-Fair-E.mp3?alt=media&token=1ed74827-f140-4b4c-9494-b5d8cffca992",
          title: "14.Ramadan-Eid-Fair-E",
          tags: ["GCC Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FRamadan-Eid-Fair-E.mp3?alt=media&token=1ed74827-f140-4b4c-9494-b5d8cffca992",
          title: "15.Ramadan-Eid-Fair-E",
          tags: ["GCC Exhibition"],
        },
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FSharjah-International-Book-fair-A.mp3?alt=media&token=0c16e19d-7d24-4e18-885a-011a19bf1d27",
          title: "16.Sharjah-International-Book-fair-A",
          tags: ["GCC Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FSharjah-International-Book-fair-E.mp3?alt=media&token=291e563a-fef0-4bce-b977-212620e3cf63",
          title: "17.Sharjah-International-Book-fair-E",
          tags: ["GCC Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FThe-15th-GCC-Exhibition-A.mp3?alt=media&token=0a6ad1c3-42a2-48d6-8ae2-c3f5f4a20783",
          title: "18.The-15th-GCC-Exhibition-A",
          tags: ["GCC Exhibition"],
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGCC%20Exhibition%2FThe-15th-GCC-Exhibition-E.mp3?alt=media&token=7f48bc50-094f-4d24-b181-9aab593fac64",
          title: "19.The-15th-GCC-Exhibition-E",
          tags: ["GCC Exhibition"],
        },



        ]

        const tracks9 = [
   
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F02_KanooGroup.mp3?alt=media&token=25d97f86-1b97-48d5-8512-c8a7ce949632",
            title: "01.KanooGroup",
            tags: ["Govt. Departments"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F05_Dubai-Courts.mp3?alt=media&token=3459f53d-badd-4c5f-88bc-1a4581aac91a",
            title: "02.Dubai-Courts",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F07_Abu-Dhabi-International-Airport.mp3?alt=media&token=e90d6936-d059-4db9-b044-e446d5453c5c",
            title: "03.Abu-Dhabi-International-Airport",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F08_Dubai-Airport.mp3?alt=media&token=db0064e6-bab8-4861-91cf-827e88f05f6c",
            title: "04.Dubai-Airport",
            tags: ["Govt. Departments"],
          },
  

          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F09_Ministry-of-Labour.mp3?alt=media&token=efb7c2d8-94c2-4047-afc1-08e77b59622d",
            title: "05.Ministry-of-Labour",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F11_Abu-Dhabi-Police.mp3?alt=media&token=6775d59d-e5b8-4d5f-8394-8f990b072165",
            title: "06.Abu-Dhabi-Police",
            tags: ["Govt. Departments"],
          },
  

          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F12_Dubai-Police.mp3?alt=media&token=cdf8b600-d189-460a-bc05-c4cd6436c889",
            title: "07.Dubai-Police",
            tags: ["Govt. Departments"],
          },
  

          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F13_At-The-Top-Burj-Khalifa.mp3?alt=media&token=d1af0483-8a29-4986-b213-b5986bb9e52f",
            title: "08.At-The-Top-Burj-Khalifa",
            tags: ["Govt. Departments"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F14_Al-Ameen-Service-Dubai-Police.mp3?alt=media&token=ee08c0da-3c2b-4da1-8fea-83baa6768f97",
            title: "09.Al-Ameen-Service-Dubai-Police",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F14_Khaleej-Times.mp3?alt=media&token=d7558cee-a8db-4112-8f0a-adb7c3e1e084",
            title: "10.Khaleej-Times",
            tags: ["Govt. Departments"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F15_Abu-Dhabi-Govt-contact-centre.mp3?alt=media&token=b3aa8efd-570d-4db8-bf40-d626686cddb3",
            title: "11.Abu-Dhabi-Govt-contact-centre",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F16_Abu-Dhabi-Water-_-Electricity.mp3?alt=media&token=e4262404-0be5-4589-9e8f-4e10230d3118",
            title: "12.Abu-Dhabi-Water-_-Electricity",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F17_Ajman-Municipality.mp3?alt=media&token=8626a5ce-f8a1-46ec-aeed-9985d31eb951",
            title: "13.Ajman-Municipality",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F18.Ministry-of-Justice.mp3?alt=media&token=3ebdfcec-2c60-489a-8a1c-59ccff9031d7",
            title: "14.Ministry-of-Justice",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F18_Dubai-economic-Dept.mp3?alt=media&token=641638d8-1917-4989-920d-e4d14c6f14a8",
            title: "15.Dubai-economic-Dept",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F22_Department-of-Finance-DOF-.mp3?alt=media&token=3f36c15a-d46c-4a21-a6eb-30bdb9638d6f",
            title: "16.Department-of-Finance-DOF",
            tags: ["Govt. Departments"],
          },
  

  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F27_Sharjah-Aviation.mp3?alt=media&token=d9c62c27-9c13-44fc-8925-b712b53963e6",
            title: "17.Sharjah-Aviation",
            tags: ["Govt. Departments"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F28_Qatar-General-Electricity-Water-Corporation.mp3?alt=media&token=28d66f4a-343b-410f-a7c9-e41e58630f11",
            title: "18.Qatar-General-Electricity-Water-Corporation",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F29_Sharjah-Muncipality.mp3?alt=media&token=9c1efdf7-20bc-4ea4-8449-82130488c473",
            title: "19.Sharjah-Muncipality",
            tags: ["Govt. Departments"],
          },
  


          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F32_DP-World.mp3?alt=media&token=d19d2bad-95fc-4670-ba08-a80b76f6d642",
            title: "20.DP-World",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F41_Global-Village.mp3?alt=media&token=729dd81a-d773-4d83-8179-7b33be782932",
            title: "21.Global-Village",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F43_Tejari.mp3?alt=media&token=5707cc89-16ab-423f-be0c-eecf50800219",
            title: "22.Tejari",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F47_Health-Authority-Abu-Dhabi.mp3?alt=media&token=9a5ea221-d3d8-4d1b-867f-9a7d8328ec5c",
            title: "23.Health-Authority-Abu-Dhabi",
            tags: ["Govt. Departments"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F50_Al-Maktoom-Foundation.mp3?alt=media&token=96187b85-6de5-4df3-8652-6daa6fc1092d",
            title: "24.Al-Maktoom-Foundation",
            tags: ["Govt. Departments"],
          },
  

          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F64_Sharjah-Museum-Of-Islamic-Civilization.mp3?alt=media&token=3eeed47e-4cc2-4063-b0f6-76a22960043c",
            title: "25.Sharjah-Museum-Of-Islamic-Civilization",
            tags: ["Govt. Departments"],
          },
  
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F65_UAE-Football.mp3?alt=media&token=d070ac5b-fc6a-4a7b-ba90-7b58fc7c4868",
            title: "26.UAE-Football",
            tags: ["Govt. Departments"],
          },
  

          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F69_Panasonic-Middle-East.mp3?alt=media&token=0a7ba8ab-8088-4042-ade6-707565316489",
            title: "27.Panasonic-Middle-East",
            tags: ["Govt. Departments"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F75_Emirates-Securities.mp3?alt=media&token=7c563271-63b8-4a37-bf5c-33d246938d78",
            title: "28.Emirates-Securities",
            tags: ["Govt. Departments"],
          },
  

          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2F82_ESNAD.mp3?alt=media&token=3306f518-c80f-4914-8cf9-7b0e3db505dc",
            title: "29.ESNAD",
            tags: ["Govt. Departments"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2FAl-Habtoor.mp3?alt=media&token=c6d4d464-0d34-4719-8ce0-085f62946c3a",
            title: "30.Al-Habtoor",
            tags: ["Govt. Departments"],
          },
  

          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2FDubai-Investment-Park.mp3?alt=media&token=3f4c5163-ced0-49ec-9df3-b9933ae6fef6",
            title: "31.Dubai-Investment-Park",
            tags: ["Govt. Departments"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2FDubai-Port-and-Customs.mp3?alt=media&token=79e2e1a7-0c77-4847-8b86-6ee33e7d0cf5",
            title: "32.Dubai-Port-and-Customs",
            tags: ["Govt. Departments"],
          },

          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2FStatistics-Dept.mp3?alt=media&token=106e3364-9d5c-457c-9fee-4d964a5e17be",
            title: "33.Statistics-Dept",
            tags: ["Govt. Departments"],
          },
          {
            url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FGovt.%20Departments%2FUAE-National-Olympic-Committee.mp3?alt=media&token=7b82e857-8859-4f5f-8bc2-b75f8c0944f1",
            title: "34.UAE-National-Olympic-Committee",
            tags: ["Govt. Departments"],
          },

 
          ]


          const tracks10 = [
            {
              url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FIndustry%20Manufactures%2F06_Shivaki.mp3?alt=media&token=56125afe-7bb6-4b33-95c7-4e65f160ac44",
              title: "01.Shivaki",
              tags: ["Industry Manufactures"],
            },
            {
              url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FIndustry%20Manufactures%2F38_Gulfa-water.mp3?alt=media&token=17a85366-9491-40ba-94c0-193a13735572",
              title: "02.Gulfa-water",
              tags: ["Industry Manufactures"],
            },
            
            {
              url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FIndustry%20Manufactures%2F53_Canon-Emirates.mp3?alt=media&token=c7e8e2a9-7ac9-44e0-be39-39b668683f51",
              title: "03.Canon-Emirates",
              tags: ["Industry Manufactures"],
            },
            
            {
              url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FIndustry%20Manufactures%2F66_Samsung.mp3?alt=media&token=e8be4efd-2548-4d51-94c5-1503897e27c6",
              title: "04.Samsung",
              tags: ["Industry Manufactures"],
            },
            


            {
              url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FIndustry%20Manufactures%2FGyma-food_Bayara.mp3?alt=media&token=f744c008-1453-495d-a30e-fdbf4438609b",
              title: "05.Gyma-food_Bayara",
              tags: ["Industry Manufactures"],
            },
            

            {
              url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FIndustry%20Manufactures%2FJotun-Paint.mp3?alt=media&token=8b1e3fd8-ab10-4957-afac-316b65035c7c",
              title: "06.Jotun-Paint",
              tags: ["Industry Manufactures"],
            },
            
            {
              url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FIndustry%20Manufactures%2FPanasonic-Middle-East-1.mp3?alt=media&token=ec6d00ac-cdaf-4445-9383-3ea645639148",
              title: "07.Panasonic-Middle-East-1",
              tags: ["Industry Manufactures"],
            },
            
          
             
            ]



            const tracks11 = [
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FArabiamold-Arabic.mp3?alt=media&token=d833075a-c144-422c-8650-dc008ad275ed",
                title: "01.Arabiamold-Arabic",
                tags: ["International Trade Exhibitions"],
              },

              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FArabiamold-English.mp3?alt=media&token=7125041f-a93e-4021-838b-323116451537",
                title: "02.Arabiamold-English",
                tags: ["International Trade Exhibitions"],
              },
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FBeauty-Core-Arabic.mp3?alt=media&token=08631689-9fa0-4fb3-b87f-d7c6efcd4e4e",
                title: "03.Beauty-Core-Arabic",
                tags: ["International Trade Exhibitions"],
              },
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FBeauty-Core-English.mp3?alt=media&token=9cdf2110-b370-4e84-9e08-fa82a10ee7d0",
                title: "04.Beauty-Core-English",
                tags: ["International Trade Exhibitions"],
              },

              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FDecobuild-Arabic.mp3?alt=media&token=ec4dc82f-8901-42a6-9bea-3302d1d123be",
                title: "05.Decobuild-Arabic",
                tags: ["International Trade Exhibitions"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FDecobuild-English.mp3?alt=media&token=62ca12e4-c3ef-4172-9566-793a8d3c6dd9",
                title: "06.Decobuild-English",
                tags: ["International Trade Exhibitions"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FEducation-Show-Arabic.mp3?alt=media&token=2086acda-5d3c-461b-9f34-7000c91063ed",
                title: "07.Education-Show-Arabic",
                tags: ["International Trade Exhibitions"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FEducation-Show-English.mp3?alt=media&token=fceb09b6-1653-4d7d-babe-28a3fbf453ac",
                title: "08.Education-Show-English",
                tags: ["International Trade Exhibitions"],
              },

              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FInternational-Govt-Arabic.mp3?alt=media&token=e9389e18-a1d9-472d-bade-a3ab54622fa4",
                title: "09.International-Govt-Arabic",
                tags: ["International Trade Exhibitions"],
              },

              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FInternational-Govt-English.mp3?alt=media&token=76de73b1-a436-4d7e-abd1-0ca6dd12f927",
                title: "10.International-Govt-English",
                tags: ["International Trade Exhibitions"],
              },
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FMiddle-East-motor-tuning-show-Arabic.mp3?alt=media&token=7151e5e9-0193-42ff-8b7d-4395e44b1345",
                title: "11.Middle-East-motor-tuning-show-Arabic",
                tags: ["International Trade Exhibitions"],
              },
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FMiddle-East-motor-tuning-show-English.mp3?alt=media&token=95c2a64f-9750-4e44-8460-f71097939405",
                title: "12.Middle-East-motor-tuning-show-English",
                tags: ["International Trade Exhibitions"],
              },
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FMiddle-east-watch-Arabic.mp3?alt=media&token=b3fb83ad-a252-4247-81b5-2e02232d28d7",
                title: "13.Middle-east-watch-Arabic",
                tags: ["International Trade Exhibitions"],
              },
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FMiddle-east-watch-English.mp3?alt=media&token=b7ebf958-85d6-415d-9ed7-6fca51c7c29f",
                title: "14.Middle-east-watch-English",
                tags: ["International Trade Exhibitions"],
              },
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FNational-Career-Exhibition-Arabic.mp3?alt=media&token=e1011564-6253-4db8-ad24-06d1bbf67a8d",
                title: "15.National-Career-Exhibition-Arabic",
                tags: ["International Trade Exhibitions"],
              },
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FNational-Career-Exhibition-English.mp3?alt=media&token=246d5392-fcd4-47cb-bb6a-c459c482343e",
                title: "16.National-Career-Exhibition-English",
                tags: ["International Trade Exhibitions"],
              },
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FPerfect-wedding-show-Arabic.mp3?alt=media&token=1f188b8f-f09e-46bf-b1e4-548f8818ae39",
                title: "17.Perfect-wedding-show-Arabic",
                tags: ["International Trade Exhibitions"],
              },
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FPerfect-wedding-show-English.mp3?alt=media&token=10e26d40-2df5-4bcc-b6d5-baad1c47402c",
                title: "18.Perfect-wedding-show-English",
                tags: ["International Trade Exhibitions"],
              },
              
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FPlastivision-Arabia-Arabic.mp3?alt=media&token=2361db22-4e2f-4d58-ac3a-a4ec8556f0a3",
                title: "19.Plastivision-Arabia-Arabic",
                tags: ["International Trade Exhibitions"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FPlastivision-Arabia-English.mp3?alt=media&token=66ad98db-b861-4d7e-b297-0c162070e377",
                title: "20.Plastivision-Arabia-English",
                tags: ["International Trade Exhibitions"],
              },
               
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FPrint-pack-arabia-Arabic.mp3?alt=media&token=d34bca5e-dfc2-4b51-85f3-d6670db0ea5d",
                title: "21.Print-pack-arabia-Arabic",
                tags: ["International Trade Exhibitions"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FPrint-pack-arabia-English.mp3?alt=media&token=22c6442c-09d9-4c99-833a-e5f6987dfa14",
                title: "22.Print-pack-arabia-English",
                tags: ["International Trade Exhibitions"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FSteelFab-2014-Arbic.mp3?alt=media&token=4b391c75-08af-4f68-8c9d-0a3d16d7b333",
                title: "23.SteelFab-2014-Arbic",
                tags: ["International Trade Exhibitions"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FSteelFab-2014-English.mp3?alt=media&token=ecd5bd1f-09d4-482e-8d2f-bee0282a0b8f",
                title: "24.SteelFab-2014-English",
                tags: ["International Trade Exhibitions"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FWorld-trade-week-Arabic.mp3?alt=media&token=05550b93-178e-4f75-bb5f-9870c7a5c14e",
                title: "25.World-trade-week-Arabic",
                tags: ["International Trade Exhibitions"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FInternational%20Trade%20Exhibitions%2FWorld-trade-week-English.mp3?alt=media&token=c20805e5-ba00-4a04-b111-99bf95b9d784",
                title: "26.World-trade-week-English",
                tags: ["International Trade Exhibitions"],
              },
            ]

            const tracks12 = [
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2F06_Delhi-Darbar-hotel.mp3?alt=media&token=af561c46-f580-40a0-a270-18dc754c231b",
                title: "01.Delhi-Darbar-hotel",
                tags: ["Mall Shops Outlets"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2F14.Sharaf-DG.mp3?alt=media&token=8deca1bb-b4ad-458a-a2c1-89d94e4fc654",
                title: "02.Sharaf-DG",
                tags: ["Mall Shops Outlets"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2F15.LuLu_Hyper.mp3?alt=media&token=1f7745cb-2b59-42ee-aba1-b04dda51d573",
                title: "03.Lulu_Hyper",
                tags: ["Mall Shops Outlets"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2F24_Dubai-Mall.mp3?alt=media&token=9c4f30c0-b34d-42dd-aaad-f5cc61b83741",
                title: "04.Dubai_Mall",
                tags: ["Mall Shops Outlets"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2F31_Spinneys.mp3?alt=media&token=dabdf7ca-8f07-490d-9657-00f4756176cf",
                title: "05.Spinneys",
                tags: ["Mall Shops Outlets"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2F39_MAX.mp3?alt=media&token=dbee0fc9-0227-46ff-81d9-1fb79dbaae55",
                title: "06.MAX",
                tags: ["Mall Shops Outlets"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2F40_Carrefour.mp3?alt=media&token=01bd5a2d-0a52-44f1-9da2-86a85cddd245",
                title: "07.Carrefour",
                tags: ["Mall Shops Outlets"],
              },

              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2F51_Al-Ghurair-Centre.mp3?alt=media&token=19d0bf39-789d-45e3-b071-448b242fa727",
                title: "08.Al-Ghurair-Centre",
                tags: ["Mall Shops Outlets"],
              },

              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2F59_360-mall-Saudi-Arabia.mp3?alt=media&token=042c5624-5f79-42f7-b8e5-1e6cc9537f9a",
                title: "09.360-mall-Saudi-Arabia",
                tags: ["Mall Shops Outlets"],
              },

              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2F77_Marina-Mall-Abu-Dhabi-.mp3?alt=media&token=9603d039-d0e3-4188-8493-8c9b417afac3",
                title: "10.Marina-Mall-Abu-Dhabi",
                tags: ["Mall Shops Outlets"],
              },

              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2FAl-Jadeed-backery.mp3?alt=media&token=7db55f58-aff9-4716-923e-c35c618f62b1",
                title: "11.Al-Jadeed-bakery",
                tags: ["Mall Shops Outlets"],
              },
              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2FKarachi-Durbar.mp3?alt=media&token=4df88fd8-e3ca-4d74-83df-9493e674627f",
                title: "12.Karachi-Durbar",
                tags: ["Mall Shops Outlets"],
              },

              {
                url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMall%20Shops%20Outlets%2FSplash-1.mp3?alt=media&token=9feb0d90-2524-45da-baa3-55d0a342ad50",
                title: "13.Splash-1",
                tags: ["Mall Shops Outlets"],
              },

        


              ]


             

              const tracks13 = [
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2F13.City-Pharmacy-Company_E.mp3?alt=media&token=d0b11191-e65c-4e4c-abf6-5745e3bf79ef",
                  title: "01.City-Pharmacy-Company_E",
                  tags: ["Medicals & Allied Industries"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2F20_Welcare-Hospital-Oman.mp3?alt=media&token=f47001b5-dc59-493f-828c-e95f23117b83",
                  title: "02.Welcare-Hospital-Oman",
                  tags: ["Medicals & Allied Industries"],
                },

                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2F22_American-Hospital.mp3?alt=media&token=98aed022-69fc-4d39-8c39-3a09053c7bbe",
                  title: "03.American-Hospital",
                  tags: ["Medicals & Allied Industries"],
                },

                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2F34_Dubai-Health-Care-City.mp3?alt=media&token=933f19d8-7aec-4c1b-b9d4-6256df1897d3",
                  title: "04.Raha-Hosiptal",
                  tags: ["Medicals & Allied Industries"],
                },

                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2F63_GMC-Hospital.mp3?alt=media&token=b0badfab-6ce3-477f-8bf3-83294e22057a",
                  title: "05.GMC-Hospital",
                  tags: ["Medicals & Allied Industries"],
                },

                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2F79_Al-Noor-Hospital.mp3?alt=media&token=44c69487-cda3-448b-b43f-885fafa0d42d",
                  title: "06.Al-Noor-Hospital",
                  tags: ["Medicals & Allied Industries"],
                },

                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FAl-Sharq-Hospital-%E2%80%93-Fujairah.mp3?alt=media&token=cf9f0453-c7b1-42e2-8143-3d923ebf604a",
                  title: "07.Al-Sharq-Hospital-–-Fujairah",
                  tags: ["Medicals & Allied Industries"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FAmerican-British-Surgical-and-Medical-center_mixdown.mp3?alt=media&token=36f94adc-f033-4c61-8ce4-5c304f34406c",
                  title: "08.American-British-Surgical-and-Medical-center_mixdown",
                  tags: ["Medicals & Allied Industries"],
                },

                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FBritish-American-Healthcare.mp3?alt=media&token=fc938cd7-6ccd-44c7-880c-4eacc5dd4d06",
                  title: "09.British-American-Healthcare",
                  tags: ["Medicals & Allied Industries"],
                },

                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FBurjeel-Hospital-Abu-Dhabi.mp3?alt=media&token=cf4c5da9-5242-45fb-b221-59a0cba514ea",
                  title: "10.Burjeel-Hospital-Abu-Dhabi",
                  tags: ["Medicals & Allied Industries"],
                },

                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FCity-Centre-Clinic.mp3?alt=media&token=0e1f38b1-5ade-468e-97d5-134fbedfe5ce",
                  title: "11.City-Centre-Clinic",
                  tags: ["Medicals & Allied Industries"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FDr.-Leila-Soudah-Medical-Clinic.mp3?alt=media&token=0c076798-61cb-472c-b233-7688e3b72dad",
                  title: "12.Dr.-Leila-Soudah-Medical-Clinic",
                  tags: ["Medicals & Allied Industries"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FDubai-Dental-Clinic.mp3?alt=media&token=c797cb87-7dab-4c3a-879a-0fdca827ae83",
                  title: "13.Dubai-Dental-Clinic",
                  tags: ["Medicals & Allied Industries"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FLLH-Hospital_mixdown.mp3?alt=media&token=d1d6bde3-9937-4faa-be0a-0dc06a9b1569",
                  title: "14.LLH-Hospital_mixdown",
                  tags: ["Medicals & Allied Industries"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FLife-care-Hospital.mp3?alt=media&token=6cf8a986-fbd7-4a57-9109-4c897ad5ffa3",
                  title: "15.Life-care-Hospital",
                  tags: ["Medicals & Allied Industries"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FMedeor-downtown-medical-Centre.mp3?alt=media&token=00a4331c-7e89-4429-ada3-3b0f7c6b15e7",
                  title: "16.Medeor-downtown-medical-Centre",
                  tags: ["Medicals & Allied Industries"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FMediclinic-Middle-East_EA-mixdown.mp3?alt=media&token=72303c64-0f90-43a9-a4f0-7107fef33918",
                  title: "17.Mediclinic-Middle-East_EA-mixdown",
                  tags: ["Medicals & Allied Industries"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FSheikh-Khalifa-General-Hospital_mixdown.mp3?alt=media&token=01b19a2b-eab7-4cea-9e42-a74f16bab054",
                  title: "18.Sheikh-Khalifa-General-Hospital_mixdown.",
                  tags: ["Medicals & Allied Industries"],
                },
                
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FMedicals%20%26%20Allied%20Industries%2FTHUMBAY-HOSPTAL.mp3?alt=media&token=d7d5d9b3-4b5a-4643-838e-1c1a675a993d",
                  title: "19.THUMBAY-HOSPTAL",
                  tags: ["Medicals & Allied Industries"],
                },
                 


              ]


              const tracks14 = [
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FOil%20%26%20Gas%2F10_EMARAT.mp3?alt=media&token=9d6b5105-035d-4663-abb8-5965c2ba13e8",
                  title: "01.EMARAT",
                  tags: ["Oil & Gas"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FOil%20%26%20Gas%2F11_British-Petrolium.mp3?alt=media&token=039be8a0-7cc4-467a-b9d5-11f7ff535326",
                  title: "02.British-Petrolium",
                  tags: ["Oil & Gas"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FOil%20%26%20Gas%2F35_Fal-Oil.mp3?alt=media&token=0a204591-c8e2-40ae-aee4-d6220eca214b",
                  title: "03.Fal-Oil",
                  tags: ["Oil & Gas"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FOil%20%26%20Gas%2F36_Gulf-Petrochem.mp3?alt=media&token=7304e464-9aac-4388-af56-2f8dcd27233b",
                  title: "04.Gulf-Petrochem",
                  tags: ["Oil & Gas"],
                },

                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FOil%20%26%20Gas%2F37_Enoc-_-Epco.mp3?alt=media&token=89d1f7f9-dafa-4aa7-857e-f625cea900aa",
                  title: "05.Enoc-_-Epco",
                  tags: ["Oil & Gas"],
                },
                 


              ]

              const tracks15 = [
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FReal%20Estate%2F02_KanooGroup.mp3?alt=media&token=8f415bb2-1ab7-4af9-acc9-096aba9bce23",
                  title: "01.KanooGroup",
                  tags: ["Real Estate"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FReal%20Estate%2F04_Union-Properties.mp3?alt=media&token=0e399f54-66f6-4268-b59c-aef51918ca4e",
                  title: "02.Union-Properties",
                  tags: ["Real Estate"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FReal%20Estate%2F21_Thirfty.mp3?alt=media&token=64bcaa19-cac4-4864-ad2c-71e8b77798bd",
                  title: "03.Thirfty",
                  tags: ["Real Estate"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FReal%20Estate%2F29_IDAMA.mp3?alt=media&token=559db7f5-6e54-4038-a898-6cd655683dd0",
                  title: "04.IDAMA",
                  tags: ["Real Estate"],
                },
                
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FReal%20Estate%2F34_Dulsco.mp3?alt=media&token=05bfcf4b-9ea7-45a0-87f4-0b112363fc6b",
                  title: "05.Dulsco",
                  tags: ["Real Estate"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FReal%20Estate%2F37_System-Construct.mp3?alt=media&token=dff3d310-bb04-4193-80bf-364c7fbab474",
                  title: "06.System-Construct",
                  tags: ["Real Estate"],
                },
                
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FReal%20Estate%2F62_EMAAR.mp3?alt=media&token=9127a11c-7a07-47a6-a7f3-6a7b88b7e2cd",
                  title: "07.EMAAR",
                  tags: ["Real Estate"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FReal%20Estate%2F67_IMDAD.mp3?alt=media&token=ff379649-68fc-44a6-aea6-32a78a7dbbdd",
                  title: "08.IMDAD",
                  tags: ["Real Estate"],
                },
                
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FReal%20Estate%2FBetter-life.mp3?alt=media&token=4408d40c-9d0e-466a-a3af-7ba7f90d674e",
                  title: "09.Better-life",
                  tags: ["Real Estate"],
                },
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FReal%20Estate%2FDAMAC.mp3?alt=media&token=44c7a1d6-8c0f-4c27-8795-e8041a0865d0",
                  title: "10.DAMAC",
                  tags: ["Real Estate"],
                },
                
                {
                  url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FReal%20Estate%2FShobha-Develeopers-LLC.mp3?alt=media&token=13de9b67-82c2-48b7-ada1-f8b97ab364c3",
                  title: "11.Shobha-Develeopers-LLC",
                  tags: ["Real Estate"],
                },
  
                ]

                
                const tracks16 = [
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FSchool%20Colleges%2F17_Dubai-Modern-High-School.mp3?alt=media&token=70f24fce-ce4f-43f8-9e16-0ca16e92945e",
                    title: "01.Dubai-Modern-High-School",
                    tags: ["School Colleges"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FSchool%20Colleges%2F26_Bits-Pilani.mp3?alt=media&token=4829c658-24f7-4f6e-8d9d-60cbfb47fe91",
                    title: "02.Bits-Pilani",
                    tags: ["School Colleges"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FSchool%20Colleges%2F33_University-of-Wollengong.mp3?alt=media&token=82364ea4-ab97-4b5c-8451-0838112f9161",
                    title: "03.University-of-Wollengong",
                    tags: ["School Colleges"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FSchool%20Colleges%2F36_Emirates-Driving-Center-EDC-.mp3?alt=media&token=4cce7a94-5811-455a-bdf8-bbe9ee8f34ea",
                    title: "04.Emirates-Driving-Center-EDC",
                    tags: ["School Colleges"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FSchool%20Colleges%2F76_Gulf-Medical-University-GMU.mp3?alt=media&token=41f6a915-7573-4228-91cd-fb272f9df5dc",
                    title: "05.Gulf-Medical-University-GMU",
                    tags: ["School Colleges"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FSchool%20Colleges%2F78_Al-Ahli-Driving-Centre.mp3?alt=media&token=c58eb4c9-a746-459a-af69-b1d0ad0f5629",
                    title: "06.Al-Ahli-Driving-Centre",
                    tags: ["School Colleges"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FSchool%20Colleges%2F81_Emirates-International-Endurance-Village.mp3?alt=media&token=c1bbd7ee-03f1-4ffd-8afb-98ce192c43ce",
                    title: "07.Amity-University",
                    tags: ["School Colleges"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FSchool%20Colleges%2FGaladhari-Group.mp3?alt=media&token=3f1e7ab9-2e00-4963-bd62-0fee95647a3d",
                    title: "08.Galadhari-Group",
                    tags: ["School Colleges"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FSchool%20Colleges%2FGems-Education.mp3?alt=media&token=aa548be0-1400-490c-9f59-fd235ce9317d",
                    title: "09.Gems-Education",
                    tags: ["School Colleges"],
                  },


                ]


                const tracks17 = [
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Faith%2FRecording-1.Introduction-to-the-museum.mp3?alt=media&token=fc691df3-77ad-4773-acca-594a4fe5e407",
                    title: "01.Recording-1.Introduction-to-the-museum",
                    tags: ["Arabic Faith"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Faith%2FRecording-2.mp3?alt=media&token=9d8ddc91-c582-434e-9293-6d20d286cbd1",
                    title: "02.Recording-2",
                    tags: ["Arabic Faith"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Faith%2FRecording-3-Faith-Gallery-Intro.mp3?alt=media&token=83aaa25b-c8fb-43f8-a75d-718f2fbc1512",
                    title: "03.Recording-3-Faith-Gallery-Intro",
                    tags: ["Arabic Faith"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Faith%2FRecording-4.Rituals-of-Hajj.mp3?alt=media&token=6a0677a4-73b3-4a60-8183-1e0edcc8687f",
                    title: "04.Recording-4.Rituals-of-Hajj",
                    tags: ["Arabic Faith"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Faith%2FRecording-5.The-Ka%E2%80%99ba.mp3?alt=media&token=e178dc8f-3af1-4206-b05c-4c8cc32943c7",
                    title: "05.Recording-5.The-Ka’ba",
                    tags: ["Arabic Faith"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Faith%2FRecording-6.The-Holy-Qur%E2%80%99an.mp3?alt=media&token=19580185-2e4a-4039-b9fc-3c40c2389ec6",
                    title: "06.Recording-6.The-Holy-Qur’an",
                    tags: ["Arabic Faith"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Faith%2FRecording-7.Calligraphy.mp3?alt=media&token=679ec4f1-d6a4-4474-87d9-12dde3f77199",
                    title: "07.Recording-7.Calligraphy",
                    tags: ["Arabic Faith"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Faith%2FRecording-8.Qur%E2%80%99an-cover-and-binding.mp3?alt=media&token=07ca02dd-0874-4a22-85cc-694848e4c365",
                    title: "08.Recording-8.Qur’an-cover-and-binding",
                    tags: ["Arabic Faith"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Faith%2FRecording-9.The-Mosque.mp3?alt=media&token=8e393b76-80be-4e2f-b7d7-2d65389e1175",
                    title: "09.Recording-9.The-Mosque",
                    tags: ["Arabic Faith"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Faith%2FRecording10.mp3?alt=media&token=29b1460c-963f-41fd-93ca-a2bd06ed81aa",
                    title: "10.Recording10",
                    tags: ["Arabic Faith"],
                  },
                 
                ]



                const tracks18 = [
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-24Oil-Lamp.mp3?alt=media&token=e51d7170-c14b-450a-80cb-e8b2cddc0fea",
                    title: "01.Recording-24Oil-Lamp",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-25-Fish-bowl-Arabic-available.mp3?alt=media&token=59fb7d1e-4074-4dfb-b030-6d7453a07940",
                    title: "02.Recording-25-Fish-bowl-Arabic-available",
                    tags: ["Arabic Art"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-26-Lustre-jar.mp3?alt=media&token=1f7b6b92-8cb4-4570-9879-f3a2304c170f",
                    title: "03.Recording-26-Lustre-jar",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-27-Mina%E2%80%99I-bowl-with-camels-1.mp3?alt=media&token=e93de51d-7143-4525-a15b-c5540db7a99d",
                    title: "04.Recording-27-Mina’I-bowl-with-camels-1",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-28-Art-Gallery-2-Intro-by-the-map-near-entrance.mp3?alt=media&token=fa1c024f-f3c0-40b4-8897-4dd1dde47299",
                    title: "05.Recording-28-Art-Gallery-2-Intro-by-the-map-near-entrance",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-29Mongol-Tunic.mp3?alt=media&token=ca8a1a65-cba3-4c8b-be76-9abd9c649f8e",
                    title: "06.Recording-29Mongol-Tunic",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-30Silver-bowl-1.mp3?alt=media&token=a0b1f523-ab93-4ef6-8e0b-9db3b7080cf2",
                    title: "07.Recording-30Silver-bowl-1",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-31.-BlueWhite-Porcelain.mp3?alt=media&token=514c1607-afe6-4550-83cd-9a77536dcfad",
                    title: "08.Recording-31.-BlueWhite-Porcelain",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-32.-Iranian-Tiles.mp3?alt=media&token=4cb98665-656e-47ee-a119-0dcdeb4e91f2",
                    title: "09.Recording-32.-Iranian-Tiles",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-33.-Ivory-handle.mp3?alt=media&token=0c1258ac-65a9-4471-b63b-0c4650b56cd7",
                    title: "10.Recording-33.-Ivory-handle",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-34.-Silver-Sprinklers.mp3?alt=media&token=1c03e98d-eb0c-4600-a873-5b21de31885f",
                    title: "11.Recording-34.-Silver-Sprinklers",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-36.-Art-Galleries-3-and-4-Intro.mp3?alt=media&token=9708e02c-2887-4ce5-b18f-8b0338bea350",
                    title: "12.Recording-36.-Art-Galleries-3-and-4-Intro",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-37.-Lidded-powder-flask.mp3?alt=media&token=2c824a43-97d0-41ae-b56a-911d193568d9",
                    title: "13.Recording-37.-Lidded-powder-flask",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-38.Neo-Mamluk-table.mp3?alt=media&token=df9f2bf0-8672-4917-b7cd-fd4b63cf788b",
                    title: "14.Recording-38.Neo-Mamluk-table",
                    tags: ["Arabic Art"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-39.-Silk-embroidered-textile-and-dress.mp3?alt=media&token=25d25835-6dd0-470b-9681-c7975abfdad4",
                    title: "15.Recording-39.-Silk-embroidered-textile-and-dress",
                    tags: ["Arabic Art"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-40.-Ceramic-Vase.mp3?alt=media&token=80f7a786-a551-4fe8-951b-9c26d0a781c4",
                    title: "16.Recording-40.-Ceramic-Vase",
                    tags: ["Arabic Art"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-41.-Glass-Goblet.mp3?alt=media&token=cf8f9c50-000d-48bd-b50d-41ba8f6d8818",
                    title: "17.Recording-41.-Glass-Goblet",
                    tags: ["Arabic Art"],
                  },


                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-42.-Model-of-American-University-of-Sharjah.mp3?alt=media&token=97868f4a-e0a5-48ae-b8f2-ac479720e19b",
                    title: "18.Recording-42.-Model-of-American-University-of-Sharjah",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-43.-Persian-Samovar.mp3?alt=media&token=55f0610f-b046-44aa-83ac-5d2fa0bc0414",
                    title: "19.Recording-43.-Persian-Samovar",
                    tags: ["Arabic Art"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-44.-Suit-of-Armour-1.mp3?alt=media&token=700fbdc1-9838-46ec-b5e8-48f77733445f",
                    title: "20.Recording-44.-Suit-of-Armour-1",
                    tags: ["Arabic Art"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-45.-Swords-and-daggers.mp3?alt=media&token=f3d5bffc-dbe5-47d5-ba74-62ddeb4e562b",
                    title: "21.Recording-45.-Swords-and-daggers",
                    tags: ["Arabic Art"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-46.-Embroidered-textiles.mp3?alt=media&token=e79e1862-23d7-4c0b-8886-62a7e4ac213b",
                    title: "22.Recording-46.-Embroidered-textiles",
                    tags: ["Arabic Art"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-47.-Religious-embroidered-textiles.mp3?alt=media&token=2617095a-84a0-41d6-840b-0eb1b06448e5",
                    title: "23.Recording-47.-Religious-embroidered-textiles",
                    tags: ["Arabic Art"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-48.-Carpet-1.mp3?alt=media&token=148a9b82-fb52-46d8-9e8c-38fd8d1b8ba1",
                    title: "24.Recording-48.-Carpet-1",
                    tags: ["Arabic Art"],
                  },

                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-50.Coins2_-1.mp3?alt=media&token=07f3d45c-7f7f-4df8-b860-b2d248945cfd",
                    title: "25.Recording-50.Coins2_-1",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-51.-Coins3-1.mp3?alt=media&token=958cb2d3-7808-43a2-b7bd-39f52224715f",
                    title: "26.Recording-51.-Coins3-1",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording-52.-Caf%C3%A9-and-Shop-1.mp3?alt=media&token=266eb9d3-9456-4151-bc15-2e5e61f437c1",
                    title: "27.Recording-52.-Café-and-Shop-1",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording21Art-Gallery-1-Intro-by-the-map-at-entrance.mp3?alt=media&token=f2aee567-951f-4942-b5bb-3336f0d45eaf",
                    title: "28.Recording21Art-Gallery-1-Intro-by-the-map-at-entrance",
                    tags: ["Arabic Art"],
                  },
                  {
                    url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Art%2FRecording23-Quranpage.mp3?alt=media&token=d64a1df3-ed9c-410d-97e7-1f5917077b98",
                    title: "29.Recording23-Quranpage",
                    tags: ["Arabic Art"],
                  },
           
                  ]

                  const tracks19 = [
                  
                    {
                      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Science%2FRecording-11.Science-Gallery-Intro-near-timeline-entrance.mp3?alt=media&token=fef0f981-4246-49c7-845c-ae44d9e83082",
                      title: "01.Recording-11.Science-Gallery-Intro-near-timeline-entrance",
                      tags: ["Arabic Science"],
                    },

                    {
                      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Science%2FRecording-12.Astronomy-1-near-observatories-display.mp3?alt=media&token=67e02f34-f61f-41fb-97fc-53fe506fa09a",
                      title: "02.Recording-12.Astronomy-1-near-observatories-display",
                      tags: ["Arabic Science"],
                    },{
                      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Science%2FRecording-13Astronomy-2-near-astrolabes-display-1.mp3?alt=media&token=7e511cb1-f2bf-4274-abe4-e62fa29d0bc8",
                      title: "03.Recording-13Astronomy-2-near-astrolabes-display-1",
                      tags: ["Arabic Science"],
                    },
                    {
                      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Science%2FRecording-14-Geography-near-Al-Idrissi-map.mp3?alt=media&token=e6ef3bc1-a65e-48f4-8299-1cac569cd405",
                      title: "04.Recording-14-Geography-near-Al-Idrissi-map",
                      tags: ["Arabic Science"],
                    },
                    {
                      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Science%2FRecording-15Medicine-near-the-medicine-section.mp3?alt=media&token=4dcefe91-2f0c-4c74-80c7-49d87598ab9a",
                      title: "05.Recording-15Medicine-near-the-medicine-section",
                      tags: ["Arabic Science"],
                    },
                    {
                      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Science%2FRecording-16.-Chemistry-near-the-chemistry-section.mp3?alt=media&token=e302d4a3-cd4b-4384-93da-35a2c8ae4056",
                      title: "06.Recording-16.-Chemistry-near-the-chemistry-section",
                      tags: ["Arabic Science"],
                    },
                    {
                      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Science%2FRecording-17Mathematics-near-the-geometry-section.mp3?alt=media&token=88c196b6-1a30-4cbf-b5ad-574956b8e16a",
                      title: "07.Recording-17Mathematics-near-the-geometry-section",
                      tags: ["Arabic Science"],
                    },{
                      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Science%2FRecording-18Military-technology-near-military-section.mp3?alt=media&token=cedbb385-018c-4a37-b156-0465811ec572",
                      title: "08.Recording-18Military-technology-near-military-section",
                      tags: ["Arabic Science"],
                    },

                    {
                      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Science%2FRecording-19-Hospital1-al-mustansiriya.mp3?alt=media&token=ca4765d1-198b-44c9-affb-28625d45aa0f",
                      title: "09.Recording-19-Hospital1-al-mustansiriya",
                      tags: ["Arabic Science"],
                    },
                    {
                      url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FArabic%20Science%2FRecording-20-Hospital2-Edirne-hospital-model.mp3?alt=media&token=c0edd1a6-9cd6-4285-a3c0-c93fbe240b09",
                      title: "10.Recording-20-Hospital2-Edirne-hospital-model",
                      tags: ["Arabic Science"],
                    },
                    ]


                    const tracks20 = [
                  
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-21Art-Gallery-1-Intro.mp3?alt=media&token=31363fa9-7215-49f0-abfd-f30bcf4a7ab8",
                        title: "01.Recording-21Art-Gallery-1-Intro",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-22Incense-burner.mp3?alt=media&token=532b8703-eb40-4ad2-8af7-ed5f514c7932",
                        title: "02.Recording-22Incense-burner",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-23.-Qur%E2%80%99an-page.mp3?alt=media&token=05c8e952-fefc-41f4-9006-addc6b569c46",
                        title: "03.Recording-23.-Qur’an-page",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-25Fish-bowl.mp3?alt=media&token=ab0dbbe0-75b3-49fd-87c6-344b914cc0d2",
                        title: "04.Recording-25Fish-bowl",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-26-Lustre-jar.mp3?alt=media&token=7db07ba0-da7b-4604-98bd-00a2c62dcef9",
                        title: "05.Recording-26-Lustre-jar",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-27-Mina%E2%80%99I-bowl-with-camels-1.mp3?alt=media&token=1edb5605-eb87-4109-aa95-2c948fab382c",
                        title: "06.Recording-27-Mina’I-bowl-with-camels-1",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-28-Art-Gallery-2-Intro.mp3?alt=media&token=e4f5c7e1-9a95-472c-9a80-95d852641a8b",
                        title: "07.Recording-28-Art-Gallery-2-Intro",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-29Mongol-Tunic-1.mp3?alt=media&token=7dce5f73-c1da-4f0e-a300-1aca365983c8",
                        title: "08.Recording-29Mongol-Tunic-1",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-30Silver-bowl-1.mp3?alt=media&token=b746b2d3-90be-4775-b845-10cded960608",
                        title: "09.Recording-30Silver-bowl-1",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-31BlueWhite-Porcelain.mp3?alt=media&token=c0d02ec7-8a07-47dc-aac2-1872a373be52",
                        title: "10.Recording-31BlueWhite-Porcelain",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-32-Iranian-Tiles.mp3?alt=media&token=b3098d49-a760-4228-b399-3ba55412a04d",
                        title: "11.Recording-32-Iranian-Tiles",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-33-Ivory-handle.mp3?alt=media&token=835e95f6-658e-4235-bbaf-f6c5deb306a0",
                        title: "12.Recording-33-Ivory-handle",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-34Silver-Sprinklers.mp3?alt=media&token=b8e05926-640f-4f8a-9269-342b57b99d19",
                        title: "13.Recording-34Silver-Sprinkler",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-36Art-Galleries-3-and-4-Intro.mp3?alt=media&token=66175b94-fc66-47ce-87ee-28b897c4cad8",
                        title: "14.Recording-36Art-Galleries-3-and-4-Intro",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-37-Lidded-powder-flask.mp3?alt=media&token=ebdd216e-1555-4ec9-844d-c23bb4bf9e0e",
                        title: "15.Recording-37-Lidded-powder-flask",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-38Neo-Mamluk-table.mp3?alt=media&token=5fd230b0-549b-48d4-90cb-539a40cdc38e",
                        title: "16.Recording-38Neo-Mamluk-table",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-39Silk-embroidered-textile-and-dress.mp3?alt=media&token=8c84f295-37aa-45bb-9ddf-6ab4e3a0b7bc",
                        title: "17.Recording-39Silk-embroidered-textile-and-dress",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-40Ceramic-Vase.mp3?alt=media&token=0f04fe59-9257-4122-86d3-c51eaf9b5c55",
                        title: "18.Recording-40Ceramic-Vase",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-41Glass-Goblet.mp3?alt=media&token=63d4e3b8-780b-4b07-84a4-f36a761cf4b9",
                        title: "19.Recording-41Glass-Goblet",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-42Model-of-American-University-of-Sharjah.mp3?alt=media&token=62900cf0-a872-4edf-93a2-68a0b3e9ec43",
                        title: "20.Recording-42Model-of-American-University-of-Sharjah",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-43Persian-Samovar.mp3?alt=media&token=a6c4d304-8460-4b43-a909-884ffaa8cdd9",
                        title: "21.Recording-43Persian-Samovar",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-44.-Suit-of-Armour-1.mp3?alt=media&token=b72299d4-2565-4e76-9df2-8ae5c9014f9c",
                        title: "22.Recording-44.-Suit-of-Armour-1",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-45.-Swords-and-daggers-1.mp3?alt=media&token=59f69f84-4943-43ec-b5f4-af5e016c40fd",
                        title: "23.Recording-45.-Swords-and-daggers-1",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-46.-Embroidered-textiles-1.mp3?alt=media&token=b55ccc46-3fa7-47b4-a5e1-5f21a34a10f7",
                        title: "24.Recording-46.-Embroidered-textiles-1",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-47Religious-embroidered-textiles.mp3?alt=media&token=ff48eff3-bc15-4bda-9e18-84108b476442",
                        title: "25.Recording-47Religious-embroidered-textiles",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-48.-Carpet-1.mp3?alt=media&token=24e5e8a4-715c-4989-9afd-bb1a5e795fc1",
                        title: "26.Recording-48.-Carpet-1",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-49-Coins1.mp3?alt=media&token=04bdd8d5-4b7c-4582-be50-ab0916c4299a",
                        title: "27.Recording-49-Coins1",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-50.Coins2_-1.mp3?alt=media&token=b66496b3-f2f9-42bd-9616-0faec8f54cea",
                        title: "28.Recording-50.Coins2_-1",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-51.-Coins3-1.mp3?alt=media&token=666023b1-13a8-459c-9a7e-3b6f1f367914",
                        title: "29.Recording-51.-Coins3-1",
                        tags: ["English Art"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording-52.-Caf%C3%A9-and-Shop-1.mp3?alt=media&token=c16ad4de-293d-4e7d-9d1a-3e62122e9d99",
                        title: "30.Recording-52.-Café-and-Shop-1",
                        tags: ["English Art"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Art%2FRecording24.-Oil-Lamp.mp3?alt=media&token=6b00cdd1-3a34-4928-8034-8e4429939c94",
                        title: "31.Recording24.-Oil-Lamp",
                        tags: ["English Art"],
                      },



                    ]

                    const tracks21 = [
                  
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Faith%2FRecording-1Introduction-to-the-museum.mp3?alt=media&token=45f1ad1a-19f4-4219-aeaf-a5031b44cefa",
                        title: "01.Recording-1Introduction-to-the-museum",
                        tags: ["English Faith"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Faith%2FRecording-2-1.mp3?alt=media&token=1dc7b9ad-9bba-4f1a-a8e5-a2e38294e6ee",
                        title: "02.Recording-2-1",
                        tags: ["English Faith"],
                      },


                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Faith%2FRecording-3-Faith-Gallery-Intro.mp3?alt=media&token=8ff81599-3545-4bf6-a8e9-beb98af4e5f6",
                        title: "03.Recording-3-Faith-Gallery-Intro",
                        tags: ["English Faith"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Faith%2FRecording-4-Rituals-of-Hajj.mp3?alt=media&token=ffc5df12-9867-411c-b8df-3ed31cc4a5f2",
                        title: "04.Recording-4-Rituals-of-Hajj",
                        tags: ["English Faith"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Faith%2FRecording-5The-Ka%E2%80%99ba.mp3?alt=media&token=ef7c3393-c69e-4848-ad81-1d856ca1c286",
                        title: "05.Recording-5The-Ka’ba",
                        tags: ["English Faith"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Faith%2FRecording-6The-Holy-Qur%E2%80%99an.mp3?alt=media&token=1d0bd746-48d4-4743-b1f3-ce8eff5c11ac",
                        title: "06.Recording-6The-Holy-Qur’an",
                        tags: ["English Faith"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Faith%2FRecording-7Calligraphy.mp3?alt=media&token=6fdf5b6f-92cd-45df-a6e6-7c0cd3869410",
                        title: "07.Recording-7Calligraphy",
                        tags: ["English Faith"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Faith%2FRecording-8-Qur%E2%80%99an-cover-and-binding.mp3?alt=media&token=219a80bb-17db-4713-a0c8-3144555a5b41",
                        title: "08.Recording-8-Qur’an-cover-and-binding",
                        tags: ["English Faith"],
                      },

                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Faith%2FRecording-9-The-Mosque.mp3?alt=media&token=65d020c9-370b-414c-b42e-71adb8f6c7db",
                        title: "09.Recording-9-The-Mosque",
                        tags: ["English Faith"],
                      },


                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Faith%2FRecording10-1.mp3?alt=media&token=af99711d-5c4f-44dd-9b67-f229ce7613fe",
                        title: "10.Recording10-1",
                        tags: ["English Faith"],
                      },


                    ]

                    const tracks22 = [
                  
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Science%2FRecording-11Science-Gallery-Intro-near-timeline-entrance.mp3?alt=media&token=7430d76a-e7f2-430b-b71e-5fb10a2d2bfd",
                        title: "01.Recording-11Science-Gallery-Intro-near-timeline-entrance",
                        tags: ["English Science"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Science%2FRecording-12Astronomy-1near-observatories-display.mp3?alt=media&token=056eac12-289c-4fd2-a0e6-be07562d377b",
                        title: "02.Recording-12Astronomy-1near-observatories-display",
                        tags: ["English Science"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Science%2FRecording-13Astronomy-2-near-astrolabes-display-1.mp3?alt=media&token=8caa8db7-34aa-435d-af7b-796f01728a70",
                        title: "03.Recording-13Astronomy-2-near-astrolabes-display-1",
                        tags: ["English Science"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Science%2FRecording-14Geography-near-Al-Idrissi-map.mp3?alt=media&token=d3d70f57-72c0-475a-9319-d9a398ef2294",
                        title: "04.Recording-14Geography-near-Al-Idrissi-map",
                        tags: ["English Science"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Science%2FRecording-15Medicine-near-the-medicine-section-1.mp3?alt=media&token=2f427d1b-0ab4-435e-a1fc-66f4d71f1897",
                        title: "05.Recording-15Medicine-near-the-medicine-section-1",
                        tags: ["English Science"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Science%2FRecording-16Chemistry-near-the-chemistry-section.mp3?alt=media&token=c3201f1d-2e49-4377-8bcf-3c8827d8eb95",
                        title: "06.Recording-16Chemistry-near-the-chemistry-section",
                        tags: ["English Science"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Science%2FRecording-17Mathematics-near-the-geometry-section-1.mp3?alt=media&token=32c2eba0-9674-45dd-a2dc-83ebf94d651c",
                        title: "07.Recording-17Mathematics-near-the-geometry-section-1",
                        tags: ["English Science"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Science%2FRecording-18Military-technology-near-military-section-1.mp3?alt=media&token=3a11f97f-ccd1-4a16-9c9b-1014072d9c26",
                        title: "08.Recording-18Military-technology-near-military-section-1",
                        tags: ["English Science"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Science%2FRecording-19Hospital1-al-mustansiriya.mp3?alt=media&token=a18edf63-c34f-41ea-a4ae-1e22dd4cd6e2",
                        title: "09.Recording-19Hospital1-al-mustansiriya",
                        tags: ["English Science"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FEnglish%20Science%2FRecording-20Hospital2-Edirne-hospital-model.mp3?alt=media&token=e1baab0c-22d5-431e-9a56-95c2cedcb037",
                        title: "10.Recording-20Hospital2-Edirne-hospital-model",
                        tags: ["English Science"],
                      },

                    ]

                    const tracks23 = [
                  
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FTelecom%2F36_Du.mp3?alt=media&token=6d021357-3756-43f8-bd83-370e192d4114",
                        title: "01.DU",
                        tags: ["Telecom"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FTelecom%2F35_Etisalat-181.mp3?alt=media&token=217ffb27-9029-453e-b988-3dd0e588e676",
                        title: "02.Etisalat-181",
                        tags: ["Telecom"],
                      },

                    ]

                    const tracks24 = [
                  
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FTransportation%2F10_Road-Transport-Authority-RTA.mp3?alt=media&token=69d86164-adba-4843-b79c-d8b022f353bb",
                        title: "01.Road-Transport-Authority-RTA",
                        tags: ["Transportation & Travels"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FTransportation%2F26_Salik.mp3?alt=media&token=b66a51fc-68bf-49ec-ba53-db7100df72ab",
                        title: "02.Salik",
                        tags: ["Transportation & Travels"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FTransportation%2F45_Zajeel.mp3?alt=media&token=237a88f3-30d7-43a7-8602-750fb3f4d58f",
                        title: "03.Zajeel",
                        tags: ["Transportation & Travels"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FTransportation%2FSKYNET.mp3?alt=media&token=fcdb14fd-3e48-4f0b-9c13-da07df1c1db8",
                        title: "04.SKYNET",
                        tags: ["Transportation & Travels"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FTransportation%2FSkycom-Express.mp3?alt=media&token=04689582-9e1e-4720-b7d1-7dee9ec5dfe5",
                        title: "05.Skycom-Express",
                        tags: ["Transportation & Travels"],
                      },
                      {
                        url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Audio%2FAudio%20Samples%2FIndustryWise%2FTransportation%2FTNT-Express_mixdown.mp3?alt=media&token=3f644911-00b8-4af4-9a8f-43d9ce2d68bf",
                        title: "06.TNT-Express_mixdown",
                        tags: ["Transportation & Travels"],
                      },

                    ]


                   



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
    playlistText: "#ffffff",
    playlistBackgroundHoverActive: "#313a52",
    playlistTextHoverActive: "#ffca09",
    fontsize: 14,
  };


export default function Audio_samples() {
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
     
       <section className="process-section-2 fade-wrapper pt-70">
       <div className='container'>
       <div className="section-heading text-center">
                 
                 <h2  data-text-animation="fade-in" data-duration="1.5">Audio Samples</h2>
                
             </div> 
      </div>
      </section>
      <div className="container">
      <div className="row"> 
      <div className="col-lg-6">
      <div className="exTab3 container pt-40"  style={{paddingLeft:10,paddingRight:10,boxShadow: '5 10 #888888'}}>	
      <Tabs>
            <TabList className='audio-category' align='center'>
            <Tab>IVR</Tab>
            <Tab>ON HOLD MESSAGES</Tab>
            <Tab>RADIO SPOT</Tab><br/>
            <a href='#iw'>INDUSTRY WISE</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href='#iw'>VOICE SAMPLES</a>
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
        <section className="process-section-2 fade-wrapper pt-50 pb-120">
        <div className='container'>
                <div  data-text-animation="fade-in" data-duration="1.5" style={{paddingTop:-100}}>
                    <p>IBC Studio is having Complete Digital Audio Recording set up for IVR & Telephone Message recording; Jingles & Radio Spots; 
                        Audio Book; all type of Tutorials & Info-graphics Voice Over.</p>

<p> At IBC Studio, the pioneering visual art studio in Dubai, UAE, we thrive to comply with optimal quality standards in the industry for audio recording and dubbing. We have access to all state-of-the-art tools and technology for flawless and professional audio recording, IVR recording, dubbing, composing radio spots or jingles, audio books, and voice overs. At our audio recording studio in Dubai, UAE, we have a complete set up for IVR and telephone message recording. Our excellent talent poll also helps make the voice recording or audio production flawless. We have the most professional sound engineers working in our studio. No matter how simple or complex, big or small your audio
     recording project may be, we ensure to offer 100% commitment to outstanding work. We also offer language-based specialized Arabic voice recording.</p>

<p> Over the years, we have served numerous clients with our audio recording and dubbing services. We are fully equipped and capable of handling any audio recording requirement, whether IVR recording, radio jingle spots or dubbing. </p>

<p id='iw' > Contact our team today! </p>
                </div> 
             
                </div>    
        </section>

        </div>
        </div>
        </div>

      <div className="container pb-140" >
      <div className="row"> 
      <div className="col-lg-6" id='announcement'>
        <section className="process-section-2 fade-wrapper pt-60 pb-30">
        
       <div className="section-heading text-center" >
                 
                 <h2  data-text-animation="fade-in" data-duration="1.5">Industry Wise Samples</h2>
                
             </div> 
     
      </section>
        <Tabs>
           <TabList className='audio-category' align='center'>
            <Tab>Announcement</Tab>
            <Tab>Automobiles</Tab>
            <Tab>Banks Financial</Tab>
            <Tab>Events Exhibition</Tab>
            <Tab>GCC Exhibition</Tab>
            <Tab>Govt. Departments</Tab>
            <Tab>Industry Manufactures</Tab>
            <Tab>International Trade Exhibitions</Tab>
            <Tab>Mall Shops Outlets</Tab>
            <Tab>Medicals & Allied Industries</Tab>
            <Tab>Oil & Gas</Tab>
            <Tab>Real Estate</Tab>
            <Tab>School Colleges</Tab>
            <Tab>Arabic Faith</Tab>
            <Tab>Arabic Art</Tab>
            <Tab>Arabic Science</Tab>
            <Tab>English Art</Tab>
            <Tab>English Faith</Tab>  
            <Tab>English Science</Tab>  
            <Tab>Telecom</Tab>  
            <Tab>Transportation & Travels</Tab>     

            </TabList>
            <TabPanel> <Player trackList={tracks4} customColorScheme={colors} /></TabPanel>
            <TabPanel> <Player trackList={tracks5} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks6} customColorScheme={colors} /></TabPanel>
            <TabPanel> <Player trackList={tracks7} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks8} customColorScheme={colors} /></TabPanel>
            <TabPanel> <Player trackList={tracks9} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks10} customColorScheme={colors} /></TabPanel>
            <TabPanel> <Player trackList={tracks11} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks12} customColorScheme={colors} /></TabPanel>
            <TabPanel> <Player trackList={tracks13} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks14} customColorScheme={colors} /></TabPanel>
            <TabPanel> <Player trackList={tracks15} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks16} customColorScheme={colors} /></TabPanel>
            <TabPanel> <Player trackList={tracks17} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks18} customColorScheme={colors} /></TabPanel>
            <TabPanel> <Player trackList={tracks19} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks20} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks21} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks22} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks23} customColorScheme={colors} /></TabPanel> 
            <TabPanel> <Player trackList={tracks24} customColorScheme={colors} /></TabPanel> 

            </Tabs>
</div> 
<div className="col-lg-6"  >
<section className="process-section-2 fade-wrapper pt-60 pb-30" >
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
         

            </Tabs>




</div>

</div>
</div>
           



     
     
      
  



    <Footer/>
    </>
  )
}
