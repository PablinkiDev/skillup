import styles from './ButtonApply.module.css'


export function ButtonApply({ text, onClick, apply }) {
    const btnStlyes = apply ? `${styles.btn} ${styles.btnApply}`: `${styles.btn}`

    return <button disabled={apply} className={btnStlyes} onClick={onClick}>{text}</button>
}