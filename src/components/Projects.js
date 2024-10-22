import React from "react";

function Projects() {
	return (
		<section className="mx-20 my-40 " name="projects">
			<h3 className="text-5xl font-playfair z-10 text-center md:text-start text-yellow mb-40">
				My Projects
			</h3>
			<div className="lg:grid lg:grid-cols-3 gap-6">
				{/* Project 1 */}
				<a
					href="https://reel-saas.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<div className="relative group shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
						<img
							className="w-full h-full object-cover group-hover:opacity-75 transition duration-500"
							src="/projects/reel.png"
							alt="Project Reel"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
							<p className="text-teal-300 text-2xl font-bold">
								Reel - Saas Landing Page
							</p>
						</div>
					</div>
				</a>
				{/* Project 2 */}
				<a
					href="https://chevy-qtrip.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<div className="relative group shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
						<img
							className="w-full h-full object-cover group-hover:opacity-75 transition duration-500"
							src="/projects/qtrip.png"
							alt="Project Qtrip"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
							<p className="text-teal-300 text-2xl font-bold">
								QTrip - Travel Booking
							</p>
						</div>
					</div>
				</a>

				{/* Project 3 */}
				<a
					href="https://chevy-webflix.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<div className="relative group shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
						<img
							className="w-full h-full object-cover group-hover:opacity-75 transition duration-500"
							src="/projects/webflix.png"
							alt="Project Webflix"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
							<p className="text-teal-300 text-2xl font-bold">
								Webflix - Movie Platform
							</p>
						</div>
					</div>
				</a>
			</div>
		</section>
	);
}

export default Projects;
