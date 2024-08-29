import { useState } from "react";
import Home from "./components/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<head>
				<title>YYY</title>
			</head>
			<body className="bg-black min-h-screen">
				<header className=" bg-blue-900 text-white font-bold p-4 text-xl flex justify-between">
					<h1>G</h1>
					<div>
						<h2>Links</h2>
					</div>
				</header>
				<Home />
			</body>
		</>
	);
}

export default App;
