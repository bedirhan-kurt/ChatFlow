export const formatRoomCode = (roomCode: string | null) => {
    if (!roomCode) {
        return '';
    }
    return roomCode.match(/.{1,3}/g)?.join('-') || '';
};