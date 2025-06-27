import React from "react";
import {
    Dialog as BaseDialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/shared/components/ui/dialog.tsx";
import {Button} from "@/shared/components/ui/button.tsx";

type ModalProps = {
    trigger: React.ReactNode;
    title: string;
    description: string;
    content: React.ReactNode | string;
    actionButton?: React.ReactNode;
    closeButton?: React.ReactNode | boolean;
};

export default function Dialog({
                                  trigger,
                                  title,
                                  description,
                                  content,
                                  actionButton,
                                  closeButton
                              }: ModalProps) {
    return (
        <BaseDialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>

                <div>{content}</div>

                <DialogFooter>
                    <DialogClose asChild>
                        {closeButton === true || closeButton === undefined ? (
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        ) : (
                            closeButton
                        )}
                    </DialogClose>
                    {actionButton}
                </DialogFooter>
            </DialogContent>
        </BaseDialog>
    );
}
