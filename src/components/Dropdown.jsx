"use client";
import React, { useRef, useState } from "react";
import Chevron from "./icons/Chevron";
import Link from "next/link";
import { useClickAway } from "ahooks";

export default function Dropdown({ label, items }) {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef(null);

	useClickAway(() => {
		setIsOpen(false);
	}, [containerRef]);

	function closeDropdown() {
		setIsOpen(false);
	}

	return (
		<div ref={containerRef} className="relative h-max">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-x-3 text-2xl text-customBlack font-medium">
				{label}
				<span
					className={`transition-all duration-300 ${
						isOpen ? "rotate-180" : undefined
					}`}>
					<Chevron />
				</span>
			</button>
			<DropdownContent
				show={isOpen}
				items={items}
				closeDropdown={closeDropdown}
			/>
		</div>
	);
}

const DropdownContent = function ({ show, items, closeDropdown }) {
	return (
		<div
			className={`bg-white rounded-xl shadow-2xl absolute top-full right-0 w-[300px] transition-all duration-200 overflow-hidden ${
				show
					? "opacity-1 pointer-events-auto scale-100"
					: "opacity-0 pointer-events-none scale-50"
			}`}>
			<ul className="flex flex-col">
				{items?.map((item) => (
					<li onClick={() => closeDropdown()} key={item.label}>
						<Link
							className="block text-2xl text-primary font-bold px-8 py-5 hover:bg-primaryLight transition-all duration-200"
							href={item?.href}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
