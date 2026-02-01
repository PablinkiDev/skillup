import styles from './MobileMenu.module.css'
import { Link } from '../../../Link'

export function MobileMenu({ isOpen, onClose }) {
    return (
        <div className={ isOpen ? `${styles.mobileMenu} ${styles.open}` : `${styles.mobileMenu}` }>
            <Link onClose={onClose} className={styles.navLink} href="/">Home</Link>
            <Link onClose={onClose} className={styles.navLink} href="/empleos">Empleos</Link>
            <Link onClose={onClose} className={styles.navLink} href="/contacto">Contacto</Link>
            <Link onClose={onClose} className={styles.navLink} href="/test">Test</Link>
        </div>
    )
}