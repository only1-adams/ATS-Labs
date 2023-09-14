import React from "react";
import Logo from "./Logo";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
	return (
		<footer className="py-12 bg-primary px-8 lg:px-[4rem] xl:px-[8rem]">
			<div className="flex flex-col gap-y-24 lg:flex-row justify-between">
				<div className="flex flex-col gap-y-14">
					<Logo color={"#FFFFFF"} />
					<SocialLinks fill={"white"} />
				</div>
				<div className="flex flex-col lg:flex-row gap-y-16 gap-x-24">
					<FooterLinks
						title={"Services"}
						items={[
							{ title: "Software Development", linkType: "link", href: "/" },
							{ title: "Software Development", linkType: "link", href: "/" },
							{ title: "Software Development", linkType: "link", href: "/" },
							{ title: "Software Development", linkType: "link", href: "/" },
							{ title: "Software Development", linkType: "link", href: "/" },
							{ title: "Software Development", linkType: "link", href: "/" },
						]}
					/>
					<FooterLinks
						title={"Company"}
						items={[
							{ title: "About us", linkType: "link", href: "/about" },
							{ title: "Careers", linkType: "link", href: "/careers" },
							{ title: "Our Blog", linkType: "link", href: "/blog" },
						]}
					/>
					<FooterLinks
						title={"Contact"}
						items={[
							{
								title: `Feel free to get in touch with us.`,
								linkType: "link",
								href: "/",
							},
							{ title: "+234 (810) 759 5941", linkType: "tel", href: "/" },
							{ title: "email@atslabs.com", linkType: "email", href: "/" },
						]}
					/>
				</div>
			</div>
			<div className="w-full mt-20 md:mt-32 flex lg:justify-end">
				<span className="text-xl md:text-2xl font-medium text-white">
					Copyright &copy; 2023 - Anchorsoft Tech System Labs
				</span>
			</div>
		</footer>
	);
}
