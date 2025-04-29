import SignIn from './app/SignIn.tsx'
import { BrowserRouter as Router,Routes, Route} from "react-router";
import { ThemeProvider } from "@/features/users/components/theme-provider.tsx"
import ChatPage from "@/app/ChatPage.tsx";
import AuthRequired from "@/features/auth/components/AuthRequired.tsx";
import {UserProvider} from "@/features/users/hooks/useUser.tsx";
import RememberUser from "@/features/auth/components/NavigateSignIn.tsx";
import RoomsPage from "@/app/RoomsPage.tsx";
import TestNewChatPageUi from "@/app/TestNewChatPageUi.tsx";

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <UserProvider>
                    <Router>
                        <Routes>
                            <Route path="/newui" element={<TestNewChatPageUi />}></Route>
                            <Route element={<RememberUser />}>
                                <Route index element={<SignIn />}></Route>
                            </Route>
                            <Route element={<AuthRequired />}>
                                <Route path="/room/:roomCode" element={<ChatPage />}></Route>
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

