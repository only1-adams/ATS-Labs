import SearchIcon from "@/src/components/icons/SearchIcon";
import React from "react";

export default function SearchInput() {
	return (
		<form action="">
			<div className="w-[248px] h-[50px] border-[1.5px] border-[#B7B7B7] rounded-full p-5 flex items-center gap-x-3 focus-within:border-primary transition-all duration-200 overflow-hidden">
				<SearchIcon />
				<input
					className="grow max-w-[90%] border-0 outline-none h-full text-2xl"
					placeholder="Search"
					type="search"
				/>
			</div>
		</form>
	);
}
