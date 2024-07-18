

import React, { useState } from "react";

const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<p className="text footerread"  style={{fontSize:16}}  >
			{isReadMore ? text.slice(0, 210) : text}
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

const Content = () => {
	return (
		 
		 
				<ReadMore>
                  Welcome to IBC Studio is a one of the Leading Media Production House in Dubai, serving Clients in all over UAE & Middle East
                          Like in Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khainah, Fujairah & Al Ain, Kuwait, Qatar, Bahrain, Oman & Saudi Arabia. Studio produces Telephone Hold Messages, Auto Attendant & IVR Recording for eminent Banks, Call Centers, Airports, Government Departments & many more.
As well as IBC studio, the pioneering visual art studio, is offering comprehensive solutions that include videos, photography and Design & Developing. We thrive to bring meaningful business solutions so that you as an organization make yourself clear.
Our endeavor is to improve the sense of clarity by providing adequate tools, technology and expertise that will enable you to tell better stories and communicate effectively with your target audience.
In the last 15 years, we have understood that the visual art needs extreme perceptibility and superb technology to materialize the ideas into creative work. 
  </ReadMore>
			 
		 
	);
};

export default Content;
