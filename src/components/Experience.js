import React from "react";

function Experience() {
	return (
		<section className="mx-20 my-20" name="my journey">
			<div className="education" name="education">
				<h3 className="text-5xl font-playfair z-10 text-center md:text-start text-yellow mb-10">
					My Education
				</h3>
				<div className="mt-10 mx-auto max-w-3xl p-6 bg-gray-800 shadow-lg rounded-lg border border-teal-500 text-center">
					<div className="flex flex-col items-center justify-center text-white">
						<h3 className="text-3xl font-bold text-teal-300 mb-2">
							Bachelor of Engineering
						</h3>
						<p className="text-gray-400 mb-1 text-xl">2017 - 2021</p>
						<h4 className="text-xl font-semibold text-gray-200">
							Sri Krishna College of Engineering and Technology
						</h4>
					</div>
				</div>
			</div>

			<div className="experience mt-20" name="experience">
				<h3 className="text-5xl font-playfair z-10 text-center md:text-start text-yellow mb-10">
					My Experience
				</h3>
				<div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 max-md:text-center">
					{/* Crio Experience */}
					<div className="p-6 bg-gray-800 shadow-lg rounded-lg border border-teal-500">
						<h4 className="text-xl font-bold text-teal-300">
							Project Engineer
						</h4>
						<p className="text-gray-400 text-xl">Sep 2023 – Present</p>
						<p className="text-white font-semibold text-lg mt-2">
							Crio.Do, Bengaluru
						</p>
					</div>

					{/* Cognizant Programmer Analyst Experience */}
					<div className="p-6 bg-gray-800 shadow-lg rounded-lg border border-teal-500">
						<h4 className="text-xl font-bold text-teal-300">
							Programmer Analyst Trainee
						</h4>
						<p className="text-gray-400 text-xl">Aug 2021 – Feb 2022</p>
						<p className="text-white font-semibold text-lg mt-2">
							Cognizant Technology Solutions, Chennai
						</p>
					</div>

					{/* Cognizant Intern Experience */}
					<div className="p-6 bg-gray-800 shadow-lg rounded-lg border border-teal-500">
						<h4 className="text-xl font-bold text-teal-300">Intern</h4>
						<p className="text-gray-400 text-xl">Feb 2021 – Jun 2021</p>
						<p className="text-white font-semibold text-lg mt-2">
							Cognizant Technology Solutions, Chennai
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
