import React from "react";
import PdIcon from "./PdIcon";

const OMPLogo = () => {
	return (
		<div className="font-sans flex items-center justify-center gap-2">
			<PdIcon className="text-primary" />
			<h1 className="hidden md:block text-xl font-bold text-foreground">
				OMP
			</h1>
		</div>
	);
};

export default OMPLogo;
