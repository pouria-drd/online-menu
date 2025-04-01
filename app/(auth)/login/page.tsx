import { Wave } from "@/components/images";
import { Badge, Button } from "@/components/ui";

function LoginPage() {
    return (
        <div>
            LoginPage
            <div className="flex flex-col items-center justify-center gap-4 w-72 mx-auto">
                <Button fullWidth btnType="primary">
                    Primary
                </Button>
                <Button fullWidth btnType="dark">
                    Dark
                </Button>
                <Button fullWidth btnType="light">
                    Light
                </Button>
            </div>
            <br />
            <br />
            <div className="grid grid-cols-3 gap-4 w-72 mx-auto">
                <Badge badgeType="success">Success</Badge>
                <Badge badgeType="warning">Warning</Badge>
                <Badge badgeType="error">Error</Badge>
                <Badge badgeType="info">Info</Badge>

                <Badge badgeType="light">Light</Badge>
                <Badge badgeType="dark">Dark</Badge>
            </div>
            <Wave />
        </div>
    );
}

export default LoginPage;
