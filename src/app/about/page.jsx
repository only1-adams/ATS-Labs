import Button from "@/src/components/Button";
import React from "react";
import Image from "next/image";
import SocialLinks from "@/src/components/SocialLinks";
import LetsTalkSection from "@/src/components/LetsTalkSection";

export default function AboutPage() {
	return (
		<main className="pt-[10rem] md:pt-[12rem]">
			<section className="py-12 px-8 lg:px-[5rem] xl:px-[12rem] flex flex-col items-center justify-center">
				<div className="bg-primary p-8 md:p-12 w-full rounded-2xl">
					<p className="text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] font-extrabold text-white mb-8">
						We are a team of product people, designers and developers who help
						companies build great products.
					</p>
					<Button
						as={{ type: "link", href: "/contact" }}
						primary={false}>{`Let's Talk`}</Button>
				</div>
				<p className="mt-10 text-[#575757] text-[2rem] md:text-[2.5rem] font-medium">
					We love products. We believe that design is a collaborative process,
					and together we can make outstanding products.
				</p>
			</section>
			<section className="py-12 bg-customBlue px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem]">
				<div className="grid lg:grid-cols-3 gap-12">
					<div className="text-white">
						<h2 className="text-[3rem] md:text-[3.5rem] font-black">Launch</h2>
						<p className="text-2xl font-medium mt-4">
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
					<div className="text-white">
						<h2 className="text-[3rem] md:text-[3.5rem] font-black">Grow</h2>
						<p className="text-2xl font-medium mt-4">
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
					<div className="text-white">
						<h2 className="text-[3rem] md:text-[3.5rem] font-black">
							Innovate
						</h2>
						<p className="text-2xl font-medium mt-4">
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
			<section className="py-12 px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem]">
				<h3 className=" text-[3.5rem] md:text-[4.5rem] text-customBlack font-black">
					We are ATS Labs
				</h3>
				<div className="mt-12 flex flex-col items-center md:items-start md:flex-row gap-12">
					<div className="shrink-0 w-[368px] h-[384px] overflow-hidden">
						<Image
							width={368}
							height={384}
							alt="ATS Founder"
							src={"/dummyfounder.png"}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="lg:w-[55%] xl:w-[45%] flex flex-col gap-y-[2rem]">
						<div className="flex flex-col gap-y-2 text-[3rem] text-customBlack font-bold">
							<span className="text-[3rem]">John Doe</span>
							<span className="text-[2rem]">Founder, ATS Labs</span>
						</div>
						<div className="flex flex-col gap-y-[2.5rem] text-2xl font-medium text-customBlack">
							<p>
								Lorem ipsum dolor sit amet consectetur. Ipsum eu nec vulputate
								amet neque. Pharetra bibendum morbi quis erat lectus pretium
								urna lectus felis. Velit nunc lacinia eget amet dignissim ac
								faucibus et habitasse. Nulla egestas integer senectus magna nunc
								in sollicitudin. Tincidunt donec nunc commodo nullam imperdiet
								maecenas. Amet mauris lacus nisi quis ultricies metus in.
								Volutpat sed eget dui id vitae rhoncus. Tristique praesent est
								integer tempus mi. Vel vivamus commodo enim nunc pulvinar
								consectetur.
							</p>
							<SocialLinks fill={"black"} />
						</div>
					</div>
				</div>
			</section>
			<LetsTalkSection />
		</main>
	);
}
