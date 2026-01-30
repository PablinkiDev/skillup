import styles from './MobileMenu.module.css'
import { Link } from '../../../Link/Link.jsx'
import { Logo } from '../../Logo/Logo.jsx'

export function MobileMenu({ isOpen, onClose }) {
    return (
        <div className={ isOpen ? `${styles.mobileMenu} ${styles.open}` : `${styles.mobileMenu}` }>
            <Link onClose={onClose} className={styles.navLink} href="/">Home</Link>
            <Link onClose={onClose} className={styles.navLink} href="/empleos">Empleos</Link>
            
        </div>
    )
}