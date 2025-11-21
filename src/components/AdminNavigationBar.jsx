import { Outlet, Link, NavLink } from "react-router-dom";
import Header from "./Header.jsx";
import { useState } from "react";


function AdminNavigationBar() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <nav>
            <Header>
                <nav className="navigation-bar">
                    <Link to="/">
                        <h1 className="color_white font-heading-h1">Peliculas Navegables</h1>
                    </Link>


                    <button className="md:hidden"
                     onClick={() => setOpen(!open)}>
                    ☰
                    </button>
                    <div className={`flex flex-col md:flex md:flex-row gap-4 ${open ? "block" : "hidden"} md:flex`}>
                        <NavLink to="/" onClick={() => setOpen(false)} aria-label="Inicio">Inicio</NavLink>
                        <NavLink to="/peliculas" onClick={() => setOpen(false)} aria-label="Películas">Películas</NavLink>
                        <NavLink to="/interpretes" onClick={() => setOpen(false)} aria-label="Intérpretes">Intérpretes</NavLink>
                        <NavLink to="/admin" onClick={() => setOpen(false)} aria-label="Panel de administración">Admin</NavLink>

                    </div>
                </nav>
            </Header>
            <Outlet />
        </nav>
        </>
    );
}

export default AdminNavigationBar;
