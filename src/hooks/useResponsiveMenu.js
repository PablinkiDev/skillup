import { useState, useEffect } from "react";

export function useResponsiveMenu({ minWidth = 600, defaultOpen = false } = {}) {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    
    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }
    
    useEffect(() => {
        const mq = window.matchMedia(`(min-width: ${minWidth}px)`); // Creo query
    
        const handleChange = (e) => { // Creo el handle para cuando se cumpla la query
            if (e.matches) setIsOpen(false)
        } 
    
        mq.addEventListener('change', handleChange)
    
        return () => mq.removeEventListener('change', handleChange)
    }, [minWidth])
    
    const closeMenu = () => setIsOpen(false);

    return { isOpen, toggleMenu, closeMenu }
}