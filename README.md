

# ChatFlow

ChatFlow is a real-time chat application that allows users to create and join chat rooms, send messages, and interact with other users. The application features a modern, responsive UI with dark mode support and various chat features.

## Features

- **User Authentication**: Secure sign-in and authentication system
- **Real-time Messaging**: Instant message delivery and updates
- **Chat Rooms**: Create and join chat rooms with unique codes
- **User Settings**: Customize username and profile settings
- **Dark Mode**: Toggle between light and dark themes
- **Profanity Filter**: Automatic detection and filtering of inappropriate content
- **Emoji Support**: Add emojis to your messages
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- **Frontend**:
  - React 19
  - TypeScript
  - Vite (build tool)
  - React Router (navigation)
  - Tailwind CSS (styling)
  - Radix UI (UI components)
  - React Hook Form (form handling)
  - Zod (validation)

- **Backend**:
  - Firebase Authentication (user management)
  - Firestore (database)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ChatFlow.git
   cd ChatFlow
   ```

2. Install dependencies:
   ```bash
   cd chat-app
   npm install
   ```

3. Create a Firebase project and update the configuration in `src/shared/api/firebaseConfig.ts` with your own Firebase credentials.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Sign in to the application using your credentials
2. Create a new chat room or join an existing one using a room code
3. Start chatting with other users in the room
4. Use the settings menu to customize your profile and preferences

## Project Structure

- `src/app`: Application-level components and pages
- `src/features`: Feature-based organization of code
  - `auth [page]`: Authentication-related features
  - `chat [page]`: Chat functionality and UI
  - `rooms [page]`: Room management features
- `src/shared`: Shared components, utilities, and API configurations

## License

This project is licensed under the terms of the license included in the repository.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
