import React from "react";
import Image from "next/image";

export default function IndustryCard({
	backgroundColor,
	imageSrc,
	title,
	description,
}) {
	return (
		<div
			className="p-8 text-white rounded-3xl min-h-[474px]"
			style={{ backgroundColor }}>
			<div className="w-full h-[204px">
				<Image
					src={imageSrc}
					className="w-full h-full object-cover"
					width={328}
					height={204}
					alt="industry"
				/>
			</div>
			<h5 className="text-[2.5rem] font-bold mt-4">{title}</h5>
			<p className="text-[1.7rem] font-medium mt-5">{description}</p>
		</div>
	);
}
