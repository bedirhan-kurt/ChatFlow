import SignIn from './app/SignIn.tsx'
import { BrowserRouter as Router,Routes, Route} from "react-router";
// import ChatPage from "@/app/ChatPage.tsx";
import AuthRequired from "@/features/auth [page]/auth [feat]/components/AuthRequired.tsx";
import RememberUser from "@/features/auth [page]/auth [feat]/components/AuthRedirect.tsx";
import LadingPage from "@/app/LadingPage.tsx";
import AppPage from "@/app/AppPage.tsx";
import {UserProvider} from "@/features/chat [page]/[page-core]/context [core]/UserContext.tsx";
import {
    ThemeProvider
} from "@/features/chat [page]/header-menu [section]/dark-mode [feat]/components/theme-provider.tsx";

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <UserProvider>
                    <Router>
                        <Routes>
                            <Route path="/lading" element={<LadingPage />}></Route>
                            <Route element={<RememberUser />}>
                                <Route index element={<SignIn />}></Route>
                            </Route>
                            <Route element={<AuthRequired />}>
                                <Route path="/app/:userId" element={<AppPage />}></Route>
                            </Route>
                        </Routes>
                    </Router>
                </UserProvider>
            </ThemeProvider>
        </>
    )
}

export default App

