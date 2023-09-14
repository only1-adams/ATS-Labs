import LetsTalkSection from "@/src/components/LetsTalkSection";
import React from "react";

export default function ServicesPage() {
	return (
		<main className="pt-[10rem] md:pt-[12rem]">
			<section className="h-[308px] bg-primary w-full flex items-center justify-center px-8 md:px-[4rem]">
				<h1 className="text-[3rem] md:text-[5.5rem] font-extrabold text-white text-center">
					Software Development Services
				</h1>
			</section>
			<section className="py-12 flex justify-center">
				<article className="text-2xl text-customBlack font-medium w-[95%] md:w-[85%] lg:w-[70%]">
					<p>
						At ATS Labs, we can offer high quality API development services to
						our clients thanks to our wealth of experience and expertise in this
						area of software development.
					</p>
					<div className="mt-20">
						<h2 className="text-[2.8rem] md:text-[3.5rem] text-customBlack font-extrabold mb-10 leading-[4.5rem]">
							What kinds of APIs do we build?
						</h2>
						<p>
							The two main kinds of API we build are RESTful APIs and GraphQL
							APIs. We are also familiar with Resource Oriented Architecture
							styles. By following these architectural styles, our APIs are well
							structured and follow familiar patterns that are easily
							recognisable to industry practitioners. This also makes our APIs
							easier to consume. Our APIs often follow the OpenAPI schema, which
							is increasingly becoming an industry standard and allows for
							easier integration with existing systems and codebases. It also
							means that API client libraries can be autogenerated, making
							consuming the API more convenient for users.
						</p>
					</div>
					<div className="mt-20">
						<h2 className="text-[2.8rem] md:text-[3.5rem] text-customBlack font-extrabold mb-10 leading-[4.5rem]">
							What languages do we use to develop APIs?
						</h2>
						<p>
							The two main kinds of API we build are RESTful APIs and GraphQL
							APIs. We are also familiar with Resource Oriented Architecture
							styles. By following these architectural styles, our APIs are well
							structured and follow familiar patterns that are easily
							recognisable to industry practitioners. This also makes our APIs
							easier to consume. Our APIs often follow the OpenAPI schema, which
							is increasingly becoming an industry standard and allows for
							easier integration with existing systems and codebases. It also
							means that API client libraries can be autogenerated, making
							consuming the API more convenient for users.
						</p>
					</div>
					<div className="mt-20">
						<h2 className="text-[2.8rem] md:text-[3.5rem] text-customBlack font-extrabold mb-10 leading-[4.5rem]">
							How secure are our APIs?
						</h2>
						<p>
							The two main kinds of API we build are RESTful APIs and GraphQL
							APIs. We are also familiar with Resource Oriented Architecture
							styles. By following these architectural styles, our APIs are well
							structured and follow familiar patterns that are easily
							recognisable to industry practitioners. This also makes our APIs
							easier to consume. Our APIs often follow the OpenAPI schema, which
							is increasingly becoming an industry standard and allows for
							easier integration with existing systems and codebases. It also
							means that API client libraries can be autogenerated, making
							consuming the API more convenient for users.
						</p>
					</div>
				</article>
			</section>
			<LetsTalkSection />
		</main>
	);
}
