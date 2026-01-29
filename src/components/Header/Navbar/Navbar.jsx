import styles from './Navbar.module.css'

export function Navbar() {
    return (
        <nav className="nav">
            <div className={styles.linksContainer}>
                <a className={styles.navLink} href="/">Formación</a>
                <a className={styles.navLink} href="/empleos">Empleos</a>
                <a className={styles.navLink} href="/#faq">FAQ</a>
            </div>
            <span className={`${styles.menuBtn} material-symbols-outlined`}>menu</span>
        </nav>
    )
}
