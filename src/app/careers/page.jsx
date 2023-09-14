import Button from "@/src/components/Button";
import Image from "next/image";
import React from "react";
import OpeningsList from "./components/OpeningsList";
import CareerProvider from "./components/CareerProvider";
import ApplicationOffcanvas from "./components/ApplicationOffcanvas";

export default function page() {
	return (
		<main className="pt-[10rem] md:pt-[12rem]">
			<section className="px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem] pb-12">
				<h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-black text-customBlack mb-5">
					Come work at ATS Labs
				</h1>
				<Button as={{ type: "button" }} primary={true}>
					Explore our jobs
				</Button>
			</section>
			<section>
				<div className="w-full overflow-hidden md:h-[354px] lg:h-[414px]">
					<Image
						width={1280}
						height={414}
						src={"/ats-workers.png"}
						alt="ATS workers"
						className="h-full w-full object-cover"
					/>
				</div>
			</section>
			<section className="py-16 px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem] flex flex-col lg:flex-row lg:items-center gap-x-10">
				<div className="lg:w-1/2">
					<h2 className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-black text-customBlack">
						What makes us different
					</h2>
				</div>
				<div className="lg:w-1/2">
					<p className="text-2xl font-medium text-customBlack">
						Lorem ipsum dolor sit amet consectetur. Ipsum eu nec vulputate amet
						neque. Pharetra bibendum morbi quis erat lectus pretium urna lectus
						felis. Velit nunc lacinia eget amet dignissim ac faucibus et
						habitasse. Nulla egestas integer senectus magna nunc in
						sollicitudin. Tincidunt donec nunc commodo nullam imperdiet
						maecenas. Amet mauris lacus nisi quis ultricies metus in. Volutpat
						sed eget dui id vitae rhoncus. Tristique praesent est integer tempus
						mi. Vel vivamus commodo enim nunc pulvinar consectetur.
					</p>
				</div>
			</section>
			<section className="bg-primary py-10 lg:py-0 px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem] grid md:grid-cols-2 gap-y-10">
				<div className="w-full md:max-w-[90%] lg:w-max lg:h-[547px]">
					<Image
						width={450}
						height={547}
						className="h-full w-full object-cover"
						src={"/learnwork.png"}
						alt="ATS Learn as you work"
					/>
				</div>
				<div className="flex items-center justify-center">
					<div className="h-max w-full">
						<h3 className="text-white text-[3.5rem] md:text-[4rem] lg:text-[5.5rem] font-black">
							Learn as you work
						</h3>
						<p className="text-2xl text-white leading-[2.5rem]">
							Lorem ipsum dolor sit amet consectetur. Ipsum eu nec vulputate
							amet neque. Pharetra bibendum morbi quis erat lectus pretium urna
							lectus felis. Velit nunc lacinia eget amet dignissim ac faucibus
							et habitasse. Nulla egestas integer senectus magna nunc in
							sollicitudin. Tincidunt donec nunc commodo nullam imperdiet
							maecenas. Amet mauris lacus nisi quis ultricies metus in. Volutpat
							sed eget dui id vitae rhoncus. Tristique praesent est integer
							tempus mi. Vel vivamus commodo enim nunc pulvinar consectetur.
						</p>
					</div>
				</div>
			</section>
			<section className="py-16">
				<div className="px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem]">
					<h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-black text-customBlack mb-5 leading-none">
						Current Openings
					</h1>
					<span className="text-[#515151] text-2xl font-medium">
						Grow with us at ATS Labs
					</span>
				</div>
				<CareerProvider>
					<ApplicationOffcanvas />
					<OpeningsList
						careers={[
							{ id: 1, title: "Product Designer" },
							{ id: 2, title: "Data Analyst" },
							{ id: 3, title: "Frontend Developer" },
							{ id: 4, title: "AI/ML Specialist" },
							{ id: 5, title: "Robotics Engineer" },
						]}
					/>
				</CareerProvider>
			</section>
		</main>
	);
}
