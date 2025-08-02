import { Loader2 } from "lucide-react";

const loader = () => {
	return (
		<div className="flex justify-center items-center">
			<Loader2 className="animate-spin size-6" />
		</div>
	);
};

export default loader;
