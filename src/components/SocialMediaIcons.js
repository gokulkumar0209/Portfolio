import React from "react";

function SocialMediaIcons() {
	return (
		<div className="flex justify-center md:justify-start my-10 gap-7">
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.linkedin.com/in/gokulkumar-n-t-9284511a2/"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="linked-link" src="../../assets/linkedin.png" />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="mailto:gokulkumar0209@gmail.com"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="linked-link" src="assets/email.jpg" width={40} />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.instagram.com/gokulkumarnt/"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="linked-link" src="../../assets/instagram.png" />
			</a>
			<a
				className="hover:opacity-50 transition duration-500 "
				href="https://github.com/gokulkumar0209"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="linked-link" src="../../assets/github.png" />
			</a>
		</div>
	);
}

export default SocialMediaIcons;
