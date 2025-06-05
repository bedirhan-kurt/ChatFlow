export function formatRoomCode(code: string): string {
    if (code.length !== 9) {
        throw new Error("Code must be exactly 9 digits long");
    }
    return code.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
}