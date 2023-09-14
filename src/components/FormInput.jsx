import React from "react";

export default function FormInput({ placeholder }) {
	return (
		<div className="w-full h-[50px] text-2xl border-b-[1.5px] border-b-[#929292] focus-within:border-b-primary transition-all duration-200">
			<input
				className="outline-none border-0 w-full h-full placeholder:text-[#929292]"
				placeholder={placeholder}
				type="text"
			/>
		</div>
	);
}
