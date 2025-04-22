import SignIn from './pages/SignIn.tsx'
import { BrowserRouter as Router,Routes, Route} from "react-router";
import { ThemeProvider } from "@/components/app-options/theme-provider.tsx"
import ChatPage from "@/pages/ChatPage.tsx";
import AuthRequired from "@/components/auth/AuthRequired.tsx";
import {UserProvider} from "@/hooks/useUser.tsx";
import RememberUser from "@/components/auth/NavigateSignIn.tsx";
import RoomsPage from "@/pages/RoomsPage.tsx";

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <UserProvider>
                    <Router>
                        <Routes>
                            <Route element={<RememberUser />}>
                                <Route index element={<SignIn />}></Route>
                            </Route>
                            <Route element={<AuthRequired />}>
                                <Route path="/application" element={<ChatPage />}></Route>
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

