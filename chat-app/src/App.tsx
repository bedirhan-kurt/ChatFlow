import SignIn from './components/SignIn'
import Application from './components/Application'
import { BrowserRouter as Router,Routes, Route} from "react-router";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<SignIn />}></Route>
                    <Route path="/application" element={<Application />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
