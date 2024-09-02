import React from "react";

import TextDesign from "../ui/TextDesign";
function Home() {
	return (
		<div className=" flex flex-col items-center p-10  box-border">
			<TextDesign text={"Gokulkumar NT"} width={"80vw"} height={"20vh"} />
			<TextDesign text={"Frontend Developer"} width={"50vw"} height={"10vh"} />
		</div>
	);
}

export default Home;
