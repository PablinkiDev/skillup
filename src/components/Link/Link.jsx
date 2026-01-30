export function Link({children, href, onClose, ...restProps}) {
    const handleNavigate = (event) => {
        event.preventDefault();

        if (typeof onClose === "function") onClose();
        
        history.pushState({}, '', href);
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

        const navigationEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navigationEvent)
    }

    return <a href={href} {...restProps} onClick={handleNavigate}>{children}</a>
}