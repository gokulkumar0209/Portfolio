import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import LineGradient from "./LineGradient";

function Contact() {
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section id="contact" title="contact" className="py-48">
			<motion.div
				className="flex justify-end w-full"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<div>
					<p className="font-playfair font-semibold text-4xl">
						<span className="text-yellow">CONTACT ME</span>TO GET STARTED
					</p>
					<div className="flex md:justify-end my-5">
						<LineGradient width="w-1/2" />
					</div>
				</div>
			</motion.div>

			{/* FORM AND IMG SECTION */}

			<div className="md:flex md:justify-between gap-16 mt-5">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<img
						src="https://finwave.co/images/gif/Contact-1.gif"
						className="md:w-[2000px]"
						alt="contact"
					/>
				</motion.div>

				<motion.div
					className="basis-1/2 mt-10 md:mt-0"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				></motion.div>

				<form
					target="_blank"
					onSubmit={onSubmit}
					action="https://formsubmit.co/73d19526d00cfd9f367fedd03849d6a4"
					method="POST"
				>
					<input
						className="w-full bg-blue font-semibold rounded placeholder-opaque-black p-3 "
						type="text"
						placeholder="Name"
						{...register("name", {
							required: true,
							maxLength: 100,
						})}
					/>
					{errors.name && (
						<p className="text-rose-800 m-1">
							{errors.name.type === "required" && "THIS FIELD IS REQUIRE."}
							{errors.name.type === "maxLength" && "Max length is 100 char"}
						</p>
					)}

					<input
						className="w-full bg-blue rounded font-semibold placeholder-opaque-black p-3 mt-5 "
						type="email"
						placeholder="EMAIL"
						{...register("email", {
							required: true,
							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						})}
					/>
					{errors.email && (
						<p className="text-rose-800 m-1">
							{errors.name.type === "required" && "THIS FIELD IS REQUIRE."}
							{errors.name.type === "pattern" && "Invalid email address"}
						</p>
					)}
					<textarea
						className="w-full bg-blue font-semibold rounded placeholder-opaque-black p-3 mt-5 "
						type="text"
						placeholder="MESSAGE"
						row="5"
						cols="50"
						{...register("message", {
							required: true,
							maxLength: 2000,
						})}
					/>
					{errors.message && (
						<p className="text-rose-800 m-1">
							{errors.name.type === "required" && "THIS FIELD IS REQUIRE."}
							{errors.name.type === "maxLength" &&
								"Max length is 2000 character"}
						</p>
					)}

					<button
						type="submit"
						className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-200 rounded-xl"
					>
						SEND ME MESSAGE
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
