import { useUser } from "@/features/chat [page]/[page-core]/hooks [core]/useUser.tsx";
import CreateRoomParams from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/lib/types.ts";
import createNewRoom from "@/features/chat [page]/rooms-menu [section]/create-room [feat]/api/createNewRoom.ts";

type CreateRoomResult = {
    createdRoomCode?: string;
    error?: string;
};

export default function useCreateRoom() {
    const { user, username } = useUser();

    const handleCreateRoom = async ({
                                        name,
                                        description,
                                        canEveryoneJoin,
                                        passwordProtection,
                                        password,
                                        limitUsers,
                                        maxMembers,
                                        expiryEnabled,
                                        expiryDate,
                                    }: CreateRoomParams): Promise<CreateRoomResult> => {
        try {
            const createdRoomCode = await createNewRoom({
                uid: user.uid,
                username,
                name,
                description,
                canEveryoneJoin,
                passwordProtection,
                password,
                limitUsers,
                maxMembers,
                expiryEnabled,
                expiryDate,
            });
            return { createdRoomCode: createdRoomCode };
        } catch (error: any) {
            console.error("Error creating room:", error);
            return { error: error.message };
        }
    };

    return { handleCreateRoom };
}