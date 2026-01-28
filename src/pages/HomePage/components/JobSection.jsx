export function JobSection () {
    return (
        <section className="job-section">
            <div className="job-section-wrapper">
                <video className="job-section__video" autoPlay muted loop playsInline preload="auto">
                    <source src="/job-video.webm" type="video/webm" />
                    Tu navegador no sooprta video HTML5.
                </video>
                <div className="job-section__description">
                    <h4>Accedé a nuestra <span className="marked-span">bolsa de trabajo exclusiva</span></h4>
                    <p>Te acompañamos en tu desarrollo profesional desde el primer día, brindándote acceso a oportunidades laborales reales, orientación personalizada y contacto directo con empresas que buscan nuevos talentos en tecnología. Nuestro objetivo es ayudarte a dar el salto al mundo laboral con mayor seguridad y preparación.</p>
                </div>
            </div>
        </section>
    )
}