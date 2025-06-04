import { Hourglass, PackageOpen } from "lucide-react";

export default function RoomsMenuStatus({
                                            isLoading,
                                            error,
                                            rooms
                                        }: {
    isLoading: boolean;
    error: Error | null;
    rooms: any[];
}) {
    if (isLoading) {
        return (
            <div className="h-full flex flex-col gap-2 items-center justify-center text-xl font-semibold">
                <Hourglass className="size-12" />
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center text-xl font-semibold text-red-600">
                <p>Error: {error.message}</p>
            </div>
        );
    }

    if (rooms.length === 0) {
        return (
            <div className="flex flex-col gap-2 items-center justify-center text-lg font-medium">
                <PackageOpen className="size-12" />
                <p>No rooms yet.</p>
            </div>
        );
    }

    return null;
}