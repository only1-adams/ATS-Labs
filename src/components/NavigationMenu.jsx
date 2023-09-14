import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";

export default function NavigationMenu() {
	return (
		<nav className="hidden lg:flex items-center gap-x-14">
			<Link href="/" className="text-2xl font-customBlack font-medium">
				Home
			</Link>
			<Dropdown
				label={"Services"}
				items={[
					{ label: "Sofware Development", href: "/services" },
					{ label: "Sofware Development", href: "/services" },
					{ label: "Sofware Development", href: "/services" },
					{ label: "Sofware Development", href: "/services" },
				]}
			/>
			<Dropdown
				label={"Technologies"}
				items={[
					{ label: "Javascript", href: "/services" },
					{ label: "Python", href: "/services" },
					{ label: "AWS", href: "/services" },
					{ label: "Digital Ocean", href: "/services" },
				]}
			/>
			<Dropdown
				label={"About"}
				items={[
					{ label: "About Us", href: "/about" },
					{ label: "Careers", href: "/careers" },
					{ label: "Our Blog", href: "/blog" },
				]}
			/>
			<Link href="/contact" className="text-2xl font-customBlack font-medium">
				Contact
			</Link>
		</nav>
	);
}
