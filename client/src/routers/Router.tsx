import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../views/Home"
import AppLayout from "../layout/AppLayout"

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/hombre' element={<>Hola</>} />
                </Route>
            </Routes>
        </Router>
    )
}
