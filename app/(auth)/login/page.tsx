import { Wave } from "@/components/images";
import {
    Badge,
    Button,
    FloatLabelInput,
    Input,
    Switch,
    TextArea,
} from "@/components/ui";

function LoginPage() {
    return (
        <div>
            <h1>LoginPage</h1>

            <div className="space-y-4">
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
                <div className="grid grid-cols-3 gap-4 w-72 mx-auto">
                    <Badge badgeType="success">Success</Badge>
                    <Badge badgeType="warning">Warning</Badge>
                    <Badge badgeType="error">Error</Badge>
                    <Badge badgeType="info">Info</Badge>

                    <Badge badgeType="light">Light</Badge>
                    <Badge badgeType="dark">Dark</Badge>
                </div>
                <div className="flex items-center justify-center gap-4 w-72 mx-auto">
                    <Switch id="switch-1" label="swi 1" />
                    <Switch id="switch-2" label="swi 2" defaultChecked />
                    <Switch id="switch-3" label="swi 3" disabled />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 w-72 mx-auto">
                    <Input
                        label="TextArea"
                        uniqueId="text-area-1"
                        placeholder="Type here..."
                        error="This is an error message"
                    />
                    <Input
                        label="TextArea"
                        uniqueId="text-area-2"
                        placeholder="Type here..."
                    />
                    <Input
                        disabled
                        label="TextArea"
                        uniqueId="text-area-2"
                        placeholder="Type here..."
                    />

                    <FloatLabelInput
                        label="TextArea"
                        uniqueId="text-area-2"
                        placeholder="Type here..."
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 w-72 mx-auto">
                    <TextArea
                        label="TextArea"
                        uniqueId="text-area-1"
                        placeholder="Type here..."
                        error="This is an error message"
                    />
                    <TextArea
                        label="TextArea"
                        uniqueId="text-area-2"
                        placeholder="Type here..."
                    />
                </div>
            </div>

            <Wave />
        </div>
    );
}

export default LoginPage;
