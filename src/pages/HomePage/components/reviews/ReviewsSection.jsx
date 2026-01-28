import reviews from '../../../../data/reviews.json'
import { ReviewCard } from './ReviewCard'

export function ReviewsSection() {
    return (
        <section className="reviews-section">
            <h2 className='reviews-section__title'>¿Por qué <span className='marked-span'>elegir</span> a SkillUp para formarme?</h2>
            <div className='reviews-container'>
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