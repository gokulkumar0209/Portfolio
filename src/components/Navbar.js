import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

function Navbar() {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

	const NavLink = ({ title }) => (
		<LinkScroll
			className="text-white capitalize cursor-pointer hover:text-teal-600"
			to={title}
			spy
			smooth
			duration={1000}
			activeClass="text-yellow"
		>
			{title}
		</LinkScroll>
	);

	return (
		<nav className="z-40 w-full fixed top-0 bg-black py-6">
			<div className="flex items-center justify-between lg:mx-20 w-5/6">
				<h4 className="font-playfair text-3xl font-bold">Gokulkumar</h4>

				{/* DESKTOP NAV */}
				{isAboveMediumScreens ? (
					<div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
						<NavLink title="home" />
						<NavLink title="skills" />

						<NavLink title="my journey" />
						<NavLink title="projects" />
						<NavLink title="contact" />
					</div>
				) : (
					<button
						className="rounded-full p-2 text-white"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						&#9776;
					</button>
				)}

				{/* MOBILE MENU POPUP */}
				{!isAboveMediumScreens && isMenuToggled && (
					<div className="fixed right-0 bottom-0 h-full bg-deep-blue w-[300px]">
						{/* CLOSE ICON */}
						<div className="flex text-center flex-col py-12 mr-16">
							<button
								onClick={() => setIsMenuToggled(false)}
								className="flex justify-end mb-7"
							>
								<span className=" font-bold text-yellow text-2xl">x</span>
							</button>

							{/* MENU ITEMS */}
							<div className="flex flex-col gap-10 ml-[33%] text-2xl text-gray-400">
								<NavLink title="home" />
								<NavLink title="skills" />

								<NavLink title="my journey" />
								<NavLink title="projects" />
								<NavLink title="contact" />
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;

// SVG for X , can be added at last

{
	/* <svg
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
		fill="white"
		fillOpacity="0.54"
	/>
</svg>; */
}
