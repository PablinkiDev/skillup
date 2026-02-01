import { useRouter } from "../hooks/useRouter";
import { Error404Page } from "../pages/Error404Page/Error404Page.jsx"

export function Route({ path, component: Component }) {
    const { currentPath } = useRouter();

    if (currentPath !== path) return null;
    return <Component />
}