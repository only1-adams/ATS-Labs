import React from "react";
import Link from "next/link";

export default function FooterLinks({ title, items }) {
	return (
		<div className="flex flex-col gap-y-10">
			<h6 className="text-[2rem] font-bold text-white">{title}</h6>
			<ul className="flex flex-wrap lg:flex-nowrap lg:flex-col gap-x-8 gap-y-6">
				{items.map((item) => (
					<li key={item.title} className="text-2xl text-white lg:max-w-[165px]">
						<Link
							href={
								item.linkType === "email"
									? `mailto:${item.href}`
									: item.linkType === "tel"
									? `tel:${item.href}`
									: item.href
							}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
