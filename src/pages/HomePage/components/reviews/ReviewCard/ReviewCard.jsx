import styles from './ReviewCard.module.css'

export function ReviewCard({ id, user, comment, course, date }) {
    const avatarImage = `https://randomuser.me/api/portraits/men/${id}.jpg`

    return (
        <article className={styles.reviewCard}>
            <div className={styles.reviewCardHeader}>
                <img className={styles.reviewCardAvatar} src={avatarImage} alt="user" />
                <div className={styles.reviewCardUser}>
                    <h4>{user}</h4>
                    <small>{date}</small>
                </div>
            </div>
            <div className={styles.reviewCardReview}>
                <h5 className={styles.reviewCardCourse}>{course}</h5>
                <p className={styles.reviewCardComment}>{comment}</p>
            </div>
        </article>
    )
}