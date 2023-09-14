"use client";
import Link from "next/link";
import React from "react";

export default function Button({
	as,
	primaryOutlined,
	primary,
	customWidth,
	clickHandler,
	children,
}) {
	const primaryClass = primary
		? "text-white bg-primary"
		: "text-primary bg-white";

	const primaryOutlinedClass = primaryOutlined
		? " text-primary border-primary"
		: "text-white border-white";

	const completeClass = `flex items-center justify-center gap-x-5 h-[5rem] w-[14.8rem] md:w-[19.8rem] rounded-full text-2xl font-bold border-[1.5px] ${
		primaryOutlined !== undefined && primaryOutlinedClass
	} ${primary !== undefined && primaryClass}`;

	return as?.type === "link" ? (
		<Link
			style={{ width: customWidth ? customWidth : null }}
			className={completeClass}
			href={as.href}>
			{children}
		</Link>
	) : as?.type === "button" || as?.type === "submit" ? (
		<button
			style={{ width: customWidth ? customWidth : null }}
			onClick={clickHandler ? () => clickHandler() : null}
			type={as.type}
			className={completeClass}>
			{children}
		</button>
	) : (
		<div
			style={{ width: customWidth ? customWidth : null }}
			className={completeClass}>
			{children}
		</div>
	);
}
