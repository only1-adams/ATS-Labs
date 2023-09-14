import Button from "@/src/components/Button";
import LinkIcon from "@/src/components/icons/LinkIcon";
import React from "react";
import Carousel from "./Carousel";

export default function HeroSection() {
	return (
		<section className="py-10 md:py-14 px-8 md:px-0 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem] flex flex-col gap-y-10 lg:flex-row items-center">
			<div className="w-full md:w-[80%] lg:w-[55%]">
				<h1 className="text-[4rem] md:text-[4.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-extrabold text-customBlack">
					We are a <span className="text-primary">Creative</span> Software
					Development Agency
				</h1>
				<p className="text-2xl font-medium text-customBlack mt-3 md:pr-16 2xl:pr-32">
					Leverage Anchorsoft Tech System&apos;s world-class engineering teams
					to get your ideas and projects up and running quickly. Anchorsoft Tech
					System helps you set the stage for user-centric products.
				</p>
				<div className="mt-6 flex items-center gap-x-8">
					<Button as={{ type: "link", href: "/about" }} primary={true}>
						About us <LinkIcon fill={"#FFFFFF"} />
					</Button>
					<Button as={{ type: "link", href: "/contact" }} primary={true}>
						Get in touch
					</Button>
				</div>
			</div>
			<div className="w-full md:w-[80%] lg:w-[45%]">
				<Carousel
					images={[
						{ src: "/heroImage.png", alt: "ATS" },
						{ src: "/heroimg01.png", alt: "ATS" },
						{ src: "/heroimg02.png", alt: "ATS" },
					]}
				/>
			</div>
		</section>
	);
}
