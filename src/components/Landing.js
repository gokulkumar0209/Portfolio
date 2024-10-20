import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link as LinkScroll } from "react-scroll";
import Typewriter from "typewriter-effect";
import SocialMediaIcons from "./SocialMediaIcons";

function Landing() {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

	return (
		<section
			id="home"
			name="home"
			className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
		>
			{/* {IMAGE SECTION} */}
			<div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
				{isAboveMediumScreens ? (
					<div className="relative z-0 ml-15 before:absolute before:-top-14 before:-left-14 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
						<img
							alt="profile"
							src="../../assets/my-photo.png"
							className="hover:filter hover:saturate-200 transition h-[600px] duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
						/>
					</div>
				) : (
					<img
						alt="profile"
						src="./../../assets/my-photo.jpg"
						className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
					/>
				)}
			</div>

			{/* {MAIN SECTION} */}

			<div className="z-30 basis-2/5  mt-12 md:mt-32">
				<motion.div
					initial="hidden"
					whileInView={"visible"}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className="text-6xl font-playfair z-10 text-center md:text-start">
						Gokulkumar
						<span className="text-yellow text-5xl">
							{/* <Typewriter
								onInit={(typewriter) => {
									typewriter

										.typeString("MERN Stack")
										.pauseFor(500)
										.deleteAll()
										.typeString("Web Developer")
										.deleteAll()
										.pauseFor(500)
										.typeString("React")
										.deleteAll()
										.pauseFor(500)
										.typeString("Express")
										.deleteAll()
										.pauseFor(500)
										.typeString("MySQL")
										.deleteAll()
										.pauseFor(500)
										.typeString("Sequelize")
										.deleteAll()
										.pauseFor(500)
										.typeString("Bootstrap")
										.deleteAll()
										.pauseFor(500)
										.typeString("MERN Stack Developer")
										.start();
								}}
							/> */}
							<br />
							Frontend Engineer
						</span>
					</p>

					<p className="mt-10 mb-7 text-sm text-center md:text-start">
						I'm a Frontend Developer specializing in React and Tailwind CSS,
						with a strong background in data structures and algorithms. I build
						high-performance, user-centric web applications. Passionate about
						solving complex problems through efficient code and design.
					</p>
				</motion.div>

				{/* {CALL TO ACTIONS} */}

				<motion.div
					className="flex mt-5 justify-center md:justify-start"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<LinkScroll
						className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
						to="contact"
						spy
						smooth
						duration={1000}
						activeClass="text-yellow-400"
					>
						Contact Me
					</LinkScroll>
					<LinkScroll
						className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
						to="contact"
						spy
						smooth
						duration={1000}
						activeClass="text-yellow-400"
					>
						Let's Talk
					</LinkScroll>
				</motion.div>

				<motion.div
					className="flex mt-5 justify-center md:justify-start"
					initial="hidden"
					whileInView={"visible"}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<SocialMediaIcons />
				</motion.div>
			</div>
		</section>
	);
}

export default Landing;
