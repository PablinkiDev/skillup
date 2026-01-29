import styles from './MobileMenu.module.css'
import { Link } from '../../../Link/Link'

export function MobileMenu() {
    return (
        <div className={styles.mobileMenu}>
            <Link className={styles.navLink} href="/">Home</Link>
            <Link className={styles.navLink} href="/empleos">Empleos</Link>
        </div>
    )
}