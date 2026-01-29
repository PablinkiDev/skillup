import reviews from '../../../../../data/reviews.json'
import { ReviewCard } from '../ReviewCard/ReviewCard'
import styles from './ReviewsSection.module.css'

export function ReviewsSection() {
    return (
        <section className={styles.reviewsSection}>
            <h2 className={styles.reviewsSectionTitle}>¿Por qué <span className='marked-span'>elegir</span> a SkillUp para formarme?</h2>
            <div className={styles.reviewsContainer}>
                { reviews.map(r => {
                    return (
                        <ReviewCard
                            key={r.id}
                            id={r.id}
                            user={r.user}
                            comment={r.comment}
                            course={r.course}
                            date={r.date}
                        />
                    )
                }) }
            </div>
        </section>
    )
}