import { Logo } from "./Logo"
import { Navbar } from "./Navbar"

export function Header() {
    return (
        <>
        <header className="header">
            <Logo />
            <Navbar />
        </header>
        </>

    )
}