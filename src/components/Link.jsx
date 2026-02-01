import { useRouter } from "../hooks/useRouter";
import styles from './Link.module.css'

export function Link({children, href, onClose, isLogo, className = "", ...restOfProps}) {
    const { navigateTo, currentPath } = useRouter();

    const handleNavigate = (event) => {
        event.preventDefault();

        if (typeof onClose === "function") onClose(); // Close Menu Mobile

        navigateTo(href);
    }

    const isActive = currentPath === href && !isLogo;

    return (
        <a 
            href={href} 
            onClick={handleNavigate}
            className={`${className} ${isActive ? `${styles.active}` : ''}`}
            {...restOfProps} 
        >
            {children}
        </a>
    )
}