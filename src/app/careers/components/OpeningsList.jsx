"use client";
import React from "react";
import Opening from "./Opening";
import { useCareer } from "./CareerProvider";

export default function OpeningsList({ careers }) {
	const [_, dispatch] = useCareer();

	function applyNow(careerData) {
		dispatch({ type: "isApplying", payload: true });
		dispatch({ type: "updateID", payload: careerData });
	}

	return (
		<div className="mt-12 flex flex-col">
			{careers?.map((career, index) => (
				<Opening
					applyNowHandler={applyNow}
					index={index}
					career={career}
					key={career.id}
				/>
			))}
		</div>
	);
}
