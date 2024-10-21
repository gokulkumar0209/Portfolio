import React from "react";

function MySkills() {
	const skills = [
		{ name: "JavaScript", icon: "/icons/javascript.png" },
		{ name: "React", icon: "/icons/react.png" },
		{ name: "HTML", icon: "/icons/html.png" },
		{ name: "CSS", icon: "/icons/css.png" },
		{ name: "Tailwind CSS", icon: "/icons/tailwind-css.png" },
		{ name: "Python", icon: "/icons/python.png" },
		{ name: "GitHub", icon: "/icons/github.png" },
		{ name: "DSA", icon: "/icons/dsa.svg" },
	];

	return (
		<section
			id="skills"
			name="skills"
			className="mt-20 px-6 lg:px-24 py-10 border-2 border-yellow rounded-lg bg-gray-900"
		>
			<div>
				<h3 className="text-5xl font-playfair z-10 text-center md:text-start text-yellow mb-10">
					My Skills
				</h3>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
					{skills.map((skill) => (
						<div
							key={skill.name}
							className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-md shadow-lg hover:bg-gray-700 transition-all"
						>
							<img
								className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
								src={skill.icon}
								alt={skill.name}
							/>
							<p className="mt-4 text-white text-sm md:text-base">
								{skill.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default MySkills;
