// src/LogoGallery.js
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

const logoData = [
    
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FADNEC.webp?alt=media&token=54326557-e196-4b6a-a17a-0a62604b0345"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAir%20arabia.webp?alt=media&token=74ec69ca-3ca7-4cb9-8332-e0cd069ef3fe"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAl-Futtaim%20Group.webp?alt=media&token=5e80502b-57a7-48cc-b03f-eae8c31aa4eb"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FCarlton%20Downtown.webp?alt=media&token=134f6a83-dd81-4f2b-9bb0-73523548ea31"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FDepartment%20of%20health%20-%20Abudhabi.webp?alt=media&token=128a9c0e-895a-4822-8daa-072b93c87882"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FDewa.webp?alt=media&token=6a70b5e1-2b6d-47fb-a38a-3d8b0395b1c9"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FDubai%20Frame.webp?alt=media&token=32a58e55-aa9d-4953-a61e-a824c551ae19"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FDubai%20Municipality%20%20Academy.webp?alt=media&token=5b868697-eb20-45d2-8f3d-d9711339851d"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FENOC.webp?alt=media&token=1955a48e-2523-4c12-9e38-df6ac77ec03f"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FFinance%20House.webp?alt=media&token=6d264afb-7031-4010-9aa0-2e2edd92a2af"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FFly%20Arna.webp?alt=media&token=4c94595a-9395-49ab-8f0d-04acfb361bbb"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FFly%20Jinnah.webp?alt=media&token=f3c5d27b-21d3-445d-a8fb-cea74ad186f2"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FGEMS%20School%20Dubai.webp?alt=media&token=5c915b94-dcc5-4311-8fee-1786d5c2f413"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FIKEA.webp?alt=media&token=8593e390-3cf7-4e12-9381-267e412c1efc"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FMinistry%20of%20Community%20Development.webp?alt=media&token=45e7443a-2c77-46a3-b3fe-248bd4b02fbf"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FTAMM.webp?alt=media&token=d751cbbd-b3aa-455c-8b10-a7031bc60c32"},
                { id: 1, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F1-DEWA-923x860.webp?alt=media&token=533869d9-c604-4a74-84ec-3e8b101bdec6" },
                { id: 2, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F2-Abu-Dhabi-Airport-logo-768x546.webp?alt=media&token=9be2af1b-f4c1-4a9b-a98d-26c024211d83" },
                { id: 3, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F3-Emirates-Islamic-Bank-300x99.webp?alt=media&token=6a66f4fa-5e94-444a-8e6e-99926fddb287" },
                { id: 4, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F3-Emirates-NBD-Logo.webp?alt=media&token=d77ff777-adbf-4fc6-8d37-3119e6b5cc0f" },
                { id: 6, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F4Dubai-Mall-180x180.webp?alt=media&token=b7640342-6d1b-4840-bd95-a2a5360baa5b" },
                { id: 7, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F5Federal-Transport-Authority-Land-Marine-600x132.webp?alt=media&token=6ff3af57-5edc-4bb2-9940-d49d6e5c11b8" },
                { id: 8, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F5First-Abu-Dhabi-Bank-768x447.webp?alt=media&token=ca24de4a-5f5f-42c4-a32d-acb2c423286b" },
                { id: 9, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F6DTCM.webp?alt=media&token=2abf01fb-22b4-4d18-8c9e-5b7dd4f7c164"},
                { id: 10, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F6Du.webp?alt=media&token=49b84b9b-8b88-4b52-b298-ba73e9d0dcb1"},
                { id: 11, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F6Dubai-Airport.webp?alt=media&token=4975f722-a9c5-4965-93ab-5219b5b742d0"},
                { id: 12, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F6Dubai-Courts.webp?alt=media&token=02365bb5-9da4-43fd-9d1d-d47a9f0bf8e0"},
                { id: 13, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F6Dubai-Customs.webp?alt=media&token=d6b7ec96-6f31-4a4f-9a14-dc496051574b"},
                { id: 14, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F6Dubai-Electronic-Security-Center-260x69.webp?alt=media&token=f87f56ba-f683-4264-b412-ec044c5ef347"},
                { id: 15, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F6Dubai-First.webp?alt=media&token=75c5908a-7f26-43f1-9db9-1a64bf48a5fe"},
                { id: 16, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F6Etisalat.webp?alt=media&token=2019741c-8d52-4550-97b5-2f3835b63c26"},
                { id: 17, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F6UAE-Exchange.webp?alt=media&token=db39efd5-0792-486a-a0a8-b26eafd9a49c"},
                { id: 18, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F7Dubai-Metro-932x500.webp?alt=media&token=4caf7aa1-bee2-4418-93c4-dacddc96750d"},
                { id: 19, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F7Dubai-Police.webp?alt=media&token=9e18ed63-d736-4d14-a0ef-9859b3be4085"},
                { id: 20, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F7Dubai-merina-Yacht-club.webp?alt=media&token=da347daf-b092-4d50-8336-c4922059e65d"},
                { id: 21, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F7EMAAR.webp?alt=media&token=d1c3bf90-b317-4bc2-87db-c5de86e34fec"},
                { id: 22, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2F7MAF.webp?alt=media&token=6a474bf7-1d05-4388-9c61-4ac4e6f80f96"},
                { id: 23, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FADCB--260x78.webp?alt=media&token=83d60df5-92eb-4f9a-992e-63adad71d43c"},
                { id: 24, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FADIA.webp?alt=media&token=2b63d014-2ee8-4b9d-aa2a-1df4846d968e"},
                { id: 25, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FADNOC-180x180.webp?alt=media&token=96c269c9-e694-4e61-8eb1-792916828991"},
                { id: 26, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAFC-Holidays.webp?alt=media&token=35735055-f9ab-44fe-bc44-4cda6aecaed0"},
                { id: 27, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAbu-Dhabi-National-Insurance-Company-600x350.webp?alt=media&token=21410e5f-4fd0-4117-8f3e-4061608ed112"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAbu-Dhabi-Police.webp?alt=media&token=2dcc2f1a-c5b8-4ed8-b540-9b93a9d54f7e"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAbu-Dhabi-Tourism-Authority.webp?alt=media&token=0d57845d-e3e2-4e24-9427-7016a183c4df"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAbu-Dhabi-Water-Electricity-Authority.webp?alt=media&token=d311e724-6cae-4d5c-9e55-ea67cd7dc8b2"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAccor-hotel.webp?alt=media&token=d3405690-5c15-40fa-b265-778d693e752b"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAjman-Bank-260x99.webp?alt=media&token=171dd493-2a5f-4705-ae0b-fe92a4e8550b"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAjman-Municipality-260x55.webp?alt=media&token=fe026f9b-f147-4a42-97f4-bcf85fa24fc6"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAl-Etihad-Credit-Bureau.webp?alt=media&token=c09baf38-6521-4d46-b2e8-488ca7b71bdc"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAl-Fardan-Exchange-50x31.webp?alt=media&token=ebac67cc-3d94-457a-88a1-cf9217f7a0a2"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAl-Ghurair-City-Call-Centre--600x600.webp?alt=media&token=c12a12a8-1da3-4aad-8f54-786c42c17bc9"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAl-Mashraf-Bank--300x106.webp?alt=media&token=520b25ac-df43-4648-9057-f6537187e237"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAl-Tayer-Group-158x146.webp?alt=media&token=d5ec6fd8-1838-47be-9b69-a4ad9c480fd1"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAlbatha-300x228.webp?alt=media&token=b4d2a551-c14a-4acb-80df-428f2a617b4d"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAlpha-tours-180x125.webp?alt=media&token=3d574b3b-96dd-49a6-9fc1-11aee26bfad3"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAman.webp?alt=media&token=9f529fea-a75c-443f-972f-507671f81708"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAmity-180x125.webp?alt=media&token=189fb073-2b75-44e2-ada3-44ca5042fcb9"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FArabic-Nights-tours.webp?alt=media&token=20e91e65-a9af-429f-9155-6b21d6532d99"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FAxis-Bank--1630x424.webp?alt=media&token=838385f5-c89f-4343-8261-2851255cafa8"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FBODY-SOUL-ELITE-LADIES-CLUB-180x180.webp?alt=media&token=2138aaef-8f59-4c44-bbee-51e41ce9d2e1"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FBab-al-shams.webp?alt=media&token=ade2f66c-f33e-4bb1-bcab-9dc9da9e608c"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FBarwa-Bank--1280x957.webp?alt=media&token=73afe77b-6140-4dd4-a3cc-9a32785b2f40"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FBelhoul.webp?alt=media&token=10d6dc76-6c42-4533-a63c-75c5b3703234"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FBetter-life.webp?alt=media&token=2a4fe9cd-3217-49c2-a4d8-90547f51f524"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FCBI.webp?alt=media&token=76c31351-eb89-4552-bf5b-6e405d4d0d51"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FCarrefour-150x125.webp?alt=media&token=5cf336d5-0d28-4a68-943c-b98a19c72e95"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FCathay-Pacific-Airways-Limited-938x480.webp?alt=media&token=d79027b8-883f-4b15-b7b6-b60b85531298"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FCity-Bank--195x146.webp?alt=media&token=f3b05aa2-8590-4628-8475-20d37974cd12"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FCity-Centre-Clinic.webp?alt=media&token=47009363-3196-4622-83fd-0a3aa1778ef0"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FConsulate-General-of-Switzerland.webp?alt=media&token=e5484777-a0d5-4bd4-9b7c-484ee60eef1e"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FCopthorne.webp?alt=media&token=04fedcee-eeac-42ce-881f-bacef986b6fa"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FDP-world.webp?alt=media&token=9a1d6e69-54a9-4193-bfa1-77eea64b44f7"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FDofar-Bank-.webp?alt=media&token=bda47726-73e4-4319-a1ac-d4ba6bf46101"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FDragon-Mart-300x151.webp?alt=media&token=21a963fd-ae7f-4ebe-8580-920b0c9730cc"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FDubai-Sports-Council-188x146.webp?alt=media&token=424adf79-3092-47c5-9117-568fa02db686"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FDubai-healthcare-city.webp?alt=media&token=3ab21a32-7bf4-4275-bd93-9386b529ed75"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FEROS.webp?alt=media&token=a465cf15-7b7b-47a0-b5f0-69297b0b7975"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FETA.webp?alt=media&token=13f3d4e2-a630-4d27-a1f5-3e18f43a01fc"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FEmirates-Driving-Institute.webp?alt=media&token=356873c0-bb5a-43f0-bdae-50ec4b743df4"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FExpo-sharhah.webp?alt=media&token=ea2106b0-e67c-4265-afa7-5ad5d7582bc7"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FFatwa-Center-300x169.webp?alt=media&token=6f1d3d54-420b-482b-b113-b7a31af35cdb"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FFinance_House_Logo-300x254.webp?alt=media&token=9a5da2b3-4635-40eb-aa9b-996abc888758"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FFitness-First-1630x412.webp?alt=media&token=88c716a1-7d88-43c6-9324-ddb4be5c0595"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FFortune-group.webp?alt=media&token=b623c4c1-050e-4f46-b873-0a9ba42dad72"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FFujairah-Free-Zone-Authority-300x300.webp?alt=media&token=84ac48a7-6896-421a-856b-bdb5069dd2e4"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FGEMS.webp?alt=media&token=90c30b0d-2c5c-4f2b-836c-fe8481d6d59e"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FGMU.webp?alt=media&token=1c6883e9-6473-4633-a2ff-13d8b11f28c9"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FGaladari.webp?alt=media&token=693b02ce-1128-48df-8a75-74ea16c782d0"},
                { id: 28, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FGloria-Hotel.webp?alt=media&token=a7ff40c5-29a0-43a9-b909-5c567396144d"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FHP-785x500.webp?alt=media&token=79aa9a2d-6ed9-4538-ae76-a51abe72f9ce"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FHSBC-.webp?alt=media&token=8ed2a77f-dbd6-43ee-ac86-a8061e4291bc"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FHabtoor.webp?alt=media&token=327996cb-d019-4be1-a252-88ade1d9b7be"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FHealthpoint.webp?alt=media&token=b88029b7-753e-4cd5-9d4e-46c934189953"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FHilton.webp?alt=media&token=3cea233d-9bf3-45c4-bc7b-a0c9400bda15"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FHoliday-Me.webp?alt=media&token=33b843ae-2db4-4a56-9877-d79e311073f9"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FIBIS-Hotel.webp?alt=media&token=ed34b03e-8e8d-429d-961b-be892df4b008"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FIBN-Batuta-Mall-500x500.webp?alt=media&token=4f091e10-ab3a-4414-997d-2936a6a406e3"}, 
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FInforma-ME-300x126.webp?alt=media&token=390976a0-1672-4600-84d1-b34a88787dfb"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FInsurance-Authority-Abu-Dhabi--50x32.webp?alt=media&token=cf011d78-b48b-428e-960a-22fe15511308"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FJabal-Ali-Free-Zone-219x146.webp?alt=media&token=5a3eed07-cbf1-4a69-b030-02753c835a2b"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FJazeera-Airways.webp?alt=media&token=9cefa8dc-99bd-4a36-8888-e597015f0d73"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FJotun.webp?alt=media&token=e66d385c-5831-499a-bb16-10c7bf643572"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FJuma-Al-Majid-Group--50x31.webp?alt=media&token=d43c68c9-06f1-416a-8da3-210a7b833b58"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FKarachi-darbar-150x125.webp?alt=media&token=2ccbdf3b-8180-44e5-af44-5f188ac433de"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FKenya-Air-218x146.webp?alt=media&token=45b7462e-a5a1-4b59-a32b-89aad6165520"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FKhaleej-Times-260x78.webp?alt=media&token=356a96db-e38a-4c91-82b7-68c45de8dcef"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FKhalifa-General-Hospital-UAQ.webp?alt=media&token=ae044fde-771c-4d4c-be2d-17d3457c9316"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FLari-Exchange.webp?alt=media&token=27852faa-5d11-4374-b5ed-b5b94b25b89f"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FLiberty-50x31.webp?alt=media&token=bffd0d87-e56a-4157-9324-f3ce165927a9"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FMOE-1024x196.webp?alt=media&token=208d7072-9ccb-4f55-a8ed-424ddc905b29"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FMarina-Mall-180x125.webp?alt=media&token=107aff6b-b6fc-430d-8dd6-688e8f88d5b8"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FMarjan-Island.webp?alt=media&token=ecf7c169-5527-49e9-8b20-45de4e59ee1b"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FMediclinic-180x125.webp?alt=media&token=6ad2d93d-612c-4c21-98c2-d4ffa4e03f38"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FMediclinic.webp?alt=media&token=cbdccc4f-906e-4aaa-9a36-17d274d015a9"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FMeydan-Hotel.webp?alt=media&token=15c778c3-7dd7-4717-83b8-5968bc935ce0"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FMeydan-Sobha.webp?alt=media&token=4f46ec5a-1e52-4960-881a-a9098e7e28a8"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FMinistry-of-Labor.webp?alt=media&token=2aea70df-0d6b-4818-9dc7-2850e9451800"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FMovenpick-180x125.webp?alt=media&token=b95ca3a0-1517-4097-a40a-874b18d6fee0"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FNOC-150x125.webp?alt=media&token=f88a208f-c125-4c9c-9a6f-f215df54e477"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FNUTRICIA-MIDDLE-EAST-DMCC-300x201.webp?alt=media&token=d0f90e99-8e6b-419c-8537-4446edc9d9e0"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FNaffcoo-180x180.webp?alt=media&token=838b2f85-556e-460a-a3bb-0ae667936789"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FNational-Bank-of-Fujairah--1280x662.webp?alt=media&token=5c330fba-43fe-4118-9863-d93db232dcdc"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FNational-Bonds--83x75.webp?alt=media&token=ba572527-8b58-4006-b639-4668b78ad953"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FNestle.webp?alt=media&token=619f8051-dc0a-4d80-83e5-2e964ec8adcf"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FOmeir-Travels-150x150.webp?alt=media&token=a77390c7-3ebc-4a36-8534-d3b4ccef08d8"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FPullman-180x125.webp?alt=media&token=cea8ff41-78b7-4519-847a-5a59c44b7285"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FQWEA.webp?alt=media&token=dfccbf0c-d5a1-40ff-b7ef-93ce32e6de86"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FQatar-Air-960x269.webp?alt=media&token=97ceaebd-196b-4541-b289-63eb24ed445e"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FQatar-International-Islamic-Bank--150x36.webp?alt=media&token=d3b0f331-8b0d-4f11-ad09-19e851e70fde"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FRAK-Bank--1920x562.webp?alt=media&token=8f009bb9-8778-44b2-81d1-bf715e2daf12"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FRoad-Transport-Authority-RTA-1024x768.webp?alt=media&token=f7dcefcb-886a-49b3-b7cc-3deea653386d"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FSNTTA-120x75.webp?alt=media&token=cf88f34c-b1f0-443d-ad87-358bb95c9ebc"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FSalik.webp?alt=media&token=194acf13-1841-4efd-b67d-0e760efbc458"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FSamsung-1280x425.webp?alt=media&token=398f03d1-de70-47ce-a07b-b51a56adf25c"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FSchon-Properties-197x146.webp?alt=media&token=fb093ab2-ecb8-47b7-b537-d1a0f37e7bb5"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FSecuities-and-Commodities-Authority-960x235.webp?alt=media&token=59b7fd3e-1007-40cf-a935-e64151e345d4"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FSharaf-DG-768x768.webp?alt=media&token=65414dcf-9e88-446c-8cff-b9013784b474"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FSharjah-Media-Arts-for-Youth-and-Children-180x100.webp?alt=media&token=1069e020-63ae-4b50-8060-5849610a92f9"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FSharjah-Museum-120x75.webp?alt=media&token=4a64f8a4-90ab-4b83-af6a-1ee9ed46f843"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FSkycom.webp?alt=media&token=f3c109bc-8622-43e9-9e91-77937ed59bff"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FSkynet.webp?alt=media&token=490f918a-5833-450a-a8ba-7a0c2f4c1203"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FSpinneys-300x84.webp?alt=media&token=02010243-d19c-473d-bf6f-304cebae6a37"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FTecom.webp?alt=media&token=08441e1b-76bf-48d1-8c74-b68776bfe6b5"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FThumbay-Group.webp?alt=media&token=8270502e-3d1a-4d6c-9130-a4d1d3126e37"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FThumbay_Hospital-300x197.webp?alt=media&token=e765a92d-d507-40a6-a84d-e544ee3f5dce"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FUnited-Bank-Ltd-1630x658.webp?alt=media&token=7e1e8eab-1cbe-4299-a23b-e81aa0befb60"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FWall-Street-Exchange--50x23.webp?alt=media&token=a92b01ba-6bf8-4a31-b57c-d4fa7a1aacf3"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FWelcare-Hospital-180x125.webp?alt=media&token=1ec3f384-a4ab-4ca1-994e-0bdcfb8bc331"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FZajel-80x80.webp?alt=media&token=2773f917-887e-421f-b385-c9981422b56e"},
                { id: 30, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FZayed-Military-Hospital-85x85.webp?alt=media&token=81bbffca-cd6d-4fbf-8eb3-760b48f1ee96"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FZayed-Sprots-City-260x109.webp?alt=media&token=60646dc6-6eaa-4877-b266-586c7548affb"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2FZulekha-Hospital.webp?alt=media&token=e90daf7c-5499-4d36-8469-236b4738c437"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2Fpresnt-180x143.webp?alt=media&token=2230dd78-456b-4e25-bed7-57f37dbd1a5f"},
                { id: 31, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2Fsharjah-aviation.webp?alt=media&token=5ed0a106-ef0c-4bdd-9558-80820d831c69"},
                { id: 29, url: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FClientsLogo%2Fsplash-300x120.webp?alt=media&token=42e66a2b-d536-4c05-a443-9172112bd2e9"},
                
 

  // Add more logo objects as needed
];

const itemsPerPage = 110;

const LogoGallery = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageLogos = logoData.slice(offset, offset + itemsPerPage);

  return (
    <div className="logo-gallery-container">
      <div className="logo-gallery">
        {currentPageLogos.map((logo) => (
          <div key={logo.id} className="logo-thumbnail">
            <LazyLoadImage src={logo.url} alt={`Logo ${logo.id}`} />
          </div>
        ))}
      </div>

      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(logoData.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default LogoGallery;
