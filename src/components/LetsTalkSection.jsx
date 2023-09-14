import React from "react";
import Button from "./Button";

export default function LetsTalkSection() {
	return (
		<section className="py-12 bg-customLight flex flex-col items-center justify-center px-8 lg:px-[4rem] xl:px-[8rem]">
			<h4 className="text-[3.5rem] md:text-[5rem] lg:text-[5.3rem] xl:text-[6.3rem] text-primary font-extrabold max-w-[65.7rem] text-center">
				How may we serve you?
			</h4>
			<p className="text-[1.8rem] text-primary text-center max-w-[52.3rem] my-6">
				Leverage our world-class engineering teams to get your ideas and
				projects up and running quickly.
			</p>
			<Button
				as={{ type: "link", href: "/contact" }}
				primary={true}>{`Let's talk`}</Button>
		</section>
	);
}
