import styles from './Navbar.module.css'
import { Link } from '../../Link.jsx';
import { MobileMenu } from './MobileMenu/MobileMenu.jsx'
import { useResponsiveMenu } from '../../../hooks/useResponsiveMenu.js'


export function Navbar() {
    const { isOpen, toggleMenu, closeMenu } = useResponsiveMenu();

    return (
        <nav className={styles.nav}>
            <div className={styles.linksContainer}>
                <Link className={styles.navLink} href="/">Home</Link>
                <Link className={styles.navLink} href="/empleos">Empleos</Link>
                <Link className={styles.navLink} href="/contacto">Contacto</Link>
                <Link className={styles.navLink} href="/test">Test</Link>
            </div>
            { isOpen ? <span onClick={toggleMenu} className={`${styles.menuBtn} material-symbols-outlined`}>close</span>
                :   <span onClick={toggleMenu} className={`${styles.menuBtn} material-symbols-outlined`}>menu</span> }
            <MobileMenu isOpen={isOpen} onClose={closeMenu}/>
        </nav>
        
    )
}
