"use client";
import React from "react";
import Chevron from "@/src/components/icons/Chevron";
import Button from "@/src/components/Button";

export default function Opening({ applyNowHandler, index, career }) {
	return (
		<div
			className={`${
				index % 2 !== 0 ? "bg-[#F5F8F8]" : "bg-transparent"
			} py-12 px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem] flex flex-col md:flex-row md:items-center justify-between gap-y-8`}>
			<p className="text-[2rem] font-bold text-customBlack">{career.title}</p>
			<div className="flex items-center gap-8">
				<div className="flex items-center gap-8">
					<button className="flex items-center gap-x-3 text-2xl  text-customBlack font-medium">
						View details
						<Chevron />
					</button>
					<Button
						clickHandler={() => {
							applyNowHandler({ id: career.id, title: career.title });
						}}
						as={{ type: "button" }}
						primary={true}>
						Apply now
					</Button>
				</div>
			</div>
		</div>
	);
}
