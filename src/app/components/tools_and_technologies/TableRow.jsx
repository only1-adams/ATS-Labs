import React from "react";

export default function TableRow({ title, children }) {
	return (
		<tr>
			<td className="border-[2px] border-l-0 border-white py-10 pl-5 w-[231px]">
				<span className="text-[2rem] font-bold text-white">{title}</span>
			</td>
			<td className="border-[2px] border-r-0 border-white py-10 pl-8">
				<div className="flex items-center gap-x-16">{children}</div>
			</td>
		</tr>
	);
}
