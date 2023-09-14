import React from "react";

export default function Pill({ primary, secondary, label }) {
	return (
		<div
			className={`px-5 py-3 text-2xl rounded-full w-max ${
				secondary ? "border-primary text-primary" : undefined
			} ${primary ? "bg-primary text-white" : undefined}`}>
			{label}
		</div>
	);
}
