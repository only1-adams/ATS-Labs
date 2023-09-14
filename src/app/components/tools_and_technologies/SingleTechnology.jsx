import React from "react";
import Image from "next/image";

export default function SingleTechnology({
	label,
	imageSrc,
	imageWidth,
	imageHeight,
}) {
	return (
		<div className="flex items-center gap-x-5">
			<span className="text-3xl font-regular text-white">{label}</span>
			<Image
				width={imageWidth}
				height={imageHeight}
				src={imageSrc}
				alt="typescript"
			/>
		</div>
	);
}
