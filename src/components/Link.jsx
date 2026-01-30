import { useRouter } from "../hooks/useRouter";

export function Link({children, href, onClose, ...restOfProps}) {
    const { navigateTo } = useRouter();

    const handleNavigate = (event) => {
        event.preventDefault();

        if (typeof onClose === "function") onClose(); // Close Menu Mobile

        navigateTo(href);
    }

    return <a href={href} {...restOfProps} onClick={handleNavigate}>{children}</a>
}