import SignIn from './app/SignIn.tsx'
import { BrowserRouter as Router,Routes, Route} from "react-router";
import { ThemeProvider } from "@/features/chat-page/header-menu/components/dark-mode/theme-provider.tsx"
// import ChatPage from "@/app/ChatPage.tsx";
import AuthRequired from "@/features/auth-page/auth/components/AuthRequired.tsx";
import {UserProvider} from "@/features/chat-page/header-menu/hooks/useUser.tsx";
import RememberUser from "@/features/auth-page/auth/components/NavigateSignIn.tsx";
import RoomsPage from "@/app/RoomsPage.tsx";
import LadingPage from "@/app/LadingPage.tsx";
import NewChatPage from "@/app/NewChatPage.tsx";

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <UserProvider>
                    <Router>
                        <Routes>
                            <Route path="/lading" element={<LadingPage />}></Route>
                            <Route path="/newchatpage" element={<NewChatPage />}></Route>
                            <Route element={<RememberUser />}>
                                <Route index element={<SignIn />}></Route>
                            </Route>
                            <Route element={<AuthRequired />}>
                                <Route path="/room/:roomCode" element={<NewChatPage />}></Route>
                                <Route path="/rooms" element={<RoomsPage />}></Route>
                            </Route>
                        </Routes>
                    </Router>
                </UserProvider>
            </ThemeProvider>
        </>
    )
}

export default App

