// src/Gallery.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const imageData = [
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2F00740003.webp?alt=media&token=e6a2cd21-4a5b-4b1f-ae3d-25511e4dc606"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2F00740005.webp?alt=media&token=0da0e93a-bf79-48c0-aea6-f3504fb681da"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2F00740008.webp?alt=media&token=79bf0a63-53c1-4c27-8750-1cacc60832c8"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2F02230001.webp?alt=media&token=c224ed94-039b-42c2-9683-4db47bad2a6f"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2F02230021.webp?alt=media&token=edc72f5d-f463-4888-9e64-866b021d6d76"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2F120.webp?alt=media&token=55931b7a-20cf-45cd-85db-3b4cee04a71b"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2F20170608-715A9753_97.webp?alt=media&token=f019f5ae-250d-401e-b553-7e9805b8af9f"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2F377A4536.webp?alt=media&token=4ff7fd18-40f8-4f22-8142-36f14b4881e8"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FA1.webp?alt=media&token=e5a643d2-0b54-4b7e-9eed-9beaa7fc3b24"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FA2.webp?alt=media&token=cff4d8ca-5499-408d-967b-f64516884464"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FA3.webp?alt=media&token=9cc1d04f-ce3f-4346-bfc3-813cbf47e4bf"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FA4.webp?alt=media&token=8ecc6887-0799-4577-901d-75e24924bddd"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FA5.webp?alt=media&token=c4f5ad28-d52d-4b6c-a206-492d4811c724"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FA6.webp?alt=media&token=06aa86b9-c253-45c3-b5e4-a1ee300b7330"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FC2D1.webp?alt=media&token=397fb8f6-abac-45b8-bbb5-4c7f48f0d098"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FC2D4.webp?alt=media&token=e1a52361-797f-4b19-a47e-f72097ed1593"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FCORDEX7.webp?alt=media&token=7307b8d4-e661-44b4-843e-8275dad49799"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0017.webp?alt=media&token=9e96d78d-bc6c-4d2c-b15f-5a8c5d3c6936"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0024.webp?alt=media&token=b451502a-bfda-4970-80ea-82717728dce4"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0029.webp?alt=media&token=f727af3c-6356-4a72-acb3-42ea5ac25794"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0044.webp?alt=media&token=a51baaad-f52e-44be-b7bb-6d0da557699c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0045.webp?alt=media&token=bb5c74ad-d2ca-43c3-aace-e7a0bca3192b"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0046.webp?alt=media&token=dd19e382-87ba-48cb-81d4-6166b9aff6bd"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0048_a.webp?alt=media&token=72d20bad-83a4-4137-8f3d-348ae040e519"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0054.webp?alt=media&token=34126f9c-fb89-429c-ac6f-37e1751ba5b5"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0061.webp?alt=media&token=25416118-5640-4d3b-8c3c-4dc31eb201ba"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0071.webp?alt=media&token=f3da7992-e173-4e39-8a75-7f04a2d7d865"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0104-2.webp?alt=media&token=22670aed-fdab-4cfb-963a-dd2b2093653c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0115.webp?alt=media&token=96236a58-b221-49c9-8f21-a68c0c4082ac"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0132.webp?alt=media&token=2d03c27d-4039-438a-b3c6-bb6bffe061a4"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0139.webp?alt=media&token=8e2fca27-99f2-44b2-a10f-175c270dc136"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0140.webp?alt=media&token=4551c0bb-8f92-4d86-b933-9fbe1bbd34f7"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0162.webp?alt=media&token=5d4e26b3-0da3-453c-94df-d4492f8c41ff"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0165.webp?alt=media&token=cd81ac46-1918-400a-9166-d3a36178db24"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0175.webp?alt=media&token=0240efb9-004a-4039-951d-595cd87dc7b7"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0242.webp?alt=media&token=1b57f9f6-7811-4c33-bcc5-7d6798070210"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0249.webp?alt=media&token=9a43bac9-3a1a-4a0e-b260-3e30a840eea4"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0278.webp?alt=media&token=fed2919a-6c47-4cb5-a4a8-c23e980da145"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0318.webp?alt=media&token=da072776-0c37-4f06-ad25-92e687df2cb0"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0374.webp?alt=media&token=76ad05fb-9a13-4ce2-bedc-62ee4719ad82"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0399.webp?alt=media&token=dd1abd52-c609-4ce4-b5a7-701b307acb1c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0682.webp?alt=media&token=217d2b5b-8ab4-415c-8e2a-400c6f60e130"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_0804.webp?alt=media&token=ffbacdc0-7e11-4178-a6f8-68cddab726dc"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_1016.webp?alt=media&token=8ba5cd51-3723-4564-8b35-909a258fc103"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_1066.webp?alt=media&token=e5239be6-5422-4307-ba9d-40fcbd0f61ad"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_2508.webp?alt=media&token=e6f20710-2cff-48fa-9d80-95fd0e40014c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_2568.webp?alt=media&token=cf11799f-b4e2-4de3-b903-31e41a6b76ad"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_2725.webp?alt=media&token=d95f771b-608e-47ed-801d-4971dc7b4c8a"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_2775.webp?alt=media&token=a49ca255-413f-4612-95cc-9bbeb818f383"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_3017.webp?alt=media&token=79921ac2-aba0-4c8e-a420-023ead9b2cfb"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_3115.webp?alt=media&token=497c5009-7583-494a-ae05-417faa3138ed"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_3208.webp?alt=media&token=946ab05b-c2d7-4cd5-89d3-8565b5097ae6"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_3260.webp?alt=media&token=41f42109-ce14-4107-92e0-89cc3ca835b6"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_5089.webp?alt=media&token=9be8464a-9b63-4d77-8c29-abf64f8e208e"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_5189.webp?alt=media&token=4ecdec63-28cb-47e6-a926-2cdae8858d3d"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_5381.webp?alt=media&token=227b8733-d1c6-4514-8b57-99136d7ceee8"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_5589.webp?alt=media&token=457a5371-ff0d-4660-97f7-9672a806695f"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_5749.webp?alt=media&token=c0f2f9f5-61b2-433c-a0a2-e9169eab8c30"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_5753.webp?alt=media&token=03d5e831-d421-4007-9c61-2aedc8950dcf"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_5803.webp?alt=media&token=4bd101ab-0efd-4b86-be63-24fe8dbaf3c4"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_5837.webp?alt=media&token=8a9c3cde-65c3-48f7-9da4-6d79b3ab08c7"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_5886.webp?alt=media&token=23473a9d-0458-4639-b48b-cc642a0492a6"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_6104.webp?alt=media&token=01e74dbe-230d-4ba4-9ec7-1b300fa395ed"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_6334.webp?alt=media&token=9aa46adc-3c49-406f-85a0-30da24b6195c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_6352.webp?alt=media&token=4ff38afd-4686-4591-8dc9-74b34d3e7bf4"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_6360.webp?alt=media&token=6c66f18a-4c2c-4e9c-a1e6-833fb3bd1793"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_6473.webp?alt=media&token=68148b30-d3f6-4358-a136-d51be0331083"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_6824.webp?alt=media&token=fd8ea3b8-7458-488d-bcba-5753b1aa902b"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_7014.webp?alt=media&token=73589e41-8d4a-4402-bf26-cd4d6d4cec44"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_7255.webp?alt=media&token=af976e28-9fa4-4a14-b382-9f8f79f0355b"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_7267.webp?alt=media&token=1c472a4d-18f2-480f-82dc-15a753b79fda"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_7285.webp?alt=media&token=04ddf877-204e-4046-926e-922c38131507"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_7396.webp?alt=media&token=b10e85e4-f747-45be-aef0-17109b17957d"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_7566.webp?alt=media&token=6d574c64-bbd1-4ff7-aeaf-11bbeb1d9d20"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_7912.webp?alt=media&token=7e4ccc87-568d-46f2-9eb8-704c0e940370"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_8039.webp?alt=media&token=e5e938cc-a6cf-4cda-acd1-5e3d922b6361"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_8042.webp?alt=media&token=be5789ff-3bf2-4045-8eb0-a54c9aec3572"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_8774.webp?alt=media&token=30645280-6d10-47ae-8e7b-d3078300711c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_8937.webp?alt=media&token=0b9af373-9fa0-4b99-a320-714ea1ec3aaa"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FDSC_9379.webp?alt=media&token=c595e4ed-9a18-445f-a43f-9305580add12"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FFOCUS1.webp?alt=media&token=3561d700-8d5b-4f5e-abe5-2f97b9557697"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FFOCUS2.webp?alt=media&token=72c4c9a0-2115-40b1-9c94-a7a04c5d6980"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FFOCUS3.webp?alt=media&token=1332defa-8c20-46f9-bdf8-e66d3fc25d39"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FFOCUS5.webp?alt=media&token=0103e117-f42f-4d26-b615-cd43b4bf87d6"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FFOCUT4.webp?alt=media&token=c0a85921-62f4-4ae5-8a55-34c30e729889"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FGYMA1.webp?alt=media&token=1c902492-2bc8-466c-9796-89d45eed1cae"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FGYMA3.webp?alt=media&token=596b6dc1-a951-4b52-8113-8f161b8c65a9"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FHAAD1.webp?alt=media&token=20efbd0d-ee72-424b-ab63-8ab9afca4710"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FHAAD2.webp?alt=media&token=f2353d69-b05f-4c52-9d55-632c52c5169b"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FHAAD3.webp?alt=media&token=033d62ba-1a67-47db-812e-238fe464ef86"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FHAAD4.webp?alt=media&token=fadecfb3-1d3f-44dc-9a57-2eaaef622f05"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FHAAD5.webp?alt=media&token=a26a06b0-21b3-424c-9fb0-50843c2b2ea0"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FI2.webp?alt=media&token=55af8130-02df-4cd5-83aa-adaeab6e0433"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FI3.webp?alt=media&token=4d519496-00ce-435a-ad16-76176bd63ddd"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FI4.webp?alt=media&token=24d6acf9-851d-42e3-85a1-9f36ee0a7067"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIDEX1.webp?alt=media&token=688b8db0-c916-42dc-826c-fdb0145086ff"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIDEX2.webp?alt=media&token=2ab6e409-807d-4887-9837-89b8e37075c4"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIDEX3.webp?alt=media&token=634937f4-68a0-4b55-8c48-bb9777bbdd5e"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIDEX5.webp?alt=media&token=7d7a1210-3a78-430e-af16-799cdc4e1184"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIDEX6.webp?alt=media&token=52cfff27-775e-48c0-957c-daaf3bc18211"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIDEX7.webp?alt=media&token=20af8255-96a3-40d8-9710-e124230bcf5a"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_1004.webp?alt=media&token=05499289-b188-482e-b365-9c4a395a5dd2"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_1015.webp?alt=media&token=9a76d89d-9d48-4252-b527-e679ecdcf139"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_1037.webp?alt=media&token=824f93be-8de3-45e0-b1cd-e55f97d2e9fd"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_3618.webp?alt=media&token=b895e471-ce96-42fa-a70b-0a4c65d4f728"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_3725.webp?alt=media&token=51c4b803-abf8-4742-9667-a31e2696a657"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_3737.webp?alt=media&token=ad672f22-9441-4a89-8b01-64011843ac24"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_3750.webp?alt=media&token=41b724d7-7562-4e42-8337-cfa2fb1e0bff"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_3765.webp?alt=media&token=f9a5df76-1e73-4a3e-ae73-5fc678a8a8a6"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_3798.webp?alt=media&token=93f5b80a-4118-4513-8c24-d461f7f4cadc"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_3913.webp?alt=media&token=0f0f9194-4e06-48ba-b7d3-acbaa5b2d86b"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_4008.webp?alt=media&token=b9318a25-1e05-47d0-8c3b-6c4c97613365"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FIMG_4017.webp?alt=media&token=55a65e47-48d3-4754-a0cf-4c3d23a21aa2"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FEventStills%2FMHF_7568.webp?alt=media&token=49af447a-9de8-426b-a713-20f8b75d4b2f"},
  
    // Add more image objects as needed
  ];
  
  const itemsPerPage = 32;
  
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