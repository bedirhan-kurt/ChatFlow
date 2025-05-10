import { AlertCircle } from "lucide-react";
import { Alert as BaseAlert, AlertDescription, AlertTitle } from "@/shared/components/ui/alert.tsx";
import React from "react";

type AlertProps = {
    variant?: "default" | "destructive";
    title: string;
    description: string;
    icon?: React.ReactNode;
    className?: string;
};

export default function Alert({ variant = "destructive", title, description, icon, className = "" }: AlertProps) {
    return (
        <BaseAlert variant={variant} className={`border-red-500 ${className}`}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription className="w-full flex flex-wrap break-words whitespace-normal text-sm">
                {icon}
                {description}
            </AlertDescription>
        </BaseAlert>
    );
};
