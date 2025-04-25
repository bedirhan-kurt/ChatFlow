/**
 * RoomsPage Component
 *
 * Responsibility:
 * Responsible for rendering the main page where users can join or create chat rooms.
 * This component provides a user interface with options to join an existing room
 * or create a new room. It is structured with a vertical layout and leverages
 * context for managing room-related state.
 *
 * Features:
 * - Displays a card for joining existing chat rooms.
 * - Displays a card for creating new chat rooms.
 * - Includes a separator with text for visual distinction between sections.
 * - Provides room-related context to child components.
 *
 * Dependencies:
 * - `JoinRoomCard` for the join room functionality.
 * - `CreateRoomCard` for the create room functionality.
 * - `SeparatorWithText` for visual separation between sections.
 * - `RoomContextProvider` for managing room-related state and context.
 *
 * @component
 * @returns {TSX.Element} The rendered RoomsPage component.
 */

import JoinRoomCard from "@/features/rooms/components/JoinRoom/JoinRoomCard.tsx";
import SeparatorWithText from "@/shared/components/ui/separator-with-text.tsx";
import CreateRoomCard from "@/features/rooms/components/CreateRoom/CreatRoomCard.tsx";
import {RoomContextProvider} from "@/features/rooms/hooks/useCreateRoom.tsx";

export default function RoomsPage() {
    return (
        <RoomContextProvider>
            <div className='flex flex-col items-center justify-center gap-6 h-screen'>
                <JoinRoomCard/>
                <SeparatorWithText/>
                <CreateRoomCard/>
            </div>
        </RoomContextProvider>
    );
};