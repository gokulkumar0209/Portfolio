import React from "react";

import TextDesign from "../ui/TextDesign";
function Home() {
	return (
		<div className=" flex flex-col items-center p-10  box-border bg-gray-700 ">
			<TextDesign text={"Gokulkumar NT"} width={"80vw"} height={"20vh"} />
			{/* <TextDesign text={"Frontend Developer"} width={"50vw"} height={"10vh"} /> */}
			<div className="  px-20">
				<p className=" text-white text-xl text-center p-2 ">
					Frontend Developer with expertise in JavaScript and React, and a
					strong foundation in Python, Data Structures and Algorithms, and
					Tailwind CSS.
				</p>
			</div>
		</div>
	);
}

export default Home;
