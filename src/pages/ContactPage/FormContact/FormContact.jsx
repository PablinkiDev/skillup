import styles from './FormContact.module.css'
import { normalizeSpaces } from '../../../utility/normalizeSpaces';
import { useState } from 'react';

export function FormContact() {
    const [isError, setError] = useState(false);
    const [isErrorMsj, setErrorMsj] = useState("");
    const [isNameError, setIsNameError] = useState(false);
    const [isTextError, setIsTextError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = normalizeSpaces(formData.get('userName'));
        const email = normalizeSpaces(formData.get('userEmail'));
        const subject = normalizeSpaces(formData.get('subject'));
        const message = normalizeSpaces(formData.get('msg'));

        const errores = [];

        console.log(name, email, subject, message);

        setError(false);
        setIsNameError(false);
        setIsTextError(false);
        setErrorMsj('');

        if (name.length < 3 || name.length > 20) {
            errores.push('El nombre debe tener entre 3 y 20 caracteres.\n')
            setIsNameError(true);
        } 

        if (message.length < 10) {
            errores.push('El mensaje es demasiado corto.\n')
            setIsTextError(true);
        }

        if (message.length > 400) {
            errores.push("El mensaje es demasiado largo.\n")
            setIsTextError(true);
        }

        if (errores.length > 0) {
            setError(true);
            setErrorMsj(errores.join('\n'))
            return;
        }

    }



    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Envianos un mensaje</h2>
            <div className={styles.inputsContainer}>
                <input style={isNameError ? {borderColor: '#f00'} : {}} name='userName' required className={styles.inputContact} type="text" placeholder='Nombre completo' />
                <input name='userEmail' required className={styles.inputContact} type="email" placeholder='Correo electrónico' />
                <input name='subject' className={styles.inputContact} type="text" placeholder='Asunto' />
                <textarea style={isTextError ? {borderColor: '#f00'} : {}} name='msg' required className={styles.textAreaContact} type="text" placeholder='Tu mensaje' />
            </div>
            <button type='submit' className={styles.btnSubmit}>
                Enviar Mensaje
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
            <small className={`${styles.term} description`}>Al enviar este formulario, aceptas nuestra política de privacidad y el procesamiento de tus datos personales.</small>
            { isError && <p style={{color: 'red', whiteSpace: 'pre-line'}}>{isErrorMsj}</p> }
        </form>
    )
}