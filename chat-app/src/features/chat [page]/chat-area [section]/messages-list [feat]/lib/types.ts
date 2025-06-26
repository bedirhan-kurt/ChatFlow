export type Message = {
    id: string;                // Mesajın benzersiz ID'si
    authorId: string;          // Yazarın kullanıcı ID'si
    authorUsername: string;    // Yazarın kullanıcı adı
    content: string;           // Mesaj içeriği
    createdAt: string;         // Mesajın gönderildiği zaman (ISO 8601 formatında)
    roomCode: string;          // Sohbet odasının kodu
};