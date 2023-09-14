import Button from "@/src/components/Button";
import LinkIcon from "@/src/components/icons/LinkIcon";
import React from "react";
import BlogCard from "./BlogCard";

export default function OurBlogSection() {
	return (
		<section className="py-12 px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem]">
			<div className="flex items-center justify-between">
				<h5 className="text-[2.8rem] md:text-[4rem] text-customBlack font-extrabold">
					Our Blog
				</h5>
				<Button as={{ type: "link", href: "/blog" }} primaryOutlined={true}>
					Visit our blog <LinkIcon fill={"#013659"} />
				</Button>
			</div>
			<div className="w-full overflow-auto">
				<div className="w-max xl:w-full mt-12 grid grid-cols-3 gap-12">
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</div>
		</section>
	);
}
