import { useState, useEffect } from "react";

export function useRouter() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }  
        window.addEventListener('popstate', handleLocationChange);
    
        return () => {
                window.removeEventListener('popstate', handleLocationChange)
            }
    }, [])

    function navigateTo(path) {
        history.pushState({}, '', path);
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        window.dispatchEvent(new PopStateEvent('popstate'))
    }



    return { currentPath, navigateTo }
}