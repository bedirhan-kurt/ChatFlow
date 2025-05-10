import React from "react";
import {
    AlertDialog as BaseAlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/shared/components/ui/alert-dialog.tsx";

type AlertModalProps = {
    trigger: React.ReactNode;
    title: string;
    description?: string;
    content?: React.ReactNode | string;
    cancelText?: string;
    actionText?: string;
    action?: () => void;
};

export default function AlertDialog({
                                       trigger,
                                       title,
                                       description,
                                       content,
                                       cancelText = "Cancel",
                                       actionText = "Confirm",
                                       action
                                   }: AlertModalProps) {
    return (
        <BaseAlertDialog>
            <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    {description && <AlertDialogDescription>{description}</AlertDialogDescription>}
                </AlertDialogHeader>

                {content && <div className="py-2">{content}</div>}

                {(cancelText || actionText) && (
                    <AlertDialogFooter>
                        {cancelText && <AlertDialogCancel>{cancelText}</AlertDialogCancel>}
                        {actionText && (
                            <AlertDialogAction onClick={action}>
                                {actionText}
                            </AlertDialogAction>
                        )}
                    </AlertDialogFooter>
                )}
            </AlertDialogContent>
        </BaseAlertDialog>
    );
}