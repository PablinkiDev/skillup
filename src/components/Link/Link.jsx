export function Link({children, href, ...restProps}) {
    const handleNavigate = (event) => {
        event.preventDefault();
        
        history.pushState({}, '', href);

        const navigationEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navigationEvent)
    }

    return <a href={href} {...restProps} onClick={handleNavigate}>{children}</a>
}