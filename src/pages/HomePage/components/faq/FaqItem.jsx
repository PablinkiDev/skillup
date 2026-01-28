export function FaqItem({ question, answer }) {
    return (
        <details className="faq-question">
            <summary>▼ {question}</summary>
            <div className="faq-content">{answer}</div>
        </details>
    )
}