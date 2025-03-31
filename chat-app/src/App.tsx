import SignIn from './components/SignIn'
import Application from './components/Application'
import { BrowserRouter as Router,Routes, Route} from "react-router";
import { ThemeProvider } from "@/components/theme-provider"

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Router>
                    <Routes>
                        <Route index element={<SignIn />}></Route>
                        <Route path="/application" element={<Application />}></Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </>
    )
}

export default App

