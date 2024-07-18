// src/Gallery.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const imageData = [
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2F0178-scaled.webp?alt=media&token=ab8639fb-6f3e-46a8-8c39-7c61e8b52797"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2F0208-scaled.webp?alt=media&token=6630332f-4b65-486c-b7a9-8b7bcd6cb729"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2F0281-scaled.webp?alt=media&token=f9102190-dab2-402d-a6b3-164868b3bb4c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2F0333-scaled.webp?alt=media&token=dd2a8c87-c49d-44e0-92da-54e3cfe61350"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2F0402-scaled.webp?alt=media&token=268305f8-aca6-4b64-bd97-e34b47645cfd"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2F0422-scaled.webp?alt=media&token=0597eb75-0cce-4d52-88c6-aa8bea6d4b57"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2F0467-scaled.webp?alt=media&token=0b55990b-75cd-4503-8f87-3e3ddfdbf48a"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2F0478-scaled.webp?alt=media&token=de961c60-212b-4cb5-ba3d-9390143cb32f"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FAl-Barsha-1.webp?alt=media&token=f3517dad-754c-4647-bde9-0b90c233326d"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FAl-Barsha-5.webp?alt=media&token=fcf135cf-6d8b-4b85-a909-5269d2059599"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FAl-Barsha-6.webp?alt=media&token=4c04de78-25bd-4ffa-ac53-d310ce1073ce"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FAl-Nahda-10.webp?alt=media&token=9bf24663-fa96-420a-8718-c9d98c65c730"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FAl-Nahda-12.webp?alt=media&token=f1ca3330-d661-41cf-83aa-237a7a45c989"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FAl-Nahda-13.webp?alt=media&token=8ecbc167-64ec-47c3-90ba-37df8f0d1977"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FAl-Nahda-3.webp?alt=media&token=42f8807e-9726-4e36-ab49-fa208ad5c163"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_0005-copy.webp?alt=media&token=d7b2e56b-f13a-4b6d-bfdb-67904cd859f7"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_0006.webp?alt=media&token=120ee96d-5ce9-4706-a303-3313cc865f30"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_0007-copy.webp?alt=media&token=6d2b6d7f-c9d3-42f0-88fe-6078d8fb11d7"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_0012-copy.webp?alt=media&token=e06df528-c0fc-4c0a-8873-c1479c62164c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_0012.webp?alt=media&token=f240b9cf-27a1-45af-b4f4-c73490db2d44"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_0022.webp?alt=media&token=443ac589-c72a-414a-9251-afb96e1d78ba"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_0314.webp?alt=media&token=76bf15d2-65dc-4725-be00-efd2317a7ff9"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_0340.webp?alt=media&token=9f6b726e-7c9e-4615-bf6d-373298fdeef2"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_0355.webp?alt=media&token=91582062-361c-4324-8599-de96ed60c430"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_0358.webp?alt=media&token=157fd52e-286f-4a4a-b3f5-a8cd6f60ad57"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1010.webp?alt=media&token=2c1505fa-a73b-4047-815f-e07af316a64b"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1061.webp?alt=media&token=2d5aa2f2-43e8-405f-93ee-71d66df33eff"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1071.webp?alt=media&token=1511d1d9-28a0-4c15-823f-75866fdb7809"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1082.webp?alt=media&token=6466612f-7b77-4823-9dfb-cc912d34fce5"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1140.webp?alt=media&token=b9c44978-974c-472f-82af-a74154721e0c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1164.webp?alt=media&token=0a221c89-b56c-49b3-b440-31618d825e60"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1193.webp?alt=media&token=73b15084-a99e-4dcc-8237-05d71cdd5f91"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1351.webp?alt=media&token=d297438f-033a-469b-862e-c494be0fd299"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1383.webp?alt=media&token=d05b63af-f5c8-4d70-a6b0-d488fa02f119"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1384.webp?alt=media&token=1802f1fa-c2cb-49d3-ba35-c4c4093f9aa2"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1433.webp?alt=media&token=e5bb7184-e5ee-48f8-a26a-31448c237cda"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1455.webp?alt=media&token=e70014d1-5c13-4b1d-993f-9ad5dba47965"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1464.webp?alt=media&token=015e09b2-c3e3-4ae3-b2ae-24ea559ab9aa"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1469.webp?alt=media&token=778d727c-955c-4f46-b245-24bfc422c555"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1486.webp?alt=media&token=5a7c9600-f231-42df-8c48-578bb95b2150"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1513.webp?alt=media&token=0e27de5c-b801-4123-bff6-c42d4e13e50d"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1536.webp?alt=media&token=0e5d6993-292c-48ae-8193-8cc753213be2"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1565.webp?alt=media&token=8cfb21fe-7a6f-4e4e-9375-af384919384d"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1574.webp?alt=media&token=a6b6518a-dbcd-44a9-bbf2-14afeb5a1fcb"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1604.webp?alt=media&token=39fe4f72-8785-4ebe-97ce-457ffaf821b5"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1639.webp?alt=media&token=72ab8aa2-986d-44b9-8741-e89df9a095da"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1694.webp?alt=media&token=c7ccbcaa-3726-45a2-8989-85935f057236"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1696.webp?alt=media&token=afc719a7-11cd-47e9-8bed-0bec7cd3027e"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1718.webp?alt=media&token=95cbb7f5-b6d2-4f24-a6fb-249e518e65e0"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1757.webp?alt=media&token=06305f24-ab83-46f9-a107-a3409f4b29e5"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1777.webp?alt=media&token=1996ce95-e7ac-4f8a-aa0b-c5f24a37b645"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_1779.webp?alt=media&token=ae7b88bc-5c57-44bb-a50a-8bf3a844e1c5"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_2705.webp?alt=media&token=1d517b44-0412-464c-9ef1-b939f538f606"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_3264.webp?alt=media&token=91ebaea5-acd9-48f4-9f9f-95476740be90"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_3632.webp?alt=media&token=e33c4aca-c632-4099-b351-c69bc8e07dd1"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_3638.webp?alt=media&token=52d4964b-8571-4246-8e94-cb29f16a77ff"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_3648.webp?alt=media&token=07367ad6-8b32-442a-8d4f-81b2832e9fab"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4833.webp?alt=media&token=bd771a49-13e3-4720-a605-77e60d7b0f4a"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4835.webp?alt=media&token=154d6d02-ba54-4194-8248-f39e3580f44c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4843.webp?alt=media&token=bf15880e-9a2d-4898-abeb-c7c89193b119"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4846.webp?alt=media&token=fee09973-5bcd-4c79-98a5-bb0194fb6c80"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4851.webp?alt=media&token=a3b39591-a56c-439a-871b-318800318b4b"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4858.webp?alt=media&token=4d0fc0b3-1152-462a-a0b2-5938a72a2299"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4873.webp?alt=media&token=a56e357f-eb20-4708-8c91-fcf45ca5a8a5"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4875.webp?alt=media&token=717a8c46-8f29-4bf2-a852-71d8c5b14b84"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4888.webp?alt=media&token=8f49bba3-1cf0-449f-ad63-c812141ba70f"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4891.webp?alt=media&token=26e0a5a8-e688-4fc4-8b97-6b73615a2bc1"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4901.webp?alt=media&token=c8652438-3b70-42a9-bc89-fde6bfcb9fed"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4906.webp?alt=media&token=6b41beed-36cf-46b0-bd61-6245f6df5a7d"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4975.webp?alt=media&token=6e73f49f-ce8a-41d9-8b54-2ca8809f4884"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_4976.webp?alt=media&token=bc89b346-7068-48a4-8605-1924c7fce5e6"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_7233.webp?alt=media&token=00051517-ce1a-4d2e-b92c-a9d71eb514a0"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_7245.webp?alt=media&token=984f1361-6a64-40f4-8044-9aba4794b452"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_7263.webp?alt=media&token=ee8e323d-aff5-4186-87f3-0e38f604fe61"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_7640.webp?alt=media&token=f0f921f1-0791-48d6-893d-cf5e20c3c0e4"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_9851.webp?alt=media&token=6a674b9b-ff0f-4068-ad04-81526f9e1e39"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSC_9859_Crop.webp?alt=media&token=2acae1f6-32c2-4185-a0b1-4e4407f220f2"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_0038-scaled.webp?alt=media&token=763fcd2a-9386-4e04-91d0-0e8b87b8ae65"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_00382-scaled.webp?alt=media&token=fbfbea90-f607-48ee-81d7-24ca43f64493"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_0038a-scaled.webp?alt=media&token=c9eb2c37-e2bf-42b5-8053-6eaaa8ab23f4"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_0101-scaled.webp?alt=media&token=8d7a31dd-2614-452d-a938-f9a9e12ab812"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_0440-scaled.webp?alt=media&token=8986ee5c-5c55-4d1b-8755-03a02d8ef35b"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_0454-2-scaled.webp?alt=media&token=8caad393-bdd2-4a9f-9c81-35df475d1d75"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_0460-scaled.webp?alt=media&token=5bffb703-e34b-4b42-a966-758ba89bf1e5"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_0513-scaled.webp?alt=media&token=ecf4fdd8-4a57-4356-9b30-18181df3f35b"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_0540-scaled.webp?alt=media&token=87f9022e-8499-4fb9-a9b1-63245d07616f"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_0542-scaled.webp?alt=media&token=b3b71fdb-3489-44cb-b6e2-01bf7a3ebb14"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_9583-2-scaled.webp?alt=media&token=fb4e281e-4e50-4511-9c3a-0fa1a572ba8d"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProperties%2FDSL_9623-scaled.webp?alt=media&token=1d31f8b2-f6bf-41e1-ae9a-8d4ee0eddc2d"},
   
    // Add more image objects as needed
  ];
  
  const itemsPerPage = 16;
  
  const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
  
    const openModal = (image) => {
      setSelectedImage(image);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setSelectedImage(null);
    };
  
    const handlePageClick = (data) => {
      setCurrentPage(data.selected);
    };
  
    const offset = currentPage * itemsPerPage;
    const currentPageImages = imageData.slice(offset, offset + itemsPerPage);
  
    return (
      <div className="gallery-container">
        <div className="gallery">
          {currentPageImages.map((image) => (
            <div key={image.id} className="thumbnail" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.title} style={{maxWidth:300}}/>
            </div>
          ))}
        </div>
  
        <ReactPaginate
          previousLabel={'← Previous'}
          nextLabel={'Next →'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(imageData.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
  
        {selectedImage && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            className="image-modal"
            overlayClassName="image-modal-overlay"
          >
             <button onClick={closeModal} className="close-button">Close</button>
            <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
          </Modal>
        )}
      </div>
    );
  };
  
  export default Gallery;