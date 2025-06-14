import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

import {
    MultistepForm,
    MultistepFormProvider, NextButton, PrevButton,
    ProgressBar,
    Step,
    StepContainer,
    StepControls, SubmitButton
} from "react-multistep-forms";
import { Button } from "@/shared/components/ui/button.tsx";

import { useState } from "react";
import {createRoomSchema, stepFieldsMap} from "./multistep-form-content/formSchema.ts";
import SuccessScreen
    from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/components/multistep-form-content/SuccessScreen.tsx";
import {
    StepBasicInfo
} from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/components/multistep-form-content/StepBasicInfo.tsx";
import { StepSettings } from "./multistep-form-content/StepSettings.tsx";
import {
    StepLimits
} from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/components/multistep-form-content/StepLimits.tsx";
import useCreateRoom from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/hooks/useCreateRoom.tsx";

type FormValues = z.infer<typeof createRoomSchema>;

export default function CreateRoomDialogContent() {
    const [isRoomCreated, setIsRoomCreated] = useState(false);
    const {handleCreateRoom} = useCreateRoom();

    const form = useForm<FormValues>({
        resolver: zodResolver(createRoomSchema),
        defaultValues: {
            name: "",
            description: "",
            canEveryoneJoin: false,
            passwordProtection: false,
            password: "",
            limitUsers: false,
            maxMembers: "0",
            expiryEnabled: false,
            expiryDate: "",
        },
    });

    const onSubmit = async (values: FormValues) => {
        try {
            const result = await handleCreateRoom(values);

            if (result?.error) {
                console.error("Room creation error:", result.error);
            } else {
                setIsRoomCreated(true);
                console.log(`Room created with code: ${result.createdRoomCode}`);
            }
        } catch (e) {
            console.error("Unexpected error:", e);
        }
    };

    if (isRoomCreated) {
        return (
            <SuccessScreen form={form}></SuccessScreen>
        );
    }

    return (
        <FormProvider {...form}>
                <MultistepFormProvider
                    stepFieldsMap={stepFieldsMap}
                    onSubmit={() => form.handleSubmit(onSubmit)()}
                >
                    <MultistepForm className="flex flex-col justify-between">
                        <ProgressBar type="dashed" fillColor="bg-black" trackColor="bg-gray-200"
                                     dashedSegmentRadius="rounded-full" className="my-4"/>
                        <StepContainer className="flex-1">
                            <Step title="basicInfo" hideTitle={true}><StepBasicInfo form={form}/></Step>
                            <Step title="settings" hideTitle={true}><StepSettings form={form}/></Step>
                            <Step title="limits" hideTitle={true}><StepLimits form={form}/></Step>
                        </StepContainer>
                        <StepControls className="flex justify-between mt-6">
                            <PrevButton><Button>Prev</Button></PrevButton>
                            <NextButton><Button>Next</Button></NextButton>
                            <SubmitButton>
                                <Button onClick={() => {
                                }} className="text-sm">
                                    Submit
                                </Button>
                            </SubmitButton>
                        </StepControls>
                    </MultistepForm>
                </MultistepFormProvider>
        </FormProvider>
    );
}