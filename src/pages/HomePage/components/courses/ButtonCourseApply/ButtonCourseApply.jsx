import styles from './ButtonCourseApply.module.css'

export function ButtonCourseApply({text, onClick, isApply}) {
    const btnStyles = isApply ? `${styles.courseBtn} ${styles.courseApply}` : `${styles.courseBtn} ${styles.courseNotApply}`
    return (
        <button 
            className={btnStyles} 
            onClick={onClick}
            disabled={isApply}
        >{text}</button>
    )
}