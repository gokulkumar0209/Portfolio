import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();
	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? "text-yellow" : ""
			} hover:text-yellow transition duration-300
    `}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

function Navbar({ selectedPage, setSelectedPage, isTopOfPage }) {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	// const navBackground = isTopOfPage ? "" : "bg-black";
	// need to update

	const isAboveMediumScreens = useMediaQuery("(min-width:768px");

	return (
		<nav className={`z-40 w-full fixed top-0 bg-black py-6`}>
			<div className="flex items-center justify-between mx-auto w-5/6">
				<h4 className="font-playfair text-3xl font-bold h-7">Gokulkumar</h4>
				{/* {DESKTOP NAV} */}
				{isAboveMediumScreens ? (
					<div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
						<Link
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Skills"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Projects"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>

						<Link
							page="Contact"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				) : (
					<button
						className=" rounded-full bg-red p-2 "
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						&#9776;
					</button>
				)}

				{/* {MOBILE MENU POPUP} */}

				{!isAboveMediumScreens && isMenuToggled && (
					<div className="fixed right-0 bottom-0 h-full bg-deep-blue w-[300px] ">
						{/* {CLOSE ICON} */}

						<div className="flex text-center flex-col  py-12 mr-16">
							<button
								onClick={() => setIsMenuToggled(!isMenuToggled)}
								className="flex justify-end mb-7"
							>
								<svg width="24" height="24" viewBox="0 0 24 24">
									<path
										d="M19 6L6 19M6 6l13 13"
										stroke="currentColor"
										stroke-width="2"
										fill="none"
									/>
								</svg>
							</button>

							{/* {MENU ITEMS} */}
							<div className="flex flex-col gap-10 ml-[33%] text-2xl text-gray-400">
								<Link
									page="Home"
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
								<Link
									page="Skills"
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
								<Link
									page="Projects"
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>

								<Link
									page="Contact"
									selectedPage={selectedPage}
									setSelectedPage={setSelectedPage}
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
