import Image from "next/image";
import React from "react";
import SingleTechnology from "./SingleTechnology";
import TableRow from "./TableRow";

export default function ToolsAndTechnologies() {
	return (
		<table className="border-collapse w-max xl:w-full border-l-0 border-r-0 border-spacing-3">
			<thead>
				<tr>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<TableRow title={"Web"}>
					<>
						<SingleTechnology
							label={"Typescript"}
							imageSrc={"/typescript.png"}
							imageWidth={33}
							imageHeight={33}
						/>
						<SingleTechnology
							label={"React JS"}
							imageSrc={"/react.png"}
							imageWidth={42}
							imageHeight={42}
						/>
						<SingleTechnology
							label={"Next JS"}
							imageSrc={"/nextjs.png"}
							imageWidth={42}
							imageHeight={42}
						/>
					</>
				</TableRow>
				<TableRow title={"Mobile"}>
					<>
						<SingleTechnology
							label={"React Native"}
							imageSrc={"/react.png"}
							imageWidth={42}
							imageHeight={42}
						/>
					</>
				</TableRow>
				<TableRow title={"APIs"}>
					<>
						<SingleTechnology
							imageSrc={"/nodejs.png"}
							imageWidth={106}
							imageHeight={33}
						/>
						<SingleTechnology
							imageSrc={"/django.png"}
							imageWidth={86}
							imageHeight={30}
						/>
					</>
				</TableRow>
				<TableRow title={"Software QA"}>
					<>
						<SingleTechnology
							label={"Selenium"}
							imageSrc={"/selenium.png"}
							imageWidth={40}
							imageHeight={43}
						/>
						<SingleTechnology
							imageSrc={"/cypress.png"}
							imageWidth={104}
							imageHeight={42}
						/>
					</>
				</TableRow>
				<TableRow title={"AMQP & Cache"}>
					<>
						<SingleTechnology
							label={"Redis"}
							imageSrc={"/redis.png"}
							imageWidth={50}
							imageHeight={50}
						/>
						<SingleTechnology
							imageSrc={"/rabbitmq.png"}
							imageWidth={172}
							imageHeight={27}
						/>
					</>
				</TableRow>
				<TableRow title={"Containers and Orchestration"}>
					<>
						<SingleTechnology
							label={"Docker"}
							imageSrc={"/docker.png"}
							imageWidth={64}
							imageHeight={41}
						/>
						<SingleTechnology
							label={"Kubernetes"}
							imageSrc={"/kubernets.png"}
							imageWidth={46}
							imageHeight={45}
						/>
					</>
				</TableRow>
				<TableRow title={"Databases"}>
					<>
						<SingleTechnology
							imageSrc={"/mysql.png"}
							imageWidth={81}
							imageHeight={46}
						/>
						<SingleTechnology
							label={"Postgres"}
							imageSrc={"/postgresql.png"}
							imageWidth={44}
							imageHeight={45}
						/>
						<SingleTechnology
							imageSrc={"/sqlserver.png"}
							imageWidth={64}
							imageHeight={51}
						/>
						<SingleTechnology
							imageSrc={"/oracle.png"}
							imageWidth={128}
							imageHeight={31}
						/>
					</>
				</TableRow>
				<TableRow title={"Cloud"}>
					<>
						<SingleTechnology
							imageSrc={"/aws.png"}
							imageWidth={48}
							imageHeight={29}
						/>
						<SingleTechnology
							label={"Digital Ocean"}
							imageSrc={"/digitalocean.png"}
							imageWidth={44}
							imageHeight={45}
						/>
						<SingleTechnology
							label={"Vercel"}
							imageSrc={"/vercel.png"}
							imageWidth={44}
							imageHeight={45}
						/>
					</>
				</TableRow>
				<tr>
					<td className="py-10 pl-5 w-[231px]">
						<span className="text-[2rem] font-bold text-white">
							And much more...
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
