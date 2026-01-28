export function Welcome() {
    const handleButton = () => {
        window.location.href = "/#cursos";
    }

    return (
        <div className="welcome-container">
            <div className="welcome-info">
                <h1>SkillUp - Tu academia favorita</h1>
                <p>¡Conviertete en un <span className="marked-span">Master Dev</span> con nosotros!</p>
            </div>
            <button onClick={handleButton} className="welcome-button">Empezar mi camino</button>
            <span className="welcome-arrow">⬇</span>
        </div>
    )
}