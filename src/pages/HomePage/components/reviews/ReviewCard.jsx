export function ReviewCard({ id, user, comment, course, date }) {
    const avatarImage = `https://randomuser.me/api/portraits/men/${id}.jpg`

    return (
        <article className="review-card">
            <div className="review-card__header">
                <img className="review-card__avatar" src={avatarImage} alt="user" />
                <div className="review-card__user">
                    <h4>{user}</h4>
                    <small>{date}</small>
                </div>
            </div>
            <div className="review-card__review">
                <h5 className="review-card__course">{course}</h5>
                <p className="review-card__comment">{comment}</p>
            </div>
        </article>
    )
}