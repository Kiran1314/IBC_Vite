

import React, { useState } from "react";

const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<p className="text footerread"  style={{fontSize:16}} >
		 {isReadMore ? text.slice(0, 225) : text}
			<span
				onClick={toggleReadMore}
				className="read-or-hide"
				style={{ color: "#3F5AF3",cursor: 'pointer' }}
			>
				{isReadMore ? "...read more" : " show less"}
               
			</span> 
		</p>
	);
};

const Content2 = () => {
	return (
		 
		 
				<ReadMore>
                * Best Recording Studio in Dubai, UAE, 
                * Affordable Recording Studio ,
                * Wide Range of Voice Talent ,
                * State-of-the-art infrastructure under one roof ,
                * Latest equipment and technology for Audio Recording, Video Shooting & Editing ,
                * Excellent talent poll Like Wide Range of Voice Talent in various Languages ,
                * Quick turnaround time. Professional still photography with Studio Lighting Facilities ,
                * Complete pre and post-production service ,
                * IVR Recording, Telephone Message Recording, Voice Over recording ,
                * Best designing suite for Designing, Developing Website, Software & Info-Graphics
  </ReadMore>
			 
		 
	);
};

export default Content2;
