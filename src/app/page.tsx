import { Button } from "@/components/ui";
import Link from "next/link";

async function RootPage() {
	return (
		<main className="grow app-px flex flex-col items-center justify-center">
			Root Page
			<div>
				<Link href="/auth/login">
					<Button variant={"link"}>Login</Button>
				</Link>

				<Link href="/auth/register">
					<Button variant={"link"}>Register</Button>
				</Link>
			</div>
			<div>
				<Link href="/panel/dashboard">
					<Button variant={"link"}>Dashboard</Button>
				</Link>
			</div>
		</main>
	);
}

export default RootPage;
