import Logo from "@/src/components/Logo";
import NavigationMenu from "@/src/components/NavigationMenu";
import React from "react";
import HamburgerIcon from "./icons/HamburgerIcon";

export default function Header() {
	return (
		<header className="z-[3] bg-white h-[10rem] md:h-[12rem] px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem] fixed top-0 w-full flex items-center justify-between">
			<Logo color={"#013659"} />
			<NavigationMenu />
			<span className="lg:hidden flex items-center justify-center">
				<HamburgerIcon />
			</span>
		</header>
	);
}
