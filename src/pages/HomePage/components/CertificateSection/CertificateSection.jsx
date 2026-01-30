import styles from './CertificateSection.module.css'

export function CertificateSection () {
    return (
        <div className={styles.certificateWrapper}>
            <section className={styles.certificateSection}>
                <img src="/certificate.webp" alt="" />
                <div>
                    <h3 className="marked-span">Certificación profesional de alto nivel</h3>
                    <p className='description'>Nuestros certificados están diseñados bajo estándares profesionales y respaldados por contenidos actualizados, proyectos reales y una formación práctica que te prepara para el mundo laboral al nivel de las mejores instituciones.</p>
                </div>
            </section>
        </div>
    )
}