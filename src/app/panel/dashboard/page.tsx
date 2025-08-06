import { LogoutButton } from "@/components/common";
import { Button } from "@/components/ui";

function DashboardPage() {
	return (
		<div>
			DashboardPage
			<LogoutButton />
			<div className="flex flex-col gap-4 w-xs p-4">
				<Button variant={"outline"}>Outline Button</Button>
				<Button variant={"secondary"}>Secondary Button</Button>
				<Button variant={"ghost"}>Ghost Button</Button>
				<Button variant={"link"}>Link Button</Button>
				<Button variant={"destructive"}>Destructive Button</Button>
			</div>
		</div>
	);
}

export default DashboardPage;
