import styles from './Navbar.module.css'
import { Link } from '../../Link/Link.jsx'
import { MobileMenu } from './MobileMenu/MobileMenu.jsx'
import { useState } from 'react'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpenMenu = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.linksContainer}>
                <Link className={styles.navLink} href="/">Home</Link>
                <Link className={styles.navLink} href="/empleos">Empleos</Link>
            </div>
            <span onClick={toggleOpenMenu} className={`${styles.menuBtn} material-symbols-outlined`}>menu</span>
            { isOpen && <MobileMenu /> }
        </nav>
        
    )
}
