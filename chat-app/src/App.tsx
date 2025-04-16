import SignIn from './components/SignIn'
import { BrowserRouter as Router,Routes, Route} from "react-router";
import { ThemeProvider } from "@/components/theme-provider"
import ChatPage from "@/components/pages/ChatPage.tsx";
import AuthRequired from "@/components/AuthRequired.tsx";

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Router>
                    <Routes>
                        <Route index element={<SignIn />}></Route>
                        <Route element={<AuthRequired />}>
                            <Route path="/application" element={<ChatPage />}></Route>
                        </Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </>
    )
}

export default App

