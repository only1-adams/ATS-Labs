"use client";
import { createContext, useContext, useReducer } from "react";

const CareerContext = createContext(null);

const initialState = {
	isApplying: false,
	careerData: null,
};

const reducer = function (state, action) {
	if (action.type === "updateID") {
		state = { ...state, careerData: action.payload };
	}

	if (action.type === "isApplying") {
		state = { ...state, isApplying: action.payload };
	}

	return state;
};

export const useCareer = function () {
	const [state, dispatch] = useContext(CareerContext);

	return [state, dispatch];
};

export default function CareerProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<CareerContext.Provider value={[state, dispatch]}>
			{children}
		</CareerContext.Provider>
	);
}
