import Pill from "@/src/components/Pill";
import Image from "next/image";
import React from "react";

export default function BlogPost() {
	return (
		<div className="flex gap-x-3">
			<div className="md:w-[150px] lg:w-[193px]  md:h-[150px] lg:h-[196px] xl:h-[226px] shrink-0">
				<Image
					alt="blog"
					width={193}
					height={226}
					src={"/blogpostimg.png"}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="flex flex-col gap-y-6">
				<div className="flex flex-col gap-y-4">
					<Pill primary={true} label={"Design"} />
					<p className="text-2xl md:text-[1.8rem] lg:text-[2rem] xl:text-[2.5rem] leading-[2.5rem] lg:leading-[3rem] font-bold text-customBlack">
						7 Websites with the Best User Experience Design to Get Inspired From
						Added
					</p>
				</div>
				<span className="text-[#6C6C6C] font-medium text-2xl">
					Posted 13th Jul 2023
				</span>
			</div>
		</div>
	);
}
