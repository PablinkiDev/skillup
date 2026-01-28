export function Navbar() {
    return (
        <nav className="nav">
            <div className="links-container">
                <a className="nav-link" href="/">Formación</a>
                <a className="nav-link" href="/empleos">Empleos</a>
                <a className="nav-link" href="/#faq">FAQ</a>
            </div>
            <span className="menu-btn material-symbols-outlined">menu</span>
        </nav>
    )
}
