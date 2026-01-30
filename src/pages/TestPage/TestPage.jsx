import { useLocalStorage } from "../../hooks/useLocalStorage"

export function TestPage() {
    const [user, setUser] = useLocalStorage('userLogger', 'Anonimo')

    return (
        <div>
            <h1>TestPage</h1>
            <input onChange={(e) => setUser(e.target.value) } type="text" />
            <h3>Hola {user}</h3>
        </div>
    )
}