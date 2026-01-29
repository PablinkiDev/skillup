import styles from './FaqItem.module.css'

export function FaqItem({ question, answer }) {
    return (
        <details className={styles.faqQuestion}>
            <summary>▼ {question}</summary>
            <div className={styles.faqContent}>{answer}</div>
        </details>
    )
}