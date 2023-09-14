import React from "react";
import ToolsAndTechnologies from "./ToolsAndTechnologies";

export default function TandTSection() {
	return (
		<section className="mt-12 py-16 px-8 lg:px-[5rem] xl:px-[9rem] 2xl:px-[11rem] bg-primary">
			<h3 className="text-center text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold text-white mb-20">
				Some of Our Tools and Technologies
			</h3>
			<div className="w-full overflow-auto">
				<ToolsAndTechnologies />
			</div>
		</section>
	);
}
