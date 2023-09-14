import Button from "@/src/components/Button";
import FormInput from "@/src/components/FormInput";
import FormSelect from "@/src/components/FormSelect";
import DocumentIcon from "@/src/components/icons/DocumentIcon";
import React from "react";

export default function ApplicationForm() {
	return (
		<form action="">
			<div className="flex flex-col gap-y-10">
				<FormInput placeholder={"Name"} />
				<FormInput placeholder={"Email"} />
				<FormInput placeholder={"Mobile No."} />
				<FormSelect placeholder={"Highest Qualification"} />
				<label htmlFor="cv_upload">
					<input type="file" id="cv_upload" className="hidden" />
					<Button as={{ type: "normal" }} primaryOutlined={true}>
						Upload CV <DocumentIcon />
					</Button>
				</label>
				<div className="w-full">
					<Button as={{ type: "submit" }} customWidth={"100%"} primary={true}>
						Submit
					</Button>
				</div>
			</div>
		</form>
	);
}
