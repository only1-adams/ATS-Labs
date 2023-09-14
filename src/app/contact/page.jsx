import React from "react";
import FormInput from "../../components/FormInput";
import Button from "@/src/components/Button";
import ContactIllustration from "./components/ContactIllustration";

export default function page() {
	return (
		<main className="pt-[10rem] md:pt-[12rem]">
			<section className="py-16 px-8 lg:px-[4rem] xl:px-[8rem] 2xl:px-[10rem] flex  flex-col md:flex-row items-center">
				<div className="md:w-[55%]">
					<h1 className="text-[3.5rem] md:text-[4rem]  lg:text-[5.5rem] xl::text-[6.5rem] font-black text-customBlack mb-5">
						Let’s create progress together
					</h1>
					<div className="mt-12 w-full">
						<form action="">
							<div className="flex flex-col gap-y-10">
								<div className="flex flex-col gap-y-10 md:flex-row items-center gap-x-10">
									<FormInput placeholder={"Name"} />
									<FormInput placeholder={"Company Email"} />
								</div>
								<FormInput placeholder={"Company Name"} />
								<FormInput placeholder={"Project Description"} />
								<div>
									<Button as={{ type: "button" }} primary={true}>
										Submit
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="w-[95%] md:w-[45%] flex items-center justify-center">
					<ContactIllustration />
				</div>
			</section>
		</main>
	);
}
