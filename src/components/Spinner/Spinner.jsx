import styles from './Spinner.module.css'

export function Spinner () {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={styles.spinner}>

            </div>
        </div>
    )
}