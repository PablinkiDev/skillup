import styles from './FormContact.module.css'

export function FormContact() {
    return (
        <form className={styles.form}>
            <h2>Envianos un mensaje</h2>
            <div className={styles.inputsContainer}>
                <input className={styles.inputContact} type="text" placeholder='Nombre completo' />
                <input className={styles.inputContact} type="text" placeholder='Correo electrónico' />
                <input className={styles.inputContact} type="text" placeholder='Asunto' />
                <textarea className={styles.textAreaContact} type="text" placeholder='Tu mensaje' />
            </div>
            <button className={styles.btnSubmit}>
                Enviar Mensaje
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
            <small className={`${styles.term} description`}>Al enviar este formulario, aceptas nuestra política de privacidad y el procesamiento de tus datos personales.</small>
        </form>
    )
}