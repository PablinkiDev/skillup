import { useState, useEffect } from "react";

export function useRouter() {
    const [path, setPath] = useState(window.location.pathname);
    
    useEffect(() => {
        const handleLocationChange = () => {
            setPath(window.location.pathname);
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



    return { path, navigateTo }
}