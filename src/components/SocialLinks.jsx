import React from "react";
import Link from "next/link";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function SocialLinks({ fill }) {
	return (
		<div className="flex items-center gap-x-12">
			<Link href={"/"}>
				<InstagramIcon fill={fill} />
			</Link>
			<Link href={"/"}>
				<TwitterIcon fill={fill} />
			</Link>
			<Link href={"/"}>
				<LinkedInIcon fill={fill} />
			</Link>
		</div>
	);
}
