import styles from './Welcome.module.css'

export function Welcome() {
    const handleButton = () => {
        window.location.href = "/#cursos";
    }

    return (
        <div className={styles.welcomeContainer}>
            <div className={styles.welcomeInfo}>
                <h1>SkillUp - Tu academia favorita</h1>
                <p className='description'>¡Conviertete en un <span className="marked-span">Master Dev</span> con nosotros!</p>
            </div>
            <button onClick={handleButton} className={styles.welcomeButton}>Empezar mi camino</button>
            <span className={styles.welcomeArrow}>⬇</span>
        </div>
    )
}