// Responsible for checking chat data and rendering the appropriate message

export default function MessageBoardStatus({isLoading, error, messages}: { isLoading: boolean; error: Error | null; messages: any[] }) {
    return (
        <>
            {isLoading ? (
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                    <p>Error: {error.message}</p>
                </div>
            ) : messages.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                    <p>No messages yet.</p>
                </div>
            ) : null}
        </>
    );
}