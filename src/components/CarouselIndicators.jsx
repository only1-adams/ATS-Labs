import React from "react";

export default function CarouselIndicators({ totalItems, currentSlide }) {
	return (
		<div className="flex items-center justify-center gap-x-2 mt-4">
			{(() => {
				const results = [];
				for (let i = 0; i < totalItems; i++) {
					results.push(
						<span
							className={`w-[3.3rem] h-[0.4rem] bg-primary rounded-full ${
								i === currentSlide ? "bg-primary" : "bg-primaryLight"
							}`}></span>
					);
				}

				return results;
			})()}
		</div>
	);
}
