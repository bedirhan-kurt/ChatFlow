import {useRoom} from "@/features/chat [page]/[page-core]/hooks [core]/useRoom.tsx";
import {useEffect, useState} from "react";
import {Room} from "@/features/chat [page]/rooms-menu [section]/joined-room-list [feat]/lib/types.ts";
import {
    fetchActiveRoomsData
} from "@/features/chat [page]/header-menu [section]/room-info [feat]/api/fetchActiveRoomsData.ts";
import {toMonthAndYear} from "@/features/chat [page]/header-menu [section]/room-info [feat]/lib/utils.ts";


export default function RoomInfo() {
    const { roomCode, loading, error } = useRoom();
    const [activeRoomData, setActiveRoomData] = useState<Room | undefined>();

    useEffect(() => {
        fetchActiveRoomsData(roomCode)
            .then(data => {
                if (typeof data === 'string') {
                    console.error(data);
                    setActiveRoomData(undefined);
                } else {
                    setActiveRoomData(data);
                }
            })
            .catch(error => {
                console.error("Failed to fetch room data:", error);
                setActiveRoomData(undefined);
            });
    }, [roomCode]);

    return (
        <div className="flex w-2/5 justify-between items-center">
            <div className="flex flex-col">
                {activeRoomData ? (
                    <>
                        <span className="text-lg font-semibold">{activeRoomData.name}</span>
                        <span className="text-sm text-gray-500">{activeRoomData.roomCode}</span>
                    </>
                ) : loading ? (
                    <span className="text-sm text-gray-500">Loading room data...</span>
                ) : error ? (
                    <span className="text-sm text-gray-500">Something went wrong.</span>
                ) : null}
            </div>
            <div className="flex flex-col items-end">
                {activeRoomData ? (
                    <>
                        <span className="text-xs text-gray-500">{activeRoomData.members.length} members</span>
                        <span className="text-xs text-gray-500">Created at {toMonthAndYear(activeRoomData.createdAt)}</span>
                    </>
                ) : null}
            </div>
        </div>
    );
}