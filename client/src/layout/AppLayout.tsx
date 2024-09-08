import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <div>
            <header>

            </header>

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </div>
    )
}
