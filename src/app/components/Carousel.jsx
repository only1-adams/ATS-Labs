"use client";
import React, { useEffect, useState } from "react";
import CarouselIndicators from "@/src/components/CarouselIndicators";
import Image from "next/image";

let intervalID = null;

export default function Carousel({ images }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		function autoSlide() {
			if (currentSlide === images?.length - 1) {
				setCurrentSlide(0);
			} else {
				setCurrentSlide((draft) => draft + 1);
			}
		}

		intervalID = setInterval(() => {
			autoSlide();
		}, 5000);

		return () => clearInterval(intervalID);
	}, [currentSlide, images?.length]);

	return (
		<>
			<div className="w-full h-[312px] md:h-[382px] relative rounded-2xl overflow-hidden">
				{images?.map((image, index) => (
					<div
						key={index}
						style={{
							transform: `translateX(${100 * (index - currentSlide)}%)`,
						}}
						className="w-full h-full absolute top-0 transition-all duration-300">
						<Image
							src={image.src}
							alt={image.alt}
							width={482}
							height={382}
							priority={true}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>
			<CarouselIndicators
				totalItems={images?.length}
				currentSlide={currentSlide}
			/>
		</>
	);
}
