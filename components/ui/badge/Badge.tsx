import { cn } from "@/utils";

interface Props {
    className?: string;
    children?: React.ReactNode;
    badgeType?: "info" | "success" | "warning" | "error" | "light" | "dark";
}

const Badge = ({ className, children, badgeType = "info" }: Props) => {
    // Define color classes based on badgeType
    let badgeColorClass = "";

    switch (badgeType) {
        case "success":
            badgeColorClass = "bg-emerald-100 text-emerald-600";
            break;

        case "warning":
            badgeColorClass = "bg-orange-100 text-orange-600";
            break;

        case "error":
            badgeColorClass = "bg-rose-100 text-rose-600";
            break;

        case "info":
            badgeColorClass = "bg-blue-100 text-blue-600";
            break;

        case "light":
            badgeColorClass = "bg-zinc-200 text-zinc-700";
            break;

        case "dark":
            badgeColorClass = "bg-zinc-700 text-white";
            break;
    }

    return (
        <div
            className={cn(
                `inline-flex items-center justify-center gap-2
                text-xs font-semibold transition-colors rounded-md border-none px-2 py-1 
                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 
            ${badgeColorClass}`,
                className
            )}>
            {children}
        </div>
    );
};

export default Badge;
