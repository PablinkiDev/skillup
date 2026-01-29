import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p style={{textAlign: 'center'}}>Aprendé, practicá y conseguí <span className="marked-span">laburo</span> · SkillUp © {new Date().getFullYear()}</p>
        </footer>
    )
}