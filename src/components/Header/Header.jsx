import styles from './Header.module.css'
import { Logo } from "./Logo/Logo"
import { Navbar } from "./Navbar/Navbar"

export function Header() {
    return (
        <>
        <header className={styles.header}>
            <Logo />
            <Navbar />
        </header>
        </>

    )
}