import React from "react";
import IndustryCard from "./IndustryCard";
import Radar from "@/src/components/icons/Radar";

export default function IndustrySection() {
	return (
		<section className="py-8 md:py-12 px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem]">
			<div className="flex items-center justify-center gap-x-5  md:ap-x-8 mb-6">
				<h2 className="text-customBlack text-[2.3rem] md:text-[4rem] font-extrabold text-center">
					Industries on our radar
				</h2>
				<Radar />
			</div>
			<p className="text-center text-2xl md:text-3xl text-customBlack font-medium">
				Anchorsoft Tech System brings you its expertise in the form of multiple
				development services that you can choose from.
			</p>
			<div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<IndustryCard
					title={"Education"}
					description={`Anchorsoft Tech System brings you its expertise in the form of multiple
				development services that you can choose from.`}
					backgroundColor={"#013659"}
					imageSrc={"/education.png"}
				/>
				<IndustryCard
					title={"Fintech"}
					description={`Anchorsoft Tech System brings you its expertise in the form of multiple
				development services that you can choose from.`}
					backgroundColor={"#084958"}
					imageSrc={"/fintech.png"}
				/>
				<IndustryCard
					title={"Medicals"}
					description={`Anchorsoft Tech System brings you its expertise in the form of multiple
				development services that you can choose from.`}
					backgroundColor={"#0277C4"}
					imageSrc={"/medical.png"}
				/>
				<IndustryCard
					title={"Logistics and Supply Chain"}
					description={`Anchorsoft Tech System brings you its expertise in the form of multiple
				development services that you can choose from.`}
					backgroundColor={"#0277C4"}
					imageSrc={"/logistics.png"}
				/>
				<IndustryCard
					title={"Energy and Oil & Gas"}
					description={`Anchorsoft Tech System brings you its expertise in the form of multiple
				development services that you can choose from.`}
					backgroundColor={"#013659"}
					imageSrc={"/energy.png"}
				/>
				<IndustryCard
					title={"Commerce (Online & Offline)"}
					description={`Anchorsoft Tech System brings you its expertise in the form of multiple
				development services that you can choose from.`}
					backgroundColor={"#084958"}
					imageSrc={"/commerce.png"}
				/>
				<IndustryCard
					title={"Agro-allied"}
					description={`Anchorsoft Tech System brings you its expertise in the form of multiple
				development services that you can choose from.`}
					backgroundColor={"#084958"}
					imageSrc={"/agro.png"}
				/>
				<IndustryCard
					title={"Manufacturing"}
					description={`Anchorsoft Tech System brings you its expertise in the form of multiple
				development services that you can choose from.`}
					backgroundColor={"#0277C4"}
					imageSrc={"/manufacturing.png"}
				/>
				<IndustryCard
					title={"Real Estate & Hospitality"}
					description={`Anchorsoft Tech System brings you its expertise in the form of multiple
				development services that you can choose from.`}
					backgroundColor={"#013659"}
					imageSrc={"/realestate.png"}
				/>
			</div>
		</section>
	);
}
