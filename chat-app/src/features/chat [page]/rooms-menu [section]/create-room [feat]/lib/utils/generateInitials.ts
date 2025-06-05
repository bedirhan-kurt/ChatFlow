export function generateInitials(name: string) {
    const words = name.trim().split(/\s+/);

    if (words.length >= 2) {
        return (words[0][0] + words[1][0]).toUpperCase();
    } else {
        const singleWord = words[0];
        return singleWord.substring(0, 2).toUpperCase();
    }
}