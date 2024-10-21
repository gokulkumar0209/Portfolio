import React from "react";
import { motion } from "framer-motion";
import { Link as LinkScroll } from "react-scroll";
import SocialMediaIcons from "./SocialMediaIcons";

function Landing() {
	return (
		<section
			id="home"
			name="home"
			className="lg:mx-20 md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
		>
			{/* {IMAGE SECTION} */}
			<div className="max-lg:hidden  flex justify-center order-2 mr-20 z-10 mt-16">
				<div className="relative z-0 ml-15 before:absolute">
					<img
						alt="profile"
						src="../../assets/my-photo.png"
						className="hover:filter hover:saturate-200 transition h-[600px] duration-500 rounded-lg"
					/>
				</div>
			</div>

			{/* {MAIN SECTION} */}

			<div className="z-30 basis-2/5 max-md:justify-center  mt-12 md:mt-32">
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
						className="mr-4"
						to="contact"
						spy
						smooth
						duration={1000}
						activeClass="text-yellow-400"
					>
						<button className="button-gradient hover:text-white">
							Contact Me
						</button>
					</LinkScroll>
					<LinkScroll
						className="ml-4"
						to="contact"
						spy
						smooth
						duration={1000}
						activeClass=""
					>
						<button className="button-gradient hover:text-white">
							Lets Talk
						</button>
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
