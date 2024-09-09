import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";

export default function AppLayout() {
    return (
        <div className="text-textMain">
            <header className="bg-mainColor lg:bg-white lg:border-b border-mainColor">
                <NavBar />
            </header>

            <main className="container mx-auto">
                <Outlet />
            </main>

            <footer className="bg-mainColor">

            </footer>
        </div>
    )
}
