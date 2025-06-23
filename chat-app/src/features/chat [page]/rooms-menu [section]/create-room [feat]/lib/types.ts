type CreateRoomParams = {
    uid?: string;
    username?: string;
    name: string;
    description: string;
    canEveryoneJoin: boolean;
    limitUsers: boolean;
    maxMembers?: string | null;
};

export default CreateRoomParams;