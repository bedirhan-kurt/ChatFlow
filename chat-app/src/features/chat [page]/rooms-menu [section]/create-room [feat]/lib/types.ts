type CreateRoomParams = {
    uid?: string;
    username?: string;
    name: string;
    description: string;
    canEveryoneJoin: boolean;
    passwordProtection: boolean;
    password?: string;
    limitUsers: boolean;
    maxMembers?: string | null;
    expiryEnabled: boolean;
    expiryDate?: string;
};

export default CreateRoomParams;