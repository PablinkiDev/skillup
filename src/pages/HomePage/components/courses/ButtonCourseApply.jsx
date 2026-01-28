export function ButtonCourseApply({text, onClick, isApply}) {
    const styles = isApply ? 'course-btn course-apply' : 'course-btn course-not-apply';

    return (
        <button 
            className={styles} 
            onClick={onClick}
            disabled={isApply}
        >{text}</button>
    )
}