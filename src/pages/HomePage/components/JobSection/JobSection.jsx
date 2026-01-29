import styles from './JobSection.module.css'

export function JobSection () {
    return (
        <section className={styles.jobSection}>
            <div className={styles.jobSectionWrapper}>
                <video className={styles.jobSectionVideo} autoPlay muted loop playsInline preload="auto">
                    <source src="/job-video.webm" type="video/webm" />
                    Tu navegador no sooprta video HTML5.
                </video>
                <div className={styles.jobSectionDescription}>
                    <h4>Accedé a nuestra <span className="marked-span">bolsa de trabajo exclusiva</span></h4>
                    <p>Te acompañamos en tu desarrollo profesional desde el primer día, brindándote acceso a oportunidades laborales reales, orientación personalizada y contacto directo con empresas que buscan nuevos talentos en tecnología. Nuestro objetivo es ayudarte a dar el salto al mundo laboral con mayor seguridad y preparación.</p>
                </div>
            </div>
        </section>
    )
}