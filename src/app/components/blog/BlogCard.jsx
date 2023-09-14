import React from "react";
import Image from "next/image";

export default function BlogCard() {
	return (
		<div className="w-[350px] md:w-[367px] xl:w-full">
			<div className="w-full h-[264px] rounded-xl overflow-hidden">
				<Image
					src={"/blogimg.png"}
					width={326}
					height={264}
					alt="img"
					className="w-full h-full object-cover"
				/>
			</div>
			<p className="text-[2.5rem] font-bold text-customBlack mt-6">
				Writing tests for Android apps using Python and Linux
			</p>
			<p className="text-[1.7rem] text-customGray mt-4">
				Anchorsoft Tech System brings you its expertise in the form of multiple
				development services that you can choose from.
			</p>
		</div>
	);
}
