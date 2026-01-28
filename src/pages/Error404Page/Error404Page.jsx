import styles from './Error404Page.module.css'

export function Error404Page() {
    return (
        <div className={styles.errorContainer}>
            <h2 className={styles.title}><span className='error'>Error 404</span> - Not Found</h2>
            <p className={styles.description}>Lo sentimos, pero la página a la que ingreso no existe</p>
            <a href='/' className={styles.button}>Volver al inicio</a>
        </div>
    )
}