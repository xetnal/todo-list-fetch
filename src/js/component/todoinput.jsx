import React from "react";

export const ToDoInput = () => {
	return (
		<input
			type="text"
			name=""
			id=""
			placeholder="Add a To Do"
			onKeyDown={(e) => {
				if (e.keyCode === "Enter") {
				}
			}}
		/>
	);
};
