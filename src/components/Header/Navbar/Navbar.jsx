import styles from './Navbar.module.css'
import { Link } from '../../Link/Link.jsx'
import { MobileMenu } from './MobileMenu/MobileMenu.jsx'
import { useEffect, useState } from 'react'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpenMenu = () => {
        setIsOpen(prev => !prev);
    }

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 600px)'); // Creo query

        const handleChange = (e) => { // Creo el handle para cuando se cumpla la query
            if (e.matches) setIsOpen(false)
        } 

        mq.addEventListener('change', handleChange)

        return () => mq.removeEventListener('change', handleChange)
    }, [])

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.linksContainer}>
                <Link className={styles.navLink} href="/">Home</Link>
                <Link className={styles.navLink} href="/empleos">Empleos</Link>
            </div>
            { isOpen ? <span onClick={toggleOpenMenu} className={`${styles.menuBtn} material-symbols-outlined`}>close</span>
                :   <span onClick={toggleOpenMenu} className={`${styles.menuBtn} material-symbols-outlined`}>menu</span> }
            <MobileMenu isOpen={isOpen} onClose={closeMenu}/>
        </nav>
        
    )
}
