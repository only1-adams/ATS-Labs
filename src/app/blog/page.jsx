import React from "react";
import SearchInput from "./components/SearchInput";
import BlogPost from "./components/BlogPost";
import LetsTalkSection from "@/src/components/LetsTalkSection";
import SearchIcon from "@/src/components/icons/SearchIcon";

export default function page() {
	return (
		<main className="pt-[10rem] md:pt-[12rem]">
			<section className="px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem] py-12 flex items-center justify-between">
				<h1 className="text-[3.5rem] md:text-[4.5rem] font-black text-customBlack">
					Our Blog
				</h1>
				<div className="md:hidden">
					<SearchIcon />
				</div>
				<div className="hidden md:block">
					<SearchInput />
				</div>
			</section>
			<section className="py-8 md:py-12 px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem]">
				<div className="grid lg:grid-cols-2 gap-10">
					<BlogPost />
					<BlogPost />
					<BlogPost />
					<BlogPost />
					<BlogPost />
					<BlogPost />
				</div>
			</section>
			<LetsTalkSection />
		</main>
	);
}
