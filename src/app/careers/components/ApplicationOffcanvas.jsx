"use client";
import Portal from "@/src/components/Portal";
import React from "react";
import { useCareer } from "./CareerProvider";
import XIcon from "@/src/components/icons/XIcon";
import ApplicationForm from "./ApplicationForm";

export default function ApplicationOffcanvas() {
	const [state, dispatch] = useCareer();
	const { careerData, isApplying } = state;

	function notApplying() {
		dispatch({ type: "isApplying", payload: false });
	}

	return (
		<Portal>
			<Overlay isApplying={isApplying} clickHandler={notApplying} />
			<div
				className={`fixed w-[535px] top-0 right-0 h-screen overflow-auto z-[6] bg-white border-l-[2px] border-l-primary transition-all duration-300 py-12 px-8 ${
					!isApplying ? "translate-x-[1000px]" : "translate-x-0"
				}`}>
				<div className="flex items-center justify-between">
					<span className="font-black text-customBlack text-[2.8rem]">
						{careerData?.title}
					</span>
					<span
						onClick={notApplying}
						className="w-[55px] h-[55px] rounded-full hover:bg-primaryLight flex items-center justify-center cursor-pointer">
						<XIcon />
					</span>
				</div>
				<div className="mt-12">
					<ApplicationForm />
				</div>
			</div>
		</Portal>
	);
}

function Overlay({ isApplying, clickHandler }) {
	return (
		<div
			onClick={clickHandler}
			className={`fixed w-full h-full top-0 bg-[#01365978] z-[5] ${
				!isApplying
					? "opacity-0 pointer-events-none"
					: "opacity-1 pointer-events-auto"
			}`}></div>
	);
}
